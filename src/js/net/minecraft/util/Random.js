import t from "../../../../../libraries/long.js";
export default class e {
  static instances = 0;
  constructor(i = Date.now() % 1e9 ^ (1e3 * e.instances++)) {
    (this.multiplier = t.fromString("25214903917")),
      (this.mask = t.fromInt(1).shiftLeft(48).subtract(1)),
      (this.addend = t.fromInt(11)),
      (this.doubleUnit = 11102230246251565e-32),
      (this.maxInt = t.fromInt(2147483647)),
      (this.intMask = t.fromInt(2147483648)),
      this.setSeed(i);
  }
  nextBytes(t, e) {
    let i = 0;
    for (; i < e; ) {
      let s = this.nextInt(),
        n = Math.min(e - i, 4);
      for (; n-- > 0; ) (t[i++] = 255 & s), (s >>= 8);
    }
  }
  nextFloat() {
    return this.next(24).toNumber() / 16777216;
  }
  nextDouble() {
    return (
      this.next(26).shiftLeft(27).add(this.next(27)).toNumber() *
      this.doubleUnit
    );
  }
  nextInt(e = -1) {
    if (-1 === e) return this.next(32).toNumber();
    let i = this.next(31),
      s = e - 1;
    if ((e & s) == 0)
      i = t.fromInt(e).multiply(i).shiftRightUnsigned(31).toNumber();
    else {
      i = i.toNumber();
      for (let n = i; n - (i = n % e) + s < 0; n = this.next(31).toNumber());
    }
    return i;
  }
  nextLong() {
    return this.next(32).shiftLeft(32).add(this.next(32));
  }
  next(t) {
    let e, i;
    do
      i = (e = this.seed)
        .multiply(this.multiplier)
        .add(this.addend)
        .and(this.mask);
    while (!this._compareAndSet(e, i));
    let s = i.shiftRight(48 - t);
    return s.greaterThan(this.maxInt) ? s.or(this.intMask) : s;
  }
  _compareAndSet(t, e) {
    return !!this.seed.equals(t) && ((this.seed = e), !0);
  }
  setSeed(e) {
    let i;
    (i =
      "number" == typeof e
        ? t.fromInt(e)
        : e instanceof t
        ? e
        : t.fromString(e)),
      (this.seed = i.xor(this.multiplier).and(this.mask));
  }
}
