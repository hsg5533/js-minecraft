export default class t {
  constructor(t = 0, e = 0, i = 0) {
    (this.x = t), (this.y = e), (this.z = i);
  }
  addVector(e, i, s) {
    return new t(this.x + e, this.y + i, this.z + s);
  }
  distanceTo(t) {
    return Math.sqrt(this.squareDistanceTo(t));
  }
  squareDistanceTo(t) {
    let e = t.x - this.x,
      i = t.y - this.y,
      s = t.z - this.z;
    return e * e + i * i + s * s;
  }
  getIntermediateWithXValue(e, i) {
    let s = e.x - this.x,
      h = e.y - this.y,
      $ = e.z - this.z;
    if (s * s < 10000000116860974e-23) return null;
    {
      let r = (i - this.x) / s;
      return r >= 0 && r <= 1
        ? new t(this.x + s * r, this.y + h * r, this.z + $ * r)
        : null;
    }
  }
  getIntermediateWithYValue(e, i) {
    let s = e.x - this.x,
      h = e.y - this.y,
      $ = e.z - this.z;
    if (h * h < 10000000116860974e-23) return null;
    {
      let r = (i - this.y) / h;
      return r >= 0 && r <= 1
        ? new t(this.x + s * r, this.y + h * r, this.z + $ * r)
        : null;
    }
  }
  getIntermediateWithZValue(e, i) {
    let s = e.x - this.x,
      h = e.y - this.y,
      $ = e.z - this.z;
    if ($ * $ < 10000000116860974e-23) return null;
    {
      let r = (i - this.z) / $;
      return r >= 0 && r <= 1
        ? new t(this.x + s * r, this.y + h * r, this.z + $ * r)
        : null;
    }
  }
  interpolateTo(e, i) {
    let s = this.x + (e.x - this.x) * i,
      h = this.y + (e.y - this.y) * i,
      $ = this.z + (e.z - this.z) * i;
    return new t(s, h, $);
  }
}
