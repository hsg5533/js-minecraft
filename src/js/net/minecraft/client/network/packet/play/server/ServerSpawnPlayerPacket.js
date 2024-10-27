import t from "../../../Packet.js";
export default class e extends t {
  constructor() {
    super(),
      (this.entityId = 0),
      (this.uuid = null),
      (this.x = 0),
      (this.y = 0),
      (this.z = 0),
      (this.yaw = 0),
      (this.pitch = 0),
      (this.currentItem = 0);
  }
  read(t) {
    (this.entityId = t.readVarInt()),
      (this.uuid = t.readUUID()),
      (this.x = t.readInt()),
      (this.y = t.readInt()),
      (this.z = t.readInt()),
      (this.yaw = t.readByte()),
      (this.pitch = t.readByte()),
      (this.currentItem = t.readShort()),
      (this.metaData = t.readMetaData());
  }
  handle(t) {
    t.handleServerSpawnPlayer(this);
  }
  getEntityId() {
    return this.entityId;
  }
  getUUID() {
    return this.uuid;
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
  getMetaData() {
    return this.metaData;
  }
  getCurrentItem() {
    return this.currentItem;
  }
}
