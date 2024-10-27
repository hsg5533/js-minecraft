import t from "../../util/EnumSkyBlock.js";
import i from "./block/Block.js";
import * as s from "../../../../../../libraries/three.module.js";
export default class o {
  static SIZE = 16;
  constructor(t, i, h, e, l) {
    (this.world = t),
      (this.chunk = i),
      (this.x = h),
      (this.y = e),
      (this.z = l),
      (this.boundingBox = new s.Box3()),
      (this.boundingBox.min.x = h * o.SIZE),
      (this.boundingBox.min.y = e * o.SIZE),
      (this.boundingBox.min.z = l * o.SIZE),
      (this.boundingBox.max.x = h * o.SIZE + o.SIZE),
      (this.boundingBox.max.y = e * o.SIZE + o.SIZE),
      (this.boundingBox.max.z = l * o.SIZE + o.SIZE),
      (this.group = new s.Object3D()),
      (this.group.position.x = this.x * o.SIZE),
      (this.group.position.y = this.y * o.SIZE),
      (this.group.position.z = this.z * o.SIZE),
      this.group.updateMatrix(),
      (this.group.matrixAutoUpdate = !1),
      (this.isModified = !0),
      (this.blocks = []),
      (this.blocksData = []),
      (this.blockLight = []),
      (this.skyLight = []),
      (this.empty = !0);
  }
  render() {}
  rebuild(t) {
    (this.isModified = !1), this.group.clear();
    let s = this.world.minecraft.settings.ambientOcclusion,
      h = t.blockRenderer.tessellator;
    for (let e = 0; e < 2; e++) {
      let l = 1 === e;
      h.startDrawing();
      for (let r = 0; r < o.SIZE; r++)
        for (let n = 0; n < o.SIZE; n++)
          for (let g = 0; g < o.SIZE; g++) {
            let c = this.getBlockAt(r, n, g);
            if (0 !== c) {
              let a = this.x * o.SIZE + r,
                k = this.y * o.SIZE + n,
                u = this.z * o.SIZE + g,
                d = i.getById(c);
              if (null === d || d.isTranslucent() !== l) continue;
              t.blockRenderer.renderBlock(this.world, d, s, a, k, u);
            }
          }
      h.draw(this.group);
    }
  }
  getBlockAt(t, i, s) {
    let o = (i << 8) | (s << 4) | t;
    return !this.empty && o in this.blocks ? this.blocks[o] : 0;
  }
  getBlockDataAt(t, i, s) {
    let o = (i << 8) | (s << 4) | t;
    return !this.empty && o in this.blocksData ? this.blocksData[o] : 0;
  }
  setBlockAt(t, i, s, o) {
    let h = (i << 8) | (s << 4) | t;
    (this.blocks[h] = o),
      (this.isModified = !0),
      this.empty && 0 !== o && (this.empty = !1);
  }
  setBlockDataAt(t, i, s, o) {
    let h = (i << 8) | (s << 4) | t;
    (this.blocksData[h] = o), (this.isModified = !0);
  }
  setLightAt(i, s, o, h, e) {
    let l = (o << 8) | (h << 4) | s;
    i === t.SKY && (this.skyLight[l] = e),
      i === t.BLOCK && (this.blockLight[l] = e),
      (this.isModified = !0);
  }
  getTotalLightAt(t, i, s) {
    let o = (i << 8) | (s << 4) | t,
      h =
        (o in this.skyLight ? this.skyLight[o] : this.empty ? 15 : 14) -
        this.world.skylightSubtracted,
      e = o in this.blockLight ? this.blockLight[o] : 0;
    return e > h && (h = e), h;
  }
  getLightAt(i, s, o, h) {
    let e = (o << 8) | (h << 4) | s;
    return i === t.SKY
      ? e in this.skyLight
        ? this.skyLight[e]
        : this.empty
        ? 15
        : 14
      : i === t.BLOCK && e in this.blockLight
      ? this.blockLight[e]
      : 0;
  }
  isEmpty() {
    return this.empty;
  }
}
