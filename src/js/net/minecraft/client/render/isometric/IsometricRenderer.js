import e from "./TextCoord.js";
import t from "./Point.js";
import r from "./Triangle.js";
export default class n {
  static render(e, t, r) {
    for (let o of t)
      n.drawTriangle(
        e,
        o.p0.x,
        o.p0.y,
        o.p1.x,
        o.p1.y,
        o.p2.x,
        o.p2.y,
        o.t0.u,
        o.t0.v,
        o.t1.u,
        o.t1.v,
        o.t2.u,
        o.t2.v,
        r
      );
  }
  static createTriangles(n, o, a, l, i) {
    let w = [],
      s = i.x - o.x,
      p = i.y - o.y,
      x = l.x - a.x,
      _ = l.y - a.y,
      y = n.naturalWidth,
      f = n.naturalHeight;
    for (let u = 0; u < 7; ++u) {
      let m = u / 7,
        T = (u + 1) / 7,
        c = o.x + s * m,
        $ = o.y + p * m,
        d = a.x + x * m,
        g = a.y + _ * m,
        h = o.x + s * T,
        v = o.y + p * T,
        j = a.x + x * T,
        P = a.y + _ * T;
      for (let b = 0; b < 7; ++b) {
        let C = b / 7,
          H = (b + 1) / 7,
          W = d - c,
          k = g - $,
          q = j - h,
          z = P - v,
          A = c + W * C,
          B = $ + k * C,
          D = c + (d - c) * H,
          E = $ + (g - $) * H,
          F = h + q * H,
          G = v + z * H,
          I = h + q * C,
          J = v + z * C,
          K = C * y,
          L = H * y,
          M = m * f,
          N = T * f,
          O = new r(
            new t(A - 1, B),
            new t(F + 2, G + 1),
            new t(I - 1, J + 1),
            new e(K, M),
            new e(L, N),
            new e(K, N)
          ),
          Q = new r(
            new t(A - 2, B),
            new t(D + 1, E),
            new t(F + 1, G + 1),
            new e(K, M),
            new e(L, M),
            new e(L, N)
          );
        w.push(O), w.push(Q);
      }
    }
    return w;
  }
  static drawTriangle(e, t, r, n, o, a, l, i, w, s, p, x, _, y) {
    e.save(),
      e.beginPath(),
      e.moveTo(t, r),
      e.lineTo(n, o),
      e.lineTo(a, l),
      e.closePath(),
      e.clip();
    let f = i * (_ - p) - s * _ + x * p + (s - x) * w;
    0 !== f &&
      (e.transform(
        -(w * (a - n) - p * a + _ * n + (p - _) * t) / f,
        (p * l + w * (o - l) - _ * o + (_ - p) * r) / f,
        (i * (a - n) - s * a + x * n + (s - x) * t) / f,
        -(s * l + i * (o - l) - x * o + (x - s) * r) / f,
        (i * (_ * n - p * a) + w * (s * a - x * n) + (x * p - s * _) * t) / f,
        (i * (_ * o - p * l) + w * (s * l - x * o) + (x * p - s * _) * r) / f
      ),
      y(),
      e.restore());
  }
}
