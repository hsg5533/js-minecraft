import e from "../Inventory.js";
export default class t extends e {
  constructor() {
    super("player"),
      (this.selectedSlotIndex = 0),
      (this.itemInCursor = null),
      (this.items = []);
  }
  setItem(e, t) {
    this.items[e] = null === t ? 0 : t;
  }
  setItemInSelectedSlot(e) {
    this.items[this.selectedSlotIndex] = e;
  }
  getItemInSelectedSlot() {
    return this.getItemInSlot(this.selectedSlotIndex);
  }
  shiftSelectedSlot(e) {
    this.selectedSlotIndex + e < 0
      ? (this.selectedSlotIndex = 9 + (this.selectedSlotIndex + e))
      : (this.selectedSlotIndex = (this.selectedSlotIndex + e) % 9);
  }
  getItemInSlot(e) {
    return this.items.hasOwnProperty(e) ? this.items[e] : 0;
  }
}
