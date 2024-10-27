import r from "../../../Packet.js";
import e from "../../../../../util/UUID.js";
import t from "../../../../../util/GameProfile.js";
export default class i extends r {
  constructor() {
    super(), (this.profile = null);
  }
  write(r) {}
  read(r) {
    let i = e.fromString(r.readString()),
      o = r.readString();
    this.profile = new t(i, o);
  }
  handle(r) {
    r.handleLoginSuccess(this);
  }
}
