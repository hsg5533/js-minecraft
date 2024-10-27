import t from "../../util/EnumSkyBlock.js";
import e from "./block/Block.js";
import i from "./World.js";
import s from "./ChunkSection.js";
import * as h from "../../../../../../libraries/three.module.js";
export default class o {
  static SECTION_AMOUNT = 16;
  constructor(t, e, i) {
    (this.world = t),
      (this.x = e),
      (this.z = i),
      (this.group = new h.Object3D()),
      (this.group.matrixAutoUpdate = !1),
      (this.group.chunkX = e),
      (this.group.chunkZ = i),
      (this.loaded = !1),
      (this.isTerrainPopulated = !1),
      (this.sections = []);
    for (let l = 0; l < o.SECTION_AMOUNT; l++) {
      let g = new s(t, this, e, l, i);
      (this.sections[l] = g), this.group.add(g.group);
    }
    this.heightMap = [];
  }
  generateSkylightMap() {
    for (let t = 0; t < 16; t++)
      for (let e = 0; e < 16; e++)
        this.setHeightAt(t, e, 0), this.updateHeightMap(t, i.TOTAL_HEIGHT, e);
    for (let s = 0; s < 16; s++)
      for (let h = 0; h < 16; h++) this.notifyNeighbors(s, h);
    this.setModifiedAllSections();
  }
  generateBlockLightMap() {
    for (let s = 0; s < 16; s++)
      for (let h = 0; h < 16; h++) {
        for (let o = 0; o < i.TOTAL_HEIGHT; o++) {
          let l = this.getSection(o >> 4),
            g = l.getBlockAt(s, 15 & o, h),
            r = e.getById(g),
            d = 0 === g ? 0 : r.getLightValue();
          d > 0 && l.setLightAt(t.BLOCK, s, 15 & o, h, d);
        }
        let a = 15;
        for (let c = 30; c < 128 && a > 0; ) {
          c++;
          let u = this.getSection(c >> 4),
            A = u.getBlockAt(s, 15 & c, h),
            _ = e.getById(A),
            n = 0 === A ? 0 : _.getOpacity(),
            $ = 0 === A ? 0 : _.getLightValue();
          0 === n && (n = 1),
            $ > (a -= n) && (a = $),
            a < 0 && (a = 0),
            u.setLightAt(t.BLOCK, s, 15 & c, h, $);
        }
      }
    this.world.updateLight(
      t.BLOCK,
      16 * this.x,
      31,
      16 * this.z,
      16 * this.x + 16,
      33,
      16 * this.z + 16
    ),
      this.setModifiedAllSections();
  }
  updateBlockLight() {
    this.setModifiedAllSections();
  }
  notifyNeighbors(t, e) {
    let i = this.getHeightAt(t, e),
      s = 16 * this.x + t,
      h = 16 * this.z + e;
    this.updateSkyLight(s - 1, h, i),
      this.updateSkyLight(s + 1, h, i),
      this.updateSkyLight(s, h - 1, i),
      this.updateSkyLight(s, h + 1, i);
  }
  updateSkyLight(e, i, s) {
    let h = this.world.getHeightAt(e, i);
    h > s
      ? this.world.updateLight(t.SKY, e, s, i, e, h, i)
      : h < s && this.world.updateLight(t.SKY, e, h, i, e, s, i),
      this.setModifiedAllSections();
  }
  updateHeightMap(i, s, h) {
    let o = this.getHeightAt(i, h),
      l = o;
    if ((s > o && (l = s), (l = this.calculateHeightAt(i, h, l)) === o)) return;
    this.setHeightAt(i, h, l);
    let g = 16 * this.x + i,
      r = 16 * this.z + h;
    if (l < o) for (let d = l; d < o; d++) this.setLightAt(t.SKY, i, d, h, 15);
    else {
      this.world.updateLight(t.SKY, g, o, r, g, l, r);
      for (let a = o; a < l; a++) this.setLightAt(t.SKY, i, a, h, 0);
    }
    let c = 15,
      u = l;
    for (; l > 0 && c > 0; ) {
      l--;
      let A = this.getBlockID(i, l, h),
        _ = e.getById(A),
        n = Math.floor(0 === A ? 0 : 255 * _.getOpacity());
      0 === n && (n = 1),
        (c -= n) < 0 && (c = 0),
        this.setLightAt(t.SKY, i, l, h, c);
    }
    (l = this.calculateHeightAt(i, h, l)) !== u &&
      this.world.updateLight(t.SKY, g - 1, l, r - 1, g + 1, u, r + 1),
      this.setModifiedAllSections();
  }
  calculateHeightAt(t, i, s) {
    let h = s;
    for (; h > 0; ) {
      let o = this.getBlockAt(t, h - 1, i),
        l = e.getById(o);
      if (0 !== (0 === o || null === l ? 0 : l.getOpacity())) break;
      h--;
    }
    return h;
  }
  updateHeightMapAt(t, e) {
    let s = this.calculateHeightAt(t, e, i.TOTAL_HEIGHT);
    this.setHeightAt(t, e, s);
  }
  setHeightAt(t, e, i) {
    this.heightMap[(e << 4) | t] = i;
  }
  isHighestBlock(t, e, i) {
    return e >= this.getHighestBlockAt(t, i);
  }
  isAboveGround(t, e, i) {
    return e >= this.getHeightAt(t, i);
  }
  getHeightAt(t, e) {
    return this.heightMap[(e << 4) | t];
  }
  getHighestBlockAt(t, e) {
    return this.getHeightAt(t, e) - 1;
  }
  setLightAt(t, e, i, s, h) {
    this.getSection(i >> 4).setLightAt(t, e, 15 & i, s, h);
  }
  setBlockDataAt(t, e, i, s) {
    this.setBlockAt(t, e, i, this.getBlockAt(t, e, i), s);
  }
  setBlockAt(s, h, o, l, g = 0) {
    if (h < 0 || h >= i.TOTAL_HEIGHT) return;
    let r = this.getSection(h >> 4),
      d = 15 & h,
      a = this.getHeightAt(s, o),
      c = r.getBlockAt(s, d, o),
      u = r.getBlockDataAt(s, d, o);
    if (c === l && u === g) return !1;
    if ((r.setBlockAt(s, d, o, l), r.setBlockDataAt(s, d, o, g), !this.loaded))
      return;
    let A = e.getById(l);
    0 !== l && null !== A && A.isSolid()
      ? h >= a && this.updateHeightMap(s, h + 1, o)
      : h === a - 1 && this.updateHeightMap(s, h, o);
    let _ = 16 * this.x + s,
      n = 16 * this.z + o;
    return (
      this.world.updateLight(t.SKY, _, h, n, _, h, n),
      this.world.updateLight(t.BLOCK, _, h, n, _, h, n),
      this.notifyNeighbors(s, o),
      0 !== l && null !== A && A.onBlockAdded(this.world, _, h, n),
      !0
    );
  }
  fillChunk(t, i, h) {
    let l = 0;
    for (let g = 0; g < o.SECTION_AMOUNT; g++)
      if ((i & (1 << g)) != 0) {
        let r = this.getSection(g);
        for (let d = 0; d < s.SIZE * s.SIZE * s.SIZE; d++) {
          let a = 15 & d,
            c = (d >> 4) & 15,
            u = (d >> 8) & 15,
            A,
            _ = ((255 & t[l]) | ((255 & t[l + 1]) << 8)) >> 4;
          0 !== _ && null === e.getById(_) && (_ = 1),
            r.setBlockAt(a, u, c, _),
            (l += 2);
        }
      }
  }
  getBlockID(t, e, i) {
    return this.getBlockAt(t, e, i);
  }
  getBlockAt(t, e, i) {
    return this.getSection(e >> 4).getBlockAt(t, 15 & e, i);
  }
  getBlockDataAt(t, e, i) {
    return this.getSection(e >> 4).getBlockDataAt(t, 15 & e, i);
  }
  getSection(t) {
    return this.sections[t];
  }
  rebuild(t) {
    for (let e = 0; e < o.SECTION_AMOUNT; e++) this.sections[e].rebuild(t);
  }
  isLoaded() {
    return this.loaded;
  }
  unload() {
    this.loaded = !1;
  }
  setModifiedAllSections() {
    for (let t = 0; t < o.SECTION_AMOUNT; t++) this.sections[t].isModified = !0;
  }
}
