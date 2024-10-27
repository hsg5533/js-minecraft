import t from "../../../Packet.js";
export default class i extends t {
  constructor(t) {
    super(),
      (this.position = !1),
      (this.rotation = !1),
      (this.onGround = t),
      (this.x = 0),
      (this.y = 0),
      (this.z = 0),
      (this.yaw = 0),
      (this.pitch = 0);
  }
  write(t) {
    this.position &&
      (t.writeDouble(this.x), t.writeDouble(this.y), t.writeDouble(this.z)),
      this.rotation && (t.writeFloat(this.yaw), t.writeFloat(this.pitch)),
      t.writeBoolean(this.onGround);
  }
}
