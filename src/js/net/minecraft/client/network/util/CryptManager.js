import e from "../../../util/Random.js";
import t from "./ByteBuf.js";
import { require as r } from "../../../../../Start.js";
export default class n {
  static createNewSharedKey() {
    let e = new Uint8Array(16);
    return window.crypto.getRandomValues(e), e;
  }
  static encryptRSA(n, i) {
    let o = r("ASN1").parse(new Uint8Array(n)),
      l = r("bigint-mod-arith"),
      s = l.bytesToBigInt(o.children[1].children[0].children[0].value),
      a = l.bytesToBigInt(o.children[1].children[0].children[1].value),
      y = (s.toString(2).length + 7) >> 3;
    if (y < i.length + 11) throw Error("Data is too long to encrypt");
    let g = new t(new Uint8Array(i).reverse());
    g.setPosition(g.length()), g.writeByte(0);
    let h = new e(),
      c = [];
    for (; g.length() < y - 2; ) {
      for (c[0] = 0; 0 === c[0]; ) h.nextBytes(c, c.length);
      g.writeByte(c[0]);
    }
    g.writeByte(2), g.writeByte(0);
    let $ = g.getArray().reverse(),
      d = l.bytesToBigInt($);
    return (d = l.modPow(d, a, s)), l.bigIntToBytes(d);
  }
}
