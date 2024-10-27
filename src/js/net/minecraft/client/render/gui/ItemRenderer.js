import * as e from "../../../../../../../libraries/three.module.js";
export default class t {
  constructor(e, t) {
    (this.minecraft = e),
      (this.window = t),
      (this.items = []),
      (this.zIndex = 0),
      (this.scheduledDirty = []);
  }
  initialize() {
    (this.camera = new e.OrthographicCamera(0, 0, 0, 0, -15, 15)),
      (this.camera.rotation.order = "ZYX"),
      (this.camera.up = new e.Vector3(0, 1, 0)),
      (this.scene = new e.Scene()),
      (this.scene.matrixAutoUpdate = !1),
      (this.webRenderer = new e.WebGLRenderer({
        canvas: this.window.canvasItems,
        antialias: !0,
      })),
      this.webRenderer.setSize(this.window.width, this.window.height),
      (this.webRenderer.shadowMap.enabled = !0),
      (this.webRenderer.shadowMap.type = e.PCFSoftShadowMap),
      (this.webRenderer.autoClear = !1),
      (this.webRenderer.sortObjects = !1),
      this.webRenderer.setClearColor(0, 0),
      this.webRenderer.clear();
  }
  render(e) {
    (this.camera.left = -this.window.width / 2),
      (this.camera.right = this.window.width / 2),
      (this.camera.top = this.window.height / 2),
      (this.camera.bottom = -this.window.height / 2),
      this.camera.setViewOffset(
        this.window.width,
        this.window.height,
        this.window.width / 2,
        this.window.height / 2,
        this.window.width,
        this.window.height
      ),
      this.camera.updateProjectionMatrix(),
      this.webRenderer.clear(),
      this.webRenderer.render(this.scene, this.camera);
  }
  prepareRender(e) {
    this.scheduledDirty.includes(e) &&
      (this.scheduledDirty.splice(this.scheduledDirty.indexOf(e), 1),
      this.destroy(e));
  }
  renderItemInGui(t, i, s, r, h, d = 1) {
    let n = t + ":" + i,
      a = this.items[n];
    if (void 0 === a) {
      let o = {},
        w = new e.Group();
      this.minecraft.worldRenderer.blockRenderer.renderGuiBlock(
        w,
        s,
        r,
        h,
        10,
        d
      ),
        (w.position.z = this.zIndex),
        w.updateMatrix(),
        this.scene.add(w),
        (o.renderId = i),
        (o.groupId = t),
        (o.group = w),
        (o.brightness = d),
        (o.typeId = s.getId()),
        (o.x = r),
        (o.y = h),
        (o.dirty = !1),
        (this.items[n] = o);
    } else
      (a.dirty ||
        a.typeId !== s.getId() ||
        a.x !== r ||
        a.y !== h ||
        a.brightness !== d) &&
        (this.scene.remove(a.group),
        delete this.items[n],
        this.renderItemInGui(t, i, s, r, h, d));
  }
  rebuildAllItems() {
    for (let e in this.items) this.items[e].dirty = !0;
    this.itemInHand = null;
  }
  reset() {
    for (let e in this.items) this.scene.remove(this.items[e].group);
    (this.items = []), this.webRenderer.clear();
  }
  scheduleDirty(e) {
    !this.scheduledDirty.includes(e) && this.scheduledDirty.push(e);
  }
  destroy(e, t = null) {
    for (let i in this.items)
      this.items[i].groupId === e &&
        (null === t || this.items[i].renderId === t) &&
        (this.scene.remove(this.items[i].group), delete this.items[i]);
  }
}
