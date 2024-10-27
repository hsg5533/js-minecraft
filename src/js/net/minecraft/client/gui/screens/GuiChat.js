import t from "../GuiScreen.js";
import i from "../widgets/GuiTextField.js";
export default class e extends t {
  constructor() {
    super(),
      (this.inputField = new i(0, 0, 0, 0)),
      (this.inputField.renderBackground = !1),
      (this.historyIndex = -1);
  }
  init() {
    super.init(),
      (this.inputField.x = 2),
      (this.inputField.y = this.height - 14),
      (this.inputField.width = this.width - 4),
      (this.inputField.height = 12),
      (this.inputField.isFocused = !0),
      this.buttonList.push(this.inputField);
  }
  drawScreen(t, i, e, s) {
    this.drawRect(
      t,
      2,
      this.height - 14,
      this.width - 2,
      this.height - 2,
      "#000000",
      0.5
    ),
      super.drawScreen(t, i, e, s);
  }
  keyTyped(t, i) {
    if ("Enter" === t) {
      let e = this.inputField.getText().trim();
      if (0 === e.length) return;
      this.minecraft.displayScreen(null),
        this.minecraft.ingameOverlay.chatOverlay.addMessageToSentHistory(e),
        this.minecraft.playerController.sendChatMessage(e);
      return;
    }
    if ("ArrowUp" === t || "ArrowDown" === t) {
      let s = this.minecraft.ingameOverlay.chatOverlay.sentHistory;
      "ArrowUp" === t
        ? this.historyIndex + 1 < s.length && this.historyIndex++
        : this.historyIndex >= 0 && this.historyIndex--,
        (this.inputField.text =
          this.historyIndex < 0 ? "" : s[this.historyIndex]);
      return;
    }
    return super.keyTyped(t, i);
  }
}
