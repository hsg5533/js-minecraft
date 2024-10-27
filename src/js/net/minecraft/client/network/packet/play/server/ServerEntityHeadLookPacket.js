import t from "../../../Packet.js";
export default class e extends t {
  constructor() {
    super(), (this.entityId = 0), (this.headYaw = 0);
  }
  read(t) {
    (this.entityId = t.readVarInt()), (this.headYaw = t.readByte());
  }
  handle(t) {
    t.handleEntityHeadLook(this);
  }
  getEntityId() {
    return this.entityId;
  }
  getHeadYaw() {
    return this.headYaw;
  }
}
