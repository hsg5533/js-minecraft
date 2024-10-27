import t from "./ChunkSection.js";
import e from "../../util/MathHelper.js";
import i from "../../util/BoundingBox.js";
import l from "../../util/EnumSkyBlock.js";
import s from "./block/Block.js";
import r from "../../util/EnumBlockFace.js";
import n from "../../util/Vector3.js";
import h from "../../util/Vector4.js";
import o from "../../util/MetadataChunkBlock.js";
import * as u from "../../../../../../libraries/three.module.js";
export default class g {
  static TOTAL_HEIGHT = 8 * t.SIZE - 1;
  constructor(t) {
    (this.minecraft = t),
      (this.entities = []),
      (this.group = new u.Object3D()),
      (this.group.matrixAutoUpdate = !1),
      (this.lightUpdateQueue = []),
      (this.chunkProvider = null),
      (this.time = 0),
      (this.spawn = new n(0, 0, 0));
    let e = this;
    setInterval(function () {
      let t = null === e.minecraft.loadingScreen ? 1e3 : 1e5;
      for (; e.lightUpdateQueue.length >= 10 && t > 0; )
        t--, e.lightUpdateQueue.shift().updateBlockLightning(e);
    }, 0);
  }
  setChunkProvider(t) {
    this.chunkProvider = t;
  }
  onTick() {
    for (let t = 0; t < this.entities.length; t++) this.entities[t].onUpdate();
    let e = this.calculateSkylightSubtracted(1);
    e !== this.skylightSubtracted &&
      ((this.skylightSubtracted = e),
      this.minecraft.worldRenderer.rebuildAll()),
      this.time++;
  }
  getChunkAt(t, e) {
    return this.chunkProvider.getChunkAt(t, e);
  }
  getChunkAtBlock(t, e, i) {
    return this.getChunkAt(t >> 4, i >> 4).getSection(e >> 4);
  }
  getCollisionBoxes(t) {
    let l = [],
      s = e.floor(t.minX),
      r = e.floor(t.maxX + 1),
      n = e.floor(t.minY),
      h = e.floor(t.maxY + 1),
      o = e.floor(t.minZ),
      u = e.floor(t.maxZ + 1);
    for (let g = s; g < r; g++)
      for (let $ = n; $ < h; $++)
        for (let a = o; a < u; a++)
          this.isSolidBlockAt(g, $, a) &&
            l.push(new i(g, $, a, g + 1, $ + 1, a + 1));
    return l;
  }
  updateLights() {
    if (this.lightUpdateQueue.length < 10) {
      let t = 10;
      for (; this.lightUpdateQueue.length > 0; ) {
        if (t <= 0) return !0;
        this.lightUpdateQueue.shift().updateBlockLightning(this), t--;
      }
    }
    return !1;
  }
  updateLight(t, e, i, l, s, r, n, h = !0) {
    let u = (s + e) / 2,
      g = (n + l) / 2;
    if (!this.blockExists(u, 64, g)) return;
    let $ = this.lightUpdateQueue.length;
    if (h) {
      let a = 4;
      a > $ && (a = $);
      for (let c = 0; c < a; c++) {
        let _ = this.lightUpdateQueue[this.lightUpdateQueue.length - c - 1];
        if (_.type === t && _.isOutsideOf(e, i, l, s, r, n)) return;
      }
    }
    if (!this.getChunkAt(u >> 4, g >> 4).loaded) return;
    let k = this.getChunkSectionAt(e >> 4, i >> 4, l >> 4);
    !(k === this.getChunkSectionAt(s >> 4, r >> 4, n >> 4) && k.isEmpty()) &&
      (this.lightUpdateQueue.length < 9999 &&
        this.lightUpdateQueue.push(new o(t, e, i, l, s, r, n)),
      this.lightUpdateQueue.length > 1e4 && (this.lightUpdateQueue = []));
  }
  blockExists(t, e, i) {
    return (
      !(e < 0) && !(e >= g.TOTAL_HEIGHT) && this.chunkExists(t >> 4, i >> 4)
    );
  }
  chunkExists(t, e) {
    return null !== this.chunkProvider && this.chunkProvider.chunkExists(t, e);
  }
  neighborLightPropagationChanged(t, e, i, r, n) {
    if (this.blockExists(e, i, r)) {
      if (t === l.SKY) this.isAboveGround(e, i, r) && (n = 15);
      else if (t === l.BLOCK) {
        let h = this.getBlockAt(e, i, r),
          o = s.getById(h),
          u = 0 === h ? 0 : o.getLightValue();
        u > n && (n = u);
      }
      this.getSavedLightValue(t, e, i, r) !== n &&
        this.updateLight(t, e, i, r, e, i, r);
    }
  }
  getHeightAt(t, e) {
    return this.chunkExists(t >> 4, e >> 4)
      ? this.getChunkAt(t >> 4, e >> 4).getHeightAt(15 & t, 15 & e)
      : 0;
  }
  getHighestBlockAt(t, e) {
    return this.chunkExists(t >> 4, e >> 4)
      ? this.getChunkAt(t >> 4, e >> 4).getHighestBlockAt(15 & t, 15 & e)
      : 0;
  }
  isHighestBlock(t, e, i) {
    return this.getChunkAt(t >> 4, i >> 4).isHighestBlock(15 & t, e, 15 & i);
  }
  isAboveGround(t, e, i) {
    return this.getChunkAt(t >> 4, i >> 4).isAboveGround(15 & t, e, 15 & i);
  }
  getTotalLightAt(t, e, i) {
    return this.blockExists(t, e, i)
      ? this.getChunkSectionAt(t >> 4, e >> 4, i >> 4).getTotalLightAt(
          15 & t,
          15 & e,
          15 & i
        )
      : 15;
  }
  getSavedLightValue(t, e, i, l) {
    return this.blockExists(e, i, l)
      ? this.getChunkSectionAt(e >> 4, i >> 4, l >> 4).getLightAt(
          t,
          15 & e,
          15 & i,
          15 & l
        )
      : 15;
  }
  setLightAt(t, e, i, l, s) {
    if (this.chunkExists(e >> 4, l >> 4))
      this.getChunkSectionAt(e >> 4, i >> 4, l >> 4).setLightAt(
        t,
        15 & e,
        15 & i,
        15 & l,
        s
      ),
        this.onBlockChanged(e, i, l);
  }
  isSolidBlockAt(t, e, i) {
    let l = this.getBlockAt(t, e, i);
    if (0 === l) return !1;
    let r = s.getById(l);
    return null !== r && r.isSolid();
  }
  isTranslucentBlockAt(t, e, i) {
    let l = this.getBlockAt(t, e, i);
    return 0 === l || s.getById(l).isTranslucent();
  }
  setBlockAt(t, e, i, l) {
    this.getChunkAt(t >> 4, i >> 4).setBlockAt(15 & t, e, 15 & i, l),
      this.onBlockChanged(t, e, i);
  }
  setBlockDataAt(t, e, i, l) {
    this.getChunkAt(t >> 4, i >> 4).setBlockDataAt(15 & t, e, 15 & i, l);
  }
  getBlockAt(t, e, i) {
    let l = this.getChunkAtBlock(t, e, i);
    return null == l ? 0 : l.getBlockAt(15 & t, 15 & e, 15 & i);
  }
  getBlockDataAt(t, e, i) {
    let l = this.getChunkAtBlock(t, e, i);
    return null == l ? 0 : l.getBlockDataAt(15 & t, 15 & e, 15 & i);
  }
  getBlockAtFace(t, e, i, l) {
    return this.getBlockAt(t + l.x, e + l.y, i + l.z);
  }
  getChunkSectionAt(t, e, i) {
    return this.getChunkAt(t, i).getSection(e);
  }
  onBlockChanged(t, e, i) {
    this.setModified(t - 1, e - 1, i - 1, t + 1, e + 1, i + 1);
  }
  setModified(t, e, i, l, s, r) {
    (t >>= 4),
      (l >>= 4),
      (e >>= 4),
      (s >>= 4),
      (i >>= 4),
      (r >>= 4),
      (e = Math.max(0, e)),
      (s = Math.min(15, s));
    for (let n = t; n <= l; n++)
      for (let h = e; h <= s; h++)
        for (let o = i; o <= r; o++)
          this.chunkExists(n, o) &&
            (this.getChunkSectionAt(n, h, o).isModified = !0);
  }
  rayTraceBlocks(t, i) {
    let l = e.floor(i.x),
      h = e.floor(i.y),
      o = e.floor(i.z),
      u = e.floor(t.x),
      g = e.floor(t.y),
      $ = e.floor(t.z),
      a = this.getBlockAt(u, g, $),
      c = s.getById(a);
    if (null != c && c.canInteract()) {
      let _ = c.collisionRayTrace(this, u, g, $, t, i);
      if (null != _) return _;
    }
    let k = 200;
    for (; k-- >= 0 && (u !== l || g !== h || $ !== o); ) {
      let d = !0,
        f = !0,
        A = !0,
        p = 999,
        B = 999,
        m = 999;
      l > u ? (p = u + 1) : l < u ? (p = u) : (d = !1),
        h > g ? (B = g + 1) : h < g ? (B = g) : (f = !1),
        o > $ ? (m = $ + 1) : o < $ ? (m = $) : (A = !1);
      let C = 999,
        y = 999,
        S = 999,
        x = i.x - t.x,
        T = i.y - t.y,
        E = i.z - t.z;
      d && (C = (p - t.x) / x),
        f && (y = (B - t.y) / T),
        A && (S = (m - t.z) / E),
        -0 === C && (C = -0.0001),
        -0 === y && (y = -0.0001),
        -0 === S && (S = -0.0001);
      let w;
      C < y && C < S
        ? ((w = l > u ? r.WEST : r.EAST),
          (t = new n(p, t.y + T * C, t.z + E * C)))
        : y < S
        ? ((w = h > g ? r.BOTTOM : r.TOP),
          (t = new n(t.x + x * y, B, t.z + E * y)))
        : ((w = o > $ ? r.NORTH : r.SOUTH),
          (t = new n(t.x + x * S, t.y + T * S, m))),
        (u = e.floor(t.x) - (w === r.EAST ? 1 : 0)),
        (g = e.floor(t.y) - (w === r.TOP ? 1 : 0)),
        ($ = e.floor(t.z) - (w === r.SOUTH ? 1 : 0));
      let L = this.getBlockAt(u, g, $),
        b = s.getById(L);
      if (null != b && b.canInteract()) {
        let I = b.collisionRayTrace(this, u, g, $, t, i);
        if (null != I) return I;
      }
    }
    return null;
  }
  getCelestialAngle(t) {
    return e.calculateCelestialAngle(this.time, t);
  }
  getTemperature(t, e, i) {
    return 0.75;
  }
  getHumidity(t, e, i) {
    return 0.85;
  }
  getSkyColor(t, e, i) {
    let l = 2 * Math.cos(6.283186 * this.getCelestialAngle(i)) + 0.5;
    l < 0 && (l = 0), l > 1 && (l = 1);
    let s = this.getTemperature(t, e),
      r = this.getSkyColorByTemp(s),
      h = ((r >> 16) & 255) / 255,
      o = ((r >> 8) & 255) / 255,
      u = (255 & r) / 255;
    return (h *= l), (o *= l), (u *= l), new n(h, o, u);
  }
  getFogColor(t) {
    let i = 2 * Math.cos(this.getCelestialAngle(t) * Math.PI * 2) + 0.5;
    i = e.clamp(i, 0, 1);
    let l = 0.7529412,
      s = 0.84705883,
      r = 1;
    return (
      (l *= 0.94 * i + 0.06),
      (s *= 0.94 * i + 0.06),
      (r *= 0.91 * i + 0.09),
      new n(l, s, r)
    );
  }
  getSunriseSunsetColor(t) {
    let e = Math.cos(this.getCelestialAngle(t) * Math.PI * 2);
    if (!(e >= -0.4) || !(e <= 0.4)) return null;
    {
      let i = ((e - 0) / 0.4) * 0.5 + 0.5;
      return new h(
        0.3 * i + 0.7,
        i * i * 0.7 + 0.2,
        0.2,
        Math.pow(1 - (1 - Math.sin(i * Math.PI)) * 0.99, 2)
      );
    }
  }
  getStarBrightness(t) {
    let i = 1 - (2 * Math.cos(this.getCelestialAngle(t) * Math.PI * 2) + 0.75);
    return (i = e.clamp(i, 0, 1)) * i * 0.5;
  }
  getLightBrightnessForEntity(t) {
    return Math.max(
      this.getTotalLightAt(Math.floor(t.x), Math.floor(t.y), Math.floor(t.z)) /
        15,
      0.1
    );
  }
  getLightBrightness(t, e, i) {
    return Math.max(this.getTotalLightAt(t, e, i) / 15, 0.1);
  }
  getSkyColorByTemp(t) {
    return (
      (t /= 3) < -1 && (t = -1),
      t > 1 && (t = 1),
      e.hsbToRgb(0.6222222 - 0.05 * t, 0.5 + 0.1 * t, 1)
    );
  }
  calculateSkylightSubtracted(t) {
    let e = 1 - (2 * Math.cos(6.283186 * this.getCelestialAngle(t)) + 0.5);
    return e < 0 && (e = 0), e > 1 && (e = 1), Math.floor(11 * e);
  }
  addEntity(t) {
    this.entities.push(t), t.initRenderer(), this.group.add(t.renderer.group);
  }
  removeEntityById(t) {
    let e = this.getEntityById(t);
    null !== e &&
      (this.entities.splice(this.entities.indexOf(e), 1),
      this.group.remove(e.renderer.group));
  }
  getEntityById(t) {
    for (let e of this.entities) if (e.id === t) return e;
    return null;
  }
  getSpawn() {
    return this.spawn;
  }
  setSpawn(t, e) {
    let i = this.getHeightAt(t, e);
    this.spawn = new n(t, i + 8, e);
  }
  loadSpawnChunks() {
    let t = this.minecraft.settings.viewDistance;
    for (let e = -t; e <= t; e++)
      for (let i = -t; i <= t; i++)
        this.getChunkAt((e + this.spawn.x) >> 4, (i + this.spawn.z) >> 4);
    this.spawn.y = this.getHeightAt(this.spawn.x, this.spawn.z) + 8;
  }
  getChunkProvider() {
    return this.chunkProvider;
  }
  clearEntities() {
    for (let t of this.entities) this.removeEntityById(t.id);
  }
}
