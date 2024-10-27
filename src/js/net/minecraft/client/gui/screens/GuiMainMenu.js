import t from "../GuiScreen.js";
import e from "../widgets/GuiButton.js";
import i from "./GuiOptions.js";
import * as r from "../../../../../../../libraries/three.module.js";
import { BackSide as a } from "../../../../../../../libraries/three.module.js";
import s from "../../../util/MathHelper.js";
import n from "../../Minecraft.js";
import h from "./GuiCreateWorld.js";
import o from "./GuiDirectConnect.js";
export default class d extends t {
  constructor() {
    super(),
      (this.panoramaTimer = 0),
      (this.splashText = "Minecraft written in JavaScript!");
  }
  init() {
    super.init(),
      (this.textureLogo = this.getTexture("gui/title/minecraft.png"));
    let t = this.height / 4 + 48;
    this.buttonList.push(
      new e("Singleplayer", this.width / 2 - 100, t, 200, 20, () => {
        this.minecraft.displayScreen(new h(this));
      })
    ),
      this.buttonList.push(
        new e("Multiplayer", this.width / 2 - 100, t + 24, 200, 20, () => {
          this.minecraft.displayScreen(new o(this));
        })
      ),
      this.buttonList.push(
        new e(
          "Minecraft Realms",
          this.width / 2 - 100,
          t + 48,
          200,
          20,
          () => {}
        ).setEnabled(!1)
      ),
      this.buttonList.push(
        new e("Options...", this.width / 2 - 100, t + 72 + 12, 98, 20, () => {
          this.minecraft.displayScreen(new i(this));
        })
      ),
      this.buttonList.push(
        new e("Quit Game", this.width / 2 + 2, t + 72 + 12, 98, 20, () => {
          this.minecraft.stop();
        })
      ),
      this.initPanoramaRenderer();
  }
  drawScreen(t, e, i, r) {
    let a = this.width / 2 - 137,
      h = 25 * Math.sin((this.panoramaTimer + r) / 400) + 20,
      o = -(0.1 * (this.panoramaTimer + r));
    (this.camera.aspect = this.width / this.height),
      (this.camera.rotation.x = -s.toRadians(h + 180)),
      (this.camera.rotation.y = -s.toRadians(o - 180)),
      this.camera.updateProjectionMatrix(),
      this.minecraft.worldRenderer.webRenderer.clear(),
      this.minecraft.worldRenderer.webRenderer.render(this.scene, this.camera),
      this.drawGradientRect(
        t,
        0,
        0,
        this.width,
        this.height,
        "rgba(255,255,255,0.5)",
        "rgb(255,255,255,0)"
      ),
      this.drawGradientRect(
        t,
        0,
        0,
        this.width,
        this.height,
        "rgb(0,0,0,0)",
        "rgb(0,0,0,0.5)"
      ),
      this.drawLogo(t, a, 30),
      this.drawString(
        t,
        "js-minecraft " + n.VERSION,
        2,
        this.height - 10,
        4294967295
      );
    let d = e > this.width / 2 + 70 && i > this.height - 20;
    this.drawRightString(
      t,
      "GitHub @LabyStudio/js-minecraft",
      this.width - 2,
      this.height - 10,
      d ? 4278255615 : 4294967295
    ),
      super.drawScreen(t, e, i, r),
      this.drawSplash(t);
  }
  updateScreen() {
    this.panoramaTimer++;
  }
  drawLogo(t, e, i) {
    this.drawSprite(t, this.textureLogo, 0, 0, 155, 44, e, i, 155, 44),
      this.drawSprite(t, this.textureLogo, 0, 45, 155, 44, e + 155, i, 155, 44);
  }
  drawSplash(t) {
    let e =
      1.8 -
      Math.abs(
        0.1 * Math.sin(((new Date().getTime() % 1e3) / 1e3) * Math.PI * 2)
      );
    (e = (100 * e) / (this.getStringWidth(t, this.splashText) + 32)),
      t.save(),
      t.translate(this.width / 2 + 90, 70, 0),
      t.rotate(s.toRadians(-20)),
      t.scale(e, e, e),
      this.drawCenteredString(t, this.splashText, 0, -8, -256),
      t.restore();
  }
  keyTyped(t) {}
  mouseClicked(t, e, i) {
    super.mouseClicked(t, e, i);
    t > this.width / 2 + 70 &&
      e > this.height - 20 &&
      this.minecraft.window.openUrl(n.URL_GITHUB, !0);
  }
  initPanoramaRenderer() {
    this.scene = new r.Scene();
    let t = new r.BoxBufferGeometry(1, 1, 1),
      e = [
        new r.MeshBasicMaterial({
          side: a,
          map: this.minecraft.getThreeTexture(
            "gui/title/background/panorama_1.png"
          ),
        }),
        new r.MeshBasicMaterial({
          side: a,
          map: this.minecraft.getThreeTexture(
            "gui/title/background/panorama_3.png"
          ),
        }),
        new r.MeshBasicMaterial({
          side: a,
          map: this.minecraft.getThreeTexture(
            "gui/title/background/panorama_4.png"
          ),
        }),
        new r.MeshBasicMaterial({
          side: a,
          map: this.minecraft.getThreeTexture(
            "gui/title/background/panorama_5.png"
          ),
        }),
        new r.MeshBasicMaterial({
          side: a,
          map: this.minecraft.getThreeTexture(
            "gui/title/background/panorama_0.png"
          ),
        }),
        new r.MeshBasicMaterial({
          side: a,
          map: this.minecraft.getThreeTexture(
            "gui/title/background/panorama_2.png"
          ),
        }),
      ];
    e.forEach((t) => {
      (t.map.minFilter = r.LinearFilter), (t.map.magFilter = r.LinearFilter);
    });
    let i = new r.Mesh(t, e);
    i.scale.set(-1, -1, -1),
      this.scene.add(i),
      (this.camera = new r.PerspectiveCamera(120, 1, 0.1, 1)),
      (this.camera.rotation.order = "ZYX");
    let s = this.minecraft.window.canvas.style;
    (s.backdropFilter = "blur(10px)"),
      (s.webkitBackdropFilter = "blur(10px)"),
      this.minecraft.window.wrapper.insertBefore(
        this.minecraft.window.canvasWorld,
        this.minecraft.window.canvas
      );
  }
  onClose() {
    let t = this.minecraft.window.canvas.style;
    (t.backdropFilter = ""),
      (t.webkitBackdropFilter = ""),
      this.minecraft.window.wrapper.removeChild(
        this.minecraft.window.canvasWorld
      );
  }
}
