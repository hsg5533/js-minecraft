import e from "../Particle.js";
export default class t extends e {
  constructor(e, t, r, o, c, x, f, l, s) {
    super(e, t, r, o, c, x, f, l);
    let a = s.getParticleColor(t, r, o, c),
      i = (a >> 16) & 255,
      u = (a >> 8) & 255,
      $ = 255 & a;
    (i *= 0.6),
      (u *= 0.6),
      ($ *= 0.6),
      (this.color = (i << 16) | (u << 8) | $),
      (this.textureIndex = s.getTextureForFace(s.getParticleTextureFace()));
  }
}
