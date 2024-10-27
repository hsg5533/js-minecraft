import t from "../../../../../../../libraries/long.js";
import e from "../../../util/BlockPosition.js";
import r from "../../../util/UUID.js";
import { format as i } from "../../../../../../../libraries/chat.js";
import s from "../../../util/Vector3.js";
import a from "../../../nbt/NBTIO.js";
export default class h {
  static SEGMENT_BITS = 127;
  static CONTINUE_BIT = 128;
  constructor(t = new Uint8Array(0)) {
    (this.array = t), (this.pos = 0);
  }
  getPosition() {
    return this.pos;
  }
  setPosition(t) {
    this.pos = t;
  }
  length() {
    return this.array.length;
  }
  getArray() {
    return this.array;
  }
  getSlicedArray(t = this.array.length - this.pos) {
    return this.array.slice(this.pos, this.pos + t);
  }
  readByte(t = this.pos) {
    return (this.pos = t), this.array[this.pos++];
  }
  readUnsignedByte(t = this.pos) {
    return 255 & this.readByte(t);
  }
  readShort() {
    return (this.array[this.pos++] << 8) | this.array[this.pos++];
  }
  readInt() {
    return (
      (this.readUnsignedByte() << 24) |
      (this.readUnsignedByte() << 16) |
      (this.readUnsignedByte() << 8) |
      this.readUnsignedByte()
    );
  }
  readLong() {
    return t
      .fromNumber(this.readUnsignedByte())
      .shiftLeft(56)
      .or(t.fromNumber(this.readUnsignedByte()).shiftLeft(48))
      .or(t.fromNumber(this.readUnsignedByte()).shiftLeft(40))
      .or(t.fromNumber(this.readUnsignedByte()).shiftLeft(32))
      .or(t.fromNumber(this.readUnsignedByte()).shiftLeft(24))
      .or(t.fromNumber(this.readUnsignedByte()).shiftLeft(16))
      .or(t.fromNumber(this.readUnsignedByte()).shiftLeft(8))
      .or(t.fromNumber(this.readUnsignedByte()).shiftLeft(0));
  }
  readFloat() {
    let t = this.readInt();
    return new Float32Array(
      new Uint32Array([t, 0, 0, 0, 0, 0, 0, 0]).buffer
    )[0];
  }
  readDouble() {
    let t = this.readLong();
    return new Float64Array(
      new Uint32Array([t.low >>> 0, t.high >>> 0, 0, 0, 0, 0, 0, 0]).buffer
    )[0];
  }
  readBoolean() {
    return 0 !== this.readByte();
  }
  readString(t) {
    let e = this.readVarInt();
    if (e > 4 * t)
      throw Error(
        "Trying to read string longer than max length  (" +
          e +
          " > " +
          4 * t +
          ")"
      );
    let r = new Uint8Array(e);
    return this.read(r, e), new TextDecoder().decode(r);
  }
  writeByte(t, e = this.pos) {
    (this.pos = e), this.extendIfNeeded(1), (this.array[this.pos++] = t);
  }
  writeShort(t) {
    this.extendIfNeeded(2),
      (this.array[this.pos++] = t >> 8),
      (this.array[this.pos++] = t);
  }
  writeInt(t) {
    this.extendIfNeeded(4),
      (this.array[this.pos++] = t >> 24),
      (this.array[this.pos++] = t >> 16),
      (this.array[this.pos++] = t >> 8),
      (this.array[this.pos++] = t);
  }
  writeLong(t) {
    this.extendIfNeeded(8),
      (this.array[this.pos++] = 255 & t.shiftRightUnsigned(56).toInt()),
      (this.array[this.pos++] = 255 & t.shiftRightUnsigned(48).toInt()),
      (this.array[this.pos++] = 255 & t.shiftRightUnsigned(40).toInt()),
      (this.array[this.pos++] = 255 & t.shiftRightUnsigned(32).toInt()),
      (this.array[this.pos++] = 255 & t.shiftRightUnsigned(24).toInt()),
      (this.array[this.pos++] = 255 & t.shiftRightUnsigned(16).toInt()),
      (this.array[this.pos++] = 255 & t.shiftRightUnsigned(8).toInt()),
      (this.array[this.pos++] = 255 & t.toInt());
  }
  writeFloat(t) {
    let e = new Uint32Array(new Float32Array([t, 0, 0, 0, 0, 0, 0, 0]).buffer);
    this.writeInt(e[0]);
  }
  writeDouble(e) {
    let r = new Uint32Array(new Float64Array([e, 0, 0, 0, 0, 0, 0, 0]).buffer);
    this.writeLong(t.fromBits(r[0], r[1]));
  }
  writeString(t) {
    let e = new TextEncoder().encode(t);
    this.writeVarInt(e.length), this.write(e);
  }
  writeBoolean(t) {
    this.writeByte(t ? 1 : 0);
  }
  writeVarInt(t) {
    for (;;) {
      if ((t & ~h.SEGMENT_BITS) == 0) {
        this.writeByte(t);
        return;
      }
      this.writeByte((t & h.SEGMENT_BITS) | h.CONTINUE_BIT), (t >>>= 7);
    }
  }
  write(t) {
    this.extendIfNeeded(t.length);
    for (let e = 0; e < t.length; e++) this.array[this.pos++] = t[e];
  }
  skipBytes(t) {
    this.pos += t;
  }
  extendIfNeeded(t) {
    if (this.pos + t > this.array.length) {
      let e = this.array.length + t,
        r =
          this.array instanceof Uint8Array
            ? new Uint8Array(e)
            : new Int8Array(e);
      r.set(this.array), (this.array = r);
    }
  }
  read(t, e) {
    for (let r = 0; r < e; r++) t[r] = this.array[this.pos++];
  }
  readVarInt() {
    let t = 0,
      e = 0;
    for (;;) {
      let r = this.readByte();
      if ((r & h.CONTINUE_BIT) == 0) return t | (r << e);
      (t |= (r & h.SEGMENT_BITS) << e), (e += 7);
    }
  }
  readByteArray() {
    let t = this.readVarInt(),
      e = [];
    return this.read(e, t), new Int8Array(e);
  }
  writeByteArray(t) {
    this.writeVarInt(t.length), this.write(t);
  }
  writeBlockPosition(t) {
    this.writeLong(t.toLong());
  }
  readBlockPosition() {
    return e.fromLong(this.readLong());
  }
  readUUID() {
    return new r(this.readLong(), this.readLong());
  }
  writeUUID(t) {
    this.writeLong(t.getMostSignificantBits()),
      this.writeLong(t.getLeastSignificantBits());
  }
  readTextComponent() {
    return i(JSON.parse(this.readString(32767)));
  }
  readMetaData() {
    let t = {},
      r = 0;
    for (; 127 !== (r = this.readByte()); ) {
      let i = (224 & r) >> 5,
        a = 31 & r,
        h = null;
      switch (i) {
        case 0:
          h = this.readByte();
          break;
        case 1:
          h = this.readShort();
          break;
        case 2:
          h = this.readInt();
          break;
        case 3:
          h = this.readFloat();
          break;
        case 4:
          h = this.readString();
          break;
        case 5:
          h = this.readItem();
          break;
        case 6:
          h = new e(this.readInt(), this.readInt(), this.readInt());
          break;
        case 7:
          h = new s(this.readFloat(), this.readFloat(), this.readFloat());
          break;
        default:
          throw Error("Unknown meta data type: " + i);
      }
      t[a] = { id: a, type: i, value: h };
    }
    return t;
  }
  readItem() {
    let t = this.readShort();
    return t < 0
      ? null
      : (this.readByte(), this.readShort(), this.readNBT(), t);
  }
  readNBT() {
    let t = this.getPosition();
    return 0 === this.readByte()
      ? null
      : (this.setPosition(t), a.readTag(this));
  }
  readableBytes() {
    return this.array.length - this.pos;
  }
  toString() {
    return Array.from(this.array, (t) =>
      ("0" + (255 & t).toString(16)).slice(-2)
    ).join("");
  }
}
