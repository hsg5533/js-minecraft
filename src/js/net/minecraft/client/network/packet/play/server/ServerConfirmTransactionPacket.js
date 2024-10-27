import t from "../../../Packet.js";
export default class e extends t {
  constructor() {
    super(), (this.windowId = 0), (this.actionId = 0), (this.accepted = !1);
  }
  read(t) {
    (this.windowId = t.readByte()),
      (this.actionId = t.readShort()),
      (this.accepted = t.readBoolean());
  }
  handle(t) {
    t.handleConfirmTransaction(this);
  }
  getWindowId() {
    return this.windowId;
  }
  getActionId() {
    return this.actionId;
  }
  isAccepted() {
    return this.accepted;
  }
}
