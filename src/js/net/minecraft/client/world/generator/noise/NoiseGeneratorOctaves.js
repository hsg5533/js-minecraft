import e from "../NoiseGenerator.js";
import t from "./NoiseGeneratorPerlin.js";
export default class o extends e {
  constructor(e, o) {
    super(), (this.octaves = o), (this.generatorCollection = []);
    for (let r = 0; r < o; r++) this.generatorCollection[r] = new t(e);
  }
  perlin(e, t) {
    let o = 0,
      r = 1;
    for (let s = 0; s < this.octaves; s++)
      (o += this.generatorCollection[s].perlin(e / r, t / r) * r), (r *= 2);
    return o;
  }
  generateNoiseOctaves(e, t, o, r, s, i, l, n, a) {
    let c = r * s * i,
      $ = [];
    for (let f = 0; f < c; f++) $[f] = 0;
    let h = 1;
    for (let p = 0; p < this.octaves; p++)
      this.generatorCollection[p].combined(
        $,
        e,
        t,
        o,
        r,
        s,
        i,
        l * h,
        n * h,
        a * h,
        h
      ),
        (h /= 2);
    return $;
  }
}
