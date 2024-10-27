import t from "../../../../util/BoundingBox.js";
import e from "../Block.js";
import o from "../../../../util/EnumBlockFace.js";
import s from "../../../../util/BlockRenderType.js";
export default class a extends e {
  constructor(s, a) {
    super(s, a),
      (this.boundingBox = new t(0.4, 0, 0.4, 0.6, 0.6, 0.6)),
      (this.sound = e.sounds.wood),
      (this.dataFaces = [o.WEST, o.EAST, o.NORTH, o.SOUTH, o.BOTTOM]);
  }
  getLightValue() {
    return 14;
  }
  isSolid() {
    return !1;
  }
  isTranslucent() {
    return !0;
  }
  getRenderType() {
    return s.TORCH;
  }
  onBlockAdded(t, e, o, s) {
    for (let a = this.dataFaces.length - 1; a >= 0; a--) {
      let i = this.dataFaces[a];
      if (t.isSolidBlockAt(e + i.x, o + i.y, s + i.z)) {
        let n = a + 1;
        t.setBlockDataAt(e, o, s, n);
        break;
      }
    }
  }
  onBlockPlaced(t, e, o, s, a) {
    let i = t.getBlockDataAt(e, o, s);
    for (let n in this.dataFaces) {
      let $ = this.dataFaces[n];
      if (a === $.opposite() && t.isSolidBlockAt(e + $.x, o + $.y, s + $.z)) {
        i = parseInt(n) + 1;
        break;
      }
    }
    t.getChunkSectionAt(e >> 4, o >> 4, s >> 4).setBlockDataAt(
      15 & e,
      15 & o,
      15 & s,
      i
    );
  }
  collisionRayTrace(e, o, s, a, i, n) {
    let $ = 7 & e.getBlockDataAt(o, s, a);
    switch ($) {
      case 1:
        this.boundingBox = new t(0, 0.2, 0.35, 0.3, 0.8, 0.65);
        break;
      case 2:
        this.boundingBox = new t(0.7, 0.2, 0.35, 1, 0.8, 0.65);
        break;
      case 3:
        this.boundingBox = new t(0.35, 0.2, 0, 0.65, 0.8, 0.3);
        break;
      case 4:
        this.boundingBox = new t(0.35, 0.2, 0.7, 0.65, 0.8, 1);
        break;
      default:
        this.boundingBox = new t(0.4, 0, 0.4, 0.6, 0.6, 0.6);
    }
    return super.collisionRayTrace(e, o, s, a, i, n);
  }
}
