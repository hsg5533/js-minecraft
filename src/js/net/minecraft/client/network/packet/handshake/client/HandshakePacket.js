import t from "../../../Packet.js";
export default class e extends t {
  constructor(t, e) {
    super(), (this.version = t), (this.nextState = e);
  }
  write(t) {
    t.writeVarInt(this.version),
      t.writeString("localhost"),
      t.writeShort(25565),
      t.writeVarInt(this.nextState.getId());
  }
  read(t) {}
}
