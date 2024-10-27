import t from "../../../Packet.js";
export default class a extends t {
  constructor() {
    super(), (this.entityId = 0), (this.metaData = null);
  }
  read(t) {
    (this.entityId = t.readVarInt()), (this.metaData = t.readMetaData());
  }
  handle(t) {
    t.handleEntityMetadata(this);
  }
  getEntityId() {
    return this.entityId;
  }
  getMetaData() {
    return this.metaData;
  }
}
