import t from "./ChunkProvider.js";
import e from "../Chunk.js";
export default class h extends t {
  constructor(t) {
    super(t),
      (this.emptyChunk = new e(t, 0, 0)),
      this.emptyChunk.generateSkylightMap(),
      this.emptyChunk.generateBlockLightMap();
  }
  getChunkAt(t, e) {
    let h = this.chunks.get(t + (e << 16));
    return void 0 === h ? this.emptyChunk : h;
  }
}
