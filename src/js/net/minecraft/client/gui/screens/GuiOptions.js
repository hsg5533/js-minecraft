import t from "../GuiScreen.js";
import i from "../widgets/GuiButton.js";
import s from "../widgets/GuiSwitchButton.js";
import e from "../widgets/GuiSliderButton.js";
import n from "./GuiControls.js";
export default class r extends t {
  constructor(t) {
    super(), (this.previousScreen = t);
  }
  init() {
    super.init();
    let t = this.minecraft.settings,
      r = this.height / 2 - 50;
    this.buttonList.push(
      new s(
        "Ambient Occlusion",
        t.ambientOcclusion,
        this.width / 2 - 100,
        r,
        200,
        20,
        (i) => {
          (t.ambientOcclusion = i), this.minecraft.worldRenderer.rebuildAll();
        }
      )
    ),
      this.buttonList.push(
        new s(
          "View Bobbing",
          t.viewBobbing,
          this.width / 2 - 100,
          r + 24,
          200,
          20,
          (i) => {
            t.viewBobbing = i;
          }
        )
      ),
      this.buttonList.push(
        new e(
          "FOV",
          t.fov,
          50,
          100,
          this.width / 2 - 100,
          r + 48,
          200,
          20,
          (i) => {
            t.fov = i;
          }
        )
      ),
      this.buttonList.push(
        new e(
          "Render Distance",
          t.viewDistance,
          2,
          16,
          this.width / 2 - 100,
          r + 72,
          200,
          20,
          (i) => {
            t.viewDistance = i;
          }
        )
      ),
      this.buttonList.push(
        new i("Controls...", this.width / 2 - 100, r + 96, 200, 20, () => {
          this.minecraft.displayScreen(new n(this));
        })
      ),
      this.buttonList.push(
        new i("Done", this.width / 2 - 100, r + 130, 200, 20, () => {
          this.minecraft.displayScreen(this.previousScreen);
        })
      );
  }
  drawScreen(t, i, s, e) {
    this.drawDefaultBackground(t),
      this.drawCenteredString(t, "Settings", this.width / 2, 50),
      super.drawScreen(t, i, s, e);
  }
  onClose() {
    this.minecraft.settings.save();
  }
}
