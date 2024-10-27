import t from "../Gui.js";
import e from "../../render/gui/FontRenderer.js";
export default class r extends t {
  constructor(t, e) {
    super(),
      (this.minecraft = t),
      (this.window = t.window),
      (this.ingameOverlay = e),
      (this.dirty = !0),
      (this.header = null),
      (this.footer = null);
  }
  renderPlayerList(t, e) {
    if (this.dirty) {
      let r = this.window.canvasPlayerList.getContext("2d");
      this.reinitialize(r, e);
    }
    t.drawImage(this.window.canvasPlayerList, 0, 0);
  }
  reinitialize(t, r) {
    this.dirty = !1;
    let i = this.minecraft.playerController
        .getNetworkHandler()
        .getPlayerInfoMap(),
      o = 0;
    for (let [l, s] of i) {
      let a = null === s.displayName ? s.profile.getUsername() : s.displayName;
      o = Math.max(o, this.getStringWidth(t, a));
    }
    let n = this.window.width,
      h = i.size,
      $ = h,
      f;
    for (f = 1; $ > 20; $ = Math.floor((h + f - 1) / f)) f++;
    let d = Math.min(f * (9 + o + 0 + 13), n - 50) / f;
    t.clearRect(0, 0, this.window.width, this.window.height);
    let _ = Math.floor(n / 2) - Math.floor((d * f + (f - 1) * 5) / 2),
      g = 10,
      w = d * f + (f - 1) * 5,
      m = null;
    if (null !== this.header)
      for (let H of (m = this.minecraft.fontRenderer.listFormattedStringToWidth(
        this.header,
        r - 50
      )))
        w = Math.max(w, this.getStringWidth(t, H));
    let T = null;
    if (null !== this.footer)
      for (let c of (T = this.minecraft.fontRenderer.listFormattedStringToWidth(
        this.footer,
        r - 50
      )))
        w = Math.max(w, this.getStringWidth(t, c));
    if (null !== m) {
      this.drawRect(
        t,
        Math.floor(r / 2) - Math.floor(w / 2) - 1,
        g - 1,
        Math.floor(r / 2) + Math.floor(w / 2) + 1,
        g + m.length * e.FONT_HEIGHT,
        "rgba(0,0,0,0.5)"
      );
      for (let u = 0; u < m.length; u++)
        this.drawCenteredString(t, m[u], Math.floor(r / 2) + 1, g),
          (g += e.FONT_HEIGHT);
      g++;
    }
    this.drawRect(
      t,
      Math.floor(n / 2) - Math.floor(w / 2) - 1,
      g - 1,
      Math.floor(n / 2) + Math.floor(w / 2) + 1,
      g + $ * e.FONT_HEIGHT,
      "rgba(0,0,0,0.5)"
    );
    let y = 0;
    for (let [N, p] of i) {
      let F = Math.floor(y / $),
        I = _ + F * d + 5 * F,
        O = g + (y % $) * e.FONT_HEIGHT;
      if (y < i.size) {
        let G = I + d - 1,
          E = null === p.displayName ? p.profile.getUsername() : p.displayName;
        this.drawRect(
          t,
          I,
          O,
          I + d - 1,
          O + (e.FONT_HEIGHT - 1),
          "rgba(255,255,255,0.13)"
        );
        {
          let R = e.FONT_HEIGHT - 1;
          this.drawRect(t, I, O, I + R, O + R, "rgb(0,0,0)"), (I += R + 1);
        }
        this.drawString(t, E, I + 1, O - (e.FONT_HEIGHT > 9 ? 0.5 : 0));
        let S = p.ping,
          x =
            S < 0
              ? 5
              : S < 150
              ? 0
              : S < 300
              ? 1
              : S < 600
              ? 2
              : S < 1e3
              ? 3
              : 4;
        this.drawSprite(
          t,
          this.ingameOverlay.textureCrosshair,
          0,
          16 + 8 * x,
          10,
          8,
          G - e.FONT_HEIGHT - 1,
          O + 1,
          10,
          8,
          "rgb(0,0,0)"
        );
      }
      y++;
    }
    if (null !== T) {
      (g = g + 9 * $ + 1),
        this.drawRect(
          t,
          Math.floor(r / 2) - Math.floor(w / 2) - 1,
          g - 1,
          Math.floor(r / 2) + Math.floor(w / 2) + 1,
          g + T.length * e.FONT_HEIGHT,
          "rgba(0,0,0,0.5)"
        );
      for (let b = 0; b < T.length; b++)
        this.drawCenteredString(t, T[b], Math.floor(r / 2) + 1, g),
          (g += e.FONT_HEIGHT);
      g++;
    }
  }
  setDirty() {
    this.dirty = !0;
  }
  setHeader(t) {
    this.header = t;
  }
  setFooter(t) {
    this.footer = t;
  }
}
