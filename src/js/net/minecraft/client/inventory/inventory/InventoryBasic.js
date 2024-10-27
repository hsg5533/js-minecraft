import t from "../Inventory.js";
export default class e extends t {
  constructor() {
    super("basic"), (this.items = []);
  }
  getItemInSlot(t) {
    return this.items[t];
  }
  setItem(t, e) {
    this.items[t] = e;
  }
}
