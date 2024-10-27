import t from "../../../util/MathHelper.js";
import e from "../../world/block/Block.js";
import i from "./particle/ParticleDigging.js";
export default class r {
  constructor(t) {
    (this.minecraft = t), (this.particles = []);
  }
  spawnParticle(t) {
    this.particles.push(t);
  }
  onTick() {
    for (let t = 0; t < this.particles.length; t++) {
      let e = this.particles[t];
      e.onUpdate(), e.isDead && (this.particles.splice(t, 1), t--);
    }
  }
  renderParticles(e, i) {
    let r = e.prevRotationYaw + (e.rotationYaw - e.prevRotationYaw) * i,
      a = e.prevRotationPitch + (e.rotationPitch - e.prevRotationPitch) * i,
      l = t.toRadians(a),
      o = -t.toRadians(r);
    for (let s = 0; s < this.particles.length; s++) {
      let c = this.particles[s];
      c.render(l, o, 0, i);
    }
  }
  spawnBlockBreakParticle(t, r, a, l) {
    let o = t.getBlockAt(r, a, l);
    if (0 === o) return;
    let s = e.getById(o);
    for (let c = 0; c < 4; c++)
      for (let n = 0; n < 4; n++)
        for (let p = 0; p < 4; p++) {
          let h = r + (c + 0.5) / 4,
            $ = a + (n + 0.5) / 4,
            f = l + (p + 0.5) / 4,
            d = h - r - 0.5,
            m = $ - a - 0.5,
            w = f - l - 0.5;
          this.spawnParticle(new i(this.minecraft, t, h, $, f, d, m, w, s));
        }
  }
}
