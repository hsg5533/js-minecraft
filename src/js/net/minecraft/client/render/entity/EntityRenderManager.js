import r from "./entity/PlayerRenderer.js";
import e from "../../entity/PlayerEntity.js";
import t from "../../entity/PlayerEntityMultiplayer.js";
export default class n {
  constructor(n) {
    (this.worldRenderer = n),
      (this.renderers = []),
      this.push(e, r),
      this.push(t, r);
  }
  push(r, e) {
    this.renderers[r.name] = e;
  }
  createEntityRendererByEntity(r) {
    return r.constructor.name in this.renderers
      ? new this.renderers[r.constructor.name].prototype.constructor(
          this.worldRenderer
        )
      : null;
  }
}
