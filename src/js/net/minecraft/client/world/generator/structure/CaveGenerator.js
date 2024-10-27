import t from "../../../../util/Random.js";
import { BlockRegistry as e } from "../../block/BlockRegistry.js";
import n from "../Generator.js";
export default class o extends n {
  constructor(t, e) {
    super(t, e), (this.chunkRange = 8);
  }
  generateInChunk(t, e, n) {
    let o = this.chunkRange,
      { seedX: r, seedZ: l } = this.generateSeedOffset();
    for (let a = t - o; a <= t + o; a++)
      for (let _ = e - o; _ <= e + o; _++)
        this.setSeedOffset(a, _, r, l), this.generateCave(a, _, t, e, n);
  }
  generateCave(t, e, n, o, r) {
    let l = this.random.nextInt(
      this.random.nextInt(this.random.nextInt(40) + 1) + 1
    );
    0 !== this.random.nextInt(15) && (l = 0);
    for (let a = 0; a < l; a++) {
      let _ = 16 * t + this.random.nextInt(16),
        $ = this.random.nextInt(this.random.nextInt(120) + 8),
        i = 16 * e + this.random.nextInt(16),
        s = 1;
      0 === this.random.nextInt(4) &&
        (this.generateBasicCaveAtBlock(n, o, r, _, $, i),
        (s += this.random.nextInt(4)));
      for (let f = 0; f < s; f++) {
        let x = this.random.nextFloat() * Math.PI * 2,
          h = ((this.random.nextFloat() - 0.5) * 2) / 8,
          d = 2 * this.random.nextFloat() + this.random.nextFloat();
        this.generateCaveAtBlock(n, o, r, _, $, i, d, x, h, 0, 0, 1);
      }
    }
  }
  generateBasicCaveAtBlock(t, e, n, o, r, l) {
    this.generateCaveAtBlock(
      t,
      e,
      n,
      o,
      r,
      l,
      1 + 6 * this.random.nextFloat(),
      0,
      0,
      -1,
      -1,
      0.5
    );
  }
  generateCaveAtBlock(n, o, r, l, a, _, $, i, s, f, x, h) {
    let d = 16 * n + 8,
      m = 16 * o + 8,
      g = 0,
      I = 0,
      c = new t(this.random.nextLong());
    if (x <= 0) {
      let k = 16 * this.chunkRange - 16;
      x = k - c.nextInt(Math.floor(k / 4));
    }
    let u = !1;
    -1 === f && ((f = Math.floor(x / 2)), (u = !0));
    let A = c.nextInt(Math.floor(x / 2)) + Math.floor(x / 4),
      F = 0 === c.nextInt(6);
    for (; f < x; f++) {
      let R = 1.5 + Math.sin((f * Math.PI) / x) * $,
        B = R * h,
        C = Math.cos(s),
        v = Math.sin(s);
      if (
        ((l += Math.cos(i) * C),
        (a += v),
        (_ += Math.sin(i) * C),
        F ? (s *= 0.92) : (s *= 0.7),
        (s += 0.1 * I),
        (i += 0.1 * g),
        (I *= 0.9),
        (g *= 0.75),
        (I += (c.nextFloat() - c.nextFloat()) * c.nextFloat() * 2),
        (g += (c.nextFloat() - c.nextFloat()) * c.nextFloat() * 4),
        !u && f === A && $ > 1)
      ) {
        this.generateCaveAtBlock(
          n,
          o,
          r,
          l,
          a,
          _,
          0.5 * c.nextFloat() + 0.5,
          i - 1.570796,
          s / 3,
          f,
          x,
          1
        ),
          this.generateCaveAtBlock(
            n,
            o,
            r,
            l,
            a,
            _,
            0.5 * c.nextFloat() + 0.5,
            i + 1.570796,
            s / 3,
            f,
            x,
            1
          );
        return;
      }
      if (!u && 0 === c.nextInt(4)) continue;
      let S = l - d,
        T = _ - m,
        p = x - f,
        E = $ + 2 + 16;
      if (S * S + T * T - p * p > E * E) return;
      if (
        l < d - 16 - 2 * R ||
        _ < m - 16 - 2 * R ||
        l > d + 16 + 2 * R ||
        _ > m + 16 + 2 * R
      )
        continue;
      S = Math.floor(l - R) - 16 * n - 1;
      let G = Math.floor(l + R) - 16 * n + 1;
      T = Math.floor(a - B) - 1;
      let j = Math.floor(a + B) + 1;
      p = Math.floor(_ - R) - 16 * o - 1;
      let O = Math.floor(_ + R) - 16 * o + 1;
      (S = Math.max(S, 0)),
        (G = Math.min(G, 16)),
        (T = Math.max(T, 1)),
        (j = Math.min(j, 120)),
        (p = Math.max(p, 0)),
        (O = Math.min(O, 16));
      let W = !1;
      for (let b = Math.floor(S); !W && b < G; b++)
        for (let D = Math.floor(p); !W && D < O; D++)
          for (let P = j + 1; !W && P >= T - 1; P--) {
            if (P < 0 || P >= 128) continue;
            let w = r.get(b, P, D);
            (w === e.WATER.getId() || w === e.WATER.getId()) && (W = !0),
              P !== T - 1 &&
                b !== S &&
                b !== G - 1 &&
                D !== p &&
                D !== O - 1 &&
                (P = Math.floor(T));
          }
      if (!W) {
        for (let y = Math.floor(S); y < G; y++) {
          let L = (y + 16 * n + 0.5 - l) / R;
          for (let N = Math.floor(p); N < O; N++) {
            let q = (N + 16 * o + 0.5 - _) / R,
              z = j,
              H = !1;
            for (let J = j - 1; J >= T; J--) {
              let K = (J + 0.5 - a) / B;
              if (K > -0.7 && L * L + K * K + q * q < 1) {
                let M = r.get(y, z, N);
                M === e.GRASS.getId() && (H = !0),
                  (M === e.STONE.getId() ||
                    M === e.DIRT.getId() ||
                    M === e.GRASS.getId()) &&
                    (J < 10
                      ? r.set(y, z, N, e.WATER.getId())
                      : (r.set(y, z, N, 0),
                        H &&
                          r.get(y, z - 1, N) === e.DIRT.getId() &&
                          r.set(y, z - 1, N, e.GRASS.getId())));
              }
              z--;
            }
          }
        }
        if (u) break;
      }
    }
  }
}
