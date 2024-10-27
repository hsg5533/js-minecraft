import e from "../Command.js";
export default class t extends e {
  constructor() {
    super("tp", "<x> <y> <y>", "Teleport to a position");
  }
  execute(e, t) {
    if (3 !== t.length) return !1;
    let o = parseInt(t[0]),
      r = parseInt(t[1]),
      s = parseInt(t[2]);
    return (
      !(isNaN(o) || isNaN(r) || isNaN(s)) &&
      (e.player.setPosition(o, r, s),
      e.addMessageToChat("Teleported to " + o + " " + r + " " + s),
      !0)
    );
  }
}
