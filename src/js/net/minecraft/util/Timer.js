export default class s {
  static MS_PER_SECOND = 1e3;
  static MAX_MS_PER_UPDATE = 1e3;
  static MAX_TICKS_PER_UPDATE = 100;
  constructor(s) {
    (this.ticksPerSecond = s),
      (this.lastTime = Date.now()),
      (this.timeScale = 1),
      (this.fps = 0),
      (this.passedTime = 0),
      (this.ticks = 0),
      (this.partialTicks = 0);
  }
  advanceTime() {
    let i = Date.now(),
      t = i - this.lastTime;
    (this.lastTime = i),
      (t = Math.max(0, t)),
      (t = Math.min(s.MAX_MS_PER_UPDATE, t)),
      (this.fps = s.MS_PER_SECOND / t),
      (this.passedTime +=
        (t * this.timeScale * this.ticksPerSecond) / s.MS_PER_SECOND),
      (this.ticks = parseInt(this.passedTime)),
      (this.ticks = Math.min(s.MAX_TICKS_PER_UPDATE, this.ticks)),
      (this.passedTime -= this.ticks),
      (this.partialTicks = this.passedTime);
  }
}
