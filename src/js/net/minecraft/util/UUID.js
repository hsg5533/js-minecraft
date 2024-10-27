import t from "../../../../../libraries/long.js";
import i from "./Random.js";
export default class s {
  constructor(t, i) {
    (this.mostSigBits = t), (this.leastSigBits = i);
  }
  toString() {
    return (
      s.digits(this.mostSigBits.shiftRightUnsigned(32), 8) +
      "-" +
      s.digits(this.mostSigBits.shiftRightUnsigned(16), 4) +
      "-" +
      s.digits(this.mostSigBits, 4) +
      "-" +
      s.digits(this.leastSigBits.shiftRightUnsigned(48), 4) +
      "-" +
      s.digits(this.leastSigBits, 12)
    );
  }
  getMostSignificantBits() {
    return this.mostSigBits;
  }
  getLeastSignificantBits() {
    return this.leastSigBits;
  }
  static randomUUID() {
    let t = new i(),
      r = [];
    return (
      t.nextBytes(r, 16),
      (r[6] &= 15),
      (r[6] |= 64),
      (r[8] &= 63),
      (r[8] |= 128),
      s.fromBytes(r)
    );
  }
  static digits(i, s) {
    let r = t.fromInt(1).shiftLeft(t.fromInt(s).multiply(4));
    return r
      .or(i.and(r.add(t.fromInt(-1))))
      .toString(16)
      .substr(1);
  }
  static fromString(i) {
    let r = i.split("-");
    if (5 !== r.length) throw Error("Invalid UUID string: " + i);
    for (let e = 0; e < 5; e++) r[e] = parseInt(r[e], 16);
    let f = t.fromNumber(r[0]);
    f = (f = (f = (f = f.shiftLeft(16)).or(t.fromNumber(r[1]))).shiftLeft(
      16
    )).or(t.fromNumber(r[2]));
    let o = t.fromInt(r[3]);
    return (o = (o = o.shiftLeft(48)).or(t.fromNumber(r[4]))), new s(f, o);
  }
  static fromBytes(i) {
    let r = t.fromNumber(0),
      e = t.fromNumber(0);
    for (let f = 0; f < 8; f++) r = r.shiftLeft(8).or(t.fromInt(255 & i[f]));
    for (let o = 8; o < 16; o++) e = e.shiftLeft(8).or(t.fromInt(255 & i[o]));
    return new s(r, e);
  }
}
