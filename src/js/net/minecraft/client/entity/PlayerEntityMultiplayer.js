import t from "./PlayerEntity.js";
import e from "../network/packet/play/client/ClientPlayerMovementPacket.js";
import i from "../network/packet/play/client/ClientPlayerRotationPacket.js";
import s from "../network/packet/play/client/ClientPlayerPositionPacket.js";
import r from "../network/packet/play/client/ClientPlayerPositionRotationPacket.js";
import n from "../network/packet/play/client/ClientPlayerStatePacket.js";
import a from "../network/packet/play/client/ClientSwingArmPacket.js";
export default class o extends t {
  constructor(t, e, i, s) {
    super(t, e, s),
      (this.networkHandler = i),
      (this.positionUpdateTicks = 0),
      (this.lastReportedX = 0),
      (this.lastReportedY = 0),
      (this.lastReportedZ = 0),
      (this.lastReportedYaw = 0),
      (this.lastReportedPitch = 0),
      (this.serverSprintState = !1),
      (this.serverSneakState = !1);
  }
  onUpdate() {
    super.onUpdate(), this.onUpdateWalkingPlayer();
  }
  swingArm() {
    super.swingArm(), this.networkHandler.sendPacket(new a());
  }
  onUpdateWalkingPlayer() {
    let t = this.isSprinting();
    if (t !== this.serverSprintState) {
      let a = t ? n.START_SPRINTING : n.STOP_SPRINTING;
      this.networkHandler.sendPacket(new n(this.id, a)),
        (this.serverSprintState = t);
    }
    let o = this.isSneaking();
    if (o !== this.serverSneakState) {
      let h = o ? n.START_SNEAKING : n.STOP_SNEAKING;
      this.networkHandler.sendPacket(new n(this.id, h)),
        (this.serverSneakState = o);
    }
    let l = this.x - this.lastReportedX,
      p = this.y - this.lastReportedY,
      d = this.z - this.lastReportedZ,
      k = this.rotationYaw - this.lastReportedYaw,
      c = this.rotationPitch - this.lastReportedPitch,
      P = l * l + p * p + d * d > 9e-4 || this.positionUpdateTicks >= 20,
      w = 0 !== k || 0 !== c;
    P && w
      ? this.networkHandler.sendPacket(
          new r(
            this.onGround,
            this.x,
            this.y,
            this.z,
            this.rotationYaw,
            this.rotationPitch
          )
        )
      : P
      ? this.networkHandler.sendPacket(
          new s(this.onGround, this.x, this.y, this.z)
        )
      : w
      ? this.networkHandler.sendPacket(
          new i(this.onGround, this.rotationYaw, this.rotationPitch)
        )
      : this.networkHandler.sendPacket(new e(this.onGround)),
      this.positionUpdateTicks++,
      P &&
        ((this.lastReportedX = this.x),
        (this.lastReportedY = this.y),
        (this.lastReportedZ = this.z),
        (this.positionUpdateTicks = 0)),
      w &&
        ((this.lastReportedYaw = this.rotationYaw),
        (this.lastReportedPitch = this.rotationPitch));
  }
  getNetworkHandler() {
    return this.networkHandler;
  }
}
