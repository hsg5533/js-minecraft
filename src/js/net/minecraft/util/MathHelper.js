export default class $ {
  static clamp($, o, r) {
    return Math.min(Math.max($, o), r);
  }
  static floor($) {
    let o = parseInt($);
    return $ < o ? o - 1 : o;
  }
  static toDegrees($) {
    return $ * (180 / Math.PI);
  }
  static toRadians($) {
    return $ * (Math.PI / 180);
  }
  static calculateCelestialAngle($, o) {
    let r = (($ % 24e3) + o) / 24e3 - 0.25;
    return (
      r < 0 && r++,
      r > 1 && r--,
      (r = 1 - (Math.cos(r * Math.PI) + 1) / 2),
      (r += (r - r) / 3)
    );
  }
  static wrapAngleTo180($) {
    return ($ %= 360) >= 180 && ($ -= 360), $ < -180 && ($ += 360), $;
  }
  static hsbToRgb($, o, r) {
    let l = 0,
      e = 0,
      t = 0;
    if (0 === o) l = e = t = Math.floor(255 * r + 0.5);
    else {
      let a = ($ - Math.floor($)) * 6,
        f = a - Math.floor(a),
        s = r * (1 - o),
        c = r * (1 - o * f),
        _ = r * (1 - o * (1 - f));
      switch (Math.floor(a)) {
        case 0:
          (l = Math.floor(255 * r + 0.5)),
            (e = Math.floor(255 * _ + 0.5)),
            (t = Math.floor(255 * s + 0.5));
          break;
        case 1:
          (l = Math.floor(255 * c + 0.5)),
            (e = Math.floor(255 * r + 0.5)),
            (t = Math.floor(255 * s + 0.5));
          break;
        case 2:
          (l = Math.floor(255 * s + 0.5)),
            (e = Math.floor(255 * r + 0.5)),
            (t = Math.floor(255 * _ + 0.5));
          break;
        case 3:
          (l = Math.floor(255 * s + 0.5)),
            (e = Math.floor(255 * c + 0.5)),
            (t = Math.floor(255 * r + 0.5));
          break;
        case 4:
          (l = Math.floor(255 * _ + 0.5)),
            (e = Math.floor(255 * s + 0.5)),
            (t = Math.floor(255 * r + 0.5));
          break;
        case 5:
          (l = Math.floor(255 * r + 0.5)),
            (e = Math.floor(255 * s + 0.5)),
            (t = Math.floor(255 * c + 0.5));
      }
    }
    return 4278190080 | (l << 16) | (e << 8) | (t << 0);
  }
  static rgb2hsv($, o, r) {
    let l = Math.max($, o, r),
      e = l - Math.min($, o, r),
      t =
        e &&
        (l === $ ? (o - r) / e : l === o ? 2 + (r - $) / e : 4 + ($ - o) / e);
    return [60 * (t < 0 ? t + 6 : t), l && e / l, l];
  }
}
