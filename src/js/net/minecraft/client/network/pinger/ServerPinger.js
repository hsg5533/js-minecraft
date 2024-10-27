import t from "../NetworkManager.js";
import e from "./NetworkStatusHandler.js";
import n from "../../Minecraft.js";
import o from "../packet/handshake/client/HandshakePacket.js";
import c from "../ProtocolState.js";
import r from "../packet/status/client/StatusQueryPacket.js";
export default class i {
  constructor(t) {
    this.minecraft = t;
  }
  ping(i, s, a) {
    (this.connection = new t(this.minecraft)),
      this.connection.setNetworkHandler(new e(this.minecraft, a)),
      this.connection.connect(i, s, n.PROXY),
      this.connection.sendPacket(new o(n.PROTOCOL_VERSION, c.STATUS)),
      this.connection.sendPacket(new r());
  }
}
