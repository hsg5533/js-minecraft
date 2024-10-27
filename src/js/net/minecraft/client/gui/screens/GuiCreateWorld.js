import e from "../GuiScreen.js";
import t from "../widgets/GuiButton.js";
import r from "../../world/World.js";
import i from "../widgets/GuiTextField.js";
import o from "../../../util/Random.js";
import s from "../../../../../../../libraries/long.js";
import n from "../../world/provider/ChunkProviderGenerate.js";
import h from "../../network/controller/PlayerController.js";
export default class d extends e {
  constructor(e) {
    super(), (this.previousScreen = e);
  }
  init() {
    super.init();
    let e = this.height / 2 - 50;
    (this.fieldSeed = new i(this.width / 2 - 100, e + 30, 200, 20)),
      (this.fieldSeed.maxLength = 30),
      this.buttonList.push(this.fieldSeed),
      this.buttonList.push(
        new t(
          "Create New World",
          this.width / 2 - 155,
          e + 110,
          150,
          20,
          () => {
            let e = this.fieldSeed.getText();
            if (0 === e.length) e = new o().nextLong();
            else if (isNaN(e)) {
              let t = 0;
              for (let i = 0; i < e.length; i++) t = 31 * t + e.charCodeAt(i);
              e = s.fromNumber(t);
            }
            let d = new r(this.minecraft);
            d.setChunkProvider(new n(d, e)),
              d.getChunkProvider().findSpawn(),
              (this.minecraft.playerController = new h(this.minecraft)),
              this.minecraft.loadWorld(d);
          }
        )
      ),
      this.buttonList.push(
        new t("Cancel", this.width / 2 + 5, e + 110, 150, 20, () => {
          this.minecraft.displayScreen(this.previousScreen);
        })
      );
  }
  drawScreen(e, t, r, i) {
    this.drawDefaultBackground(e),
      this.drawCenteredString(e, "Create New World", this.width / 2, 50);
    let o = this.height / 2 - 50;
    this.drawString(
      e,
      "Seed for the World Generator",
      this.width / 2 - 100,
      o + 17,
      -6250336
    ),
      this.drawString(
        e,
        "Leave blank for a random seed",
        this.width / 2 - 100,
        o + 55,
        -6250336
      ),
      super.drawScreen(e, t, r, i);
  }
  onClose() {}
}
