export default class t {
  constructor(t = 0, s = 0, h = 0, i = 0) {
    (this.x = t), (this.y = s), (this.z = h), (this.w = i);
  }
  addVector(s, h, i, r) {
    return new t(this.x + s, this.y + h, this.z + i, this.w + r);
  }
}
