import t from "../../../Packet.js";
export default class a extends t {
  constructor(t, a, s, e) {
    super(),
      (this.x = t),
      (this.z = a),
      (this.fullChunk = !0),
      (this.mask = s),
      (this.data = e);
  }
  read(t) {
    (this.x = t.readInt()),
      (this.z = t.readInt()),
      (this.fullChunk = t.readBoolean()),
      (this.mask = t.readShort()),
      (this.data = t.readByteArray());
  }
  handle(t) {
    t.handleChunkData(this);
  }
  setData(t) {
    this.data = t;
  }
  getX() {
    return this.x;
  }
  getZ() {
    return this.z;
  }
  isFullChunk() {
    return this.fullChunk;
  }
  getMask() {
    return this.mask;
  }
  getData() {
    return this.data;
  }
  static _calculateLength(t, a, s) {
    return 8192 * t + (4096 * t) / 2 + (a ? (4096 * t) / 2 : 0) + (s ? 256 : 0);
  }
}
