import e from "../Block.js";
export default class r extends e {
  constructor(r, t) {
    super(r, t), (this.sound = e.sounds.grass);
  }
  isTranslucent() {
    return !0;
  }
  getColor(e, r, t, s, o) {
    if (null === e) return 65280;
    let u = e.getTemperature(r, t, s),
      n = e.getHumidity(r, t, s);
    return e.minecraft.grassColorizer.getColor(u, n);
  }
  shouldRenderFace(e, r, t, s, o) {
    let u = e.getBlockAtFace(r, t, s, o);
    return 0 === u || u === this.id;
  }
  getOpacity() {
    return 0.3;
  }
}
