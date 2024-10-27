import e from "../../../Packet.js";
export default class r extends e {
  constructor(e) {
    super(), (this.username = e);
  }
  write(e) {
    e.writeString(this.username);
  }
  read(e) {
    this.username = e.readString();
  }
}
