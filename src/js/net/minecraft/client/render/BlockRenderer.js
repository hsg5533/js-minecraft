import e from "../../util/EnumBlockFace.js";
import t from "../../util/BlockRenderType.js";
import r from "./Tessellator.js";
import o from "../../util/MathHelper.js";
import s from "../world/block/Block.js";
export default class l {
  constructor(e) {
    (this.worldRenderer = e),
      (this.tessellator = new r()),
      this.tessellator.bindTexture(e.textureTerrain);
  }
  renderBlock(e, r, o, s, l, a) {
    switch (r.getRenderType()) {
      case t.BLOCK:
        this.renderSolidBlock(e, r, o, s, l, a);
        break;
      case t.TORCH:
        this.renderTorch(e, r, s, l, a);
    }
  }
  renderSolidBlock(t, r, o, s, l, a) {
    let d = r.getBoundingBox(t, s, l, a),
      i = e.values();
    for (let n = 0; n < i.length; n++) {
      let c = i[n];
      (null === t || r.shouldRenderFace(t, s, l, a, c)) &&
        this.renderFace(t, r, d, c, o, s, l, a);
    }
  }
  renderFace(e, t, r, o, s, l, a, d) {
    let i = l + r.minX,
      n = a + r.minY,
      c = d + r.minZ,
      h = l + r.maxX,
      $ = a + r.maxY,
      B = d + r.maxZ,
      _ = t.getTextureForFace(o),
      k = (_ % 16) / 16,
      C = Math.floor(_ / 16) / 16,
      g = C + 0.0625;
    (C = 1 - C), (g = 1 - g);
    let T = t.getColor(e, l, a, d, o),
      u = ((T >> 16) & 255) / 255,
      m = ((T >> 8) & 255) / 255,
      F = (255 & T) / 255;
    if (!s) {
      let f,
        x =
          ((0.9 / 15) *
            (null === e ? 15 : e.getTotalLightAt(i + o.x, n + o.y, c + o.z)) +
            0.1) *
          o.getShading();
      this.tessellator.setColor(u * x, m * x, F * x);
    }
    this.addFace(
      e,
      o,
      s,
      l >> 4,
      a >> 4,
      d >> 4,
      i,
      n,
      c,
      h,
      $,
      B,
      k,
      C,
      k + 0.0625,
      g,
      u,
      m,
      F
    );
  }
  addFace(t, r, o, s, l, a, d, i, n, c, h, $, B, _, k, C, g = 1, T = 1, u = 1) {
    r === e.BOTTOM &&
      (this.addBlockCorner(t, r, o, s, l, a, c, i, $, k, C, g, T, u),
      this.addBlockCorner(t, r, o, s, l, a, c, i, n, k, _, g, T, u),
      this.addBlockCorner(t, r, o, s, l, a, d, i, n, B, _, g, T, u),
      this.addBlockCorner(t, r, o, s, l, a, d, i, $, B, C, g, T, u)),
      r === e.TOP &&
        (this.addBlockCorner(t, r, o, s, l, a, d, h, $, B, C, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, d, h, n, B, _, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, c, h, n, k, _, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, c, h, $, k, C, g, T, u)),
      r === e.NORTH &&
        (this.addBlockCorner(t, r, o, s, l, a, d, h, n, B, _, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, d, i, n, B, C, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, c, i, n, k, C, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, c, h, n, k, _, g, T, u)),
      r === e.SOUTH &&
        (this.addBlockCorner(t, r, o, s, l, a, d, h, $, k, _, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, c, h, $, B, _, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, c, i, $, B, C, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, d, i, $, k, C, g, T, u)),
      r === e.WEST &&
        (this.addBlockCorner(t, r, o, s, l, a, d, i, $, B, C, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, d, i, n, k, C, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, d, h, n, k, _, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, d, h, $, B, _, g, T, u)),
      r === e.EAST &&
        (this.addBlockCorner(t, r, o, s, l, a, c, h, $, k, _, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, c, h, n, B, _, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, c, i, n, B, C, g, T, u),
        this.addBlockCorner(t, r, o, s, l, a, c, i, $, k, C, g, T, u));
  }
  addBlockCorner(e, t, r, o, s, l, a, d, i, n, c, h, $, B) {
    r && this.setAverageBrightness(e, t, a, d, i, h, $, B),
      this.tessellator.addVertexWithUV(
        a - (o << 4),
        d - (s << 4),
        i - (l << 4),
        n,
        c
      );
  }
  setAverageBrightness(e, t, r, o, s, l = 1, a = 1, d = 1) {
    let i,
      n =
        ((0.9 / 15) * this.getAverageLightLevelAt(e, r, o, s) + 0.1) *
        t.getShading();
    this.tessellator.setColor(l * n, a * n, d * n);
  }
  getAverageLightLevelAt(e, t, r, o) {
    if (null === e) return 15;
    let l = 0,
      a = 0;
    for (let d = -1; d <= 0; d++)
      for (let i = -1; i <= 0; i++)
        for (let n = -1; n <= 0; n++) {
          let c = e.getBlockAt(t + d, r + i, o + n),
            h = 0 === c ? null : s.getById(c);
          null === h || h.isTranslucent()
            ? ((l += e.getTotalLightAt(t + d, r + i, o + n)), a++)
            : 0 === i && a++;
        }
    return 0 === a ? 0 : l / a;
  }
  renderTorch(t, r, o, s, l) {
    let a = o >> 4,
      d = s >> 4,
      i = l >> 4,
      n = 1 / 16,
      c = 0,
      h = 0;
    if (null != t)
      switch (t.getBlockDataAt(o, s, l)) {
        case 1:
          c = -0.2;
          break;
        case 2:
          c = 0.2;
          break;
        case 3:
          h = -0.2;
          break;
        case 4:
          h = 0.2;
      }
    let $ = 0.5 + 1.5 * c,
      B = 0.5 + 1.5 * h;
    (0 !== c || 0 !== h) && (s += 0.2);
    let _ = o + $ - n,
      k = s,
      C = l + B - n,
      g = o + $ + n,
      T = s + 0.625,
      u = l + B + n,
      m = r.getTextureForFace(e.NORTH),
      F = (m % 16) / 16,
      f = Math.floor(m / 16) / 16,
      x = (F += 7 / 256) + 2 / 256,
      O = (f += 6 / 256) + 10 / 256;
    (f = 1 - f),
      (O = 1 - O),
      this.tessellator.setColor(1, 1, 1),
      this.addDistortFace(
        t,
        e.NORTH,
        !1,
        a,
        d,
        i,
        _,
        k,
        C,
        g,
        T,
        u,
        F,
        f,
        x,
        O,
        c,
        h
      ),
      this.addDistortFace(
        t,
        e.EAST,
        !1,
        a,
        d,
        i,
        _,
        k,
        C,
        g,
        T,
        u,
        F,
        f,
        x,
        O,
        c,
        h
      ),
      this.addDistortFace(
        t,
        e.SOUTH,
        !1,
        a,
        d,
        i,
        _,
        k,
        C,
        g,
        T,
        u,
        F,
        f,
        x,
        O,
        c,
        h
      ),
      this.addDistortFace(
        t,
        e.WEST,
        !1,
        a,
        d,
        i,
        _,
        k,
        C,
        g,
        T,
        u,
        F,
        f,
        x,
        O,
        c,
        h
      ),
      this.addFace(
        t,
        e.TOP,
        !1,
        a,
        d,
        i,
        _,
        k,
        C,
        g,
        T,
        u,
        F,
        f,
        x,
        O + 8 / 256
      );
  }
  addDistortFace(t, r, o, s, l, a, d, i, n, c, h, $, B, _, k, C, g, T) {
    r === e.NORTH &&
      (this.addBlockCorner(t, r, o, s, l, a, d, h, n, B, _),
      this.addBlockCorner(t, r, o, s, l, a, d + g, i, n + T, B, C),
      this.addBlockCorner(t, r, o, s, l, a, c + g, i, n + T, k, C),
      this.addBlockCorner(t, r, o, s, l, a, c, h, n, k, _)),
      r === e.SOUTH &&
        (this.addBlockCorner(t, r, o, s, l, a, d, h, $, k, _),
        this.addBlockCorner(t, r, o, s, l, a, c, h, $, B, _),
        this.addBlockCorner(t, r, o, s, l, a, c + g, i, $ + T, B, C),
        this.addBlockCorner(t, r, o, s, l, a, d + g, i, $ + T, k, C)),
      r === e.WEST &&
        (this.addBlockCorner(t, r, o, s, l, a, d + g, i, $ + T, B, C),
        this.addBlockCorner(t, r, o, s, l, a, d + g, i, n + T, k, C),
        this.addBlockCorner(t, r, o, s, l, a, d, h, n, k, _),
        this.addBlockCorner(t, r, o, s, l, a, d, h, $, B, _)),
      r === e.EAST &&
        (this.addBlockCorner(t, r, o, s, l, a, c, h, $, k, _),
        this.addBlockCorner(t, r, o, s, l, a, c, h, n, B, _),
        this.addBlockCorner(t, r, o, s, l, a, c + g, i, n + T, B, C),
        this.addBlockCorner(t, r, o, s, l, a, c + g, i, $ + T, k, C));
  }
  renderBlockInHandThirdPerson(e, t, r) {
    this.tessellator.startDrawing(),
      this.renderBlock(null, t, !1, 0, 0, 0),
      this.tessellator.transformBrightness(r);
    let o = this.tessellator.draw(e);
    o.geometry.center(),
      (o.position.x = 0),
      (o.position.y = 9),
      (o.position.z = -5),
      (o.rotation.y = Math.PI / 4),
      (o.scale.x = 6),
      (o.scale.y = -6),
      (o.scale.z = 6);
  }
  renderBlockInFirstPerson(e, t, r) {
    this.tessellator.startDrawing(),
      this.renderBlock(null, t, !1, 0, 0, 0),
      this.tessellator.transformBrightness(r);
    let o = this.tessellator.draw(e);
    o.geometry.center(), (o.scale.x = 16), (o.scale.y = 16), (o.scale.z = 16);
  }
  renderGuiBlock(r, s, l, a, d, i) {
    this.tessellator.startDrawing(), this.tessellator.setColor(1, 1, 1);
    let n = s.getBoundingBox(null, 0, 0, 0);
    s.getRenderType() === t.BLOCK
      ? (this.renderFace(null, s, n, e.TOP, !1, 0, 0, 0),
        this.renderFace(null, s, n, e.NORTH, !1, 0, 0, 0),
        this.renderFace(null, s, n, e.EAST, !1, 0, 0, 0))
      : this.renderGuiItem(s),
      this.tessellator.transformBrightness(i);
    let c = this.tessellator.draw(r);
    (c.geometry.center(), s.getRenderType() === t.BLOCK)
      ? ((c.rotation.x = o.toRadians(30)), (c.rotation.y = -o.toRadians(135)))
      : ((c.rotation.y = o.toRadians(180)), (d += 5)),
      (c.position.x = l),
      (c.position.y = -a),
      (c.position.z = -10),
      (c.scale.x = d),
      (c.scale.y = d),
      (c.scale.z = d);
  }
  renderGuiItem(t) {
    let r = 1 / 256,
      o = t.getTextureForFace(e.NORTH),
      s = (o % 16) / 16,
      l = s + 0.0625,
      a = Math.floor(o / 16) / 16,
      d = a + 0.0625;
    (a = 1 - a),
      (d = 1 - d),
      (s += r),
      (l -= r),
      (a -= r),
      (d += r),
      this.addFace(null, e.NORTH, !1, 0, 0, 0, 0, 0, 0, 1, 1, 1, s, a, l, d);
  }
}
