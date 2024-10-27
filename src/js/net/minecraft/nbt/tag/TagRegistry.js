import t from "./builtin/ByteTag.js";
import r from "./builtin/CompoundTag.js";
import i from "./builtin/ShortTag.js";
import e from "./builtin/IntTag.js";
import o from "./builtin/LongTag.js";
import s from "./builtin/FloatTag.js";
import g from "./builtin/DoubleTag.js";
import a from "./builtin/StringTag.js";
import n from "./builtin/ByteArrayTag.js";
import l from "./builtin/ListTag.js";
import m from "./builtin/IntArrayTag.js";
export default class T {
  static idToTag = new Map();
  static tagToId = new Map();
  static {
    T.register(1, t),
      T.register(2, i),
      T.register(3, e),
      T.register(4, o),
      T.register(5, s),
      T.register(6, g),
      T.register(7, n),
      T.register(8, a),
      T.register(9, l),
      T.register(10, r),
      T.register(11, m);
  }
  static register(t, r) {
    T.idToTag.set(t, r), T.tagToId.set(r, t);
  }
  static getIdFor(t) {
    let r = T.tagToId.get(t);
    return void 0 === r ? -1 : r;
  }
  static getClassFor(t) {
    let r = T.idToTag.get(t);
    return void 0 === r ? null : r;
  }
  static createInstance(t, r) {
    let i = T.idToTag.get(t);
    return null == i ? null : new i(r);
  }
}
