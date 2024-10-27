import t from "../widgets/GuiButton.js";
import i from "../GuiScreen.js";
import e from "./GuiOptions.js";
export default class s extends i {
  constructor() {
    super();
  }
  init() {
    super.init();
    let i = this.height / 2 - 30;
    this.buttonList.push(
      new t("Back to game", this.width / 2 - 100, i, 200, 20, () => {
        this.minecraft.displayScreen(null);
      })
    ),
      this.buttonList.push(
        new t("Options...", this.width / 2 - 100, i + 24, 200, 20, () => {
          this.minecraft.displayScreen(new e(this));
        })
      ),
      this.buttonList.push(
        new t(
          "Save and Quit to Title",
          this.width / 2 - 100,
          i + 70,
          200,
          20,
          () => {
            this.minecraft.loadWorld(null);
          }
        )
      );
  }
  drawScreen(t, i, e, s) {
    this.drawRect(t, 0, 0, this.width, this.height, "black", 0.6),
      this.drawCenteredString(t, "Game menu", this.width / 2, 50),
      super.drawScreen(t, i, e, s);
  }
}
