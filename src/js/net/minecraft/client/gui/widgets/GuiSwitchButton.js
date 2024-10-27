import t from "./GuiButton.js";
export default class s extends t {
  constructor(t, s, e, i, a, h, l) {
    super(t, e, i, a, h, (t) => l(this.value)),
      (this.settingName = t),
      (this.value = s),
      (this.string = this.getDisplayName());
  }
  onPress() {
    (this.value = !this.value),
      (this.string = this.getDisplayName()),
      this.callback();
  }
  getDisplayName() {
    return this.settingName + ": " + (this.value ? "ON" : "OFF");
  }
}
