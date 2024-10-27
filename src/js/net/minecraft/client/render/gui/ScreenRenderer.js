export default class t {
  constructor(t, i) {
    (this.minecraft = t), (this.window = i);
  }
  initialize() {
    let t = this.getLimitedScaleFactor();
    (this.window.canvas.width = this.window.width * t),
      (this.window.canvas.height = this.window.height * t),
      (this.stack2d = this.window.canvas.getContext("2d")),
      (this.stack2d.webkitImageSmoothingEnabled = !1),
      (this.stack2d.mozImageSmoothingEnabled = !1),
      (this.stack2d.imageSmoothingEnabled = !1);
  }
  render(t) {
    let i = this.getLimitedScaleFactor(),
      s = this.minecraft.window.mouseX,
      e = this.minecraft.window.mouseY;
    this.stack2d.save(),
      this.minecraft.isInGame()
        ? this.stack2d.drawImage(
            this.window.canvasWorld,
            0,
            0,
            this.window.width * i,
            this.window.height * i
          )
        : this.reset(),
      this.stack2d.scale(i, i, i);
    try {
      this.minecraft.isInGame() &&
        null === this.minecraft.loadingScreen &&
        this.minecraft.ingameOverlay.render(this.stack2d, s, e, t),
        null !== this.minecraft.currentScreen &&
          this.minecraft.currentScreen.drawScreen(this.stack2d, s, e, t);
    } catch (a) {
      console.error(a), console.log(a.stack);
    }
    let n = this.window.scaleFactor;
    this.stack2d.scale(1 / n, 1 / n, 1 / n),
      this.stack2d.drawImage(this.window.canvasItems, 0, 0),
      this.stack2d.restore();
  }
  reset() {
    this.stack2d.clearRect(
      0,
      0,
      this.window.canvas.width,
      this.window.canvas.height
    );
  }
  getLimitedScaleFactor() {
    return Math.min(this.window.scaleFactor, 4);
  }
}
