import t from "../GuiContainer.js";
import e from "../../../inventory/container/ContainerCreative.js";
import i from "../../../inventory/inventory/InventoryBasic.js";
export default class n extends t {
  static inventory = new i();
  constructor(t) {
    super(new e(t)), (this.inventoryWidth = 195), (this.inventoryHeight = 136);
  }
  init() {
    (this.textureInventory = this.getTexture("gui/container/creative.png")),
      super.init();
  }
  drawTitle(t) {
    this.drawString(
      t,
      "Creative Inventory",
      this.x + 8,
      this.y + 6,
      4282400832,
      !1
    );
  }
  drawInventoryBackground(t) {
    this.drawSprite(
      t,
      this.textureInventory,
      0,
      0,
      this.inventoryWidth,
      this.inventoryHeight,
      this.x,
      this.y,
      this.inventoryWidth,
      this.inventoryHeight
    );
  }
  keyTyped(t, e) {
    return t === this.minecraft.settings.keyOpenInventory
      ? (this.minecraft.displayScreen(null), !0)
      : super.keyTyped(t, e);
  }
}
