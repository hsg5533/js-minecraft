import e from "../../../Packet.js";
export default class t extends e {
  constructor() {
    super(),
      (this.entityId = 0),
      (this.hardcoreMode = !1),
      (this.gameType = 0),
      (this.dimension = 0),
      (this.difficulty = 0),
      (this.maxPlayers = 0),
      (this.worldType = ""),
      (this.reducedDebugInfo = !1);
  }
  write(e) {}
  read(e) {
    this.entityId = e.readVarInt();
    let t = e.readByte();
    (this.hardcoreMode = (8 & t) == 8),
      (this.gameType = -9 & t),
      (this.dimension = e.readByte()),
      (this.difficulty = e.readByte()),
      (this.maxPlayers = e.readByte()),
      (this.worldType = e.readString()),
      (this.reducedDebugInfo = e.readBoolean());
  }
  handle(e) {
    e.handleJoinGame(this);
  }
}
