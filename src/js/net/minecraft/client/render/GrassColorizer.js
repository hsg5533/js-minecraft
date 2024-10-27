export default class t {
  constructor(t) {
    (this.texture = t.resources["misc/grasscolor.png"]),
      (this.bitMap = this.createBitMap(this.texture));
  }
  getColor(t, e) {
    let i =
      (Math.floor((1 - t) * 255) +
        Math.floor((1 - (e *= t)) * 255) * this.texture.width) *
      4;
    if (i >= this.bitMap.length) return -65281;
    let h = this.bitMap[i],
      r;
    return (h << 16) | (this.bitMap[i + 1] << 8) | this.bitMap[i + 2];
  }
  createBitMap(t) {
    let e = document.createElement("canvas");
    return (
      (e.width = t.width),
      (e.height = t.height),
      e.getContext("2d").drawImage(t, 0, 0, t.width, t.height),
      e.getContext("2d").getImageData(0, 0, t.width, t.height).data
    );
  }
}
