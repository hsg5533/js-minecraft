import t from "../../util/BoundingBox.js";
import i from "../../util/MathHelper.js";
import s from "../../util/Random.js";
export default class o {
  constructor(i, o, e) {
    (this.minecraft = i),
      (this.world = o),
      (this.id = e),
      (this.random = new s()),
      (this.renderer = null),
      (this.x = 0),
      (this.y = 0),
      (this.z = 0),
      (this.width = 0),
      (this.height = 0),
      (this.motionX = 0),
      (this.motionY = 0),
      (this.motionZ = 0),
      (this.stepHeight = 0),
      (this.onGround = !1),
      (this.rotationYaw = 0),
      (this.rotationPitch = 0),
      (this.prevX = 0),
      (this.prevY = 0),
      (this.prevZ = 0),
      (this.prevRotationYaw = 0),
      (this.prevRotationPitch = 0),
      (this.prevDistanceWalked = 0),
      (this.distanceWalked = 0),
      (this.nextStepDistance = 1),
      (this.ticksExisted = 0),
      (this.isDead = !1),
      (this.serverPositionX = 0),
      (this.serverPositionY = 0),
      (this.serverPositionZ = 0),
      (this.metaData = {}),
      (this.boundingBox = new t()),
      this.setPosition(this.x, this.y, this.z);
  }
  initRenderer() {
    if (
      ((this.renderer =
        this.minecraft.worldRenderer.entityRenderManager.createEntityRendererByEntity(
          this
        )),
      null === this.renderer)
    )
      throw Error(
        "No entity renderer for entity " + this.constructor.name + " found!"
      );
  }
  setPosition(i, s, o) {
    (this.x = i), (this.y = s), (this.z = o);
    let e = this.width / 2;
    this.boundingBox = new t(i - e, s, o - e, i + e, s + this.height, o + e);
  }
  setRotation(t, i) {
    (this.rotationYaw = t % 360), (this.rotationPitch = i % 360);
  }
  setTargetPositionAndRotation(t, i, s, o, e, h) {
    this.setPosition(t, i, s), this.setRotation(o, e);
  }
  setPositionAndRotation(t, i, s, o, e) {
    (this.prevX = this.x = t),
      (this.prevY = this.y = i),
      (this.prevZ = this.z = s),
      (this.prevRotationYaw = this.rotationYaw = o),
      (this.prevRotationPitch = this.rotationPitch = e);
    let h = this.prevRotationYaw - o;
    h < -180 && (this.prevRotationYaw += 360),
      h >= 180 && (this.prevRotationYaw -= 360),
      this.setPosition(this.x, this.y, this.z),
      this.setRotation(o, e);
  }
  onUpdate() {
    this.onEntityUpdate();
  }
  onEntityUpdate() {
    (this.prevX = this.x),
      (this.prevY = this.y),
      (this.prevZ = this.z),
      (this.prevDistanceWalked = this.distanceWalked),
      (this.prevRotationPitch = this.rotationPitch),
      (this.prevRotationYaw = this.rotationYaw),
      this.ticksExisted++;
  }
  getEntityBrightness() {
    let t = i.floor(this.x),
      s = i.floor(this.y + this.getEyeHeight()),
      o = i.floor(this.z);
    return this.world.getLightBrightness(t, s, o);
  }
  getEyeHeight() {
    return 0.8 * this.boundingBox.height();
  }
  moveCollide(t, i, s) {
    let o = t,
      e = i,
      h = s;
    if (this.onGround && this.isSneaking()) {
      for (
        ;
        0 !== t &&
        0 ===
          this.world.getCollisionBoxes(
            this.boundingBox.offset(t, -this.stepHeight, 0)
          ).length;
        o = t
      )
        t < 0.05 && t >= -0.05 ? (t = 0) : t > 0 ? (t -= 0.05) : (t += 0.05);
      for (
        ;
        0 !== s &&
        0 ===
          this.world.getCollisionBoxes(
            this.boundingBox.offset(0, -this.stepHeight, s)
          ).length;
        h = s
      )
        s < 0.05 && s >= -0.05 ? (s = 0) : s > 0 ? (s -= 0.05) : (s += 0.05);
      for (
        ;
        0 !== t &&
        0 !== s &&
        0 ===
          this.world.getCollisionBoxes(
            this.boundingBox.offset(t, -this.stepHeight, s)
          ).length;
        h = s
      )
        t < 0.05 && t >= -0.05 ? (t = 0) : t > 0 ? (t -= 0.05) : (t += 0.05),
          (o = t),
          s < 0.05 && s >= -0.05 ? (s = 0) : s > 0 ? (s -= 0.05) : (s += 0.05);
    }
    let n = this.world.getCollisionBoxes(this.boundingBox.expand(t, i, s));
    for (let $ in n) i = n[$].clipYCollide(this.boundingBox, i);
    for (let r in (this.boundingBox.move(0, i, 0), n))
      t = n[r].clipXCollide(this.boundingBox, t);
    for (let a in (this.boundingBox.move(t, 0, 0), n))
      s = n[a].clipZCollide(this.boundingBox, s);
    return (
      this.boundingBox.move(0, 0, s),
      (this.onGround = e !== i && e < 0),
      o !== t && (this.motionX = 0),
      e !== i && (this.motionY = 0),
      h !== s && (this.motionZ = 0),
      (this.x = (this.boundingBox.minX + this.boundingBox.maxX) / 2),
      (this.y = this.boundingBox.minY),
      (this.z = (this.boundingBox.minZ + this.boundingBox.maxZ) / 2),
      o !== t || h !== s
    );
  }
  kill() {
    this.isDead = !0;
  }
  isMoving() {
    return (
      0 !== this.motionX ||
      (0 !== this.motionY && !this.onGround) ||
      0 !== this.motionZ ||
      this.rotationYaw !== this.prevRotationYaw ||
      this.rotationPitch !== this.prevRotationPitch
    );
  }
  isSneaking() {
    return this.getFlag(1);
  }
  setSneaking(t) {
    this.setFlag(1, t);
  }
  updateMetaData(t) {
    for (let [i, s] of Object.entries(t)) this.metaData[s.id] = s;
  }
  getFlag(t) {
    return (
      void 0 !== this.metaData[0] && (this.metaData[0].value & (1 << t)) != 0
    );
  }
  setFlag(t, i) {
    void 0 === this.metaData[0] &&
      (this.metaData[0] = { id: 0, type: 0, value: 0 }),
      i
        ? (this.metaData[0].value |= 1 << t)
        : (this.metaData[0].value &= ~(1 << t));
  }
}
