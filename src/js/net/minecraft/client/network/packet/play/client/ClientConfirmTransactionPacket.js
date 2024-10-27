import t from "../../../Packet.js";
export default class e extends t {
  constructor(t, e, i) {
    super(), (this.windowId = t), (this.actionId = e), (this.accepted = i);
  }
  write(t) {
    t.writeByte(this.windowId),
      t.writeShort(this.actionId),
      t.writeByte(this.accepted ? 1 : 0);
  }
}
