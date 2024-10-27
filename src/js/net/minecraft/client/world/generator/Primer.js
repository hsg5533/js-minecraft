export default class t {
  constructor(t) {
    this.chunk = t;
  }
  get(t, s, e) {
    return this.chunk.getBlockAt(t, s, e);
  }
  set(t, s, e, c) {
    this.chunk.setBlockAt(t, s, e, c);
  }
  setByIndex(t, s) {
    this.set((t >> 12) & 15, (t >> 8) & 15, 15 & t, s);
  }
}
