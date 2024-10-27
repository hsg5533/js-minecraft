import t from "./EntityLiving.js";
import i from "../world/block/Block.js";
import e from "../../util/MathHelper.js";
import s from "../../util/Keyboard.js";
import o from "../../util/Vector3.js";
import { BlockRegistry as h } from "../world/block/BlockRegistry.js";
import r from "../inventory/inventory/InventoryPlayer.js";
export default class n extends t {
  static name = "PlayerEntity";
  constructor(t, i, e) {
    super(t, i, e),
      (this.inventory = new r()),
      (this.username = "Player"),
      (this.collision = !1),
      (this.jumpMovementFactor = 0.02),
      (this.speedInAir = 0.02),
      (this.flySpeed = 0.05),
      (this.stepHeight = 0.5),
      (this.flyToggleTimer = 0),
      (this.sprintToggleTimer = 0),
      (this.sprinting = !1),
      (this.flying = !1),
      (this.prevFovModifier = 0),
      (this.fovModifier = 0),
      (this.timeFovChanged = 0),
      (this.renderArmPitch = 0),
      (this.renderArmYaw = 0),
      (this.prevRenderArmPitch = 0),
      (this.prevRenderArmYaw = 0),
      (this.cameraYaw = 0),
      (this.cameraPitch = 0),
      (this.prevCameraYaw = 0),
      (this.prevCameraPitch = 0),
      (this.width = 0.6),
      (this.height = 1.8);
  }
  respawn() {
    let t = this.world.getSpawn();
    this.setPosition(t.x, t.y, t.z);
  }
  turn(t, i) {
    let e = this.minecraft.settings.sensitivity / 500;
    (this.rotationYaw = this.rotationYaw + t * e),
      (this.rotationPitch = this.rotationPitch - i * e),
      this.rotationPitch < -90 && (this.rotationPitch = -90),
      this.rotationPitch > 90 && (this.rotationPitch = 90);
  }
  onUpdate() {
    super.onUpdate();
  }
  onLivingUpdate() {
    (this.prevCameraYaw = this.cameraYaw),
      (this.prevCameraPitch = this.cameraPitch),
      this.sprintToggleTimer > 0 && --this.sprintToggleTimer,
      this.flyToggleTimer > 0 && --this.flyToggleTimer;
    let t = this.moveForward,
      i = this.jumping;
    this === this.minecraft.player && this.updateKeyboardInput(),
      !i &&
        this.jumping &&
        (0 === this.flyToggleTimer
          ? (this.flyToggleTimer = 7)
          : ((this.flying = !this.flying),
            (this.flyToggleTimer = 0),
            this.updateFOVModifier())),
      0 === t &&
        this.moveForward > 0 &&
        (0 === this.sprintToggleTimer
          ? (this.sprintToggleTimer = 7)
          : ((this.sprinting = !0),
            (this.sprintToggleTimer = 0),
            this.updateFOVModifier())),
      this.sprinting &&
        (this.moveForward <= 0 || this.collision || this.isSneaking()) &&
        ((this.sprinting = !1), this.updateFOVModifier()),
      super.onLivingUpdate(),
      (this.jumpMovementFactor = this.speedInAir),
      this.sprinting &&
        (this.jumpMovementFactor =
          this.jumpMovementFactor + 0.3 * this.speedInAir);
    let e = Math.sqrt(
        this.motionX * this.motionX + this.motionZ * this.motionZ
      ),
      s = 15 * Math.atan(-(0.2 * this.motionY));
    e > 0.1 && (e = 0.1),
      (!this.onGround || this.health <= 0) && (e = 0),
      (this.onGround || this.health <= 0) && (s = 0),
      (this.cameraYaw += (e - this.cameraYaw) * 0.4),
      (this.cameraPitch += (s - this.cameraPitch) * 0.8);
  }
  isInWater() {
    return (
      this.world.getBlockAt(
        this.getBlockPosX(),
        this.getBlockPosY(),
        this.getBlockPosZ()
      ) === h.WATER.getId()
    );
  }
  isHeadInWater() {
    let t = this.world.minecraft.worldRenderer.camera.position;
    return (
      this.world.getBlockAt(
        Math.floor(t.x),
        Math.floor(t.y + 0.12),
        Math.floor(t.z)
      ) === h.WATER.getId()
    );
  }
  jump() {
    if (((this.motionY = 0.42), this.sprinting)) {
      let t = e.toRadians(this.rotationYaw + 180);
      (this.motionX -= 0.2 * Math.sin(t)), (this.motionZ += 0.2 * Math.cos(t));
    }
  }
  travelFlying(t, i, e) {
    this.isSneaking() &&
      ((this.moveStrafing = e / 0.3),
      (this.moveForward = t / 0.3),
      (this.motionY -= 3 * this.flySpeed)),
      this.jumping && (this.motionY += 3 * this.flySpeed);
    let s = this.motionY,
      o = this.jumpMovementFactor;
    (this.jumpMovementFactor = this.flySpeed * (this.sprinting ? 2 : 1)),
      this.travel(t, i, e),
      (this.motionY = 0.6 * s),
      (this.jumpMovementFactor = o),
      this.onGround && (this.flying = !1);
  }
  travelInWater(t, i, e) {
    this.moveRelative(t, i, e, 0.02),
      (this.collision = this.moveCollide(
        -this.motionX,
        this.motionY,
        -this.motionZ
      )),
      (this.motionX *= 0.8),
      (this.motionY *= 0.8),
      (this.motionZ *= 0.8),
      (this.motionY -= 0.02);
  }
  travel(t, s, o) {
    let h = this.onGround && this.isSneaking(),
      r = this.x,
      n = this.z;
    if (this === this.world.minecraft.player) {
      let a = 0.91 * this.getBlockSlipperiness(),
        $;
      ($ = this.onGround
        ? this.getAIMoveSpeed() * (0.16277136 / (a * a * a))
        : this.jumpMovementFactor),
        this.moveRelative(t, s, o, $);
      let l = 0.91 * this.getBlockSlipperiness();
      (this.collision = this.moveCollide(
        -this.motionX,
        this.motionY,
        -this.motionZ
      )),
        this.flying || (this.motionY -= 0.08),
        (this.motionX *= l),
        (this.motionY *= 0.98),
        (this.motionZ *= l);
    }
    if (!h) {
      let m = e.floor(this.x),
        g = e.floor(this.y - 0.2),
        p = e.floor(this.z),
        d = this.world.getBlockAt(m, g, p),
        c = this.x - r,
        f = this.z - n;
      if (
        ((this.distanceWalked += 0.6 * Math.sqrt(c * c + f * f)),
        this.distanceWalked > this.nextStepDistance && 0 !== d)
      ) {
        this.nextStepDistance = this.distanceWalked + 1;
        let v = i.getById(d);
        if (null !== v) {
          let y = v.getSound();
          v.isLiquid() ||
            this.minecraft.soundManager.playSound(
              y.getStepSound(),
              this.x,
              this.y,
              this.z,
              0.15,
              y.getPitch()
            );
        }
      }
    }
  }
  getBlockSlipperiness() {
    return this.onGround ? 0.6 : 1;
  }
  getAIMoveSpeed() {
    return this.sprinting ? 0.13 : 0.1;
  }
  moveRelative(t, i, s, o) {
    let h = s * s + i * i + t * t;
    if (h >= 1e-4) {
      (h = Math.sqrt(h)) < 1 && (h = 1), (s *= h = o / h), (i *= h), (t *= h);
      let r = e.toRadians(this.rotationYaw + 180),
        n = Math.sin(r),
        a = Math.cos(r);
      (this.motionX += s * a - t * n),
        (this.motionY += i),
        (this.motionZ += t * a + s * n);
    }
  }
  updateKeyboardInput() {
    let t = 0,
      i = 0,
      e = !1,
      o = !1;
    this.minecraft.hasInGameFocus() &&
      (s.isKeyDown("KeyR"),
      s.isKeyDown("KeyW") && t++,
      s.isKeyDown("KeyS") && t--,
      s.isKeyDown("KeyA") && i++,
      s.isKeyDown("KeyD") && i--,
      s.isKeyDown("Space") && (e = !0),
      s.isKeyDown(this.minecraft.settings.keySprinting) &&
        this.moveForward > 0 &&
        !this.isSneaking() &&
        !this.sprinting &&
        0 !== this.motionX &&
        0 !== this.motionZ &&
        ((this.sprinting = !0), this.updateFOVModifier()),
      s.isKeyDown(this.minecraft.settings.keyCrouching) && (o = !0),
      o && ((i *= 0.3), (t *= 0.3))),
      (this.moveForward = t),
      (this.moveStrafing = i),
      (this.jumping = e),
      this.setSneaking(o);
  }
  getEyeHeight() {
    return this.isSneaking() ? 1.5 : 1.62;
  }
  updateFOVModifier() {
    let t = 1;
    this.sprinting && (t += 1),
      this.flying && (t *= 1.1),
      this.setFOVModifier((t - 1) * 10);
  }
  setFOVModifier(t) {
    (this.prevFovModifier = this.fovModifier),
      (this.fovModifier = t),
      (this.timeFovChanged = Date.now());
  }
  getFOVModifier() {
    let t = Date.now() - this.timeFovChanged,
      i = this.prevFovModifier - this.fovModifier;
    return t > 100 ? this.fovModifier : this.prevFovModifier - (i / 100) * t;
  }
  getBlockPosX() {
    return this.x - (this.x < 0 ? 1 : 0);
  }
  getBlockPosY() {
    return this.y - (this.y < 0 ? 1 : 0);
  }
  getBlockPosZ() {
    return this.z - (this.z < 0 ? 1 : 0);
  }
  getPositionEyes(t) {
    if (1 === t) return new o(this.x, this.y + this.getEyeHeight(), this.z);
    {
      let i = this.prevX + (this.x - this.prevX) * t,
        e = this.prevY + (this.y - this.prevY) * t + this.getEyeHeight(),
        s = this.prevZ + (this.z - this.prevZ) * t;
      return new o(i, e, s);
    }
  }
  getLook(t) {
    return this.getVectorForRotation(this.rotationPitch, this.rotationYaw);
  }
  getVectorForRotation(t, i) {
    let e = -Math.cos(-(0.017453292 * t));
    return new o(
      Math.sin(-(0.017453292 * i) - Math.PI) * e,
      Math.sin(-(0.017453292 * t)),
      Math.cos(-(0.017453292 * i) - Math.PI) * e
    );
  }
  rayTrace(t, i) {
    let e = this.getPositionEyes(i),
      s = this.getLook(i),
      o = e.addVector(s.x * t, s.y * t, s.z * t);
    return this.world.rayTraceBlocks(e, o);
  }
  isSprinting() {
    return this.sprinting;
  }
}
