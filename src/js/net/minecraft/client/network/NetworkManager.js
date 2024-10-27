import e from "./util/ByteBuf.js";
import t from "./PacketRegistry.js";
import s from "./ProtocolState.js";
import { require as r } from "../../../../Start.js";
import o from "../../util/MissingPackets.js";
export default class i {
  static DEBUG = !1;
  static MAX_COMPRESSION = 2097152;
  constructor(e) {
    (this.minecraft = e),
      (this.socket = null),
      (this.connected = !1),
      (this.networkHandler = null),
      (this.registry = new t()),
      (this.protocolState = s.HANDSHAKE),
      (this.queue = []),
      (this.pako = r("pako")),
      (this.compressionThreshold = 0),
      (this.carryBuffer = []);
  }
  setNetworkHandler(e) {
    this.networkHandler = e;
  }
  connect(e, t, s) {
    (this.socket = new WebSocket("ws://" + s.address + ":" + s.port)),
      (this.socket.binaryType = "arraybuffer"),
      (this.socket.onopen = (e) => this._onOpen(e)),
      (this.socket.onclose = (e) => this._onClose(e)),
      (this.socket.onmessage = (e) => this._onMessage(e)),
      (this.socket.onerror = (e) => this._onError(e)),
      (this.address = e),
      (this.port = t);
  }
  _onOpen() {
    (this.connected = !0),
      this.sendProxyPacket(0, { host: this.address, port: this.port }),
      this.networkHandler.onConnect(),
      this.flushPacketQueue();
  }
  sendProxyPacket(e, t) {
    this.socket.send(JSON.stringify({ id: e, payload: t }));
  }
  sendPacket(e) {
    this.connected ? this._sendPacketImmediately(e) : this.queue.push(e);
  }
  _sendPacketImmediately(t) {
    let s = this.registry.getPacketState(t);
    if (s !== this.protocolState) {
      if (null === s) {
        console.error(
          "[Network] Tried to send unknown packet: " + t.constructor.name
        );
        return;
      }
      this.setState(s);
    }
    let r = new e();
    if (
      (r.writeByte(this.registry.getClientBoundPacketId(this.protocolState, t)),
      t.write(r),
      r.setPosition(0),
      0 !== this.compressionThreshold)
    ) {
      let o = r.length();
      if (o > this.compressionThreshold) {
        let n = this.pako.deflate(r.getArray(), { chunkSize: 8192 });
        (r = new e()).writeVarInt(o), r.write(n);
      } else {
        let a = r.getArray();
        (r = new e()).writeVarInt(0), r.write(a);
      }
      r.setPosition(0);
    }
    let h = new e();
    h.writeVarInt(r.length()),
      h.write(r.getArray()),
      this.isEncrypted && (h = new e(this.encryption.encrypt(h.getArray()))),
      this.socket.send(h.getArray()),
      i.DEBUG && console.log("[Network] [OUT] " + t.constructor.name);
  }
  _onMessage(t) {
    try {
      let s = new Uint8Array(t.data);
      this.isEncrypted && (s = this.decryption.decrypt(s));
      let r = new e(new Int8Array([]));
      for (
        r.write(this.carryBuffer),
          r.write(s),
          r.setPosition(0),
          this.carryBuffer = [];
        r.readableBytes() > 0;

      ) {
        let o = [0, 0, 0],
          i = r.getPosition();
        for (let n = 0; n < o.length; n++)
          if (((o[n] = r.readByte()), o[n] >= 0)) {
            let a = new e(o).readVarInt();
            if (0 === a) throw Error("Empty Packet!");
            if (r.readableBytes() < a) {
              r.setPosition(i), (this.carryBuffer = r.getSlicedArray());
              return;
            }
            this.handlePacket(new e(r.getSlicedArray(a))), r.skipBytes(a);
            break;
          }
      }
    } catch (h) {
      console.error(h), console.log(h.stack);
    }
  }
  handlePacket(t) {
    if (0 !== this.compressionThreshold) {
      let s = t.readVarInt();
      if (0 !== s) {
        if (s < this.compressionThreshold)
          throw Error(
            "Badly compressed packet - size of " +
              s +
              " is below server threshold of " +
              this.compressionThreshold
          );
        if (s > i.MAX_COMPRESSION)
          throw Error(
            "Badly compressed packet - size of " +
              s +
              " is larger than protocol maximum of " +
              i.MAX_COMPRESSION
          );
        if (
          (t = new e(
            this.pako.inflate(new Uint8Array(t.getSlicedArray()), {
              chunkSize: 8192,
            })
          )).length() !== s
        )
          throw Error(
            "Badly compressed packet - decompressed size of " +
              t.length() +
              " is not equal to original size of " +
              s
          );
      }
    }
    let r = t.readByte(),
      n = this.registry.getServerBoundById(this.protocolState, r);
    if (null === n) {
      i.DEBUG &&
        console.log(
          "[Network] [IN] Unknown packet id: " +
            r +
            " (0x" +
            r.toString(16) +
            ") (" +
            new o().get(r) +
            ")"
        );
      return;
    }
    i.DEBUG && console.log("[Network] [IN] " + n.name);
    let a = new n();
    a.read(t, t.length), a.handle(this.networkHandler);
  }
  _onError(e) {
    console.error("[Network] Error: " + e.data);
  }
  _onClose(e) {
    this.connected && this.networkHandler.onDisconnect(), (this.connected = !1);
  }
  close() {
    (this.connected = !1),
      this.socket.close(),
      this.networkHandler.onDisconnect();
  }
  isConnected() {
    return this.connected;
  }
  flushPacketQueue() {
    this.queue.forEach((e) => this.sendPacket(e)), (this.queue = []);
  }
  enableEncryption(e) {
    (this.isEncrypted = !0),
      (this.decryption = new (r("aesjs").ModeOfOperation.cfb)(e, e, 1)),
      (this.encryption = new (r("aesjs").ModeOfOperation.cfb)(e, e, 1));
  }
  setState(e) {
    console.log(
      "[Network] Switching protocol state from " +
        this.protocolState.getName() +
        " to " +
        e.getName()
    ),
      (this.protocolState = e);
  }
  getState() {
    return this.protocolState;
  }
  setCompressionThreshold(e) {
    console.log("[Network] Set compression threshold to " + e),
      e >= 0
        ? (this.compressionThreshold = e)
        : (this.compressionThreshold = 0);
  }
}
