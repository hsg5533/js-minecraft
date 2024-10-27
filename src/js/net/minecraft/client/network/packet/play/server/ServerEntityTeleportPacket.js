import t from "../../../Packet.js";
export default class e extends t {
  constructor() {
    super(),
      (this.entityId = 0),
      (this.x = 0),
      (this.y = 0),
      (this.z = 0),
      (this.yaw = 0),
      (this.pitch = 0),
      (this.onGround = !1);
  }
  read(t) {
    (this.entityId = t.readVarInt()),
      (this.x = t.readInt()),
      (this.y = t.readInt()),
      (this.z = t.readInt()),
      (this.yaw = t.readByte()),
      (this.pitch = t.readByte()),
      (this.onGround = t.readBoolean());
  }
  handle(t) {
    t.handleEntityTeleport(this);
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
