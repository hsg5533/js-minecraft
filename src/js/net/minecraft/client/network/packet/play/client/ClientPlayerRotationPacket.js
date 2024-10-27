import t from "./ClientPlayerMovementPacket.js";
export default class e extends t {
  constructor(t, e, s) {
    super(t), (this.rotation = !0), (this.yaw = e), (this.pitch = s);
  }
}
