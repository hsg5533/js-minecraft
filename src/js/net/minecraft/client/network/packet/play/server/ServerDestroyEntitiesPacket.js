import t from "../../../Packet.js";
export default class e extends t {
  constructor() {
    super(), (this.entityIds = []);
  }
  read(t) {
    let e = t.readVarInt();
    for (let s = 0; s < e; s++) this.entityIds.push(t.readVarInt());
  }
  handle(t) {
    t.handleDestroyEntities(this);
  }
  getEntityIds() {
    return this.entityIds;
  }
}
