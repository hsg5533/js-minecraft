export default class i {
  constructor(i = 0, t = 0, m = 0, s = 0, h = 0, n = 0) {
    (this.epsilon = 0),
      (this.minX = i),
      (this.minY = t),
      (this.minZ = m),
      (this.maxX = s),
      (this.maxY = h),
      (this.maxZ = n);
  }
  width() {
    return this.maxX - this.minX;
  }
  height() {
    return this.maxY - this.minY;
  }
  depth() {
    return this.maxZ - this.minZ;
  }
  clone() {
    return new i(
      this.minX,
      this.minY,
      this.minZ,
      this.maxX,
      this.maxY,
      this.maxZ
    );
  }
  expand(t, m, s) {
    let h = this.minX,
      n = this.minY,
      a = this.minZ,
      x = this.maxX,
      e = this.maxY,
      X = this.maxZ;
    return (
      t < 0 ? (h += t) : (x += t),
      m < 0 ? (n += m) : (e += m),
      s < 0 ? (a += s) : (X += s),
      new i(h, n, a, x, e, X)
    );
  }
  grow(t, m, s) {
    return new i(
      this.minX - t,
      this.minY - m,
      this.minZ - s,
      this.maxX + t,
      this.maxY + m,
      this.maxZ + s
    );
  }
  clipXCollide(i, t) {
    if (
      i.maxY <= this.minY ||
      i.minY >= this.maxY ||
      i.maxZ <= this.minZ ||
      i.minZ >= this.maxZ
    )
      return t;
    if (t > 0 && i.maxX <= this.minX) {
      let m = this.minX - i.maxX - this.epsilon;
      m < t && (t = m);
    }
    if (t < 0 && i.minX >= this.maxX) {
      let s = this.maxX - i.minX + this.epsilon;
      s > t && (t = s);
    }
    return t;
  }
  clipYCollide(i, t) {
    if (
      i.maxX <= this.minX ||
      i.minX >= this.maxX ||
      i.maxZ <= this.minZ ||
      i.minZ >= this.maxZ
    )
      return t;
    if (t > 0 && i.maxY <= this.minY) {
      let m = this.minY - i.maxY - this.epsilon;
      m < t && (t = m);
    }
    if (t < 0 && i.minY >= this.maxY) {
      let s = this.maxY - i.minY + this.epsilon;
      s > t && (t = s);
    }
    return t;
  }
  clipZCollide(i, t) {
    if (
      i.maxX <= this.minX ||
      i.minX >= this.maxX ||
      i.maxY <= this.minY ||
      i.minY >= this.maxY
    )
      return t;
    if (t > 0 && i.maxZ <= this.minZ) {
      let m = this.minZ - i.maxZ - this.epsilon;
      m < t && (t = m);
    }
    if (t < 0 && i.minZ >= this.maxZ) {
      let s = this.maxZ - i.minZ + this.epsilon;
      s > t && (t = s);
    }
    return t;
  }
  intersects(i) {
    return (
      !(i.maxX <= this.minX) &&
      !(i.minX >= this.maxX) &&
      !(i.maxY <= this.minY) &&
      !(i.minY >= this.maxY) &&
      !(i.maxZ <= this.minZ) &&
      !(i.minZ >= this.maxZ)
    );
  }
  move(i, t, m) {
    (this.minX += i),
      (this.minY += t),
      (this.minZ += m),
      (this.maxX += i),
      (this.maxY += t),
      (this.maxZ += m);
  }
  offset(t, m, s) {
    return new i(
      this.minX + t,
      this.minY + m,
      this.minZ + s,
      this.maxX + t,
      this.maxY + m,
      this.maxZ + s
    );
  }
}
