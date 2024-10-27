import { BlockRegistry as t } from "../../block/BlockRegistry.js";
import e from "../Generator.js";
export default class r extends e {
  constructor(t, e) {
    super(t, e), (this.size = 8);
  }
  generateAtBlock(e, r, o) {
    let l = this.random.nextInt(3) + 4;
    if (r < 1 || r + l + 1 > 128) return !1;
    for (let s = r; s <= r + 1 + l; s++) {
      let d = 1;
      s === r && (d = 0), s >= r + 1 + l - 2 && (d = 2);
      for (let i = e - d; i <= e + d; i++)
        for (let f = o - d; f <= o + d; f++) {
          if (!(s >= 0) || !(s < 128)) return;
          {
            let n = this.world.getBlockAt(i, s, f);
            if (0 !== n && n !== t.LEAVE.getId()) return;
          }
        }
    }
    let _ = this.world.getBlockAt(e, r - 1, o);
    if ((_ !== t.GRASS.getId() && _ !== t.DIRT.getId()) || r >= 128 - l - 1)
      return !1;
    this.world.setBlockAt(e, r - 1, o, t.DIRT.getId());
    for (let c = r - 3 + l; c <= r + l; c++) {
      let g = c - (r + l),
        A = Math.floor(1 - g / 2);
      for (let I = e - A; I <= e + A; I++) {
        let h = I - e;
        for (let k = o - A; k <= o + A; k++) {
          let a = k - o;
          (Math.abs(h) !== A ||
            Math.abs(a) !== A ||
            (0 !== this.random.nextInt(2) && 0 !== g)) &&
            this.world.setBlockAt(I, c, k, t.LEAVE.getId());
        }
      }
    }
    for (let u = 0; u < l; u++) {
      let B = this.world.getBlockAt(e, r + u, o);
      (0 === B || B === t.LEAVE.getId()) &&
        this.world.setBlockAt(e, r + u, o, t.LOG.getId());
    }
    return !0;
  }
}
