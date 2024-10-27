import e from "../../../Packet.js";
export default class t extends e {
  constructor() {
    super();
  }
  write(e) {}
  read(e) {
    this.object = JSON.parse(e.readString());
  }
  handle(e) {
    e.handleStatusResponse(this);
  }
}
