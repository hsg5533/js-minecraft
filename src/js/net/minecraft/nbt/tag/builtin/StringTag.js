import e from "./Tag.js";
export default class t extends e {
  constructor(e, t = "") {
    super(e), (this.value = t);
  }
  write(e) {
    let t = new TextEncoder().encode(this.value);
    e.writeShort(t.length), e.write(t, t.length);
  }
  read(e) {
    let t = e.readShort(),
      r = new Uint8Array(t);
    e.read(r, t), (this.value = new TextDecoder().decode(r));
  }
  getValue() {
    return this.value;
  }
  setValue(e) {
    this.value = e;
  }
}
