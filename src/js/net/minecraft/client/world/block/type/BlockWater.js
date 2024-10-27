import t from "../Block.js";
import e from "../../../../util/EnumBlockFace.js";
export default class r extends t {
  constructor(t, e) {
    super(t, e);
  }
  getOpacity() {
    return 0.01;
  }
  getTransparency() {
    return 0.2;
  }
  isSolid() {
    return !1;
  }
  isLiquid() {
    return !0;
  }
  canInteract() {
    return !1;
  }
  shouldRenderFace(t, r, n, i, o) {
    let u = t.getBlockAtFace(r, n, i, o);
    return 0 === u || u !== this.id || (u !== this.id && o === e.TOP);
  }
  getBoundingBox(t, e, r, n) {
    let i = this.boundingBox.clone();
    return (
      null !== t && t.getBlockAt(e, r + 1, n) !== this.id && (i.maxY = 0.88), i
    );
  }
}
