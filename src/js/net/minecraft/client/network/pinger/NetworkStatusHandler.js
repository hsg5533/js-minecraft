import e from "../handler/PacketHandler.js";
import t from "../../gui/screens/GuiDisconnected.js";
export default class s extends e {
  constructor(e, t) {
    super(), (this.minecraft = e), (this.callback = t);
  }
  handleStatusResponse(e) {
    this.callback(e.object);
  }
  onDisconnect() {
    this.minecraft.displayScreen(new t("NetworkManager lost"));
  }
}
