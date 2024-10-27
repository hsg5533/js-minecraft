import e from "../../../Packet.js";
import r from "../../../../../util/GameProfile.js";
export default class a extends e {
  constructor() {
    super(), (this.players = []);
  }
  read(e) {
    this.action = e.readVarInt();
    let a = e.readVarInt();
    for (let t = 0; t < a; t++) {
      let n = null,
        l = 0,
        d = 0,
        s = null;
      switch (this.action) {
        case 0:
          n = new r(e.readUUID(), e.readString(16));
          let o = e.readVarInt();
          for (let i = 0; i < o; i++)
            e.readString(32767),
              e.readString(32767),
              e.readBoolean() && e.readString(32767);
          (l = e.readVarInt()),
            (d = e.readVarInt()),
            e.readBoolean() && (s = e.readTextComponent());
          break;
        case 1:
          (n = new r(e.readUUID(), null)), (l = e.readVarInt());
          break;
        case 2:
          (n = new r(e.readUUID(), null)), (d = e.readVarInt());
          break;
        case 3:
          (n = new r(e.readUUID(), null)),
            e.readBoolean() && (s = e.readTextComponent());
          break;
        case 4:
          n = new r(e.readUUID(), null);
      }
      this.players.push({ profile: n, ping: d, gameType: l, displayName: s });
    }
  }
  handle(e) {
    e.handleServerPlayerListEntry(this);
  }
  getAction() {
    return this.action;
  }
  getPlayers() {
    return this.players;
  }
}
