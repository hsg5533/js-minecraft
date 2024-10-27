import e from "../../../util/Random.js";
import t from "../../../../../../../libraries/long.js";
export default class s {
  constructor(t, s) {
    (this.world = t),
      (this.seed = s),
      (this.random = new e(s)),
      (this.seaLevel = 64);
  }
  generateInChunk(e, t, s) {}
  generateAtBlock(e, t, s, d) {}
  generateSeedOffset() {
    this.random.setSeed(this.seed);
    let e = this.random.nextLong().divide(2).multiply(2).add(1),
      t = this.random.nextLong().divide(2).multiply(2).add(1);
    return { seedX: e, seedZ: t };
  }
  setSeedOffset(e, s, d, r) {
    let i = t
      .fromInt(e)
      .multiply(d)
      .add(t.fromInt(s).multiply(r))
      .xor(this.seed);
    this.random.setSeed(i);
  }
  setChunkSeed(e, t) {
    let { seedX: s, seedZ: d } = this.generateSeedOffset();
    this.setSeedOffset(e, t, s, d);
  }
  getSeed() {
    return this.seed;
  }
  getSeaLevel() {
    return this.seaLevel;
  }
}
