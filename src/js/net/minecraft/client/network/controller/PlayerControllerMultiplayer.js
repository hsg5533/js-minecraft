import t from "./PlayerController.js";
import e from "../../entity/PlayerEntityMultiplayer.js";
import r from "../packet/play/client/ClientChatPacket.js";
export default class n extends t {
  constructor(t, e, r) {
    super(t), (this.entityId = r), (this.networkHandler = e);
  }
  createPlayer(t) {
    return new e(this.minecraft, t, this.networkHandler, this.entityId);
  }
  sendChatMessage(t) {
    this.networkHandler.sendPacket(new r(t));
  }
  getNetworkHandler() {
    return this.networkHandler;
  }
}
