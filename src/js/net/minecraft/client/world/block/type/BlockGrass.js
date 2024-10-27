import t from "../Block.js";
import e from "../../../../util/EnumBlockFace.js";
export default class r extends t {
  constructor(e, r) {
    super(e, r), (this.sound = t.sounds.grass);
  }
  getColor(t, r, u, o, s) {
    if (s !== e.TOP) return 16777215;
    if (null === t) return 8174955;
    let l = t.getTemperature(r, u, o),
      i = t.getHumidity(r, u, o);
    return t.minecraft.grassColorizer.getColor(l, i);
  }
  getParticleTextureFace() {
    return e.NORTH;
  }
  getTextureForFace(t) {
    switch (t) {
      case e.TOP:
        return this.textureSlotId;
      case e.BOTTOM:
        return this.textureSlotId + 1;
      default:
        return this.textureSlotId + 2;
    }
  }
}
