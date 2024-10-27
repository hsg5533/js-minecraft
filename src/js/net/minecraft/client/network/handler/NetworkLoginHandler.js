import e from "./PacketHandler.js";
import t from "../packet/login/client/EncryptionResponsePacket.js";
import n from "../util/CryptManager.js";
import r from "../../gui/screens/GuiDisconnected.js";
import o from "../util/Authentication.js";
import s from "./NetworkPlayHandler.js";
import a from "../ProtocolState.js";
export default class i extends e {
  constructor(e) {
    super(), (this.networkManager = e), (this.authentication = new o(e));
  }
  handleEncryptionRequest(e) {
    let r = n.createNewSharedKey(),
      o = this.networkManager.minecraft.getSession(),
      s = this.authentication.createServerHash(e.serverId, r, e.publicKey);
    this.authentication.joinServer(o.getProfile(), o.getAccessToken(), s),
      this.networkManager.sendPacket(new t(r, e.publicKey, e.verifyToken)),
      this.networkManager.enableEncryption(r);
  }
  handleLoginDisconnect(e) {
    console.log("[Network] Disconnected from server: " + e.message),
      this.networkManager.minecraft.displayScreen(new r(e.message));
  }
  handleLoginSuccess(e) {
    this.networkManager.setState(a.PLAY),
      this.networkManager.setNetworkHandler(
        new s(this.networkManager, e.profile)
      );
  }
  handleEnableCompression(e) {
    this.networkManager.setCompressionThreshold(e.getCompressionThreshold());
  }
  onDisconnect() {
    this.networkManager.minecraft.isInGame() &&
      this.networkManager.minecraft.displayScreen(
        new r("Disconnected from server")
      );
  }
}
