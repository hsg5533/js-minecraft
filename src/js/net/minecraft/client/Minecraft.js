import e from "../util/Timer.js";
import t from "./GameSettings.js";
import i from "./GameWindow.js";
import s from "./render/WorldRenderer.js";
import r from "./render/gui/ScreenRenderer.js";
import n from "./render/gui/ItemRenderer.js";
import o from "./gui/overlay/IngameOverlay.js";
import l from "./sound/SoundManager.js";
import h from "./world/block/Block.js";
import a from "../util/BoundingBox.js";
import { BlockRegistry as d } from "./world/block/BlockRegistry.js";
import u from "./render/gui/FontRenderer.js";
import c from "./render/GrassColorizer.js";
import m from "./gui/screens/GuiMainMenu.js";
import w from "./gui/screens/GuiLoadingScreen.js";
import * as p from "../../../../../libraries/three.module.js";
import g from "./render/particle/ParticleRenderer.js";
import y from "./gui/screens/GuiChat.js";
import f from "./command/CommandHandler.js";
import S from "./gui/screens/container/GuiContainerCreative.js";
import k from "../util/GameProfile.js";
import $ from "../util/UUID.js";
import R from "../util/FocusStateType.js";
import v from "../util/Session.js";
import T from "./network/controller/PlayerControllerMultiplayer.js";
export default class C {
  static VERSION = "1.1.8";
  static URL_GITHUB = "https://github.com/labystudio/js-minecraft";
  static PROTOCOL_VERSION = 47;
  static PROXY = { address: "localhost", port: 30023 };
  constructor(h, a) {
    if (
      ((this.resources = a),
      (this.currentScreen = null),
      (this.loadingScreen = null),
      (this.world = null),
      (this.player = null),
      (this.playerController = null),
      (this.fps = 0),
      (this.maxFps = 0),
      (this.timer = new e(20)),
      (this.settings = new t()),
      this.settings.load(),
      null === this.settings.session)
    ) {
      let w = "Player" + Math.floor(100 * Math.random()),
        p = new k($.randomUUID(), w);
      this.setSession(new v(p, ""));
    } else this.setSession(v.fromJson(this.settings.session));
    (this.window = new i(this, h)),
      (this.worldRenderer = new s(this, this.window)),
      (this.screenRenderer = new r(this, this.window)),
      (this.itemRenderer = new n(this, this.window)),
      (this.ingameOverlay = new o(this, this.window)),
      (this.commandHandler = new f(this)),
      (this.frames = 0),
      (this.lastTime = Date.now()),
      d.create(),
      this.itemRenderer.initialize(),
      (this.fontRenderer = new u(this)),
      (this.grassColorizer = new c(this)),
      (this.particleRenderer = new g(this)),
      this.window.updateWindowSize(),
      (this.soundManager = new l()),
      this.displayScreen(new m()),
      this.init();
  }
  init() {
    (this.running = !0), this.requestNextFrame();
  }
  loadWorld(e) {
    if (null === e) {
      if (
        (this.worldRenderer.reset(),
        this.itemRenderer.reset(),
        this.playerController instanceof T)
      ) {
        let t = this.playerController.getNetworkHandler();
        t.getNetworkManager().isConnected() && t.getNetworkManager().close(),
          this.ingameOverlay.playerListOverlay.setHeader(null),
          this.ingameOverlay.playerListOverlay.setFooter(null);
      }
      (this.playerController = null),
        null !== this.world &&
          (this.world.getChunkProvider().getChunks().clear(),
          this.world.clearEntities(),
          (this.world = null),
          (this.player = null),
          (this.loadingScreen = null)),
        this.displayScreen(new m());
    } else
      (this.loadingScreen = new w()),
        this.loadingScreen.setTitle("Building terrain..."),
        this.displayScreen(this.loadingScreen),
        null !== this.world &&
          (this.world.getChunkProvider().getChunks().clear(),
          this.world.clearEntities(),
          this.worldRenderer.reset(),
          this.itemRenderer.reset()),
        (this.world = e),
        this.worldRenderer.scene.add(this.world.group),
        (this.player = this.playerController.createPlayer(this.world)),
        (this.player.username = this.session.getProfile().getUsername()),
        this.world.addEntity(this.player),
        this.world.loadSpawnChunks(),
        this.player.respawn();
  }
  hasInGameFocus() {
    return this.window.isLocked() && null === this.currentScreen;
  }
  isInGame() {
    return (
      null !== this.world && null !== this.worldRenderer && null !== this.player
    );
  }
  addMessageToChat(e) {
    this.ingameOverlay.chatOverlay.addMessage(e);
  }
  requestNextFrame() {
    requestAnimationFrame(() => {
      this.running && (this.requestNextFrame(), this.onLoop());
    });
  }
  onLoop() {
    if (this.isPaused() && this.isInGame()) {
      let e = this.timer.partialTicks;
      this.timer.advanceTime(), (this.timer.partialTicks = e);
    } else this.timer.advanceTime();
    for (let t = 0; t < this.timer.ticks; t++) this.onTick();
    for (
      this.onRender(this.timer.partialTicks), this.frames++;
      Date.now() >= this.lastTime + 1e3;

    )
      (this.fps = this.frames),
        (this.maxFps = Math.max(this.maxFps, this.fps)),
        (this.lastTime += 1e3),
        (this.frames = 0);
  }
  onRender(e) {
    if (this.isInGame()) {
      if (this.hasInGameFocus()) {
        let t = this.window.pullMouseMotionX(),
          i = this.window.pullMouseMotionY();
        this.player.turn(t, i);
      }
      for (; this.world.updateLights(); );
      this.isInGame() && !this.isPaused() && this.worldRenderer.render(e);
    }
    this.itemRenderer.render(e), this.screenRenderer.render(e);
  }
  displayScreen(e) {
    if (e !== this.currentScreen) {
      if (void 0 === e) {
        console.error("Tried to display an undefined screen");
        return;
      }
      null !== e || this.isInGame() || (e = new m()),
        null !== this.currentScreen && this.currentScreen.onClose(),
        (this.currentScreen = e),
        this.window.updateWindowSize(),
        null === e
          ? this.window.updateFocusState(R.REQUEST_LOCK)
          : (this.window.updateFocusState(R.REQUEST_EXIT),
            e.setup(this, this.window.width, this.window.height)),
        this.itemRenderer.rebuildAllItems();
    }
  }
  onTick() {
    if (
      (this.isInGame() &&
        !this.isPaused() &&
        (this.ingameOverlay.onTick(),
        this.world.onTick(),
        this.worldRenderer.onTick(),
        this.particleRenderer.onTick()),
      null !== this.currentScreen && this.currentScreen.updateScreen(),
      null !== this.loadingScreen && this.isInGame())
    ) {
      let e = Math.floor(this.player.x) >> 4,
        t = Math.floor(this.player.z) >> 4,
        i = this.settings.viewDistance,
        s = this.isSingleplayer() ? Math.pow(2 * i - 1, 2) : 1,
        r = this.world.getChunkProvider().getChunks().size;
      setTimeout(() => {
        for (let s = -i + 1; s < i; s++)
          for (let r = -i + 1; r < i; r++) this.world.getChunkAt(e + s, t + r);
      }, 0);
      let n =
        (1 / s) * Math.max(0, r - this.world.lightUpdateQueue.length / 1e3);
      this.loadingScreen.setProgress(n),
        n >= 0.99 && ((this.loadingScreen = null), this.displayScreen(null));
    }
  }
  onKeyPressed(e) {
    for (let t = 1; t <= 9; t++)
      e === "Digit" + t && (this.player.inventory.selectedSlotIndex = t - 1);
    e === this.settings.keyTogglePerspective &&
      ((this.settings.thirdPersonView =
        (this.settings.thirdPersonView + 1) % 3),
      this.settings.save()),
      e === this.settings.keyOpenChat && this.displayScreen(new y()),
      "F3" === e &&
        ((this.settings.debugOverlay = !this.settings.debugOverlay),
        this.settings.save()),
      e === this.settings.keyOpenInventory &&
        this.displayScreen(new S(this.player));
  }
  onMouseClicked(e) {
    if (this.window.isLocked()) {
      let t = this.player.rayTrace(5, this.timer.partialTicks);
      if (0 === e) {
        if (null != t) {
          let i = this.world.getBlockAt(t.x, t.y, t.z),
            s = h.getById(i);
          if (0 !== i) {
            let r = s.getSound().getBreakSound();
            this.soundManager.playSound(
              r,
              t.x + 0.5,
              t.y + 0.5,
              t.z + 0.5,
              1,
              1
            ),
              this.particleRenderer.spawnBlockBreakParticle(
                this.world,
                t.x,
                t.y,
                t.z
              ),
              this.world.setBlockAt(t.x, t.y, t.z, 0);
          }
        }
        this.player.swingArm();
      }
      if (1 === e && null != t) {
        let n = this.world.getBlockAt(t.x, t.y, t.z);
        if (0 !== n) {
          for (let o of this.player.inventory.items) {
            let l = this.player.inventory.items.indexOf(o);
            if (o === n && l <= 8) {
              this.player.inventory.selectedSlotIndex = l;
              return;
            }
          }
          this.player.inventory.setItemInSelectedSlot(n);
        }
      }
      if (2 === e && null != t) {
        let d = t.x + t.face.x,
          u = t.y + t.face.y,
          c = t.z + t.face.z;
        if (
          !new a(d, u, c, d + 1, u + 1, c + 1).intersects(
            this.player.boundingBox
          )
        ) {
          let m = this.player.inventory.getItemInSelectedSlot(),
            w = this.world.getBlockAt(d, u, c);
          if (0 !== m && w !== m) {
            this.world.setBlockAt(d, u, c, m), this.player.swingArm();
            let p = h.getById(m);
            p.onBlockPlaced(this.world, d, u, c, t.face);
            let g = p.getSound(),
              y = g.getStepSound();
            this.soundManager.playSound(
              y,
              t.x + 0.5,
              t.y + 0.5,
              t.z + 0.5,
              1,
              0.8 * g.getPitch()
            );
          }
        }
      }
      this.worldRenderer.flushRebuild = !0;
    }
  }
  onMouseScroll(e) {
    this.isInGame() && this.player.inventory.shiftSelectedSlot(e);
  }
  isPaused() {
    return (
      !this.hasInGameFocus() &&
      null === this.loadingScreen &&
      this.isSingleplayer()
    );
  }
  setSession(e, t = !1) {
    (this.session = e),
      t && ((this.settings.session = e.toJson()), this.settings.save());
  }
  updateAccessToken(e) {
    this.session.setAccessToken(e), this.setSession(this.session, !0);
  }
  getSession() {
    return this.session;
  }
  isSingleplayer() {
    return this.isInGame() && !(this.playerController instanceof T);
  }
  stop() {
    null !== this.currentScreen && this.currentScreen.onClose(),
      (this.running = !1),
      this.worldRenderer.reset(),
      this.itemRenderer.reset(),
      this.screenRenderer.reset(),
      this.window.close();
  }
  getThreeTexture(e) {
    if (!(e in this.resources)) {
      console.error("Texture not found: " + e);
      return;
    }
    let t = this.resources[e],
      i = document.createElement("canvas"),
      s = i.getContext("2d");
    return (
      (i.width = t.width),
      (i.height = t.height),
      (s.imageSmoothingEnabled = !1),
      s.drawImage(t, 0, 0, t.width, t.height),
      new p.CanvasTexture(i)
    );
  }
}
