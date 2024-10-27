import t from "../client/world/block/Block.js";
import i from "./EnumSkyBlock.js";
import h from "../client/world/World.js";
export default class s {
  constructor(t, i, h, s, e, _, g) {
    (this.type = t),
      (this.x1 = i),
      (this.y1 = h),
      (this.z1 = s),
      (this.x2 = e),
      (this.y2 = _),
      (this.z2 = g);
  }
  updateBlockLightning(s) {
    let e = this.x2 - this.x1 + 1,
      _ = this.y2 - this.y1 + 1,
      g;
    if (!(e * _ * (this.z2 - this.z1 + 1) > 32768))
      for (let o = this.x1; o <= this.x2; o++)
        for (let y = this.z1; y <= this.z2; y++) {
          if (s.blockExists(o, 0, y)) {
            if (!s.getChunkAt(o >> 4, y >> 4).loaded) return;
            for (let a = this.y1; a <= this.y2; a++) {
              if (a < 0 || a >= h.TOTAL_HEIGHT) continue;
              let l = s.getSavedLightValue(this.type, o, a, y),
                n = 0,
                r = s.getBlockAt(o, a, y),
                p = t.getById(r),
                d =
                  null === p || 0 === r ? 0 : Math.round(255 * p.getOpacity());
              0 === d && (d = 1);
              let u = 0;
              if (
                (this.type === i.SKY
                  ? s.isAboveGround(o, a, y) && (u = 15)
                  : this.type === i.BLOCK &&
                    (u = 0 === r || null === p ? 0 : p.getLightValue()),
                d >= 15 && 0 === u)
              )
                n = 0;
              else {
                let x = s.getSavedLightValue(this.type, o - 1, a, y),
                  z = s.getSavedLightValue(this.type, o + 1, a, y),
                  L = s.getSavedLightValue(this.type, o, a - 1, y),
                  f = s.getSavedLightValue(this.type, o, a + 1, y),
                  $ = s.getSavedLightValue(this.type, o, a, y - 1),
                  c = s.getSavedLightValue(this.type, o, a, y + 1);
                (n = x),
                  z > n && (n = z),
                  L > n && (n = L),
                  f > n && (n = f),
                  $ > n && (n = $),
                  c > n && (n = c),
                  (n -= d) < 0 && (n = 0),
                  u > n && (n = u);
              }
              if (l === n) continue;
              s.setLightAt(this.type, o, a, y, n);
              let b = n - 1;
              b < 0 && (b = 0),
                s.neighborLightPropagationChanged(this.type, o - 1, a, y, b),
                s.neighborLightPropagationChanged(this.type, o, a - 1, y, b),
                s.neighborLightPropagationChanged(this.type, o, a, y - 1, b),
                o + 1 >= this.x2 &&
                  s.neighborLightPropagationChanged(this.type, o + 1, a, y, b),
                a + 1 >= this.y2 &&
                  s.neighborLightPropagationChanged(this.type, o, a + 1, y, b),
                y + 1 >= this.z2 &&
                  s.neighborLightPropagationChanged(this.type, o, a, y + 1, b);
            }
          }
        }
  }
  isOutsideOf(t, i, h, s, e, _) {
    if (
      t >= this.x1 &&
      i >= this.y1 &&
      h >= this.z1 &&
      s <= this.x2 &&
      e <= this.y2 &&
      _ <= this.z2
    )
      return !0;
    if (
      t >= this.x1 - 1 &&
      i >= this.y1 - 1 &&
      h >= this.z1 - 1 &&
      s <= this.x2 + 1 &&
      e <= this.y2 + 1 &&
      _ <= this.z2 + 1
    ) {
      let g = this.x2 - this.x1,
        o = this.y2 - this.y1,
        y = this.z2 - this.z1;
      t > this.x1 && (t = this.x1),
        i > this.y1 && (i = this.y1),
        h > this.z1 && (h = this.z1),
        s < this.x2 && (s = this.x2),
        e < this.y2 && (e = this.y2),
        _ < this.z2 && (_ = this.z2);
      let a, l, n;
      if ((s - t) * (e - i) * (_ - h) - g * o * y <= 2)
        return (
          (this.x1 = t),
          (this.y1 = i),
          (this.z1 = h),
          (this.x2 = s),
          (this.y2 = e),
          (this.z2 = _),
          !0
        );
    }
    return !1;
  }
}
