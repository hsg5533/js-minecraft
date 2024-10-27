import t from "../../../Packet.js";
export default class e extends t {
  constructor() {
    super(),
      (this.x = 0),
      (this.y = 0),
      (this.z = 0),
      (this.yaw = 0),
      (this.pitch = 0),
      (this.flags = 0);
  }
  read(t) {
    (this.x = t.readDouble()),
      (this.y = t.readDouble()),
      (this.z = t.readDouble()),
      (this.yaw = t.readFloat()),
      (this.pitch = t.readFloat()),
      (this.flags = t.readByte());
  }
  handle(t) {
    t.handleServerPlayerPositionRotation(this);
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
  getFlags() {
    return this.flags;
  }
  hasFlag(t) {
    return (this.flags & t) === t;
  }
}
