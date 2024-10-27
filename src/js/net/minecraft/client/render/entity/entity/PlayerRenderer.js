import e from "../../model/model/ModelPlayer.js";
import r from "../EntityRenderer.js";
import t from "../../../world/block/Block.js";
import * as i from "../../../../../../../../libraries/three.module.js";
export default class s extends r {
  constructor(r) {
    super(new e()),
      (this.worldRenderer = r),
      (this.textureCharacter = r.minecraft.getThreeTexture("char.png")),
      (this.textureCharacter.magFilter = i.NearestFilter),
      (this.textureCharacter.minFilter = i.NearestFilter),
      (this.handModel = null),
      (this.firstPersonGroup = new i.Object3D()),
      this.worldRenderer.overlay.add(this.firstPersonGroup);
  }
  rebuild(e) {
    let r = e === this.worldRenderer.minecraft.player,
      s = 0 === this.worldRenderer.minecraft.settings.thirdPersonView,
      n =
        s && r
          ? this.worldRenderer.itemToRender
          : e.inventory.getItemInSelectedSlot(),
      o = 0 !== n;
    if (s && o && r) {
      super.rebuild(e), this.firstPersonGroup.clear();
      let l = new i.Object3D();
      this.firstPersonGroup.add(l);
      let d = t.getById(n);
      this.worldRenderer.blockRenderer.renderBlockInFirstPerson(
        l,
        d,
        e.getEntityBrightness()
      );
      let h = l.children[0];
      (h.material = h.material.clone()), (h.material.depthTest = !1);
    } else {
      if (
        (this.tessellator.bindTexture(this.textureCharacter),
        super.rebuild(e),
        o)
      ) {
        let a = t.getById(n),
          m = this.model.rightArm.bone;
        this.worldRenderer.blockRenderer.renderBlockInHandThirdPerson(
          m,
          a,
          e.getEntityBrightness()
        );
      }
      this.firstPersonGroup.clear(),
        (this.handModel = this.model.rightArm.clone()),
        this.firstPersonGroup.add(this.handModel.bone);
      let c = this.handModel.bone.children[0];
      (c.material = c.material.clone()), (c.material.depthTest = !1);
    }
  }
  render(e, r) {
    let t = e.swingProgress - e.prevSwingProgress;
    t < 0 && t++,
      (this.model.swingProgress = e.prevSwingProgress + t * r),
      (this.model.hasItemInHand = 0 !== e.inventory.getItemInSelectedSlot()),
      (this.model.isSneaking = e.isSneaking()),
      e !== this.worldRenderer.minecraft.player &&
        (this.firstPersonGroup.visible = !1),
      super.render(e, r);
  }
  updateFirstPerson(e) {
    this.prepareModel(e), (this.firstPersonGroup.visible = !0);
  }
  renderRightHand(e, r) {
    this.updateFirstPerson(e),
      (this.model.swingProgress = 0),
      (this.model.hasItemInHand = !1),
      (this.model.isSneaking = !1),
      this.model.setRotationAngles(e, 0, 0, 0, 0, 0, 0),
      this.handModel.copyTransformOf(this.model.rightArm),
      this.handModel.render();
  }
  fillMeta(e, r) {
    super.fillMeta(e, r);
    let t = 0 === this.worldRenderer.minecraft.settings.thirdPersonView;
    (r.firstPerson = t),
      (r.itemInHand = t
        ? this.worldRenderer.itemToRender
        : e.inventory.getItemInSelectedSlot());
  }
}
