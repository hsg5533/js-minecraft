import t from "../../../Packet.js";
export default class i extends t {
  constructor() {
    super(),
      (this.position = !1),
      (this.rotation = !1),
      (this.entityId = 0),
      (this.onGround = !1),
      (this.x = 0),
      (this.y = 0),
      (this.z = 0),
      (this.yaw = 0),
      (this.pitch = 0);
  }
  read(t) {
    (this.entityId = t.readVarInt()),
      this.position &&
        ((this.x = t.readByte()),
        (this.y = t.readByte()),
        (this.z = t.readByte())),
      this.rotation && ((this.yaw = t.readByte()), (this.pitch = t.readByte())),
      (this.onGround = t.readBoolean());
  }
  handle(t) {
    t.handleEntityMovement(this);
  }
  getEntityId() {
    return this.entityId;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getZ() {
    return this.z;
  }
  getYaw() {
    return this.yaw;
  }
  getPitch() {
    return this.pitch;
  }
  isOnGround() {
    return this.onGround;
  }
}
