import e from "./tag/TagRegistry.js";
export default class {
  static readTag(t) {
    let r = t.readUnsignedByte();
    if (0 === r) return null;
    let a = t.readShort(),
      n = new Uint8Array(a);
    t.read(n, a);
    let d = new TextDecoder().decode(n),
      i = e.createInstance(r, d);
    return i.read(t), i;
  }
  static writeTag(t, r) {
    let a = new TextEncoder().encode(r.getName());
    t.writeByte(e.getIdFor(r)), t.writeShort(a.length), t.write(a), r.write(t);
  }
}
