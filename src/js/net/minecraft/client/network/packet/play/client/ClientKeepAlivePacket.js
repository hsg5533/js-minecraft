import t from "../../../Packet.js";
export default class r extends t {
  constructor(t = 0) {
    super(), (this.id = t);
  }
  write(t) {
    t.writeVarInt(this.id);
  }
  getId() {
    return this.id;
  }
}
