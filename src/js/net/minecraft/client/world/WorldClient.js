import r from "./World.js";
import e from "./provider/ChunkProviderClient.js";
export default class o extends r {
  constructor(r) {
    super(r), this.setChunkProvider(new e(this));
  }
}
