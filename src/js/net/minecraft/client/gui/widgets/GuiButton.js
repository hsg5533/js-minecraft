import t from "../Gui.js";
export default class s extends t {
  constructor(t, s, i, e, h, r) {
    super(),
      (this.string = t),
      (this.enabled = !0),
      (this.x = s),
      (this.y = i),
      (this.width = e),
      (this.height = h),
      (this.callback = r);
  }
  render(t, s, i, e) {
    let h = this.isMouseOver(s, i);
    this.drawButton(
      t,
      this.enabled,
      h,
      this.x,
      this.y,
      this.width,
      this.height
    ),
      this.drawCenteredString(
        t,
        this.string,
        this.x + this.width / 2,
        this.y + this.height / 2 - 4
      );
  }
  onPress() {
    this.enabled && this.callback();
  }
  onTick() {}
  mouseClicked(t, s, i) {
    this.onPress();
  }
  mouseReleased(t, s, i) {}
  mouseDragged(t, s, i) {}
  keyTyped(t, s) {}
  keyReleased(t) {}
  isMouseOver(t, s) {
    return (
      t > this.x &&
      t < this.x + this.width &&
      s > this.y &&
      s < this.y + this.height
    );
  }
  drawButton(t, s, i, e, h, r, d) {
    let n = this.getTexture("gui/gui.png"),
      a = 66 + (s ? (i ? 20 : 0) : -20);
    this.drawSprite(t, n, 0, a, r / 2, 20, e, h, r / 2, d),
      this.drawSprite(t, n, 200 - r / 2, a, r / 2, 20, e + r / 2, h, r / 2, d);
  }
  setEnabled(t) {
    return (this.enabled = t), this;
  }
}
