import t from "../NoiseGenerator.js";
export default class s extends t {
  constructor(t) {
    super(),
      (this.offsetX = 256 * t.nextDouble()),
      (this.offsetY = 256 * t.nextDouble()),
      (this.offsetZ = 256 * t.nextDouble()),
      (this.permutations = []);
    for (let s = 0; s < 256; s++) this.permutations[s] = s;
    for (let i = 0; i < 256; i++) {
      let e = t.nextInt(256 - i) + i,
        r = this.permutations[i];
      (this.permutations[i] = this.permutations[e]),
        (this.permutations[e] = r),
        (this.permutations[i + 256] = this.permutations[i]);
    }
  }
  fade(t) {
    return t * t * t * (t * (6 * t - 15) + 10);
  }
  lerp(t, s, i) {
    return s + t * (i - s);
  }
  grad(t, s, i, e) {
    let r = 15 & t,
      h = r < 8 ? s : i,
      o;
    return (
      (o = r < 4 ? i : 12 === r || 14 === r ? s : e),
      ((1 & r) == 0 ? h : -h) + ((2 & r) == 0 ? o : -o)
    );
  }
  perlin(t, s) {
    return this.perlinXYZ(t, s, 0);
  }
  perlinXYZ(t, s, i) {
    let e = t + this.offsetX,
      r = s + this.offsetY,
      h = i + this.offsetZ,
      o = Math.floor(e),
      a = Math.floor(r),
      p = Math.floor(h);
    e < o && o--, r < a && a--, h < p && p--;
    let n = 255 & o,
      f = 255 & a,
      l = 255 & p;
    (e -= o), (r -= a), (h -= p);
    let u = this.fade(e),
      $ = this.fade(r),
      _ = this.fade(h),
      m = this.permutations[n] + f,
      d = this.permutations[m] + l,
      g = this.permutations[m + 1] + l,
      x = this.permutations[n + 1] + f,
      X = this.permutations[x] + l,
      Y = this.permutations[x + 1] + l;
    return this.lerp(
      _,
      this.lerp(
        $,
        this.lerp(
          u,
          this.grad(this.permutations[d], e, r, h),
          this.grad(this.permutations[X], e - 1, r, h)
        ),
        this.lerp(
          u,
          this.grad(this.permutations[g], e, r - 1, h),
          this.grad(this.permutations[Y], e - 1, r - 1, h)
        )
      ),
      this.lerp(
        $,
        this.lerp(
          u,
          this.grad(this.permutations[d + 1], e, r, h - 1),
          this.grad(this.permutations[X + 1], e - 1, r, h - 1)
        ),
        this.lerp(
          u,
          this.grad(this.permutations[g + 1], e, r - 1, h - 1),
          this.grad(this.permutations[Y + 1], e - 1, r - 1, h - 1)
        )
      )
    );
  }
  combined(t, s, i, e, r, h, o, a, p, n, f) {
    let l = 0,
      u = 1 / f,
      $ = -1,
      _ = 0,
      m = 0,
      d = 0,
      g = 0;
    for (let x = 0; x < r; x++) {
      let X = (s + x) * a + this.offsetX,
        Y = Math.floor(X);
      X < Y && Y--;
      let Z = 255 & Y;
      X -= Y;
      let b = this.fade(X);
      for (let c = 0; c < o; c++) {
        let D = (e + c) * n + this.offsetZ,
          j = Math.floor(D);
        D < j && j--;
        let G = 255 & j;
        D -= j;
        let I = this.fade(D);
        for (let N = 0; N < h; N++) {
          let k = (i + N) * p + this.offsetY,
            q = Math.floor(k);
          k < q && q--;
          let v = 255 & q;
          k -= q;
          let w = this.fade(k);
          if (0 === N || v !== $) {
            $ = v;
            let y = this.permutations[Z] + v,
              z = this.permutations[y] + G,
              A = this.permutations[y + 1] + G,
              B = this.permutations[Z + 1] + v,
              C = this.permutations[B] + G,
              E = this.permutations[B + 1] + G;
            (_ = this.lerp(
              b,
              this.grad(this.permutations[z], X, k, D),
              this.grad(this.permutations[C], X - 1, k, D)
            )),
              (m = this.lerp(
                b,
                this.grad(this.permutations[A], X, k - 1, D),
                this.grad(this.permutations[E], X - 1, k - 1, D)
              )),
              (d = this.lerp(
                b,
                this.grad(this.permutations[z + 1], X, k, D - 1),
                this.grad(this.permutations[C + 1], X - 1, k, D - 1)
              )),
              (g = this.lerp(
                b,
                this.grad(this.permutations[A + 1], X, k - 1, D - 1),
                this.grad(this.permutations[E + 1], X - 1, k - 1, D - 1)
              ));
          }
          let F = this.lerp(w, _, m),
            H = this.lerp(w, d, g),
            J = this.lerp(I, F, H);
          t[l++] += J * u;
        }
      }
    }
  }
}
