import * as t from "../../../../../../libraries/three.module.js";
export default class e {
  constructor() {
    (this.material = new t.MeshBasicMaterial({
      side: t.FrontSide,
      transparent: !0,
      depthTest: !0,
      vertexColors: !0,
    })),
      (this.red = 0),
      (this.green = 0),
      (this.blue = 0),
      (this.alpha = 0);
  }
  bindTexture(t) {
    this.material.map = t;
  }
  startDrawing() {
    (this.addedVertices = 0),
      (this.vertices = []),
      (this.uv = []),
      (this.colors = []);
  }
  setColorRGB(t, e, s) {
    (this.red = t), (this.green = e), (this.blue = s);
  }
  setColor(t, e, s, i = 1) {
    this.setColorRGB(t, e, s), this.setAlpha(i);
  }
  multiplyColor(t, e, s, i = 1) {
    (this.red *= t), (this.green *= e), (this.blue *= s), (this.alpha *= i);
  }
  setAlpha(t) {
    this.alpha = t;
  }
  addVertex(t, e, s) {
    this.addedVertices++,
      this.vertices.push(t),
      this.vertices.push(e),
      this.vertices.push(s),
      this.colors.push(this.red),
      this.colors.push(this.green),
      this.colors.push(this.blue),
      this.colors.push(this.alpha);
  }
  addVertexWithUV(t, e, s, i, r) {
    this.addVertex(t, e, s), this.uv.push(i), this.uv.push(r);
  }
  transformBrightness(t) {
    for (let e = 0; e < this.colors.length / 4; e++)
      (this.colors[4 * e + 0] *= t),
        (this.colors[4 * e + 1] *= t),
        (this.colors[4 * e + 2] *= t);
  }
  draw(e) {
    let s = new t.BufferGeometry();
    s.setAttribute(
      "position",
      new t.BufferAttribute(new Float32Array(this.vertices), 3)
    ),
      s.setAttribute(
        "color",
        new t.BufferAttribute(new Float32Array(this.colors), 4)
      ),
      this.uv.length > 0 &&
        s.setAttribute(
          "uv",
          new t.BufferAttribute(new Float32Array(this.uv), 2)
        );
    let i = [];
    for (let r = 0; r < this.addedVertices / 4; r++)
      i.push(4 * r + 0),
        i.push(4 * r + 2),
        i.push(4 * r + 1),
        i.push(4 * r + 0),
        i.push(4 * r + 3),
        i.push(4 * r + 2);
    s.setIndex(new t.BufferAttribute(new Uint32Array(i), 1));
    let h = new t.Mesh(s, this.material);
    return (e.matrixAutoUpdate = !1), e.add(h), h;
  }
}
