import t from "../GuiScreen.js";
import e from "../../world/block/Block.js";
export default class r extends t {
  constructor(t) {
    super(),
      (this.inventoryWidth = 176),
      (this.inventoryHeight = 166),
      (this.container = t),
      (this.hoverSlot = null);
  }
  init() {
    super.init(),
      (this.x = Math.floor((this.width - this.inventoryWidth) / 2)),
      (this.y = Math.floor((this.height - this.inventoryHeight) / 2));
  }
  drawScreen(t, r, i, n) {
    this.drawDefaultBackground(t),
      this.drawInventoryBackground(t),
      this.drawString(t, "Creative Inventory", this.x + 8, this.y + 6, 4210752),
      this.container.dirty &&
        ((this.container.dirty = !1),
        this.minecraft.itemRenderer.destroy("inventory"),
        this.minecraft.itemRenderer.scheduleDirty("hotbar")),
      (this.hoverSlot = null),
      this.container.slots.forEach((e) => {
        this.drawSlot(t, e, r, i);
      });
    let o = this.minecraft.player.inventory.itemInCursor;
    if (null !== o && 0 !== o) {
      let s = e.getById(o);
      (this.minecraft.itemRenderer.zIndex = 10),
        this.minecraft.itemRenderer.renderItemInGui(
          "inventory",
          "cursor",
          s,
          r,
          i
        ),
        (this.minecraft.itemRenderer.zIndex = 0);
    } else this.minecraft.itemRenderer.destroy("inventory", "cursor");
    this.drawTitle(t), super.drawScreen(t, r, i, n);
  }
  mouseClicked(t, e, r) {
    for (let i of (super.mouseClicked(t, e, r), this.container.slots))
      this.isMouseOverSlot(i, t, e) &&
        this.container.onSlotClick(i, this.minecraft.player);
  }
  keyTyped(t, e) {
    for (let r = 1; r <= 9; r++)
      t === "Digit" + r &&
        null !== this.hoverSlot &&
        this.container.swapWithHotbar(
          this.hoverSlot,
          this.minecraft.player.inventory,
          r - 1
        );
    return super.keyTyped(t, e);
  }
  drawSlot(t, r, i, n) {
    let o = this.x + r.x,
      s = this.y + r.y,
      h = r.inventory,
      l = h.getItemInSlot(r.index),
      a = this.isMouseOverSlot(r, i, n);
    if (null !== l && 0 !== l) {
      let d = e.getById(l);
      this.minecraft.itemRenderer.renderItemInGui(
        "inventory",
        h.name + ":" + r.index,
        d,
        o + 8,
        s + 8,
        a ? 1.5 : 1
      );
    }
    a &&
      (this.drawRect(t, o, s, o + 16, s + 16, "#ffffff", 0.5),
      (this.hoverSlot = r));
  }
  onClose() {
    super.onClose(),
      (this.minecraft.player.inventory.itemInCursor = null),
      this.minecraft.itemRenderer.destroy("inventory");
  }
  drawTitle(t) {}
  drawInventoryBackground(t) {}
  isMouseOverSlot(t, e, r) {
    let i = this.x + t.x,
      n = this.y + t.y;
    return e >= i && e <= i + 16 && r >= n && r <= n + 16;
  }
}
