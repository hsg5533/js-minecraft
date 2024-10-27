import e from "./BlockRenderer.js";
import t from "./entity/EntityRenderManager.js";
import i from "../../util/MathHelper.js";
import r from "../world/block/Block.js";
import s from "./Tessellator.js";
import a from "../world/ChunkSection.js";
import o from "../../util/Random.js";
import n from "../../util/Vector3.js";
import * as l from "../../../../../../libraries/three.module.js";
export default class h {
  static THIRD_PERSON_DISTANCE = 4;
  constructor(i, r) {
    (this.minecraft = i),
      (this.window = r),
      (this.chunkSectionUpdateQueue = []),
      (this.tessellator = new s()),
      (this.textureTerrain = i.getThreeTexture("terrain/terrain.png")),
      (this.textureTerrain.magFilter = l.NearestFilter),
      (this.textureTerrain.minFilter = l.NearestFilter),
      (this.textureSun = i.getThreeTexture("terrain/sun.png")),
      (this.textureSun.magFilter = l.NearestFilter),
      (this.textureSun.minFilter = l.NearestFilter),
      (this.textureMoon = i.getThreeTexture("terrain/moon.png")),
      (this.textureMoon.magFilter = l.NearestFilter),
      (this.textureMoon.minFilter = l.NearestFilter),
      (this.blockRenderer = new e(this)),
      (this.entityRenderManager = new t(this)),
      (this.equippedProgress = 0),
      (this.prevEquippedProgress = 0),
      (this.itemToRender = 0),
      (this.prevFogBrightness = 0),
      (this.fogBrightness = 0),
      (this.flushRebuild = !1),
      (this.lastHitResult = null),
      this.initialize();
  }
  initialize() {
    (this.camera = new l.PerspectiveCamera(0, 1, 0.001, 1e3)),
      (this.camera.rotation.order = "ZYX"),
      (this.camera.up = new l.Vector3(0, 0, 1)),
      (this.frustum = new l.Frustum()),
      (this.background = new l.Scene()),
      (this.background.matrixAutoUpdate = !1),
      (this.scene = new l.Scene()),
      (this.scene.matrixAutoUpdate = !1),
      (this.overlay = new l.Scene()),
      (this.overlay.matrixAutoUpdate = !1),
      (this.webRenderer = new l.WebGLRenderer({
        canvas: this.window.canvasWorld,
        antialias: !1,
        alpha: !0,
      })),
      this.webRenderer.setSize(this.window.width, this.window.height),
      (this.webRenderer.shadowMap.enabled = !0),
      (this.webRenderer.shadowMap.type = l.PCFSoftShadowMap),
      (this.webRenderer.autoClear = !1),
      (this.webRenderer.sortObjects = !1),
      this.webRenderer.setClearColor(0, 0),
      this.webRenderer.clear(),
      this.generateSky();
    let e = new l.BoxGeometry(1, 1, 1),
      t = new l.EdgesGeometry(e);
    (this.blockHitBox = new l.LineSegments(
      t,
      new l.LineBasicMaterial({ color: 0 })
    )),
      this.scene.add(this.blockHitBox);
  }
  render(e) {
    this.orientCamera(e);
    let t = this.minecraft.player,
      i = Math.floor(t.x) >> 4,
      r = Math.floor(t.z) >> 4;
    for (let s of (this.renderChunks(i, r),
    this.renderSky(e),
    this.renderBlockHitBox(t, e),
    this.minecraft.particleRenderer.renderParticles(t, e),
    this.minecraft.world.entities))
      s.renderer.group.visible = !1;
    for (let a of this.minecraft.world.entities)
      (a !== t || 0 !== this.minecraft.settings.thirdPersonView) &&
        (a.renderer.render(a, e), (a.renderer.group.visible = !0));
    this.renderHand(e),
      this.webRenderer.render(this.background, this.camera),
      this.webRenderer.render(this.scene, this.camera),
      (this.camera.fov = 70),
      this.camera.updateProjectionMatrix(),
      this.webRenderer.render(this.overlay, this.camera);
  }
  onTick() {
    for (let e = 0; e < 2; e++)
      if (0 !== this.chunkSectionUpdateQueue.length) {
        let t = this.chunkSectionUpdateQueue.shift();
        null != t && t.rebuild(this);
      }
    (this.prevFogBrightness = this.fogBrightness),
      (this.prevEquippedProgress = this.equippedProgress);
    let r = this.minecraft.player,
      s = r.inventory.getItemInSelectedSlot(),
      a = !1;
    null != this.itemToRender && null != s
      ? this.itemToRender !== s && (a = !0)
      : (a = null != this.itemToRender || null != s),
      (this.equippedProgress += i.clamp(
        (a ? 0 : 1) - this.equippedProgress,
        -0.4,
        0.4
      )),
      this.equippedProgress < 0.1 && (this.itemToRender = s);
    let o = this.minecraft.world.getLightBrightnessForEntity(r),
      n = this.minecraft.settings.viewDistance / 32;
    this.fogBrightness += (o * (1 - n) + n - this.fogBrightness) * 0.1;
  }
  orientCamera(e) {
    let t = this.minecraft.player,
      r = this.camera,
      s = t.prevX + (t.x - t.prevX) * e,
      a = t.prevY + (t.y - t.prevY) * e + t.getEyeHeight(),
      o = t.prevZ + (t.z - t.prevZ) * e,
      d = t.prevRotationYaw + (t.rotationYaw - t.prevRotationYaw) * e,
      $ = t.prevRotationPitch + (t.rotationPitch - t.prevRotationPitch) * e,
      c = this.minecraft.settings.thirdPersonView;
    if (0 !== c) {
      let u = h.THIRD_PERSON_DISTANCE,
        p = 2 === c,
        m = t.getVectorForRotation($, d),
        g = s - m.x * u * (p ? -1 : 1),
        _ = a - m.y * u * (p ? -1 : 1),
        w = o - m.z * u * (p ? -1 : 1);
      for (let f = 0; f < 8; f++) {
        let b = ((1 & f) * 2 - 1) * 0.1,
          x = (((f >> 1) & 1) * 2 - 1) * 0.1,
          k = (((f >> 2) & 1) * 2 - 1) * 0.1,
          v = new n(s, a, o),
          R = new n(g, _, w);
        (v = v.addVector(b, x, k)), (R = R.addVector(b, x, k));
        let y = this.minecraft.world.rayTraceBlocks(v, R);
        if (null === y) continue;
        let S = y.vector.distanceTo(new n(s, a, o));
        S < u && (u = S);
      }
      (s -= m.x * u * (p ? -1 : 1)),
        (a -= m.y * u * (p ? -1 : 1)),
        (o -= m.z * u * (p ? -1 : 1)),
        p && (($ *= -1), (d += 180));
    }
    (r.rotation.x = -i.toRadians($)),
      (r.rotation.y = -i.toRadians(d + 180)),
      (r.rotation.z = 0),
      r.position.set(s, a, o),
      0 === c &&
        this.minecraft.settings.viewBobbing &&
        this.bobbingAnimation(t, r, e),
      (this.camera.fov = this.minecraft.settings.fov + t.getFOVModifier()),
      this.camera.updateProjectionMatrix(),
      this.frustum.setFromProjectionMatrix(
        new l.Matrix4().multiplyMatrices(
          this.camera.projectionMatrix,
          this.camera.matrixWorldInverse
        )
      ),
      this.setupFog(s, o, t.isHeadInWater(), e);
  }
  generateSky() {
    (this.backgroundCenter = new l.Object3D()),
      this.background.add(this.backgroundCenter);
    (this.listSky = new l.Object3D()),
      this.tessellator.startDrawing(),
      this.tessellator.setColor(1, 1, 1);
    for (let e = -384; e <= 384; e += 64)
      for (let t = -384; t <= 384; t += 64)
        this.tessellator.addVertex(e + 64, 16, t),
          this.tessellator.addVertex(e, 16, t),
          this.tessellator.addVertex(e, 16, t + 64),
          this.tessellator.addVertex(e + 64, 16, t + 64);
    (this.tessellator.draw(this.listSky).material.depthTest = !1),
      this.backgroundCenter.add(this.listSky);
    {
      (this.listSunset = new l.Object3D()), this.tessellator.startDrawing();
      let i = (2 * Math.PI) / 16;
      for (let r = 0; r < 16; r++) {
        let s = (r * Math.PI * 2) / 16,
          a = Math.sin(s),
          n = Math.cos(s),
          h = Math.sin(s + i),
          d = Math.cos(s + i);
        this.tessellator.setColor(1, 1, 1, 1),
          this.tessellator.addVertex(0, 100, 0),
          this.tessellator.addVertex(0, 100, 0),
          this.tessellator.setColor(1, 1, 1, 0),
          this.tessellator.addVertex(120 * a, 120 * n, -(40 * n)),
          this.tessellator.addVertex(120 * h, 120 * d, -(40 * d));
      }
      let $ = this.tessellator.draw(this.listSunset);
      ($.material = $.material.clone()),
        ($.material.depthTest = !1),
        ($.material.opacity = 0.6),
        ($.material.side = l.DoubleSide),
        this.backgroundCenter.add(this.listSunset);
    }
    this.cycleGroup = new l.Object3D();
    {
      (this.listStars = new l.Object3D()),
        this.tessellator.startDrawing(),
        this.tessellator.setColor(1, 1, 1);
      let c = new o(10842);
      for (let u = 0; u < 1500; u++) {
        let p = 2 * c.nextFloat() - 1,
          m = 2 * c.nextFloat() - 1,
          g = 2 * c.nextFloat() - 1,
          _ = p * p + m * m + g * g;
        if (_ >= 1 || _ <= 0.01) continue;
        (p *= _ = 1 / Math.sqrt(_)), (m *= _);
        let w = 100 * p,
          f = 100 * m,
          b = 100 * (g *= _),
          x = Math.atan2(p, g),
          k = Math.sin(x),
          v = Math.cos(x),
          R = Math.atan2(Math.sqrt(p * p + g * g), m),
          y = Math.sin(R),
          S = Math.cos(R),
          P = c.nextFloat() * Math.PI * 2,
          C = Math.sin(P),
          B = Math.cos(P),
          F = 0.25 + 0.25 * c.nextFloat();
        for (let T = 0; T < 4; T++) {
          let M = ((2 & T) - 1) * F,
            V = (((T + 1) & 2) - 1) * F,
            I = M * B - V * C,
            Y = V * B + M * C,
            A = -I * S,
            D = A * k - Y * v,
            j = I * y,
            z = Y * k + A * v;
          this.tessellator.addVertex(w + D, f + j, b + z);
        }
      }
      let H = this.tessellator.draw(this.listStars);
      (H.material = H.material.clone()),
        (H.material.depthTest = !0),
        (H.material.side = l.BackSide),
        this.cycleGroup.add(this.listStars);
    }
    let q = new l.PlaneGeometry(1, 1),
      Z = new l.MeshBasicMaterial({
        side: l.FrontSide,
        map: this.textureSun,
        alphaMap: this.textureSun,
        blending: l.AdditiveBlending,
        transparent: !0,
      });
    (this.sun = new l.Mesh(q, Z)),
      this.sun.translateZ(-2),
      (this.sun.material.depthTest = !1),
      this.cycleGroup.add(this.sun);
    let E = new l.MeshBasicMaterial({
      side: l.BackSide,
      map: this.textureMoon,
      alphaMap: this.textureMoon,
      blending: l.AdditiveBlending,
      transparent: !0,
    });
    (this.moon = new l.Mesh(q, E)),
      this.moon.translateZ(2),
      (this.moon.material.depthTest = !1),
      this.cycleGroup.add(this.moon),
      this.backgroundCenter.add(this.cycleGroup);
    {
      (this.listVoid = new l.Object3D()),
        this.tessellator.startDrawing(),
        this.tessellator.setColor(1, 1, 1);
      for (let X = -384; X <= 384; X += 64)
        for (let G = -384; G <= 384; G += 64)
          this.tessellator.addVertex(X, -16, G),
            this.tessellator.addVertex(X + 64, -16, G),
            this.tessellator.addVertex(X + 64, -16, G + 64),
            this.tessellator.addVertex(X, -16, G + 64);
      let U = this.tessellator.draw(this.listVoid);
      (U.material = U.material.clone()),
        (U.material.depthTest = !1),
        (U.material.opacity = 1),
        this.backgroundCenter.add(this.listVoid);
    }
  }
  renderSky(e) {
    this.backgroundCenter.position.copy(this.camera.position);
    let t = this.minecraft.world.getCelestialAngle(e);
    this.cycleGroup.rotation.set(t * Math.PI * 2 + Math.PI / 2, 0, 0);
  }
  setupFog(e, t, r, s) {
    if (r) {
      let o = new l.Color(0.2, 0.2, 0.4);
      (this.background.background = o),
        (this.scene.fog = new l.Fog(o, 0.0025, 5));
    } else {
      let n = this.minecraft.world,
        h = this.minecraft.settings.viewDistance * a.SIZE,
        d =
          1 -
          Math.pow(
            0.25 + (0.75 * this.minecraft.settings.viewDistance) / 32,
            0.25
          ),
        $ = n.getCelestialAngle(s),
        c = n.getSkyColor(e, t, s),
        u = n.getFogColor(s),
        p = n.getSunriseSunsetColor(s),
        m = n.getStarBrightness(s),
        g =
          this.prevFogBrightness +
          (this.fogBrightness - this.prevFogBrightness) * s,
        _ = (u.x + (c.x - u.x) * d) * g,
        w = (u.y + (c.y - u.y) * d) * g,
        f = (u.z + (c.z - u.z) * d) * g;
      (this.background.background = new l.Color(_, w, f)),
        (this.scene.fog = new l.Fog(new l.Color(_, w, f), 0.0025, 2 * h));
      let b = this.listSky.children[0],
        x = this.listVoid.children[0],
        k = this.listStars.children[0],
        v = this.listSunset.children[0];
      b.material.color.set(new l.Color(c.x, c.y, c.z)),
        x.material.color.set(
          new l.Color(0.2 * c.x + 0.04, 0.2 * c.y + 0.04, 0.6 * c.z + 0.1)
        ),
        m > 0 &&
          ((k.material.opacity = m),
          k.material.color.set(new l.Color(m, m, m))),
        (this.listStars.visible = m > 0),
        null !== p &&
          ((v.material.opacity = p.w),
          v.material.color.set(new l.Color(p.x, p.y, p.z)),
          (v.rotation.x = i.toRadians($ <= 0.5 ? 90 : 135))),
        (v.visible = null !== p);
    }
    this.background.fog = this.scene.fog;
  }
  renderChunks(e, t) {
    let i = this.minecraft.world,
      r = this.minecraft.settings.viewDistance;
    for (let [s, a] of i.getChunkProvider().getChunks()) {
      let o = Math.abs(e - a.x),
        n = Math.abs(t - a.z);
      if (o < r && n < r)
        for (let l in ((a.group.visible = !0), (a.loaded = !0), a.sections)) {
          let h = a.sections[l];
          this.frustum.intersectsBox(h.boundingBox) && !h.isEmpty()
            ? ((h.group.visible = !0),
              h.render(),
              h.isModified &&
                !this.chunkSectionUpdateQueue.includes(h) &&
                this.chunkSectionUpdateQueue.push(h))
            : (h.group.visible = !1);
        }
      else (a.group.visible = !1), a.loaded && a.unload();
    }
    if (
      (this.chunkSectionUpdateQueue.sort((i, r) => {
        let s;
        return (
          Math.floor(Math.pow(i.x - e, 2) + Math.pow(i.z - t, 2)) -
          Math.floor(Math.pow(r.x - e, 2) + Math.pow(r.z - t, 2))
        );
      }),
      i.group.children.sort((i, r) => {
        let s = Math.floor(
          Math.pow(i.chunkX - e, 2) + Math.pow(i.chunkZ - t, 2)
        );
        return (
          Math.floor(Math.pow(r.chunkX - e, 2) + Math.pow(r.chunkZ - t, 2)) - s
        );
      }),
      this.flushRebuild)
    ) {
      this.flushRebuild = !1;
      for (let d = 0; d < 8; d++)
        if (0 !== this.chunkSectionUpdateQueue.length) {
          let $ = this.chunkSectionUpdateQueue.shift();
          null != $ && $.rebuild(this);
        }
    }
  }
  rebuildAll() {
    let e = this.minecraft.world;
    for (let [t, i] of e.getChunkProvider().getChunks())
      i.setModifiedAllSections();
  }
  renderHand(e) {
    let t = this.minecraft.player,
      r = t.renderer.firstPersonGroup;
    r.visible = !1;
    let s = 0 === this.minecraft.settings.thirdPersonView,
      a = s ? this.itemToRender : t.inventory.getItemInSelectedSlot();
    if (!s) return;
    r.position.copy(this.camera.position),
      r.rotation.copy(this.camera.rotation),
      (r.rotation.order = "ZYX"),
      r.scale.set(0.0625, 0.0625, 0.0625);
    let o =
        this.prevEquippedProgress +
        (this.equippedProgress - this.prevEquippedProgress) * e,
      n = t.getSwingProgress(e),
      l = t.prevRenderArmPitch + (t.renderArmPitch - t.prevRenderArmPitch) * e,
      h = t.prevRenderArmYaw + (t.renderArmYaw - t.prevRenderArmYaw) * e;
    this.minecraft.settings.viewBobbing && this.bobbingAnimation(t, r, e);
    let d = Math.sin(n * Math.PI),
      $ = Math.sin(Math.sqrt(n) * Math.PI * 2),
      c = Math.sin(Math.sqrt(n) * Math.PI),
      u = Math.sin(Math.sqrt(n) * Math.PI),
      p = Math.sin(n * n * Math.PI);
    r.rotateX(i.toRadians((t.rotationPitch - l) * 0.1)),
      r.rotateY(i.toRadians((t.rotationYaw - h) * 0.1)),
      0 !== a
        ? (this.translate(r, -(0.4 * c), 0.2 * $, -(0.2 * d)),
          this.translate(
            r,
            0.5599999999999999,
            -0.52 - (1 - o) * 0.6,
            -0.7200000000000001
          ),
          r.rotateY(i.toRadians(45)),
          r.rotateY(i.toRadians(-(20 * p))),
          r.rotateZ(i.toRadians(-(20 * u))),
          r.rotateX(i.toRadians(-(80 * u))),
          (r.scale.x *= 0.4),
          (r.scale.y *= 0.4),
          (r.scale.z *= 0.4),
          t.renderer.updateFirstPerson(t))
        : (this.translate(r, -(0.3 * c), 0.4 * $, -(0.4 * d)),
          this.translate(
            r,
            0.6400000000000001,
            -0.6000000000000001 - (1 - o) * 0.6,
            -0.7200000000000001
          ),
          r.rotateY(i.toRadians(45)),
          r.rotateY(i.toRadians(70 * u)),
          r.rotateZ(i.toRadians(-(20 * p))),
          this.translate(r, -1, 3.6, 3.5),
          r.rotateZ(i.toRadians(120)),
          r.rotateX(i.toRadians(200)),
          r.rotateY(i.toRadians(-135)),
          this.translate(r, 5.6, 0, 0),
          t.renderer.renderRightHand(t, e));
  }
  renderBlockHitBox(e, t) {
    let i = e.rayTrace(5, t);
    if ((this.blockHitBox.visible = null !== i)) {
      let s = i.x,
        a = i.y,
        o = i.z,
        n = this.minecraft.world,
        l = n.getBlockAt(s, a, o),
        h = r.getById(l);
      if (0 !== l) {
        let d = h.getBoundingBox(n, s, a, o),
          $ = d.width() + 0.01,
          c = d.height() + 0.01,
          u = d.depth() + 0.01;
        this.blockHitBox.scale.set($, c, u),
          this.blockHitBox.position.set(
            s + $ / 2 / $ - 0.5 + d.maxX - $ / 2 + 0.005,
            a + c / 2 / c - 0.5 + d.maxY - c / 2 + 0.005,
            o + u / 2 / u - 0.5 + d.maxZ - u / 2 + 0.005
          );
      }
    }
    this.lastHitResult = i;
  }
  translate(e, t, i, r) {
    e.translateX(t), e.translateY(i), e.translateZ(r);
  }
  bobbingAnimation(e, t, r) {
    let s = -(
        e.prevDistanceWalked +
        (e.distanceWalked - e.prevDistanceWalked) * r
      ),
      a = e.prevCameraYaw + (e.cameraYaw - e.prevCameraYaw) * r,
      o = e.prevCameraPitch + (e.cameraPitch - e.prevCameraPitch) * r;
    this.translate(
      t,
      Math.sin(3.141593 * s) * a * 0.5,
      -Math.abs(Math.cos(s * Math.PI) * a),
      0
    ),
      t.rotateZ(i.toRadians(Math.sin(s * Math.PI) * a * 3)),
      t.rotateX(i.toRadians(5 * Math.abs(Math.cos(s * Math.PI - 0.2) * a))),
      t.rotateX(i.toRadians(o));
  }
  reset() {
    null !== this.minecraft.world &&
      this.scene.remove(this.minecraft.world.group),
      this.webRenderer.clear(),
      this.overlay.clear();
  }
}
