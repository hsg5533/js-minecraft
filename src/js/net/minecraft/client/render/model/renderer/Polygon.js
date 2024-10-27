import t from "./Vertex.js";
export default class e {
  constructor(e, i, o, r, s, n, c) {
    (this.vertices = e),
      (this.vertexCount = e.length),
      (i /= n),
      (o /= c),
      (r /= n),
      (s /= c),
      (o = 1 - o),
      (s = 1 - s),
      (e[0] = t.create(e[0].position).withUV(r, o)),
      (e[1] = t.create(e[1].position).withUV(i, o)),
      (e[2] = t.create(e[2].position).withUV(i, s)),
      (e[3] = t.create(e[3].position).withUV(r, s));
  }
  render(t) {
    for (let e = 3; e >= 0; e--) {
      let i = this.vertices[e];
      t.addVertexWithUV(i.position.x, i.position.y, i.position.z, i.u, i.v);
    }
  }
}
