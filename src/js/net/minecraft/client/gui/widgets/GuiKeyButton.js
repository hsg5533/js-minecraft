import s from "./GuiButton.js";
export default class t extends s {
  constructor(s, t, i, e, n, h, r) {
    super(s + ": " + t, i, e, n, h, (s) => r(this.key)),
      (this.name = s),
      (this.listening = !1);
  }
  onPress() {
    (this.listening = !0), (this.string = "...");
  }
  keyTyped(s) {
    this.listening &&
      ((this.string = this.name + ": " + s),
      (this.listening = !1),
      (this.key = s),
      this.callback());
  }
}
