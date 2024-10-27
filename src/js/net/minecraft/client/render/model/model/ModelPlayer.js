import t from "../renderer/ModelRenderer.js";
import e from "../../../../util/MathHelper.js";
import i from "../ModelBase.js";
export default class r extends i {
  constructor() {
    super(),
      (this.swingProgress = 0),
      (this.hasItemInHand = !1),
      (this.isSneaking = !1);
    let e = 64,
      i = 32;
    (this.head = new t("head", e, i)
      .setTextureOffset(0, 0)
      .addBox(-4, -8, -4, 8, 8, 8)),
      (this.body = new t("body", e, i)
        .setTextureOffset(16, 16)
        .addBox(-4, 0, -2, 8, 12, 4)),
      (this.leftArm = new t("left_arm", e, i)
        .setTextureOffset(40, 16)
        .setRotationPoint(-5, 2, 0)
        .addBox(-1, -2, -2, 4, 12, 4)),
      (this.rightArm = new t("right_arm", e, i)
        .setTextureOffset(40, 16)
        .setRotationPoint(-3, 2, -2)
        .addBox(-3, -2, -2, 4, 12, 4)),
      (this.rightLeg = new t("right_leg", e, i)
        .setTextureOffset(0, 16)
        .setRotationPoint(-2, 12, 0)
        .addBox(-2, 0, -2, 4, 12, 4)),
      (this.leftLeg = new t("left_leg", e, i)
        .setTextureOffset(0, 16)
        .setRotationPoint(2, 12, 0)
        .addBox(-2, 0, -2, 4, 12, 4));
  }
  rebuild(t, e) {
    super.rebuild(t, e),
      this.head.rebuild(t, e),
      this.body.rebuild(t, e),
      this.leftArm.rebuild(t, e),
      this.rightArm.rebuild(t, e),
      this.leftLeg.rebuild(t, e),
      this.rightLeg.rebuild(t, e);
  }
  render(t, e, i, r, s, o, h) {
    this.setRotationAngles(t, e, i, r, s, o, h),
      this.head.render(),
      this.body.render(),
      this.rightArm.render(),
      this.leftArm.render(),
      this.rightLeg.render(),
      this.leftLeg.render(),
      super.render(t, e, i, r, s, o, h);
  }
  setRotationAngles(t, i, r, s, o, h, n) {
    if (
      ((this.head.rotateAngleY = e.toRadians(o)),
      (this.head.rotateAngleX = e.toRadians(h)),
      (this.rightArm.rotateAngleX =
        2 * Math.cos(0.6662 * i + Math.PI) * r * 0.5),
      (this.leftArm.rotateAngleX = 2 * Math.cos(0.6662 * i) * r * 0.5),
      (this.rightArm.rotateAngleZ = 0),
      (this.leftArm.rotateAngleZ = 0),
      (this.rightLeg.rotateAngleX = 1.4 * Math.cos(0.6662 * i) * r),
      (this.leftLeg.rotateAngleX = 1.4 * Math.cos(0.6662 * i + Math.PI) * r),
      (this.rightLeg.rotateAngleY = 0),
      (this.leftLeg.rotateAngleY = 0),
      (this.rightArm.rotateAngleY = 0),
      (this.rightArm.rotateAngleZ = 0),
      (this.leftArm.rotateAngleY = 0),
      this.hasItemInHand &&
        (this.rightArm.rotateAngleX =
          0.5 * this.rightArm.rotateAngleX - Math.PI / 10),
      this.swingProgress > -9990)
    ) {
      let g = this.swingProgress;
      (this.body.rotateAngleY = 0.2 * Math.sin(Math.sqrt(g) * Math.PI * 2)),
        (this.rightArm.rotationPointZ = 5 * Math.sin(this.body.rotateAngleY)),
        (this.rightArm.rotationPointX = -(
          5 * Math.cos(this.body.rotateAngleY)
        )),
        (this.leftArm.rotationPointZ = -(5 * Math.sin(this.body.rotateAngleY))),
        (this.leftArm.rotationPointX = 5 * Math.cos(this.body.rotateAngleY)),
        (this.rightArm.rotateAngleY += this.body.rotateAngleY),
        (this.leftArm.rotateAngleY += this.body.rotateAngleY),
        (this.leftArm.rotateAngleX += this.body.rotateAngleY),
        (g = 1 - g),
        (g *= g),
        (g *= g);
      let $ = Math.sin((g = 1 - g) * Math.PI),
        a = -(0.75 * (Math.sin(g * Math.PI) * (this.head.rotateAngleX - 0.7)));
      (this.rightArm.rotateAngleX = this.rightArm.rotateAngleX - (1.2 * $ + a)),
        (this.rightArm.rotateAngleY += 2 * this.body.rotateAngleY),
        (this.rightArm.rotateAngleZ += -0.4 * Math.sin(g * Math.PI));
    }
    this.isSneaking
      ? ((this.body.rotateAngleX = 0.5),
        (this.rightArm.rotateAngleX += 0.4),
        (this.leftArm.rotateAngleX += 0.4),
        (this.rightLeg.rotationPointZ = 4),
        (this.leftLeg.rotationPointZ = 4),
        (this.rightLeg.rotationPointY = 9),
        (this.leftLeg.rotationPointY = 9),
        (this.head.rotationPointY = 1),
        t.translateY(-0.2))
      : ((this.body.rotateAngleX = 0),
        (this.rightLeg.rotationPointZ = 0.1),
        (this.leftLeg.rotationPointZ = 0.1),
        (this.rightLeg.rotationPointY = 12),
        (this.leftLeg.rotationPointY = 12),
        (this.head.rotationPointY = 0)),
      (this.rightArm.rotateAngleZ += 0.05 * Math.cos(0.09 * s) + 0.05),
      (this.leftArm.rotateAngleZ -= 0.05 * Math.cos(0.09 * s) + 0.05),
      (this.rightArm.rotateAngleX += 0.05 * Math.sin(0.067 * s)),
      (this.leftArm.rotateAngleX -= 0.05 * Math.sin(0.067 * s));
  }
}
