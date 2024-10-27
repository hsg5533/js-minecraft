export default class t {
  constructor() {
    (this.slots = []), (this.dirty = !0);
  }
  addSlot(t) {
    this.slots.push(t);
  }
  swapWithHotbar(t, e, n) {
    let i = t.inventory,
      s = i.getItemInSlot(t.index),
      o = e.getItemInSlot(n);
    i.setItem(t.index, o), e.setItem(n, s), (this.dirty = !0);
  }
  onSlotClick(t, e) {
    let n = e.inventory,
      i = t.inventory.getItemInSlot(t.index);
    null === n.itemInCursor || 0 === n.itemInCursor
      ? (t.inventory.setItem(t.index, 0), (n.itemInCursor = i))
      : (t.inventory.setItem(t.index, n.itemInCursor), (n.itemInCursor = i)),
      (this.dirty = !0);
  }
}
