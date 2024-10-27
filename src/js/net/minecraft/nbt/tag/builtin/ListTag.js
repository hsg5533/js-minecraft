import t from "./Tag.js";
import e from "../TagRegistry.js";
export default class s extends t {
  constructor(t, e, s = []) {
    super(t), (this.type = e), (this.value = s);
  }
  write(t) {
    if (0 === this.value.length) t.writeByte(0);
    else {
      let s = e.getIdFor(this.type);
      if (-1 === s) throw Error("Unknown tag type: " + this.type);
      t.writeByte(s);
    }
    t.writeInt(this.value.length);
    for (let r = 0; r < this.value.length; r++) this.value[r].write(t);
  }
  read(t) {
    let s = t.readByte();
    (this.type = e.getClassFor(s)), (this.value = []);
    let r = t.readInt();
    for (let a = 0; a < r; a++) {
      let i = e.createInstance(s, "");
      i.read(t), this.add(i);
    }
  }
  add(t) {
    this.value.push(t);
  }
  getValue() {
    return this.value;
  }
  setValue(t) {
    this.value = t;
  }
}
