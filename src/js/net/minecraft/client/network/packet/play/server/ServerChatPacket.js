import e from "../../../Packet.js";
export default class t extends e {
  constructor() {
    super(), (this.message = ""), (this.type = 0);
  }
  read(e) {
    (this.message = e.readTextComponent()), (this.type = e.readByte());
  }
  handle(e) {
    e.handleServerChat(this);
  }
  getMessage() {
    return this.message;
  }
  getType() {
    return this.type;
  }
}
