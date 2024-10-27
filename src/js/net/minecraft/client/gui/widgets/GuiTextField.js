import t from "./GuiButton.js";
export default class e extends t {
  constructor(t, e, s, i) {
    super("", t, e, s, i),
      (this.text = ""),
      (this.isFocused = !1),
      (this.cursorCounter = 0),
      (this.maxLength = 80),
      (this.renderBackground = !0);
  }
  render(t, e, s, i) {
    let h = this.isFocused && Math.floor(this.cursorCounter / 6) % 2 == 0,
      r = this.enabled ? 3772834047 : 1886417151;
    this.renderBackground &&
      (this.drawRect(
        t,
        this.x - 1,
        this.y - 1,
        this.x + this.width + 1,
        this.y + this.height + 1,
        "#5f5f60"
      ),
      this.drawRect(
        t,
        this.x,
        this.y,
        this.x + this.width,
        this.y + this.height,
        "black"
      )),
      this.drawString(
        t,
        this.text,
        this.x + 2,
        this.y + this.height / 2 - 4,
        r
      ),
      h &&
        this.drawString(
          t,
          "_",
          this.x + 2 + this.getStringWidth(t, this.text),
          this.y + this.height / 2 - 4,
          r
        );
  }
  onTick() {
    this.cursorCounter++;
  }
  mouseClicked(t, e, s) {
    this.isFocused = !0;
  }
  onPress() {}
  keyTyped(t, e) {
    if (this.isFocused && this.enabled) {
      if ("Backspace" === t) {
        this.text.length > 0 &&
          (this.text = this.text.substring(0, this.text.length - 1));
        return;
      }
      if ("ShiftLeft" === t) {
        this.shiftPressed = !0;
        return;
      }
      if ("ControlLeft" === t) {
        this.controlPressed = !0;
        return;
      }
      if ("KeyV" === t && this.controlPressed) {
        this.minecraft.window.getClipboardText().then((t) => {
          this.text += t;
        });
        return;
      }
      if ("KeyA" === t && this.controlPressed) {
        this.text = "";
        return;
      }
      1 === e.length && this.text.length < this.maxLength && (this.text += e);
    }
  }
  keyReleased(t) {
    if ("ShiftLeft" === t) {
      this.shiftPressed = !1;
      return;
    }
    if ("ControlLeft" === t) {
      this.controlPressed = !1;
      return;
    }
  }
  getText() {
    return this.text;
  }
}
