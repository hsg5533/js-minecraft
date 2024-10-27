import t from "../../entity/Entity.js";
import * as i from "../../../../../../../libraries/three.module.js";
import o from "../Tessellator.js";
export default class s extends t {
  constructor(t, i, o, s, r, e, h, n) {
    super(t, i),
      this.setPosition(o, s, r),
      (this.textureIndex = 0),
      (this.randomX = 3 * this.random.nextFloat()),
      (this.randomY = 3 * this.random.nextFloat()),
      (this.randomZ = (0.5 * this.random.nextFloat() + 0.5) * 2),
      (this.motionX = e + (2 * Math.random() - 1) * 0.4),
      (this.motionY = h + (2 * Math.random() - 1) * 0.4),
      (this.motionZ = n + (2 * Math.random() - 1) * 0.4);
    let m = (Math.random() + Math.random() + 1) * 0.15,
      d = Math.sqrt(
        this.motionX * this.motionX +
          this.motionY * this.motionY +
          this.motionZ * this.motionZ
      );
    (this.motionX = (this.motionX / d) * m * 0.4),
      (this.motionY = (this.motionY / d) * m * 0.4 + 0.1),
      (this.motionZ = (this.motionZ / d) * m * 0.4),
      (this.maxTicksExisted = Math.floor(
        4 / (0.9 * this.random.nextFloat() + 0.1)
      )),
      (this.color = -1),
      (this.group = null);
  }
  onUpdate() {
    super.onUpdate(),
      this.ticksExisted >= this.maxTicksExisted && this.kill(),
      (this.motionY -= 0.04),
      this.moveCollide(this.motionX, this.motionY, this.motionZ),
      (this.motionX *= 0.98),
      (this.motionY *= 0.98),
      (this.motionZ *= 0.98),
      this.onGround && ((this.motionX *= 0.7), (this.motionZ *= 0.7));
  }
  render(t, i, o, s) {
    let r = this.prevX + (this.x - this.prevX) * s,
      e = this.prevY + (this.y - this.prevY) * s,
      h = this.prevZ + (this.z - this.prevZ) * s;
    null === this.group && this.rebuild();
    let n = 0.1 * this.randomZ;
    (this.group.scale.x = n),
      (this.group.scale.y = n),
      (this.group.scale.z = n),
      (this.group.rotation.x = t),
      (this.group.rotation.y = i),
      (this.group.rotation.z = o),
      (this.group.position.x = r),
      (this.group.position.y = e),
      (this.group.position.z = h),
      this.group.updateMatrix();
  }
  rebuild() {
    (this.group = new i.Object3D()), (this.group.rotation.order = "ZYX");
    let t = new o();
    t.bindTexture(this.minecraft.worldRenderer.textureTerrain);
    let s = ((this.textureIndex % 16) + this.randomX / 4) / 16,
      r = s + 0.015625,
      e = (Math.floor(this.textureIndex / 16) + this.randomX / 4) / 16,
      h = e + 0.015625;
    (e = 1 - e), (h = 1 - h);
    let n = ((this.color >> 16) & 255) / 255,
      m = ((this.color >> 8) & 255) / 255,
      d = (255 & this.color) / 255,
      a = this.getEntityBrightness();
    t.startDrawing(),
      t.setColor(n * a, m * a, d * a),
      t.addVertexWithUV(0, 1, 0, s, e),
      t.addVertexWithUV(0, 0, 0, s, h),
      t.addVertexWithUV(1, 0, 0, r, h),
      t.addVertexWithUV(1, 1, 0, r, e);
    t.draw(this.group).geometry.center(),
      this.minecraft.worldRenderer.scene.add(this.group);
  }
  kill() {
    super.kill(),
      null !== this.group &&
        this.minecraft.worldRenderer.scene.remove(this.group);
  }
}
