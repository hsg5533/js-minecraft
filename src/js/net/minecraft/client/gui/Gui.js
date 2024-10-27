import e from "../render/isometric/Point.js";
import r from "../render/isometric/IsometricRenderer.js";
import t from "../../util/EnumBlockFace.js";
export default class o {
  constructor(e = null) {
    this.minecraft = e;
  }
  getTexture(e) {
    return this.minecraft.resources[e];
  }
  drawCenteredString(e, r, t, o, i = -1) {
    this.minecraft.fontRenderer.drawString(
      e,
      r,
      t - this.getStringWidth(e, r) / 2,
      o,
      i
    );
  }
  drawRightString(e, r, t, o, i = -1, a = !0) {
    this.minecraft.fontRenderer.drawString(
      e,
      r,
      t - this.getStringWidth(e, r),
      o,
      i,
      a
    );
  }
  drawString(e, r, t, o, i = -1, a = !0) {
    this.minecraft.fontRenderer.drawString(e, r, t, o, i, a);
  }
  getStringWidth(e, r) {
    return this.minecraft.fontRenderer.getStringWidth(r);
  }
  drawRect(e, r, t, o, i, a, n = 1) {
    e.save(),
      (e.fillStyle = a),
      (e.globalAlpha = n),
      e.fillRect(
        Math.floor(r),
        Math.floor(t),
        Math.floor(o - r),
        Math.floor(i - t)
      ),
      e.restore();
  }
  drawGradientRect(e, r, t, o, i, a, n) {
    let l = e.createLinearGradient(r + (o - r) / 2, t, r + (o - r) / 2, i - t);
    l.addColorStop(0, a),
      l.addColorStop(1, n),
      (e.fillStyle = l),
      e.fillRect(r, t, o - r, i - t);
  }
  drawTexture(e, r, t, i, a, n, l = 1) {
    o.drawSprite(e, r, 0, 0, 256, 256, t, i, a, n, l);
  }
  drawSprite(e, r, t, i, a, n, l, d, s, c, f = 1) {
    o.drawSprite(e, r, t, i, a, n, l, d, s, c, f);
  }
  drawBackground(e, r, t, o, i = 2) {
    let a = e.createPattern(r, "repeat");
    e.save(),
      (e.filter = "brightness(28%)"),
      e.scale(i, i),
      e.rect(0, 0, t / i, o / i),
      (e.fillStyle = a),
      e.fill(),
      e.restore();
  }
  renderBlock(o, i, a, n, l) {
    let d = new e(0, -5.76),
      s = new e(0, 0),
      c = new e(0, 7.199999999999999),
      f = new e(-5.76, -2.88),
      g = new e(-5.76, 4.319999999999999),
      w = new e(5.76, -2.88),
      S = new e(5.76, 4.319999999999999),
      h = r.createTriangles(i, f, s, c, g),
      $ = r.createTriangles(i, s, w, S, c),
      m = r.createTriangles(i, f, d, w, s);
    o.save(),
      o.translate(n + 0.5, l + 0.5),
      (o.imageSmoothingEnabled = !0),
      this.renderBlockFace(o, i, a, h, t.NORTH),
      this.renderBlockFace(o, i, a, $, t.EAST),
      this.renderBlockFace(o, i, a, m, t.TOP),
      o.restore();
  }
  renderBlockFace(e, t, o, i, a) {
    let n = o.getTextureForFace(a),
      l = (n % 16) / 16,
      d = Math.floor(n / 16) / 16;
    e.save(),
      r.render(e, i, (r) =>
        this.drawSprite(e, t, 256 * l, d, 16, 16, 0, 0, 256, 256)
      ),
      e.restore();
  }
  static drawSprite(e, r, t, o, i, a, n, l, d, s, c = 1) {
    e.save(),
      (e.globalAlpha = c),
      e.drawImage(
        r,
        Math.floor(t),
        Math.floor(o),
        Math.floor(i),
        Math.floor(a),
        Math.floor(n),
        Math.floor(l),
        Math.floor(d),
        Math.floor(s)
      ),
      e.restore();
  }
}
