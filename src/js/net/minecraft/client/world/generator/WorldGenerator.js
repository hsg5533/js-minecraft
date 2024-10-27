import e from "./noise/NoiseGeneratorOctaves.js";
import t from "../Chunk.js";
import r from "./Primer.js";
import n from "./structure/CaveGenerator.js";
import { BlockRegistry as o } from "../block/BlockRegistry.js";
import a from "./structure/TreeGenerator.js";
import i from "./structure/BigTreeGenerator.js";
import s from "./Generator.js";
import $ from "../ChunkSection.js";
export default class _ extends s {
  constructor(t, r) {
    super(t, r),
      (this.caveGenerator = new n(t, r)),
      (this.terrainGenerator4 = new e(this.random, 16)),
      (this.terrainGenerator5 = new e(this.random, 16)),
      (this.terrainGenerator3 = new e(this.random, 8)),
      (this.natureGenerator1 = new e(this.random, 4)),
      (this.natureGenerator2 = new e(this.random, 4)),
      (this.terrainGenerator1 = new e(this.random, 10)),
      (this.terrainGenerator2 = new e(this.random, 16)),
      (this.populationNoiseGenerator = new e(this.random, 8));
  }
  newChunk(e, n, o) {
    this.random.setSeed(341873128712 * n + 132897987541 * o);
    let a = new t(e, n, o),
      i = new r(a);
    return (
      this.generateInChunk(n, o, i),
      a.generateSkylightMap(),
      a.generateBlockLightMap(),
      a
    );
  }
  generateInChunk(e, t, r) {
    this.generateTerrain(e, t, r),
      this.naturalize(e, t, r),
      this.caveGenerator.generateInChunk(e, t, r);
  }
  populateChunk(e, t) {
    this.setChunkSeed(e, t);
    let r = 16 * e,
      n = 16 * t,
      o = Math.floor(
        (this.populationNoiseGenerator.perlin(0.5 * r, 0.5 * n) / 8 +
          4 * this.random.nextDouble() +
          4) /
          3
      );
    o < 0 && (o = 0), 0 === this.random.nextInt(10) && o++;
    let s = 0 === this.random.nextInt(10),
      $ = this.random.seed,
      _ = s ? new i(this.world, $) : new a(this.world, $);
    for (let h = 0; h < o; h++) {
      let l = r + this.random.nextInt(16) + 8,
        d = n + this.random.nextInt(16) + 8,
        g = this.world.getHeightAt(l, d);
      _.generateAtBlock(l, g, d);
    }
  }
  generateTerrain(e, t, r) {
    let n = 1 / 4,
      a = this.generateTerrainNoise(4 * e, 0, 4 * t, 5, 17, 5);
    for (let i = 0; i < 4; i++)
      for (let s = 0; s < 4; s++)
        for (let $ = 0; $ < 16; $++) {
          let _ = 1 / 8,
            h = a[(5 * i + s) * 17 + $],
            l = a[(5 * i + (s + 1)) * 17 + $],
            d = a[((i + 1) * 5 + s) * 17 + $],
            g = a[((i + 1) * 5 + (s + 1)) * 17 + $],
            m = (a[(5 * i + s) * 17 + ($ + 1)] - h) * _,
            f = (a[(5 * i + (s + 1)) * 17 + ($ + 1)] - l) * _,
            u = (a[((i + 1) * 5 + s) * 17 + ($ + 1)] - d) * _,
            G = (a[((i + 1) * 5 + (s + 1)) * 17 + ($ + 1)] - g) * _;
          for (let c = 0; c < 8; c++) {
            let I = h,
              p = l,
              N = (d - h) * n,
              v = (g - l) * n;
            for (let w = 0; w < 4; w++) {
              let S = I,
                k = (p - I) * n;
              for (let x = 0; x < 4; x++) {
                let O = 0;
                8 * $ + c < this.seaLevel && (O = o.WATER.getId()),
                  S > 0 && (O = o.STONE.getId()),
                  r.set(4 * i + w, 8 * $ + c, 4 * s + x, O),
                  (S += k);
              }
              (I += N), (p += v);
            }
            (h += m), (l += f), (d += u), (g += G);
          }
        }
  }
  naturalize(e, t, r) {
    let n = 1 / 32,
      a = $.SIZE,
      i = this.natureGenerator1.generateNoiseOctaves(
        e * a,
        t * a,
        0,
        a,
        a,
        1,
        n,
        n,
        1
      ),
      s = this.natureGenerator1.generateNoiseOctaves(
        t * a,
        109.0134,
        e * a,
        a,
        1,
        a,
        n,
        1,
        n
      ),
      _ = this.natureGenerator2.generateNoiseOctaves(
        e * a,
        t * a,
        0,
        a,
        a,
        1,
        2 * n,
        2 * n,
        2 * n
      );
    for (let h = 0; h < 16; h++)
      for (let l = 0; l < 16; l++) {
        let d = i[h + 16 * l] + 0.2 * this.random.nextFloat() > 0,
          g = s[h + 16 * l] + 0.2 * this.random.nextFloat() > 3,
          m = _[h + 16 * l] / 3 + 3 + 0.25 * this.random.nextFloat(),
          f = -1,
          u = o.GRASS.getId(),
          G = o.DIRT.getId();
        for (let c = 127; c >= 0; c--) {
          if (c <= this.random.nextInt(6) - 1 || 0 === c) {
            r.set(h, c, l, o.BEDROCK.getId());
            continue;
          }
          let I = r.get(h, c, l);
          if (0 === I) {
            f = -1;
            continue;
          }
          if (I === o.STONE.getId()) {
            if (-1 === f) {
              m <= 0
                ? ((u = 0), (G = o.STONE.getId()))
                : c >= this.seaLevel - 4 &&
                  c <= this.seaLevel + 1 &&
                  ((u = o.GRASS.getId()),
                  (G = o.DIRT.getId()),
                  g && ((u = 0), (G = o.GRAVEL.getId())),
                  d && ((u = o.SAND.getId()), (G = o.SAND.getId()))),
                c < this.seaLevel && 0 === u && (u = o.WATER.getId()),
                (f = m),
                c >= this.seaLevel - 1 ? r.set(h, c, l, u) : r.set(h, c, l, G);
              continue;
            }
            f > 0 && (f--, r.set(h, c, l, G));
          }
        }
      }
  }
  generateTerrainNoise(e, t, r, n, o, a) {
    let i = this.terrainGenerator1.generateNoiseOctaves(
        e,
        t,
        r,
        n,
        1,
        a,
        1,
        0,
        1
      ),
      s = this.terrainGenerator2.generateNoiseOctaves(
        e,
        t,
        r,
        n,
        1,
        a,
        100,
        0,
        100
      ),
      $ = this.terrainGenerator3.generateNoiseOctaves(
        e,
        t,
        r,
        n,
        o,
        a,
        684.412 / 80,
        684.412 / 160,
        684.412 / 80
      ),
      _ = this.terrainGenerator4.generateNoiseOctaves(
        e,
        t,
        r,
        n,
        o,
        a,
        684.412,
        684.412,
        684.412
      ),
      h = this.terrainGenerator5.generateNoiseOctaves(
        e,
        t,
        r,
        n,
        o,
        a,
        684.412,
        684.412,
        684.412
      ),
      l = [],
      d = 0,
      g = 0;
    for (let m = 0; m < n; m++)
      for (let f = 0; f < a; f++) {
        let u = (i[g] + 256) / 512;
        u > 1 && (u = 1);
        let G = s[g] / 8e3;
        G < 0 && (G = -G),
          (G = 3 * G - 3) < 0
            ? ((G /= 2) < -1 && (G = -1), (G /= 1.4), (G /= 2), (u = 0))
            : (G > 1 && (G = 1), (G /= 6)),
          (u += 0.5),
          (G = (G * o) / 16),
          g++;
        let c = o / 2 + 4 * G;
        for (let I = 0; I < o; I++) {
          let p = 0,
            N = ((I - c) * 12) / u;
          N < 0 && (N *= 4);
          let v = _[d] / 512,
            w = h[d] / 512,
            S = ($[d] / 10 + 1) / 2;
          if (
            ((p = S < 0 ? v : S > 1 ? w : v + (w - v) * S), (p -= N), I > o - 4)
          ) {
            let k = (I - (o - 4)) / 3;
            p = p * (1 - k) + -10 * k;
          }
          if (I < 0) {
            let x = (0 - I) / 4;
            x < 0 && (x = 0), x > 1 && (x = 1), (p = p * (1 - x) + -10 * x);
          }
          (l[d] = p), d++;
        }
      }
    return l;
  }
}
