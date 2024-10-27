import e from "./Tag.js";
export default class t extends e {
  constructor(e, t = 0) {
    super(e), (this.value = t);
  }
  write(e) {
    e.writeFloat(this.value);
  }
  read(e) {
    this.value = e.readFloat();
  }
  getValue() {
    return this.value;
  }
  setValue(e) {
    this.value = e;
  }
}
