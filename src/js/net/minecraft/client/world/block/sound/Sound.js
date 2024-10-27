export default class t {
  constructor(t, e) {
    (this.name = t), (this.pitch = e);
  }
  getBreakSound() {
    return "step." + this.name;
  }
  getStepSound() {
    return "step." + this.name;
  }
  getPitch() {
    return this.pitch;
  }
}
