import t from "./Entity.js";
import i from "../../util/MathHelper.js";
export default class s extends t {
  constructor(t, i, s) {
    super(t, i, s),
      (this.jumpTicks = 0),
      (this.jumping = !1),
      (this.moveForward = 0),
      (this.moveStrafing = 0),
      (this.swingProgress = 0),
      (this.prevSwingProgress = 0),
      (this.swingProgressInt = 0),
      (this.isSwingInProgress = !1),
      (this.renderYawOffset = 0),
      (this.rotationYawHead = 0),
      (this.prevRotationYawHead = 0),
      (this.prevRenderYawOffset = 0),
      (this.limbSwingProgress = 0),
      (this.limbSwingStrength = 0),
      (this.prevLimbSwingStrength = 0),
      (this.health = 20);
  }
  onUpdate() {
    for (
      super.onUpdate(), this.onLivingUpdate(), this.updateBodyRotation();
      this.rotationYaw - this.prevRotationYaw < -180;

    )
      this.prevRotationYaw -= 360;
    for (; this.rotationYaw - this.prevRotationYaw >= 180; )
      this.prevRotationYaw += 360;
    for (; this.renderYawOffset - this.prevRenderYawOffset < -180; )
      this.prevRenderYawOffset -= 360;
    for (; this.renderYawOffset - this.prevRenderYawOffset >= 180; )
      this.prevRenderYawOffset += 360;
    for (; this.rotationPitch - this.prevRotationPitch < -180; )
      this.prevRotationPitch -= 360;
    for (; this.rotationPitch - this.prevRotationPitch >= 180; )
      this.prevRotationPitch += 360;
    for (; this.rotationYawHead - this.prevRotationYawHead < -180; )
      this.prevRotationYawHead -= 360;
    for (; this.rotationYawHead - this.prevRotationYawHead >= 180; )
      this.prevRotationYawHead += 360;
  }
  onLivingUpdate() {
    if (
      (this.jumpTicks > 0 && --this.jumpTicks,
      this.rotationPositionIncrements > 0)
    ) {
      let t =
          this.x + (this.targetX - this.x) / this.rotationPositionIncrements,
        s = this.y + (this.targetY - this.y) / this.rotationPositionIncrements,
        r = this.z + (this.targetZ - this.z) / this.rotationPositionIncrements,
        e = i.wrapAngleTo180(this.targetYaw - this.rotationYaw);
      (this.rotationYaw =
        this.rotationYaw + e / this.rotationPositionIncrements),
        (this.rotationPitch =
          this.rotationPitch +
          (this.targetPitch - this.rotationPitch) /
            this.rotationPositionIncrements),
        this.rotationPositionIncrements--,
        this.setPosition(t, s, r),
        this.setRotation(this.rotationYaw, this.rotationPitch);
    }
    (this.rotationYawHead = this.rotationYaw),
      0.003 > Math.abs(this.motionX) && (this.motionX = 0),
      0.003 > Math.abs(this.motionY) && (this.motionY = 0),
      0.003 > Math.abs(this.motionZ) && (this.motionZ = 0),
      this.jumping
        ? this.isInWater()
          ? (this.motionY += 0.04)
          : this.onGround &&
            0 === this.jumpTicks &&
            (this.jump(), (this.jumpTicks = 10))
        : (this.jumpTicks = 0),
      (this.moveForward *= 0.98),
      (this.moveStrafing *= 0.98),
      this.moveEntityWithHeading(this.moveForward, this.moveStrafing);
  }
  moveEntityWithHeading(t, i) {
    this.flying
      ? this.travelFlying(t, 0, i)
      : this.isInWater()
      ? this.travelInWater(t, 0, i)
      : this.travel(t, 0, i),
      (this.prevLimbSwingStrength = this.limbSwingStrength);
    let s = this.x - this.prevX,
      r = this.z - this.prevZ,
      e = 4 * Math.sqrt(s * s + r * r);
    e > 1 && (e = 1),
      (this.limbSwingStrength += (e - this.limbSwingStrength) * 0.4),
      (this.limbSwingProgress += this.limbSwingStrength);
  }
  onEntityUpdate() {
    (this.prevRenderYawOffset = this.renderYawOffset),
      (this.prevRotationYawHead = this.rotationYawHead),
      (this.prevSwingProgress = this.swingProgress),
      (this.prevRenderArmYaw = this.renderArmYaw),
      (this.prevRenderArmPitch = this.renderArmPitch),
      (this.renderArmPitch =
        this.renderArmPitch + (this.rotationPitch - this.renderArmPitch) * 0.5),
      (this.renderArmYaw =
        this.renderArmYaw + (this.rotationYaw - this.renderArmYaw) * 0.5),
      this.updateArmSwingProgress(),
      super.onEntityUpdate();
  }
  updateBodyRotation() {
    let t = this.x - this.prevX,
      s = this.z - this.prevZ,
      r = this.renderYawOffset;
    t * t + s * s > 0.0025000002 &&
      (r = (180 * Math.atan2(s, t)) / Math.PI - 90),
      this.swingProgress > 0 && (r = this.rotationYaw);
    let e = i.wrapAngleTo180(r - this.renderYawOffset);
    this.renderYawOffset += 0.3 * e;
    let n = i.wrapAngleTo180(this.rotationYaw - this.renderYawOffset);
    n < -75 && (n = -75),
      n >= 75 && (n = 75),
      (this.renderYawOffset = this.rotationYaw - n),
      n * n > 2500 && (this.renderYawOffset += 0.2 * n);
  }
  setTargetPositionAndRotation(t, i, s, r, e, n) {
    (this.targetX = t),
      (this.targetY = i),
      (this.targetZ = s),
      (this.targetYaw = r),
      (this.targetPitch = e),
      (this.rotationPositionIncrements = n);
  }
  swingArm() {
    (!this.isSwingInProgress ||
      this.swingProgressInt >= 3 ||
      this.swingProgressInt < 0) &&
      ((this.swingProgressInt = -1), (this.isSwingInProgress = !0));
  }
  updateArmSwingProgress() {
    this.isSwingInProgress
      ? (++this.swingProgressInt,
        this.swingProgressInt >= 6 &&
          ((this.swingProgressInt = 0), (this.isSwingInProgress = !1)))
      : (this.swingProgressInt = 0),
      (this.swingProgress = this.swingProgressInt / 6);
  }
  getSwingProgress(t) {
    let i = this.swingProgress - this.prevSwingProgress;
    return i < 0 && i++, this.prevSwingProgress + i * t;
  }
  computeAngleWithBound(t, s, r) {
    let e = i.wrapAngleTo180(t - s);
    return e < -r && (e = -r), e >= r && (e = r), t - e;
  }
  setRotationYawHead(t) {
    this.targetYaw = t;
  }
}
