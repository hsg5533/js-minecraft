import t from "../GuiScreen.js";
import e from "../widgets/GuiButton.js";
import i from "../../render/gui/FontRenderer.js";
export default class s extends t {
  constructor(t) {
    super(), (this.message = t);
  }
  init() {
    super.init(),
      (this.multilineMessage =
        this.minecraft.fontRenderer.listFormattedStringToWidth(
          this.message,
          this.width - 50
        ));
    let t = this.height / 2 - 50;
    this.buttonList.push(
      new e("Done", this.width / 2 - 100, t + 130, 200, 20, () => {
        this.minecraft.displayScreen(null);
      })
    );
  }
  drawScreen(t, e, s, r) {
    this.drawBackground(t, this.textureBackground, this.width, this.height),
      this.drawCenteredString(
        t,
        "Disconnected from server:",
        this.width / 2,
        this.height / 2 - 20,
        2164260863
      );
    for (let h = 0; h < this.multilineMessage.length; h++)
      this.drawCenteredString(
        t,
        this.multilineMessage[h],
        this.width / 2,
        this.height / 2 + h * i.FONT_HEIGHT
      );
    super.drawScreen(t, e, s, r);
  }
}
