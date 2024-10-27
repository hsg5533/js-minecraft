import i from "./GuiButton.js";
import t from "../../../util/MathHelper.js";
export default class s extends i {
  constructor(i, t, s, h, e, a, r, n, l) {
    super(i, e, a, r, n, (i) => l(this.value)),
      (this.settingName = i),
      (this.value = t),
      (this.min = s),
      (this.max = h),
      (this.enabled = !1),
      (this.dragging = !1),
      this.setDisplayNameBuilder((i, t) => i + ": " + t);
  }
  mouseClicked(i, t, s) {
    if (this.isMouseOver(i, t)) return (this.dragging = !0), !0;
  }
  mouseDragged(i, s, h) {
    if (this.dragging) {
      let e = (this.value - this.min) / (this.max - this.min);
      (this.value = Math.round(
        this.min +
          ((i + (-4 + 8 * e) - this.x) / this.width) * (this.max - this.min)
      )),
        (this.value = t.clamp(this.value, this.min, this.max)),
        (this.string = this.getDisplayName(this.settingName, this.value)),
        this.callback();
    }
  }
  mouseReleased(i, t, s) {
    this.dragging = !1;
  }
  render(i, t, s, h) {
    let e = this.isMouseOver(t, s),
      a = Math.round(
        ((this.value - this.min) / (this.max - this.min)) * (this.width - 8)
      );
    this.drawButton(
      i,
      this.enabled,
      e,
      this.x,
      this.y,
      this.width,
      this.height
    ),
      this.drawButton(i, !0, !1, this.x + a, this.y, 8, this.height),
      this.drawCenteredString(
        i,
        this.string,
        this.x + this.width / 2,
        this.y + this.height / 2 - 4
      );
  }
  setDisplayNameBuilder(i) {
    return (
      (this.getDisplayName = i),
      (this.string = this.getDisplayName(this.settingName, this.value)),
      this
    );
  }
}
