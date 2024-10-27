import t from "./Gui.js";
export default class i extends t {
  constructor() {
    super(), (this.buttonList = []), (this.previousScreen = null);
  }
  setup(t, i, e) {
    (this.minecraft = t),
      (this.width = i),
      (this.height = e),
      (this.textureBackground = this.getTexture("gui/background.png")),
      this.init();
  }
  init() {
    this.buttonList = [];
  }
  onClose() {}
  drawScreen(t, i, e, s) {
    for (let n in this.buttonList) {
      let r = this.buttonList[n];
      (r.minecraft = this.minecraft), r.render(t, i, e, s);
    }
  }
  updateScreen() {
    for (let t in this.buttonList) this.buttonList[t].onTick();
  }
  keyTyped(t, i) {
    if ("Escape" === t)
      return this.minecraft.displayScreen(this.previousScreen), !0;
    for (let e in this.buttonList) this.buttonList[e].keyTyped(t, i);
    return !1;
  }
  keyReleased(t) {
    for (let i in this.buttonList) this.buttonList[i].keyReleased(t);
    return !1;
  }
  mouseClicked(t, i, e) {
    for (let s in this.buttonList) {
      let n = this.buttonList[s];
      n.isMouseOver(t, i) && n.mouseClicked(t, i, e);
    }
  }
  mouseReleased(t, i, e) {
    for (let s in this.buttonList) this.buttonList[s].mouseReleased(t, i, e);
  }
  mouseDragged(t, i, e) {
    for (let s in this.buttonList) this.buttonList[s].mouseDragged(t, i, e);
  }
  drawDefaultBackground(t) {
    this.minecraft.isInGame()
      ? this.drawRect(t, 0, 0, this.width, this.height, "black", 0.6)
      : this.drawBackground(t, this.textureBackground, this.width, this.height);
  }
}
