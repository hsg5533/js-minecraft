import n from "./net/minecraft/client/Minecraft.js";
class Start {
  loadTextures(n) {
    let a = [],
      r = 0;
    return n
      .reduce(
        (n, e) =>
          n.then(
            () =>
              new Promise((n, t) => {
                let i = new Image();
                (i.src = "src/resources/" + e),
                  (i.onload = () => n()),
                  (a[e] = i),
                  r++;
              })
          ),
        Promise.resolve()
      )
      .then(() => a);
  }
  launch(a) {
    this.loadTextures([
      "misc/grasscolor.png",
      "gui/font.png",
      "gui/gui.png",
      "gui/background.png",
      "gui/icons.png",
      "terrain/terrain.png",
      "terrain/sun.png",
      "terrain/moon.png",
      "char.png",
      "gui/title/minecraft.png",
      "gui/title/background/panorama_0.png",
      "gui/title/background/panorama_1.png",
      "gui/title/background/panorama_2.png",
      "gui/title/background/panorama_3.png",
      "gui/title/background/panorama_4.png",
      "gui/title/background/panorama_5.png",
      "gui/container/creative.png",
    ]).then((r) => {
      window.app = new n(a, r);
    });
  }
}
window.addEventListener("pageshow", function (n) {
  window.app
    ? window.app.running || window.location.reload()
    : new Start().launch("canvas-container");
});
export function require(n) {
  return window[n];
}
