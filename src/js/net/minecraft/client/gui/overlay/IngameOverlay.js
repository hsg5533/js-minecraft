import e from "../Gui.js";
import t from "../../world/block/Block.js";
import i from "./ChatOverlay.js";
import r from "../../Minecraft.js";
import s from "../../../util/EnumBlockFace.js";
import n from "../../../util/MathHelper.js";
import o from "../../render/gui/FontRenderer.js";
import a from "../../../util/EnumSkyBlock.js";
import h from "./PlayerListOverlay.js";
import l from "../../../util/Keyboard.js";
export default class d extends e {
  constructor(e, t) {
    super(),
      (this.minecraft = e),
      (this.window = t),
      (this.chatOverlay = new i(e)),
      (this.playerListOverlay = new h(e, this)),
      (this.textureCrosshair = e.resources["gui/icons.png"]),
      (this.textureHotbar = e.resources["gui/gui.png"]),
      (this.ticksRendered = 0);
  }
  render(e, t, i, r) {
    this.minecraft.hasInGameFocus() &&
      this.renderCrosshair(e, this.window.width / 2, this.window.height / 2),
      this.renderHotbar(e, this.window.width / 2 - 91, this.window.height - 22),
      this.chatOverlay.render(e, t, i, r),
      this.minecraft.settings.debugOverlay &&
        e.drawImage(this.window.canvasDebug, 0, 0),
      l.isKeyDown(this.minecraft.settings.keyPlayerList) &&
        !this.minecraft.isSingleplayer() &&
        this.playerListOverlay.renderPlayerList(e, this.window.width);
  }
  onTick() {
    if ((this.chatOverlay.onTick(), this.minecraft.settings.debugOverlay)) {
      let e = this.window.canvasDebug.getContext("2d");
      this.ticksRendered % 10 == 0
        ? (e.clearRect(0, 0, this.window.width, this.window.height),
          this.renderLeftDebugOverlay(e),
          this.renderRightDebugOverlay(e))
        : this.minecraft.player.isMoving() &&
          this.renderLeftDebugOverlay(e, [5, 6, 7, 8]),
        this.ticksRendered++;
    }
  }
  renderCrosshair(e, t, i) {
    this.drawSprite(
      e,
      this.textureCrosshair,
      0,
      0,
      15,
      15,
      t - 7.5,
      i - 7.5,
      15,
      15,
      0.6
    );
  }
  renderHotbar(e, i, r) {
    this.drawSprite(e, this.textureHotbar, 0, 0, 200, 22, i, r, 200, 22),
      this.drawSprite(
        e,
        this.textureHotbar,
        0,
        22,
        24,
        24,
        i + 20 * this.minecraft.player.inventory.selectedSlotIndex - 1,
        r - 1,
        24,
        24
      );
    let s = this.minecraft.isPaused() ? 0.5 : 1;
    this.minecraft.itemRenderer.prepareRender("hotbar");
    for (let n = 0; n < 9; n++) {
      let o = this.minecraft.player.inventory.getItemInSlot(n);
      if (0 !== o) {
        let a = t.getById(o);
        this.minecraft.itemRenderer.renderItemInGui(
          "hotbar",
          n,
          a,
          Math.floor(i + 20 * n + 11),
          r + 11,
          s
        );
      }
    }
  }
  renderLeftDebugOverlay(e, t = []) {
    let i = this.minecraft.world,
      h = this.minecraft.player,
      l = this.minecraft.worldRenderer,
      d = h.x,
      $ = h.y,
      g = h.z,
      c = n.wrapAngleTo180(h.rotationYaw),
      f = h.rotationPitch,
      m = s.values()[((((c + 180) * 4) / 360 + 0.5) & 3) + 2],
      u = d.toFixed(2),
      w = $.toFixed(2),
      p = g.toFixed(2),
      y = Math.floor(d),
      _ = Math.floor($),
      v = Math.floor(g),
      H = 0,
      T = 0;
    for (let [x, O] of i.getChunkProvider().getChunks())
      for (let F in O.sections) O.sections[F].group.visible && H++, T++;
    let b = 0;
    for (let S in i.entities) i.entities[S].renderer.group.visible && b++;
    let k = Math.floor(this.minecraft.fps),
      I = this.minecraft.settings.viewDistance,
      R = i.lightUpdateQueue.length,
      L = l.chunkSectionUpdateQueue.length,
      E = i.entities.length,
      G = this.minecraft.particleRenderer.particles.length,
      N = i.getSavedLightValue(a.SKY, y, _, v),
      C = i.getSavedLightValue(a.BLOCK, y, _, v),
      D = i.getTotalLightAt(y, _, v);
    i.getTemperature(y, _, v), i.getHumidity(y, _, v);
    let j = 0,
      P = 0,
      B = this.minecraft.soundManager.soundPool;
    for (let [M, z] of Object.entries(B))
      for (let A of z) j++, A.isPlaying && P++;
    let K =
        "Towards " +
        (m.isPositive() ? "positive" : "negative") +
        " " +
        (m.isXAxis() ? "X" : "Z"),
      U = [
        "js-minecraft " + r.VERSION,
        k + " fps (" + L + " chunk updates) T: " + this.minecraft.maxFps,
        "C: " + H + "/" + T + " D: " + I + ", L: " + R,
        "E: " + b + "/" + E + ", P: " + G,
        "",
        "XYZ: " + u + " / " + w + " / " + p,
        "Block: " + y + " " + _ + " " + v,
        "Chunk: " +
          (y >> 4) +
          " " +
          (_ >> 4) +
          " " +
          (v >> 4) +
          " in " +
          (15 & y) +
          " " +
          (15 & _) +
          " " +
          (15 & v),
        "Facing: " +
          m.getName() +
          " (" +
          K +
          ") (" +
          c.toFixed(1) +
          " / " +
          f.toFixed(1) +
          ")",
        "Light: " + D + " (" + N + " sky, " + C + " block)",
        "",
        "Sounds: " + P + "/" + j,
        "Time: " + (i.time % 24e3) + " (Day " + Math.floor(i.time / 24e3) + ")",
        "Cursor: " + this.minecraft.window.focusState.getName(),
      ],
      V = l.lastHitResult;
    null !== V &&
      0 !== V.type &&
      U.push("Looking at: " + V.x + " " + V.y + " " + V.z);
    for (let W = 0; W < U.length; W++)
      0 !== U[W].length &&
        (0 === t.length || t.includes(W)) &&
        (0 !== t.length &&
          e.clearRect(
            1,
            1 + o.FONT_HEIGHT * W,
            this.getStringWidth(e, U[W]) + 1,
            o.FONT_HEIGHT
          ),
        this.drawRect(
          e,
          1,
          1 + o.FONT_HEIGHT * W,
          1 + this.getStringWidth(e, U[W]) + 1,
          1 + o.FONT_HEIGHT * W + o.FONT_HEIGHT,
          "#50505090"
        ),
        this.drawString(e, U[W], 2, 2 + o.FONT_HEIGHT * W, 4292927712, !1));
  }
  renderRightDebugOverlay(e) {
    let t = this.minecraft.window.getMemoryLimit(),
      i = this.minecraft.window.getMemoryUsed(),
      r = this.minecraft.window.getMemoryAllocated(),
      s = this.window.canvas.width,
      n = this.window.canvas.height,
      a = [
        "Mem: " + Math.floor((i / t) * 100) + "% " + this.humanFileSize(i, t),
        "Allocated: " +
          Math.floor((r / t) * 100) +
          "% " +
          this.humanFileSize(null, r),
        "",
        "Display: " + s + "x" + n,
        this.window.getGPUName(),
      ];
    for (let h = 0; h < a.length; h++)
      0 !== a[h].length &&
        (this.drawRect(
          e,
          this.window.width - this.getStringWidth(e, a[h]) - 3,
          1 + o.FONT_HEIGHT * h,
          this.window.width - 1,
          1 + o.FONT_HEIGHT * h + o.FONT_HEIGHT,
          "#50505090"
        ),
        this.drawRightString(
          e,
          a[h],
          this.window.width - 2,
          2 + o.FONT_HEIGHT * h,
          4292927712,
          !1
        ));
  }
  humanFileSize(e, t) {
    if (1e3 > Math.abs(t)) return (null === e ? "" : e + "/") + t + "B";
    let i = ["kB", "MB"],
      r = -1;
    do null !== e && (e /= 1e3), (t /= 1e3), ++r;
    while (Math.round(10 * Math.abs(t)) / 10 >= 1e3 && r < i.length - 1);
    return (null === e ? "" : e.toFixed(0) + "/") + t.toFixed(0) + i[r];
  }
}
