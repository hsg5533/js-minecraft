import o from "./type/BlockLog.js";
import s from "./type/BlockStone.js";
import e from "./type/BlockGrass.js";
import r from "./type/BlockDirt.js";
import t from "./type/BlockLeave.js";
import n from "./type/BlockWater.js";
import l from "./type/BlockSand.js";
import c from "./type/BlockTorch.js";
import i from "./sound/Sound.js";
import m from "./Block.js";
import B from "./type/BlockWood.js";
import p from "./type/BlockBedrock.js";
import k from "./type/BlockGlass.js";
import y from "./sound/SoundGlass.js";
import w from "./type/BlockGravel.js";
import g from "./type/BlockCobblestone.js";
export class BlockRegistry {
  static create() {
    (m.sounds.stone = new i("stone", 1)),
      (m.sounds.wood = new i("wood", 1)),
      (m.sounds.gravel = new i("gravel", 1)),
      (m.sounds.grass = new i("grass", 1)),
      (m.sounds.cloth = new i("cloth", 1)),
      (m.sounds.sand = new i("sand", 1)),
      (m.sounds.glass = new y("stone", 1)),
      (BlockRegistry.STONE = new s(1, 0)),
      (BlockRegistry.GRASS = new e(2, 1)),
      (BlockRegistry.DIRT = new r(3, 2)),
      (BlockRegistry.COBBLE_STONE = new g(4, 14)),
      (BlockRegistry.WOOD = new B(5, 10)),
      (BlockRegistry.BEDROCK = new p(7, 11)),
      (BlockRegistry.GRAVEL = new w(13, 13)),
      (BlockRegistry.LOG = new o(17, 4)),
      (BlockRegistry.LEAVE = new t(18, 6)),
      (BlockRegistry.GLASS = new k(20, 12)),
      (BlockRegistry.WATER = new n(9, 7)),
      (BlockRegistry.SAND = new l(12, 8)),
      (BlockRegistry.TORCH = new c(50, 9));
  }
}
