export default class e {
  constructor() {
    (this.keyCrouching = "ShiftLeft"),
      (this.keySprinting = "ControlLeft"),
      (this.keyTogglePerspective = "F5"),
      (this.keyOpenChat = "KeyT"),
      (this.keyOpenInventory = "KeyE"),
      (this.keyPlayerList = "Tab"),
      (this.session = null),
      (this.thirdPersonView = 0),
      (this.fov = 70),
      (this.viewBobbing = !0),
      (this.ambientOcclusion = !0),
      (this.sensitivity = 100),
      (this.viewDistance = 4),
      (this.debugOverlay = !1),
      (this.serverAddress = "server.labystudio.de");
  }
  load() {
    for (let e in this) {
      let t = e + "=",
        i = document.cookie.split(";");
      for (let s = 0; s < i.length; s++) {
        let h = i[s];
        for (; " " === h.charAt(0); ) h = h.substring(1, h.length);
        if (0 === h.indexOf(t)) {
          let n = h.substring(t.length, h.length);
          n.match(/^[0-9]+$/) && (n = parseInt(n)),
            "true" === n && (n = !0),
            "false" === n && (n = !1),
            "null" === n && (n = null),
            (this[e] = n);
        }
      }
    }
  }
  save() {
    for (let e in this)
      document.cookie =
        e + "=" + this[e] + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }
}
