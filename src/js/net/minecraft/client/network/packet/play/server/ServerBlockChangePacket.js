import t from "../../../Packet.js";
export default class o extends t {
  constructor() {
    super(), (this.blockPosition = null);
  }
  read(t) {
    (this.blockPosition = t.readBlockPosition()),
      (this.blockState = t.readVarInt());
  }
  handle(t) {
    t.handleBlockChange(this);
  }
  getBlockPosition() {
    return this.blockPosition;
  }
  getBlockState() {
    return this.blockState;
  }
}
