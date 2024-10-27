export default class t {
  static HANDSHAKE = new t(-1);
  static PLAY = new t(0);
  static STATUS = new t(1);
  static LOGIN = new t(2);
  constructor(t) {
    this.id = t;
  }
  getId() {
    return this.id;
  }
  getName() {
    switch (this) {
      case t.HANDSHAKE:
        return "HANDSHAKE";
      case t.LOGIN:
        return "LOGIN";
      case t.PLAY:
        return "PLAY";
      case t.STATUS:
        return "STATUS";
      default:
        return "UNKNOWN";
    }
  }
  static fromId(t) {
    for (let e of this.values()) if (e.getId() === t) return e;
  }
  static values() {
    return [t.HANDSHAKE, t.LOGIN, t.PLAY, t.STATUS];
  }
}
