export default class t {
  static TOP = new t(0, 1, 0);
  static BOTTOM = new t(0, -1, 0);
  static NORTH = new t(0, 0, -1);
  static EAST = new t(1, 0, 0);
  static SOUTH = new t(0, 0, 1);
  static WEST = new t(-1, 0, 0);
  constructor(t, s, i) {
    (this.x = t), (this.y = s), (this.z = i);
  }
  getShading() {
    return this.isXAxis() ? 0.6 : this.isYAxis() ? 1 : 0.8;
  }
  isPositive() {
    return this.x > 0 || this.y > 0 || this.z > 0;
  }
  isXAxis() {
    return 0 !== this.x;
  }
  isYAxis() {
    return 0 !== this.y;
  }
  isZAxis() {
    return 0 !== this.z;
  }
  opposite() {
    return this === t.TOP
      ? t.BOTTOM
      : this === t.BOTTOM
      ? t.TOP
      : this === t.NORTH
      ? t.SOUTH
      : this === t.SOUTH
      ? t.NORTH
      : this === t.EAST
      ? t.WEST
      : this === t.WEST
      ? t.EAST
      : null;
  }
  equals(t) {
    return this.x === t.x && this.y === t.y && this.z === t.z;
  }
  getName() {
    switch (this) {
      case t.TOP:
        return "top";
      case t.BOTTOM:
        return "bottom";
      case t.NORTH:
        return "north";
      case t.EAST:
        return "east";
      case t.SOUTH:
        return "south";
      case t.WEST:
        return "west";
      default:
        return "unknown";
    }
  }
  static values() {
    return [t.TOP, t.BOTTOM, t.NORTH, t.EAST, t.SOUTH, t.WEST];
  }
}
