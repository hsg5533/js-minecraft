import e from "./Tag.js";
export default class t extends e {
  constructor(e, t = 0) {
    super(e), (this.value = t);
  }
  write(e) {
    e.writeLong(this.value);
  }
  read(e) {
    this.value = e.readLong();
  }
  getValue() {
    return this.value;
  }
  setValue(e) {
    this.value = e;
  }
}
