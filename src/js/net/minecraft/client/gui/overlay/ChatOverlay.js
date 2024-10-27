import e from "../Gui.js";
import s from "../../../util/ChatLine.js";
import t from "../screens/GuiChat.js";
import i from "../../../util/MathHelper.js";
export default class r extends e {
  constructor(e) {
    super(e), (this.messages = []), (this.sentHistory = []);
  }
  render(e, s, r, o) {
    let a = this.minecraft.currentScreen instanceof t;
    for (let n = 0; n < this.messages.length; n++) {
      let $ = this.messages[n];
      if ($.updateCounter >= 200 && !a) continue;
      let f = i.clamp((1 - $.updateCounter / 200) * 10, 0, 1),
        h = Math.floor(255 * f * f);
      if ((a && (h = 255), h > 0)) {
        let l = this.minecraft.window.height - 40 - 9 * n;
        this.drawRect(e, 2, l - 1, 322, l + 8, "#000000", h / 2 / 255),
          this.drawString(e, $.message, 2, l, 16777215 + (h << 24));
      }
    }
  }
  onTick() {
    for (let e = 0; e < this.messages.length; e++) {
      let s = this.messages[e];
      s.updateCounter++;
    }
  }
  addMessage(e) {
    this.messages.splice(0, 0, new s(e));
  }
  addMessageToSentHistory(e) {
    this.sentHistory.splice(0, 0, e);
  }
}
