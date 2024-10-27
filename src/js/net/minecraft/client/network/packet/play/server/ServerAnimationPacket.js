import t from "../../../Packet.js";
export default class i extends t {
  static SWING_ARM = 0;
  static DAMAGE = 1;
  static LEAVE_BED = 2;
  static EAT_FOOD = 3;
  static CRITICAL_HIT = 4;
  static ENCHANTMENT_CRITICAL_HIT = 5;
  constructor() {
    super(), (this.entityId = 0), (this.animation = 0);
  }
  read(t) {
    (this.entityId = t.readVarInt()), (this.animation = t.readByte());
  }
  handle(t) {
    t.handleAnimation(this);
  }
  getEntityId() {
    return this.entityId;
  }
  getAnimation() {
    return this.animation;
  }
}
