export default class t {
  constructor(t, s) {
    (this.x = t || 0), (this.y = s || 0);
  }
  length(s) {
    let e, r;
    return (
      (e = (s = s || new t()).x - this.x),
      (e *= e),
      (r = s.y - this.y),
      Math.sqrt(e + (r *= r))
    );
  }
}
