import t from "../Container.js";
import e from "../../gui/screens/container/GuiContainerCreative.js";
import i from "../Slot.js";
import o from "../../world/block/Block.js";
import r from "../inventory/InventoryPlayer.js";
export default class n extends t {
  constructor(t) {
    super(), (this.itemList = []);
    let o = t.inventory;
    for (let r = 0; r < 5; ++r)
      for (let n = 0; n < 9; ++n)
        this.addSlot(new i(e.inventory, 9 * r + n, 9 + 18 * n, 18 + 18 * r));
    for (let s = 0; s < 9; ++s) this.addSlot(new i(o, s, 9 + 18 * s, 112));
    this.initItems(), this.scrollTo(0);
  }
  swapWithHotbar(t, e, i) {
    let o = t.inventory.getItemInSlot(t.index);
    e.setItem(i, o), (this.dirty = !0);
  }
  onSlotClick(t, e) {
    t.inventory instanceof r
      ? super.onSlotClick(t, e)
      : (e.inventory.itemInCursor = t.inventory.getItemInSlot(t.index)),
      (this.dirty = !0);
  }
  scrollTo(t) {
    let i = Math.floor(t * ((this.itemList.length + 9 - 1) / 9 - 5) + 0.5);
    i < 0 && (i = 0);
    for (let o = 0; o < 5; ++o)
      for (let r = 0; r < 9; ++r) {
        let n = r + (o + i) * 9;
        n >= 0 && n < this.itemList.length
          ? e.inventory.setItem(r + 9 * o, this.itemList[n])
          : e.inventory.setItem(r + 9 * o, null);
      }
  }
  initItems() {
    o.blocks.forEach((t) => {
      this.itemList.push(t.getId());
    });
  }
}
