export default class t {
  static REQUEST_EXIT = new t(0, 1);
  static EXITED = new t(1, -1);
  static REQUEST_LOCK = new t(2, 3);
  static LOCKED = new t(3, -1);
  constructor(t, E) {
    (this.id = t), (this.intentId = E);
  }
  getIntent() {
    return -1 === this.intentId ? null : t.getById(this.intentId);
  }
  isLock() {
    return this === t.REQUEST_LOCK || this === t.LOCKED;
  }
  isRequest() {
    return this === t.REQUEST_LOCK || this === t.REQUEST_EXIT;
  }
  isIntent() {
    return !this.isRequest();
  }
  opposite() {
    switch (this) {
      case t.REQUEST_EXIT:
        return t.REQUEST_LOCK;
      case t.REQUEST_LOCK:
        return t.REQUEST_EXIT;
      case t.EXITED:
        return t.LOCKED;
      case t.LOCKED:
        return t.EXITED;
      default:
        return null;
    }
  }
  getName() {
    switch (this) {
      case t.REQUEST_EXIT:
        return "REQUEST_EXIT";
      case t.REQUEST_LOCK:
        return "REQUEST_LOCK";
      case t.EXITED:
        return "EXITED";
      case t.LOCKED:
        return "LOCKED";
      default:
        return "UNKNOWN";
    }
  }
  static getById(E) {
    switch (E) {
      case 0:
        return t.REQUEST_EXIT;
      case 1:
        return t.EXITED;
      case 2:
        return t.REQUEST_LOCK;
      case 3:
        return t.LOCKED;
      default:
        return null;
    }
  }
}
