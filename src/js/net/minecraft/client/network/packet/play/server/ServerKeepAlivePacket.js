import e from "../../../Packet.js";
export default class t extends e {
  constructor() {
    super(), (this.id = 0);
  }
  read(e) {
    this.id = e.readVarInt();
  }
  handle(e) {
    e.handleKeepAlive(this);
  }
  getId() {
    return this.id;
  }
}
