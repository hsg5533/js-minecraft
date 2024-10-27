import t from "./Vector3.js";
import r from "../../../../../libraries/long.js";
export default class e extends t {
  static NUM_X_BITS = 26;
  static NUM_Z_BITS = e.NUM_X_BITS;
  static NUM_Y_BITS = 64 - e.NUM_X_BITS - e.NUM_Z_BITS;
  static Y_SHIFT = e.NUM_Z_BITS;
  static X_SHIFT = e.Y_SHIFT + e.NUM_Y_BITS;
  static X_MASK = r.fromNumber(1).shiftLeft(e.NUM_X_BITS).subtract(1);
  static Y_MASK = r.fromNumber(1).shiftLeft(e.NUM_Y_BITS).subtract(1);
  static Z_MASK = r.fromNumber(1).shiftLeft(e.NUM_Z_BITS).subtract(1);
  constructor(t, r, e) {
    super(Math.floor(t), Math.floor(r), Math.floor(e));
  }
  getX() {
    return Math.floor(this.x);
  }
  getY() {
    return Math.floor(this.y);
  }
  getZ() {
    return Math.floor(this.z);
  }
  getChunkX() {
    return this.getX() >> 4;
  }
  getChunkY() {
    return this.getY() >> 4;
  }
  getChunkZ() {
    return this.getZ() >> 4;
  }
  static fromLong(t) {
    let r = t
        .shiftLeft(64 - e.X_SHIFT - e.NUM_X_BITS)
        .shiftRight(64 - e.NUM_X_BITS)
        .toNumber(),
      s = t
        .shiftLeft(64 - e.Y_SHIFT - e.NUM_Y_BITS)
        .shiftRight(64 - e.NUM_Y_BITS)
        .toNumber(),
      f = t
        .shiftLeft(64 - e.NUM_Z_BITS)
        .shiftRight(64 - e.NUM_Z_BITS)
        .toNumber();
    return new e(r, s, f);
  }
  toLong() {
    return r
      .fromNumber(this.getX())
      .and(e.X_MASK)
      .shiftLeft(e.X_SHIFT)
      .or(r.fromNumber(this.getY()).and(e.Y_MASK).shiftLeft(e.Y_SHIFT))
      .or(r.fromNumber(this.getZ()).and(e.Z_MASK).shiftLeft(0));
  }
}
