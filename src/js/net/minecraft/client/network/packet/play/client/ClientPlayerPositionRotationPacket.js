import t from "./ClientPlayerMovementPacket.js";
export default class s extends t {
  constructor(t, s, i, e, o, h) {
    super(t),
      (this.position = !0),
      (this.rotation = !0),
      (this.x = s),
      (this.y = i),
      (this.z = e),
      (this.yaw = o),
      (this.pitch = h);
  }
}
