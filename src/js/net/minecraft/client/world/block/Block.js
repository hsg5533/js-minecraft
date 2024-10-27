import n from "../../../util/BlockRenderType.js";
import e from "../../../util/EnumBlockFace.js";
import t from "../../../util/MovingObjectPosition.js";
import i from "../../../util/BoundingBox.js";
export default class u {
  static blocks = new Map();
  static sounds = {};
  constructor(n, e = n) {
    (this.id = n),
      (this.textureSlotId = e),
      (this.boundingBox = new i(0, 0, 0, 1, 1, 1)),
      (this.sound = u.sounds.stone),
      u.blocks.set(n, this);
  }
  getId() {
    return this.id;
  }
  getRenderType() {
    return n.BLOCK;
  }
  getParticleTextureFace() {
    return e.TOP;
  }
  getTextureForFace(n) {
    return this.textureSlotId;
  }
  getTransparency() {
    return 0;
  }
  isTranslucent() {
    return this.getTransparency() > 0;
  }
  shouldRenderFace(n, e, t, i, s) {
    let o = n.getBlockAtFace(e, t, i, s);
    if (0 === o) return !0;
    let r = u.getById(o);
    return null === r || r.isTranslucent();
  }
  getColor(n, e, t, i, u) {
    return 16777215;
  }
  getParticleColor(n, e, t, i) {
    return this.getColor(n, e, t, i, this.getParticleTextureFace());
  }
  getLightValue() {
    return 0;
  }
  isSolid() {
    return !0;
  }
  getOpacity() {
    return 1;
  }
  canInteract() {
    return !0;
  }
  isLiquid() {
    return !1;
  }
  getSound() {
    return this.sound;
  }
  getBoundingBox(n, e, t, i) {
    return this.boundingBox;
  }
  onBlockAdded(n, e, t, i) {}
  onBlockPlaced(n, e, t, i, u) {}
  collisionRayTrace(n, i, u, s, o, r) {
    (o = o.addVector(-i, -u, -s)), (r = r.addVector(-i, -u, -s));
    let l = o.getIntermediateWithXValue(r, this.boundingBox.minX),
      d = o.getIntermediateWithXValue(r, this.boundingBox.maxX),
      a = o.getIntermediateWithYValue(r, this.boundingBox.minY),
      c = o.getIntermediateWithYValue(r, this.boundingBox.maxY),
      g = o.getIntermediateWithZValue(r, this.boundingBox.minZ),
      h = o.getIntermediateWithZValue(r, this.boundingBox.maxZ);
    this.isVecInsideYZBounds(l) || (l = null),
      this.isVecInsideYZBounds(d) || (d = null),
      this.isVecInsideXZBounds(a) || (a = null),
      this.isVecInsideXZBounds(c) || (c = null),
      this.isVecInsideXYBounds(g) || (g = null),
      this.isVecInsideXYBounds(h) || (h = null);
    let x = null;
    if (
      (null != l &&
        (null == x || o.squareDistanceTo(l) < o.squareDistanceTo(x)) &&
        (x = l),
      null != d &&
        (null == x || o.squareDistanceTo(d) < o.squareDistanceTo(x)) &&
        (x = d),
      null != a &&
        (null == x || o.squareDistanceTo(a) < o.squareDistanceTo(x)) &&
        (x = a),
      null != c &&
        (null == x || o.squareDistanceTo(c) < o.squareDistanceTo(x)) &&
        (x = c),
      null != g &&
        (null == x || o.squareDistanceTo(g) < o.squareDistanceTo(x)) &&
        (x = g),
      null != h &&
        (null == x || o.squareDistanceTo(h) < o.squareDistanceTo(x)) &&
        (x = h),
      null == x)
    )
      return null;
    let B = null;
    return (
      x === l && (B = e.WEST),
      x === d && (B = e.EAST),
      x === a && (B = e.BOTTOM),
      x === c && (B = e.TOP),
      x === g && (B = e.NORTH),
      x === h && (B = e.SOUTH),
      new t(x.addVector(i, u, s), B, i, u, s)
    );
  }
  isVecInsideYZBounds(n) {
    return (
      null != n &&
      n.y >= this.boundingBox.minY &&
      n.y <= this.boundingBox.maxY &&
      n.z >= this.boundingBox.minZ &&
      n.z <= this.boundingBox.maxZ
    );
  }
  isVecInsideXZBounds(n) {
    return (
      null != n &&
      n.x >= this.boundingBox.minX &&
      n.x <= this.boundingBox.maxX &&
      n.z >= this.boundingBox.minZ &&
      n.z <= this.boundingBox.maxZ
    );
  }
  isVecInsideXYBounds(n) {
    return (
      null != n &&
      n.x >= this.boundingBox.minX &&
      n.x <= this.boundingBox.maxX &&
      n.y >= this.boundingBox.minY &&
      n.y <= this.boundingBox.maxY
    );
  }
  static getById(n) {
    let e = u.blocks.get(n);
    return void 0 === e ? null : e;
  }
}
