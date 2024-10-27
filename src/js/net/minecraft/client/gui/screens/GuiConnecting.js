import t from "../GuiScreen.js";
import e from "../widgets/GuiButton.js";
import n from "../../network/NetworkManager.js";
import r from "../../network/packet/handshake/client/HandshakePacket.js";
import i from "../../network/ProtocolState.js";
import s from "../../network/handler/NetworkLoginHandler.js";
import o from "../../Minecraft.js";
import a from "../../network/packet/login/client/LoginStartPacket.js";
export default class h extends t {
  constructor(t, e) {
    if (
      (super(),
      (this.previousScreen = t),
      (this.connecting = !1),
      (this.networkManager = null),
      e.includes(":"))
    ) {
      let n = e.split(":");
      (this.address = n[0]), (this.port = parseInt(n[1]));
    } else (this.address = e), (this.port = 25565);
  }
  connect(t, e) {
    (this.networkManager = new n(this.minecraft)),
      this.networkManager.setNetworkHandler(new s(this.networkManager)),
      this.networkManager.connect(t, e, o.PROXY),
      this.networkManager.sendPacket(new r(o.PROTOCOL_VERSION, i.LOGIN)),
      this.networkManager.sendPacket(
        new a(this.minecraft.getSession().getProfile().getUsername())
      );
  }
  init() {
    super.init();
    let t = this.height / 2 - 50;
    this.buttonList.push(
      new e("Cancel", this.width / 2 - 100, t + 130, 200, 20, () => {
        this.minecraft.displayScreen(this.previousScreen);
      })
    ),
      this.connecting ||
        ((this.connecting = !0), this.connect(this.address, this.port));
  }
  drawScreen(t, e, n, r) {
    this.drawBackground(t, this.textureBackground, this.width, this.height),
      this.drawCenteredString(
        t,
        "Connecting to server...",
        this.width / 2,
        this.height / 2 - 20
      ),
      super.drawScreen(t, e, n, r);
  }
  onClose() {
    super.onClose(),
      null !== this.networkManager &&
        this.networkManager.getState() !== i.PLAY &&
        this.networkManager.close();
  }
}
