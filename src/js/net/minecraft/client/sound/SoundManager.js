import e from "../world/block/Block.js";
import * as o from "../../../../../../libraries/three.module.js";
export default class t {
  constructor() {
    (this.audioLoader = new o.AudioLoader()),
      (this.audioListener = null),
      (this.soundPool = {});
  }
  create(t) {
    for (let s in ((this.scene = t.scene),
    (this.audioListener = new o.AudioListener()),
    t.camera.add(this.audioListener),
    e.sounds)) {
      let i = e.sounds[s];
      this.loadSoundPool(i.getStepSound());
    }
  }
  loadSoundPool(e) {
    let o = [],
      t = e.replace(".", "/");
    for (let s = 0; s < 4; s++) {
      let i = this.loadSound("src/resources/sound/" + t + (s + 1) + ".ogg");
      o.push(i);
    }
    this.soundPool[e] = o;
  }
  loadSound(e) {
    if (!this.isCreated()) return;
    let t = new o.PositionalAudio(this.audioListener);
    return (
      t.setRefDistance(0.1),
      t.setRolloffFactor(6),
      t.setFilter(t.context.createBiquadFilter()),
      t.setVolume(0),
      this.audioLoader.load(e, (e) => {
        t.setBuffer(e), this.scene.add(t);
      }),
      t
    );
  }
  playSound(e, o, t, s, i, r) {
    let l = this.soundPool[e];
    if (void 0 === l) this.loadSoundPool(e);
    else if (l.length > 0) {
      let d = l[Math.floor(Math.random() * l.length)];
      if (void 0 === i || void 0 === d) return;
      d.isPlaying && d.stop(),
        d.position.set(o, t, s),
        d.setVolume(i),
        d.filters[0].frequency.setValueAtTime(12e3 * r, d.context.currentTime),
        (d.offset = 0),
        d.play();
    }
  }
  isCreated() {
    return null !== this.audioListener;
  }
}
