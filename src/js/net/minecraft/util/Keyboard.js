export default class e {
  static state = {};
  static enabled = !1;
  static create() {
    window.addEventListener("keydown", (t) => {
      e.state[t.code] = !0;
    }),
      window.addEventListener("keyup", (t) => {
        t.preventDefault(), delete e.state[t.code];
      }),
      e.setEnabled(!0);
  }
  static setState(t, a) {
    e.state[t] = a;
  }
  static unPressAll() {
    e.state = {};
  }
  static isKeyDown(t) {
    return e.state[t] && e.enabled;
  }
  static setEnabled(t) {
    (e.enabled = t), t || e.unPressAll();
  }
}
