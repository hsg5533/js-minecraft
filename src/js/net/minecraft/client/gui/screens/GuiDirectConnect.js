import t from "../GuiScreen.js";
import e from "../widgets/GuiButton.js";
import s from "../widgets/GuiTextField.js";
import i from "./GuiConnecting.js";
export default class r extends t {
  constructor(t) {
    super(), (this.previousScreen = t);
  }
  init() {
    super.init();
    let t = this.height / 2 - 50;
    (this.fieldAddress = new s(this.width / 2 - 100, t + 30, 200, 20)),
      (this.fieldAddress.maxLength = 30),
      (this.fieldAddress.text = this.minecraft.settings.serverAddress),
      this.buttonList.push(this.fieldAddress),
      this.buttonList.push(
        new e("Connect", this.width / 2 - 155, t + 110, 150, 20, () => {
          this.minecraft.displayScreen(new i(this, this.fieldAddress.text));
        })
      ),
      this.buttonList.push(
        new e("Cancel", this.width / 2 + 5, t + 110, 150, 20, () => {
          this.minecraft.displayScreen(this.previousScreen);
        })
      );
  }
  drawScreen(t, e, s, i) {
    this.drawDefaultBackground(t),
      this.drawCenteredString(t, "Connect to a server", this.width / 2, 50);
    let r = this.height / 2 - 50;
    this.drawString(
      t,
      "Server Address",
      this.width / 2 - 100,
      r + 17,
      -6250336
    ),
      super.drawScreen(t, e, s, i);
  }
  onClose() {
    (this.minecraft.settings.serverAddress = this.fieldAddress.text),
      this.minecraft.settings.save();
  }
}
