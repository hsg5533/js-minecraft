import e from "../../../Packet.js";
export default class t extends e {
  constructor() {
    super(), (this.reason = "");
  }
  read(e) {
    this.reason = e.readTextComponent();
  }
  handle(e) {
    e.handleDisconnect(this);
  }
  getReason() {
    return this.reason;
  }
}
