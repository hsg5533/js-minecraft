import t from "../../../../util/Vector3.js";
export default class i {
  constructor(i, s, r) {
    (this.position = new t(i, s, r)), (this.u = 0), (this.v = 0);
  }
  withUV(t, i) {
    return (this.u = t), (this.v = i), this;
  }
  static create(t) {
    return new i(t.x, t.y, t.z);
  }
}
