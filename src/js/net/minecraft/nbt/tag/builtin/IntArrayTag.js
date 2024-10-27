import e from "./Tag.js";
export default class t extends e {
  constructor(e, t = []) {
    super(e), (this.value = t);
  }
  write(e) {
    e.writeInt(this.value.length);
    for (let t = 0; t < this.value.length; t++) e.writeInt(this.value[t]);
  }
  read(e) {
    this.value = new Uint8Array(e.readInt());
    for (let t = 0; t < this.value.length; t++) this.value[t] = e.readInt();
  }
  getValue() {
    return this.value;
  }
  setValue(e) {
    this.value = e;
  }
}
