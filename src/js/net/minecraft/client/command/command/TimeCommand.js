import e from "../Command.js";
export default class t extends e {
  constructor() {
    super("time", "<set|add> <value>", "Change the time of the world");
  }
  execute(e, t) {
    if (2 !== t.length) return !1;
    let r = t[0],
      d = t[1];
    if ("add" === r) {
      if (isNaN(d)) return !1;
      (d = parseInt(d)),
        (e.world.time += d),
        e.addMessageToChat("Added " + d + " to the time");
    } else {
      if ("set" !== r) return !1;
      if (isNaN(d)) {
        if ("day" === d) d = 1e3;
        else {
          if ("night" !== d) return !1;
          d = 13e3;
        }
      } else d = parseInt(d);
      (e.world.time = d), e.addMessageToChat("Time set to " + d);
    }
    return !0;
  }
}
