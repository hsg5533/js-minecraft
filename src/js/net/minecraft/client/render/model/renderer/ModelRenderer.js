import t from "./Polygon.js";
import e from "./Vertex.js";
import * as i from "../../../../../../../../libraries/three.module.js";
export default class s {
  constructor(t, e, s) {
    (this.name = t),
      (this.textureWidth = e),
      (this.textureHeight = s),
      (this.textureOffsetX = 0),
      (this.textureOffsetY = 0),
      (this.rotateAngleX = 0),
      (this.rotateAngleY = 0),
      (this.rotateAngleZ = 0),
      (this.rotationPointX = 0),
      (this.rotationPointY = 0),
      (this.rotationPointZ = 0),
      (this.scaleX = 1),
      (this.scaleY = 1),
      (this.scaleZ = 1),
      (this.cubes = []),
      (this.children = []),
      (this.bone = new i.Object3D());
  }
  setTextureOffset(t, e) {
    return (this.textureOffsetX = t), (this.textureOffsetY = e), this;
  }
  setTextureSize(t, e) {
    return (this.textureWidth = t), (this.textureHeight = e), this;
  }
  setRotationPoint(t, e, i) {
    return (
      (this.rotationPointX = t),
      (this.rotationPointY = e),
      (this.rotationPointZ = i),
      this
    );
  }
  setRotationAngle(t, e, i) {
    return (
      (this.rotateAngleX = t),
      (this.rotateAngleY = e),
      (this.rotateAngleZ = i),
      this
    );
  }
  setScale(t, e, i) {
    return (this.scaleX = t), (this.scaleY = e), (this.scaleZ = i), this;
  }
  addBox(i, s, h, r, n, o, f = 0, l = !1) {
    let u = [],
      a = i + r,
      x = s + n,
      c = h + o,
      d = new e(i, s, h),
      O = new e(a, s, h),
      X = new e(i, s, c),
      Y = new e(a, s, c),
      g = new e(a, x, c),
      b = new e(i, x, c),
      w = new e(a, x, h),
      Z = new e(i, x, h);
    return (
      (u[0] = new t(
        [Y, O, w, g],
        this.textureOffsetX + o + r,
        this.textureOffsetY + o,
        this.textureOffsetX + o + r + o,
        this.textureOffsetY + o + n,
        this.textureWidth,
        this.textureHeight
      )),
      (u[1] = new t(
        [d, X, b, Z],
        this.textureOffsetX,
        this.textureOffsetY + o,
        this.textureOffsetX + o,
        this.textureOffsetY + o + n,
        this.textureWidth,
        this.textureHeight
      )),
      (u[2] = new t(
        [Y, X, d, O],
        this.textureOffsetX + o,
        this.textureOffsetY,
        this.textureOffsetX + o + r,
        this.textureOffsetY + o,
        this.textureWidth,
        this.textureHeight
      )),
      (u[3] = new t(
        [w, Z, b, g],
        this.textureOffsetX + o + r,
        this.textureOffsetY,
        this.textureOffsetX + o + r + r,
        this.textureOffsetY + o,
        this.textureWidth,
        this.textureHeight
      )),
      (u[4] = new t(
        [O, d, Z, w],
        this.textureOffsetX + o,
        this.textureOffsetY + o,
        this.textureOffsetX + o + r,
        this.textureOffsetY + o + n,
        this.textureWidth,
        this.textureHeight
      )),
      (u[5] = new t(
        [X, Y, g, b],
        this.textureOffsetX + o + r + o,
        this.textureOffsetY + o,
        this.textureOffsetX + o + r + o + r,
        this.textureOffsetY + o + n,
        this.textureWidth,
        this.textureHeight
      )),
      this.cubes.push(u),
      this
    );
  }
  addChild(t) {
    this.children.push(t);
  }
  removeChild(t) {
    let e = this.children.indexOf(t);
    -1 !== e && this.children.splice(e, 1);
  }
  getModelByName(t) {
    if (this.name === t) return this;
    for (let e of this.children) {
      let i = e.getModelByName(t);
      if (null != i) return i;
    }
    return null;
  }
  rebuild(t, e) {
    this.bone.clear(), t.startDrawing();
    for (let i = 0; i < this.cubes.length; i++) {
      let s = this.cubes[i];
      for (let h = 0; h < 6; h++) s[h].render(t);
    }
    t.draw(this.bone);
    for (let r = 0; r < this.children.length; r++)
      this.children[r].rebuild(t, this.bone);
    e.add(this.bone);
  }
  render() {
    this.bone.position.setX(this.rotationPointX),
      this.bone.position.setY(this.rotationPointY),
      this.bone.position.setZ(this.rotationPointZ),
      (this.bone.rotation.order = "ZYX"),
      (this.bone.rotation.x = this.rotateAngleX),
      (this.bone.rotation.y = this.rotateAngleY),
      (this.bone.rotation.z = this.rotateAngleZ),
      this.bone.scale.setX(this.scaleX),
      this.bone.scale.setY(this.scaleY),
      this.bone.scale.setZ(this.scaleZ);
    for (let t = 0; t < this.children.length; t++) this.children[t].render();
    this.bone.updateMatrix();
  }
  clone() {
    let t = new s(this.name, this.textureWidth, this.textureHeight);
    (t.bone = this.bone.clone()),
      (t.textureOffsetX = this.textureOffsetX),
      (t.textureOffsetY = this.textureOffsetY),
      (t.cubes = this.cubes),
      t.copyTransformOf(this);
    for (let e = 0; e < this.children.length; e++) {
      let i = this.children[e];
      t.addChild(i.clone());
    }
    return t;
  }
  copyTransformOf(t) {
    (this.rotationPointX = t.rotationPointX),
      (this.rotationPointY = t.rotationPointY),
      (this.rotationPointZ = t.rotationPointZ),
      (this.scaleX = t.scaleX),
      (this.scaleY = t.scaleY),
      (this.scaleZ = t.scaleZ),
      (this.rotateAngleX = t.rotateAngleX),
      (this.rotateAngleY = t.rotateAngleY),
      (this.rotateAngleZ = t.rotateAngleZ);
  }
}
