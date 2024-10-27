import e from "./Tag.js";
import t from "../../NBTIO.js";
export default class r extends e {
  constructor(e, t = new Map()) {
    super(e), (this.value = t);
  }
  write(e) {
    for (let [r, l] of this.value) t.writeTag(e, l);
    e.writeByte(0);
  }
  read(e) {
    let r = [],
      l = null;
    for (; null !== (l = t.readTag(e)); ) r.push(l);
    for (let s of r) this.put(s);
  }
  put(e) {
    this.value.set(e.getName(), e);
  }
  getValue() {
    return this.value;
  }
  setValue(e) {
    this.value = e;
  }
}
