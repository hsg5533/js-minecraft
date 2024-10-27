import t from "../../../Packet.js";
import e from "./ServerChunkDataPacket.js";
export default class r extends t {
  constructor() {
    super(), (this.overworld = !1), (this.chunkData = []);
  }
  read(t) {
    this.overworld = t.readBoolean();
    let a = t.readVarInt();
    for (let n = 0; n < a; n++) {
      let o = t.readInt(),
        h = t.readInt(),
        l = 65535 & t.readShort(),
        s = e._calculateLength(r._bitCount(l), this.overworld, !0);
      this.chunkData.push(new e(o, h, l, new Uint8Array(s)));
    }
    for (let u = 0; u < a; u++) {
      let d = this.chunkData[u].getData();
      t.read(d, d.length);
    }
  }
  handle(t) {
    t.handleMultiChunkData(this);
  }
  getChunkData() {
    return this.chunkData;
  }
  isOverworld() {
    return this.overworld;
  }
  static _bitCount(t) {
    return (
      (t -= (t >>> 1) & 1431655765),
      (t =
        ((t = (858993459 & t) + ((t >>> 2) & 858993459)) + (t >>> 4)) &
        252645135),
      (t += t >>> 8),
      63 & (t += t >>> 16)
    );
  }
}
