import t from "../Chunk.js";
export default class e {
  constructor(t) {
    (this.world = t), (this.chunks = new Map());
  }
  chunkExists(t, e) {
    return void 0 !== this.chunks.get(t + (e << 16));
  }
  getChunkAt(t, e) {
    let h = this.chunks.get(t + (e << 16));
    return void 0 === h && (h = this.loadChunk(t, e)), h;
  }
  generateChunk(e, h) {
    let n = new t(this.world, e, h);
    return n.generateSkylightMap(), n.generateBlockLightMap(), n;
  }
  populateChunk(t) {}
  loadChunk(t, e) {
    let h = this.generateChunk(t, e);
    return (
      (h.loaded = !0),
      this.chunks.set(t + (e << 16), h),
      this.populateChunk(h),
      this.world.group.add(h.group),
      h
    );
  }
  unloadChunk(t, e) {
    this.chunks.delete(t + (e << 16));
  }
  getChunks() {
    return this.chunks;
  }
}
