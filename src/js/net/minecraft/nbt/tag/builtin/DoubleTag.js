import e from "./Tag.js";
export default class t extends e {
  constructor(e, t = 0) {
    super(e), (this.value = t);
  }
  write(e) {
    e.writeDouble(this.value);
  }
  read(e) {
    this.value = e.readDouble();
  }
  getValue() {
    return this.value;
  }
  setValue(e) {
    this.value = e;
  }
}
