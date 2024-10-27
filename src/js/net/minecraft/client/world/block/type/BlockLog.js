import t from "../Block.js";
export default class s extends t {
  constructor(s, e) {
    super(s, e), (this.sound = t.sounds.wood);
  }
  getTextureForFace(t) {
    return this.textureSlotId + (t.isYAxis() ? 1 : 0);
  }
}
