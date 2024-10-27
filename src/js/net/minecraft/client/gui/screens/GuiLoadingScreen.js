import t from "../GuiScreen.js";
export default class i extends t {
  constructor() {
    super();
  }
  init() {
    super.init();
  }
  drawScreen(t, i, h, s) {
    this.drawBackground(t, this.textureBackground, this.width, this.height),
      this.drawCenteredString(
        t,
        this.title,
        this.width / 2,
        this.height / 2 - 20
      ),
      this.drawRect(
        t,
        this.width / 2 - 50,
        this.height / 2 - 1,
        this.width / 2 + 50,
        this.height / 2 + 1,
        "#808080"
      ),
      this.drawRect(
        t,
        this.width / 2 - 50,
        this.height / 2 - 1,
        this.width / 2 - 50 + 100 * this.progress,
        this.height / 2 + 1,
        "#80ff80"
      ),
      super.drawScreen(t, i, h, s);
  }
  setTitle(t) {
    this.title = t;
  }
  setProgress(t) {
    !(t < this.progress) && !(t > 1) && (this.progress = t);
  }
  keyTyped(t) {}
}
