import e from "./Tag.js";
export default class t extends e {
  constructor(e, t = new Uint8Array(0)) {
    super(e), (this.value = t);
  }
  write(e) {
    e.writeInt(this.value.length), e.write(this.value, this.value.length);
  }
  read(e) {
    (this.value = new Uint8Array(e.readInt())),
      e.read(this.value, this.value.length);
  }
  getValue() {
    return this.value;
  }
  setValue(e) {
    this.value = e;
  }
}
