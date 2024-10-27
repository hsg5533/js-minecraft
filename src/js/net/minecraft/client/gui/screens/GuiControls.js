import t from "../GuiScreen.js";
import e from "../widgets/GuiKeyButton.js";
import i from "../widgets/GuiButton.js";
import s from "../widgets/GuiSliderButton.js";
export default class n extends t {
  constructor(t) {
    super(), (this.previousScreen = t);
  }
  init() {
    super.init();
    let t = this.minecraft.settings,
      n = this.height / 2 - 50;
    this.buttonList.push(
      new s(
        "Mouse Sensitivity",
        t.sensitivity,
        50,
        150,
        this.width / 2 - 100,
        n,
        200,
        20,
        (e) => {
          t.sensitivity = e;
        }
      ).setDisplayNameBuilder(function (t, e) {
        return t + ": " + e + "%";
      })
    ),
      this.buttonList.push(
        new e(
          "Crouch",
          t.keyCrouching,
          this.width / 2 - 100,
          n + 24,
          98,
          20,
          (e) => {
            t.keyCrouching = e;
          }
        )
      ),
      this.buttonList.push(
        new e(
          "Sprint",
          t.keySprinting,
          this.width / 2 + 2,
          n + 24,
          98,
          20,
          (e) => {
            t.keySprinting = e;
          }
        )
      ),
      this.buttonList.push(
        new e(
          "Toggle Perspective",
          t.keyTogglePerspective,
          this.width / 2 - 100,
          n + 48,
          200,
          20,
          (e) => {
            t.keyTogglePerspective = e;
          }
        )
      ),
      this.buttonList.push(
        new e(
          "Open Chat",
          t.keyOpenChat,
          this.width / 2 - 100,
          n + 72,
          200,
          20,
          (e) => {
            t.keyOpenChat = e;
          }
        )
      ),
      this.buttonList.push(
        new e(
          "Open Inventory",
          t.keyOpenInventory,
          this.width / 2 - 100,
          n + 96,
          200,
          20,
          (e) => {
            t.keyOpenInventory = e;
          }
        )
      ),
      this.buttonList.push(
        new i("Done", this.width / 2 - 100, n + 130, 200, 20, () => {
          this.minecraft.displayScreen(this.previousScreen);
        })
      );
  }
  drawScreen(t, e, i, s) {
    this.drawDefaultBackground(t),
      this.drawCenteredString(t, "Controls", this.width / 2, 50),
      super.drawScreen(t, e, i, s);
  }
  onClose() {
    this.minecraft.settings.save();
  }
}
