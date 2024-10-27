import e from "./Minecraft.js";
import t from "../util/FocusStateType.js";
import s from "./gui/screens/GuiIngameMenu.js";
import i from "../util/Keyboard.js";
import r from "./gui/screens/GuiLoadingScreen.js";
export default class a {
  constructor(e, s) {
    (this.minecraft = e),
      (this.width = 0),
      (this.height = 0),
      (this.mouseX = 0),
      (this.mouseY = 0),
      (this.mouseMotionX = 0),
      (this.mouseMotionY = 0),
      (this.mouseInsideWindow = !1),
      (this.mouseDownInterval = null),
      (this.focusState = t.EXITED),
      (this.lastIngameSwitchTime = 0),
      (this.mobileDevice = this.detectTouchDevice()),
      this.initializeElements(s),
      this.mobileDevice
        ? this.registerMobileListeners()
        : this.registerDesktopListeners(),
      i.create();
  }
  initializeElements(e) {
    for (this.wrapper = document.getElementById(e); this.wrapper.firstChild; )
      this.wrapper.removeChild(this.wrapper.firstChild);
    (this.canvasWorld = document.createElement("canvas")),
      (this.canvasDebug = document.createElement("canvas")),
      (this.canvasPlayerList = document.createElement("canvas")),
      (this.canvasItems = document.createElement("canvas")),
      (this.canvas = document.createElement("canvas")),
      this.wrapper.appendChild(this.canvas);
  }
  registerDesktopListeners() {
    this.registerListener(window, "resize", (e) => {
      this.updateWindowSize();
    }),
      this.registerListener(document, "mousedown", (e) => {
        this.minecraft.onMouseClicked(e.button),
          null !== this.mouseDownInterval &&
            clearInterval(this.mouseDownInterval),
          (this.mouseDownInterval = setInterval(
            (t) => this.minecraft.onMouseClicked(e.button),
            250
          ));
        let s = this.minecraft.currentScreen;
        null !== s &&
          s.mouseClicked(
            e.x / this.scaleFactor,
            e.y / this.scaleFactor,
            e.code
          ),
          this.requestCursorUpdate(),
          null === this.minecraft.currentScreen &&
            this.focusState === t.EXITED &&
            this.updateFocusState(t.REQUEST_LOCK),
          this.initialSoundEngine();
      }),
      this.registerListener(document, "mousemove", (e) => {
        (this.mouseX = e.clientX / this.scaleFactor),
          (this.mouseY = e.clientY / this.scaleFactor),
          (this.mouseMotionX = e.movementX),
          (this.mouseMotionY = -e.movementY);
        let t = this.minecraft.currentScreen;
        null !== t &&
          t.mouseDragged(
            e.x / this.scaleFactor,
            e.y / this.scaleFactor,
            e.code
          ),
          this.requestCursorUpdate();
      }),
      this.registerListener(document, "mouseup", (e) => {
        let t = this.minecraft.currentScreen;
        null !== t &&
          t.mouseReleased(
            e.x / this.scaleFactor,
            e.y / this.scaleFactor,
            e.code
          ),
          null !== this.mouseDownInterval &&
            clearInterval(this.mouseDownInterval);
      }),
      this.registerListener(document, "pointerlockchange", (e) => {
        let s = this.focusState.getIntent(),
          i = this.isCursorLockedToCanvas(),
          r = s === t.LOCKED,
          a = Date.now() - this.lastIngameSwitchTime;
        this.focusState === t.LOCKED && !i && a < 200
          ? (this.focusState = t.REQUEST_LOCK)
          : null === s
          ? this.updateFocusState(i ? t.LOCKED : t.EXITED)
          : i === r && this.updateFocusState(s);
      }),
      this.registerListener(this.wrapper, "mouseover", (e) => {
        i.setEnabled(!0),
          (this.mouseInsideWindow = !0),
          this.requestCursorUpdate();
      }),
      this.registerListener(this.wrapper, "mouseleave", (e) => {
        i.setEnabled(!1),
          (this.mouseInsideWindow = !1),
          this.requestCursorUpdate();
      }),
      this.registerListener(document, "mouseout", (e) => {
        this.requestCursorUpdate();
      }),
      this.registerListener(document, "mouseenter", (e) => {
        this.requestCursorUpdate();
      }),
      this.registerListener(
        window,
        "keydown",
        (e) => {
          if (("F11" !== e.key && e.preventDefault(), !this.mouseInsideWindow))
            return;
          if ("Escape" === e.key && null === this.minecraft.currentScreen) {
            this.updateFocusState(t.REQUEST_EXIT);
            return;
          }
          let s = this.minecraft.currentScreen;
          null === s
            ? this.minecraft.onKeyPressed(e.code)
            : s.keyTyped(e.code, e.key),
            this.requestCursorUpdate();
        },
        !1
      ),
      this.registerListener(window, "keyup", (e) => {
        let t = this.minecraft.currentScreen;
        null !== t && t.keyReleased(e.code);
      }),
      this.registerListener(document, "contextmenu"),
      this.registerListener(this.wrapper, "wheel", (e) => {
        e.stopPropagation();
        let t = Math.sign(e.deltaY);
        this.minecraft.onMouseScroll(t);
      });
  }
  registerMobileListeners() {
    let e = 0,
      t = !1;
    this.registerListener(window, "resize", (e) => {
      this.updateWindowSize();
    }),
      this.registerListener(
        document,
        "touchstart",
        (t) => {
          for (let s = 0; s < t.touches.length; s++) {
            let r = t.touches[s],
              a = r.pageX,
              n = r.pageY,
              o = this.minecraft.currentScreen;
            null !== o &&
              o.mouseClicked(a / this.scaleFactor, n / this.scaleFactor, 0);
            if (a > this.wrapper.offsetWidth / 2) e = Date.now();
            else {
              let h = this.wrapper.offsetWidth / 8,
                c,
                u =
                  Math.floor((a - 0) / h) +
                  3 * Math.floor((n - (this.wrapper.offsetHeight - 3 * h)) / h);
              switch (u) {
                case 0:
                case 1:
                case 2:
                  i.setState("KeyW", !0);
                  break;
                case 3:
                  i.setState("KeyA", !0);
                  break;
                case 4:
                  i.setState("Space", !0);
                  break;
                case 5:
                  i.setState("KeyD", !0);
                  break;
                case 6:
                case 7:
                case 8:
                  i.setState("KeyS", !0);
              }
            }
          }
        },
        !1
      ),
      this.registerListener(
        document,
        "touchmove",
        (s) => {
          for (let i = 0; i < s.touches.length; i++) {
            let r = s.touches[i],
              a = r.pageX,
              n = r.pageY,
              o = this.minecraft.currentScreen;
            null !== o &&
              o.mouseDragged(a / this.scaleFactor, n / this.scaleFactor, 0);
            a > this.wrapper.offsetWidth / 2 &&
              (t &&
                ((this.mouseMotionX = (a - t.pageX) * 10),
                (this.mouseMotionY = -(10 * (n - t.pageY)))),
              (t = r),
              (e = Date.now()));
          }
        },
        !1
      ),
      this.registerListener(
        document,
        "touchend",
        (s) => {
          !t &&
            0 !== e &&
            Date.now() - e < 1e3 &&
            this.minecraft.onMouseClicked(2),
            (t = !1),
            (e = 0);
          for (let r = 0; r < s.changedTouches.length; r++) {
            let a = s.changedTouches[r],
              n = a.pageX,
              o = a.pageY,
              h = this.minecraft.currentScreen;
            null !== h &&
              h.mouseReleased(n / this.scaleFactor, o / this.scaleFactor, 0);
            if (a.pageX < this.wrapper.offsetWidth / 2) {
              i.unPressAll();
              break;
            }
          }
          this.initialSoundEngine();
        },
        !1
      ),
      this.registerListener(document, "contextmenu"),
      setInterval(() => {
        0 !== e &&
          Date.now() - e > 250 &&
          ((e = Date.now()), this.minecraft.onMouseClicked(0));
      }, 200);
  }
  updateWindowSize() {
    this.updateScaleFactor();
    let e = this.width * this.scaleFactor,
      t = this.height * this.scaleFactor,
      s = this.minecraft.worldRenderer,
      i = this.minecraft.itemRenderer;
    (s.camera.aspect = this.width / this.height),
      s.camera.updateProjectionMatrix(),
      s.webRenderer.setSize(e, t),
      (i.camera.aspect = this.width / this.height),
      i.camera.updateProjectionMatrix(),
      i.webRenderer.setSize(e, t),
      (this.canvas.style.width = e + "px"),
      (this.canvas.style.height = t + "px"),
      (this.canvasDebug.width !== this.canvas.width ||
        this.canvasDebug.height !== this.canvas.height) &&
        ((this.canvasDebug.width = this.canvas.width),
        (this.canvasDebug.height = this.canvas.height)),
      (this.canvasPlayerList.width !== this.canvas.width ||
        this.canvasPlayerList.height !== this.canvas.height) &&
        ((this.canvasPlayerList.width = this.canvas.width),
        (this.canvasPlayerList.height = this.canvas.height)),
      this.minecraft.screenRenderer.initialize(),
      null !== this.minecraft.currentScreen &&
        this.minecraft.currentScreen.setup(
          this.minecraft,
          this.width,
          this.height
        ),
      this.minecraft.isInGame() &&
        (this.minecraft.worldRenderer.render(0), this.minecraft.onRender(0));
  }
  updateScaleFactor() {
    let e = this.wrapper.offsetWidth,
      t = this.wrapper.offsetHeight,
      s;
    for (s = 1; e / (s + 1) >= 320 && t / (s + 1) >= 240; s++);
    (this.scaleFactor = s),
      (this.width = Math.ceil(e / s)),
      (this.height = Math.ceil(t / s));
  }
  isCursorLockedToCanvas() {
    return document.pointerLockElement === this.canvas;
  }
  isLocked() {
    return this.focusState.isLock() && null === this.minecraft.currentScreen;
  }
  updateFocusState(e) {
    if (e.getIntent() === this.focusState || e === this.focusState) return;
    let t = this.focusState.isLock(),
      i = e.isLock();
    if (
      ((this.focusState = e),
      (document.body.style.cursor = i ? "none" : "default"),
      this.requestCursorUpdate(),
      t !== i)
    ) {
      let a = this.minecraft.currentScreen;
      null !== a || i || this.minecraft.displayScreen(new s()),
        a instanceof r ||
          !i ||
          (this.minecraft.displayScreen(null),
          (this.lastIngameSwitchTime = Date.now()));
    }
  }
  requestCursorUpdate() {
    this.mouseInsideWindow &&
      this.focusState.isLock() !== this.isCursorLockedToCanvas() &&
      (this.focusState.isLock()
        ? this.canvas.requestPointerLock()
        : document.exitPointerLock());
  }
  detectTouchDevice() {
    let e = window.matchMedia || window.msMatchMedia;
    return !!e && e("(pointer:coarse)").matches;
  }
  getMemoryLimit() {
    return this.getMemoryValue("jsHeapSizeLimit", 1);
  }
  getMemoryAllocated() {
    return this.getMemoryValue("totalJSHeapSize", 0);
  }
  getMemoryUsed() {
    return this.getMemoryValue("usedJSHeapSize", 0);
  }
  getMemoryValue(e, t = 0) {
    let s =
      window.performance ||
      window.msPerformance ||
      window.webkitPerformance ||
      window.mozPerformance;
    return s && s.memory && s.memory[e] ? s.memory[e] : t;
  }
  getGPUName() {
    let e = this.canvasWorld.getContext("webgl2"),
      t = e.getExtension("WEBGL_debug_renderer_info");
    return e.getParameter(t.UNMASKED_RENDERER_WEBGL);
  }
  openUrl(e, t) {
    t ? window.open(e, "_blank").focus() : (window.location = e);
  }
  close() {
    this.openUrl(e.URL_GITHUB);
  }
  async getClipboardText() {
    return navigator.clipboard.readText();
  }
  isMobileDevice() {
    return this.mobileDevice;
  }
  pullMouseMotionX() {
    let e = this.mouseMotionX;
    return (this.mouseMotionX = 0), e;
  }
  pullMouseMotionY() {
    let e = this.mouseMotionY;
    return (this.mouseMotionY = 0), e;
  }
  initialSoundEngine() {
    this.minecraft.soundManager.isCreated() ||
      this.minecraft.soundManager.create(this.minecraft.worldRenderer);
  }
  registerListener(e, t, s = null, i = !0) {
    e.addEventListener(t, (e) => {
      i && e.preventDefault(), null !== s && s(e);
    });
  }
}
