import t from "../Tessellator.js";
import e from "../../../util/MathHelper.js";
import * as i from "../../../../../../../libraries/three.module.js";
export default class r {
  constructor(e) {
    (this.model = e),
      (this.tessellator = new t()),
      (this.group = new i.Object3D());
  }
  rebuild(t) {
    let e = {};
    this.fillMeta(t, e), (this.group.buildMeta = e), this.group.clear();
    let i = this.group.buildMeta.brightness;
    this.tessellator.setColor(i, i, i),
      this.model.rebuild(this.tessellator, this.group);
  }
  fillMeta(t, e) {
    e.brightness = t.getEntityBrightness();
  }
  isRebuildRequired(t) {
    if (void 0 === this.group.buildMeta) return !0;
    let e = {};
    this.fillMeta(t, e);
    let i = this.group.buildMeta;
    return JSON.stringify(e) !== JSON.stringify(i);
  }
  render(t, i) {
    this.prepareModel(t);
    let r = this.interpolateRotation(
        t.prevRenderYawOffset,
        t.renderYawOffset,
        i
      ),
      s = this.interpolateRotation(t.prevRotationYawHead, t.rotationYawHead, i),
      o =
        t.prevLimbSwingStrength +
        (t.limbSwingStrength - t.prevLimbSwingStrength) * i,
      l = t.limbSwingProgress - t.limbSwingStrength * (1 - i),
      n = t.prevRotationPitch + (t.rotationPitch - t.prevRotationPitch) * i,
      a = t.prevX + (t.x - t.prevX) * i,
      p = t.prevY + (t.y - t.prevY) * i,
      h = t.prevZ + (t.z - t.prevZ) * i;
    this.group.position.setX(a),
      this.group.position.setY(p + 1.4),
      this.group.position.setZ(h);
    let u = 7 / 120;
    this.group.scale.set(-u, -u, u),
      (this.group.rotation.y = e.toRadians(-r + 180));
    let g = t.ticksExisted + i,
      d = t.renderer.group;
    this.model.render(d, l, o, g, s - r, n, i);
  }
  interpolateRotation(t, e, i) {
    let r;
    for (r = e - t; r < -180; r += 360);
    for (; r >= 180; ) r -= 360;
    return t + i * r;
  }
  prepareModel(t) {
    this.isRebuildRequired(t) && this.rebuild(t);
  }
}
