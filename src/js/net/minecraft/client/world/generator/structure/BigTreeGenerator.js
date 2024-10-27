import t from "../Generator.js";
import { BlockRegistry as e } from "../../block/BlockRegistry.js";
export default class s extends t {
  constructor(t, e) {
    super(t, e),
      (this.heightLimit = 0),
      (this.heightAttenuation = 0.617),
      (this.branchSlope = 0.381),
      (this.scaleWidth = 1),
      (this.leafDensity = 1),
      (this.trunkSize = 1),
      (this.heightLimitLimit = 12),
      (this.offsetY = 4),
      (this.coords = []),
      (this.types = [2, 0, 0, 1, 2, 1]),
      (this.nodes = []);
  }
  generateAtBlock(t, e, s) {
    let i = this.random.nextLong();
    return (
      this.random.setSeed(i),
      (this.coords[0] = t),
      (this.coords[1] = e),
      (this.coords[2] = s),
      0 === this.heightLimit &&
        (this.heightLimit = 5 + this.random.nextInt(this.heightLimitLimit)),
      !!this.validTreeLocation() &&
        (this.generateLeafNodeList(),
        this.generateLeafNodes(),
        this.generateTrunk(),
        this.generateLeafNodeBases(),
        !0)
    );
  }
  validTreeLocation() {
    let t = [this.coords[0], this.coords[1], this.coords[2]],
      e = [
        this.coords[0],
        this.coords[1] + this.heightLimit - 1,
        this.coords[2],
      ],
      s = this.world.getBlockAt(
        this.coords[0],
        this.coords[1] - 1,
        this.coords[2]
      );
    if (2 !== s && 3 !== s) return !1;
    let i = this.checkBlockLine(t, e);
    return -1 === i || (!(i < 6) && ((this.heightLimit = i), !0));
  }
  checkBlockLine(t, s) {
    let i = [0, 0, 0],
      o = 0,
      h = 0;
    for (; o < 3; o++)
      (i[o] = s[o] - t[o]), Math.abs(i[o]) > Math.abs(i[h]) && (h = o);
    if (0 === i[h]) return -1;
    let r = this.types[h],
      $ = this.types[h + 3],
      l;
    l = i[h] > 0 ? 1 : -1;
    let d = i[r] / i[h],
      c = i[$] / i[h],
      n = 0,
      a = i[h] + l;
    for (; n !== a; ) {
      let f = [0, 0, 0];
      (f[h] = t[h] + n),
        (f[r] = Math.floor(t[r] + n * d)),
        (f[$] = Math.floor(t[$] + n * c));
      let _ = this.world.getBlockAt(f[0], f[1], f[2]);
      if (0 !== _ && _ !== e.LEAVE.getId()) break;
      n += l;
    }
    return n === a ? -1 : Math.abs(n);
  }
  generateLeafNodeList() {
    (this.height = Math.floor(this.heightLimit * this.heightAttenuation)),
      this.height >= this.heightLimit && (this.height = this.heightLimit - 1);
    let t = Math.floor(
      1.38 + Math.pow((this.leafDensity * this.heightLimit) / 13, 2)
    );
    t < 1 && (t = 1);
    let e = [];
    for (let s = 0; s < t * this.heightLimit; s++) e[s] = [];
    let i = this.coords[1] + this.heightLimit - this.offsetY,
      o = this.coords[1] + this.height,
      h = i - this.coords[1];
    (e[0][0] = this.coords[0]),
      (e[0][1] = i),
      (e[0][2] = this.coords[2]),
      (e[0][3] = o),
      i--;
    let r = 1;
    for (; h >= 0; ) {
      let $ = 0,
        l = this.layerSize(h);
      if (l < 0) i--, h--;
      else {
        for (; $ < t; $++) {
          let d = this.scaleWidth * (l * (this.random.nextFloat() + 0.328)),
            c = 2 * this.random.nextFloat() * Math.PI,
            n = Math.floor(d * Math.sin(c) + this.coords[0] + 0.5),
            a = Math.floor(d * Math.cos(c) + this.coords[2] + 0.5),
            f = [n, i, a],
            _ = [n, i + this.offsetY, a];
          if (-1 !== this.checkBlockLine(f, _)) continue;
          let g = [this.coords[0], this.coords[1], this.coords[2]],
            L =
              Math.sqrt(
                Math.pow(Math.abs(this.coords[0] - f[0]), 2) +
                  Math.pow(Math.abs(this.coords[2] - f[2]), 2)
              ) * this.branchSlope;
          f[1] - L > o ? (g[1] = o) : (g[1] = Math.floor(f[1] - L)),
            -1 === this.checkBlockLine(g, f) &&
              ((e[r][0] = n),
              (e[r][1] = i),
              (e[r][2] = a),
              (e[r][3] = g[1]),
              r++);
        }
        i--, h--;
      }
    }
    this.nodes = [];
    for (let m = 0; m < r; m++) this.nodes[m] = e[m];
  }
  layerSize(t) {
    if (t < 0.29 * this.heightLimit) return -1.618;
    let e = this.heightLimit / 2,
      s = this.heightLimit / 2 - t,
      i;
    return (
      (i =
        0 === s
          ? e
          : Math.abs(s) >= e
          ? 0
          : Math.sqrt(Math.pow(Math.abs(e), 2) - Math.pow(Math.abs(s), 2))),
      (i *= 0.5)
    );
  }
  generateLeafNode(t, s, i) {
    for (let o = s; o < s + this.offsetY; o++) {
      let h = this.leafSize(o - s);
      this.generateNodeByType(t, o, i, h, 1, e.LEAVE.getId());
    }
  }
  leafSize(t) {
    return t < 0 || t >= this.offsetY
      ? -1
      : 0 !== t && t !== this.offsetY - 1
      ? 3
      : 2;
  }
  generateNodeByType(t, s, i, o, h, r) {
    let $ = Math.floor(o + 0.618),
      l = this.types[h],
      d = this.types[h + 3],
      c = [t, s, i],
      n = [0, 0, 0];
    n[h] = c[h];
    for (let a = -$; a <= $; a++) {
      n[l] = c[l] + a;
      for (let f = -$; f <= $; )
        if (
          Math.sqrt(
            Math.pow(Math.abs(a) + 0.5, 2) + Math.pow(Math.abs(f) + 0.5, 2)
          ) > o
        )
          f++;
        else {
          n[d] = c[d] + f;
          let _ = this.world.getBlockAt(n[0], n[1], n[2]);
          (0 !== _ && _ !== e.LEAVE.getId()) ||
            this.world.setBlockAt(n[0], n[1], n[2], r),
            f++;
        }
    }
  }
  generateLeafNodes() {
    for (let t = 0; t < this.nodes.length; t++) {
      let e = this.nodes[t][0],
        s = this.nodes[t][1],
        i = this.nodes[t][2];
      this.generateLeafNode(e, s, i);
    }
  }
  generateTrunk() {
    let t = this.coords[0],
      s = this.coords[1],
      i = this.coords[1] + this.height,
      o = this.coords[2],
      h = [t, s, o],
      r = [t, i, o],
      $ = e.LOG.getId();
    this.setBlocks(h, r, $),
      2 === this.trunkSize &&
        (h[0]++,
        r[0]++,
        this.setBlocks(h, r, $),
        h[2]++,
        r[2]++,
        this.setBlocks(h, r, $),
        h[0]--,
        r[0]--,
        this.setBlocks(h, r, $));
  }
  setBlocks(t, e, s) {
    let i = [0, 0, 0],
      o = 0,
      h = 0;
    for (; o < 3; o++)
      (i[o] = e[o] - t[o]), Math.abs(i[o]) > Math.abs(i[h]) && (h = o);
    if (0 === i[h]) return;
    let r = this.types[h],
      $ = this.types[h + 3],
      l;
    l = i[h] > 0 ? 1 : -1;
    let d = i[r] / i[h],
      c = i[$] / i[h];
    for (let n = 0; n !== i[h] + l; n += l) {
      let a = [0, 0, 0];
      (a[h] = Math.floor(t[h] + n + 0.5)),
        (a[r] = Math.floor(t[r] + n * d + 0.5)),
        (a[$] = Math.floor(t[$] + n * c + 0.5)),
        this.world.setBlockAt(a[0], a[1], a[2], s);
    }
  }
  generateLeafNodeBases() {
    let t = this.nodes.length,
      s = [this.coords[0], this.coords[1], this.coords[2]];
    for (let i = 0; i < t; i++) {
      let o = this.nodes[i],
        h = [o[0], o[1], o[2]];
      s[1] = o[3];
      let r = s[1] - this.coords[1];
      this.leafNodeNeedsBase(r) && this.setBlocks(s, h, e.LOG.getId());
    }
  }
  leafNodeNeedsBase(t) {
    return t >= 0.2 * this.heightLimit;
  }
}
