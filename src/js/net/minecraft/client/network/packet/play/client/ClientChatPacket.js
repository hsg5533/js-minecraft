import e from "../../../Packet.js";
export default class s extends e {
  constructor(e) {
    super(), (this.message = e);
  }
  write(e) {
    e.writeString(this.message);
  }
}
