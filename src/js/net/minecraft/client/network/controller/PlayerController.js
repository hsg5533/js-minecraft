import t from "../../entity/PlayerEntity.js";
export default class e {
  constructor(t) {
    this.minecraft = t;
  }
  createPlayer(e) {
    return new t(this.minecraft, e, 0);
  }
  sendChatMessage(t) {
    t.startsWith("/")
      ? this.minecraft.commandHandler.handleMessage(t.substring(1))
      : this.minecraft.addMessageToChat(
          "<" + this.minecraft.player.username + "> " + t
        );
  }
}
