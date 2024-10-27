import t from "../../../Packet.js";
export default class s extends t {
  static START_SNEAKING = 0;
  static STOP_SNEAKING = 1;
  static STOP_SLEEPING = 2;
  static START_SPRINTING = 3;
  static STOP_SPRINTING = 4;
  static RIDING_JUMP = 5;
  static OPEN_INVENTORY = 6;
  constructor(t, s, i = 0) {
    super(), (this.entityId = t), (this.state = s), (this.jumpBoost = i);
  }
  write(t) {
    t.writeVarInt(this.entityId),
      t.writeByte(this.state),
      t.writeVarInt(this.jumpBoost);
  }
}
