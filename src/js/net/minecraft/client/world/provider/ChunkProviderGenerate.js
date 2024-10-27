import t from "./ChunkProvider.js";
import e from "../generator/WorldGenerator.js";
import s from "../../../util/Random.js";
export default class i extends t {
  constructor(t, s) {
    super(t), (this.generator = new e(t, s));
  }
  generateChunk(t, e) {
    return this.generator.newChunk(this.world, t, e);
  }
  populateChunk(t) {
    let e = t.x,
      s = t.z;
    !t.isTerrainPopulated &&
      this.chunkExists(e + 1, s + 1) &&
      this.chunkExists(e, s + 1) &&
      this.chunkExists(e + 1, s) &&
      this._populateChunkAt(e, s),
      this.chunkExists(e - 1, s) &&
        !this.getChunkAt(e - 1, s).isTerrainPopulated &&
        this.chunkExists(e - 1, s + 1) &&
        this.chunkExists(e, s + 1) &&
        this.chunkExists(e - 1, s) &&
        this._populateChunkAt(e - 1, s),
      this.chunkExists(e, s - 1) &&
        !this.getChunkAt(e, s - 1).isTerrainPopulated &&
        this.chunkExists(e + 1, s - 1) &&
        this.chunkExists(e, s - 1) &&
        this.chunkExists(e + 1, s) &&
        this._populateChunkAt(e, s - 1),
      this.chunkExists(e - 1, s - 1) &&
        !this.getChunkAt(e - 1, s - 1).isTerrainPopulated &&
        this.chunkExists(e - 1, s - 1) &&
        this.chunkExists(e, s - 1) &&
        this.chunkExists(e - 1, s) &&
        this._populateChunkAt(e - 1, s - 1);
  }
  _populateChunkAt(t, e) {
    let s = this.getChunkAt(t, e);
    s.isTerrainPopulated ||
      ((s.isTerrainPopulated = !0), this.generator.populateChunk(s.x, s.z));
  }
  findSpawn() {
    let t = this.world.spawn;
    t.y <= 0 && (t.y = 64);
    let e = new s(this.generator.getSeed());
    for (; 0 === this.getBlockAboveSeaLevel(t.x, t.z); )
      (t.x += e.nextInt(8) - e.nextInt(8)),
        (t.z += e.nextInt(8) - e.nextInt(8));
  }
  getBlockAboveSeaLevel(t, e) {
    let s = this.generator.getSeaLevel();
    for (; 0 !== this.world.getBlockAt(t, s + 1, e); ) s++;
    return this.world.getBlockAt(t, s, e);
  }
}
