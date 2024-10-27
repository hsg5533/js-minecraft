import t from "../Block.js";
export default class e extends t {
  constructor(e, s) {
    super(e, s), (this.sound = t.sounds.glass);
  }
  isTranslucent() {
    return !0;
  }
  shouldRenderFace(t, e, s, r, n) {
    let o = t.getBlockAtFace(e, s, r, n);
    return 0 === o || o !== this.id;
  }
  getOpacity() {
    return 0;
  }
}
