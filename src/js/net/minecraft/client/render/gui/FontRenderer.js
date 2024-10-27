import $ from "../../gui/Gui.js";
import u from "../../../util/MathHelper.js";
export default class t {
  static FONT_HEIGHT = 9;
  static BITMAP_SIZE = 16;
  static FIELD_SIZE = 8;
  static COLOR_CODE_INDEX_LOOKUP = "0123456789abcdef";
  static CHAR_INDEX_LOOKUP =
    "\xc0\xc1\xc2\xc8\xca\xcb\xcd\xd3\xd4\xd5\xda\xdf\xe3\xf5ğİıŒœŞşŴŵžȇ\0\0\0\0\0\0\0 !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\0\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xef\xee\xec\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xf2\xfb\xf9\xff\xd6\xdc\xf8\xa3\xd8\xd7ƒ\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf\xae\xac\xbd\xbc\xa1\xab\xbb░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αβΓπΣσμτΦΘΩδ∞∅∈∩≡\xb1≥≤⌠⌡\xf7≈\xb0∙\xb7√ⁿ\xb2■\0";
  static COLOR_PREFIX = "\xa7";
  constructor($) {
    (this.charWidths = []),
      (this.isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      )),
      (this.texture = $.resources["gui/font.png"]);
    let u = this.createBitMap(this.texture);
    for (let e = 0; e < 256; e++)
      this.charWidths[e] =
        this.calculateCharacterWidthAt(
          u,
          e % t.BITMAP_SIZE,
          Math.floor(e / t.BITMAP_SIZE)
        ) + 2;
  }
  calculateCharacterWidthAt($, u, e) {
    for (
      let a = u * t.FIELD_SIZE + t.FIELD_SIZE - 1;
      a >= u * t.FIELD_SIZE;
      a--
    )
      for (let r = e * t.FIELD_SIZE; r < e * t.FIELD_SIZE + t.FIELD_SIZE; r++) {
        let i = (a + r * this.texture.width) * 4,
          _ = $[i],
          c = $[i + 1],
          f = $[i + 2],
          h = $[i + 3];
        if (_ > 1 || c > 1 || f > 1 || h > 1) return a - u * t.FIELD_SIZE;
      }
    return 2;
  }
  drawString($, u, t, e, a = -1, r = !0) {
    !this.isSafari && r && this.drawStringRaw($, u, t + 1, e + 1, a, !0),
      this.drawStringRaw($, u, t, e, a);
  }
  drawStringRaw(u, e, a, r, i = -1, _ = !1) {
    u.save(), (-1 !== i || _) && this.setColor(u, i, _);
    let c = ((4278190080 & i) >>> 24) / 255;
    for (let f = 0; f < e.length; f++) {
      let h = e[f],
        s = t.CHAR_INDEX_LOOKUP.indexOf(h),
        I = h.charCodeAt(0);
      if (h === t.COLOR_PREFIX && f !== e.length - 1) {
        let d = e[f + 1];
        this.setColor(u, this.getColorOfCharacter(d), _), (f += 1);
        continue;
      }
      let E = (s % t.BITMAP_SIZE) * t.FIELD_SIZE,
        o = Math.floor(s / t.BITMAP_SIZE) * t.FIELD_SIZE;
      $.drawSprite(
        u,
        this.texture,
        E,
        o,
        t.FIELD_SIZE,
        t.FIELD_SIZE,
        Math.floor(a),
        Math.floor(r),
        t.FIELD_SIZE,
        t.FIELD_SIZE,
        c
      ),
        (a += this.charWidths[I]);
    }
    u.restore();
  }
  getColorOfCharacter($) {
    let u = t.COLOR_CODE_INDEX_LOOKUP.indexOf($),
      e = (8 & u) * 8;
    return (
      ((((4 & u) >> 2) * 191 + e) << 16) |
      ((((2 & u) >> 1) * 191 + e) << 8) |
      ((1 & u) * 191 + e)
    );
  }
  getStringWidth($) {
    let u = 0;
    for (let e = 0; e < $.length; e++)
      if ($[e] === t.COLOR_PREFIX) e++;
      else {
        let a = $[e].charCodeAt(0);
        u += this.charWidths[a];
      }
    return u;
  }
  createBitMap($) {
    let u = document.createElement("canvas");
    return (
      (u.width = $.width),
      (u.height = $.height),
      u.getContext("2d").drawImage($, 0, 0, $.width, $.height),
      u.getContext("2d").getImageData(0, 0, $.width, $.height).data
    );
  }
  setColor($, t, e = !1) {
    e && (t = (16579836 & t) >> 2);
    let a = (16711680 & t) >> 16,
      r = (65280 & t) >> 8,
      i = 255 & t,
      _ = u.rgb2hsv(a, r, i),
      c = _[0] + 270,
      f = _[1],
      h = (_[2] / 255) * 100;
    this.isSafari ||
      ($.filter =
        "sepia() saturate(" +
        1e3 * f +
        "%) hue-rotate(" +
        c +
        "deg) saturate(" +
        5e3 * f +
        "%) brightness(" +
        h +
        "%) saturate(" +
        100 * f +
        "%)");
  }
  listFormattedStringToWidth($, u) {
    return $.split("\n");
  }
}
