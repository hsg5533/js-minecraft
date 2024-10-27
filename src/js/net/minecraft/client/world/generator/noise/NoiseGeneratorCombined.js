import r from "../NoiseGenerator.js";
export default class e extends r {
  constructor(r, e) {
    super(), (this.firstGenerator = r), (this.secondGenerator = e);
  }
  perlin(r, e) {
    return this.firstGenerator.perlin(r + this.secondGenerator.perlin(r, e), e);
  }
}
