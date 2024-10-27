let REVISION = "141dev",
  MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  CullFaceNone = 0,
  CullFaceBack = 1,
  CullFaceFront = 2,
  CullFaceFrontBack = 3,
  BasicShadowMap = 0,
  PCFShadowMap = 1,
  PCFSoftShadowMap = 2,
  VSMShadowMap = 3,
  FrontSide = 0,
  BackSide = 1,
  DoubleSide = 2,
  FlatShading = 1,
  SmoothShading = 2,
  NoBlending = 0,
  NormalBlending = 1,
  AdditiveBlending = 2,
  SubtractiveBlending = 3,
  MultiplyBlending = 4,
  CustomBlending = 5,
  AddEquation = 100,
  SubtractEquation = 101,
  ReverseSubtractEquation = 102,
  MinEquation = 103,
  MaxEquation = 104,
  ZeroFactor = 200,
  OneFactor = 201,
  SrcColorFactor = 202,
  OneMinusSrcColorFactor = 203,
  SrcAlphaFactor = 204,
  OneMinusSrcAlphaFactor = 205,
  DstAlphaFactor = 206,
  OneMinusDstAlphaFactor = 207,
  DstColorFactor = 208,
  OneMinusDstColorFactor = 209,
  SrcAlphaSaturateFactor = 210,
  NeverDepth = 0,
  AlwaysDepth = 1,
  LessDepth = 2,
  LessEqualDepth = 3,
  EqualDepth = 4,
  GreaterEqualDepth = 5,
  GreaterDepth = 6,
  NotEqualDepth = 7,
  MultiplyOperation = 0,
  MixOperation = 1,
  AddOperation = 2,
  NoToneMapping = 0,
  LinearToneMapping = 1,
  ReinhardToneMapping = 2,
  CineonToneMapping = 3,
  ACESFilmicToneMapping = 4,
  CustomToneMapping = 5,
  UVMapping = 300,
  CubeReflectionMapping = 301,
  CubeRefractionMapping = 302,
  EquirectangularReflectionMapping = 303,
  EquirectangularRefractionMapping = 304,
  CubeUVReflectionMapping = 306,
  RepeatWrapping = 1e3,
  ClampToEdgeWrapping = 1001,
  MirroredRepeatWrapping = 1002,
  NearestFilter = 1003,
  NearestMipmapNearestFilter = 1004,
  NearestMipMapNearestFilter = 1004,
  NearestMipmapLinearFilter = 1005,
  NearestMipMapLinearFilter = 1005,
  LinearFilter = 1006,
  LinearMipmapNearestFilter = 1007,
  LinearMipMapNearestFilter = 1007,
  LinearMipmapLinearFilter = 1008,
  LinearMipMapLinearFilter = 1008,
  UnsignedByteType = 1009,
  ByteType = 1010,
  ShortType = 1011,
  UnsignedShortType = 1012,
  IntType = 1013,
  UnsignedIntType = 1014,
  FloatType = 1015,
  HalfFloatType = 1016,
  UnsignedShort4444Type = 1017,
  UnsignedShort5551Type = 1018,
  UnsignedInt248Type = 1020,
  AlphaFormat = 1021,
  RGBFormat = 1022,
  RGBAFormat = 1023,
  LuminanceFormat = 1024,
  LuminanceAlphaFormat = 1025,
  DepthFormat = 1026,
  DepthStencilFormat = 1027,
  RedFormat = 1028,
  RedIntegerFormat = 1029,
  RGFormat = 1030,
  RGIntegerFormat = 1031,
  RGBAIntegerFormat = 1033,
  RGB_S3TC_DXT1_Format = 33776,
  RGBA_S3TC_DXT1_Format = 33777,
  RGBA_S3TC_DXT3_Format = 33778,
  RGBA_S3TC_DXT5_Format = 33779,
  RGB_PVRTC_4BPPV1_Format = 35840,
  RGB_PVRTC_2BPPV1_Format = 35841,
  RGBA_PVRTC_4BPPV1_Format = 35842,
  RGBA_PVRTC_2BPPV1_Format = 35843,
  RGB_ETC1_Format = 36196,
  RGB_ETC2_Format = 37492,
  RGBA_ETC2_EAC_Format = 37496,
  RGBA_ASTC_4x4_Format = 37808,
  RGBA_ASTC_5x4_Format = 37809,
  RGBA_ASTC_5x5_Format = 37810,
  RGBA_ASTC_6x5_Format = 37811,
  RGBA_ASTC_6x6_Format = 37812,
  RGBA_ASTC_8x5_Format = 37813,
  RGBA_ASTC_8x6_Format = 37814,
  RGBA_ASTC_8x8_Format = 37815,
  RGBA_ASTC_10x5_Format = 37816,
  RGBA_ASTC_10x6_Format = 37817,
  RGBA_ASTC_10x8_Format = 37818,
  RGBA_ASTC_10x10_Format = 37819,
  RGBA_ASTC_12x10_Format = 37820,
  RGBA_ASTC_12x12_Format = 37821,
  RGBA_BPTC_Format = 36492,
  LoopOnce = 2200,
  LoopRepeat = 2201,
  LoopPingPong = 2202,
  InterpolateDiscrete = 2300,
  InterpolateLinear = 2301,
  InterpolateSmooth = 2302,
  ZeroCurvatureEnding = 2400,
  ZeroSlopeEnding = 2401,
  WrapAroundEnding = 2402,
  NormalAnimationBlendMode = 2500,
  AdditiveAnimationBlendMode = 2501,
  TrianglesDrawMode = 0,
  TriangleStripDrawMode = 1,
  TriangleFanDrawMode = 2,
  LinearEncoding = 3e3,
  sRGBEncoding = 3001,
  BasicDepthPacking = 3200,
  RGBADepthPacking = 3201,
  TangentSpaceNormalMap = 0,
  ObjectSpaceNormalMap = 1,
  NoColorSpace = "",
  SRGBColorSpace = "srgb",
  LinearSRGBColorSpace = "srgb-linear",
  ZeroStencilOp = 0,
  KeepStencilOp = 7680,
  ReplaceStencilOp = 7681,
  IncrementStencilOp = 7682,
  DecrementStencilOp = 7683,
  IncrementWrapStencilOp = 34055,
  DecrementWrapStencilOp = 34056,
  InvertStencilOp = 5386,
  NeverStencilFunc = 512,
  LessStencilFunc = 513,
  EqualStencilFunc = 514,
  LessEqualStencilFunc = 515,
  GreaterStencilFunc = 516,
  NotEqualStencilFunc = 517,
  GreaterEqualStencilFunc = 518,
  AlwaysStencilFunc = 519,
  StaticDrawUsage = 35044,
  DynamicDrawUsage = 35048,
  StreamDrawUsage = 35040,
  StaticReadUsage = 35045,
  DynamicReadUsage = 35049,
  StreamReadUsage = 35041,
  StaticCopyUsage = 35046,
  DynamicCopyUsage = 35050,
  StreamCopyUsage = 35042,
  GLSL1 = "100",
  GLSL3 = "300 es",
  _SRGBAFormat = 1035;
class EventDispatcher {
  addEventListener(e, t) {
    void 0 === this._listeners && (this._listeners = {});
    let r = this._listeners;
    void 0 === r[e] && (r[e] = []), -1 === r[e].indexOf(t) && r[e].push(t);
  }
  hasEventListener(e, t) {
    if (void 0 === this._listeners) return !1;
    let r = this._listeners;
    return void 0 !== r[e] && -1 !== r[e].indexOf(t);
  }
  removeEventListener(e, t) {
    if (void 0 === this._listeners) return;
    let r = this._listeners,
      n = r[e];
    if (void 0 !== n) {
      let a = n.indexOf(t);
      -1 !== a && n.splice(a, 1);
    }
  }
  dispatchEvent(e) {
    if (void 0 === this._listeners) return;
    let t = this._listeners,
      r = t[e.type];
    if (void 0 !== r) {
      e.target = this;
      let n = r.slice(0);
      for (let a = 0, s = n.length; a < s; a++) n[a].call(this, e);
      e.target = null;
    }
  }
}
let _lut = [];
for (let i = 0; i < 256; i++) _lut[i] = (i < 16 ? "0" : "") + i.toString(16);
let _seed = 1234567,
  DEG2RAD = Math.PI / 180,
  RAD2DEG = 180 / Math.PI;
function generateUUID() {
  let e = (4294967295 * Math.random()) | 0,
    t = (4294967295 * Math.random()) | 0,
    r = (4294967295 * Math.random()) | 0,
    n = (4294967295 * Math.random()) | 0,
    a =
      _lut[255 & e] +
      _lut[(e >> 8) & 255] +
      _lut[(e >> 16) & 255] +
      _lut[(e >> 24) & 255] +
      "-" +
      _lut[255 & t] +
      _lut[(t >> 8) & 255] +
      "-" +
      _lut[((t >> 16) & 15) | 64] +
      _lut[(t >> 24) & 255] +
      "-" +
      _lut[(63 & r) | 128] +
      _lut[(r >> 8) & 255] +
      "-" +
      _lut[(r >> 16) & 255] +
      _lut[(r >> 24) & 255] +
      _lut[255 & n] +
      _lut[(n >> 8) & 255] +
      _lut[(n >> 16) & 255] +
      _lut[(n >> 24) & 255];
  return a.toLowerCase();
}
function clamp(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function euclideanModulo(e, t) {
  return ((e % t) + t) % t;
}
function mapLinear(e, t, r, n, a) {
  return n + ((e - t) * (a - n)) / (r - t);
}
function inverseLerp(e, t, r) {
  return e !== t ? (r - e) / (t - e) : 0;
}
function lerp(e, t, r) {
  return (1 - r) * e + r * t;
}
function damp(e, t, r, n) {
  return lerp(e, t, 1 - Math.exp(-r * n));
}
function pingpong(e, t = 1) {
  return t - Math.abs(euclideanModulo(e, 2 * t) - t);
}
function smoothstep(e, t, r) {
  return e <= t ? 0 : e >= r ? 1 : (e = (e - t) / (r - t)) * e * (3 - 2 * e);
}
function smootherstep(e, t, r) {
  return e <= t
    ? 0
    : e >= r
    ? 1
    : (e = (e - t) / (r - t)) * e * e * (e * (6 * e - 15) + 10);
}
function randInt(e, t) {
  return e + Math.floor(Math.random() * (t - e + 1));
}
function randFloat(e, t) {
  return e + Math.random() * (t - e);
}
function randFloatSpread(e) {
  return e * (0.5 - Math.random());
}
function seededRandom(e) {
  void 0 !== e && (_seed = e);
  let t = (_seed += 1831565813);
  return (
    (t = Math.imul(t ^ (t >>> 15), 1 | t)),
    (((t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ (t >>> 14)) >>> 0) /
      4294967296
  );
}
function degToRad(e) {
  return e * DEG2RAD;
}
function radToDeg(e) {
  return e * RAD2DEG;
}
function isPowerOfTwo(e) {
  return (e & (e - 1)) == 0 && 0 !== e;
}
function ceilPowerOfTwo(e) {
  return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
}
function floorPowerOfTwo(e) {
  return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
}
function setQuaternionFromProperEuler(e, t, r, n, a) {
  let s = Math.cos,
    o = Math.sin,
    l = s(r / 2),
    c = o(r / 2),
    u = s((t + n) / 2),
    h = o((t + n) / 2),
    d = s((t - n) / 2),
    p = o((t - n) / 2),
    m = s((n - t) / 2),
    f = o((n - t) / 2);
  switch (a) {
    case "XYX":
      e.set(l * h, c * d, c * p, l * u);
      break;
    case "YZY":
      e.set(c * p, l * h, c * d, l * u);
      break;
    case "ZXZ":
      e.set(c * d, c * p, l * h, l * u);
      break;
    case "XZX":
      e.set(l * h, c * f, c * m, l * u);
      break;
    case "YXY":
      e.set(c * m, l * h, c * f, l * u);
      break;
    case "ZYZ":
      e.set(c * f, c * m, l * h, l * u);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          a
      );
  }
}
function denormalize$1(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint16Array:
      return e / 65535;
    case Uint8Array:
      return e / 255;
    case Int16Array:
      return Math.max(e / 32767, -1);
    case Int8Array:
      return Math.max(e / 127, -1);
    default:
      throw Error("Invalid component type.");
  }
}
function normalize(e, t) {
  switch (t.constructor) {
    case Float32Array:
      return e;
    case Uint16Array:
      return Math.round(65535 * e);
    case Uint8Array:
      return Math.round(255 * e);
    case Int16Array:
      return Math.round(32767 * e);
    case Int8Array:
      return Math.round(127 * e);
    default:
      throw Error("Invalid component type.");
  }
}
var MathUtils = Object.freeze({
  __proto__: null,
  DEG2RAD: DEG2RAD,
  RAD2DEG: RAD2DEG,
  generateUUID: generateUUID,
  clamp: clamp,
  euclideanModulo: euclideanModulo,
  mapLinear: mapLinear,
  inverseLerp: inverseLerp,
  lerp: lerp,
  damp: damp,
  pingpong: pingpong,
  smoothstep: smoothstep,
  smootherstep: smootherstep,
  randInt: randInt,
  randFloat: randFloat,
  randFloatSpread: randFloatSpread,
  seededRandom: seededRandom,
  degToRad: degToRad,
  radToDeg: radToDeg,
  isPowerOfTwo: isPowerOfTwo,
  ceilPowerOfTwo: ceilPowerOfTwo,
  floorPowerOfTwo: floorPowerOfTwo,
  setQuaternionFromProperEuler: setQuaternionFromProperEuler,
  normalize: normalize,
  denormalize: denormalize$1,
});
class Vector2 {
  constructor(e = 0, t = 0) {
    (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    let t = this.x,
      r = this.y,
      n = e.elements;
    return (
      (this.x = n[0] * t + n[3] * r + n[6]),
      (this.y = n[1] * t + n[4] * r + n[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    let r = this.length();
    return this.divideScalar(r || 1).multiplyScalar(
      Math.max(e, Math.min(t, r))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    let e = Math.atan2(-this.y, -this.x) + Math.PI;
    return e;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    let t = this.x - e.x,
      r = this.y - e.y;
    return t * t + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, r) {
    return (
      (this.x = e.x + (t.x - e.x) * r), (this.y = e.y + (t.y - e.y) * r), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t, r) {
    return (
      void 0 !== r &&
        console.warn(
          "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      this
    );
  }
  rotateAround(e, t) {
    let r = Math.cos(t),
      n = Math.sin(t),
      a = this.x - e.x,
      s = this.y - e.y;
    return (this.x = a * r - s * n + e.x), (this.y = a * n + s * r + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
Vector2.prototype.isVector2 = !0;
class Matrix3 {
  constructor() {
    (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, r, n, a, s, o, l, c) {
    let u = this.elements;
    return (
      (u[0] = e),
      (u[1] = n),
      (u[2] = o),
      (u[3] = t),
      (u[4] = a),
      (u[5] = l),
      (u[6] = r),
      (u[7] = s),
      (u[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    let t = this.elements,
      r = e.elements;
    return (
      (t[0] = r[0]),
      (t[1] = r[1]),
      (t[2] = r[2]),
      (t[3] = r[3]),
      (t[4] = r[4]),
      (t[5] = r[5]),
      (t[6] = r[6]),
      (t[7] = r[7]),
      (t[8] = r[8]),
      this
    );
  }
  extractBasis(e, t, r) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      r.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    let t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    let r = e.elements,
      n = t.elements,
      a = this.elements,
      s = r[0],
      o = r[3],
      l = r[6],
      c = r[1],
      u = r[4],
      h = r[7],
      d = r[2],
      p = r[5],
      m = r[8],
      f = n[0],
      g = n[3],
      $ = n[6],
      v = n[1],
      x = n[4],
      y = n[7],
      b = n[2],
      _ = n[5],
      S = n[8];
    return (
      (a[0] = s * f + o * v + l * b),
      (a[3] = s * g + o * x + l * _),
      (a[6] = s * $ + o * y + l * S),
      (a[1] = c * f + u * v + h * b),
      (a[4] = c * g + u * x + h * _),
      (a[7] = c * $ + u * y + h * S),
      (a[2] = d * f + p * v + m * b),
      (a[5] = d * g + p * x + m * _),
      (a[8] = d * $ + p * y + m * S),
      this
    );
  }
  multiplyScalar(e) {
    let t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    let e = this.elements,
      t = e[0],
      r = e[1],
      n = e[2],
      a = e[3],
      s = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * s * u - t * o * c - r * a * u + r * o * l + n * a * c - n * s * l
    );
  }
  invert() {
    let e = this.elements,
      t = e[0],
      r = e[1],
      n = e[2],
      a = e[3],
      s = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      h = u * s - o * c,
      d = o * l - u * a,
      p = c * a - s * l,
      m = t * h + r * d + n * p;
    if (0 === m) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let f = 1 / m;
    return (
      (e[0] = h * f),
      (e[1] = (n * c - u * r) * f),
      (e[2] = (o * r - n * s) * f),
      (e[3] = d * f),
      (e[4] = (u * t - n * l) * f),
      (e[5] = (n * a - o * t) * f),
      (e[6] = p * f),
      (e[7] = (r * l - c * t) * f),
      (e[8] = (s * t - r * a) * f),
      this
    );
  }
  transpose() {
    let e,
      t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    let t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, r, n, a, s, o) {
    let l = Math.cos(a),
      c = Math.sin(a);
    return (
      this.set(
        r * l,
        r * c,
        -r * (l * s + c * o) + s + e,
        -n * c,
        n * l,
        -n * (-c * s + l * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    let r = this.elements;
    return (
      (r[0] *= e),
      (r[3] *= e),
      (r[6] *= e),
      (r[1] *= t),
      (r[4] *= t),
      (r[7] *= t),
      this
    );
  }
  rotate(e) {
    let t = Math.cos(e),
      r = Math.sin(e),
      n = this.elements,
      a = n[0],
      s = n[3],
      o = n[6],
      l = n[1],
      c = n[4],
      u = n[7];
    return (
      (n[0] = t * a + r * l),
      (n[3] = t * s + r * c),
      (n[6] = t * o + r * u),
      (n[1] = -r * a + t * l),
      (n[4] = -r * s + t * c),
      (n[7] = -r * o + t * u),
      this
    );
  }
  translate(e, t) {
    let r = this.elements;
    return (
      (r[0] += e * r[2]),
      (r[3] += e * r[5]),
      (r[6] += e * r[8]),
      (r[1] += t * r[2]),
      (r[4] += t * r[5]),
      (r[7] += t * r[8]),
      this
    );
  }
  equals(e) {
    let t = this.elements,
      r = e.elements;
    for (let n = 0; n < 9; n++) if (t[n] !== r[n]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let r = 0; r < 9; r++) this.elements[r] = e[r + t];
    return this;
  }
  toArray(e = [], t = 0) {
    let r = this.elements;
    return (
      (e[t] = r[0]),
      (e[t + 1] = r[1]),
      (e[t + 2] = r[2]),
      (e[t + 3] = r[3]),
      (e[t + 4] = r[4]),
      (e[t + 5] = r[5]),
      (e[t + 6] = r[6]),
      (e[t + 7] = r[7]),
      (e[t + 8] = r[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function arrayNeedsUint32(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] > 65535) return !0;
  return !1;
}
Matrix3.prototype.isMatrix3 = !0;
let TYPED_ARRAYS = {
  Int8Array: Int8Array,
  Uint8Array: Uint8Array,
  Uint8ClampedArray: Uint8ClampedArray,
  Int16Array: Int16Array,
  Uint16Array: Uint16Array,
  Int32Array: Int32Array,
  Uint32Array: Uint32Array,
  Float32Array: Float32Array,
  Float64Array: Float64Array,
};
function getTypedArray(e, t) {
  return new TYPED_ARRAYS[e](t);
}
function createElementNS(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function SRGBToLinear(e) {
  return e < 0.04045
    ? 0.0773993808 * e
    : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
}
function LinearToSRGB(e) {
  return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
let FN = {
    [SRGBColorSpace]: { [LinearSRGBColorSpace]: SRGBToLinear },
    [LinearSRGBColorSpace]: { [SRGBColorSpace]: LinearToSRGB },
  },
  ColorManagement = {
    legacyMode: !0,
    get workingColorSpace() {
      return LinearSRGBColorSpace;
    },
    set workingColorSpace(colorSpace) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (e, t, r) {
      if (this.legacyMode || t === r || !t || !r) return e;
      if (FN[t] && void 0 !== FN[t][r]) {
        let n = FN[t][r];
        return (e.r = n(e.r)), (e.g = n(e.g)), (e.b = n(e.b)), e;
      }
      throw Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (e, t) {
      return this.convert(e, this.workingColorSpace, t);
    },
    toWorkingColorSpace: function (e, t) {
      return this.convert(e, t, this.workingColorSpace);
    },
  },
  _colorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  _rgb = { r: 0, g: 0, b: 0 },
  _hslA = { h: 0, s: 0, l: 0 },
  _hslB = { h: 0, s: 0, l: 0 };
function hue2rgb(e, t, r) {
  return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
    ? e + (t - e) * 6 * r
    : r < 0.5
    ? t
    : r < 2 / 3
    ? e + (t - e) * 6 * (2 / 3 - r)
    : e;
}
function toComponents(e, t) {
  return (t.r = e.r), (t.g = e.g), (t.b = e.b), t;
}
class Color {
  constructor(e, t, r) {
    if (void 0 === t && void 0 === r) return this.set(e);
    return this.setRGB(e, t, r);
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : "number" == typeof e
        ? this.setHex(e)
        : "string" == typeof e && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = SRGBColorSpace) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (255 & e) / 255),
      ColorManagement.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, r, n = LinearSRGBColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = r),
      ColorManagement.toWorkingColorSpace(this, n),
      this
    );
  }
  setHSL(e, t, r, n = LinearSRGBColorSpace) {
    if (
      ((e = euclideanModulo(e, 1)),
      (t = clamp(t, 0, 1)),
      (r = clamp(r, 0, 1)),
      0 === t)
    )
      this.r = this.g = this.b = r;
    else {
      let a = r <= 0.5 ? r * (1 + t) : r + t - r * t,
        s = 2 * r - a;
      (this.r = hue2rgb(s, a, e + 1 / 3)),
        (this.g = hue2rgb(s, a, e)),
        (this.b = hue2rgb(s, a, e - 1 / 3));
    }
    return ColorManagement.toWorkingColorSpace(this, n), this;
  }
  setStyle(e, t = SRGBColorSpace) {
    function r(t) {
      void 0 !== t &&
        1 > parseFloat(t) &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let n;
    if ((n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let a,
        s = n[1],
        o = n[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (
            (a =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(a[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(a[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(a[3], 10)) / 255),
              ColorManagement.toWorkingColorSpace(this, t),
              r(a[4]),
              this
            );
          if (
            (a =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(a[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(a[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(a[3], 10)) / 100),
              ColorManagement.toWorkingColorSpace(this, t),
              r(a[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (a =
              /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          ) {
            let l = parseFloat(a[1]) / 360,
              c = parseInt(a[2], 10) / 100,
              u = parseInt(a[3], 10) / 100;
            return r(a[4]), this.setHSL(l, c, u, t);
          }
      }
    } else if ((n = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      let h = n[1],
        d = h.length;
      if (3 === d)
        return (
          (this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255),
          (this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255),
          (this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255),
          ColorManagement.toWorkingColorSpace(this, t),
          this
        );
      if (6 === d)
        return (
          (this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255),
          (this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255),
          (this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255),
          ColorManagement.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = SRGBColorSpace) {
    let r = _colorKeywords[e.toLowerCase()];
    return (
      void 0 !== r
        ? this.setHex(r, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (
      (this.r = SRGBToLinear(e.r)),
      (this.g = SRGBToLinear(e.g)),
      (this.b = SRGBToLinear(e.b)),
      this
    );
  }
  copyLinearToSRGB(e) {
    return (
      (this.r = LinearToSRGB(e.r)),
      (this.g = LinearToSRGB(e.g)),
      (this.b = LinearToSRGB(e.b)),
      this
    );
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = SRGBColorSpace) {
    return (
      ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), e),
      (clamp(255 * _rgb.r, 0, 255) << 16) ^
        (clamp(255 * _rgb.g, 0, 255) << 8) ^
        (clamp(255 * _rgb.b, 0, 255) << 0)
    );
  }
  getHexString(e = SRGBColorSpace) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = LinearSRGBColorSpace) {
    ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), t);
    let r = _rgb.r,
      n = _rgb.g,
      a = _rgb.b,
      s = Math.max(r, n, a),
      o = Math.min(r, n, a),
      l,
      c,
      u = (o + s) / 2;
    if (o === s) (l = 0), (c = 0);
    else {
      let h = s - o;
      switch (((c = u <= 0.5 ? h / (s + o) : h / (2 - s - o)), s)) {
        case r:
          l = (n - a) / h + (n < a ? 6 : 0);
          break;
        case n:
          l = (a - r) / h + 2;
          break;
        case a:
          l = (r - n) / h + 4;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = LinearSRGBColorSpace) {
    return (
      ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), t),
      (e.r = _rgb.r),
      (e.g = _rgb.g),
      (e.b = _rgb.b),
      e
    );
  }
  getStyle(e = SRGBColorSpace) {
    return (ColorManagement.fromWorkingColorSpace(toComponents(this, _rgb), e),
    e !== SRGBColorSpace)
      ? `color(${e} ${_rgb.r} ${_rgb.g} ${_rgb.b})`
      : `rgb(${(255 * _rgb.r) | 0},${(255 * _rgb.g) | 0},${
          (255 * _rgb.b) | 0
        })`;
  }
  offsetHSL(e, t, r) {
    return (
      this.getHSL(_hslA),
      (_hslA.h += e),
      (_hslA.s += t),
      (_hslA.l += r),
      this.setHSL(_hslA.h, _hslA.s, _hslA.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, r) {
    return (
      (this.r = e.r + (t.r - e.r) * r),
      (this.g = e.g + (t.g - e.g) * r),
      (this.b = e.b + (t.b - e.b) * r),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(_hslA), e.getHSL(_hslB);
    let r = lerp(_hslA.h, _hslB.h, t),
      n = lerp(_hslA.s, _hslB.s, t),
      a = lerp(_hslA.l, _hslB.l, t);
    return this.setHSL(r, n, a), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      !0 === e.normalized &&
        ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
(Color.NAMES = _colorKeywords),
  (Color.prototype.isColor = !0),
  (Color.prototype.r = 1),
  (Color.prototype.g = 1),
  (Color.prototype.b = 1);
let _canvas;
class ImageUtils {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || "undefined" == typeof HTMLCanvasElement)
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      void 0 === _canvas && (_canvas = createElementNS("canvas")),
        (_canvas.width = e.width),
        (_canvas.height = e.height);
      let r = _canvas.getContext("2d");
      e instanceof ImageData
        ? r.putImageData(e, 0, 0)
        : r.drawImage(e, 0, 0, e.width, e.height),
        (t = _canvas);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      ("undefined" != typeof HTMLImageElement &&
        e instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        e instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ) {
      let t = createElementNS("canvas");
      (t.width = e.width), (t.height = e.height);
      let r = t.getContext("2d");
      r.drawImage(e, 0, 0, e.width, e.height);
      let n = r.getImageData(0, 0, e.width, e.height),
        a = n.data;
      for (let s = 0; s < a.length; s++) a[s] = 255 * SRGBToLinear(a[s] / 255);
      return r.putImageData(n, 0, 0), t;
    }
    if (!e.data)
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
    {
      let o = e.data.slice(0);
      for (let l = 0; l < o.length; l++)
        o instanceof Uint8Array || o instanceof Uint8ClampedArray
          ? (o[l] = Math.floor(255 * SRGBToLinear(o[l] / 255)))
          : (o[l] = SRGBToLinear(o[l]));
      return { data: o, width: e.width, height: e.height };
    }
  }
}
class Source {
  constructor(e = null) {
    (this.uuid = generateUUID()), (this.data = e), (this.version = 0);
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  toJSON(e) {
    let t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.images[this.uuid]) return e.images[this.uuid];
    let r = { uuid: this.uuid, url: "" },
      n = this.data;
    if (null !== n) {
      let a;
      if (Array.isArray(n)) {
        a = [];
        for (let s = 0, o = n.length; s < o; s++)
          n[s].isDataTexture
            ? a.push(serializeImage(n[s].image))
            : a.push(serializeImage(n[s]));
      } else a = serializeImage(n);
      r.url = a;
    }
    return t || (e.images[this.uuid] = r), r;
  }
}
function serializeImage(e) {
  return ("undefined" != typeof HTMLImageElement &&
    e instanceof HTMLImageElement) ||
    ("undefined" != typeof HTMLCanvasElement &&
      e instanceof HTMLCanvasElement) ||
    ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ? ImageUtils.getDataURL(e)
    : e.data
    ? {
        data: Array.prototype.slice.call(e.data),
        width: e.width,
        height: e.height,
        type: e.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
Source.prototype.isSource = !0;
let textureId = 0;
class Texture extends EventDispatcher {
  constructor(
    e = Texture.DEFAULT_IMAGE,
    t = Texture.DEFAULT_MAPPING,
    r = ClampToEdgeWrapping,
    n = ClampToEdgeWrapping,
    a = LinearFilter,
    s = LinearMipmapLinearFilter,
    o = RGBAFormat,
    l = UnsignedByteType,
    c = 1,
    u = LinearEncoding
  ) {
    super(),
      Object.defineProperty(this, "id", { value: textureId++ }),
      (this.uuid = generateUUID()),
      (this.name = ""),
      (this.source = new Source(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = r),
      (this.wrapT = n),
      (this.magFilter = a),
      (this.minFilter = s),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Vector2(0, 0)),
      (this.repeat = new Vector2(1, 1)),
      (this.center = new Vector2(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Matrix3()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    let t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
    let r = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData),
      t || (e.textures[this.uuid] = r),
      r
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== UVMapping) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case RepeatWrapping:
          e.x = e.x - Math.floor(e.x);
          break;
        case ClampToEdgeWrapping:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          1 === Math.abs(Math.floor(e.x) % 2)
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case RepeatWrapping:
          e.y = e.y - Math.floor(e.y);
          break;
        case ClampToEdgeWrapping:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          1 === Math.abs(Math.floor(e.y) % 2)
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    !0 === e && (this.version++, (this.source.needsUpdate = !0));
  }
}
(Texture.DEFAULT_IMAGE = null),
  (Texture.DEFAULT_MAPPING = UVMapping),
  (Texture.prototype.isTexture = !0);
class Vector4 {
  constructor(e = 0, t = 0, r = 0, n = 1) {
    (this.x = e), (this.y = t), (this.z = r), (this.w = n);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, r, n) {
    return (this.x = e), (this.y = t), (this.z = r), (this.w = n), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = void 0 !== e.w ? e.w : 1),
      this
    );
  }
  add(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x),
        (this.y += e.y),
        (this.z += e.z),
        (this.w += e.w),
        this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x),
        (this.y -= e.y),
        (this.z -= e.z),
        (this.w -= e.w),
        this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    let t = this.x,
      r = this.y,
      n = this.z,
      a = this.w,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * r + s[8] * n + s[12] * a),
      (this.y = s[1] * t + s[5] * r + s[9] * n + s[13] * a),
      (this.z = s[2] * t + s[6] * r + s[10] * n + s[14] * a),
      (this.w = s[3] * t + s[7] * r + s[11] * n + s[15] * a),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    let t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t,
      r,
      n,
      a,
      s = e.elements,
      o = s[0],
      l = s[4],
      c = s[8],
      u = s[1],
      h = s[5],
      d = s[9],
      p = s[2],
      m = s[6],
      f = s[10];
    if (
      0.01 > Math.abs(l - u) &&
      0.01 > Math.abs(c - p) &&
      0.01 > Math.abs(d - m)
    ) {
      if (
        0.1 > Math.abs(l + u) &&
        0.1 > Math.abs(c + p) &&
        0.1 > Math.abs(d + m) &&
        0.1 > Math.abs(o + h + f - 3)
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      let g = (o + 1) / 2,
        $ = (h + 1) / 2,
        v = (f + 1) / 2,
        x = (l + u) / 4,
        y = (c + p) / 4,
        b = (d + m) / 4;
      return (
        g > $ && g > v
          ? g < 0.01
            ? ((r = 0), (n = 0.707106781), (a = 0.707106781))
            : ((n = x / (r = Math.sqrt(g))), (a = y / r))
          : $ > v
          ? $ < 0.01
            ? ((r = 0.707106781), (n = 0), (a = 0.707106781))
            : ((r = x / (n = Math.sqrt($))), (a = b / n))
          : v < 0.01
          ? ((r = 0.707106781), (n = 0.707106781), (a = 0))
          : ((r = y / (a = Math.sqrt(v))), (n = b / a)),
        this.set(r, n, a, t),
        this
      );
    }
    let _ = Math.sqrt(
      (m - d) * (m - d) + (c - p) * (c - p) + (u - l) * (u - l)
    );
    return (
      0.001 > Math.abs(_) && (_ = 1),
      (this.x = (m - d) / _),
      (this.y = (c - p) / _),
      (this.z = (u - l) / _),
      (this.w = Math.acos((o + h + f - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    let r = this.length();
    return this.divideScalar(r || 1).multiplyScalar(
      Math.max(e, Math.min(t, r))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, r) {
    return (
      (this.x = e.x + (t.x - e.x) * r),
      (this.y = e.y + (t.y - e.y) * r),
      (this.z = e.z + (t.z - e.z) * r),
      (this.w = e.w + (t.w - e.w) * r),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t, r) {
    return (
      void 0 !== r &&
        console.warn(
          "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
Vector4.prototype.isVector4 = !0;
class WebGLRenderTarget extends EventDispatcher {
  constructor(e, t, r = {}) {
    super(),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Vector4(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Vector4(0, 0, e, t));
    let n = { width: e, height: t, depth: 1 };
    (this.texture = new Texture(
      n,
      r.mapping,
      r.wrapS,
      r.wrapT,
      r.magFilter,
      r.minFilter,
      r.format,
      r.type,
      r.anisotropy,
      r.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        void 0 !== r.generateMipmaps && r.generateMipmaps),
      (this.texture.internalFormat =
        void 0 !== r.internalFormat ? r.internalFormat : null),
      (this.texture.minFilter =
        void 0 !== r.minFilter ? r.minFilter : LinearFilter),
      (this.depthBuffer = void 0 === r.depthBuffer || r.depthBuffer),
      (this.stencilBuffer = void 0 !== r.stencilBuffer && r.stencilBuffer),
      (this.depthTexture = void 0 !== r.depthTexture ? r.depthTexture : null),
      (this.samples = void 0 !== r.samples ? r.samples : 0);
  }
  setSize(e, t, r = 1) {
    (this.width !== e || this.height !== t || this.depth !== r) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = r),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = r),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    let t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Source(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
WebGLRenderTarget.prototype.isWebGLRenderTarget = !0;
class DataArrayTexture extends Texture {
  constructor(e = null, t = 1, r = 1, n = 1) {
    super(null),
      (this.image = { data: e, width: t, height: r, depth: n }),
      (this.magFilter = NearestFilter),
      (this.minFilter = NearestFilter),
      (this.wrapR = ClampToEdgeWrapping),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
DataArrayTexture.prototype.isDataArrayTexture = !0;
class WebGLArrayRenderTarget extends WebGLRenderTarget {
  constructor(e, t, r) {
    super(e, t),
      (this.depth = r),
      (this.texture = new DataArrayTexture(null, e, t, r)),
      (this.texture.isRenderTargetTexture = !0);
  }
}
WebGLArrayRenderTarget.prototype.isWebGLArrayRenderTarget = !0;
class Data3DTexture extends Texture {
  constructor(e = null, t = 1, r = 1, n = 1) {
    super(null),
      (this.image = { data: e, width: t, height: r, depth: n }),
      (this.magFilter = NearestFilter),
      (this.minFilter = NearestFilter),
      (this.wrapR = ClampToEdgeWrapping),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
Data3DTexture.prototype.isData3DTexture = !0;
class WebGL3DRenderTarget extends WebGLRenderTarget {
  constructor(e, t, r) {
    super(e, t),
      (this.depth = r),
      (this.texture = new Data3DTexture(null, e, t, r)),
      (this.texture.isRenderTargetTexture = !0);
  }
}
WebGL3DRenderTarget.prototype.isWebGL3DRenderTarget = !0;
class WebGLMultipleRenderTargets extends WebGLRenderTarget {
  constructor(e, t, r, n = {}) {
    super(e, t, n);
    let a = this.texture;
    this.texture = [];
    for (let s = 0; s < r; s++)
      (this.texture[s] = a.clone()),
        (this.texture[s].isRenderTargetTexture = !0);
  }
  setSize(e, t, r = 1) {
    if (this.width !== e || this.height !== t || this.depth !== r) {
      (this.width = e), (this.height = t), (this.depth = r);
      for (let n = 0, a = this.texture.length; n < a; n++)
        (this.texture[n].image.width = e),
          (this.texture[n].image.height = t),
          (this.texture[n].image.depth = r);
      this.dispose();
    }
    return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this;
  }
  copy(e) {
    this.dispose(),
      (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.set(0, 0, this.width, this.height),
      this.scissor.set(0, 0, this.width, this.height),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()),
      (this.texture.length = 0);
    for (let t = 0, r = e.texture.length; t < r; t++)
      (this.texture[t] = e.texture[t].clone()),
        (this.texture[t].isRenderTargetTexture = !0);
    return this;
  }
}
WebGLMultipleRenderTargets.prototype.isWebGLMultipleRenderTargets = !0;
class Quaternion {
  constructor(e = 0, t = 0, r = 0, n = 1) {
    (this._x = e), (this._y = t), (this._z = r), (this._w = n);
  }
  static slerp(e, t, r, n) {
    return (
      console.warn(
        "THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
      ),
      r.slerpQuaternions(e, t, n)
    );
  }
  static slerpFlat(e, t, r, n, a, s, o) {
    let l = r[n + 0],
      c = r[n + 1],
      u = r[n + 2],
      h = r[n + 3],
      d = a[s + 0],
      p = a[s + 1],
      m = a[s + 2],
      f = a[s + 3];
    if (0 === o) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = h);
      return;
    }
    if (1 === o) {
      (e[t + 0] = d), (e[t + 1] = p), (e[t + 2] = m), (e[t + 3] = f);
      return;
    }
    if (h !== f || l !== d || c !== p || u !== m) {
      let g = 1 - o,
        $ = l * d + c * p + u * m + h * f,
        v = $ >= 0 ? 1 : -1,
        x = 1 - $ * $;
      if (x > Number.EPSILON) {
        let y = Math.sqrt(x),
          b = Math.atan2(y, $ * v);
        (g = Math.sin(g * b) / y), (o = Math.sin(o * b) / y);
      }
      let _ = o * v;
      if (
        ((l = l * g + d * _),
        (c = c * g + p * _),
        (u = u * g + m * _),
        (h = h * g + f * _),
        g === 1 - o)
      ) {
        let S = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        (l *= S), (c *= S), (u *= S), (h *= S);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, r, n, a, s) {
    let o = r[n],
      l = r[n + 1],
      c = r[n + 2],
      u = r[n + 3],
      h = a[s],
      d = a[s + 1],
      p = a[s + 2],
      m = a[s + 3];
    return (
      (e[t] = o * m + u * h + l * p - c * d),
      (e[t + 1] = l * m + u * d + c * h - o * p),
      (e[t + 2] = c * m + u * p + o * d - l * h),
      (e[t + 3] = u * m - o * h - l * d - c * p),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, r, n) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = r),
      (this._w = n),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    if (!(e && e.isEuler))
      throw Error(
        "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
      );
    let r = e._x,
      n = e._y,
      a = e._z,
      s = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(r / 2),
      u = o(n / 2),
      h = o(a / 2),
      d = l(r / 2),
      p = l(n / 2),
      m = l(a / 2);
    switch (s) {
      case "XYZ":
        (this._x = d * u * h + c * p * m),
          (this._y = c * p * h - d * u * m),
          (this._z = c * u * m + d * p * h),
          (this._w = c * u * h - d * p * m);
        break;
      case "YXZ":
        (this._x = d * u * h + c * p * m),
          (this._y = c * p * h - d * u * m),
          (this._z = c * u * m - d * p * h),
          (this._w = c * u * h + d * p * m);
        break;
      case "ZXY":
        (this._x = d * u * h - c * p * m),
          (this._y = c * p * h + d * u * m),
          (this._z = c * u * m + d * p * h),
          (this._w = c * u * h - d * p * m);
        break;
      case "ZYX":
        (this._x = d * u * h - c * p * m),
          (this._y = c * p * h + d * u * m),
          (this._z = c * u * m - d * p * h),
          (this._w = c * u * h + d * p * m);
        break;
      case "YZX":
        (this._x = d * u * h + c * p * m),
          (this._y = c * p * h + d * u * m),
          (this._z = c * u * m - d * p * h),
          (this._w = c * u * h - d * p * m);
        break;
      case "XZY":
        (this._x = d * u * h - c * p * m),
          (this._y = c * p * h - d * u * m),
          (this._z = c * u * m + d * p * h),
          (this._w = c * u * h + d * p * m);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s
        );
    }
    return !1 !== t && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    let r = t / 2,
      n = Math.sin(r);
    return (
      (this._x = e.x * n),
      (this._y = e.y * n),
      (this._z = e.z * n),
      (this._w = Math.cos(r)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    let t = e.elements,
      r = t[0],
      n = t[4],
      a = t[8],
      s = t[1],
      o = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      h = t[10],
      d = r + o + h;
    if (d > 0) {
      let p = 0.5 / Math.sqrt(d + 1);
      (this._w = 0.25 / p),
        (this._x = (u - l) * p),
        (this._y = (a - c) * p),
        (this._z = (s - n) * p);
    } else if (r > o && r > h) {
      let m = 2 * Math.sqrt(1 + r - o - h);
      (this._w = (u - l) / m),
        (this._x = 0.25 * m),
        (this._y = (n + s) / m),
        (this._z = (a + c) / m);
    } else if (o > h) {
      let f = 2 * Math.sqrt(1 + o - r - h);
      (this._w = (a - c) / f),
        (this._x = (n + s) / f),
        (this._y = 0.25 * f),
        (this._z = (l + u) / f);
    } else {
      let g = 2 * Math.sqrt(1 + h - r - o);
      (this._w = (s - n) / g),
        (this._x = (a + c) / g),
        (this._y = (l + u) / g),
        (this._z = 0.25 * g);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let r = e.dot(t) + 1;
    return (
      r < Number.EPSILON
        ? ((r = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = r))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = r)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = r)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(clamp(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    let r = this.angleTo(e);
    return 0 === r || this.slerp(e, Math.min(1, t / r)), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      0 === e
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
        ),
        this.multiplyQuaternions(e, t))
      : this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    let r = e._x,
      n = e._y,
      a = e._z,
      s = e._w,
      o = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = r * u + s * o + n * c - a * l),
      (this._y = n * u + s * l + a * o - r * c),
      (this._z = a * u + s * c + r * l - n * o),
      (this._w = s * u - r * o - n * l - a * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (0 === t) return this;
    if (1 === t) return this.copy(e);
    let r = this._x,
      n = this._y,
      a = this._z,
      s = this._w,
      o = s * e._w + r * e._x + n * e._y + a * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = s), (this._x = r), (this._y = n), (this._z = a), this;
    let l = 1 - o * o;
    if (l <= Number.EPSILON) {
      let c = 1 - t;
      return (
        (this._w = c * s + t * this._w),
        (this._x = c * r + t * this._x),
        (this._y = c * n + t * this._y),
        (this._z = c * a + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    let u = Math.sqrt(l),
      h = Math.atan2(u, o),
      d = Math.sin((1 - t) * h) / u,
      p = Math.sin(t * h) / u;
    return (
      (this._w = s * d + this._w * p),
      (this._x = r * d + this._x * p),
      (this._y = n * d + this._y * p),
      (this._z = a * d + this._z * p),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, r) {
    return this.copy(e).slerp(t, r);
  }
  random() {
    let e = Math.random(),
      t = Math.sqrt(1 - e),
      r = Math.sqrt(e),
      n = 2 * Math.PI * Math.random(),
      a = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(n),
      r * Math.sin(a),
      r * Math.cos(a),
      t * Math.sin(n)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
Quaternion.prototype.isQuaternion = !0;
class Vector3 {
  constructor(e = 0, t = 0, r = 0) {
    (this.x = e), (this.y = t), (this.z = r);
  }
  set(e, t, r) {
    return (
      void 0 === r && (r = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = r),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
        ),
        this.multiplyVectors(e, t))
      : ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return (
      (e && e.isEuler) ||
        console.error(
          "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
        ),
      this.applyQuaternion(_quaternion$4.setFromEuler(e))
    );
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    let t = this.x,
      r = this.y,
      n = this.z,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[3] * r + a[6] * n),
      (this.y = a[1] * t + a[4] * r + a[7] * n),
      (this.z = a[2] * t + a[5] * r + a[8] * n),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    let t = this.x,
      r = this.y,
      n = this.z,
      a = e.elements,
      s = 1 / (a[3] * t + a[7] * r + a[11] * n + a[15]);
    return (
      (this.x = (a[0] * t + a[4] * r + a[8] * n + a[12]) * s),
      (this.y = (a[1] * t + a[5] * r + a[9] * n + a[13]) * s),
      (this.z = (a[2] * t + a[6] * r + a[10] * n + a[14]) * s),
      this
    );
  }
  applyQuaternion(e) {
    let t = this.x,
      r = this.y,
      n = this.z,
      a = e.x,
      s = e.y,
      o = e.z,
      l = e.w,
      c = l * t + s * n - o * r,
      u = l * r + o * t - a * n,
      h = l * n + a * r - s * t,
      d = -a * t - s * r - o * n;
    return (
      (this.x = c * l + -(d * a) + -(u * o) - -(h * s)),
      (this.y = u * l + -(d * s) + -(h * a) - -(c * o)),
      (this.z = h * l + -(d * o) + -(c * s) - -(u * a)),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    let t = this.x,
      r = this.y,
      n = this.z,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * r + a[8] * n),
      (this.y = a[1] * t + a[5] * r + a[9] * n),
      (this.z = a[2] * t + a[6] * r + a[10] * n),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    let r = this.length();
    return this.divideScalar(r || 1).multiplyScalar(
      Math.max(e, Math.min(t, r))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, r) {
    return (
      (this.x = e.x + (t.x - e.x) * r),
      (this.y = e.y + (t.y - e.y) * r),
      (this.z = e.z + (t.z - e.z) * r),
      this
    );
  }
  cross(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
        ),
        this.crossVectors(e, t))
      : this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    let r = e.x,
      n = e.y,
      a = e.z,
      s = t.x,
      o = t.y,
      l = t.z;
    return (
      (this.x = n * l - a * o),
      (this.y = a * s - r * l),
      (this.z = r * o - n * s),
      this
    );
  }
  projectOnVector(e) {
    let t = e.lengthSq();
    if (0 === t) return this.set(0, 0, 0);
    let r = e.dot(this) / t;
    return this.copy(e).multiplyScalar(r);
  }
  projectOnPlane(e) {
    return _vector$c.copy(this).projectOnVector(e), this.sub(_vector$c);
  }
  reflect(e) {
    return this.sub(_vector$c.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    let t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (0 === t) return Math.PI / 2;
    let r = this.dot(e) / t;
    return Math.acos(clamp(r, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    let t = this.x - e.x,
      r = this.y - e.y,
      n = this.z - e.z;
    return t * t + r * r + n * n;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, r) {
    let n = Math.sin(t) * e;
    return (
      (this.x = n * Math.sin(r)),
      (this.y = Math.cos(t) * e),
      (this.z = n * Math.cos(r)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, r) {
    return (
      (this.x = e * Math.sin(t)), (this.y = r), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    let t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    let t = this.setFromMatrixColumn(e, 0).length(),
      r = this.setFromMatrixColumn(e, 1).length(),
      n = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = r), (this.z = n), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, 4 * t);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, 3 * t);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t, r) {
    return (
      void 0 !== r &&
        console.warn(
          "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    let e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      r = Math.sqrt(1 - e ** 2);
    return (
      (this.x = r * Math.cos(t)), (this.y = r * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
Vector3.prototype.isVector3 = !0;
let _vector$c = new Vector3(),
  _quaternion$4 = new Quaternion();
class Box3 {
  constructor(
    e = new Vector3(Infinity, Infinity, Infinity),
    t = new Vector3(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = Infinity,
      r = Infinity,
      n = Infinity,
      a = -1 / 0,
      s = -1 / 0,
      o = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      let u = e[l],
        h = e[l + 1],
        d = e[l + 2];
      u < t && (t = u),
        h < r && (r = h),
        d < n && (n = d),
        u > a && (a = u),
        h > s && (s = h),
        d > o && (o = d);
    }
    return this.min.set(t, r, n), this.max.set(a, s, o), this;
  }
  setFromBufferAttribute(e) {
    let t = Infinity,
      r = Infinity,
      n = Infinity,
      a = -1 / 0,
      s = -1 / 0,
      o = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      let u = e.getX(l),
        h = e.getY(l),
        d = e.getZ(l);
      u < t && (t = u),
        h < r && (r = h),
        d < n && (n = d),
        u > a && (a = u),
        h > s && (s = h),
        d > o && (o = d);
    }
    return this.min.set(t, r, n), this.max.set(a, s, o), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, r = e.length; t < r; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    let r = _vector$b.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(r), this.max.copy(e).add(r), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = Infinity),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    let r = e.geometry;
    if (void 0 !== r) {
      if (t && void 0 != r.attributes && void 0 !== r.attributes.position) {
        let n = r.attributes.position;
        for (let a = 0, s = n.count; a < s; a++)
          _vector$b.fromBufferAttribute(n, a).applyMatrix4(e.matrixWorld),
            this.expandByPoint(_vector$b);
      } else
        null === r.boundingBox && r.computeBoundingBox(),
          _box$3.copy(r.boundingBox),
          _box$3.applyMatrix4(e.matrixWorld),
          this.union(_box$3);
    }
    let o = e.children;
    for (let l = 0, c = o.length; l < c; l++) this.expandByObject(o[l], t);
    return this;
  }
  containsPoint(e) {
    return (
      !(e.x < this.min.x) &&
      !(e.x > this.max.x) &&
      !(e.y < this.min.y) &&
      !(e.y > this.max.y) &&
      !(e.z < this.min.z) &&
      !(e.z > this.max.z)
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return (
      !(e.max.x < this.min.x) &&
      !(e.min.x > this.max.x) &&
      !(e.max.y < this.min.y) &&
      !(e.min.y > this.max.y) &&
      !(e.max.z < this.min.z) &&
      !(e.min.z > this.max.z)
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, _vector$b),
      _vector$b.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, r;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (r = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (r = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (r += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (r += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (r += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (r += e.normal.z * this.min.z)),
      t <= -e.constant && r >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(_center),
      _extents.subVectors(this.max, _center),
      _v0$2.subVectors(e.a, _center),
      _v1$7.subVectors(e.b, _center),
      _v2$3.subVectors(e.c, _center),
      _f0.subVectors(_v1$7, _v0$2),
      _f1.subVectors(_v2$3, _v1$7),
      _f2.subVectors(_v0$2, _v2$3);
    let t = [
      0,
      -_f0.z,
      _f0.y,
      0,
      -_f1.z,
      _f1.y,
      0,
      -_f2.z,
      _f2.y,
      _f0.z,
      0,
      -_f0.x,
      _f1.z,
      0,
      -_f1.x,
      _f2.z,
      0,
      -_f2.x,
      -_f0.y,
      _f0.x,
      0,
      -_f1.y,
      _f1.x,
      0,
      -_f2.y,
      _f2.x,
      0,
    ];
    return (
      !!(
        satForAxes(t, _v0$2, _v1$7, _v2$3, _extents) &&
        satForAxes(
          (t = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
          _v0$2,
          _v1$7,
          _v2$3,
          _extents
        )
      ) &&
      (_triangleNormal.crossVectors(_f0, _f1),
      satForAxes(
        (t = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z]),
        _v0$2,
        _v1$7,
        _v2$3,
        _extents
      ))
    );
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    let t = _vector$b.copy(e).clamp(this.min, this.max);
    return t.sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center),
      (e.radius = 0.5 * this.getSize(_vector$b).length()),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return (
      this.isEmpty() ||
        (_points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(_points)),
      this
    );
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
Box3.prototype.isBox3 = !0;
let _points = [
    new Vector3(),
    new Vector3(),
    new Vector3(),
    new Vector3(),
    new Vector3(),
    new Vector3(),
    new Vector3(),
    new Vector3(),
  ],
  _vector$b = new Vector3(),
  _box$3 = new Box3(),
  _v0$2 = new Vector3(),
  _v1$7 = new Vector3(),
  _v2$3 = new Vector3(),
  _f0 = new Vector3(),
  _f1 = new Vector3(),
  _f2 = new Vector3(),
  _center = new Vector3(),
  _extents = new Vector3(),
  _triangleNormal = new Vector3(),
  _testAxis = new Vector3();
function satForAxes(e, t, r, n, a) {
  for (let s = 0, o = e.length - 3; s <= o; s += 3) {
    _testAxis.fromArray(e, s);
    let l =
        a.x * Math.abs(_testAxis.x) +
        a.y * Math.abs(_testAxis.y) +
        a.z * Math.abs(_testAxis.z),
      c = t.dot(_testAxis),
      u = r.dot(_testAxis),
      h = n.dot(_testAxis);
    if (Math.max(-Math.max(c, u, h), Math.min(c, u, h)) > l) return !1;
  }
  return !0;
}
let _box$2 = new Box3(),
  _v1$6 = new Vector3(),
  _toFarthestPoint = new Vector3(),
  _toPoint = new Vector3();
class Sphere {
  constructor(e = new Vector3(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    let r = this.center;
    void 0 !== t ? r.copy(t) : _box$2.setFromPoints(e).getCenter(r);
    let n = 0;
    for (let a = 0, s = e.length; a < s; a++)
      n = Math.max(n, r.distanceToSquared(e[a]));
    return (this.radius = Math.sqrt(n)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    let t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    let r = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      r > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    _toPoint.subVectors(e, this.center);
    let t = _toPoint.lengthSq();
    if (t > this.radius * this.radius) {
      let r = Math.sqrt(t),
        n = (r - this.radius) * 0.5;
      this.center.add(_toPoint.multiplyScalar(n / r)), (this.radius += n);
    }
    return this;
  }
  union(e) {
    return (
      !0 === this.center.equals(e.center)
        ? _toFarthestPoint.set(0, 0, 1).multiplyScalar(e.radius)
        : _toFarthestPoint
            .subVectors(e.center, this.center)
            .normalize()
            .multiplyScalar(e.radius),
      this.expandByPoint(_v1$6.copy(e.center).add(_toFarthestPoint)),
      this.expandByPoint(_v1$6.copy(e.center).sub(_toFarthestPoint)),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
let _vector$a = new Vector3(),
  _segCenter = new Vector3(),
  _segDir = new Vector3(),
  _diff = new Vector3(),
  _edge1 = new Vector3(),
  _edge2 = new Vector3(),
  _normal$1 = new Vector3();
class Ray {
  constructor(e = new Vector3(), t = new Vector3(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, _vector$a)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    let r = t.dot(this.direction);
    return r < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(r).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    let t = _vector$a.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (_vector$a.copy(this.direction).multiplyScalar(t).add(this.origin),
        _vector$a.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, r, n) {
    _segCenter.copy(e).add(t).multiplyScalar(0.5),
      _segDir.copy(t).sub(e).normalize(),
      _diff.copy(this.origin).sub(_segCenter);
    let a = 0.5 * e.distanceTo(t),
      s = -this.direction.dot(_segDir),
      o = _diff.dot(this.direction),
      l = -_diff.dot(_segDir),
      c = _diff.lengthSq(),
      u = Math.abs(1 - s * s),
      h,
      d,
      p,
      m;
    if (u > 0) {
      if (((h = s * l - o), (d = s * o - l), (m = a * u), h >= 0)) {
        if (d >= -m) {
          if (d <= m) {
            let f = 1 / u;
            (h *= f),
              (d *= f),
              (p = h * (h + s * d + 2 * o) + d * (s * h + d + 2 * l) + c);
          } else
            p =
              -(h = Math.max(0, -(s * (d = a) + o))) * h + d * (d + 2 * l) + c;
        } else
          p = -(h = Math.max(0, -(s * (d = -a) + o))) * h + d * (d + 2 * l) + c;
      } else
        d <= -m
          ? ((d =
              (h = Math.max(0, -(-s * a + o))) > 0
                ? -a
                : Math.min(Math.max(-a, -l), a)),
            (p = -h * h + d * (d + 2 * l) + c))
          : d <= m
          ? ((h = 0),
            (p = (d = Math.min(Math.max(-a, -l), a)) * (d + 2 * l) + c))
          : ((d =
              (h = Math.max(0, -(s * a + o))) > 0
                ? a
                : Math.min(Math.max(-a, -l), a)),
            (p = -h * h + d * (d + 2 * l) + c));
    } else
      (d = s > 0 ? -a : a),
        (p = -(h = Math.max(0, -(s * d + o))) * h + d * (d + 2 * l) + c);
    return (
      r && r.copy(this.direction).multiplyScalar(h).add(this.origin),
      n && n.copy(_segDir).multiplyScalar(d).add(_segCenter),
      p
    );
  }
  intersectSphere(e, t) {
    _vector$a.subVectors(e.center, this.origin);
    let r = _vector$a.dot(this.direction),
      n = _vector$a.dot(_vector$a) - r * r,
      a = e.radius * e.radius;
    if (n > a) return null;
    let s = Math.sqrt(a - n),
      o = r - s,
      l = r + s;
    return o < 0 && l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    let t = e.normal.dot(this.direction);
    if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
    let r = -(this.origin.dot(e.normal) + e.constant) / t;
    return r >= 0 ? r : null;
  }
  intersectPlane(e, t) {
    let r = this.distanceToPlane(e);
    return null === r ? null : this.at(r, t);
  }
  intersectsPlane(e) {
    let t = e.distanceToPoint(this.origin);
    if (0 === t) return !0;
    let r = e.normal.dot(this.direction);
    return r * t < 0;
  }
  intersectBox(e, t) {
    let r,
      n,
      a,
      s,
      o,
      l,
      c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      h = 1 / this.direction.z,
      d = this.origin;
    return (c >= 0
      ? ((r = (e.min.x - d.x) * c), (n = (e.max.x - d.x) * c))
      : ((r = (e.max.x - d.x) * c), (n = (e.min.x - d.x) * c)),
    u >= 0
      ? ((a = (e.min.y - d.y) * u), (s = (e.max.y - d.y) * u))
      : ((a = (e.max.y - d.y) * u), (s = (e.min.y - d.y) * u)),
    r > s || a > n)
      ? null
      : ((a > r || r != r) && (r = a),
        (s < n || n != n) && (n = s),
        h >= 0
          ? ((o = (e.min.z - d.z) * h), (l = (e.max.z - d.z) * h))
          : ((o = (e.max.z - d.z) * h), (l = (e.min.z - d.z) * h)),
        r > l || o > n)
      ? null
      : ((o > r || r != r) && (r = o), (l < n || n != n) && (n = l), n < 0)
      ? null
      : this.at(r >= 0 ? r : n, t);
  }
  intersectsBox(e) {
    return null !== this.intersectBox(e, _vector$a);
  }
  intersectTriangle(e, t, r, n, a) {
    _edge1.subVectors(t, e),
      _edge2.subVectors(r, e),
      _normal$1.crossVectors(_edge1, _edge2);
    let s = this.direction.dot(_normal$1),
      o;
    if (s > 0) {
      if (n) return null;
      o = 1;
    } else {
      if (!(s < 0)) return null;
      (o = -1), (s = -s);
    }
    _diff.subVectors(this.origin, e);
    let l = o * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
    if (l < 0) return null;
    let c = o * this.direction.dot(_edge1.cross(_diff));
    if (c < 0 || l + c > s) return null;
    let u = -o * _diff.dot(_normal$1);
    return u < 0 ? null : this.at(u / s, a);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Matrix4 {
  constructor() {
    (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, r, n, a, s, o, l, c, u, h, d, p, m, f, g) {
    let $ = this.elements;
    return (
      ($[0] = e),
      ($[4] = t),
      ($[8] = r),
      ($[12] = n),
      ($[1] = a),
      ($[5] = s),
      ($[9] = o),
      ($[13] = l),
      ($[2] = c),
      ($[6] = u),
      ($[10] = h),
      ($[14] = d),
      ($[3] = p),
      ($[7] = m),
      ($[11] = f),
      ($[15] = g),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Matrix4().fromArray(this.elements);
  }
  copy(e) {
    let t = this.elements,
      r = e.elements;
    return (
      (t[0] = r[0]),
      (t[1] = r[1]),
      (t[2] = r[2]),
      (t[3] = r[3]),
      (t[4] = r[4]),
      (t[5] = r[5]),
      (t[6] = r[6]),
      (t[7] = r[7]),
      (t[8] = r[8]),
      (t[9] = r[9]),
      (t[10] = r[10]),
      (t[11] = r[11]),
      (t[12] = r[12]),
      (t[13] = r[13]),
      (t[14] = r[14]),
      (t[15] = r[15]),
      this
    );
  }
  copyPosition(e) {
    let t = this.elements,
      r = e.elements;
    return (t[12] = r[12]), (t[13] = r[13]), (t[14] = r[14]), this;
  }
  setFromMatrix3(e) {
    let t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, r) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      r.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, r) {
    return (
      this.set(
        e.x,
        t.x,
        r.x,
        0,
        e.y,
        t.y,
        r.y,
        0,
        e.z,
        t.z,
        r.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    let t = this.elements,
      r = e.elements,
      n = 1 / _v1$5.setFromMatrixColumn(e, 0).length(),
      a = 1 / _v1$5.setFromMatrixColumn(e, 1).length(),
      s = 1 / _v1$5.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = r[0] * n),
      (t[1] = r[1] * n),
      (t[2] = r[2] * n),
      (t[3] = 0),
      (t[4] = r[4] * a),
      (t[5] = r[5] * a),
      (t[6] = r[6] * a),
      (t[7] = 0),
      (t[8] = r[8] * s),
      (t[9] = r[9] * s),
      (t[10] = r[10] * s),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    (e && e.isEuler) ||
      console.error(
        "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
      );
    let t = this.elements,
      r = e.x,
      n = e.y,
      a = e.z,
      s = Math.cos(r),
      o = Math.sin(r),
      l = Math.cos(n),
      c = Math.sin(n),
      u = Math.cos(a),
      h = Math.sin(a);
    if ("XYZ" === e.order) {
      let d = s * u,
        p = s * h,
        m = o * u,
        f = o * h;
      (t[0] = l * u),
        (t[4] = -l * h),
        (t[8] = c),
        (t[1] = p + m * c),
        (t[5] = d - f * c),
        (t[9] = -o * l),
        (t[2] = f - d * c),
        (t[6] = m + p * c),
        (t[10] = s * l);
    } else if ("YXZ" === e.order) {
      let g = l * u,
        $ = l * h,
        v = c * u,
        x = c * h;
      (t[0] = g + x * o),
        (t[4] = v * o - $),
        (t[8] = s * c),
        (t[1] = s * h),
        (t[5] = s * u),
        (t[9] = -o),
        (t[2] = $ * o - v),
        (t[6] = x + g * o),
        (t[10] = s * l);
    } else if ("ZXY" === e.order) {
      let y = l * u,
        b = l * h,
        _ = c * u,
        S = c * h;
      (t[0] = y - S * o),
        (t[4] = -s * h),
        (t[8] = _ + b * o),
        (t[1] = b + _ * o),
        (t[5] = s * u),
        (t[9] = S - y * o),
        (t[2] = -s * c),
        (t[6] = o),
        (t[10] = s * l);
    } else if ("ZYX" === e.order) {
      let M = s * u,
        w = s * h,
        T = o * u,
        A = o * h;
      (t[0] = l * u),
        (t[4] = T * c - w),
        (t[8] = M * c + A),
        (t[1] = l * h),
        (t[5] = A * c + M),
        (t[9] = w * c - T),
        (t[2] = -c),
        (t[6] = o * l),
        (t[10] = s * l);
    } else if ("YZX" === e.order) {
      let C = s * l,
        L = s * c,
        E = o * l,
        P = o * c;
      (t[0] = l * u),
        (t[4] = P - C * h),
        (t[8] = E * h + L),
        (t[1] = h),
        (t[5] = s * u),
        (t[9] = -o * u),
        (t[2] = -c * u),
        (t[6] = L * h + E),
        (t[10] = C - P * h);
    } else if ("XZY" === e.order) {
      let R = s * l,
        D = s * c,
        B = o * l,
        I = o * c;
      (t[0] = l * u),
        (t[4] = -h),
        (t[8] = c * u),
        (t[1] = R * h + I),
        (t[5] = s * u),
        (t[9] = D * h - B),
        (t[2] = B * h - D),
        (t[6] = o * u),
        (t[10] = I * h + R);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(_zero, e, _one);
  }
  lookAt(e, t, r) {
    let n = this.elements;
    return (
      _z.subVectors(e, t),
      0 === _z.lengthSq() && (_z.z = 1),
      _z.normalize(),
      _x.crossVectors(r, _z),
      0 === _x.lengthSq() &&
        (1 === Math.abs(r.z) ? (_z.x += 1e-4) : (_z.z += 1e-4),
        _z.normalize(),
        _x.crossVectors(r, _z)),
      _x.normalize(),
      _y.crossVectors(_z, _x),
      (n[0] = _x.x),
      (n[4] = _y.x),
      (n[8] = _z.x),
      (n[1] = _x.y),
      (n[5] = _y.y),
      (n[9] = _z.y),
      (n[2] = _x.z),
      (n[6] = _y.z),
      (n[10] = _z.z),
      this
    );
  }
  multiply(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
        ),
        this.multiplyMatrices(e, t))
      : this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    let r = e.elements,
      n = t.elements,
      a = this.elements,
      s = r[0],
      o = r[4],
      l = r[8],
      c = r[12],
      u = r[1],
      h = r[5],
      d = r[9],
      p = r[13],
      m = r[2],
      f = r[6],
      g = r[10],
      $ = r[14],
      v = r[3],
      x = r[7],
      y = r[11],
      b = r[15],
      _ = n[0],
      S = n[4],
      M = n[8],
      w = n[12],
      T = n[1],
      A = n[5],
      C = n[9],
      L = n[13],
      E = n[2],
      P = n[6],
      R = n[10],
      D = n[14],
      B = n[3],
      I = n[7],
      V = n[11],
      F = n[15];
    return (
      (a[0] = s * _ + o * T + l * E + c * B),
      (a[4] = s * S + o * A + l * P + c * I),
      (a[8] = s * M + o * C + l * R + c * V),
      (a[12] = s * w + o * L + l * D + c * F),
      (a[1] = u * _ + h * T + d * E + p * B),
      (a[5] = u * S + h * A + d * P + p * I),
      (a[9] = u * M + h * C + d * R + p * V),
      (a[13] = u * w + h * L + d * D + p * F),
      (a[2] = m * _ + f * T + g * E + $ * B),
      (a[6] = m * S + f * A + g * P + $ * I),
      (a[10] = m * M + f * C + g * R + $ * V),
      (a[14] = m * w + f * L + g * D + $ * F),
      (a[3] = v * _ + x * T + y * E + b * B),
      (a[7] = v * S + x * A + y * P + b * I),
      (a[11] = v * M + x * C + y * R + b * V),
      (a[15] = v * w + x * L + y * D + b * F),
      this
    );
  }
  multiplyScalar(e) {
    let t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    let e = this.elements,
      t = e[0],
      r = e[4],
      n = e[8],
      a = e[12],
      s = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      h = e[6],
      d = e[10],
      p = e[14],
      m = e[3],
      f = e[7],
      g = e[11],
      $ = e[15];
    return (
      m *
        (+a * l * h -
          n * c * h -
          a * o * d +
          r * c * d +
          n * o * p -
          r * l * p) +
      f *
        (+t * l * p -
          t * c * d +
          a * s * d -
          n * s * p +
          n * c * u -
          a * l * u) +
      g *
        (+t * c * h -
          t * o * p -
          a * s * h +
          r * s * p +
          a * o * u -
          r * c * u) +
      $ *
        (-n * o * u - t * l * h + t * o * d + n * s * h - r * s * d + r * l * u)
    );
  }
  transpose() {
    let e = this.elements,
      t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, r) {
    let n = this.elements;
    return (
      e.isVector3
        ? ((n[12] = e.x), (n[13] = e.y), (n[14] = e.z))
        : ((n[12] = e), (n[13] = t), (n[14] = r)),
      this
    );
  }
  invert() {
    let e = this.elements,
      t = e[0],
      r = e[1],
      n = e[2],
      a = e[3],
      s = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      h = e[9],
      d = e[10],
      p = e[11],
      m = e[12],
      f = e[13],
      g = e[14],
      $ = e[15],
      v = h * g * c - f * d * c + f * l * p - o * g * p - h * l * $ + o * d * $,
      x = m * d * c - u * g * c - m * l * p + s * g * p + u * l * $ - s * d * $,
      y = u * f * c - m * h * c + m * o * p - s * f * p - u * o * $ + s * h * $,
      b = m * h * l - u * f * l - m * o * d + s * f * d + u * o * g - s * h * g,
      _ = t * v + r * x + n * y + a * b;
    if (0 === _)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    let S = 1 / _;
    return (
      (e[0] = v * S),
      (e[1] =
        (f * d * a -
          h * g * a -
          f * n * p +
          r * g * p +
          h * n * $ -
          r * d * $) *
        S),
      (e[2] =
        (o * g * a -
          f * l * a +
          f * n * c -
          r * g * c -
          o * n * $ +
          r * l * $) *
        S),
      (e[3] =
        (h * l * a -
          o * d * a -
          h * n * c +
          r * d * c +
          o * n * p -
          r * l * p) *
        S),
      (e[4] = x * S),
      (e[5] =
        (u * g * a -
          m * d * a +
          m * n * p -
          t * g * p -
          u * n * $ +
          t * d * $) *
        S),
      (e[6] =
        (m * l * a -
          s * g * a -
          m * n * c +
          t * g * c +
          s * n * $ -
          t * l * $) *
        S),
      (e[7] =
        (s * d * a -
          u * l * a +
          u * n * c -
          t * d * c -
          s * n * p +
          t * l * p) *
        S),
      (e[8] = y * S),
      (e[9] =
        (m * h * a -
          u * f * a -
          m * r * p +
          t * f * p +
          u * r * $ -
          t * h * $) *
        S),
      (e[10] =
        (s * f * a -
          m * o * a +
          m * r * c -
          t * f * c -
          s * r * $ +
          t * o * $) *
        S),
      (e[11] =
        (u * o * a -
          s * h * a -
          u * r * c +
          t * h * c +
          s * r * p -
          t * o * p) *
        S),
      (e[12] = b * S),
      (e[13] =
        (u * f * n -
          m * h * n +
          m * r * d -
          t * f * d -
          u * r * g +
          t * h * g) *
        S),
      (e[14] =
        (m * o * n -
          s * f * n -
          m * r * l +
          t * f * l +
          s * r * g -
          t * o * g) *
        S),
      (e[15] =
        (s * h * n -
          u * o * n +
          u * r * l -
          t * h * l -
          s * r * d +
          t * o * d) *
        S),
      this
    );
  }
  scale(e) {
    let t = this.elements,
      r = e.x,
      n = e.y,
      a = e.z;
    return (
      (t[0] *= r),
      (t[4] *= n),
      (t[8] *= a),
      (t[1] *= r),
      (t[5] *= n),
      (t[9] *= a),
      (t[2] *= r),
      (t[6] *= n),
      (t[10] *= a),
      (t[3] *= r),
      (t[7] *= n),
      (t[11] *= a),
      this
    );
  }
  getMaxScaleOnAxis() {
    let e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, r, n));
  }
  makeTranslation(e, t, r) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    let t = Math.cos(e),
      r = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    let t = Math.cos(e),
      r = Math.sin(e);
    return this.set(t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    let t = Math.cos(e),
      r = Math.sin(e);
    return this.set(t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    let r = Math.cos(t),
      n = Math.sin(t),
      a = 1 - r,
      s = e.x,
      o = e.y,
      l = e.z,
      c = a * s,
      u = a * o;
    return (
      this.set(
        c * s + r,
        c * o - n * l,
        c * l + n * o,
        0,
        c * o + n * l,
        u * o + r,
        u * l - n * s,
        0,
        c * l - n * o,
        u * l + n * s,
        a * l * l + r,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, r) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, r, n, a, s) {
    return this.set(1, r, a, 0, e, 1, s, 0, t, n, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, r) {
    let n = this.elements,
      a = t._x,
      s = t._y,
      o = t._z,
      l = t._w,
      c = a + a,
      u = s + s,
      h = o + o,
      d = a * c,
      p = a * u,
      m = a * h,
      f = s * u,
      g = s * h,
      $ = o * h,
      v = l * c,
      x = l * u,
      y = l * h,
      b = r.x,
      _ = r.y,
      S = r.z;
    return (
      (n[0] = (1 - (f + $)) * b),
      (n[1] = (p + y) * b),
      (n[2] = (m - x) * b),
      (n[3] = 0),
      (n[4] = (p - y) * _),
      (n[5] = (1 - (d + $)) * _),
      (n[6] = (g + v) * _),
      (n[7] = 0),
      (n[8] = (m + x) * S),
      (n[9] = (g - v) * S),
      (n[10] = (1 - (d + f)) * S),
      (n[11] = 0),
      (n[12] = e.x),
      (n[13] = e.y),
      (n[14] = e.z),
      (n[15] = 1),
      this
    );
  }
  decompose(e, t, r) {
    let n = this.elements,
      a = _v1$5.set(n[0], n[1], n[2]).length(),
      s = _v1$5.set(n[4], n[5], n[6]).length(),
      o = _v1$5.set(n[8], n[9], n[10]).length(),
      l = this.determinant();
    l < 0 && (a = -a),
      (e.x = n[12]),
      (e.y = n[13]),
      (e.z = n[14]),
      _m1$2.copy(this);
    let c = 1 / a,
      u = 1 / s,
      h = 1 / o;
    return (
      (_m1$2.elements[0] *= c),
      (_m1$2.elements[1] *= c),
      (_m1$2.elements[2] *= c),
      (_m1$2.elements[4] *= u),
      (_m1$2.elements[5] *= u),
      (_m1$2.elements[6] *= u),
      (_m1$2.elements[8] *= h),
      (_m1$2.elements[9] *= h),
      (_m1$2.elements[10] *= h),
      t.setFromRotationMatrix(_m1$2),
      (r.x = a),
      (r.y = s),
      (r.z = o),
      this
    );
  }
  makePerspective(e, t, r, n, a, s) {
    void 0 === s &&
      console.warn(
        "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
      );
    let o = this.elements;
    return (
      (o[0] = (2 * a) / (t - e)),
      (o[4] = 0),
      (o[8] = (t + e) / (t - e)),
      (o[12] = 0),
      (o[1] = 0),
      (o[5] = (2 * a) / (r - n)),
      (o[9] = (r + n) / (r - n)),
      (o[13] = 0),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = -(s + a) / (s - a)),
      (o[14] = (-2 * s * a) / (s - a)),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, r, n, a, s) {
    let o = this.elements,
      l = 1 / (t - e),
      c = 1 / (r - n),
      u = 1 / (s - a);
    return (
      (o[0] = 2 * l),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -((t + e) * l)),
      (o[1] = 0),
      (o[5] = 2 * c),
      (o[9] = 0),
      (o[13] = -((r + n) * c)),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = -2 * u),
      (o[14] = -((s + a) * u)),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = 0),
      (o[15] = 1),
      this
    );
  }
  equals(e) {
    let t = this.elements,
      r = e.elements;
    for (let n = 0; n < 16; n++) if (t[n] !== r[n]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let r = 0; r < 16; r++) this.elements[r] = e[r + t];
    return this;
  }
  toArray(e = [], t = 0) {
    let r = this.elements;
    return (
      (e[t] = r[0]),
      (e[t + 1] = r[1]),
      (e[t + 2] = r[2]),
      (e[t + 3] = r[3]),
      (e[t + 4] = r[4]),
      (e[t + 5] = r[5]),
      (e[t + 6] = r[6]),
      (e[t + 7] = r[7]),
      (e[t + 8] = r[8]),
      (e[t + 9] = r[9]),
      (e[t + 10] = r[10]),
      (e[t + 11] = r[11]),
      (e[t + 12] = r[12]),
      (e[t + 13] = r[13]),
      (e[t + 14] = r[14]),
      (e[t + 15] = r[15]),
      e
    );
  }
}
Matrix4.prototype.isMatrix4 = !0;
let _v1$5 = new Vector3(),
  _m1$2 = new Matrix4(),
  _zero = new Vector3(0, 0, 0),
  _one = new Vector3(1, 1, 1),
  _x = new Vector3(),
  _y = new Vector3(),
  _z = new Vector3(),
  _matrix$1 = new Matrix4(),
  _quaternion$3 = new Quaternion();
class Euler {
  constructor(e = 0, t = 0, r = 0, n = Euler.DefaultOrder) {
    (this._x = e), (this._y = t), (this._z = r), (this._order = n);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, r, n = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = r),
      (this._order = n),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, r = !0) {
    let n = e.elements,
      a = n[0],
      s = n[4],
      o = n[8],
      l = n[1],
      c = n[5],
      u = n[9],
      h = n[2],
      d = n[6],
      p = n[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(clamp(o, -1, 1))),
          0.9999999 > Math.abs(o)
            ? ((this._x = Math.atan2(-u, p)), (this._z = Math.atan2(-s, a)))
            : ((this._x = Math.atan2(d, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-clamp(u, -1, 1))),
          0.9999999 > Math.abs(u)
            ? ((this._y = Math.atan2(o, p)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-h, a)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(clamp(d, -1, 1))),
          0.9999999 > Math.abs(d)
            ? ((this._y = Math.atan2(-h, p)), (this._z = Math.atan2(-s, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, a)));
        break;
      case "ZYX":
        (this._y = Math.asin(-clamp(h, -1, 1))),
          0.9999999 > Math.abs(h)
            ? ((this._x = Math.atan2(d, p)), (this._z = Math.atan2(l, a)))
            : ((this._x = 0), (this._z = Math.atan2(-s, c)));
        break;
      case "YZX":
        (this._z = Math.asin(clamp(l, -1, 1))),
          0.9999999 > Math.abs(l)
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-h, a)))
            : ((this._x = 0), (this._y = Math.atan2(o, p)));
        break;
      case "XZY":
        (this._z = Math.asin(-clamp(s, -1, 1))),
          0.9999999 > Math.abs(s)
            ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(o, a)))
            : ((this._x = Math.atan2(-u, p)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), !0 === r && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, r) {
    return (
      _matrix$1.makeRotationFromQuaternion(e),
      this.setFromRotationMatrix(_matrix$1, t, r)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return (
      _quaternion$3.setFromEuler(this), this.setFromQuaternion(_quaternion$3, e)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      void 0 !== e[3] && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error(
      "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
    );
  }
}
(Euler.prototype.isEuler = !0),
  (Euler.DefaultOrder = "XYZ"),
  (Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]);
class Layers {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) != 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) != 0;
  }
}
let _object3DId = 0,
  _v1$4 = new Vector3(),
  _q1 = new Quaternion(),
  _m1$1 = new Matrix4(),
  _target = new Vector3(),
  _position$3 = new Vector3(),
  _scale$2 = new Vector3(),
  _quaternion$2 = new Quaternion(),
  _xAxis = new Vector3(1, 0, 0),
  _yAxis = new Vector3(0, 1, 0),
  _zAxis = new Vector3(0, 0, 1),
  _addedEvent = { type: "added" },
  _removedEvent = { type: "removed" };
class Object3D extends EventDispatcher {
  constructor() {
    super(),
      Object.defineProperty(this, "id", { value: _object3DId++ }),
      (this.uuid = generateUUID()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Object3D.DefaultUp.clone());
    let e = new Vector3(),
      t = new Euler(),
      r = new Quaternion(),
      n = new Vector3(1, 1, 1);
    function a() {
      r.setFromEuler(t, !1);
    }
    function s() {
      t.setFromQuaternion(r, void 0, !1);
    }
    t._onChange(a),
      r._onChange(s),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: r },
        scale: { configurable: !0, enumerable: !0, value: n },
        modelViewMatrix: { value: new Matrix4() },
        normalMatrix: { value: new Matrix3() },
      }),
      (this.matrix = new Matrix4()),
      (this.matrixWorld = new Matrix4()),
      (this.matrixAutoUpdate = Object3D.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Layers()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return _q1.setFromAxisAngle(e, t), this.quaternion.multiply(_q1), this;
  }
  rotateOnWorldAxis(e, t) {
    return _q1.setFromAxisAngle(e, t), this.quaternion.premultiply(_q1), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(_xAxis, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(_yAxis, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(_zAxis, e);
  }
  translateOnAxis(e, t) {
    return (
      _v1$4.copy(e).applyQuaternion(this.quaternion),
      this.position.add(_v1$4.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(_xAxis, e);
  }
  translateY(e) {
    return this.translateOnAxis(_yAxis, e);
  }
  translateZ(e) {
    return this.translateOnAxis(_zAxis, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, r) {
    e.isVector3 ? _target.copy(e) : _target.set(e, t, r);
    let n = this.parent;
    this.updateWorldMatrix(!0, !1),
      _position$3.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? _m1$1.lookAt(_position$3, _target, this.up)
        : _m1$1.lookAt(_target, _position$3, this.up),
      this.quaternion.setFromRotationMatrix(_m1$1),
      n &&
        (_m1$1.extractRotation(n.matrixWorld),
        _q1.setFromRotationMatrix(_m1$1),
        this.quaternion.premultiply(_q1.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (null !== e.parent && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(_addedEvent))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
      return this;
    }
    let r = this.children.indexOf(e);
    return (
      -1 !== r &&
        ((e.parent = null),
        this.children.splice(r, 1),
        e.dispatchEvent(_removedEvent)),
      this
    );
  }
  removeFromParent() {
    let e = this.parent;
    return null !== e && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      let t = this.children[e];
      (t.parent = null), t.dispatchEvent(_removedEvent);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      _m1$1.copy(this.matrixWorld).invert(),
      null !== e.parent &&
        (e.parent.updateWorldMatrix(!0, !1),
        _m1$1.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(_m1$1),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let r = 0, n = this.children.length; r < n; r++) {
      let a = this.children[r],
        s = a.getObjectByProperty(e, t);
      if (void 0 !== s) return s;
    }
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(_position$3, e, _scale$2),
      e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(_position$3, _quaternion$2, e),
      e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    let t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    let t = this.children;
    for (let r = 0, n = t.length; r < n; r++) t[r].traverse(e);
  }
  traverseVisible(e) {
    if (!1 === this.visible) return;
    e(this);
    let t = this.children;
    for (let r = 0, n = t.length; r < n; r++) t[r].traverseVisible(e);
  }
  traverseAncestors(e) {
    let t = this.parent;
    null !== t && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    let t = this.children;
    for (let r = 0, n = t.length; r < n; r++) t[r].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    let r = this.parent;
    if (
      (!0 === e && null !== r && r.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      null === this.parent
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      !0 === t)
    ) {
      let n = this.children;
      for (let a = 0, s = n.length; a < s; a++) n[a].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    let t = void 0 === e || "string" == typeof e,
      r = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (r.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    let n = {};
    function a(t, r) {
      return void 0 === t[r.uuid] && (t[r.uuid] = r.toJSON(e)), r.uuid;
    }
    if (
      ((n.uuid = this.uuid),
      (n.type = this.type),
      "" !== this.name && (n.name = this.name),
      !0 === this.castShadow && (n.castShadow = !0),
      !0 === this.receiveShadow && (n.receiveShadow = !0),
      !1 === this.visible && (n.visible = !1),
      !1 === this.frustumCulled && (n.frustumCulled = !1),
      0 !== this.renderOrder && (n.renderOrder = this.renderOrder),
      "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
      (n.layers = this.layers.mask),
      (n.matrix = this.matrix.toArray()),
      !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((n.type = "InstancedMesh"),
        (n.count = this.count),
        (n.instanceMatrix = this.instanceMatrix.toJSON()),
        null !== this.instanceColor &&
          (n.instanceColor = this.instanceColor.toJSON())),
      this.isScene)
    )
      this.background &&
        (this.background.isColor
          ? (n.background = this.background.toJSON())
          : this.background.isTexture &&
            (n.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          (n.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      n.geometry = a(e.geometries, this.geometry);
      let s = this.geometry.parameters;
      if (void 0 !== s && void 0 !== s.shapes) {
        let o = s.shapes;
        if (Array.isArray(o))
          for (let l = 0, c = o.length; l < c; l++) {
            let u = o[l];
            a(e.shapes, u);
          }
        else a(e.shapes, o);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((n.bindMode = this.bindMode),
        (n.bindMatrix = this.bindMatrix.toArray()),
        void 0 !== this.skeleton &&
          (a(e.skeletons, this.skeleton), (n.skeleton = this.skeleton.uuid))),
      void 0 !== this.material)
    ) {
      if (Array.isArray(this.material)) {
        let h = [];
        for (let d = 0, p = this.material.length; d < p; d++)
          h.push(a(e.materials, this.material[d]));
        n.material = h;
      } else n.material = a(e.materials, this.material);
    }
    if (this.children.length > 0) {
      n.children = [];
      for (let m = 0; m < this.children.length; m++)
        n.children.push(this.children[m].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let f = 0; f < this.animations.length; f++) {
        let g = this.animations[f];
        n.animations.push(a(e.animations, g));
      }
    }
    if (t) {
      let $ = w(e.geometries),
        v = w(e.materials),
        x = w(e.textures),
        y = w(e.images),
        b = w(e.shapes),
        _ = w(e.skeletons),
        S = w(e.animations),
        M = w(e.nodes);
      $.length > 0 && (r.geometries = $),
        v.length > 0 && (r.materials = v),
        x.length > 0 && (r.textures = x),
        y.length > 0 && (r.images = y),
        b.length > 0 && (r.shapes = b),
        _.length > 0 && (r.skeletons = _),
        S.length > 0 && (r.animations = S),
        M.length > 0 && (r.nodes = M);
    }
    return (r.object = n), r;
    function w(e) {
      let t = [];
      for (let r in e) {
        let n = e[r];
        delete n.metadata, t.push(n);
      }
      return t;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      !0 === t)
    )
      for (let r = 0; r < e.children.length; r++) {
        let n = e.children[r];
        this.add(n.clone());
      }
    return this;
  }
}
(Object3D.DefaultUp = new Vector3(0, 1, 0)),
  (Object3D.DefaultMatrixAutoUpdate = !0),
  (Object3D.prototype.isObject3D = !0);
let _v0$1 = new Vector3(),
  _v1$3 = new Vector3(),
  _v2$2 = new Vector3(),
  _v3$1 = new Vector3(),
  _vab = new Vector3(),
  _vac = new Vector3(),
  _vbc = new Vector3(),
  _vap = new Vector3(),
  _vbp = new Vector3(),
  _vcp = new Vector3();
class Triangle {
  constructor(e = new Vector3(), t = new Vector3(), r = new Vector3()) {
    (this.a = e), (this.b = t), (this.c = r);
  }
  static getNormal(e, t, r, n) {
    n.subVectors(r, t), _v0$1.subVectors(e, t), n.cross(_v0$1);
    let a = n.lengthSq();
    return a > 0 ? n.multiplyScalar(1 / Math.sqrt(a)) : n.set(0, 0, 0);
  }
  static getBarycoord(e, t, r, n, a) {
    _v0$1.subVectors(n, t), _v1$3.subVectors(r, t), _v2$2.subVectors(e, t);
    let s = _v0$1.dot(_v0$1),
      o = _v0$1.dot(_v1$3),
      l = _v0$1.dot(_v2$2),
      c = _v1$3.dot(_v1$3),
      u = _v1$3.dot(_v2$2),
      h = s * c - o * o;
    if (0 === h) return a.set(-2, -1, -1);
    let d = 1 / h,
      p = (c * l - o * u) * d,
      m = (s * u - o * l) * d;
    return a.set(1 - p - m, m, p);
  }
  static containsPoint(e, t, r, n) {
    return (
      this.getBarycoord(e, t, r, n, _v3$1),
      _v3$1.x >= 0 && _v3$1.y >= 0 && _v3$1.x + _v3$1.y <= 1
    );
  }
  static getUV(e, t, r, n, a, s, o, l) {
    return (
      this.getBarycoord(e, t, r, n, _v3$1),
      l.set(0, 0),
      l.addScaledVector(a, _v3$1.x),
      l.addScaledVector(s, _v3$1.y),
      l.addScaledVector(o, _v3$1.z),
      l
    );
  }
  static isFrontFacing(e, t, r, n) {
    return (
      _v0$1.subVectors(r, t),
      _v1$3.subVectors(e, t),
      0 > _v0$1.cross(_v1$3).dot(n)
    );
  }
  set(e, t, r) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(r), this;
  }
  setFromPointsAndIndices(e, t, r, n) {
    return this.a.copy(e[t]), this.b.copy(e[r]), this.c.copy(e[n]), this;
  }
  setFromAttributeAndIndices(e, t, r, n) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, r),
      this.c.fromBufferAttribute(e, n),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      _v0$1.subVectors(this.c, this.b),
      _v1$3.subVectors(this.a, this.b),
      0.5 * _v0$1.cross(_v1$3).length()
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Triangle.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Triangle.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, r, n, a) {
    return Triangle.getUV(e, this.a, this.b, this.c, t, r, n, a);
  }
  containsPoint(e) {
    return Triangle.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Triangle.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    let r = this.a,
      n = this.b,
      a = this.c,
      s,
      o;
    _vab.subVectors(n, r), _vac.subVectors(a, r), _vap.subVectors(e, r);
    let l = _vab.dot(_vap),
      c = _vac.dot(_vap);
    if (l <= 0 && c <= 0) return t.copy(r);
    _vbp.subVectors(e, n);
    let u = _vab.dot(_vbp),
      h = _vac.dot(_vbp);
    if (u >= 0 && h <= u) return t.copy(n);
    let d = l * h - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return (s = l / (l - u)), t.copy(r).addScaledVector(_vab, s);
    _vcp.subVectors(e, a);
    let p = _vab.dot(_vcp),
      m = _vac.dot(_vcp);
    if (m >= 0 && p <= m) return t.copy(a);
    let f = p * c - l * m;
    if (f <= 0 && c >= 0 && m <= 0)
      return (o = c / (c - m)), t.copy(r).addScaledVector(_vac, o);
    let g = u * m - p * h;
    if (g <= 0 && h - u >= 0 && p - m >= 0)
      return (
        _vbc.subVectors(a, n),
        (o = (h - u) / (h - u + (p - m))),
        t.copy(n).addScaledVector(_vbc, o)
      );
    let $ = 1 / (g + f + d);
    return (
      (s = f * $),
      (o = d * $),
      t.copy(r).addScaledVector(_vab, s).addScaledVector(_vac, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let materialId = 0;
class Material extends EventDispatcher {
  constructor() {
    super(),
      Object.defineProperty(this, "id", { value: materialId++ }),
      (this.uuid = generateUUID()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = NormalBlending),
      (this.side = FrontSide),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = SrcAlphaFactor),
      (this.blendDst = OneMinusSrcAlphaFactor),
      (this.blendEquation = AddEquation),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = LessEqualDepth),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = AlwaysStencilFunc),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = KeepStencilOp),
      (this.stencilZFail = KeepStencilOp),
      (this.stencilZPass = KeepStencilOp),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (void 0 !== e)
      for (let t in e) {
        let r = e[t];
        if (void 0 === r) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        if ("shading" === t) {
          console.warn(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          ),
            (this.flatShading = r === FlatShading);
          continue;
        }
        let n = this[t];
        if (void 0 === n) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              t +
              "' is not a property of this material."
          );
          continue;
        }
        n && n.isColor
          ? n.set(r)
          : n && n.isVector3 && r && r.isVector3
          ? n.copy(r)
          : (this[t] = r);
      }
  }
  toJSON(e) {
    let t = void 0 === e || "string" == typeof e;
    t && (e = { textures: {}, images: {} });
    let r = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    function n(e) {
      let t = [];
      for (let r in e) {
        let n = e[r];
        delete n.metadata, t.push(n);
      }
      return t;
    }
    if (
      ((r.uuid = this.uuid),
      (r.type = this.type),
      "" !== this.name && (r.name = this.name),
      this.color && this.color.isColor && (r.color = this.color.getHex()),
      void 0 !== this.roughness && (r.roughness = this.roughness),
      void 0 !== this.metalness && (r.metalness = this.metalness),
      void 0 !== this.sheen && (r.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (r.sheenColor = this.sheenColor.getHex()),
      void 0 !== this.sheenRoughness &&
        (r.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (r.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        1 !== this.emissiveIntensity &&
        (r.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (r.specular = this.specular.getHex()),
      void 0 !== this.specularIntensity &&
        (r.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (r.specularColor = this.specularColor.getHex()),
      void 0 !== this.shininess && (r.shininess = this.shininess),
      void 0 !== this.clearcoat && (r.clearcoat = this.clearcoat),
      void 0 !== this.clearcoatRoughness &&
        (r.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (r.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (r.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((r.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (r.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.map && this.map.isTexture && (r.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (r.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (r.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((r.lightMap = this.lightMap.toJSON(e).uuid),
        (r.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((r.aoMap = this.aoMap.toJSON(e).uuid),
        (r.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((r.bumpMap = this.bumpMap.toJSON(e).uuid),
        (r.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((r.normalMap = this.normalMap.toJSON(e).uuid),
        (r.normalMapType = this.normalMapType),
        (r.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((r.displacementMap = this.displacementMap.toJSON(e).uuid),
        (r.displacementScale = this.displacementScale),
        (r.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (r.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (r.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (r.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (r.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (r.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (r.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((r.envMap = this.envMap.toJSON(e).uuid),
        void 0 !== this.combine && (r.combine = this.combine)),
      void 0 !== this.envMapIntensity &&
        (r.envMapIntensity = this.envMapIntensity),
      void 0 !== this.reflectivity && (r.reflectivity = this.reflectivity),
      void 0 !== this.refractionRatio &&
        (r.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (r.gradientMap = this.gradientMap.toJSON(e).uuid),
      void 0 !== this.transmission && (r.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (r.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      void 0 !== this.thickness && (r.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (r.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      void 0 !== this.attenuationDistance &&
        (r.attenuationDistance = this.attenuationDistance),
      void 0 !== this.attenuationColor &&
        (r.attenuationColor = this.attenuationColor.getHex()),
      void 0 !== this.size && (r.size = this.size),
      null !== this.shadowSide && (r.shadowSide = this.shadowSide),
      void 0 !== this.sizeAttenuation &&
        (r.sizeAttenuation = this.sizeAttenuation),
      this.blending !== NormalBlending && (r.blending = this.blending),
      this.side !== FrontSide && (r.side = this.side),
      this.vertexColors && (r.vertexColors = !0),
      this.opacity < 1 && (r.opacity = this.opacity),
      !0 === this.transparent && (r.transparent = this.transparent),
      (r.depthFunc = this.depthFunc),
      (r.depthTest = this.depthTest),
      (r.depthWrite = this.depthWrite),
      (r.colorWrite = this.colorWrite),
      (r.stencilWrite = this.stencilWrite),
      (r.stencilWriteMask = this.stencilWriteMask),
      (r.stencilFunc = this.stencilFunc),
      (r.stencilRef = this.stencilRef),
      (r.stencilFuncMask = this.stencilFuncMask),
      (r.stencilFail = this.stencilFail),
      (r.stencilZFail = this.stencilZFail),
      (r.stencilZPass = this.stencilZPass),
      void 0 !== this.rotation &&
        0 !== this.rotation &&
        (r.rotation = this.rotation),
      !0 === this.polygonOffset && (r.polygonOffset = !0),
      0 !== this.polygonOffsetFactor &&
        (r.polygonOffsetFactor = this.polygonOffsetFactor),
      0 !== this.polygonOffsetUnits &&
        (r.polygonOffsetUnits = this.polygonOffsetUnits),
      void 0 !== this.linewidth &&
        1 !== this.linewidth &&
        (r.linewidth = this.linewidth),
      void 0 !== this.dashSize && (r.dashSize = this.dashSize),
      void 0 !== this.gapSize && (r.gapSize = this.gapSize),
      void 0 !== this.scale && (r.scale = this.scale),
      !0 === this.dithering && (r.dithering = !0),
      this.alphaTest > 0 && (r.alphaTest = this.alphaTest),
      !0 === this.alphaToCoverage && (r.alphaToCoverage = this.alphaToCoverage),
      !0 === this.premultipliedAlpha &&
        (r.premultipliedAlpha = this.premultipliedAlpha),
      !0 === this.wireframe && (r.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (r.wireframeLinewidth = this.wireframeLinewidth),
      "round" !== this.wireframeLinecap &&
        (r.wireframeLinecap = this.wireframeLinecap),
      "round" !== this.wireframeLinejoin &&
        (r.wireframeLinejoin = this.wireframeLinejoin),
      !0 === this.flatShading && (r.flatShading = this.flatShading),
      !1 === this.visible && (r.visible = !1),
      !1 === this.toneMapped && (r.toneMapped = !1),
      !1 === this.fog && (r.fog = !1),
      "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData),
      t)
    ) {
      let a = n(e.textures),
        s = n(e.images);
      a.length > 0 && (r.textures = a), s.length > 0 && (r.images = s);
    }
    return r;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    let t = e.clippingPlanes,
      r = null;
    if (null !== t) {
      let n = t.length;
      r = Array(n);
      for (let a = 0; a !== n; ++a) r[a] = t[a].clone();
    }
    return (
      (this.clippingPlanes = r),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  get vertexTangents() {
    return (
      console.warn(
        "THREE." + this.type + ": .vertexTangents has been removed."
      ),
      !1
    );
  }
  set vertexTangents(e) {
    console.warn("THREE." + this.type + ": .vertexTangents has been removed.");
  }
}
(Material.prototype.isMaterial = !0),
  (Material.fromType = function () {
    return null;
  });
class MeshBasicMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Color(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = MultiplyOperation),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
MeshBasicMaterial.prototype.isMeshBasicMaterial = !0;
let _vector$9 = new Vector3(),
  _vector2$1 = new Vector2();
class BufferAttribute {
  constructor(e, t, r) {
    if (Array.isArray(e))
      throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.normalized = !0 === r),
      (this.usage = StaticDrawUsage),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, r) {
    (e *= this.itemSize), (r *= t.itemSize);
    for (let n = 0, a = this.itemSize; n < a; n++)
      this.array[e + n] = t.array[r + n];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  copyColorsArray(e) {
    let t = this.array,
      r = 0;
    for (let n = 0, a = e.length; n < a; n++) {
      let s = e[n];
      void 0 === s &&
        (console.warn(
          "THREE.BufferAttribute.copyColorsArray(): color is undefined",
          n
        ),
        (s = new Color())),
        (t[r++] = s.r),
        (t[r++] = s.g),
        (t[r++] = s.b);
    }
    return this;
  }
  copyVector2sArray(e) {
    let t = this.array,
      r = 0;
    for (let n = 0, a = e.length; n < a; n++) {
      let s = e[n];
      void 0 === s &&
        (console.warn(
          "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
          n
        ),
        (s = new Vector2())),
        (t[r++] = s.x),
        (t[r++] = s.y);
    }
    return this;
  }
  copyVector3sArray(e) {
    let t = this.array,
      r = 0;
    for (let n = 0, a = e.length; n < a; n++) {
      let s = e[n];
      void 0 === s &&
        (console.warn(
          "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
          n
        ),
        (s = new Vector3())),
        (t[r++] = s.x),
        (t[r++] = s.y),
        (t[r++] = s.z);
    }
    return this;
  }
  copyVector4sArray(e) {
    let t = this.array,
      r = 0;
    for (let n = 0, a = e.length; n < a; n++) {
      let s = e[n];
      void 0 === s &&
        (console.warn(
          "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
          n
        ),
        (s = new Vector4())),
        (t[r++] = s.x),
        (t[r++] = s.y),
        (t[r++] = s.z),
        (t[r++] = s.w);
    }
    return this;
  }
  applyMatrix3(e) {
    if (2 === this.itemSize)
      for (let t = 0, r = this.count; t < r; t++)
        _vector2$1.fromBufferAttribute(this, t),
          _vector2$1.applyMatrix3(e),
          this.setXY(t, _vector2$1.x, _vector2$1.y);
    else if (3 === this.itemSize)
      for (let n = 0, a = this.count; n < a; n++)
        _vector$9.fromBufferAttribute(this, n),
          _vector$9.applyMatrix3(e),
          this.setXYZ(n, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, r = this.count; t < r; t++)
      _vector$9.fromBufferAttribute(this, t),
        _vector$9.applyMatrix4(e),
        this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, r = this.count; t < r; t++)
      _vector$9.fromBufferAttribute(this, t),
        _vector$9.applyNormalMatrix(e),
        this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, r = this.count; t < r; t++)
      _vector$9.fromBufferAttribute(this, t),
        _vector$9.transformDirection(e),
        this.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    return this.array[e * this.itemSize];
  }
  setX(e, t) {
    return (this.array[e * this.itemSize] = t), this;
  }
  getY(e) {
    return this.array[e * this.itemSize + 1];
  }
  setY(e, t) {
    return (this.array[e * this.itemSize + 1] = t), this;
  }
  getZ(e) {
    return this.array[e * this.itemSize + 2];
  }
  setZ(e, t) {
    return (this.array[e * this.itemSize + 2] = t), this;
  }
  getW(e) {
    return this.array[e * this.itemSize + 3];
  }
  setW(e, t) {
    return (this.array[e * this.itemSize + 3] = t), this;
  }
  setXY(e, t, r) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = r),
      this
    );
  }
  setXYZ(e, t, r, n) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = r),
      (this.array[e + 2] = n),
      this
    );
  }
  setXYZW(e, t, r, n, a) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = r),
      (this.array[e + 2] = n),
      (this.array[e + 3] = a),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    let e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized,
    };
    return (
      "" !== this.name && (e.name = this.name),
      this.usage !== StaticDrawUsage && (e.usage = this.usage),
      (0 !== this.updateRange.offset || -1 !== this.updateRange.count) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
}
BufferAttribute.prototype.isBufferAttribute = !0;
class Int8BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Int8Array(e), t, r);
  }
}
class Uint8BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Uint8Array(e), t, r);
  }
}
class Uint8ClampedBufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Uint8ClampedArray(e), t, r);
  }
}
class Int16BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Int16Array(e), t, r);
  }
}
class Uint16BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Uint16Array(e), t, r);
  }
}
class Int32BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Int32Array(e), t, r);
  }
}
class Uint32BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Uint32Array(e), t, r);
  }
}
class Float16BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Uint16Array(e), t, r);
  }
}
Float16BufferAttribute.prototype.isFloat16BufferAttribute = !0;
class Float32BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Float32Array(e), t, r);
  }
}
class Float64BufferAttribute extends BufferAttribute {
  constructor(e, t, r) {
    super(new Float64Array(e), t, r);
  }
}
let _id$1 = 0,
  _m1 = new Matrix4(),
  _obj = new Object3D(),
  _offset = new Vector3(),
  _box$1 = new Box3(),
  _boxMorphTargets = new Box3(),
  _vector$8 = new Vector3();
class BufferGeometry extends EventDispatcher {
  constructor() {
    super(),
      Object.defineProperty(this, "id", { value: _id$1++ }),
      (this.uuid = generateUUID()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (
            arrayNeedsUint32(e) ? Uint32BufferAttribute : Uint16BufferAttribute
          )(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return void 0 !== this.attributes[e];
  }
  addGroup(e, t, r = 0) {
    this.groups.push({ start: e, count: t, materialIndex: r });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    let t = this.attributes.position;
    void 0 !== t && (t.applyMatrix4(e), (t.needsUpdate = !0));
    let r = this.attributes.normal;
    if (void 0 !== r) {
      let n = new Matrix3().getNormalMatrix(e);
      r.applyNormalMatrix(n), (r.needsUpdate = !0);
    }
    let a = this.attributes.tangent;
    return (
      void 0 !== a && (a.transformDirection(e), (a.needsUpdate = !0)),
      null !== this.boundingBox && this.computeBoundingBox(),
      null !== this.boundingSphere && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return _m1.makeRotationFromQuaternion(e), this.applyMatrix4(_m1), this;
  }
  rotateX(e) {
    return _m1.makeRotationX(e), this.applyMatrix4(_m1), this;
  }
  rotateY(e) {
    return _m1.makeRotationY(e), this.applyMatrix4(_m1), this;
  }
  rotateZ(e) {
    return _m1.makeRotationZ(e), this.applyMatrix4(_m1), this;
  }
  translate(e, t, r) {
    return _m1.makeTranslation(e, t, r), this.applyMatrix4(_m1), this;
  }
  scale(e, t, r) {
    return _m1.makeScale(e, t, r), this.applyMatrix4(_m1), this;
  }
  lookAt(e) {
    return (
      _obj.lookAt(e), _obj.updateMatrix(), this.applyMatrix4(_obj.matrix), this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(_offset).negate(),
      this.translate(_offset.x, _offset.y, _offset.z),
      this
    );
  }
  setFromPoints(e) {
    let t = [];
    for (let r = 0, n = e.length; r < n; r++) {
      let a = e[r];
      t.push(a.x, a.y, a.z || 0);
    }
    return (
      this.setAttribute("position", new Float32BufferAttribute(t, 3)), this
    );
  }
  computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new Box3());
    let e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new Vector3(-1 / 0, -1 / 0, -1 / 0),
          new Vector3(Infinity, Infinity, Infinity)
        );
      return;
    }
    if (void 0 !== e) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let r = 0, n = t.length; r < n; r++) {
          let a = t[r];
          _box$1.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (_vector$8.addVectors(this.boundingBox.min, _box$1.min),
                this.boundingBox.expandByPoint(_vector$8),
                _vector$8.addVectors(this.boundingBox.max, _box$1.max),
                this.boundingBox.expandByPoint(_vector$8))
              : (this.boundingBox.expandByPoint(_box$1.min),
                this.boundingBox.expandByPoint(_box$1.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    null === this.boundingSphere && (this.boundingSphere = new Sphere());
    let e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new Vector3(), 1 / 0);
      return;
    }
    if (e) {
      let r = this.boundingSphere.center;
      if ((_box$1.setFromBufferAttribute(e), t))
        for (let n = 0, a = t.length; n < a; n++) {
          let s = t[n];
          _boxMorphTargets.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (_vector$8.addVectors(_box$1.min, _boxMorphTargets.min),
                _box$1.expandByPoint(_vector$8),
                _vector$8.addVectors(_box$1.max, _boxMorphTargets.max),
                _box$1.expandByPoint(_vector$8))
              : (_box$1.expandByPoint(_boxMorphTargets.min),
                _box$1.expandByPoint(_boxMorphTargets.max));
        }
      _box$1.getCenter(r);
      let o = 0;
      for (let l = 0, c = e.count; l < c; l++)
        _vector$8.fromBufferAttribute(e, l),
          (o = Math.max(o, r.distanceToSquared(_vector$8)));
      if (t)
        for (let u = 0, h = t.length; u < h; u++) {
          let d = t[u],
            p = this.morphTargetsRelative;
          for (let m = 0, f = d.count; m < f; m++)
            _vector$8.fromBufferAttribute(d, m),
              p && (_offset.fromBufferAttribute(e, m), _vector$8.add(_offset)),
              (o = Math.max(o, r.distanceToSquared(_vector$8)));
        }
      (this.boundingSphere.radius = Math.sqrt(o)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    let e = this.index,
      t = this.attributes;
    if (
      null === e ||
      void 0 === t.position ||
      void 0 === t.normal ||
      void 0 === t.uv
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    let r = e.array,
      n = t.position.array,
      a = t.normal.array,
      s = t.uv.array,
      o = n.length / 3;
    !1 === this.hasAttribute("tangent") &&
      this.setAttribute(
        "tangent",
        new BufferAttribute(new Float32Array(4 * o), 4)
      );
    let l = this.getAttribute("tangent").array,
      c = [],
      u = [];
    for (let h = 0; h < o; h++) (c[h] = new Vector3()), (u[h] = new Vector3());
    let d = new Vector3(),
      p = new Vector3(),
      m = new Vector3(),
      f = new Vector2(),
      g = new Vector2(),
      $ = new Vector2(),
      v = new Vector3(),
      x = new Vector3();
    function y(e, t, r) {
      d.fromArray(n, 3 * e),
        p.fromArray(n, 3 * t),
        m.fromArray(n, 3 * r),
        f.fromArray(s, 2 * e),
        g.fromArray(s, 2 * t),
        $.fromArray(s, 2 * r),
        p.sub(d),
        m.sub(d),
        g.sub(f),
        $.sub(f);
      let a = 1 / (g.x * $.y - $.x * g.y);
      isFinite(a) &&
        (v
          .copy(p)
          .multiplyScalar($.y)
          .addScaledVector(m, -g.y)
          .multiplyScalar(a),
        x
          .copy(m)
          .multiplyScalar(g.x)
          .addScaledVector(p, -$.x)
          .multiplyScalar(a),
        c[e].add(v),
        c[t].add(v),
        c[r].add(v),
        u[e].add(x),
        u[t].add(x),
        u[r].add(x));
    }
    let b = this.groups;
    0 === b.length && (b = [{ start: 0, count: r.length }]);
    for (let _ = 0, S = b.length; _ < S; ++_) {
      let M = b[_],
        w = M.start,
        T = M.count;
      for (let A = w, C = w + T; A < C; A += 3) y(r[A + 0], r[A + 1], r[A + 2]);
    }
    let L = new Vector3(),
      E = new Vector3(),
      P = new Vector3(),
      R = new Vector3();
    function D(e) {
      P.fromArray(a, 3 * e), R.copy(P);
      let t = c[e];
      L.copy(t),
        L.sub(P.multiplyScalar(P.dot(t))).normalize(),
        E.crossVectors(R, t);
      let r = E.dot(u[e]);
      (l[4 * e] = L.x),
        (l[4 * e + 1] = L.y),
        (l[4 * e + 2] = L.z),
        (l[4 * e + 3] = r < 0 ? -1 : 1);
    }
    for (let B = 0, I = b.length; B < I; ++B) {
      let V = b[B],
        F = V.start,
        G = V.count;
      for (let N = F, U = F + G; N < U; N += 3)
        D(r[N + 0]), D(r[N + 1]), D(r[N + 2]);
    }
  }
  computeVertexNormals() {
    let e = this.index,
      t = this.getAttribute("position");
    if (void 0 !== t) {
      let r = this.getAttribute("normal");
      if (void 0 === r)
        (r = new BufferAttribute(new Float32Array(3 * t.count), 3)),
          this.setAttribute("normal", r);
      else for (let n = 0, a = r.count; n < a; n++) r.setXYZ(n, 0, 0, 0);
      let s = new Vector3(),
        o = new Vector3(),
        l = new Vector3(),
        c = new Vector3(),
        u = new Vector3(),
        h = new Vector3(),
        d = new Vector3(),
        p = new Vector3();
      if (e)
        for (let m = 0, f = e.count; m < f; m += 3) {
          let g = e.getX(m + 0),
            $ = e.getX(m + 1),
            v = e.getX(m + 2);
          s.fromBufferAttribute(t, g),
            o.fromBufferAttribute(t, $),
            l.fromBufferAttribute(t, v),
            d.subVectors(l, o),
            p.subVectors(s, o),
            d.cross(p),
            c.fromBufferAttribute(r, g),
            u.fromBufferAttribute(r, $),
            h.fromBufferAttribute(r, v),
            c.add(d),
            u.add(d),
            h.add(d),
            r.setXYZ(g, c.x, c.y, c.z),
            r.setXYZ($, u.x, u.y, u.z),
            r.setXYZ(v, h.x, h.y, h.z);
        }
      else
        for (let x = 0, y = t.count; x < y; x += 3)
          s.fromBufferAttribute(t, x + 0),
            o.fromBufferAttribute(t, x + 1),
            l.fromBufferAttribute(t, x + 2),
            d.subVectors(l, o),
            p.subVectors(s, o),
            d.cross(p),
            r.setXYZ(x + 0, d.x, d.y, d.z),
            r.setXYZ(x + 1, d.x, d.y, d.z),
            r.setXYZ(x + 2, d.x, d.y, d.z);
      this.normalizeNormals(), (r.needsUpdate = !0);
    }
  }
  merge(e, t) {
    if (!(e && e.isBufferGeometry)) {
      console.error(
        "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
        e
      );
      return;
    }
    void 0 === t &&
      ((t = 0),
      console.warn(
        "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
      ));
    let r = this.attributes;
    for (let n in r) {
      if (void 0 === e.attributes[n]) continue;
      let a = r[n],
        s = a.array,
        o = e.attributes[n],
        l = o.array,
        c = o.itemSize * t,
        u = Math.min(l.length, s.length - c);
      for (let h = 0, d = c; h < u; h++, d++) s[d] = l[h];
    }
    return this;
  }
  normalizeNormals() {
    let e = this.attributes.normal;
    for (let t = 0, r = e.count; t < r; t++)
      _vector$8.fromBufferAttribute(e, t),
        _vector$8.normalize(),
        e.setXYZ(t, _vector$8.x, _vector$8.y, _vector$8.z);
  }
  toNonIndexed() {
    function e(e, t) {
      let r = e.array,
        n = e.itemSize,
        a = e.normalized,
        s = new r.constructor(t.length * n),
        o = 0,
        l = 0;
      for (let c = 0, u = t.length; c < u; c++) {
        o = e.isInterleavedBufferAttribute
          ? t[c] * e.data.stride + e.offset
          : t[c] * n;
        for (let h = 0; h < n; h++) s[l++] = r[o++];
      }
      return new BufferAttribute(s, n, a);
    }
    if (null === this.index)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    let t = new BufferGeometry(),
      r = this.index.array,
      n = this.attributes;
    for (let a in n) {
      let s = n[a],
        o = e(s, r);
      t.setAttribute(a, o);
    }
    let l = this.morphAttributes;
    for (let c in l) {
      let u = [],
        h = l[c];
      for (let d = 0, p = h.length; d < p; d++) {
        let m = h[d],
          f = e(m, r);
        u.push(f);
      }
      t.morphAttributes[c] = u;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    let g = this.groups;
    for (let $ = 0, v = g.length; $ < v; $++) {
      let x = g[$];
      t.addGroup(x.start, x.count, x.materialIndex);
    }
    return t;
  }
  toJSON() {
    let e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      "" !== this.name && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      void 0 !== this.parameters)
    ) {
      let t = this.parameters;
      for (let r in t) void 0 !== t[r] && (e[r] = t[r]);
      return e;
    }
    e.data = { attributes: {} };
    let n = this.index;
    null !== n &&
      (e.data.index = {
        type: n.array.constructor.name,
        array: Array.prototype.slice.call(n.array),
      });
    let a = this.attributes;
    for (let s in a) {
      let o = a[s];
      e.data.attributes[s] = o.toJSON(e.data);
    }
    let l = {},
      c = !1;
    for (let u in this.morphAttributes) {
      let h = this.morphAttributes[u],
        d = [];
      for (let p = 0, m = h.length; p < m; p++) {
        let f = h[p];
        d.push(f.toJSON(e.data));
      }
      d.length > 0 && ((l[u] = d), (c = !0));
    }
    c &&
      ((e.data.morphAttributes = l),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    let g = this.groups;
    g.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(g)));
    let $ = this.boundingSphere;
    return (
      null !== $ &&
        (e.data.boundingSphere = {
          center: $.center.toArray(),
          radius: $.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    let t = {};
    this.name = e.name;
    let r = e.index;
    null !== r && this.setIndex(r.clone(t));
    let n = e.attributes;
    for (let a in n) {
      let s = n[a];
      this.setAttribute(a, s.clone(t));
    }
    let o = e.morphAttributes;
    for (let l in o) {
      let c = [],
        u = o[l];
      for (let h = 0, d = u.length; h < d; h++) c.push(u[h].clone(t));
      this.morphAttributes[l] = c;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    let p = e.groups;
    for (let m = 0, f = p.length; m < f; m++) {
      let g = p[m];
      this.addGroup(g.start, g.count, g.materialIndex);
    }
    let $ = e.boundingBox;
    null !== $ && (this.boundingBox = $.clone());
    let v = e.boundingSphere;
    return (
      null !== v && (this.boundingSphere = v.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      void 0 !== e.parameters &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
BufferGeometry.prototype.isBufferGeometry = !0;
let _inverseMatrix$2 = new Matrix4(),
  _ray$2 = new Ray(),
  _sphere$3 = new Sphere(),
  _vA$1 = new Vector3(),
  _vB$1 = new Vector3(),
  _vC$1 = new Vector3(),
  _tempA = new Vector3(),
  _tempB = new Vector3(),
  _tempC = new Vector3(),
  _morphA = new Vector3(),
  _morphB = new Vector3(),
  _morphC = new Vector3(),
  _uvA$1 = new Vector2(),
  _uvB$1 = new Vector2(),
  _uvC$1 = new Vector2(),
  _intersectionPoint = new Vector3(),
  _intersectionPointWorld = new Vector3();
class Mesh extends Object3D {
  constructor(e = new BufferGeometry(), t = new MeshBasicMaterial()) {
    super(),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e) {
    return (
      super.copy(e),
      void 0 !== e.morphTargetInfluences &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      void 0 !== e.morphTargetDictionary &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    let e = this.geometry;
    if (e.isBufferGeometry) {
      let t = e.morphAttributes,
        r = Object.keys(t);
      if (r.length > 0) {
        let n = t[r[0]];
        if (void 0 !== n) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let a = 0, s = n.length; a < s; a++) {
            let o = n[a].name || String(a);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[o] = a);
          }
        }
      }
    } else {
      let l = e.morphTargets;
      void 0 !== l &&
        l.length > 0 &&
        console.error(
          "THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
  }
  raycast(e, t) {
    let r = this.geometry,
      n = this.material,
      a = this.matrixWorld;
    if (
      void 0 === n ||
      (null === r.boundingSphere && r.computeBoundingSphere(),
      _sphere$3.copy(r.boundingSphere),
      _sphere$3.applyMatrix4(a),
      !1 === e.ray.intersectsSphere(_sphere$3)) ||
      (_inverseMatrix$2.copy(a).invert(),
      _ray$2.copy(e.ray).applyMatrix4(_inverseMatrix$2),
      null !== r.boundingBox && !1 === _ray$2.intersectsBox(r.boundingBox))
    )
      return;
    let s;
    if (r.isBufferGeometry) {
      let o = r.index,
        l = r.attributes.position,
        c = r.morphAttributes.position,
        u = r.morphTargetsRelative,
        h = r.attributes.uv,
        d = r.attributes.uv2,
        p = r.groups,
        m = r.drawRange;
      if (null !== o) {
        if (Array.isArray(n))
          for (let f = 0, g = p.length; f < g; f++) {
            let $ = p[f],
              v = n[$.materialIndex],
              x = Math.max($.start, m.start),
              y = Math.min(
                o.count,
                Math.min($.start + $.count, m.start + m.count)
              );
            for (let b = x, _ = y; b < _; b += 3) {
              let S = o.getX(b),
                M = o.getX(b + 1),
                w = o.getX(b + 2);
              (s = checkBufferGeometryIntersection(
                this,
                v,
                e,
                _ray$2,
                l,
                c,
                u,
                h,
                d,
                S,
                M,
                w
              )) &&
                ((s.faceIndex = Math.floor(b / 3)),
                (s.face.materialIndex = $.materialIndex),
                t.push(s));
            }
          }
        else {
          let T = Math.max(0, m.start),
            A = Math.min(o.count, m.start + m.count);
          for (let C = T, L = A; C < L; C += 3) {
            let E = o.getX(C),
              P = o.getX(C + 1),
              R = o.getX(C + 2);
            (s = checkBufferGeometryIntersection(
              this,
              n,
              e,
              _ray$2,
              l,
              c,
              u,
              h,
              d,
              E,
              P,
              R
            )) && ((s.faceIndex = Math.floor(C / 3)), t.push(s));
          }
        }
      } else if (void 0 !== l) {
        if (Array.isArray(n))
          for (let D = 0, B = p.length; D < B; D++) {
            let I = p[D],
              V = n[I.materialIndex],
              F = Math.max(I.start, m.start),
              G = Math.min(
                l.count,
                Math.min(I.start + I.count, m.start + m.count)
              );
            for (let N = F, U = G; N < U; N += 3) {
              let z = N,
                O = N + 1,
                k = N + 2;
              (s = checkBufferGeometryIntersection(
                this,
                V,
                e,
                _ray$2,
                l,
                c,
                u,
                h,
                d,
                z,
                O,
                k
              )) &&
                ((s.faceIndex = Math.floor(N / 3)),
                (s.face.materialIndex = I.materialIndex),
                t.push(s));
            }
          }
        else {
          let W = Math.max(0, m.start),
            H = Math.min(l.count, m.start + m.count);
          for (let j = W, q = H; j < q; j += 3) {
            let X = j,
              Z = j + 1,
              J = j + 2;
            (s = checkBufferGeometryIntersection(
              this,
              n,
              e,
              _ray$2,
              l,
              c,
              u,
              h,
              d,
              X,
              Z,
              J
            )) && ((s.faceIndex = Math.floor(j / 3)), t.push(s));
          }
        }
      }
    } else
      r.isGeometry &&
        console.error(
          "THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
  }
}
function checkIntersection(e, t, r, n, a, s, o, l) {
  let c;
  if (
    null ===
    (c =
      t.side === BackSide
        ? n.intersectTriangle(o, s, a, !0, l)
        : n.intersectTriangle(a, s, o, t.side !== DoubleSide, l))
  )
    return null;
  _intersectionPointWorld.copy(l),
    _intersectionPointWorld.applyMatrix4(e.matrixWorld);
  let u = r.ray.origin.distanceTo(_intersectionPointWorld);
  return u < r.near || u > r.far
    ? null
    : { distance: u, point: _intersectionPointWorld.clone(), object: e };
}
function checkBufferGeometryIntersection(e, t, r, n, a, s, o, l, c, u, h, d) {
  _vA$1.fromBufferAttribute(a, u),
    _vB$1.fromBufferAttribute(a, h),
    _vC$1.fromBufferAttribute(a, d);
  let p = e.morphTargetInfluences;
  if (s && p) {
    _morphA.set(0, 0, 0), _morphB.set(0, 0, 0), _morphC.set(0, 0, 0);
    for (let m = 0, f = s.length; m < f; m++) {
      let g = p[m],
        $ = s[m];
      0 !== g &&
        (_tempA.fromBufferAttribute($, u),
        _tempB.fromBufferAttribute($, h),
        _tempC.fromBufferAttribute($, d),
        o
          ? (_morphA.addScaledVector(_tempA, g),
            _morphB.addScaledVector(_tempB, g),
            _morphC.addScaledVector(_tempC, g))
          : (_morphA.addScaledVector(_tempA.sub(_vA$1), g),
            _morphB.addScaledVector(_tempB.sub(_vB$1), g),
            _morphC.addScaledVector(_tempC.sub(_vC$1), g)));
    }
    _vA$1.add(_morphA), _vB$1.add(_morphB), _vC$1.add(_morphC);
  }
  e.isSkinnedMesh &&
    (e.boneTransform(u, _vA$1),
    e.boneTransform(h, _vB$1),
    e.boneTransform(d, _vC$1));
  let v = checkIntersection(
    e,
    t,
    r,
    n,
    _vA$1,
    _vB$1,
    _vC$1,
    _intersectionPoint
  );
  if (v) {
    l &&
      (_uvA$1.fromBufferAttribute(l, u),
      _uvB$1.fromBufferAttribute(l, h),
      _uvC$1.fromBufferAttribute(l, d),
      (v.uv = Triangle.getUV(
        _intersectionPoint,
        _vA$1,
        _vB$1,
        _vC$1,
        _uvA$1,
        _uvB$1,
        _uvC$1,
        new Vector2()
      ))),
      c &&
        (_uvA$1.fromBufferAttribute(c, u),
        _uvB$1.fromBufferAttribute(c, h),
        _uvC$1.fromBufferAttribute(c, d),
        (v.uv2 = Triangle.getUV(
          _intersectionPoint,
          _vA$1,
          _vB$1,
          _vC$1,
          _uvA$1,
          _uvB$1,
          _uvC$1,
          new Vector2()
        )));
    let x = { a: u, b: h, c: d, normal: new Vector3(), materialIndex: 0 };
    Triangle.getNormal(_vA$1, _vB$1, _vC$1, x.normal), (v.face = x);
  }
  return v;
}
Mesh.prototype.isMesh = !0;
class BoxGeometry extends BufferGeometry {
  constructor(e = 1, t = 1, r = 1, n = 1, a = 1, s = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: r,
        widthSegments: n,
        heightSegments: a,
        depthSegments: s,
      });
    let o = this;
    (n = Math.floor(n)), (a = Math.floor(a)), (s = Math.floor(s));
    let l = [],
      c = [],
      u = [],
      h = [],
      d = 0,
      p = 0;
    function m(e, t, r, n, a, s, m, f, g, $, v) {
      let x = s / g,
        y = m / $,
        b = s / 2,
        _ = m / 2,
        S = f / 2,
        M = g + 1,
        w = $ + 1,
        T = 0,
        A = 0,
        C = new Vector3();
      for (let L = 0; L < w; L++) {
        let E = L * y - _;
        for (let P = 0; P < M; P++) {
          let R = P * x - b;
          (C[e] = R * n),
            (C[t] = E * a),
            (C[r] = S),
            c.push(C.x, C.y, C.z),
            (C[e] = 0),
            (C[t] = 0),
            (C[r] = f > 0 ? 1 : -1),
            u.push(C.x, C.y, C.z),
            h.push(P / g),
            h.push(1 - L / $),
            (T += 1);
        }
      }
      for (let D = 0; D < $; D++)
        for (let B = 0; B < g; B++) {
          let I = d + B + M * D,
            V = d + B + M * (D + 1),
            F = d + (B + 1) + M * (D + 1),
            G = d + (B + 1) + M * D;
          l.push(I, V, G), l.push(V, F, G), (A += 6);
        }
      o.addGroup(p, A, v), (p += A), (d += T);
    }
    m("z", "y", "x", -1, -1, r, t, e, s, a, 0),
      m("z", "y", "x", 1, -1, r, t, -e, s, a, 1),
      m("x", "z", "y", 1, 1, e, r, t, n, s, 2),
      m("x", "z", "y", 1, -1, e, r, -t, n, s, 3),
      m("x", "y", "z", 1, -1, e, t, r, n, a, 4),
      m("x", "y", "z", -1, -1, e, t, -r, n, a, 5),
      this.setIndex(l),
      this.setAttribute("position", new Float32BufferAttribute(c, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(u, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(h, 2));
  }
  static fromJSON(e) {
    return new BoxGeometry(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function cloneUniforms(e) {
  let t = {};
  for (let r in e)
    for (let n in ((t[r] = {}), e[r])) {
      let a = e[r][n];
      a &&
      (a.isColor ||
        a.isMatrix3 ||
        a.isMatrix4 ||
        a.isVector2 ||
        a.isVector3 ||
        a.isVector4 ||
        a.isTexture ||
        a.isQuaternion)
        ? (t[r][n] = a.clone())
        : Array.isArray(a)
        ? (t[r][n] = a.slice())
        : (t[r][n] = a);
    }
  return t;
}
function mergeUniforms(e) {
  let t = {};
  for (let r = 0; r < e.length; r++) {
    let n = cloneUniforms(e[r]);
    for (let a in n) t[a] = n[a];
  }
  return t;
}
let UniformsUtils = { clone: cloneUniforms, merge: mergeUniforms };
var default_vertex =
    "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
  default_fragment =
    "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
class ShaderMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.vertexShader = default_vertex),
      (this.fragmentShader = default_fragment),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      void 0 !== e &&
        (void 0 !== e.attributes &&
          console.error(
            "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
          ),
        this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = cloneUniforms(e.uniforms)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    let t = super.toJSON(e);
    for (let r in ((t.glslVersion = this.glslVersion),
    (t.uniforms = {}),
    this.uniforms)) {
      let n = this.uniforms[r],
        a = n.value;
      a && a.isTexture
        ? (t.uniforms[r] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[r] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[r] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[r] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[r] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[r] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[r] = { type: "m4", value: a.toArray() })
        : (t.uniforms[r] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    let s = {};
    for (let o in this.extensions) !0 === this.extensions[o] && (s[o] = !0);
    return Object.keys(s).length > 0 && (t.extensions = s), t;
  }
}
ShaderMaterial.prototype.isShaderMaterial = !0;
class Camera extends Object3D {
  constructor() {
    super(),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Matrix4()),
      (this.projectionMatrix = new Matrix4()),
      (this.projectionMatrixInverse = new Matrix4());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    let t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
Camera.prototype.isCamera = !0;
class PerspectiveCamera extends Camera {
  constructor(e = 50, t = 1, r = 0.1, n = 2e3) {
    super(),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = r),
      (this.far = n),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    let t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = 2 * RAD2DEG * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    let e = Math.tan(0.5 * DEG2RAD * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return (
      2 * RAD2DEG * Math.atan(Math.tan(0.5 * DEG2RAD * this.fov) / this.zoom)
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, r, n, a, s) {
    (this.aspect = e / t),
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = r),
      (this.view.offsetY = n),
      (this.view.width = a),
      (this.view.height = s),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e = this.near,
      t = (e * Math.tan(0.5 * DEG2RAD * this.fov)) / this.zoom,
      r = 2 * t,
      n = this.aspect * r,
      a = -0.5 * n,
      s = this.view;
    if (null !== this.view && this.view.enabled) {
      let o = s.fullWidth,
        l = s.fullHeight;
      (a += (s.offsetX * n) / o),
        (t -= (s.offsetY * r) / l),
        (n *= s.width / o),
        (r *= s.height / l);
    }
    let c = this.filmOffset;
    0 !== c && (a += (e * c) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(a, a + n, t, t - r, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
PerspectiveCamera.prototype.isPerspectiveCamera = !0;
let fov = 90,
  aspect = 1;
class CubeCamera extends Object3D {
  constructor(e, t, r) {
    if (
      (super(), (this.type = "CubeCamera"), !0 !== r.isWebGLCubeRenderTarget)
    ) {
      console.error(
        "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
      );
      return;
    }
    this.renderTarget = r;
    let n = new PerspectiveCamera(90, 1, e, t);
    (n.layers = this.layers),
      n.up.set(0, -1, 0),
      n.lookAt(new Vector3(1, 0, 0)),
      this.add(n);
    let a = new PerspectiveCamera(90, 1, e, t);
    (a.layers = this.layers),
      a.up.set(0, -1, 0),
      a.lookAt(new Vector3(-1, 0, 0)),
      this.add(a);
    let s = new PerspectiveCamera(90, 1, e, t);
    (s.layers = this.layers),
      s.up.set(0, 0, 1),
      s.lookAt(new Vector3(0, 1, 0)),
      this.add(s);
    let o = new PerspectiveCamera(90, 1, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, -1),
      o.lookAt(new Vector3(0, -1, 0)),
      this.add(o);
    let l = new PerspectiveCamera(90, 1, e, t);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new Vector3(0, 0, 1)),
      this.add(l);
    let c = new PerspectiveCamera(90, 1, e, t);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new Vector3(0, 0, -1)),
      this.add(c);
  }
  update(e, t) {
    null === this.parent && this.updateMatrixWorld();
    let r = this.renderTarget,
      [n, a, s, o, l, c] = this.children,
      u = e.getRenderTarget(),
      h = e.toneMapping,
      d = e.xr.enabled;
    (e.toneMapping = NoToneMapping), (e.xr.enabled = !1);
    let p = r.texture.generateMipmaps;
    (r.texture.generateMipmaps = !1),
      e.setRenderTarget(r, 0),
      e.render(t, n),
      e.setRenderTarget(r, 1),
      e.render(t, a),
      e.setRenderTarget(r, 2),
      e.render(t, s),
      e.setRenderTarget(r, 3),
      e.render(t, o),
      e.setRenderTarget(r, 4),
      e.render(t, l),
      (r.texture.generateMipmaps = p),
      e.setRenderTarget(r, 5),
      e.render(t, c),
      e.setRenderTarget(u),
      (e.toneMapping = h),
      (e.xr.enabled = d),
      (r.texture.needsPMREMUpdate = !0);
  }
}
class CubeTexture extends Texture {
  constructor(e, t, r, n, a, s, o, l, c, u) {
    super(
      (e = void 0 !== e ? e : []),
      (t = void 0 !== t ? t : CubeReflectionMapping),
      r,
      n,
      a,
      s,
      o,
      l,
      c,
      u
    ),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
CubeTexture.prototype.isCubeTexture = !0;
class WebGLCubeRenderTarget extends WebGLRenderTarget {
  constructor(e, t = {}) {
    super(e, e, t);
    let r = { width: e, height: e, depth: 1 },
      n = [r, r, r, r, r, r];
    (this.texture = new CubeTexture(
      n,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        void 0 !== t.generateMipmaps && t.generateMipmaps),
      (this.texture.minFilter =
        void 0 !== t.minFilter ? t.minFilter : LinearFilter);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    let r = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      n = new BoxGeometry(5, 5, 5),
      a = new ShaderMaterial({
        name: "CubemapFromEquirect",
        uniforms: cloneUniforms(r.uniforms),
        vertexShader: r.vertexShader,
        fragmentShader: r.fragmentShader,
        side: BackSide,
        blending: NoBlending,
      });
    a.uniforms.tEquirect.value = t;
    let s = new Mesh(n, a),
      o = t.minFilter;
    t.minFilter === LinearMipmapLinearFilter && (t.minFilter = LinearFilter);
    let l = new CubeCamera(1, 10, this);
    return (
      l.update(e, s),
      (t.minFilter = o),
      s.geometry.dispose(),
      s.material.dispose(),
      this
    );
  }
  clear(e, t, r, n) {
    let a = e.getRenderTarget();
    for (let s = 0; s < 6; s++) e.setRenderTarget(this, s), e.clear(t, r, n);
    e.setRenderTarget(a);
  }
}
WebGLCubeRenderTarget.prototype.isWebGLCubeRenderTarget = !0;
let _vector1 = new Vector3(),
  _vector2 = new Vector3(),
  _normalMatrix = new Matrix3();
class Plane {
  constructor(e = new Vector3(1, 0, 0), t = 0) {
    (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, r, n) {
    return this.normal.set(e, t, r), (this.constant = n), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, r) {
    let n = _vector1
      .subVectors(r, t)
      .cross(_vector2.subVectors(e, t))
      .normalize();
    return this.setFromNormalAndCoplanarPoint(n, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    let e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    let r = e.delta(_vector1),
      n = this.normal.dot(r);
    if (0 === n)
      return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
    let a = -(e.start.dot(this.normal) + this.constant) / n;
    return a < 0 || a > 1 ? null : t.copy(r).multiplyScalar(a).add(e.start);
  }
  intersectsLine(e) {
    let t = this.distanceToPoint(e.start),
      r = this.distanceToPoint(e.end);
    return (t < 0 && r > 0) || (r < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    let r = t || _normalMatrix.getNormalMatrix(e),
      n = this.coplanarPoint(_vector1).applyMatrix4(e),
      a = this.normal.applyMatrix3(r).normalize();
    return (this.constant = -n.dot(a)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
Plane.prototype.isPlane = !0;
let _sphere$2 = new Sphere(),
  _vector$7 = new Vector3();
class Frustum {
  constructor(
    e = new Plane(),
    t = new Plane(),
    r = new Plane(),
    n = new Plane(),
    a = new Plane(),
    s = new Plane()
  ) {
    this.planes = [e, t, r, n, a, s];
  }
  set(e, t, r, n, a, s) {
    let o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(r),
      o[3].copy(n),
      o[4].copy(a),
      o[5].copy(s),
      this
    );
  }
  copy(e) {
    let t = this.planes;
    for (let r = 0; r < 6; r++) t[r].copy(e.planes[r]);
    return this;
  }
  setFromProjectionMatrix(e) {
    let t = this.planes,
      r = e.elements,
      n = r[0],
      a = r[1],
      s = r[2],
      o = r[3],
      l = r[4],
      c = r[5],
      u = r[6],
      h = r[7],
      d = r[8],
      p = r[9],
      m = r[10],
      f = r[11],
      g = r[12],
      $ = r[13],
      v = r[14],
      x = r[15];
    return (
      t[0].setComponents(o - n, h - l, f - d, x - g).normalize(),
      t[1].setComponents(o + n, h + l, f + d, x + g).normalize(),
      t[2].setComponents(o + a, h + c, f + p, x + $).normalize(),
      t[3].setComponents(o - a, h - c, f - p, x - $).normalize(),
      t[4].setComponents(o - s, h - u, f - m, x - v).normalize(),
      t[5].setComponents(o + s, h + u, f + m, x + v).normalize(),
      this
    );
  }
  intersectsObject(e) {
    let t = e.geometry;
    return (
      null === t.boundingSphere && t.computeBoundingSphere(),
      _sphere$2.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(_sphere$2)
    );
  }
  intersectsSprite(e) {
    return (
      _sphere$2.center.set(0, 0, 0),
      (_sphere$2.radius = 0.7071067811865476),
      _sphere$2.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(_sphere$2)
    );
  }
  intersectsSphere(e) {
    let t = this.planes,
      r = e.center,
      n = -e.radius;
    for (let a = 0; a < 6; a++) {
      let s = t[a].distanceToPoint(r);
      if (s < n) return !1;
    }
    return !0;
  }
  intersectsBox(e) {
    let t = this.planes;
    for (let r = 0; r < 6; r++) {
      let n = t[r];
      if (
        ((_vector$7.x = n.normal.x > 0 ? e.max.x : e.min.x),
        (_vector$7.y = n.normal.y > 0 ? e.max.y : e.min.y),
        (_vector$7.z = n.normal.z > 0 ? e.max.z : e.min.z),
        0 > n.distanceToPoint(_vector$7))
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    let t = this.planes;
    for (let r = 0; r < 6; r++) if (0 > t[r].distanceToPoint(e)) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function WebGLAnimation() {
  let e = null,
    t = !1,
    r = null,
    n = null;
  function a(t, s) {
    r(t, s), (n = e.requestAnimationFrame(a));
  }
  return {
    start: function () {
      !0 !== t && null !== r && ((n = e.requestAnimationFrame(a)), (t = !0));
    },
    stop: function () {
      e.cancelAnimationFrame(n), (t = !1);
    },
    setAnimationLoop: function (e) {
      r = e;
    },
    setContext: function (t) {
      e = t;
    },
  };
}
function WebGLAttributes(e, t) {
  let r = t.isWebGL2,
    n = new WeakMap();
  return {
    get: function e(t) {
      return t.isInterleavedBufferAttribute && (t = t.data), n.get(t);
    },
    remove: function t(r) {
      r.isInterleavedBufferAttribute && (r = r.data);
      let a = n.get(r);
      a && (e.deleteBuffer(a.buffer), n.delete(r));
    },
    update: function t(a, s) {
      if (a.isGLBufferAttribute) {
        let o = n.get(a);
        (!o || o.version < a.version) &&
          n.set(a, {
            buffer: a.buffer,
            type: a.type,
            bytesPerElement: a.elementSize,
            version: a.version,
          });
        return;
      }
      a.isInterleavedBufferAttribute && (a = a.data);
      let l = n.get(a);
      void 0 === l
        ? n.set(
            a,
            (function t(n, a) {
              let s = n.array,
                o = n.usage,
                l = e.createBuffer();
              e.bindBuffer(a, l), e.bufferData(a, s, o), n.onUploadCallback();
              let c;
              if (s instanceof Float32Array) c = 5126;
              else if (s instanceof Uint16Array) {
                if (n.isFloat16BufferAttribute) {
                  if (r) c = 5131;
                  else
                    throw Error(
                      "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
                    );
                } else c = 5123;
              } else if (s instanceof Int16Array) c = 5122;
              else if (s instanceof Uint32Array) c = 5125;
              else if (s instanceof Int32Array) c = 5124;
              else if (s instanceof Int8Array) c = 5120;
              else if (s instanceof Uint8Array) c = 5121;
              else if (s instanceof Uint8ClampedArray) c = 5121;
              else
                throw Error(
                  "THREE.WebGLAttributes: Unsupported buffer data format: " + s
                );
              return {
                buffer: l,
                type: c,
                bytesPerElement: s.BYTES_PER_ELEMENT,
                version: n.version,
              };
            })(a, s)
          )
        : l.version < a.version &&
          (!(function t(n, a, s) {
            let o = a.array,
              l = a.updateRange;
            e.bindBuffer(s, n),
              -1 === l.count
                ? e.bufferSubData(s, 0, o)
                : (r
                    ? e.bufferSubData(
                        s,
                        l.offset * o.BYTES_PER_ELEMENT,
                        o,
                        l.offset,
                        l.count
                      )
                    : e.bufferSubData(
                        s,
                        l.offset * o.BYTES_PER_ELEMENT,
                        o.subarray(l.offset, l.offset + l.count)
                      ),
                  (l.count = -1));
          })(l.buffer, a, s),
          (l.version = a.version));
    },
  };
}
class PlaneGeometry extends BufferGeometry {
  constructor(e = 1, t = 1, r = 1, n = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: r,
        heightSegments: n,
      });
    let a = e / 2,
      s = t / 2,
      o = Math.floor(r),
      l = Math.floor(n),
      c = o + 1,
      u = l + 1,
      h = e / o,
      d = t / l,
      p = [],
      m = [],
      f = [],
      g = [];
    for (let $ = 0; $ < u; $++) {
      let v = $ * d - s;
      for (let x = 0; x < c; x++) {
        let y = x * h - a;
        m.push(y, -v, 0), f.push(0, 0, 1), g.push(x / o), g.push(1 - $ / l);
      }
    }
    for (let b = 0; b < l; b++)
      for (let _ = 0; _ < o; _++) {
        let S = _ + c * b,
          M = _ + c * (b + 1),
          w = _ + 1 + c * (b + 1),
          T = _ + 1 + c * b;
        p.push(S, M, T), p.push(M, w, T);
      }
    this.setIndex(p),
      this.setAttribute("position", new Float32BufferAttribute(m, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(f, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(g, 2));
  }
  static fromJSON(e) {
    return new PlaneGeometry(
      e.width,
      e.height,
      e.widthSegments,
      e.heightSegments
    );
  }
}
var alphamap_fragment =
    "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
  alphamap_pars_fragment =
    "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
  alphatest_fragment =
    "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif",
  alphatest_pars_fragment =
    "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
  aomap_fragment =
    "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
  aomap_pars_fragment =
    "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
  begin_vertex = "vec3 transformed = vec3( position );",
  beginnormal_vertex =
    "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
  bsdfs =
    "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif",
  bumpmap_pars_fragment =
    "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
  clipping_planes_fragment =
    "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif",
  clipping_planes_pars_fragment =
    "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
  clipping_planes_pars_vertex =
    "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
  clipping_planes_vertex =
    "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
  color_fragment =
    "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
  color_pars_fragment =
    "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
  color_pars_vertex =
    "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif",
  color_vertex =
    "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif",
  common =
    "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n	return dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}",
  cube_uv_reflection_fragment =
    "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define r0 1.0\n	#define v0 0.339\n	#define m0 - 2.0\n	#define r1 0.8\n	#define v1 0.276\n	#define m1 - 1.0\n	#define r4 0.4\n	#define v4 0.046\n	#define m4 2.0\n	#define r5 0.305\n	#define v5 0.016\n	#define m5 3.0\n	#define r6 0.21\n	#define v6 0.0038\n	#define m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= r1 ) {\n			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n		} else if ( roughness >= r4 ) {\n			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n		} else if ( roughness >= r5 ) {\n			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n		} else if ( roughness >= r6 ) {\n			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
  defaultnormal_vertex =
    "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
  displacementmap_pars_vertex =
    "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
  displacementmap_vertex =
    "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
  emissivemap_fragment =
    "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
  emissivemap_pars_fragment =
    "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
  encodings_fragment = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  encodings_pars_fragment =
    "vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
  envmap_fragment =
    "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
  envmap_common_pars_fragment =
    "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
  envmap_pars_fragment =
    "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
  envmap_pars_vertex =
    "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
  envmap_vertex =
    "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
  fog_vertex = "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
  fog_pars_vertex = "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
  fog_fragment =
    "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
  fog_pars_fragment =
    "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
  gradientmap_pars_fragment =
    "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n	#endif\n}",
  lightmap_fragment =
    "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
  lightmap_pars_fragment =
    "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
  lights_lambert_vertex =
    "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n	vIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointLightInfo( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotLightInfo( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		#ifdef DOUBLE_SIDED\n			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif",
  lights_pars_begin =
    "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#else\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif",
  envmap_physical_pars_fragment =
    "#if defined( USE_ENVMAP )\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n#endif",
  lights_toon_fragment =
    "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
  lights_toon_pars_fragment =
    "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )	(0)",
  lights_phong_fragment =
    "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
  lights_phong_pars_fragment =
    "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)",
  lights_physical_fragment =
    "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	#ifdef SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULARINTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n		#endif\n		#ifdef USE_SPECULARCOLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEENCOLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEENROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n	#endif\n#endif",
  lights_physical_pars_fragment =
    "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
  lights_fragment_begin =
    "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
  lights_fragment_maps =
    "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
  lights_fragment_end =
    "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
  logdepthbuf_fragment =
    "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
  logdepthbuf_pars_fragment =
    "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
  logdepthbuf_pars_vertex =
    "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",
  logdepthbuf_vertex =
    "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",
  map_fragment =
    "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
  map_pars_fragment = "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
  map_particle_fragment =
    "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
  map_particle_pars_fragment =
    "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	uniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
  metalnessmap_fragment =
    "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
  metalnessmap_pars_fragment =
    "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
  morphcolor_vertex =
    "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
  morphnormal_vertex =
    "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif",
  morphtarget_pars_vertex =
    "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif",
  morphtarget_vertex =
    "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif",
  normal_fragment_begin =
    "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * faceDirection;\n			bitangent = bitangent * faceDirection;\n		#endif\n		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n			mat3 vTBN = mat3( tangent, bitangent, normal );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;",
  normal_fragment_maps =
    "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	#ifdef USE_TANGENT\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
  normal_pars_fragment =
    "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
  normal_pars_vertex =
    "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
  normal_vertex =
    "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif",
  normalmap_pars_fragment =
    "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n	}\n#endif",
  clearcoat_normal_fragment_begin =
    "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",
  clearcoat_normal_fragment_maps =
    "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	#ifdef USE_TANGENT\n		clearcoatNormal = normalize( vTBN * clearcoatMapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n	#endif\n#endif",
  clearcoat_pars_fragment =
    "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif",
  output_fragment =
    "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
  packing =
    "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
  premultiplied_alpha_fragment =
    "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
  project_vertex =
    "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
  dithering_fragment =
    "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
  dithering_pars_fragment =
    "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
  roughnessmap_fragment =
    "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
  roughnessmap_pars_fragment =
    "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
  shadowmap_pars_fragment =
    "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",
  shadowmap_pars_vertex =
    "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
  shadowmap_vertex =
    "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		vec4 shadowWorldPosition;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n#endif",
  shadowmask_pars_fragment =
    "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
  skinbase_vertex =
    "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
  skinning_pars_vertex =
    "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	uniform int boneTextureSize;\n	mat4 getBoneMatrix( const in float i ) {\n		float j = i * 4.0;\n		float x = mod( j, float( boneTextureSize ) );\n		float y = floor( j / float( boneTextureSize ) );\n		float dx = 1.0 / float( boneTextureSize );\n		float dy = 1.0 / float( boneTextureSize );\n		y = dy * ( y + 0.5 );\n		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n		mat4 bone = mat4( v1, v2, v3, v4 );\n		return bone;\n	}\n#endif",
  skinning_vertex =
    "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
  skinnormal_vertex =
    "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
  specularmap_fragment =
    "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
  specularmap_pars_fragment =
    "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
  tonemapping_fragment =
    "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
  tonemapping_pars_fragment =
    "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
  transmission_fragment =
    "#ifdef USE_TRANSMISSION\n	float transmissionAlpha = 1.0;\n	float transmissionFactor = transmission;\n	float thicknessFactor = thickness;\n	#ifdef USE_TRANSMISSIONMAP\n		transmissionFactor *= texture2D( transmissionMap, vUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		thicknessFactor *= texture2D( thicknessMap, vUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmission = getIBLVolumeRefraction(\n		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n		attenuationColor, attenuationDistance );\n	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
  transmission_pars_fragment =
    "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		#ifdef texture2DLodEXT\n			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#else\n			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#endif\n	}\n	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( attenuationDistance == 0.0 ) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n	}\n#endif",
  uv_pars_fragment =
    "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n	varying vec2 vUv;\n#endif",
  uv_pars_vertex =
    "#ifdef USE_UV\n	#ifdef UVS_VERTEX_ONLY\n		vec2 vUv;\n	#else\n		varying vec2 vUv;\n	#endif\n	uniform mat3 uvTransform;\n#endif",
  uv_vertex =
    "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
  uv2_pars_fragment =
    "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
  uv2_pars_vertex =
    "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n	uniform mat3 uv2Transform;\n#endif",
  uv2_vertex =
    "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
  worldpos_vertex =
    "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif";
let vertex$g =
    "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
  fragment$g =
    "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n	gl_FragColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n	#endif\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
  vertex$f =
    "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
  fragment$f =
    "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	vec3 vReflect = vWorldDirection;\n	#include <envmap_fragment>\n	gl_FragColor = envColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
  vertex$e =
    "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
  fragment$e =
    "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}",
  vertex$d =
    "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
  fragment$d =
    "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
  vertex$c =
    "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
  fragment$c =
    "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
  vertex$b =
    "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
  fragment$b =
    "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
  vertex$a =
    "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
  fragment$a =
    "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
  vertex$9 =
    "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
  fragment$9 =
    "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	#ifdef DOUBLE_SIDED\n		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n	#else\n		reflectedLight.indirectDiffuse += vIndirectFront;\n	#endif\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
  vertex$8 =
    "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
  fragment$8 =
    "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
  vertex$7 =
    "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
  fragment$7 =
    "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
  vertex$6 =
    "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
  fragment$6 =
    "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
  vertex$5 =
    "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
  fragment$5 =
    "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULARINTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n	#ifdef USE_SPECULARCOLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEENCOLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEENROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
  vertex$4 =
    "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
  fragment$4 =
    "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
  vertex$3 =
    "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
  fragment$3 =
    "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
  vertex$2 =
    "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
  fragment$2 =
    "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
  vertex$1 =
    "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
  fragment$1 =
    "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
  ShaderChunk = {
    alphamap_fragment: alphamap_fragment,
    alphamap_pars_fragment: alphamap_pars_fragment,
    alphatest_fragment: alphatest_fragment,
    alphatest_pars_fragment: alphatest_pars_fragment,
    aomap_fragment: aomap_fragment,
    aomap_pars_fragment: aomap_pars_fragment,
    begin_vertex: begin_vertex,
    beginnormal_vertex: beginnormal_vertex,
    bsdfs: bsdfs,
    bumpmap_pars_fragment: bumpmap_pars_fragment,
    clipping_planes_fragment: clipping_planes_fragment,
    clipping_planes_pars_fragment: clipping_planes_pars_fragment,
    clipping_planes_pars_vertex: clipping_planes_pars_vertex,
    clipping_planes_vertex: clipping_planes_vertex,
    color_fragment: color_fragment,
    color_pars_fragment: color_pars_fragment,
    color_pars_vertex: color_pars_vertex,
    color_vertex: color_vertex,
    common: common,
    cube_uv_reflection_fragment: cube_uv_reflection_fragment,
    defaultnormal_vertex: defaultnormal_vertex,
    displacementmap_pars_vertex: displacementmap_pars_vertex,
    displacementmap_vertex: displacementmap_vertex,
    emissivemap_fragment: emissivemap_fragment,
    emissivemap_pars_fragment: emissivemap_pars_fragment,
    encodings_fragment: encodings_fragment,
    encodings_pars_fragment: encodings_pars_fragment,
    envmap_fragment: envmap_fragment,
    envmap_common_pars_fragment: envmap_common_pars_fragment,
    envmap_pars_fragment: envmap_pars_fragment,
    envmap_pars_vertex: envmap_pars_vertex,
    envmap_physical_pars_fragment: envmap_physical_pars_fragment,
    envmap_vertex: envmap_vertex,
    fog_vertex: fog_vertex,
    fog_pars_vertex: fog_pars_vertex,
    fog_fragment: fog_fragment,
    fog_pars_fragment: fog_pars_fragment,
    gradientmap_pars_fragment: gradientmap_pars_fragment,
    lightmap_fragment: lightmap_fragment,
    lightmap_pars_fragment: lightmap_pars_fragment,
    lights_lambert_vertex: lights_lambert_vertex,
    lights_pars_begin: lights_pars_begin,
    lights_toon_fragment: lights_toon_fragment,
    lights_toon_pars_fragment: lights_toon_pars_fragment,
    lights_phong_fragment: lights_phong_fragment,
    lights_phong_pars_fragment: lights_phong_pars_fragment,
    lights_physical_fragment: lights_physical_fragment,
    lights_physical_pars_fragment: lights_physical_pars_fragment,
    lights_fragment_begin: lights_fragment_begin,
    lights_fragment_maps: lights_fragment_maps,
    lights_fragment_end: lights_fragment_end,
    logdepthbuf_fragment: logdepthbuf_fragment,
    logdepthbuf_pars_fragment: logdepthbuf_pars_fragment,
    logdepthbuf_pars_vertex: logdepthbuf_pars_vertex,
    logdepthbuf_vertex: logdepthbuf_vertex,
    map_fragment: map_fragment,
    map_pars_fragment: map_pars_fragment,
    map_particle_fragment: map_particle_fragment,
    map_particle_pars_fragment: map_particle_pars_fragment,
    metalnessmap_fragment: metalnessmap_fragment,
    metalnessmap_pars_fragment: metalnessmap_pars_fragment,
    morphcolor_vertex: morphcolor_vertex,
    morphnormal_vertex: morphnormal_vertex,
    morphtarget_pars_vertex: morphtarget_pars_vertex,
    morphtarget_vertex: morphtarget_vertex,
    normal_fragment_begin: normal_fragment_begin,
    normal_fragment_maps: normal_fragment_maps,
    normal_pars_fragment: normal_pars_fragment,
    normal_pars_vertex: normal_pars_vertex,
    normal_vertex: normal_vertex,
    normalmap_pars_fragment: normalmap_pars_fragment,
    clearcoat_normal_fragment_begin: clearcoat_normal_fragment_begin,
    clearcoat_normal_fragment_maps: clearcoat_normal_fragment_maps,
    clearcoat_pars_fragment: clearcoat_pars_fragment,
    output_fragment: output_fragment,
    packing: packing,
    premultiplied_alpha_fragment: premultiplied_alpha_fragment,
    project_vertex: project_vertex,
    dithering_fragment: dithering_fragment,
    dithering_pars_fragment: dithering_pars_fragment,
    roughnessmap_fragment: roughnessmap_fragment,
    roughnessmap_pars_fragment: roughnessmap_pars_fragment,
    shadowmap_pars_fragment: shadowmap_pars_fragment,
    shadowmap_pars_vertex: shadowmap_pars_vertex,
    shadowmap_vertex: shadowmap_vertex,
    shadowmask_pars_fragment: shadowmask_pars_fragment,
    skinbase_vertex: skinbase_vertex,
    skinning_pars_vertex: skinning_pars_vertex,
    skinning_vertex: skinning_vertex,
    skinnormal_vertex: skinnormal_vertex,
    specularmap_fragment: specularmap_fragment,
    specularmap_pars_fragment: specularmap_pars_fragment,
    tonemapping_fragment: tonemapping_fragment,
    tonemapping_pars_fragment: tonemapping_pars_fragment,
    transmission_fragment: transmission_fragment,
    transmission_pars_fragment: transmission_pars_fragment,
    uv_pars_fragment: uv_pars_fragment,
    uv_pars_vertex: uv_pars_vertex,
    uv_vertex: uv_vertex,
    uv2_pars_fragment: uv2_pars_fragment,
    uv2_pars_vertex: uv2_pars_vertex,
    uv2_vertex: uv2_vertex,
    worldpos_vertex: worldpos_vertex,
    background_vert:
      "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    background_frag:
      "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n	gl_FragColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n	#endif\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
    cube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
    cube_frag:
      "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	vec3 vReflect = vWorldDirection;\n	#include <envmap_fragment>\n	gl_FragColor = envColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
    depth_vert:
      "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
    depth_frag:
      "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}",
    distanceRGBA_vert:
      "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
    distanceRGBA_frag:
      "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
    equirect_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
    equirect_frag:
      "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
    linedashed_vert:
      "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
    linedashed_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
    meshbasic_vert:
      "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
    meshbasic_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshlambert_vert:
      "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
    meshlambert_frag:
      "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	#ifdef DOUBLE_SIDED\n		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n	#else\n		reflectedLight.indirectDiffuse += vIndirectFront;\n	#endif\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshmatcap_vert:
      "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
    meshmatcap_frag:
      "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshnormal_vert:
      "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
    meshnormal_frag:
      "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
    meshphong_vert:
      "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
    meshphong_frag:
      "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshphysical_vert:
      "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
    meshphysical_frag:
      "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULARINTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n	#ifdef USE_SPECULARCOLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEENCOLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEENROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    meshtoon_vert:
      "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
    meshtoon_frag:
      "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
    points_vert:
      "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
    points_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
    shadow_vert:
      "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
    shadow_frag:
      "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
    sprite_vert:
      "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
    sprite_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
  },
  UniformsLib = {
    common: {
      diffuse: { value: new Color(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new Matrix3() },
      uv2Transform: { value: new Matrix3() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new Vector2(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Color(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotShadowMap: { value: [] },
      spotShadowMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Color(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Matrix3() },
    },
    sprite: {
      diffuse: { value: new Color(16777215) },
      opacity: { value: 1 },
      center: { value: new Vector2(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Matrix3() },
    },
  },
  ShaderLib = {
    basic: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.specularmap,
        UniformsLib.envmap,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.fog,
      ]),
      vertexShader: ShaderChunk.meshbasic_vert,
      fragmentShader: ShaderChunk.meshbasic_frag,
    },
    lambert: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.specularmap,
        UniformsLib.envmap,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.emissivemap,
        UniformsLib.fog,
        UniformsLib.lights,
        { emissive: { value: new Color(0) } },
      ]),
      vertexShader: ShaderChunk.meshlambert_vert,
      fragmentShader: ShaderChunk.meshlambert_frag,
    },
    phong: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.specularmap,
        UniformsLib.envmap,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.emissivemap,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.fog,
        UniformsLib.lights,
        {
          emissive: { value: new Color(0) },
          specular: { value: new Color(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: ShaderChunk.meshphong_vert,
      fragmentShader: ShaderChunk.meshphong_frag,
    },
    standard: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.envmap,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.emissivemap,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.roughnessmap,
        UniformsLib.metalnessmap,
        UniformsLib.fog,
        UniformsLib.lights,
        {
          emissive: { value: new Color(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: ShaderChunk.meshphysical_vert,
      fragmentShader: ShaderChunk.meshphysical_frag,
    },
    toon: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.aomap,
        UniformsLib.lightmap,
        UniformsLib.emissivemap,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.gradientmap,
        UniformsLib.fog,
        UniformsLib.lights,
        { emissive: { value: new Color(0) } },
      ]),
      vertexShader: ShaderChunk.meshtoon_vert,
      fragmentShader: ShaderChunk.meshtoon_frag,
    },
    matcap: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        UniformsLib.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: ShaderChunk.meshmatcap_vert,
      fragmentShader: ShaderChunk.meshmatcap_frag,
    },
    points: {
      uniforms: mergeUniforms([UniformsLib.points, UniformsLib.fog]),
      vertexShader: ShaderChunk.points_vert,
      fragmentShader: ShaderChunk.points_frag,
    },
    dashed: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: ShaderChunk.linedashed_vert,
      fragmentShader: ShaderChunk.linedashed_frag,
    },
    depth: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.displacementmap,
      ]),
      vertexShader: ShaderChunk.depth_vert,
      fragmentShader: ShaderChunk.depth_frag,
    },
    normal: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.bumpmap,
        UniformsLib.normalmap,
        UniformsLib.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: ShaderChunk.meshnormal_vert,
      fragmentShader: ShaderChunk.meshnormal_frag,
    },
    sprite: {
      uniforms: mergeUniforms([UniformsLib.sprite, UniformsLib.fog]),
      vertexShader: ShaderChunk.sprite_vert,
      fragmentShader: ShaderChunk.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new Matrix3() }, t2D: { value: null } },
      vertexShader: ShaderChunk.background_vert,
      fragmentShader: ShaderChunk.background_frag,
    },
    cube: {
      uniforms: mergeUniforms([UniformsLib.envmap, { opacity: { value: 1 } }]),
      vertexShader: ShaderChunk.cube_vert,
      fragmentShader: ShaderChunk.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: ShaderChunk.equirect_vert,
      fragmentShader: ShaderChunk.equirect_frag,
    },
    distanceRGBA: {
      uniforms: mergeUniforms([
        UniformsLib.common,
        UniformsLib.displacementmap,
        {
          referencePosition: { value: new Vector3() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: ShaderChunk.distanceRGBA_vert,
      fragmentShader: ShaderChunk.distanceRGBA_frag,
    },
    shadow: {
      uniforms: mergeUniforms([
        UniformsLib.lights,
        UniformsLib.fog,
        { color: { value: new Color(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: ShaderChunk.shadow_vert,
      fragmentShader: ShaderChunk.shadow_frag,
    },
  };
function WebGLBackground(e, t, r, n, a, s) {
  let o = new Color(0),
    l = !0 === a ? 0 : 1,
    c,
    u,
    h = null,
    d = 0,
    p = null;
  function m(e, t) {
    r.buffers.color.setClear(e.r, e.g, e.b, t, s);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (e, t = 1) {
      o.set(e), m(o, (l = t));
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (e) {
      m(o, (l = e));
    },
    render: function r(a, s) {
      let f = !1,
        g = !0 === s.isScene ? s.background : null;
      g && g.isTexture && (g = t.get(g));
      let $ = e.xr,
        v = $.getSession && $.getSession();
      v && "additive" === v.environmentBlendMode && (g = null),
        null === g ? m(o, l) : g && g.isColor && (m(g, 1), (f = !0)),
        (e.autoClear || f) &&
          e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        g && (g.isCubeTexture || g.mapping === CubeUVReflectionMapping)
          ? (void 0 === u &&
              ((u = new Mesh(
                new BoxGeometry(1, 1, 1),
                new ShaderMaterial({
                  name: "BackgroundCubeMaterial",
                  uniforms: cloneUniforms(ShaderLib.cube.uniforms),
                  vertexShader: ShaderLib.cube.vertexShader,
                  fragmentShader: ShaderLib.cube.fragmentShader,
                  side: BackSide,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1,
                })
              )).geometry.deleteAttribute("normal"),
              u.geometry.deleteAttribute("uv"),
              (u.onBeforeRender = function (e, t, r) {
                this.matrixWorld.copyPosition(r.matrixWorld);
              }),
              Object.defineProperty(u.material, "envMap", {
                get: function () {
                  return this.uniforms.envMap.value;
                },
              }),
              n.update(u)),
            (u.material.uniforms.envMap.value = g),
            (u.material.uniforms.flipEnvMap.value =
              g.isCubeTexture && !1 === g.isRenderTargetTexture ? -1 : 1),
            (h !== g || d !== g.version || p !== e.toneMapping) &&
              ((u.material.needsUpdate = !0),
              (h = g),
              (d = g.version),
              (p = e.toneMapping)),
            u.layers.enableAll(),
            a.unshift(u, u.geometry, u.material, 0, 0, null))
          : g &&
            g.isTexture &&
            (void 0 === c &&
              ((c = new Mesh(
                new PlaneGeometry(2, 2),
                new ShaderMaterial({
                  name: "BackgroundMaterial",
                  uniforms: cloneUniforms(ShaderLib.background.uniforms),
                  vertexShader: ShaderLib.background.vertexShader,
                  fragmentShader: ShaderLib.background.fragmentShader,
                  side: FrontSide,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1,
                })
              )).geometry.deleteAttribute("normal"),
              Object.defineProperty(c.material, "map", {
                get: function () {
                  return this.uniforms.t2D.value;
                },
              }),
              n.update(c)),
            (c.material.uniforms.t2D.value = g),
            !0 === g.matrixAutoUpdate && g.updateMatrix(),
            c.material.uniforms.uvTransform.value.copy(g.matrix),
            (h !== g || d !== g.version || p !== e.toneMapping) &&
              ((c.material.needsUpdate = !0),
              (h = g),
              (d = g.version),
              (p = e.toneMapping)),
            c.layers.enableAll(),
            a.unshift(c, c.geometry, c.material, 0, 0, null));
    },
  };
}
function WebGLBindingStates(e, t, r, n) {
  let a = e.getParameter(34921),
    s = n.isWebGL2 ? null : t.get("OES_vertex_array_object"),
    o = n.isWebGL2 || null !== s,
    l = {},
    c = m(null),
    u = c,
    h = !1;
  function d(t) {
    return n.isWebGL2 ? e.bindVertexArray(t) : s.bindVertexArrayOES(t);
  }
  function p(t) {
    return n.isWebGL2 ? e.deleteVertexArray(t) : s.deleteVertexArrayOES(t);
  }
  function m(e) {
    let t = [],
      r = [],
      n = [];
    for (let s = 0; s < a; s++) (t[s] = 0), (r[s] = 0), (n[s] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: t,
      enabledAttributes: r,
      attributeDivisors: n,
      object: e,
      attributes: {},
      index: null,
    };
  }
  function f() {
    let e = u.newAttributes;
    for (let t = 0, r = e.length; t < r; t++) e[t] = 0;
  }
  function g(e) {
    $(e, 0);
  }
  function $(r, a) {
    let s = u.newAttributes,
      o = u.enabledAttributes,
      l = u.attributeDivisors;
    if (
      ((s[r] = 1),
      0 === o[r] && (e.enableVertexAttribArray(r), (o[r] = 1)),
      l[r] !== a)
    ) {
      let c = n.isWebGL2 ? e : t.get("ANGLE_instanced_arrays");
      c[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](r, a),
        (l[r] = a);
    }
  }
  function v() {
    let t = u.newAttributes,
      r = u.enabledAttributes;
    for (let n = 0, a = r.length; n < a; n++)
      r[n] !== t[n] && (e.disableVertexAttribArray(n), (r[n] = 0));
  }
  function x(t, r, a, s, o, l) {
    !0 === n.isWebGL2 && (5124 === a || 5125 === a)
      ? e.vertexAttribIPointer(t, r, a, o, l)
      : e.vertexAttribPointer(t, r, a, s, o, l);
  }
  function y() {
    b(), (h = !0), u !== c && d((u = c).object);
  }
  function b() {
    (c.geometry = null), (c.program = null), (c.wireframe = !1);
  }
  return {
    setup: function a(c, p, y, b, _) {
      let S = !1;
      if (o) {
        let M = (function t(r, a, o) {
          let c = !0 === o.wireframe,
            u = l[r.id];
          void 0 === u && ((u = {}), (l[r.id] = u));
          let h = u[a.id];
          void 0 === h && ((h = {}), (u[a.id] = h));
          let d = h[c];
          return (
            void 0 === d &&
              ((d = m(
                n.isWebGL2 ? e.createVertexArray() : s.createVertexArrayOES()
              )),
              (h[c] = d)),
            d
          );
        })(b, y, p);
        u !== M && d((u = M).object),
          (S = (function e(t, r, n, a) {
            let s = u.attributes,
              o = r.attributes,
              l = 0,
              c = n.getAttributes();
            for (let h in c) {
              let d = c[h];
              if (d.location >= 0) {
                let p = s[h],
                  m = o[h];
                if (
                  (void 0 === m &&
                    ("instanceMatrix" === h &&
                      t.instanceMatrix &&
                      (m = t.instanceMatrix),
                    "instanceColor" === h &&
                      t.instanceColor &&
                      (m = t.instanceColor)),
                  void 0 === p || p.attribute !== m || (m && p.data !== m.data))
                )
                  return !0;
                l++;
              }
            }
            return u.attributesNum !== l || u.index !== a;
          })(c, b, y, _)) &&
            (function e(t, r, n, a) {
              let s = {},
                o = r.attributes,
                l = 0,
                c = n.getAttributes();
              for (let h in c) {
                let d = c[h];
                if (d.location >= 0) {
                  let p = o[h];
                  void 0 === p &&
                    ("instanceMatrix" === h &&
                      t.instanceMatrix &&
                      (p = t.instanceMatrix),
                    "instanceColor" === h &&
                      t.instanceColor &&
                      (p = t.instanceColor));
                  let m = {};
                  (m.attribute = p),
                    p && p.data && (m.data = p.data),
                    (s[h] = m),
                    l++;
                }
              }
              (u.attributes = s), (u.attributesNum = l), (u.index = a);
            })(c, b, y, _);
      } else {
        let w = !0 === p.wireframe;
        (u.geometry !== b.id || u.program !== y.id || u.wireframe !== w) &&
          ((u.geometry = b.id),
          (u.program = y.id),
          (u.wireframe = w),
          (S = !0));
      }
      null !== _ && r.update(_, 34963),
        (S || h) &&
          ((h = !1),
          (function a(s, o, l, c) {
            if (
              !1 === n.isWebGL2 &&
              (s.isInstancedMesh || c.isInstancedBufferGeometry) &&
              null === t.get("ANGLE_instanced_arrays")
            )
              return;
            f();
            let u = c.attributes,
              h = l.getAttributes(),
              d = o.defaultAttributeValues;
            for (let p in h) {
              let m = h[p];
              if (m.location >= 0) {
                let y = u[p];
                if (
                  (void 0 === y &&
                    ("instanceMatrix" === p &&
                      s.instanceMatrix &&
                      (y = s.instanceMatrix),
                    "instanceColor" === p &&
                      s.instanceColor &&
                      (y = s.instanceColor)),
                  void 0 !== y)
                ) {
                  let b = y.normalized,
                    _ = y.itemSize,
                    S = r.get(y);
                  if (void 0 === S) continue;
                  let M = S.buffer,
                    w = S.type,
                    T = S.bytesPerElement;
                  if (y.isInterleavedBufferAttribute) {
                    let A = y.data,
                      C = A.stride,
                      L = y.offset;
                    if (A.isInstancedInterleavedBuffer) {
                      for (let E = 0; E < m.locationSize; E++)
                        $(m.location + E, A.meshPerAttribute);
                      !0 !== s.isInstancedMesh &&
                        void 0 === c._maxInstanceCount &&
                        (c._maxInstanceCount = A.meshPerAttribute * A.count);
                    } else
                      for (let P = 0; P < m.locationSize; P++)
                        g(m.location + P);
                    e.bindBuffer(34962, M);
                    for (let R = 0; R < m.locationSize; R++)
                      x(
                        m.location + R,
                        _ / m.locationSize,
                        w,
                        b,
                        C * T,
                        (L + (_ / m.locationSize) * R) * T
                      );
                  } else {
                    if (y.isInstancedBufferAttribute) {
                      for (let D = 0; D < m.locationSize; D++)
                        $(m.location + D, y.meshPerAttribute);
                      !0 !== s.isInstancedMesh &&
                        void 0 === c._maxInstanceCount &&
                        (c._maxInstanceCount = y.meshPerAttribute * y.count);
                    } else
                      for (let B = 0; B < m.locationSize; B++)
                        g(m.location + B);
                    e.bindBuffer(34962, M);
                    for (let I = 0; I < m.locationSize; I++)
                      x(
                        m.location + I,
                        _ / m.locationSize,
                        w,
                        b,
                        _ * T,
                        (_ / m.locationSize) * I * T
                      );
                  }
                } else if (void 0 !== d) {
                  let V = d[p];
                  if (void 0 !== V)
                    switch (V.length) {
                      case 2:
                        e.vertexAttrib2fv(m.location, V);
                        break;
                      case 3:
                        e.vertexAttrib3fv(m.location, V);
                        break;
                      case 4:
                        e.vertexAttrib4fv(m.location, V);
                        break;
                      default:
                        e.vertexAttrib1fv(m.location, V);
                    }
                }
              }
            }
            v();
          })(c, p, y, b),
          null !== _ && e.bindBuffer(34963, r.get(_).buffer));
    },
    reset: y,
    resetDefaultState: b,
    dispose: function e() {
      for (let t in (y(), l)) {
        let r = l[t];
        for (let n in r) {
          let a = r[n];
          for (let s in a) p(a[s].object), delete a[s];
          delete r[n];
        }
        delete l[t];
      }
    },
    releaseStatesOfGeometry: function e(t) {
      if (void 0 === l[t.id]) return;
      let r = l[t.id];
      for (let n in r) {
        let a = r[n];
        for (let s in a) p(a[s].object), delete a[s];
        delete r[n];
      }
      delete l[t.id];
    },
    releaseStatesOfProgram: function e(t) {
      for (let r in l) {
        let n = l[r];
        if (void 0 === n[t.id]) continue;
        let a = n[t.id];
        for (let s in a) p(a[s].object), delete a[s];
        delete n[t.id];
      }
    },
    initAttributes: f,
    enableAttribute: g,
    disableUnusedAttributes: v,
  };
}
function WebGLBufferRenderer(e, t, r, n) {
  let a = n.isWebGL2,
    s;
  function o(e) {
    s = e;
  }
  (this.setMode = o),
    (this.render = function t(n, a) {
      e.drawArrays(s, n, a), r.update(a, s, 1);
    }),
    (this.renderInstances = function n(o, l, c) {
      if (0 === c) return;
      let u, h;
      if (a) (u = e), (h = "drawArraysInstanced");
      else if (
        ((u = t.get("ANGLE_instanced_arrays")),
        (h = "drawArraysInstancedANGLE"),
        null === u)
      ) {
        console.error(
          "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        );
        return;
      }
      u[h](s, o, l, c), r.update(l, s, c);
    });
}
function WebGLCapabilities(e, t, r) {
  let n;
  function a(t) {
    if ("highp" === t) {
      if (
        e.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        e.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      t = "mediump";
    }
    return "mediump" === t &&
      e.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      e.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  let s =
      ("undefined" != typeof WebGL2RenderingContext &&
        e instanceof WebGL2RenderingContext) ||
      ("undefined" != typeof WebGL2ComputeRenderingContext &&
        e instanceof WebGL2ComputeRenderingContext),
    o = void 0 !== r.precision ? r.precision : "highp",
    l = a(o);
  l !== o &&
    (console.warn(
      "THREE.WebGLRenderer:",
      o,
      "not supported, using",
      l,
      "instead."
    ),
    (o = l));
  let c = s || t.has("WEBGL_draw_buffers"),
    u = !0 === r.logarithmicDepthBuffer,
    h = e.getParameter(34930),
    d = e.getParameter(35660),
    p = e.getParameter(3379),
    m = e.getParameter(34076),
    f = e.getParameter(34921),
    g = e.getParameter(36347),
    $ = e.getParameter(36348),
    v = e.getParameter(36349),
    x = d > 0,
    y = s || t.has("OES_texture_float"),
    b = s ? e.getParameter(36183) : 0;
  return {
    isWebGL2: s,
    drawBuffers: c,
    getMaxAnisotropy: function r() {
      if (void 0 !== n) return n;
      if (!0 === t.has("EXT_texture_filter_anisotropic")) {
        let a = t.get("EXT_texture_filter_anisotropic");
        n = e.getParameter(a.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else n = 0;
      return n;
    },
    getMaxPrecision: a,
    precision: o,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: d,
    maxTextureSize: p,
    maxCubemapSize: m,
    maxAttributes: f,
    maxVertexUniforms: g,
    maxVaryings: $,
    maxFragmentUniforms: v,
    vertexTextures: x,
    floatFragmentTextures: y,
    floatVertexTextures: x && y,
    maxSamples: b,
  };
}
function WebGLClipping(e) {
  let t = this,
    r = null,
    n = 0,
    a = !1,
    s = !1,
    o = new Plane(),
    l = new Matrix3(),
    c = { value: null, needsUpdate: !1 };
  function u() {
    c.value !== r && ((c.value = r), (c.needsUpdate = n > 0)),
      (t.numPlanes = n),
      (t.numIntersection = 0);
  }
  function h(e, r, n, a) {
    let s = null !== e ? e.length : 0,
      u = null;
    if (0 !== s) {
      if (((u = c.value), !0 !== a || null === u)) {
        let h = n + 4 * s,
          d = r.matrixWorldInverse;
        l.getNormalMatrix(d),
          (null === u || u.length < h) && (u = new Float32Array(h));
        for (let p = 0, m = n; p !== s; ++p, m += 4)
          o.copy(e[p]).applyMatrix4(d, l),
            o.normal.toArray(u, m),
            (u[m + 3] = o.constant);
      }
      (c.value = u), (c.needsUpdate = !0);
    }
    return (t.numPlanes = s), (t.numIntersection = 0), u;
  }
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (e, t, s) {
      let o = 0 !== e.length || t || 0 !== n || a;
      return (a = t), (r = h(e, s, 0)), (n = e.length), o;
    }),
    (this.beginShadows = function () {
      (s = !0), h(null);
    }),
    (this.endShadows = function () {
      (s = !1), u();
    }),
    (this.setState = function (t, o, l) {
      let d = t.clippingPlanes,
        p = t.clipIntersection,
        m = t.clipShadows,
        f = e.get(t);
      if (a && null !== d && 0 !== d.length && (!s || m)) {
        let g = s ? 0 : n,
          $ = 4 * g,
          v = f.clippingState || null;
        (c.value = v), (v = h(d, o, $, l));
        for (let x = 0; x !== $; ++x) v[x] = r[x];
        (f.clippingState = v),
          (this.numIntersection = p ? this.numPlanes : 0),
          (this.numPlanes += g);
      } else s ? h(null) : u();
    });
}
function WebGLCubeMaps(e) {
  let t = new WeakMap();
  function r(e, t) {
    return (
      t === EquirectangularReflectionMapping
        ? (e.mapping = CubeReflectionMapping)
        : t === EquirectangularRefractionMapping &&
          (e.mapping = CubeRefractionMapping),
      e
    );
  }
  function n(e) {
    let r = e.target;
    r.removeEventListener("dispose", n);
    let a = t.get(r);
    void 0 !== a && (t.delete(r), a.dispose());
  }
  return {
    get: function a(s) {
      if (s && s.isTexture && !1 === s.isRenderTargetTexture) {
        let o = s.mapping;
        if (
          o === EquirectangularReflectionMapping ||
          o === EquirectangularRefractionMapping
        ) {
          if (t.has(s)) {
            let l = t.get(s).texture;
            return r(l, s.mapping);
          }
          {
            let c = s.image;
            if (!c || !(c.height > 0)) return null;
            {
              let u = new WebGLCubeRenderTarget(c.height / 2);
              return (
                u.fromEquirectangularTexture(e, s),
                t.set(s, u),
                s.addEventListener("dispose", n),
                r(u.texture, s.mapping)
              );
            }
          }
        }
      }
      return s;
    },
    dispose: function e() {
      t = new WeakMap();
    },
  };
}
ShaderLib.physical = {
  uniforms: mergeUniforms([
    ShaderLib.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Vector2(1, 1) },
      clearcoatNormalMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new Color(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new Vector2() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Color(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new Color(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: ShaderChunk.meshphysical_vert,
  fragmentShader: ShaderChunk.meshphysical_frag,
};
class OrthographicCamera extends Camera {
  constructor(e = -1, t = 1, r = 1, n = -1, a = 0.1, s = 2e3) {
    super(),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = r),
      (this.bottom = n),
      (this.near = a),
      (this.far = s),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, r, n, a, s) {
    null === this.view &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = r),
      (this.view.offsetY = n),
      (this.view.width = a),
      (this.view.height = s),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      r = (this.right + this.left) / 2,
      n = (this.top + this.bottom) / 2,
      a = r - e,
      s = r + e,
      o = n + t,
      l = n - t;
    if (null !== this.view && this.view.enabled) {
      let c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (a += c * this.view.offsetX),
        (s = a + c * this.view.width),
        (o -= u * this.view.offsetY),
        (l = o - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(a, s, o, l, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
OrthographicCamera.prototype.isOrthographicCamera = !0;
let LOD_MIN = 4,
  EXTRA_LOD_SIGMA = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  MAX_SAMPLES = 20,
  _flatCamera = new OrthographicCamera(),
  _clearColor = new Color(),
  _oldTarget = null,
  PHI = (1 + Math.sqrt(5)) / 2,
  INV_PHI = 1 / PHI,
  _axisDirections = [
    new Vector3(1, 1, 1),
    new Vector3(-1, 1, 1),
    new Vector3(1, 1, -1),
    new Vector3(-1, 1, -1),
    new Vector3(0, PHI, INV_PHI),
    new Vector3(0, PHI, -INV_PHI),
    new Vector3(INV_PHI, 0, PHI),
    new Vector3(-INV_PHI, 0, PHI),
    new Vector3(PHI, INV_PHI, 0),
    new Vector3(-PHI, INV_PHI, 0),
  ];
class PMREMGenerator {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, r = 0.1, n = 100) {
    (_oldTarget = this._renderer.getRenderTarget()), this._setSize(256);
    let a = this._allocateTargets();
    return (
      (a.depthBuffer = !0),
      this._sceneToCubeUV(e, r, n, a),
      t > 0 && this._blur(a, 0, 0, t),
      this._applyPMREM(a),
      this._cleanup(a),
      a
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    null === this._cubemapMaterial &&
      ((this._cubemapMaterial = _getCubemapMaterial()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    null === this._equirectMaterial &&
      ((this._equirectMaterial = _getEquirectMaterial()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
      null !== this._equirectMaterial && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    null !== this._blurMaterial && this._blurMaterial.dispose(),
      null !== this._pingPongRenderTarget &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(_oldTarget),
      (e.scissorTest = !1),
      _setViewport(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === CubeReflectionMapping || e.mapping === CubeRefractionMapping
      ? this._setSize(
          0 === e.image.length ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (_oldTarget = this._renderer.getRenderTarget());
    let r = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, r), this._applyPMREM(r), this._cleanup(r), r
    );
  }
  _allocateTargets() {
    let e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      r = {
        magFilter: LinearFilter,
        minFilter: LinearFilter,
        generateMipmaps: !1,
        type: HalfFloatType,
        format: RGBAFormat,
        encoding: LinearEncoding,
        depthBuffer: !1,
      },
      n = _createRenderTarget(e, t, r);
    if (
      null === this._pingPongRenderTarget ||
      this._pingPongRenderTarget.width !== e
    ) {
      null !== this._pingPongRenderTarget && this._dispose(),
        (this._pingPongRenderTarget = _createRenderTarget(e, t, r));
      let { _lodMax: a } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = _createPlanes(a)),
        (this._blurMaterial = _getBlurShader(a, e, t));
    }
    return n;
  }
  _compileMaterial(e) {
    let t = new Mesh(this._lodPlanes[0], e);
    this._renderer.compile(t, _flatCamera);
  }
  _sceneToCubeUV(e, t, r, n) {
    let a = new PerspectiveCamera(90, 1, t, r),
      s = [1, -1, 1, 1, 1, 1],
      o = [1, 1, 1, -1, -1, -1],
      l = this._renderer,
      c = l.autoClear,
      u = l.toneMapping;
    l.getClearColor(_clearColor),
      (l.toneMapping = NoToneMapping),
      (l.autoClear = !1);
    let h = new MeshBasicMaterial({
        name: "PMREM.Background",
        side: BackSide,
        depthWrite: !1,
        depthTest: !1,
      }),
      d = new Mesh(new BoxGeometry(), h),
      p = !1,
      m = e.background;
    m
      ? m.isColor && (h.color.copy(m), (e.background = null), (p = !0))
      : (h.color.copy(_clearColor), (p = !0));
    for (let f = 0; f < 6; f++) {
      let g = f % 3;
      0 === g
        ? (a.up.set(0, s[f], 0), a.lookAt(o[f], 0, 0))
        : 1 === g
        ? (a.up.set(0, 0, s[f]), a.lookAt(0, o[f], 0))
        : (a.up.set(0, s[f], 0), a.lookAt(0, 0, o[f]));
      let $ = this._cubeSize;
      _setViewport(n, g * $, f > 2 ? $ : 0, $, $),
        l.setRenderTarget(n),
        p && l.render(d, a),
        l.render(e, a);
    }
    d.geometry.dispose(),
      d.material.dispose(),
      (l.toneMapping = u),
      (l.autoClear = c),
      (e.background = m);
  }
  _textureToCubeUV(e, t) {
    let r = this._renderer,
      n =
        e.mapping === CubeReflectionMapping ||
        e.mapping === CubeRefractionMapping;
    n
      ? (null === this._cubemapMaterial &&
          (this._cubemapMaterial = _getCubemapMaterial()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          !1 === e.isRenderTargetTexture ? -1 : 1))
      : null === this._equirectMaterial &&
        (this._equirectMaterial = _getEquirectMaterial());
    let a = n ? this._cubemapMaterial : this._equirectMaterial,
      s = new Mesh(this._lodPlanes[0], a),
      o = a.uniforms;
    o.envMap.value = e;
    let l = this._cubeSize;
    _setViewport(t, 0, 0, 3 * l, 2 * l),
      r.setRenderTarget(t),
      r.render(s, _flatCamera);
  }
  _applyPMREM(e) {
    let t = this._renderer,
      r = t.autoClear;
    t.autoClear = !1;
    for (let n = 1; n < this._lodPlanes.length; n++) {
      let a = Math.sqrt(
          this._sigmas[n] * this._sigmas[n] -
            this._sigmas[n - 1] * this._sigmas[n - 1]
        ),
        s = _axisDirections[(n - 1) % _axisDirections.length];
      this._blur(e, n - 1, n, a, s);
    }
    t.autoClear = r;
  }
  _blur(e, t, r, n, a) {
    let s = this._pingPongRenderTarget;
    this._halfBlur(e, s, t, r, n, "latitudinal", a),
      this._halfBlur(s, e, r, r, n, "longitudinal", a);
  }
  _halfBlur(e, t, r, n, a, s, o) {
    let l = this._renderer,
      c = this._blurMaterial;
    "latitudinal" !== s &&
      "longitudinal" !== s &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    let u = new Mesh(this._lodPlanes[n], c),
      h = c.uniforms,
      d = this._sizeLods[r] - 1,
      p = isFinite(a) ? Math.PI / (2 * d) : (2 * Math.PI) / 39,
      m = a / p,
      f = isFinite(a) ? 1 + Math.floor(3 * m) : 20;
    f > 20 &&
      console.warn(
        `sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`
      );
    let g = [],
      $ = 0;
    for (let v = 0; v < 20; ++v) {
      let x = v / m,
        y = Math.exp((-x * x) / 2);
      g.push(y), 0 === v ? ($ += y) : v < f && ($ += 2 * y);
    }
    for (let b = 0; b < g.length; b++) g[b] = g[b] / $;
    (h.envMap.value = e.texture),
      (h.samples.value = f),
      (h.weights.value = g),
      (h.latitudinal.value = "latitudinal" === s),
      o && (h.poleAxis.value = o);
    let { _lodMax: _ } = this;
    (h.dTheta.value = p), (h.mipInt.value = _ - r);
    let S = this._sizeLods[n],
      M = 4 * (this._cubeSize - S);
    _setViewport(t, 3 * S * (n > _ - 4 ? n - _ + 4 : 0), M, 3 * S, 2 * S),
      l.setRenderTarget(t),
      l.render(u, _flatCamera);
  }
}
function _createPlanes(e) {
  let t = [],
    r = [],
    n = [],
    a = e,
    s = e - 4 + 1 + EXTRA_LOD_SIGMA.length;
  for (let o = 0; o < s; o++) {
    let l = Math.pow(2, a);
    r.push(l);
    let c = 1 / l;
    o > e - 4 ? (c = EXTRA_LOD_SIGMA[o - e + 4 - 1]) : 0 === o && (c = 0),
      n.push(c);
    let u = 1 / (l - 2),
      h = -u,
      d = 1 + u,
      p = [h, h, d, h, d, d, h, h, d, d, h, d],
      m = new Float32Array(108),
      f = new Float32Array(72),
      g = new Float32Array(36);
    for (let $ = 0; $ < 6; $++) {
      let v = (($ % 3) * 2) / 3 - 1,
        x = $ > 2 ? 0 : -1,
        y = [
          v,
          x,
          0,
          v + 2 / 3,
          x,
          0,
          v + 2 / 3,
          x + 1,
          0,
          v,
          x,
          0,
          v + 2 / 3,
          x + 1,
          0,
          v,
          x + 1,
          0,
        ];
      m.set(y, 18 * $), f.set(p, 12 * $);
      let b = [$, $, $, $, $, $];
      g.set(b, 6 * $);
    }
    let _ = new BufferGeometry();
    _.setAttribute("position", new BufferAttribute(m, 3)),
      _.setAttribute("uv", new BufferAttribute(f, 2)),
      _.setAttribute("faceIndex", new BufferAttribute(g, 1)),
      t.push(_),
      a > 4 && a--;
  }
  return { lodPlanes: t, sizeLods: r, sigmas: n };
}
function _createRenderTarget(e, t, r) {
  let n = new WebGLRenderTarget(e, t, r);
  return (
    (n.texture.mapping = CubeUVReflectionMapping),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function _setViewport(e, t, r, n, a) {
  e.viewport.set(t, r, n, a), e.scissor.set(t, r, n, a);
}
function _getBlurShader(e, t, r) {
  let n = new Float32Array(20),
    a = new Vector3(0, 1, 0),
    s = new ShaderMaterial({
      name: "SphericalGaussianBlur",
      defines: {
        n: 20,
        CUBEUV_TEXEL_WIDTH: 1 / t,
        CUBEUV_TEXEL_HEIGHT: 1 / r,
        CUBEUV_MAX_MIP: `${e}.0`,
      },
      uniforms: {
        envMap: { value: null },
        samples: { value: 1 },
        weights: { value: n },
        latitudinal: { value: !1 },
        dTheta: { value: 0 },
        mipInt: { value: 0 },
        poleAxis: { value: a },
      },
      vertexShader: _getCommonVertexShader(),
      fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
      blending: NoBlending,
      depthTest: !1,
      depthWrite: !1,
    });
  return s;
}
function _getEquirectMaterial() {
  return new ShaderMaterial({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: NoBlending,
    depthTest: !1,
    depthWrite: !1,
  });
}
function _getCubemapMaterial() {
  return new ShaderMaterial({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: _getCommonVertexShader(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: NoBlending,
    depthTest: !1,
    depthWrite: !1,
  });
}
function _getCommonVertexShader() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function WebGLCubeUVMaps(e) {
  let t = new WeakMap(),
    r = null;
  function n(e) {
    let r = e.target;
    r.removeEventListener("dispose", n);
    let a = t.get(r);
    void 0 !== a && (t.delete(r), a.dispose());
  }
  return {
    get: function a(s) {
      if (s && s.isTexture) {
        let o = s.mapping,
          l =
            o === EquirectangularReflectionMapping ||
            o === EquirectangularRefractionMapping,
          c = o === CubeReflectionMapping || o === CubeRefractionMapping;
        if (l || c) {
          if (s.isRenderTargetTexture && !0 === s.needsPMREMUpdate) {
            s.needsPMREMUpdate = !1;
            let u = t.get(s);
            return (
              null === r && (r = new PMREMGenerator(e)),
              (u = l ? r.fromEquirectangular(s, u) : r.fromCubemap(s, u)),
              t.set(s, u),
              u.texture
            );
          }
          if (t.has(s)) return t.get(s).texture;
          {
            let h = s.image;
            if (
              !(
                (l && h && h.height > 0) ||
                (c &&
                  h &&
                  (function e(t) {
                    let r = 0;
                    for (let n = 0; n < 6; n++) void 0 !== t[n] && r++;
                    return 6 === r;
                  })(h))
              )
            )
              return null;
            {
              null === r && (r = new PMREMGenerator(e));
              let d = l ? r.fromEquirectangular(s) : r.fromCubemap(s);
              return t.set(s, d), s.addEventListener("dispose", n), d.texture;
            }
          }
        }
      }
      return s;
    },
    dispose: function e() {
      (t = new WeakMap()), null !== r && (r.dispose(), (r = null));
    },
  };
}
function WebGLExtensions(e) {
  let t = {};
  function r(r) {
    if (void 0 !== t[r]) return t[r];
    let n;
    switch (r) {
      case "WEBGL_depth_texture":
        n =
          e.getExtension("WEBGL_depth_texture") ||
          e.getExtension("MOZ_WEBGL_depth_texture") ||
          e.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        n =
          e.getExtension("EXT_texture_filter_anisotropic") ||
          e.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        n =
          e.getExtension("WEBGL_compressed_texture_s3tc") ||
          e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        n =
          e.getExtension("WEBGL_compressed_texture_pvrtc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        n = e.getExtension(r);
    }
    return (t[r] = n), n;
  }
  return {
    has: function (e) {
      return null !== r(e);
    },
    init: function (e) {
      e.isWebGL2
        ? r("EXT_color_buffer_float")
        : (r("WEBGL_depth_texture"),
          r("OES_texture_float"),
          r("OES_texture_half_float"),
          r("OES_texture_half_float_linear"),
          r("OES_standard_derivatives"),
          r("OES_element_index_uint"),
          r("OES_vertex_array_object"),
          r("ANGLE_instanced_arrays")),
        r("OES_texture_float_linear"),
        r("EXT_color_buffer_half_float"),
        r("WEBGL_multisampled_render_to_texture");
    },
    get: function (e) {
      let t = r(e);
      return (
        null === t &&
          console.warn(
            "THREE.WebGLRenderer: " + e + " extension not supported."
          ),
        t
      );
    },
  };
}
function WebGLGeometries(e, t, r, n) {
  let a = {},
    s = new WeakMap();
  function o(e) {
    let l = e.target;
    for (let c in (null !== l.index && t.remove(l.index), l.attributes))
      t.remove(l.attributes[c]);
    l.removeEventListener("dispose", o), delete a[l.id];
    let u = s.get(l);
    u && (t.remove(u), s.delete(l)),
      n.releaseStatesOfGeometry(l),
      !0 === l.isInstancedBufferGeometry && delete l._maxInstanceCount,
      r.memory.geometries--;
  }
  function l(e) {
    let r = [],
      n = e.index,
      a = e.attributes.position,
      o = 0;
    if (null !== n) {
      let l = n.array;
      o = n.version;
      for (let c = 0, u = l.length; c < u; c += 3) {
        let h = l[c + 0],
          d = l[c + 1],
          p = l[c + 2];
        r.push(h, d, d, p, p, h);
      }
    } else {
      let m = a.array;
      o = a.version;
      for (let f = 0, g = m.length / 3 - 1; f < g; f += 3) {
        let $ = f + 0,
          v = f + 1,
          x = f + 2;
        r.push($, v, v, x, x, $);
      }
    }
    let y = new (
      arrayNeedsUint32(r) ? Uint32BufferAttribute : Uint16BufferAttribute
    )(r, 1);
    y.version = o;
    let b = s.get(e);
    b && t.remove(b), s.set(e, y);
  }
  return {
    get: function e(t, n) {
      return (
        !0 === a[n.id] ||
          (n.addEventListener("dispose", o),
          (a[n.id] = !0),
          r.memory.geometries++),
        n
      );
    },
    update: function e(r) {
      let n = r.attributes;
      for (let a in n) t.update(n[a], 34962);
      let s = r.morphAttributes;
      for (let o in s) {
        let l = s[o];
        for (let c = 0, u = l.length; c < u; c++) t.update(l[c], 34962);
      }
    },
    getWireframeAttribute: function e(t) {
      let r = s.get(t);
      if (r) {
        let n = t.index;
        null !== n && r.version < n.version && l(t);
      } else l(t);
      return s.get(t);
    },
  };
}
function WebGLIndexedBufferRenderer(e, t, r, n) {
  let a = n.isWebGL2,
    s;
  function o(e) {
    s = e;
  }
  let l, c;
  (this.setMode = o),
    (this.setIndex = function e(t) {
      (l = t.type), (c = t.bytesPerElement);
    }),
    (this.render = function t(n, a) {
      e.drawElements(s, a, l, n * c), r.update(a, s, 1);
    }),
    (this.renderInstances = function n(o, u, h) {
      if (0 === h) return;
      let d, p;
      if (a) (d = e), (p = "drawElementsInstanced");
      else if (
        ((d = t.get("ANGLE_instanced_arrays")),
        (p = "drawElementsInstancedANGLE"),
        null === d)
      ) {
        console.error(
          "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        );
        return;
      }
      d[p](s, u, l, o * c, h), r.update(u, s, h);
    });
}
function WebGLInfo(e) {
  let t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  return {
    memory: { geometries: 0, textures: 0 },
    render: t,
    programs: null,
    autoReset: !0,
    reset: function e() {
      t.frame++,
        (t.calls = 0),
        (t.triangles = 0),
        (t.points = 0),
        (t.lines = 0);
    },
    update: function e(r, n, a) {
      switch ((t.calls++, n)) {
        case 4:
          t.triangles += a * (r / 3);
          break;
        case 1:
          t.lines += a * (r / 2);
          break;
        case 3:
          t.lines += a * (r - 1);
          break;
        case 2:
          t.lines += a * r;
          break;
        case 0:
          t.points += a * r;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", n);
      }
    },
  };
}
function numericalSort(e, t) {
  return e[0] - t[0];
}
function absNumericalSort(e, t) {
  return Math.abs(t[1]) - Math.abs(e[1]);
}
function denormalize(e, t) {
  let r = 1,
    n = t.isInterleavedBufferAttribute ? t.data.array : t.array;
  n instanceof Int8Array
    ? (r = 127)
    : n instanceof Int16Array
    ? (r = 32767)
    : n instanceof Int32Array
    ? (r = 2147483647)
    : console.error(
        "THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",
        n
      ),
    e.divideScalar(r);
}
function WebGLMorphtargets(e, t, r) {
  let n = {},
    a = new Float32Array(8),
    s = new WeakMap(),
    o = new Vector4(),
    l = [];
  for (let c = 0; c < 8; c++) l[c] = [c, 0];
  return {
    update: function c(u, h, d, p) {
      let m = u.morphTargetInfluences;
      if (!0 === t.isWebGL2) {
        let f =
            h.morphAttributes.position ||
            h.morphAttributes.normal ||
            h.morphAttributes.color,
          g = void 0 !== f ? f.length : 0,
          $ = s.get(h);
        if (void 0 === $ || $.count !== g) {
          void 0 !== $ && $.texture.dispose();
          let v = void 0 !== h.morphAttributes.position,
            x = void 0 !== h.morphAttributes.normal,
            y = void 0 !== h.morphAttributes.color,
            b = h.morphAttributes.position || [],
            _ = h.morphAttributes.normal || [],
            S = h.morphAttributes.color || [],
            M = 0;
          !0 === v && (M = 1), !0 === x && (M = 2), !0 === y && (M = 3);
          let w = h.attributes.position.count * M,
            T = 1;
          w > t.maxTextureSize &&
            ((T = Math.ceil(w / t.maxTextureSize)), (w = t.maxTextureSize));
          let A = new Float32Array(w * T * 4 * g),
            C = new DataArrayTexture(A, w, T, g);
          (C.type = FloatType), (C.needsUpdate = !0);
          let L = 4 * M;
          for (let E = 0; E < g; E++) {
            let P = b[E],
              R = _[E],
              D = S[E],
              B = w * T * 4 * E;
            for (let I = 0; I < P.count; I++) {
              let V = I * L;
              !0 === v &&
                (o.fromBufferAttribute(P, I),
                !0 === P.normalized && denormalize(o, P),
                (A[B + V + 0] = o.x),
                (A[B + V + 1] = o.y),
                (A[B + V + 2] = o.z),
                (A[B + V + 3] = 0)),
                !0 === x &&
                  (o.fromBufferAttribute(R, I),
                  !0 === R.normalized && denormalize(o, R),
                  (A[B + V + 4] = o.x),
                  (A[B + V + 5] = o.y),
                  (A[B + V + 6] = o.z),
                  (A[B + V + 7] = 0)),
                !0 === y &&
                  (o.fromBufferAttribute(D, I),
                  !0 === D.normalized && denormalize(o, D),
                  (A[B + V + 8] = o.x),
                  (A[B + V + 9] = o.y),
                  (A[B + V + 10] = o.z),
                  (A[B + V + 11] = 4 === D.itemSize ? o.w : 1));
            }
          }
          function F() {
            C.dispose(), s.delete(h), h.removeEventListener("dispose", F);
          }
          ($ = { count: g, texture: C, size: new Vector2(w, T) }),
            s.set(h, $),
            h.addEventListener("dispose", F);
        }
        let G = 0;
        for (let N = 0; N < m.length; N++) G += m[N];
        let U = h.morphTargetsRelative ? 1 : 1 - G;
        p.getUniforms().setValue(e, "morphTargetBaseInfluence", U),
          p.getUniforms().setValue(e, "morphTargetInfluences", m),
          p.getUniforms().setValue(e, "morphTargetsTexture", $.texture, r),
          p.getUniforms().setValue(e, "morphTargetsTextureSize", $.size);
      } else {
        let z = void 0 === m ? 0 : m.length,
          O = n[h.id];
        if (void 0 === O || O.length !== z) {
          O = [];
          for (let k = 0; k < z; k++) O[k] = [k, 0];
          n[h.id] = O;
        }
        for (let W = 0; W < z; W++) {
          let H = O[W];
          (H[0] = W), (H[1] = m[W]);
        }
        O.sort(absNumericalSort);
        for (let j = 0; j < 8; j++)
          j < z && O[j][1]
            ? ((l[j][0] = O[j][0]), (l[j][1] = O[j][1]))
            : ((l[j][0] = Number.MAX_SAFE_INTEGER), (l[j][1] = 0));
        l.sort(numericalSort);
        let q = h.morphAttributes.position,
          X = h.morphAttributes.normal,
          Z = 0;
        for (let J = 0; J < 8; J++) {
          let Y = l[J],
            K = Y[0],
            Q = Y[1];
          K !== Number.MAX_SAFE_INTEGER && Q
            ? (q &&
                h.getAttribute("morphTarget" + J) !== q[K] &&
                h.setAttribute("morphTarget" + J, q[K]),
              X &&
                h.getAttribute("morphNormal" + J) !== X[K] &&
                h.setAttribute("morphNormal" + J, X[K]),
              (a[J] = Q),
              (Z += Q))
            : (q &&
                !0 === h.hasAttribute("morphTarget" + J) &&
                h.deleteAttribute("morphTarget" + J),
              X &&
                !0 === h.hasAttribute("morphNormal" + J) &&
                h.deleteAttribute("morphNormal" + J),
              (a[J] = 0));
        }
        let ee = h.morphTargetsRelative ? 1 : 1 - Z;
        p.getUniforms().setValue(e, "morphTargetBaseInfluence", ee),
          p.getUniforms().setValue(e, "morphTargetInfluences", a);
      }
    },
  };
}
function WebGLObjects(e, t, r, n) {
  let a = new WeakMap();
  function s(e) {
    let t = e.target;
    t.removeEventListener("dispose", s),
      r.remove(t.instanceMatrix),
      null !== t.instanceColor && r.remove(t.instanceColor);
  }
  return {
    update: function e(o) {
      let l = n.render.frame,
        c = o.geometry,
        u = t.get(o, c);
      return (
        a.get(u) !== l && (t.update(u), a.set(u, l)),
        o.isInstancedMesh &&
          (!1 === o.hasEventListener("dispose", s) &&
            o.addEventListener("dispose", s),
          r.update(o.instanceMatrix, 34962),
          null !== o.instanceColor && r.update(o.instanceColor, 34962)),
        u
      );
    },
    dispose: function e() {
      a = new WeakMap();
    },
  };
}
let emptyTexture = new Texture(),
  emptyArrayTexture = new DataArrayTexture(),
  empty3dTexture = new Data3DTexture(),
  emptyCubeTexture = new CubeTexture(),
  arrayCacheF32 = [],
  arrayCacheI32 = [],
  mat4array = new Float32Array(16),
  mat3array = new Float32Array(9),
  mat2array = new Float32Array(4);
function flatten(e, t, r) {
  let n = e[0];
  if (n <= 0 || n > 0) return e;
  let a = t * r,
    s = arrayCacheF32[a];
  if (
    (void 0 === s && ((s = new Float32Array(a)), (arrayCacheF32[a] = s)),
    0 !== t)
  ) {
    n.toArray(s, 0);
    for (let o = 1, l = 0; o !== t; ++o) (l += r), e[o].toArray(s, l);
  }
  return s;
}
function arraysEqual(e, t) {
  if (e.length !== t.length) return !1;
  for (let r = 0, n = e.length; r < n; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function copyArray(e, t) {
  for (let r = 0, n = t.length; r < n; r++) e[r] = t[r];
}
function allocTexUnits(e, t) {
  let r = arrayCacheI32[t];
  void 0 === r && ((r = new Int32Array(t)), (arrayCacheI32[t] = r));
  for (let n = 0; n !== t; ++n) r[n] = e.allocateTextureUnit();
  return r;
}
function setValueV1f(e, t) {
  let r = this.cache;
  r[0] !== t && (e.uniform1f(this.addr, t), (r[0] = t));
}
function setValueV2f(e, t) {
  let r = this.cache;
  if (void 0 !== t.x)
    (r[0] !== t.x || r[1] !== t.y) &&
      (e.uniform2f(this.addr, t.x, t.y), (r[0] = t.x), (r[1] = t.y));
  else {
    if (arraysEqual(r, t)) return;
    e.uniform2fv(this.addr, t), copyArray(r, t);
  }
}
function setValueV3f(e, t) {
  let r = this.cache;
  if (void 0 !== t.x)
    (r[0] !== t.x || r[1] !== t.y || r[2] !== t.z) &&
      (e.uniform3f(this.addr, t.x, t.y, t.z),
      (r[0] = t.x),
      (r[1] = t.y),
      (r[2] = t.z));
  else if (void 0 !== t.r)
    (r[0] !== t.r || r[1] !== t.g || r[2] !== t.b) &&
      (e.uniform3f(this.addr, t.r, t.g, t.b),
      (r[0] = t.r),
      (r[1] = t.g),
      (r[2] = t.b));
  else {
    if (arraysEqual(r, t)) return;
    e.uniform3fv(this.addr, t), copyArray(r, t);
  }
}
function setValueV4f(e, t) {
  let r = this.cache;
  if (void 0 !== t.x)
    (r[0] !== t.x || r[1] !== t.y || r[2] !== t.z || r[3] !== t.w) &&
      (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (r[0] = t.x),
      (r[1] = t.y),
      (r[2] = t.z),
      (r[3] = t.w));
  else {
    if (arraysEqual(r, t)) return;
    e.uniform4fv(this.addr, t), copyArray(r, t);
  }
}
function setValueM2(e, t) {
  let r = this.cache,
    n = t.elements;
  if (void 0 === n) {
    if (arraysEqual(r, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), copyArray(r, t);
  } else {
    if (arraysEqual(r, n)) return;
    mat2array.set(n),
      e.uniformMatrix2fv(this.addr, !1, mat2array),
      copyArray(r, n);
  }
}
function setValueM3(e, t) {
  let r = this.cache,
    n = t.elements;
  if (void 0 === n) {
    if (arraysEqual(r, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), copyArray(r, t);
  } else {
    if (arraysEqual(r, n)) return;
    mat3array.set(n),
      e.uniformMatrix3fv(this.addr, !1, mat3array),
      copyArray(r, n);
  }
}
function setValueM4(e, t) {
  let r = this.cache,
    n = t.elements;
  if (void 0 === n) {
    if (arraysEqual(r, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), copyArray(r, t);
  } else {
    if (arraysEqual(r, n)) return;
    mat4array.set(n),
      e.uniformMatrix4fv(this.addr, !1, mat4array),
      copyArray(r, n);
  }
}
function setValueV1i(e, t) {
  let r = this.cache;
  r[0] !== t && (e.uniform1i(this.addr, t), (r[0] = t));
}
function setValueV2i(e, t) {
  let r = this.cache;
  arraysEqual(r, t) || (e.uniform2iv(this.addr, t), copyArray(r, t));
}
function setValueV3i(e, t) {
  let r = this.cache;
  arraysEqual(r, t) || (e.uniform3iv(this.addr, t), copyArray(r, t));
}
function setValueV4i(e, t) {
  let r = this.cache;
  arraysEqual(r, t) || (e.uniform4iv(this.addr, t), copyArray(r, t));
}
function setValueV1ui(e, t) {
  let r = this.cache;
  r[0] !== t && (e.uniform1ui(this.addr, t), (r[0] = t));
}
function setValueV2ui(e, t) {
  let r = this.cache;
  arraysEqual(r, t) || (e.uniform2uiv(this.addr, t), copyArray(r, t));
}
function setValueV3ui(e, t) {
  let r = this.cache;
  arraysEqual(r, t) || (e.uniform3uiv(this.addr, t), copyArray(r, t));
}
function setValueV4ui(e, t) {
  let r = this.cache;
  arraysEqual(r, t) || (e.uniform4uiv(this.addr, t), copyArray(r, t));
}
function setValueT1(e, t, r) {
  let n = this.cache,
    a = r.allocateTextureUnit();
  n[0] !== a && (e.uniform1i(this.addr, a), (n[0] = a)),
    r.setTexture2D(t || emptyTexture, a);
}
function setValueT3D1(e, t, r) {
  let n = this.cache,
    a = r.allocateTextureUnit();
  n[0] !== a && (e.uniform1i(this.addr, a), (n[0] = a)),
    r.setTexture3D(t || empty3dTexture, a);
}
function setValueT6(e, t, r) {
  let n = this.cache,
    a = r.allocateTextureUnit();
  n[0] !== a && (e.uniform1i(this.addr, a), (n[0] = a)),
    r.setTextureCube(t || emptyCubeTexture, a);
}
function setValueT2DArray1(e, t, r) {
  let n = this.cache,
    a = r.allocateTextureUnit();
  n[0] !== a && (e.uniform1i(this.addr, a), (n[0] = a)),
    r.setTexture2DArray(t || emptyArrayTexture, a);
}
function getSingularSetter(e) {
  switch (e) {
    case 5126:
      return setValueV1f;
    case 35664:
      return setValueV2f;
    case 35665:
      return setValueV3f;
    case 35666:
      return setValueV4f;
    case 35674:
      return setValueM2;
    case 35675:
      return setValueM3;
    case 35676:
      return setValueM4;
    case 5124:
    case 35670:
      return setValueV1i;
    case 35667:
    case 35671:
      return setValueV2i;
    case 35668:
    case 35672:
      return setValueV3i;
    case 35669:
    case 35673:
      return setValueV4i;
    case 5125:
      return setValueV1ui;
    case 36294:
      return setValueV2ui;
    case 36295:
      return setValueV3ui;
    case 36296:
      return setValueV4ui;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return setValueT1;
    case 35679:
    case 36299:
    case 36307:
      return setValueT3D1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return setValueT6;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return setValueT2DArray1;
  }
}
function setValueV1fArray(e, t) {
  e.uniform1fv(this.addr, t);
}
function setValueV2fArray(e, t) {
  let r = flatten(t, this.size, 2);
  e.uniform2fv(this.addr, r);
}
function setValueV3fArray(e, t) {
  let r = flatten(t, this.size, 3);
  e.uniform3fv(this.addr, r);
}
function setValueV4fArray(e, t) {
  let r = flatten(t, this.size, 4);
  e.uniform4fv(this.addr, r);
}
function setValueM2Array(e, t) {
  let r = flatten(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, r);
}
function setValueM3Array(e, t) {
  let r = flatten(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, r);
}
function setValueM4Array(e, t) {
  let r = flatten(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, r);
}
function setValueV1iArray(e, t) {
  e.uniform1iv(this.addr, t);
}
function setValueV2iArray(e, t) {
  e.uniform2iv(this.addr, t);
}
function setValueV3iArray(e, t) {
  e.uniform3iv(this.addr, t);
}
function setValueV4iArray(e, t) {
  e.uniform4iv(this.addr, t);
}
function setValueV1uiArray(e, t) {
  e.uniform1uiv(this.addr, t);
}
function setValueV2uiArray(e, t) {
  e.uniform2uiv(this.addr, t);
}
function setValueV3uiArray(e, t) {
  e.uniform3uiv(this.addr, t);
}
function setValueV4uiArray(e, t) {
  e.uniform4uiv(this.addr, t);
}
function setValueT1Array(e, t, r) {
  let n = t.length,
    a = allocTexUnits(r, n);
  e.uniform1iv(this.addr, a);
  for (let s = 0; s !== n; ++s) r.setTexture2D(t[s] || emptyTexture, a[s]);
}
function setValueT3DArray(e, t, r) {
  let n = t.length,
    a = allocTexUnits(r, n);
  e.uniform1iv(this.addr, a);
  for (let s = 0; s !== n; ++s) r.setTexture3D(t[s] || empty3dTexture, a[s]);
}
function setValueT6Array(e, t, r) {
  let n = t.length,
    a = allocTexUnits(r, n);
  e.uniform1iv(this.addr, a);
  for (let s = 0; s !== n; ++s)
    r.setTextureCube(t[s] || emptyCubeTexture, a[s]);
}
function setValueT2DArrayArray(e, t, r) {
  let n = t.length,
    a = allocTexUnits(r, n);
  e.uniform1iv(this.addr, a);
  for (let s = 0; s !== n; ++s)
    r.setTexture2DArray(t[s] || emptyArrayTexture, a[s]);
}
function getPureArraySetter(e) {
  switch (e) {
    case 5126:
      return setValueV1fArray;
    case 35664:
      return setValueV2fArray;
    case 35665:
      return setValueV3fArray;
    case 35666:
      return setValueV4fArray;
    case 35674:
      return setValueM2Array;
    case 35675:
      return setValueM3Array;
    case 35676:
      return setValueM4Array;
    case 5124:
    case 35670:
      return setValueV1iArray;
    case 35667:
    case 35671:
      return setValueV2iArray;
    case 35668:
    case 35672:
      return setValueV3iArray;
    case 35669:
    case 35673:
      return setValueV4iArray;
    case 5125:
      return setValueV1uiArray;
    case 36294:
      return setValueV2uiArray;
    case 36295:
      return setValueV3uiArray;
    case 36296:
      return setValueV4uiArray;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return setValueT1Array;
    case 35679:
    case 36299:
    case 36307:
      return setValueT3DArray;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return setValueT6Array;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return setValueT2DArrayArray;
  }
}
function SingleUniform(e, t, r) {
  (this.id = e),
    (this.addr = r),
    (this.cache = []),
    (this.setValue = getSingularSetter(t.type));
}
function PureArrayUniform(e, t, r) {
  (this.id = e),
    (this.addr = r),
    (this.cache = []),
    (this.size = t.size),
    (this.setValue = getPureArraySetter(t.type));
}
function StructuredUniform(e) {
  (this.id = e), (this.seq = []), (this.map = {});
}
StructuredUniform.prototype.setValue = function (e, t, r) {
  let n = this.seq;
  for (let a = 0, s = n.length; a !== s; ++a) {
    let o = n[a];
    o.setValue(e, t[o.id], r);
  }
};
let RePathPart = /(\w+)(\])?(\[|\.)?/g;
function addUniform(e, t) {
  e.seq.push(t), (e.map[t.id] = t);
}
function parseUniform(e, t, r) {
  let n = e.name,
    a = n.length;
  for (RePathPart.lastIndex = 0; ; ) {
    let s = RePathPart.exec(n),
      o = RePathPart.lastIndex,
      l = s[1],
      c = "]" === s[2],
      u = s[3];
    if ((c && (l |= 0), void 0 === u || ("[" === u && o + 2 === a))) {
      addUniform(
        r,
        void 0 === u
          ? new SingleUniform(l, e, t)
          : new PureArrayUniform(l, e, t)
      );
      break;
    }
    {
      let h = r.map,
        d = h[l];
      void 0 === d && addUniform(r, (d = new StructuredUniform(l))), (r = d);
    }
  }
}
function WebGLUniforms(e, t) {
  (this.seq = []), (this.map = {});
  let r = e.getProgramParameter(t, 35718);
  for (let n = 0; n < r; ++n) {
    let a = e.getActiveUniform(t, n),
      s = e.getUniformLocation(t, a.name);
    parseUniform(a, s, this);
  }
}
function WebGLShader(e, t, r) {
  let n = e.createShader(t);
  return e.shaderSource(n, r), e.compileShader(n), n;
}
(WebGLUniforms.prototype.setValue = function (e, t, r, n) {
  let a = this.map[t];
  void 0 !== a && a.setValue(e, r, n);
}),
  (WebGLUniforms.prototype.setOptional = function (e, t, r) {
    let n = t[r];
    void 0 !== n && this.setValue(e, r, n);
  }),
  (WebGLUniforms.upload = function (e, t, r, n) {
    for (let a = 0, s = t.length; a !== s; ++a) {
      let o = t[a],
        l = r[o.id];
      !1 !== l.needsUpdate && o.setValue(e, l.value, n);
    }
  }),
  (WebGLUniforms.seqWithValue = function (e, t) {
    let r = [];
    for (let n = 0, a = e.length; n !== a; ++n) {
      let s = e[n];
      s.id in t && r.push(s);
    }
    return r;
  });
let programIdCount = 0;
function handleSource(e, t) {
  let r = e.split("\n"),
    n = [],
    a = Math.max(t - 6, 0),
    s = Math.min(t + 6, r.length);
  for (let o = a; o < s; o++) n.push(o + 1 + ": " + r[o]);
  return n.join("\n");
}
function getEncodingComponents(e) {
  switch (e) {
    case LinearEncoding:
      return ["Linear", "( value )"];
    case sRGBEncoding:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", e),
        ["Linear", "( value )"]
      );
  }
}
function getShaderErrors(e, t, r) {
  let n = e.getShaderParameter(t, 35713),
    a = e.getShaderInfoLog(t).trim();
  if (n && "" === a) return "";
  let s = /ERROR: 0:(\d+)/.exec(a);
  if (!s) return a;
  {
    let o = parseInt(s[0]);
    return (
      r.toUpperCase() +
      "\n\n" +
      a +
      "\n\n" +
      handleSource(e.getShaderSource(t), o)
    );
  }
}
function getTexelEncodingFunction(e, t) {
  let r = getEncodingComponents(t);
  return "vec4 " + e + "( vec4 value ) { return LinearTo" + r[0] + r[1] + "; }";
}
function getToneMappingFunction(e, t) {
  let r;
  switch (t) {
    case LinearToneMapping:
      r = "Linear";
      break;
    case ReinhardToneMapping:
      r = "Reinhard";
      break;
    case CineonToneMapping:
      r = "OptimizedCineon";
      break;
    case ACESFilmicToneMapping:
      r = "ACESFilmic";
      break;
    case CustomToneMapping:
      r = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
        (r = "Linear");
  }
  return (
    "vec3 " + e + "( vec3 color ) { return " + r + "ToneMapping( color ); }"
  );
}
function generateExtensions(e) {
  let t = [
    e.extensionDerivatives ||
    e.envMapCubeUVHeight ||
    e.bumpMap ||
    e.tangentSpaceNormalMap ||
    e.clearcoatNormalMap ||
    e.flatShading ||
    "physical" === e.shaderID
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (e.extensionFragDepth || e.logarithmicDepthBuffer) &&
    e.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    e.extensionDrawBuffers && e.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (e.extensionShaderTextureLOD || e.envMap || e.transmission) &&
    e.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ];
  return t.filter(filterEmptyLine).join("\n");
}
function generateDefines(e) {
  let t = [];
  for (let r in e) {
    let n = e[r];
    !1 !== n && t.push("#define " + r + " " + n);
  }
  return t.join("\n");
}
function fetchAttributeLocations(e, t) {
  let r = {},
    n = e.getProgramParameter(t, 35721);
  for (let a = 0; a < n; a++) {
    let s = e.getActiveAttrib(t, a),
      o = s.name,
      l = 1;
    35674 === s.type && (l = 2),
      35675 === s.type && (l = 3),
      35676 === s.type && (l = 4),
      (r[o] = {
        type: s.type,
        location: e.getAttribLocation(t, o),
        locationSize: l,
      });
  }
  return r;
}
function filterEmptyLine(e) {
  return "" !== e;
}
function replaceLightNums(e, t) {
  return e
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function replaceClippingPlaneNums(e, t) {
  return e
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection
    );
}
let includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
function resolveIncludes(e) {
  return e.replace(includePattern, includeReplacer);
}
function includeReplacer(e, t) {
  let r = ShaderChunk[t];
  if (void 0 === r) throw Error("Can not resolve #include <" + t + ">");
  return resolveIncludes(r);
}
let deprecatedUnrollLoopPattern =
    /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
  unrollLoopPattern =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function unrollLoops(e) {
  return e
    .replace(unrollLoopPattern, loopReplacer)
    .replace(deprecatedUnrollLoopPattern, deprecatedLoopReplacer);
}
function deprecatedLoopReplacer(e, t, r, n) {
  return (
    console.warn(
      "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
    ),
    loopReplacer(e, t, r, n)
  );
}
function loopReplacer(e, t, r, n) {
  let a = "";
  for (let s = parseInt(t); s < parseInt(r); s++)
    a += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return a;
}
function generatePrecision(e) {
  let t =
    "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
  return (
    "highp" === e.precision
      ? (t += "\n#define HIGH_PRECISION")
      : "mediump" === e.precision
      ? (t += "\n#define MEDIUM_PRECISION")
      : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
    t
  );
}
function generateShadowMapTypeDefine(e) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return (
    e.shadowMapType === PCFShadowMap
      ? (t = "SHADOWMAP_TYPE_PCF")
      : e.shadowMapType === PCFSoftShadowMap
      ? (t = "SHADOWMAP_TYPE_PCF_SOFT")
      : e.shadowMapType === VSMShadowMap && (t = "SHADOWMAP_TYPE_VSM"),
    t
  );
}
function generateEnvMapTypeDefine(e) {
  let t = "ENVMAP_TYPE_CUBE";
  if (e.envMap)
    switch (e.envMapMode) {
      case CubeReflectionMapping:
      case CubeRefractionMapping:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case CubeUVReflectionMapping:
        t = "ENVMAP_TYPE_CUBE_UV";
    }
  return t;
}
function generateEnvMapModeDefine(e) {
  let t = "ENVMAP_MODE_REFLECTION";
  return (
    e.envMap &&
      e.envMapMode === CubeRefractionMapping &&
      (t = "ENVMAP_MODE_REFRACTION"),
    t
  );
}
function generateEnvMapBlendingDefine(e) {
  let t = "ENVMAP_BLENDING_NONE";
  if (e.envMap)
    switch (e.combine) {
      case MultiplyOperation:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case MixOperation:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case AddOperation:
        t = "ENVMAP_BLENDING_ADD";
    }
  return t;
}
function generateCubeUVSize(e) {
  let t = e.envMapCubeUVHeight;
  if (null === t) return null;
  let r = Math.log2(t) - 2;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, r), 112)),
    texelHeight: 1 / t,
    maxMip: r,
  };
}
function WebGLProgram(e, t, r, n) {
  let a = e.getContext(),
    s = r.defines,
    o = r.vertexShader,
    l = r.fragmentShader,
    c = generateShadowMapTypeDefine(r),
    u = generateEnvMapTypeDefine(r),
    h = generateEnvMapModeDefine(r),
    d = generateEnvMapBlendingDefine(r),
    p = generateCubeUVSize(r),
    m = r.isWebGL2 ? "" : generateExtensions(r),
    f = generateDefines(s),
    g = a.createProgram(),
    $,
    v,
    x = r.glslVersion ? "#version " + r.glslVersion + "\n" : "";
  r.isRawShaderMaterial
    ? (($ = [f].filter(filterEmptyLine).join("\n")).length > 0 && ($ += "\n"),
      (v = [m, f].filter(filterEmptyLine).join("\n")).length > 0 && (v += "\n"))
    : (($ = [
        generatePrecision(r),
        "#define SHADER_NAME " + r.shaderName,
        f,
        r.instancing ? "#define USE_INSTANCING" : "",
        r.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        r.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        r.useFog && r.fog ? "#define USE_FOG" : "",
        r.useFog && r.fogExp2 ? "#define FOG_EXP2" : "",
        r.map ? "#define USE_MAP" : "",
        r.envMap ? "#define USE_ENVMAP" : "",
        r.envMap ? "#define " + h : "",
        r.lightMap ? "#define USE_LIGHTMAP" : "",
        r.aoMap ? "#define USE_AOMAP" : "",
        r.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        r.bumpMap ? "#define USE_BUMPMAP" : "",
        r.normalMap ? "#define USE_NORMALMAP" : "",
        r.normalMap && r.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        r.normalMap && r.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        r.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        r.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        r.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        r.displacementMap && r.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        r.specularMap ? "#define USE_SPECULARMAP" : "",
        r.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        r.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        r.metalnessMap ? "#define USE_METALNESSMAP" : "",
        r.alphaMap ? "#define USE_ALPHAMAP" : "",
        r.transmission ? "#define USE_TRANSMISSION" : "",
        r.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        r.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        r.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        r.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        r.vertexTangents ? "#define USE_TANGENT" : "",
        r.vertexColors ? "#define USE_COLOR" : "",
        r.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        r.vertexUvs ? "#define USE_UV" : "",
        r.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        r.flatShading ? "#define FLAT_SHADED" : "",
        r.skinning ? "#define USE_SKINNING" : "",
        r.morphTargets ? "#define USE_MORPHTARGETS" : "",
        r.morphNormals && !1 === r.flatShading
          ? "#define USE_MORPHNORMALS"
          : "",
        r.morphColors && r.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        r.morphTargetsCount > 0 && r.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        r.morphTargetsCount > 0 && r.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + r.morphTextureStride
          : "",
        r.morphTargetsCount > 0 && r.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + r.morphTargetsCount
          : "",
        r.doubleSided ? "#define DOUBLE_SIDED" : "",
        r.flipSided ? "#define FLIP_SIDED" : "",
        r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        r.shadowMapEnabled ? "#define " + c : "",
        r.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        r.logarithmicDepthBuffer && r.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        "\n",
      ]
        .filter(filterEmptyLine)
        .join("\n")),
      (v = [
        m,
        generatePrecision(r),
        "#define SHADER_NAME " + r.shaderName,
        f,
        r.useFog && r.fog ? "#define USE_FOG" : "",
        r.useFog && r.fogExp2 ? "#define FOG_EXP2" : "",
        r.map ? "#define USE_MAP" : "",
        r.matcap ? "#define USE_MATCAP" : "",
        r.envMap ? "#define USE_ENVMAP" : "",
        r.envMap ? "#define " + u : "",
        r.envMap ? "#define " + h : "",
        r.envMap ? "#define " + d : "",
        p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "",
        p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "",
        p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "",
        r.lightMap ? "#define USE_LIGHTMAP" : "",
        r.aoMap ? "#define USE_AOMAP" : "",
        r.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        r.bumpMap ? "#define USE_BUMPMAP" : "",
        r.normalMap ? "#define USE_NORMALMAP" : "",
        r.normalMap && r.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        r.normalMap && r.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        r.clearcoat ? "#define USE_CLEARCOAT" : "",
        r.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        r.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        r.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        r.specularMap ? "#define USE_SPECULARMAP" : "",
        r.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        r.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        r.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        r.metalnessMap ? "#define USE_METALNESSMAP" : "",
        r.alphaMap ? "#define USE_ALPHAMAP" : "",
        r.alphaTest ? "#define USE_ALPHATEST" : "",
        r.sheen ? "#define USE_SHEEN" : "",
        r.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        r.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        r.transmission ? "#define USE_TRANSMISSION" : "",
        r.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        r.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        r.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        r.vertexTangents ? "#define USE_TANGENT" : "",
        r.vertexColors || r.instancingColor ? "#define USE_COLOR" : "",
        r.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        r.vertexUvs ? "#define USE_UV" : "",
        r.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        r.gradientMap ? "#define USE_GRADIENTMAP" : "",
        r.flatShading ? "#define FLAT_SHADED" : "",
        r.doubleSided ? "#define DOUBLE_SIDED" : "",
        r.flipSided ? "#define FLIP_SIDED" : "",
        r.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        r.shadowMapEnabled ? "#define " + c : "",
        r.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        r.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        r.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        r.logarithmicDepthBuffer && r.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        r.toneMapping !== NoToneMapping ? "#define TONE_MAPPING" : "",
        r.toneMapping !== NoToneMapping
          ? ShaderChunk.tonemapping_pars_fragment
          : "",
        r.toneMapping !== NoToneMapping
          ? getToneMappingFunction("toneMapping", r.toneMapping)
          : "",
        r.dithering ? "#define DITHERING" : "",
        r.opaque ? "#define OPAQUE" : "",
        ShaderChunk.encodings_pars_fragment,
        getTexelEncodingFunction("linearToOutputTexel", r.outputEncoding),
        r.useDepthPacking ? "#define DEPTH_PACKING " + r.depthPacking : "",
        "\n",
      ]
        .filter(filterEmptyLine)
        .join("\n"))),
    (o = replaceClippingPlaneNums(
      (o = replaceLightNums((o = resolveIncludes(o)), r)),
      r
    )),
    (l = replaceClippingPlaneNums(
      (l = replaceLightNums((l = resolveIncludes(l)), r)),
      r
    )),
    (o = unrollLoops(o)),
    (l = unrollLoops(l)),
    r.isWebGL2 &&
      !0 !== r.isRawShaderMaterial &&
      ((x = "#version 300 es\n"),
      ($ =
        "precision mediump sampler2DArray;\n#define attribute in\n#define varying out\n#define texture2D texture\n" +
        $),
      (v =
        [
          "#define varying in",
          r.glslVersion === GLSL3
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          r.glslVersion === GLSL3 ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join("\n") +
        "\n" +
        v));
  let y = x + $ + o,
    b = x + v + l,
    _ = WebGLShader(a, 35633, y),
    S = WebGLShader(a, 35632, b);
  if (
    (a.attachShader(g, _),
    a.attachShader(g, S),
    void 0 !== r.index0AttributeName
      ? a.bindAttribLocation(g, 0, r.index0AttributeName)
      : !0 === r.morphTargets && a.bindAttribLocation(g, 0, "position"),
    a.linkProgram(g),
    e.debug.checkShaderErrors)
  ) {
    let M = a.getProgramInfoLog(g).trim(),
      w = a.getShaderInfoLog(_).trim(),
      T = a.getShaderInfoLog(S).trim(),
      A = !0,
      C = !0;
    if (!1 === a.getProgramParameter(g, 35714)) {
      A = !1;
      let L = getShaderErrors(a, _, "vertex"),
        E = getShaderErrors(a, S, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          a.getError() +
          " - VALIDATE_STATUS " +
          a.getProgramParameter(g, 35715) +
          "\n\nProgram Info Log: " +
          M +
          "\n" +
          L +
          "\n" +
          E
      );
    } else
      "" !== M
        ? console.warn("THREE.WebGLProgram: Program Info Log:", M)
        : ("" === w || "" === T) && (C = !1);
    C &&
      (this.diagnostics = {
        runnable: A,
        programLog: M,
        vertexShader: { log: w, prefix: $ },
        fragmentShader: { log: T, prefix: v },
      });
  }
  a.deleteShader(_), a.deleteShader(S);
  let P;
  this.getUniforms = function () {
    return void 0 === P && (P = new WebGLUniforms(a, g)), P;
  };
  let R;
  return (
    (this.getAttributes = function () {
      return void 0 === R && (R = fetchAttributeLocations(a, g)), R;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        a.deleteProgram(g),
        (this.program = void 0);
    }),
    (this.name = r.shaderName),
    (this.id = programIdCount++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = g),
    (this.vertexShader = _),
    (this.fragmentShader = S),
    this
  );
}
let _id = 0;
class WebGLShaderCache {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    let t = e.vertexShader,
      r = e.fragmentShader,
      n = this._getShaderStage(t),
      a = this._getShaderStage(r),
      s = this._getShaderCacheForMaterial(e);
    return (
      !1 === s.has(n) && (s.add(n), n.usedTimes++),
      !1 === s.has(a) && (s.add(a), a.usedTimes++),
      this
    );
  }
  remove(e) {
    let t = this.materialCache.get(e);
    for (let r of t)
      r.usedTimes--, 0 === r.usedTimes && this.shaderCache.delete(r.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    let t = this.materialCache;
    return !1 === t.has(e) && t.set(e, new Set()), t.get(e);
  }
  _getShaderStage(e) {
    let t = this.shaderCache;
    if (!1 === t.has(e)) {
      let r = new WebGLShaderStage(e);
      t.set(e, r);
    }
    return t.get(e);
  }
}
class WebGLShaderStage {
  constructor(e) {
    (this.id = _id++), (this.code = e), (this.usedTimes = 0);
  }
}
function WebGLPrograms(e, t, r, n, a, s, o) {
  let l = new Layers(),
    c = new WebGLShaderCache(),
    u = [],
    h = a.isWebGL2,
    d = a.logarithmicDepthBuffer,
    p = a.vertexTextures,
    m = a.precision,
    f = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distanceRGBA",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    };
  return {
    getParameters: function s(l, u, g, $, v) {
      let x = $.fog,
        y = v.geometry,
        b = l.isMeshStandardMaterial ? $.environment : null,
        _ = (l.isMeshStandardMaterial ? r : t).get(l.envMap || b),
        S = _ && _.mapping === CubeUVReflectionMapping ? _.image.height : null,
        M = f[l.type];
      null !== l.precision &&
        (m = a.getMaxPrecision(l.precision)) !== l.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          l.precision,
          "not supported, using",
          m,
          "instead."
        );
      let w =
          y.morphAttributes.position ||
          y.morphAttributes.normal ||
          y.morphAttributes.color,
        T = void 0 !== w ? w.length : 0,
        A = 0;
      void 0 !== y.morphAttributes.position && (A = 1),
        void 0 !== y.morphAttributes.normal && (A = 2),
        void 0 !== y.morphAttributes.color && (A = 3);
      let C, L, E, P;
      if (M) {
        let R = ShaderLib[M];
        (C = R.vertexShader), (L = R.fragmentShader);
      } else
        (C = l.vertexShader),
          (L = l.fragmentShader),
          c.update(l),
          (E = c.getVertexShaderID(l)),
          (P = c.getFragmentShaderID(l));
      let D = e.getRenderTarget(),
        B = l.alphaTest > 0,
        I = l.clearcoat > 0,
        V = {
          isWebGL2: h,
          shaderID: M,
          shaderName: l.type,
          vertexShader: C,
          fragmentShader: L,
          defines: l.defines,
          customVertexShaderID: E,
          customFragmentShaderID: P,
          isRawShaderMaterial: !0 === l.isRawShaderMaterial,
          glslVersion: l.glslVersion,
          precision: m,
          instancing: !0 === v.isInstancedMesh,
          instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
          supportsVertexTextures: p,
          outputEncoding:
            null === D
              ? e.outputEncoding
              : !0 === D.isXRRenderTarget
              ? D.texture.encoding
              : LinearEncoding,
          map: !!l.map,
          matcap: !!l.matcap,
          envMap: !!_,
          envMapMode: _ && _.mapping,
          envMapCubeUVHeight: S,
          lightMap: !!l.lightMap,
          aoMap: !!l.aoMap,
          emissiveMap: !!l.emissiveMap,
          bumpMap: !!l.bumpMap,
          normalMap: !!l.normalMap,
          objectSpaceNormalMap: l.normalMapType === ObjectSpaceNormalMap,
          tangentSpaceNormalMap: l.normalMapType === TangentSpaceNormalMap,
          decodeVideoTexture:
            !!l.map &&
            !0 === l.map.isVideoTexture &&
            l.map.encoding === sRGBEncoding,
          clearcoat: I,
          clearcoatMap: I && !!l.clearcoatMap,
          clearcoatRoughnessMap: I && !!l.clearcoatRoughnessMap,
          clearcoatNormalMap: I && !!l.clearcoatNormalMap,
          displacementMap: !!l.displacementMap,
          roughnessMap: !!l.roughnessMap,
          metalnessMap: !!l.metalnessMap,
          specularMap: !!l.specularMap,
          specularIntensityMap: !!l.specularIntensityMap,
          specularColorMap: !!l.specularColorMap,
          opaque: !1 === l.transparent && l.blending === NormalBlending,
          alphaMap: !!l.alphaMap,
          alphaTest: B,
          gradientMap: !!l.gradientMap,
          sheen: l.sheen > 0,
          sheenColorMap: !!l.sheenColorMap,
          sheenRoughnessMap: !!l.sheenRoughnessMap,
          transmission: l.transmission > 0,
          transmissionMap: !!l.transmissionMap,
          thicknessMap: !!l.thicknessMap,
          combine: l.combine,
          vertexTangents: !!l.normalMap && !!y.attributes.tangent,
          vertexColors: l.vertexColors,
          vertexAlphas:
            !0 === l.vertexColors &&
            !!y.attributes.color &&
            4 === y.attributes.color.itemSize,
          vertexUvs:
            !!l.map ||
            !!l.bumpMap ||
            !!l.normalMap ||
            !!l.specularMap ||
            !!l.alphaMap ||
            !!l.emissiveMap ||
            !!l.roughnessMap ||
            !!l.metalnessMap ||
            !!l.clearcoatMap ||
            !!l.clearcoatRoughnessMap ||
            !!l.clearcoatNormalMap ||
            !!l.displacementMap ||
            !!l.transmissionMap ||
            !!l.thicknessMap ||
            !!l.specularIntensityMap ||
            !!l.specularColorMap ||
            !!l.sheenColorMap ||
            !!l.sheenRoughnessMap,
          uvsVertexOnly:
            !(
              l.map ||
              l.bumpMap ||
              l.normalMap ||
              l.specularMap ||
              l.alphaMap ||
              l.emissiveMap ||
              l.roughnessMap ||
              l.metalnessMap ||
              l.clearcoatNormalMap ||
              l.transmission > 0 ||
              l.transmissionMap ||
              l.thicknessMap ||
              l.specularIntensityMap ||
              l.specularColorMap ||
              l.sheen > 0 ||
              l.sheenColorMap ||
              l.sheenRoughnessMap
            ) && !!l.displacementMap,
          fog: !!x,
          useFog: !0 === l.fog,
          fogExp2: x && x.isFogExp2,
          flatShading: !!l.flatShading,
          sizeAttenuation: l.sizeAttenuation,
          logarithmicDepthBuffer: d,
          skinning: !0 === v.isSkinnedMesh,
          morphTargets: void 0 !== y.morphAttributes.position,
          morphNormals: void 0 !== y.morphAttributes.normal,
          morphColors: void 0 !== y.morphAttributes.color,
          morphTargetsCount: T,
          morphTextureStride: A,
          numDirLights: u.directional.length,
          numPointLights: u.point.length,
          numSpotLights: u.spot.length,
          numRectAreaLights: u.rectArea.length,
          numHemiLights: u.hemi.length,
          numDirLightShadows: u.directionalShadowMap.length,
          numPointLightShadows: u.pointShadowMap.length,
          numSpotLightShadows: u.spotShadowMap.length,
          numClippingPlanes: o.numPlanes,
          numClipIntersection: o.numIntersection,
          dithering: l.dithering,
          shadowMapEnabled: e.shadowMap.enabled && g.length > 0,
          shadowMapType: e.shadowMap.type,
          toneMapping: l.toneMapped ? e.toneMapping : NoToneMapping,
          physicallyCorrectLights: e.physicallyCorrectLights,
          premultipliedAlpha: l.premultipliedAlpha,
          doubleSided: l.side === DoubleSide,
          flipSided: l.side === BackSide,
          useDepthPacking: !!l.depthPacking,
          depthPacking: l.depthPacking || 0,
          index0AttributeName: l.index0AttributeName,
          extensionDerivatives: l.extensions && l.extensions.derivatives,
          extensionFragDepth: l.extensions && l.extensions.fragDepth,
          extensionDrawBuffers: l.extensions && l.extensions.drawBuffers,
          extensionShaderTextureLOD:
            l.extensions && l.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod:
            h || n.has("EXT_shader_texture_lod"),
          customProgramCacheKey: l.customProgramCacheKey(),
        };
      return V;
    },
    getProgramCacheKey: function t(r) {
      var n, a, s, o;
      let c = [];
      if (
        (r.shaderID
          ? c.push(r.shaderID)
          : (c.push(r.customVertexShaderID), c.push(r.customFragmentShaderID)),
        void 0 !== r.defines)
      )
        for (let u in r.defines) c.push(u), c.push(r.defines[u]);
      return (
        !1 === r.isRawShaderMaterial &&
          ((n = c),
          (a = r),
          n.push(a.precision),
          n.push(a.outputEncoding),
          n.push(a.envMapMode),
          n.push(a.envMapCubeUVHeight),
          n.push(a.combine),
          n.push(a.vertexUvs),
          n.push(a.fogExp2),
          n.push(a.sizeAttenuation),
          n.push(a.morphTargetsCount),
          n.push(a.morphAttributeCount),
          n.push(a.numDirLights),
          n.push(a.numPointLights),
          n.push(a.numSpotLights),
          n.push(a.numHemiLights),
          n.push(a.numRectAreaLights),
          n.push(a.numDirLightShadows),
          n.push(a.numPointLightShadows),
          n.push(a.numSpotLightShadows),
          n.push(a.shadowMapType),
          n.push(a.toneMapping),
          n.push(a.numClippingPlanes),
          n.push(a.numClipIntersection),
          n.push(a.depthPacking),
          (s = c),
          (o = r),
          l.disableAll(),
          o.isWebGL2 && l.enable(0),
          o.supportsVertexTextures && l.enable(1),
          o.instancing && l.enable(2),
          o.instancingColor && l.enable(3),
          o.map && l.enable(4),
          o.matcap && l.enable(5),
          o.envMap && l.enable(6),
          o.lightMap && l.enable(7),
          o.aoMap && l.enable(8),
          o.emissiveMap && l.enable(9),
          o.bumpMap && l.enable(10),
          o.normalMap && l.enable(11),
          o.objectSpaceNormalMap && l.enable(12),
          o.tangentSpaceNormalMap && l.enable(13),
          o.clearcoat && l.enable(14),
          o.clearcoatMap && l.enable(15),
          o.clearcoatRoughnessMap && l.enable(16),
          o.clearcoatNormalMap && l.enable(17),
          o.displacementMap && l.enable(18),
          o.specularMap && l.enable(19),
          o.roughnessMap && l.enable(20),
          o.metalnessMap && l.enable(21),
          o.gradientMap && l.enable(22),
          o.alphaMap && l.enable(23),
          o.alphaTest && l.enable(24),
          o.vertexColors && l.enable(25),
          o.vertexAlphas && l.enable(26),
          o.vertexUvs && l.enable(27),
          o.vertexTangents && l.enable(28),
          o.uvsVertexOnly && l.enable(29),
          o.fog && l.enable(30),
          s.push(l.mask),
          l.disableAll(),
          o.useFog && l.enable(0),
          o.flatShading && l.enable(1),
          o.logarithmicDepthBuffer && l.enable(2),
          o.skinning && l.enable(3),
          o.morphTargets && l.enable(4),
          o.morphNormals && l.enable(5),
          o.morphColors && l.enable(6),
          o.premultipliedAlpha && l.enable(7),
          o.shadowMapEnabled && l.enable(8),
          o.physicallyCorrectLights && l.enable(9),
          o.doubleSided && l.enable(10),
          o.flipSided && l.enable(11),
          o.useDepthPacking && l.enable(12),
          o.dithering && l.enable(13),
          o.specularIntensityMap && l.enable(14),
          o.specularColorMap && l.enable(15),
          o.transmission && l.enable(16),
          o.transmissionMap && l.enable(17),
          o.thicknessMap && l.enable(18),
          o.sheen && l.enable(19),
          o.sheenColorMap && l.enable(20),
          o.sheenRoughnessMap && l.enable(21),
          o.decodeVideoTexture && l.enable(22),
          o.opaque && l.enable(23),
          s.push(l.mask),
          c.push(e.outputEncoding)),
        c.push(r.customProgramCacheKey),
        c.join()
      );
    },
    getUniforms: function e(t) {
      let r = f[t.type],
        n;
      if (r) {
        let a = ShaderLib[r];
        n = UniformsUtils.clone(a.uniforms);
      } else n = t.uniforms;
      return n;
    },
    acquireProgram: function t(r, n) {
      let a;
      for (let o = 0, l = u.length; o < l; o++) {
        let c = u[o];
        if (c.cacheKey === n) {
          (a = c), ++a.usedTimes;
          break;
        }
      }
      return void 0 === a && ((a = new WebGLProgram(e, n, r, s)), u.push(a)), a;
    },
    releaseProgram: function e(t) {
      if (0 == --t.usedTimes) {
        let r = u.indexOf(t);
        (u[r] = u[u.length - 1]), u.pop(), t.destroy();
      }
    },
    releaseShaderCache: function e(t) {
      c.remove(t);
    },
    programs: u,
    dispose: function e() {
      c.dispose();
    },
  };
}
function WebGLProperties() {
  let e = new WeakMap();
  return {
    get: function t(r) {
      let n = e.get(r);
      return void 0 === n && ((n = {}), e.set(r, n)), n;
    },
    remove: function t(r) {
      e.delete(r);
    },
    update: function t(r, n, a) {
      e.get(r)[n] = a;
    },
    dispose: function t() {
      e = new WeakMap();
    },
  };
}
function painterSortStable(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.material.id !== t.material.id
    ? e.material.id - t.material.id
    : e.z !== t.z
    ? e.z - t.z
    : e.id - t.id;
}
function reversePainterSortStable(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.z !== t.z
    ? t.z - e.z
    : e.id - t.id;
}
function WebGLRenderList() {
  let e = [],
    t = 0,
    r = [],
    n = [],
    a = [];
  function s(r, n, a, s, o, l) {
    let c = e[t];
    return (
      void 0 === c
        ? ((c = {
            id: r.id,
            object: r,
            geometry: n,
            material: a,
            groupOrder: s,
            renderOrder: r.renderOrder,
            z: o,
            group: l,
          }),
          (e[t] = c))
        : ((c.id = r.id),
          (c.object = r),
          (c.geometry = n),
          (c.material = a),
          (c.groupOrder = s),
          (c.renderOrder = r.renderOrder),
          (c.z = o),
          (c.group = l)),
      t++,
      c
    );
  }
  return {
    opaque: r,
    transmissive: n,
    transparent: a,
    init: function e() {
      (t = 0), (r.length = 0), (n.length = 0), (a.length = 0);
    },
    push: function e(t, o, l, c, u, h) {
      let d = s(t, o, l, c, u, h);
      l.transmission > 0
        ? n.push(d)
        : !0 === l.transparent
        ? a.push(d)
        : r.push(d);
    },
    unshift: function e(t, o, l, c, u, h) {
      let d = s(t, o, l, c, u, h);
      l.transmission > 0
        ? n.unshift(d)
        : !0 === l.transparent
        ? a.unshift(d)
        : r.unshift(d);
    },
    finish: function r() {
      for (let n = t, a = e.length; n < a; n++) {
        let s = e[n];
        if (null === s.id) break;
        (s.id = null),
          (s.object = null),
          (s.geometry = null),
          (s.material = null),
          (s.group = null);
      }
    },
    sort: function e(t, s) {
      r.length > 1 && r.sort(t || painterSortStable),
        n.length > 1 && n.sort(s || reversePainterSortStable),
        a.length > 1 && a.sort(s || reversePainterSortStable);
    },
  };
}
function WebGLRenderLists() {
  let e = new WeakMap();
  return {
    get: function t(r, n) {
      let a;
      return (
        !1 === e.has(r)
          ? ((a = new WebGLRenderList()), e.set(r, [a]))
          : n >= e.get(r).length
          ? ((a = new WebGLRenderList()), e.get(r).push(a))
          : (a = e.get(r)[n]),
        a
      );
    },
    dispose: function t() {
      e = new WeakMap();
    },
  };
}
function UniformsCache() {
  let e = {};
  return {
    get: function (t) {
      if (void 0 !== e[t.id]) return e[t.id];
      let r;
      switch (t.type) {
        case "DirectionalLight":
          r = { direction: new Vector3(), color: new Color() };
          break;
        case "SpotLight":
          r = {
            position: new Vector3(),
            direction: new Vector3(),
            color: new Color(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          r = {
            position: new Vector3(),
            color: new Color(),
            distance: 0,
            decay: 0,
          };
          break;
        case "HemisphereLight":
          r = {
            direction: new Vector3(),
            skyColor: new Color(),
            groundColor: new Color(),
          };
          break;
        case "RectAreaLight":
          r = {
            color: new Color(),
            position: new Vector3(),
            halfWidth: new Vector3(),
            halfHeight: new Vector3(),
          };
      }
      return (e[t.id] = r), r;
    },
  };
}
function ShadowUniformsCache() {
  let e = {};
  return {
    get: function (t) {
      if (void 0 !== e[t.id]) return e[t.id];
      let r;
      switch (t.type) {
        case "DirectionalLight":
        case "SpotLight":
          r = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2(),
          };
          break;
        case "PointLight":
          r = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
      }
      return (e[t.id] = r), r;
    },
  };
}
let nextVersion = 0;
function shadowCastingLightsFirst(e, t) {
  return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0);
}
function WebGLLights(e, t) {
  let r = new UniformsCache(),
    n = ShadowUniformsCache(),
    a = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
    };
  for (let s = 0; s < 9; s++) a.probe.push(new Vector3());
  let o = new Vector3(),
    l = new Matrix4(),
    c = new Matrix4();
  return {
    setup: function s(o, l) {
      let c = 0,
        u = 0,
        h = 0;
      for (let d = 0; d < 9; d++) a.probe[d].set(0, 0, 0);
      let p = 0,
        m = 0,
        f = 0,
        g = 0,
        $ = 0,
        v = 0,
        x = 0,
        y = 0;
      o.sort(shadowCastingLightsFirst);
      let b = !0 !== l ? Math.PI : 1;
      for (let _ = 0, S = o.length; _ < S; _++) {
        let M = o[_],
          w = M.color,
          T = M.intensity,
          A = M.distance,
          C = M.shadow && M.shadow.map ? M.shadow.map.texture : null;
        if (M.isAmbientLight)
          (c += w.r * T * b), (u += w.g * T * b), (h += w.b * T * b);
        else if (M.isLightProbe)
          for (let L = 0; L < 9; L++)
            a.probe[L].addScaledVector(M.sh.coefficients[L], T);
        else if (M.isDirectionalLight) {
          let E = r.get(M);
          if (
            (E.color.copy(M.color).multiplyScalar(M.intensity * b),
            M.castShadow)
          ) {
            let P = M.shadow,
              R = n.get(M);
            (R.shadowBias = P.bias),
              (R.shadowNormalBias = P.normalBias),
              (R.shadowRadius = P.radius),
              (R.shadowMapSize = P.mapSize),
              (a.directionalShadow[p] = R),
              (a.directionalShadowMap[p] = C),
              (a.directionalShadowMatrix[p] = M.shadow.matrix),
              v++;
          }
          (a.directional[p] = E), p++;
        } else if (M.isSpotLight) {
          let D = r.get(M);
          if (
            (D.position.setFromMatrixPosition(M.matrixWorld),
            D.color.copy(w).multiplyScalar(T * b),
            (D.distance = A),
            (D.coneCos = Math.cos(M.angle)),
            (D.penumbraCos = Math.cos(M.angle * (1 - M.penumbra))),
            (D.decay = M.decay),
            M.castShadow)
          ) {
            let B = M.shadow,
              I = n.get(M);
            (I.shadowBias = B.bias),
              (I.shadowNormalBias = B.normalBias),
              (I.shadowRadius = B.radius),
              (I.shadowMapSize = B.mapSize),
              (a.spotShadow[f] = I),
              (a.spotShadowMap[f] = C),
              (a.spotShadowMatrix[f] = M.shadow.matrix),
              y++;
          }
          (a.spot[f] = D), f++;
        } else if (M.isRectAreaLight) {
          let V = r.get(M);
          V.color.copy(w).multiplyScalar(T),
            V.halfWidth.set(0.5 * M.width, 0, 0),
            V.halfHeight.set(0, 0.5 * M.height, 0),
            (a.rectArea[g] = V),
            g++;
        } else if (M.isPointLight) {
          let F = r.get(M);
          if (
            (F.color.copy(M.color).multiplyScalar(M.intensity * b),
            (F.distance = M.distance),
            (F.decay = M.decay),
            M.castShadow)
          ) {
            let G = M.shadow,
              N = n.get(M);
            (N.shadowBias = G.bias),
              (N.shadowNormalBias = G.normalBias),
              (N.shadowRadius = G.radius),
              (N.shadowMapSize = G.mapSize),
              (N.shadowCameraNear = G.camera.near),
              (N.shadowCameraFar = G.camera.far),
              (a.pointShadow[m] = N),
              (a.pointShadowMap[m] = C),
              (a.pointShadowMatrix[m] = M.shadow.matrix),
              x++;
          }
          (a.point[m] = F), m++;
        } else if (M.isHemisphereLight) {
          let U = r.get(M);
          U.skyColor.copy(M.color).multiplyScalar(T * b),
            U.groundColor.copy(M.groundColor).multiplyScalar(T * b),
            (a.hemi[$] = U),
            $++;
        }
      }
      g > 0 &&
        (t.isWebGL2
          ? ((a.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1),
            (a.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2))
          : !0 === e.has("OES_texture_float_linear")
          ? ((a.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1),
            (a.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2))
          : !0 === e.has("OES_texture_half_float_linear")
          ? ((a.rectAreaLTC1 = UniformsLib.LTC_HALF_1),
            (a.rectAreaLTC2 = UniformsLib.LTC_HALF_2))
          : console.error(
              "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
            )),
        (a.ambient[0] = c),
        (a.ambient[1] = u),
        (a.ambient[2] = h);
      let z = a.hash;
      (z.directionalLength !== p ||
        z.pointLength !== m ||
        z.spotLength !== f ||
        z.rectAreaLength !== g ||
        z.hemiLength !== $ ||
        z.numDirectionalShadows !== v ||
        z.numPointShadows !== x ||
        z.numSpotShadows !== y) &&
        ((a.directional.length = p),
        (a.spot.length = f),
        (a.rectArea.length = g),
        (a.point.length = m),
        (a.hemi.length = $),
        (a.directionalShadow.length = v),
        (a.directionalShadowMap.length = v),
        (a.pointShadow.length = x),
        (a.pointShadowMap.length = x),
        (a.spotShadow.length = y),
        (a.spotShadowMap.length = y),
        (a.directionalShadowMatrix.length = v),
        (a.pointShadowMatrix.length = x),
        (a.spotShadowMatrix.length = y),
        (z.directionalLength = p),
        (z.pointLength = m),
        (z.spotLength = f),
        (z.rectAreaLength = g),
        (z.hemiLength = $),
        (z.numDirectionalShadows = v),
        (z.numPointShadows = x),
        (z.numSpotShadows = y),
        (a.version = nextVersion++));
    },
    setupView: function e(t, r) {
      let n = 0,
        s = 0,
        u = 0,
        h = 0,
        d = 0,
        p = r.matrixWorldInverse;
      for (let m = 0, f = t.length; m < f; m++) {
        let g = t[m];
        if (g.isDirectionalLight) {
          let $ = a.directional[n];
          $.direction.setFromMatrixPosition(g.matrixWorld),
            o.setFromMatrixPosition(g.target.matrixWorld),
            $.direction.sub(o),
            $.direction.transformDirection(p),
            n++;
        } else if (g.isSpotLight) {
          let v = a.spot[u];
          v.position.setFromMatrixPosition(g.matrixWorld),
            v.position.applyMatrix4(p),
            v.direction.setFromMatrixPosition(g.matrixWorld),
            o.setFromMatrixPosition(g.target.matrixWorld),
            v.direction.sub(o),
            v.direction.transformDirection(p),
            u++;
        } else if (g.isRectAreaLight) {
          let x = a.rectArea[h];
          x.position.setFromMatrixPosition(g.matrixWorld),
            x.position.applyMatrix4(p),
            c.identity(),
            l.copy(g.matrixWorld),
            l.premultiply(p),
            c.extractRotation(l),
            x.halfWidth.set(0.5 * g.width, 0, 0),
            x.halfHeight.set(0, 0.5 * g.height, 0),
            x.halfWidth.applyMatrix4(c),
            x.halfHeight.applyMatrix4(c),
            h++;
        } else if (g.isPointLight) {
          let y = a.point[s];
          y.position.setFromMatrixPosition(g.matrixWorld),
            y.position.applyMatrix4(p),
            s++;
        } else if (g.isHemisphereLight) {
          let b = a.hemi[d];
          b.direction.setFromMatrixPosition(g.matrixWorld),
            b.direction.transformDirection(p),
            d++;
        }
      }
    },
    state: a,
  };
}
function WebGLRenderState(e, t) {
  let r = new WebGLLights(e, t),
    n = [],
    a = [];
  return {
    init: function e() {
      (n.length = 0), (a.length = 0);
    },
    state: { lightsArray: n, shadowsArray: a, lights: r },
    setupLights: function e(t) {
      r.setup(n, t);
    },
    setupLightsView: function e(t) {
      r.setupView(n, t);
    },
    pushLight: function e(t) {
      n.push(t);
    },
    pushShadow: function e(t) {
      a.push(t);
    },
  };
}
function WebGLRenderStates(e, t) {
  let r = new WeakMap();
  return {
    get: function n(a, s = 0) {
      let o;
      return (
        !1 === r.has(a)
          ? ((o = new WebGLRenderState(e, t)), r.set(a, [o]))
          : s >= r.get(a).length
          ? ((o = new WebGLRenderState(e, t)), r.get(a).push(o))
          : (o = r.get(a)[s]),
        o
      );
    },
    dispose: function e() {
      r = new WeakMap();
    },
  };
}
class MeshDepthMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = BasicDepthPacking),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
MeshDepthMaterial.prototype.isMeshDepthMaterial = !0;
class MeshDistanceMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new Vector3()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
MeshDistanceMaterial.prototype.isMeshDistanceMaterial = !0;
let vertex = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
  fragment =
    "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}";
function WebGLShadowMap(e, t, r) {
  let n = new Frustum(),
    a = new Vector2(),
    s = new Vector2(),
    o = new Vector4(),
    l = new MeshDepthMaterial({ depthPacking: RGBADepthPacking }),
    c = new MeshDistanceMaterial(),
    u = {},
    h = r.maxTextureSize,
    d = { 0: BackSide, 1: FrontSide, 2: DoubleSide },
    p = new ShaderMaterial({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Vector2() },
        radius: { value: 4 },
      },
      vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
      fragmentShader:
        "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
    }),
    m = p.clone();
  m.defines.HORIZONTAL_PASS = 1;
  let f = new BufferGeometry();
  f.setAttribute(
    "position",
    new BufferAttribute(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  let g = new Mesh(f, p),
    $ = this;
  function v(r, n) {
    let a = t.update(g);
    p.defines.VSM_SAMPLES !== r.blurSamples &&
      ((p.defines.VSM_SAMPLES = r.blurSamples),
      (m.defines.VSM_SAMPLES = r.blurSamples),
      (p.needsUpdate = !0),
      (m.needsUpdate = !0)),
      (p.uniforms.shadow_pass.value = r.map.texture),
      (p.uniforms.resolution.value = r.mapSize),
      (p.uniforms.radius.value = r.radius),
      e.setRenderTarget(r.mapPass),
      e.clear(),
      e.renderBufferDirect(n, null, a, p, g, null),
      (m.uniforms.shadow_pass.value = r.mapPass.texture),
      (m.uniforms.resolution.value = r.mapSize),
      (m.uniforms.radius.value = r.radius),
      e.setRenderTarget(r.map),
      e.clear(),
      e.renderBufferDirect(n, null, a, m, g, null);
  }
  function x(t, r, n, a, s, o) {
    let h = null,
      p =
        !0 === n.isPointLight
          ? t.customDistanceMaterial
          : t.customDepthMaterial;
    if (
      ((h = void 0 !== p ? p : !0 === n.isPointLight ? c : l),
      (e.localClippingEnabled &&
        !0 === r.clipShadows &&
        0 !== r.clippingPlanes.length) ||
        (r.displacementMap && 0 !== r.displacementScale) ||
        (r.alphaMap && r.alphaTest > 0))
    ) {
      let m = h.uuid,
        f = r.uuid,
        g = u[m];
      void 0 === g && ((g = {}), (u[m] = g));
      let $ = g[f];
      void 0 === $ && (($ = h.clone()), (g[f] = $)), (h = $);
    }
    return (
      (h.visible = r.visible),
      (h.wireframe = r.wireframe),
      o === VSMShadowMap
        ? (h.side = null !== r.shadowSide ? r.shadowSide : r.side)
        : (h.side = null !== r.shadowSide ? r.shadowSide : d[r.side]),
      (h.alphaMap = r.alphaMap),
      (h.alphaTest = r.alphaTest),
      (h.clipShadows = r.clipShadows),
      (h.clippingPlanes = r.clippingPlanes),
      (h.clipIntersection = r.clipIntersection),
      (h.displacementMap = r.displacementMap),
      (h.displacementScale = r.displacementScale),
      (h.displacementBias = r.displacementBias),
      (h.wireframeLinewidth = r.wireframeLinewidth),
      (h.linewidth = r.linewidth),
      !0 === n.isPointLight &&
        !0 === h.isMeshDistanceMaterial &&
        (h.referencePosition.setFromMatrixPosition(n.matrixWorld),
        (h.nearDistance = a),
        (h.farDistance = s)),
      h
    );
  }
  function y(r, a, s, o, l) {
    if (!1 === r.visible) return;
    let c = r.layers.test(a.layers);
    if (
      c &&
      (r.isMesh || r.isLine || r.isPoints) &&
      (r.castShadow || (r.receiveShadow && l === VSMShadowMap)) &&
      (!r.frustumCulled || n.intersectsObject(r))
    ) {
      r.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, r.matrixWorld);
      let u = t.update(r),
        h = r.material;
      if (Array.isArray(h)) {
        let d = u.groups;
        for (let p = 0, m = d.length; p < m; p++) {
          let f = d[p],
            g = h[f.materialIndex];
          if (g && g.visible) {
            let $ = x(r, g, o, s.near, s.far, l);
            e.renderBufferDirect(s, null, u, $, r, f);
          }
        }
      } else if (h.visible) {
        let v = x(r, h, o, s.near, s.far, l);
        e.renderBufferDirect(s, null, u, v, r, null);
      }
    }
    let b = r.children;
    for (let _ = 0, S = b.length; _ < S; _++) y(b[_], a, s, o, l);
  }
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = PCFShadowMap),
    (this.render = function (t, r, l) {
      if (
        !1 === $.enabled ||
        (!1 === $.autoUpdate && !1 === $.needsUpdate) ||
        0 === t.length
      )
        return;
      let c = e.getRenderTarget(),
        u = e.getActiveCubeFace(),
        d = e.getActiveMipmapLevel(),
        p = e.state;
      p.setBlending(NoBlending),
        p.buffers.color.setClear(1, 1, 1, 1),
        p.buffers.depth.setTest(!0),
        p.setScissorTest(!1);
      for (let m = 0, f = t.length; m < f; m++) {
        let g = t[m],
          x = g.shadow;
        if (void 0 === x) {
          console.warn("THREE.WebGLShadowMap:", g, "has no shadow.");
          continue;
        }
        if (!1 === x.autoUpdate && !1 === x.needsUpdate) continue;
        a.copy(x.mapSize);
        let b = x.getFrameExtents();
        if (
          (a.multiply(b),
          s.copy(x.mapSize),
          (a.x > h || a.y > h) &&
            (a.x > h &&
              ((s.x = Math.floor(h / b.x)),
              (a.x = s.x * b.x),
              (x.mapSize.x = s.x)),
            a.y > h &&
              ((s.y = Math.floor(h / b.y)),
              (a.y = s.y * b.y),
              (x.mapSize.y = s.y))),
          null !== x.map ||
            x.isPointLightShadow ||
            this.type !== VSMShadowMap ||
            ((x.map = new WebGLRenderTarget(a.x, a.y)),
            (x.map.texture.name = g.name + ".shadowMap"),
            (x.mapPass = new WebGLRenderTarget(a.x, a.y)),
            x.camera.updateProjectionMatrix()),
          null === x.map)
        ) {
          let _ = {
            minFilter: NearestFilter,
            magFilter: NearestFilter,
            format: RGBAFormat,
          };
          (x.map = new WebGLRenderTarget(a.x, a.y, _)),
            (x.map.texture.name = g.name + ".shadowMap"),
            x.camera.updateProjectionMatrix();
        }
        e.setRenderTarget(x.map), e.clear();
        let S = x.getViewportCount();
        for (let M = 0; M < S; M++) {
          let w = x.getViewport(M);
          o.set(s.x * w.x, s.y * w.y, s.x * w.z, s.y * w.w),
            p.viewport(o),
            x.updateMatrices(g, M),
            (n = x.getFrustum()),
            y(r, l, x.camera, g, this.type);
        }
        x.isPointLightShadow || this.type !== VSMShadowMap || v(x, l),
          (x.needsUpdate = !1);
      }
      ($.needsUpdate = !1), e.setRenderTarget(c, u, d);
    });
}
function WebGLState(e, t, r) {
  let n = r.isWebGL2,
    a = new (function t() {
      let r = !1,
        n = new Vector4(),
        a = null,
        s = new Vector4(0, 0, 0, 0);
      return {
        setMask: function (t) {
          a === t || r || (e.colorMask(t, t, t, t), (a = t));
        },
        setLocked: function (e) {
          r = e;
        },
        setClear: function (t, r, a, o, l) {
          !0 === l && ((t *= o), (r *= o), (a *= o)),
            n.set(t, r, a, o),
            !1 === s.equals(n) && (e.clearColor(t, r, a, o), s.copy(n));
        },
        reset: function () {
          (r = !1), (a = null), s.set(-1, 0, 0, 0);
        },
      };
    })(),
    s = new (function t() {
      let r = !1,
        n = null,
        a = null,
        s = null;
      return {
        setTest: function (e) {
          e ? N(2929) : U(2929);
        },
        setMask: function (t) {
          n === t || r || (e.depthMask(t), (n = t));
        },
        setFunc: function (t) {
          if (a !== t) {
            if (t)
              switch (t) {
                case NeverDepth:
                  e.depthFunc(512);
                  break;
                case AlwaysDepth:
                  e.depthFunc(519);
                  break;
                case LessDepth:
                  e.depthFunc(513);
                  break;
                case LessEqualDepth:
                  e.depthFunc(515);
                  break;
                case EqualDepth:
                  e.depthFunc(514);
                  break;
                case GreaterEqualDepth:
                  e.depthFunc(518);
                  break;
                case GreaterDepth:
                  e.depthFunc(516);
                  break;
                case NotEqualDepth:
                  e.depthFunc(517);
                  break;
                default:
                  e.depthFunc(515);
              }
            else e.depthFunc(515);
            a = t;
          }
        },
        setLocked: function (e) {
          r = e;
        },
        setClear: function (t) {
          s !== t && (e.clearDepth(t), (s = t));
        },
        reset: function () {
          (r = !1), (n = null), (a = null), (s = null);
        },
      };
    })(),
    o = new (function t() {
      let r = !1,
        n = null,
        a = null,
        s = null,
        o = null,
        l = null,
        c = null,
        u = null,
        h = null;
      return {
        setTest: function (e) {
          r || (e ? N(2960) : U(2960));
        },
        setMask: function (t) {
          n === t || r || (e.stencilMask(t), (n = t));
        },
        setFunc: function (t, r, n) {
          (a !== t || s !== r || o !== n) &&
            (e.stencilFunc(t, r, n), (a = t), (s = r), (o = n));
        },
        setOp: function (t, r, n) {
          (l !== t || c !== r || u !== n) &&
            (e.stencilOp(t, r, n), (l = t), (c = r), (u = n));
        },
        setLocked: function (e) {
          r = e;
        },
        setClear: function (t) {
          h !== t && (e.clearStencil(t), (h = t));
        },
        reset: function () {
          (r = !1),
            (n = null),
            (a = null),
            (s = null),
            (o = null),
            (l = null),
            (c = null),
            (u = null),
            (h = null);
        },
      };
    })(),
    l = {},
    c = {},
    u = new WeakMap(),
    h = [],
    d = null,
    p = !1,
    m = null,
    f = null,
    g = null,
    $ = null,
    v = null,
    x = null,
    y = null,
    b = !1,
    _ = null,
    S = null,
    M = null,
    w = null,
    T = null,
    A = e.getParameter(35661),
    C = !1,
    L = 0,
    E = e.getParameter(7938);
  -1 !== E.indexOf("WebGL")
    ? (C = (L = parseFloat(/^WebGL (\d)/.exec(E)[1])) >= 1)
    : -1 !== E.indexOf("OpenGL ES") &&
      (C = (L = parseFloat(/^OpenGL ES (\d)/.exec(E)[1])) >= 2);
  let P = null,
    R = {},
    D = e.getParameter(3088),
    B = e.getParameter(2978),
    I = new Vector4().fromArray(D),
    V = new Vector4().fromArray(B);
  function F(t, r, n) {
    let a = new Uint8Array(4),
      s = e.createTexture();
    e.bindTexture(t, s),
      e.texParameteri(t, 10241, 9728),
      e.texParameteri(t, 10240, 9728);
    for (let o = 0; o < n; o++)
      e.texImage2D(r + o, 0, 6408, 1, 1, 0, 6408, 5121, a);
    return s;
  }
  let G = {};
  function N(t) {
    !0 !== l[t] && (e.enable(t), (l[t] = !0));
  }
  function U(t) {
    !1 !== l[t] && (e.disable(t), (l[t] = !1));
  }
  (G[3553] = F(3553, 3553, 1)),
    (G[34067] = F(34067, 34069, 6)),
    a.setClear(0, 0, 0, 1),
    s.setClear(1),
    o.setClear(0),
    N(2929),
    s.setFunc(LessEqualDepth),
    H(!1),
    j(CullFaceBack),
    N(2884),
    W(NoBlending);
  let z = {
    [AddEquation]: 32774,
    [SubtractEquation]: 32778,
    [ReverseSubtractEquation]: 32779,
  };
  if (n) (z[MinEquation] = 32775), (z[MaxEquation] = 32776);
  else {
    let O = t.get("EXT_blend_minmax");
    null !== O && ((z[MinEquation] = O.MIN_EXT), (z[MaxEquation] = O.MAX_EXT));
  }
  let k = {
    [ZeroFactor]: 0,
    [OneFactor]: 1,
    [SrcColorFactor]: 768,
    [SrcAlphaFactor]: 770,
    [SrcAlphaSaturateFactor]: 776,
    [DstColorFactor]: 774,
    [DstAlphaFactor]: 772,
    [OneMinusSrcColorFactor]: 769,
    [OneMinusSrcAlphaFactor]: 771,
    [OneMinusDstColorFactor]: 775,
    [OneMinusDstAlphaFactor]: 773,
  };
  function W(t, r, n, a, s, o, l, c) {
    if (t === NoBlending) {
      !0 === p && (U(3042), (p = !1));
      return;
    }
    if ((!1 === p && (N(3042), (p = !0)), t !== CustomBlending)) {
      if (t !== m || c !== b) {
        if (
          ((f !== AddEquation || v !== AddEquation) &&
            (e.blendEquation(32774), (f = AddEquation), (v = AddEquation)),
          c)
        )
          switch (t) {
            case NormalBlending:
              e.blendFuncSeparate(1, 771, 1, 771);
              break;
            case AdditiveBlending:
              e.blendFunc(1, 1);
              break;
            case SubtractiveBlending:
              e.blendFuncSeparate(0, 769, 0, 1);
              break;
            case MultiplyBlending:
              e.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        else
          switch (t) {
            case NormalBlending:
              e.blendFuncSeparate(770, 771, 1, 771);
              break;
            case AdditiveBlending:
              e.blendFunc(770, 1);
              break;
            case SubtractiveBlending:
              e.blendFuncSeparate(0, 769, 0, 1);
              break;
            case MultiplyBlending:
              e.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        (g = null), ($ = null), (x = null), (y = null), (m = t), (b = c);
      }
      return;
    }
    (s = s || r),
      (o = o || n),
      (l = l || a),
      (r !== f || s !== v) &&
        (e.blendEquationSeparate(z[r], z[s]), (f = r), (v = s)),
      (n !== g || a !== $ || o !== x || l !== y) &&
        (e.blendFuncSeparate(k[n], k[a], k[o], k[l]),
        (g = n),
        ($ = a),
        (x = o),
        (y = l)),
      (m = t),
      (b = null);
  }
  function H(t) {
    _ !== t && (t ? e.frontFace(2304) : e.frontFace(2305), (_ = t));
  }
  function j(t) {
    t !== CullFaceNone
      ? (N(2884),
        t !== S &&
          (t === CullFaceBack
            ? e.cullFace(1029)
            : t === CullFaceFront
            ? e.cullFace(1028)
            : e.cullFace(1032)))
      : U(2884),
      (S = t);
  }
  function q(t, r, n) {
    t
      ? (N(32823),
        (w !== r || T !== n) && (e.polygonOffset(r, n), (w = r), (T = n)))
      : U(32823);
  }
  function X(t) {
    void 0 === t && (t = 33984 + A - 1),
      P !== t && (e.activeTexture(t), (P = t));
  }
  return {
    buffers: { color: a, depth: s, stencil: o },
    enable: N,
    disable: U,
    bindFramebuffer: function t(r, a) {
      return (
        c[r] !== a &&
        (e.bindFramebuffer(r, a),
        (c[r] = a),
        n && (36009 === r && (c[36160] = a), 36160 === r && (c[36009] = a)),
        !0)
      );
    },
    drawBuffers: function n(a, s) {
      let o = h,
        l = !1;
      if (a) {
        if (
          (void 0 === (o = u.get(s)) && ((o = []), u.set(s, o)),
          a.isWebGLMultipleRenderTargets)
        ) {
          let c = a.texture;
          if (o.length !== c.length || 36064 !== o[0]) {
            for (let d = 0, p = c.length; d < p; d++) o[d] = 36064 + d;
            (o.length = c.length), (l = !0);
          }
        } else 36064 !== o[0] && ((o[0] = 36064), (l = !0));
      } else 1029 !== o[0] && ((o[0] = 1029), (l = !0));
      l &&
        (r.isWebGL2
          ? e.drawBuffers(o)
          : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(o));
    },
    useProgram: function t(r) {
      return d !== r && (e.useProgram(r), (d = r), !0);
    },
    setBlending: W,
    setMaterial: function e(t, r) {
      t.side === DoubleSide ? U(2884) : N(2884);
      let n = t.side === BackSide;
      r && (n = !n),
        H(n),
        t.blending === NormalBlending && !1 === t.transparent
          ? W(NoBlending)
          : W(
              t.blending,
              t.blendEquation,
              t.blendSrc,
              t.blendDst,
              t.blendEquationAlpha,
              t.blendSrcAlpha,
              t.blendDstAlpha,
              t.premultipliedAlpha
            ),
        s.setFunc(t.depthFunc),
        s.setTest(t.depthTest),
        s.setMask(t.depthWrite),
        a.setMask(t.colorWrite);
      let l = t.stencilWrite;
      o.setTest(l),
        l &&
          (o.setMask(t.stencilWriteMask),
          o.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
          o.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
        q(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
        !0 === t.alphaToCoverage ? N(32926) : U(32926);
    },
    setFlipSided: H,
    setCullFace: j,
    setLineWidth: function t(r) {
      r !== M && (C && e.lineWidth(r), (M = r));
    },
    setPolygonOffset: q,
    setScissorTest: function e(t) {
      t ? N(3089) : U(3089);
    },
    activeTexture: X,
    bindTexture: function t(r, n) {
      null === P && X();
      let a = R[P];
      void 0 === a && ((a = { type: void 0, texture: void 0 }), (R[P] = a)),
        (a.type !== r || a.texture !== n) &&
          (e.bindTexture(r, n || G[r]), (a.type = r), (a.texture = n));
    },
    unbindTexture: function t() {
      let r = R[P];
      void 0 !== r &&
        void 0 !== r.type &&
        (e.bindTexture(r.type, null), (r.type = void 0), (r.texture = void 0));
    },
    compressedTexImage2D: function t() {
      try {
        e.compressedTexImage2D.apply(e, arguments);
      } catch (r) {
        console.error("THREE.WebGLState:", r);
      }
    },
    texImage2D: function t() {
      try {
        e.texImage2D.apply(e, arguments);
      } catch (r) {
        console.error("THREE.WebGLState:", r);
      }
    },
    texImage3D: function t() {
      try {
        e.texImage3D.apply(e, arguments);
      } catch (r) {
        console.error("THREE.WebGLState:", r);
      }
    },
    texStorage2D: function t() {
      try {
        e.texStorage2D.apply(e, arguments);
      } catch (r) {
        console.error("THREE.WebGLState:", r);
      }
    },
    texStorage3D: function t() {
      try {
        e.texStorage3D.apply(e, arguments);
      } catch (r) {
        console.error("THREE.WebGLState:", r);
      }
    },
    texSubImage2D: function t() {
      try {
        e.texSubImage2D.apply(e, arguments);
      } catch (r) {
        console.error("THREE.WebGLState:", r);
      }
    },
    texSubImage3D: function t() {
      try {
        e.texSubImage3D.apply(e, arguments);
      } catch (r) {
        console.error("THREE.WebGLState:", r);
      }
    },
    compressedTexSubImage2D: function t() {
      try {
        e.compressedTexSubImage2D.apply(e, arguments);
      } catch (r) {
        console.error("THREE.WebGLState:", r);
      }
    },
    scissor: function t(r) {
      !1 === I.equals(r) && (e.scissor(r.x, r.y, r.z, r.w), I.copy(r));
    },
    viewport: function t(r) {
      !1 === V.equals(r) && (e.viewport(r.x, r.y, r.z, r.w), V.copy(r));
    },
    reset: function t() {
      e.disable(3042),
        e.disable(2884),
        e.disable(2929),
        e.disable(32823),
        e.disable(3089),
        e.disable(2960),
        e.disable(32926),
        e.blendEquation(32774),
        e.blendFunc(1, 0),
        e.blendFuncSeparate(1, 0, 1, 0),
        e.colorMask(!0, !0, !0, !0),
        e.clearColor(0, 0, 0, 0),
        e.depthMask(!0),
        e.depthFunc(513),
        e.clearDepth(1),
        e.stencilMask(4294967295),
        e.stencilFunc(519, 0, 4294967295),
        e.stencilOp(7680, 7680, 7680),
        e.clearStencil(0),
        e.cullFace(1029),
        e.frontFace(2305),
        e.polygonOffset(0, 0),
        e.activeTexture(33984),
        e.bindFramebuffer(36160, null),
        !0 === n &&
          (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)),
        e.useProgram(null),
        e.lineWidth(1),
        e.scissor(0, 0, e.canvas.width, e.canvas.height),
        e.viewport(0, 0, e.canvas.width, e.canvas.height),
        (l = {}),
        (P = null),
        (R = {}),
        (c = {}),
        (u = new WeakMap()),
        (h = []),
        (d = null),
        (p = !1),
        (m = null),
        (f = null),
        (g = null),
        ($ = null),
        (v = null),
        (x = null),
        (y = null),
        (b = !1),
        (_ = null),
        (S = null),
        (M = null),
        (w = null),
        (T = null),
        I.set(0, 0, e.canvas.width, e.canvas.height),
        V.set(0, 0, e.canvas.width, e.canvas.height),
        a.reset(),
        s.reset(),
        o.reset();
    },
  };
}
function WebGLTextures(e, t, r, n, a, s, o) {
  let l = a.isWebGL2,
    c = a.maxTextures,
    u = a.maxCubemapSize,
    h = a.maxTextureSize,
    d = a.maxSamples,
    p = t.has("WEBGL_multisampled_render_to_texture")
      ? t.get("WEBGL_multisampled_render_to_texture")
      : null,
    m = /OculusBrowser/g.test(navigator.userAgent),
    f = new WeakMap(),
    g,
    $ = new WeakMap(),
    v = !1;
  try {
    v =
      "undefined" != typeof OffscreenCanvas &&
      null !== new OffscreenCanvas(1, 1).getContext("2d");
  } catch (x) {}
  function y(e, t) {
    return v ? new OffscreenCanvas(e, t) : createElementNS("canvas");
  }
  function b(e, t, r, n) {
    let a = 1;
    if (
      ((e.width > n || e.height > n) && (a = n / Math.max(e.width, e.height)),
      a < 1 || !0 === t)
    ) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          e instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          e instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
      ) {
        let s = t ? floorPowerOfTwo : Math.floor,
          o = s(a * e.width),
          l = s(a * e.height);
        void 0 === g && (g = y(o, l));
        let c = r ? y(o, l) : g;
        (c.width = o), (c.height = l);
        let u = c.getContext("2d");
        return (
          u.drawImage(e, 0, 0, o, l),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              e.width +
              "x" +
              e.height +
              ") to (" +
              o +
              "x" +
              l +
              ")."
          ),
          c
        );
      }
      "data" in e &&
        console.warn(
          "THREE.WebGLRenderer: Image in DataTexture is too big (" +
            e.width +
            "x" +
            e.height +
            ")."
        );
    }
    return e;
  }
  function _(e) {
    return isPowerOfTwo(e.width) && isPowerOfTwo(e.height);
  }
  function S(e, t) {
    return (
      e.generateMipmaps &&
      t &&
      e.minFilter !== NearestFilter &&
      e.minFilter !== LinearFilter
    );
  }
  function M(t) {
    e.generateMipmap(t);
  }
  function w(r, n, a, s, o = !1) {
    if (!1 === l) return n;
    if (null !== r) {
      if (void 0 !== e[r]) return e[r];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          r +
          "'"
      );
    }
    let c = n;
    return (
      6403 === n &&
        (5126 === a && (c = 33326),
        5131 === a && (c = 33325),
        5121 === a && (c = 33321)),
      33319 === n &&
        (5126 === a && (c = 33328),
        5131 === a && (c = 33327),
        5121 === a && (c = 33323)),
      6408 === n &&
        (5126 === a && (c = 34836),
        5131 === a && (c = 34842),
        5121 === a && (c = s === sRGBEncoding && !1 === o ? 35907 : 32856),
        32819 === a && (c = 32854),
        32820 === a && (c = 32855)),
      (33325 === c ||
        33326 === c ||
        33327 === c ||
        33328 === c ||
        34842 === c ||
        34836 === c) &&
        t.get("EXT_color_buffer_float"),
      c
    );
  }
  function T(e, t, r) {
    return !0 === S(e, r) ||
      (e.isFramebufferTexture &&
        e.minFilter !== NearestFilter &&
        e.minFilter !== LinearFilter)
      ? Math.log2(Math.max(t.width, t.height)) + 1
      : void 0 !== e.mipmaps && e.mipmaps.length > 0
      ? e.mipmaps.length
      : e.isCompressedTexture && Array.isArray(e.image)
      ? t.mipmaps.length
      : 1;
  }
  function A(e) {
    return e === NearestFilter ||
      e === NearestMipmapNearestFilter ||
      e === NearestMipmapLinearFilter
      ? 9728
      : 9729;
  }
  function C(e) {
    let t = e.target;
    t.removeEventListener("dispose", C),
      (function e(t) {
        let r = n.get(t);
        if (void 0 === r.__webglInit) return;
        let a = t.source,
          s = $.get(a);
        if (s) {
          let o = s[r.__cacheKey];
          o.usedTimes--,
            0 === o.usedTimes && E(t),
            0 === Object.keys(s).length && $.delete(a);
        }
        n.remove(t);
      })(t),
      t.isVideoTexture && f.delete(t);
  }
  function L(t) {
    let r = t.target;
    r.removeEventListener("dispose", L),
      (function t(r) {
        let a = r.texture,
          s = n.get(r),
          l = n.get(a);
        if (
          (void 0 !== l.__webglTexture &&
            (e.deleteTexture(l.__webglTexture), o.memory.textures--),
          r.depthTexture && r.depthTexture.dispose(),
          r.isWebGLCubeRenderTarget)
        )
          for (let c = 0; c < 6; c++)
            e.deleteFramebuffer(s.__webglFramebuffer[c]),
              s.__webglDepthbuffer &&
                e.deleteRenderbuffer(s.__webglDepthbuffer[c]);
        else
          e.deleteFramebuffer(s.__webglFramebuffer),
            s.__webglDepthbuffer && e.deleteRenderbuffer(s.__webglDepthbuffer),
            s.__webglMultisampledFramebuffer &&
              e.deleteFramebuffer(s.__webglMultisampledFramebuffer),
            s.__webglColorRenderbuffer &&
              e.deleteRenderbuffer(s.__webglColorRenderbuffer),
            s.__webglDepthRenderbuffer &&
              e.deleteRenderbuffer(s.__webglDepthRenderbuffer);
        if (r.isWebGLMultipleRenderTargets)
          for (let u = 0, h = a.length; u < h; u++) {
            let d = n.get(a[u]);
            d.__webglTexture &&
              (e.deleteTexture(d.__webglTexture), o.memory.textures--),
              n.remove(a[u]);
          }
        n.remove(a), n.remove(r);
      })(r);
  }
  function E(t) {
    let r = n.get(t);
    e.deleteTexture(r.__webglTexture);
    let a = t.source,
      s = $.get(a);
    delete s[r.__cacheKey], o.memory.textures--;
  }
  let P = 0;
  function R(e, t) {
    let a = n.get(e);
    if (
      (e.isVideoTexture &&
        (function e(t) {
          let r = o.render.frame;
          f.get(t) !== r && (f.set(t, r), t.update());
        })(e),
      !1 === e.isRenderTargetTexture &&
        e.version > 0 &&
        a.__version !== e.version)
    ) {
      let s = e.image;
      if (null === s)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (!1 === s.complete)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        F(a, e, t);
        return;
      }
    }
    r.activeTexture(33984 + t), r.bindTexture(3553, a.__webglTexture);
  }
  let D = {
      [RepeatWrapping]: 10497,
      [ClampToEdgeWrapping]: 33071,
      [MirroredRepeatWrapping]: 33648,
    },
    B = {
      [NearestFilter]: 9728,
      [NearestMipmapNearestFilter]: 9984,
      [NearestMipmapLinearFilter]: 9986,
      [LinearFilter]: 9729,
      [LinearMipmapNearestFilter]: 9985,
      [LinearMipmapLinearFilter]: 9987,
    };
  function I(r, s, o) {
    if (
      (o
        ? (e.texParameteri(r, 10242, D[s.wrapS]),
          e.texParameteri(r, 10243, D[s.wrapT]),
          (32879 === r || 35866 === r) && e.texParameteri(r, 32882, D[s.wrapR]),
          e.texParameteri(r, 10240, B[s.magFilter]),
          e.texParameteri(r, 10241, B[s.minFilter]))
        : (e.texParameteri(r, 10242, 33071),
          e.texParameteri(r, 10243, 33071),
          (32879 === r || 35866 === r) && e.texParameteri(r, 32882, 33071),
          (s.wrapS !== ClampToEdgeWrapping ||
            s.wrapT !== ClampToEdgeWrapping) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          e.texParameteri(r, 10240, A(s.magFilter)),
          e.texParameteri(r, 10241, A(s.minFilter)),
          s.minFilter !== NearestFilter &&
            s.minFilter !== LinearFilter &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      !0 === t.has("EXT_texture_filter_anisotropic"))
    ) {
      let c = t.get("EXT_texture_filter_anisotropic");
      (s.type !== FloatType || !1 !== t.has("OES_texture_float_linear")) &&
        (!1 !== l ||
          s.type !== HalfFloatType ||
          !1 !== t.has("OES_texture_half_float_linear")) &&
        (s.anisotropy > 1 || n.get(s).__currentAnisotropy) &&
        (e.texParameterf(
          r,
          c.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(s.anisotropy, a.getMaxAnisotropy())
        ),
        (n.get(s).__currentAnisotropy = s.anisotropy));
    }
  }
  function V(t, r) {
    let n = !1;
    void 0 === t.__webglInit &&
      ((t.__webglInit = !0), r.addEventListener("dispose", C));
    let a = r.source,
      s = $.get(a);
    void 0 === s && ((s = {}), $.set(a, s));
    let l = (function e(t) {
      let r = [];
      return (
        r.push(t.wrapS),
        r.push(t.wrapT),
        r.push(t.magFilter),
        r.push(t.minFilter),
        r.push(t.anisotropy),
        r.push(t.internalFormat),
        r.push(t.format),
        r.push(t.type),
        r.push(t.generateMipmaps),
        r.push(t.premultiplyAlpha),
        r.push(t.flipY),
        r.push(t.unpackAlignment),
        r.push(t.encoding),
        r.join()
      );
    })(r);
    if (l !== t.__cacheKey) {
      void 0 === s[l] &&
        ((s[l] = { texture: e.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (n = !0)),
        s[l].usedTimes++;
      let c = s[t.__cacheKey];
      void 0 !== c && (s[t.__cacheKey].usedTimes--, 0 === c.usedTimes && E(r)),
        (t.__cacheKey = l),
        (t.__webglTexture = s[l].texture);
    }
    return n;
  }
  function F(t, n, a) {
    let o = 3553;
    n.isDataArrayTexture && (o = 35866), n.isData3DTexture && (o = 32879);
    let c = V(t, n),
      u = n.source;
    if (
      (r.activeTexture(33984 + a),
      r.bindTexture(o, t.__webglTexture),
      u.version !== u.__currentVersion || !0 === c)
    ) {
      var d;
      e.pixelStorei(37440, n.flipY),
        e.pixelStorei(37441, n.premultiplyAlpha),
        e.pixelStorei(3317, n.unpackAlignment),
        e.pixelStorei(37443, 0);
      let p =
          ((d = n),
          !l &&
            (d.wrapS !== ClampToEdgeWrapping ||
              d.wrapT !== ClampToEdgeWrapping ||
              (d.minFilter !== NearestFilter &&
                d.minFilter !== LinearFilter)) &&
            !1 === _(n.image)),
        m = b(n.image, p, !1, h);
      m = k(n, m);
      let f = _(m) || l,
        g = s.convert(n.format, n.encoding),
        $ = s.convert(n.type),
        v = w(n.internalFormat, g, $, n.encoding, n.isVideoTexture);
      I(o, n, f);
      let x,
        y = n.mipmaps,
        A = l && !0 !== n.isVideoTexture,
        C = void 0 === t.__version || !0 === c,
        L = T(n, m, f);
      if (n.isDepthTexture)
        (v = 6402),
          l
            ? (v =
                n.type === FloatType
                  ? 36012
                  : n.type === UnsignedIntType
                  ? 33190
                  : n.type === UnsignedInt248Type
                  ? 35056
                  : 33189)
            : n.type === FloatType &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          n.format === DepthFormat &&
            6402 === v &&
            n.type !== UnsignedShortType &&
            n.type !== UnsignedIntType &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (n.type = UnsignedShortType),
            ($ = s.convert(n.type))),
          n.format === DepthStencilFormat &&
            6402 === v &&
            ((v = 34041),
            n.type !== UnsignedInt248Type &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (n.type = UnsignedInt248Type),
              ($ = s.convert(n.type)))),
          C &&
            (A
              ? r.texStorage2D(3553, 1, v, m.width, m.height)
              : r.texImage2D(3553, 0, v, m.width, m.height, 0, g, $, null));
      else if (n.isDataTexture) {
        if (y.length > 0 && f) {
          A && C && r.texStorage2D(3553, L, v, y[0].width, y[0].height);
          for (let E = 0, P = y.length; E < P; E++)
            (x = y[E]),
              A
                ? r.texSubImage2D(
                    3553,
                    E,
                    0,
                    0,
                    x.width,
                    x.height,
                    g,
                    $,
                    x.data
                  )
                : r.texImage2D(3553, E, v, x.width, x.height, 0, g, $, x.data);
          n.generateMipmaps = !1;
        } else
          A
            ? (C && r.texStorage2D(3553, L, v, m.width, m.height),
              r.texSubImage2D(3553, 0, 0, 0, m.width, m.height, g, $, m.data))
            : r.texImage2D(3553, 0, v, m.width, m.height, 0, g, $, m.data);
      } else if (n.isCompressedTexture) {
        A && C && r.texStorage2D(3553, L, v, y[0].width, y[0].height);
        for (let R = 0, D = y.length; R < D; R++)
          (x = y[R]),
            n.format !== RGBAFormat
              ? null !== g
                ? A
                  ? r.compressedTexSubImage2D(
                      3553,
                      R,
                      0,
                      0,
                      x.width,
                      x.height,
                      g,
                      x.data
                    )
                  : r.compressedTexImage2D(
                      3553,
                      R,
                      v,
                      x.width,
                      x.height,
                      0,
                      x.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : A
              ? r.texSubImage2D(3553, R, 0, 0, x.width, x.height, g, $, x.data)
              : r.texImage2D(3553, R, v, x.width, x.height, 0, g, $, x.data);
      } else if (n.isDataArrayTexture)
        A
          ? (C && r.texStorage3D(35866, L, v, m.width, m.height, m.depth),
            r.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              m.width,
              m.height,
              m.depth,
              g,
              $,
              m.data
            ))
          : r.texImage3D(
              35866,
              0,
              v,
              m.width,
              m.height,
              m.depth,
              0,
              g,
              $,
              m.data
            );
      else if (n.isData3DTexture)
        A
          ? (C && r.texStorage3D(32879, L, v, m.width, m.height, m.depth),
            r.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              m.width,
              m.height,
              m.depth,
              g,
              $,
              m.data
            ))
          : r.texImage3D(
              32879,
              0,
              v,
              m.width,
              m.height,
              m.depth,
              0,
              g,
              $,
              m.data
            );
      else if (n.isFramebufferTexture) {
        if (C) {
          if (A) r.texStorage2D(3553, L, v, m.width, m.height);
          else {
            let B = m.width,
              F = m.height;
            for (let G = 0; G < L; G++)
              r.texImage2D(3553, G, v, B, F, 0, g, $, null),
                (B >>= 1),
                (F >>= 1);
          }
        }
      } else if (y.length > 0 && f) {
        A && C && r.texStorage2D(3553, L, v, y[0].width, y[0].height);
        for (let N = 0, U = y.length; N < U; N++)
          (x = y[N]),
            A
              ? r.texSubImage2D(3553, N, 0, 0, g, $, x)
              : r.texImage2D(3553, N, v, g, $, x);
        n.generateMipmaps = !1;
      } else
        A
          ? (C && r.texStorage2D(3553, L, v, m.width, m.height),
            r.texSubImage2D(3553, 0, 0, 0, g, $, m))
          : r.texImage2D(3553, 0, v, g, $, m);
      S(n, f) && M(o),
        (u.__currentVersion = u.version),
        n.onUpdate && n.onUpdate(n);
    }
    t.__version = n.version;
  }
  function G(t, a, o, l, c) {
    let u = s.convert(o.format, o.encoding),
      h = s.convert(o.type),
      d = w(o.internalFormat, u, h, o.encoding),
      m = n.get(a);
    m.__hasExternalTextures ||
      (32879 === c || 35866 === c
        ? r.texImage3D(c, 0, d, a.width, a.height, a.depth, 0, u, h, null)
        : r.texImage2D(c, 0, d, a.width, a.height, 0, u, h, null)),
      r.bindFramebuffer(36160, t),
      O(a)
        ? p.framebufferTexture2DMultisampleEXT(
            36160,
            l,
            c,
            n.get(o).__webglTexture,
            0,
            z(a)
          )
        : e.framebufferTexture2D(36160, l, c, n.get(o).__webglTexture, 0),
      r.bindFramebuffer(36160, null);
  }
  function N(t, r, n) {
    if ((e.bindRenderbuffer(36161, t), r.depthBuffer && !r.stencilBuffer)) {
      let a = 33189;
      if (n || O(r)) {
        let o = r.depthTexture;
        o &&
          o.isDepthTexture &&
          (o.type === FloatType
            ? (a = 36012)
            : o.type === UnsignedIntType && (a = 33190));
        let l = z(r);
        O(r)
          ? p.renderbufferStorageMultisampleEXT(36161, l, a, r.width, r.height)
          : e.renderbufferStorageMultisample(36161, l, a, r.width, r.height);
      } else e.renderbufferStorage(36161, a, r.width, r.height);
      e.framebufferRenderbuffer(36160, 36096, 36161, t);
    } else if (r.depthBuffer && r.stencilBuffer) {
      let c = z(r);
      n && !1 === O(r)
        ? e.renderbufferStorageMultisample(36161, c, 35056, r.width, r.height)
        : O(r)
        ? p.renderbufferStorageMultisampleEXT(
            36161,
            c,
            35056,
            r.width,
            r.height
          )
        : e.renderbufferStorage(36161, 34041, r.width, r.height),
        e.framebufferRenderbuffer(36160, 33306, 36161, t);
    } else {
      let u = !0 === r.isWebGLMultipleRenderTargets ? r.texture[0] : r.texture,
        h = s.convert(u.format, u.encoding),
        d = s.convert(u.type),
        m = w(u.internalFormat, h, d, u.encoding),
        f = z(r);
      n && !1 === O(r)
        ? e.renderbufferStorageMultisample(36161, f, m, r.width, r.height)
        : O(r)
        ? p.renderbufferStorageMultisampleEXT(36161, f, m, r.width, r.height)
        : e.renderbufferStorage(36161, m, r.width, r.height);
    }
    e.bindRenderbuffer(36161, null);
  }
  function U(t) {
    let a = n.get(t),
      s = !0 === t.isWebGLCubeRenderTarget;
    if (t.depthTexture && !a.__autoAllocateDepthBuffer) {
      if (s)
        throw Error("target.depthTexture not supported in Cube render targets");
      !(function t(a, s) {
        let o = s && s.isWebGLCubeRenderTarget;
        if (o)
          throw Error(
            "Depth Texture with cube render targets is not supported"
          );
        if (
          (r.bindFramebuffer(36160, a),
          !(s.depthTexture && s.depthTexture.isDepthTexture))
        )
          throw Error(
            "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
          );
        (n.get(s.depthTexture).__webglTexture &&
          s.depthTexture.image.width === s.width &&
          s.depthTexture.image.height === s.height) ||
          ((s.depthTexture.image.width = s.width),
          (s.depthTexture.image.height = s.height),
          (s.depthTexture.needsUpdate = !0)),
          R(s.depthTexture, 0);
        let l = n.get(s.depthTexture).__webglTexture,
          c = z(s);
        if (s.depthTexture.format === DepthFormat)
          O(s)
            ? p.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, l, 0, c)
            : e.framebufferTexture2D(36160, 36096, 3553, l, 0);
        else if (s.depthTexture.format === DepthStencilFormat)
          O(s)
            ? p.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, l, 0, c)
            : e.framebufferTexture2D(36160, 33306, 3553, l, 0);
        else throw Error("Unknown depthTexture format");
      })(a.__webglFramebuffer, t);
    } else if (s) {
      a.__webglDepthbuffer = [];
      for (let o = 0; o < 6; o++)
        r.bindFramebuffer(36160, a.__webglFramebuffer[o]),
          (a.__webglDepthbuffer[o] = e.createRenderbuffer()),
          N(a.__webglDepthbuffer[o], t, !1);
    } else
      r.bindFramebuffer(36160, a.__webglFramebuffer),
        (a.__webglDepthbuffer = e.createRenderbuffer()),
        N(a.__webglDepthbuffer, t, !1);
    r.bindFramebuffer(36160, null);
  }
  function z(e) {
    return Math.min(d, e.samples);
  }
  function O(e) {
    let r = n.get(e);
    return (
      l &&
      e.samples > 0 &&
      !0 === t.has("WEBGL_multisampled_render_to_texture") &&
      !1 !== r.__useRenderToTexture
    );
  }
  function k(e, r) {
    let n = e.encoding,
      a = e.format,
      s = e.type;
    return (
      !0 === e.isCompressedTexture ||
        !0 === e.isVideoTexture ||
        e.format === _SRGBAFormat ||
        (n !== LinearEncoding &&
          (n === sRGBEncoding
            ? !1 === l
              ? !0 === t.has("EXT_sRGB") && a === RGBAFormat
                ? ((e.format = _SRGBAFormat),
                  (e.minFilter = LinearFilter),
                  (e.generateMipmaps = !1))
                : (r = ImageUtils.sRGBToLinear(r))
              : (a !== RGBAFormat || s !== UnsignedByteType) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                n
              ))),
      r
    );
  }
  (this.allocateTextureUnit = function e() {
    let t = P;
    return (
      t >= c &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            t +
            " texture units while this GPU supports only " +
            c
        ),
      (P += 1),
      t
    );
  }),
    (this.resetTextureUnits = function e() {
      P = 0;
    }),
    (this.setTexture2D = R),
    (this.setTexture2DArray = function e(t, a) {
      let s = n.get(t);
      if (t.version > 0 && s.__version !== t.version) {
        F(s, t, a);
        return;
      }
      r.activeTexture(33984 + a), r.bindTexture(35866, s.__webglTexture);
    }),
    (this.setTexture3D = function e(t, a) {
      let s = n.get(t);
      if (t.version > 0 && s.__version !== t.version) {
        F(s, t, a);
        return;
      }
      r.activeTexture(33984 + a), r.bindTexture(32879, s.__webglTexture);
    }),
    (this.setTextureCube = function t(a, o) {
      let c = n.get(a);
      if (a.version > 0 && c.__version !== a.version) {
        (function t(n, a, o) {
          if (6 !== a.image.length) return;
          let c = V(n, a),
            h = a.source;
          if (
            (r.activeTexture(33984 + o),
            r.bindTexture(34067, n.__webglTexture),
            h.version !== h.__currentVersion || !0 === c)
          ) {
            e.pixelStorei(37440, a.flipY),
              e.pixelStorei(37441, a.premultiplyAlpha),
              e.pixelStorei(3317, a.unpackAlignment),
              e.pixelStorei(37443, 0);
            let d = a.isCompressedTexture || a.image[0].isCompressedTexture,
              p = a.image[0] && a.image[0].isDataTexture,
              m = [];
            for (let f = 0; f < 6; f++)
              d || p
                ? (m[f] = p ? a.image[f].image : a.image[f])
                : (m[f] = b(a.image[f], !1, !0, u)),
                (m[f] = k(a, m[f]));
            let g = m[0],
              $ = _(g) || l,
              v = s.convert(a.format, a.encoding),
              x = s.convert(a.type),
              y = w(a.internalFormat, v, x, a.encoding),
              A = l && !0 !== a.isVideoTexture,
              C = void 0 === n.__version,
              L = T(a, g, $);
            I(34067, a, $);
            let E;
            if (d) {
              A && C && r.texStorage2D(34067, L, y, g.width, g.height);
              for (let P = 0; P < 6; P++) {
                E = m[P].mipmaps;
                for (let R = 0; R < E.length; R++) {
                  let D = E[R];
                  a.format !== RGBAFormat
                    ? null !== v
                      ? A
                        ? r.compressedTexSubImage2D(
                            34069 + P,
                            R,
                            0,
                            0,
                            D.width,
                            D.height,
                            v,
                            D.data
                          )
                        : r.compressedTexImage2D(
                            34069 + P,
                            R,
                            y,
                            D.width,
                            D.height,
                            0,
                            D.data
                          )
                      : console.warn(
                          "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                        )
                    : A
                    ? r.texSubImage2D(
                        34069 + P,
                        R,
                        0,
                        0,
                        D.width,
                        D.height,
                        v,
                        x,
                        D.data
                      )
                    : r.texImage2D(
                        34069 + P,
                        R,
                        y,
                        D.width,
                        D.height,
                        0,
                        v,
                        x,
                        D.data
                      );
                }
              }
            } else {
              (E = a.mipmaps),
                A &&
                  C &&
                  (E.length > 0 && L++,
                  r.texStorage2D(34067, L, y, m[0].width, m[0].height));
              for (let B = 0; B < 6; B++)
                if (p) {
                  A
                    ? r.texSubImage2D(
                        34069 + B,
                        0,
                        0,
                        0,
                        m[B].width,
                        m[B].height,
                        v,
                        x,
                        m[B].data
                      )
                    : r.texImage2D(
                        34069 + B,
                        0,
                        y,
                        m[B].width,
                        m[B].height,
                        0,
                        v,
                        x,
                        m[B].data
                      );
                  for (let F = 0; F < E.length; F++) {
                    let G = E[F],
                      N = G.image[B].image;
                    A
                      ? r.texSubImage2D(
                          34069 + B,
                          F + 1,
                          0,
                          0,
                          N.width,
                          N.height,
                          v,
                          x,
                          N.data
                        )
                      : r.texImage2D(
                          34069 + B,
                          F + 1,
                          y,
                          N.width,
                          N.height,
                          0,
                          v,
                          x,
                          N.data
                        );
                  }
                } else {
                  A
                    ? r.texSubImage2D(34069 + B, 0, 0, 0, v, x, m[B])
                    : r.texImage2D(34069 + B, 0, y, v, x, m[B]);
                  for (let U = 0; U < E.length; U++) {
                    let z = E[U];
                    A
                      ? r.texSubImage2D(
                          34069 + B,
                          U + 1,
                          0,
                          0,
                          v,
                          x,
                          z.image[B]
                        )
                      : r.texImage2D(34069 + B, U + 1, y, v, x, z.image[B]);
                  }
                }
            }
            S(a, $) && M(34067),
              (h.__currentVersion = h.version),
              a.onUpdate && a.onUpdate(a);
          }
          n.__version = a.version;
        })(c, a, o);
        return;
      }
      r.activeTexture(33984 + o), r.bindTexture(34067, c.__webglTexture);
    }),
    (this.rebindTextures = function e(t, r, a) {
      let s = n.get(t);
      void 0 !== r && G(s.__webglFramebuffer, t, t.texture, 36064, 3553),
        void 0 !== a && U(t);
    }),
    (this.setupRenderTarget = function t(c) {
      let u = c.texture,
        h = n.get(c),
        d = n.get(u);
      c.addEventListener("dispose", L),
        !0 !== c.isWebGLMultipleRenderTargets &&
          (void 0 === d.__webglTexture &&
            (d.__webglTexture = e.createTexture()),
          (d.__version = u.version),
          o.memory.textures++);
      let p = !0 === c.isWebGLCubeRenderTarget,
        m = !0 === c.isWebGLMultipleRenderTargets,
        f = _(c) || l;
      if (p) {
        h.__webglFramebuffer = [];
        for (let g = 0; g < 6; g++)
          h.__webglFramebuffer[g] = e.createFramebuffer();
      } else if (((h.__webglFramebuffer = e.createFramebuffer()), m)) {
        if (a.drawBuffers) {
          let $ = c.texture;
          for (let v = 0, x = $.length; v < x; v++) {
            let y = n.get($[v]);
            void 0 === y.__webglTexture &&
              ((y.__webglTexture = e.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      } else if (l && c.samples > 0 && !1 === O(c)) {
        (h.__webglMultisampledFramebuffer = e.createFramebuffer()),
          (h.__webglColorRenderbuffer = e.createRenderbuffer()),
          e.bindRenderbuffer(36161, h.__webglColorRenderbuffer);
        let b = s.convert(u.format, u.encoding),
          T = s.convert(u.type),
          A = w(u.internalFormat, b, T, u.encoding),
          C = z(c);
        e.renderbufferStorageMultisample(36161, C, A, c.width, c.height),
          r.bindFramebuffer(36160, h.__webglMultisampledFramebuffer),
          e.framebufferRenderbuffer(
            36160,
            36064,
            36161,
            h.__webglColorRenderbuffer
          ),
          e.bindRenderbuffer(36161, null),
          c.depthBuffer &&
            ((h.__webglDepthRenderbuffer = e.createRenderbuffer()),
            N(h.__webglDepthRenderbuffer, c, !0)),
          r.bindFramebuffer(36160, null);
      }
      if (p) {
        r.bindTexture(34067, d.__webglTexture), I(34067, u, f);
        for (let E = 0; E < 6; E++)
          G(h.__webglFramebuffer[E], c, u, 36064, 34069 + E);
        S(u, f) && M(34067), r.unbindTexture();
      } else if (m) {
        let P = c.texture;
        for (let R = 0, D = P.length; R < D; R++) {
          let B = P[R],
            V = n.get(B);
          r.bindTexture(3553, V.__webglTexture),
            I(3553, B, f),
            G(h.__webglFramebuffer, c, B, 36064 + R, 3553),
            S(B, f) && M(3553);
        }
        r.unbindTexture();
      } else {
        let F = 3553;
        (c.isWebGL3DRenderTarget || c.isWebGLArrayRenderTarget) &&
          (l
            ? (F = c.isWebGL3DRenderTarget ? 32879 : 35866)
            : console.error(
                "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
              )),
          r.bindTexture(F, d.__webglTexture),
          I(F, u, f),
          G(h.__webglFramebuffer, c, u, 36064, F),
          S(u, f) && M(F),
          r.unbindTexture();
      }
      c.depthBuffer && U(c);
    }),
    (this.updateRenderTargetMipmap = function e(t) {
      let a = _(t) || l,
        s = !0 === t.isWebGLMultipleRenderTargets ? t.texture : [t.texture];
      for (let o = 0, c = s.length; o < c; o++) {
        let u = s[o];
        if (S(u, a)) {
          let h = t.isWebGLCubeRenderTarget ? 34067 : 3553,
            d = n.get(u).__webglTexture;
          r.bindTexture(h, d), M(h), r.unbindTexture();
        }
      }
    }),
    (this.updateMultisampleRenderTarget = function t(a) {
      if (l && a.samples > 0 && !1 === O(a)) {
        let s = a.width,
          o = a.height,
          c = 16384,
          u = [36064],
          h = a.stencilBuffer ? 33306 : 36096;
        a.depthBuffer && u.push(h);
        let d = n.get(a),
          p = void 0 !== d.__ignoreDepthValues && d.__ignoreDepthValues;
        !1 === p &&
          (a.depthBuffer && (c |= 256), a.stencilBuffer && (c |= 1024)),
          r.bindFramebuffer(36008, d.__webglMultisampledFramebuffer),
          r.bindFramebuffer(36009, d.__webglFramebuffer),
          !0 === p &&
            (e.invalidateFramebuffer(36008, [h]),
            e.invalidateFramebuffer(36009, [h])),
          e.blitFramebuffer(0, 0, s, o, 0, 0, s, o, c, 9728),
          m && e.invalidateFramebuffer(36008, u),
          r.bindFramebuffer(36008, null),
          r.bindFramebuffer(36009, d.__webglMultisampledFramebuffer);
      }
    }),
    (this.setupDepthRenderbuffer = U),
    (this.setupFrameBufferTexture = G),
    (this.useMultisampledRTT = O);
}
function WebGLUtils(e, t, r) {
  let n = r.isWebGL2;
  return {
    convert: function r(a, s = null) {
      let o;
      if (a === UnsignedByteType) return 5121;
      if (a === UnsignedShort4444Type) return 32819;
      if (a === UnsignedShort5551Type) return 32820;
      if (a === ByteType) return 5120;
      if (a === ShortType) return 5122;
      if (a === UnsignedShortType) return 5123;
      if (a === IntType) return 5124;
      if (a === UnsignedIntType) return 5125;
      if (a === FloatType) return 5126;
      if (a === HalfFloatType)
        return n
          ? 5131
          : null !== (o = t.get("OES_texture_half_float"))
          ? o.HALF_FLOAT_OES
          : null;
      if (a === AlphaFormat) return 6406;
      if (a === RGBAFormat) return 6408;
      if (a === LuminanceFormat) return 6409;
      if (a === LuminanceAlphaFormat) return 6410;
      if (a === DepthFormat) return 6402;
      if (a === DepthStencilFormat) return 34041;
      if (a === RedFormat) return 6403;
      if (a === RGBFormat)
        return (
          console.warn(
            "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
          ),
          6408
        );
      if (a === _SRGBAFormat)
        return null !== (o = t.get("EXT_sRGB")) ? o.SRGB_ALPHA_EXT : null;
      if (a === RedIntegerFormat) return 36244;
      if (a === RGFormat) return 33319;
      if (a === RGIntegerFormat) return 33320;
      if (a === RGBAIntegerFormat) return 36249;
      if (
        a === RGB_S3TC_DXT1_Format ||
        a === RGBA_S3TC_DXT1_Format ||
        a === RGBA_S3TC_DXT3_Format ||
        a === RGBA_S3TC_DXT5_Format
      ) {
        if (s === sRGBEncoding) {
          if (null === (o = t.get("WEBGL_compressed_texture_s3tc_srgb")))
            return null;
          if (a === RGB_S3TC_DXT1_Format)
            return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (a === RGBA_S3TC_DXT1_Format)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (a === RGBA_S3TC_DXT3_Format)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (a === RGBA_S3TC_DXT5_Format)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          if (null === (o = t.get("WEBGL_compressed_texture_s3tc")))
            return null;
          if (a === RGB_S3TC_DXT1_Format) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (a === RGBA_S3TC_DXT1_Format)
            return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (a === RGBA_S3TC_DXT3_Format)
            return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (a === RGBA_S3TC_DXT5_Format)
            return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      }
      if (
        a === RGB_PVRTC_4BPPV1_Format ||
        a === RGB_PVRTC_2BPPV1_Format ||
        a === RGBA_PVRTC_4BPPV1_Format ||
        a === RGBA_PVRTC_2BPPV1_Format
      ) {
        if (null === (o = t.get("WEBGL_compressed_texture_pvrtc"))) return null;
        if (a === RGB_PVRTC_4BPPV1_Format)
          return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (a === RGB_PVRTC_2BPPV1_Format)
          return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (a === RGBA_PVRTC_4BPPV1_Format)
          return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (a === RGBA_PVRTC_2BPPV1_Format)
          return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (a === RGB_ETC1_Format)
        return null !== (o = t.get("WEBGL_compressed_texture_etc1"))
          ? o.COMPRESSED_RGB_ETC1_WEBGL
          : null;
      if (a === RGB_ETC2_Format || a === RGBA_ETC2_EAC_Format) {
        if (null === (o = t.get("WEBGL_compressed_texture_etc"))) return null;
        if (a === RGB_ETC2_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ETC2
            : o.COMPRESSED_RGB8_ETC2;
        if (a === RGBA_ETC2_EAC_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : o.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (
        a === RGBA_ASTC_4x4_Format ||
        a === RGBA_ASTC_5x4_Format ||
        a === RGBA_ASTC_5x5_Format ||
        a === RGBA_ASTC_6x5_Format ||
        a === RGBA_ASTC_6x6_Format ||
        a === RGBA_ASTC_8x5_Format ||
        a === RGBA_ASTC_8x6_Format ||
        a === RGBA_ASTC_8x8_Format ||
        a === RGBA_ASTC_10x5_Format ||
        a === RGBA_ASTC_10x6_Format ||
        a === RGBA_ASTC_10x8_Format ||
        a === RGBA_ASTC_10x10_Format ||
        a === RGBA_ASTC_12x10_Format ||
        a === RGBA_ASTC_12x12_Format
      ) {
        if (null === (o = t.get("WEBGL_compressed_texture_astc"))) return null;
        if (a === RGBA_ASTC_4x4_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (a === RGBA_ASTC_5x4_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (a === RGBA_ASTC_5x5_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (a === RGBA_ASTC_6x5_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (a === RGBA_ASTC_6x6_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (a === RGBA_ASTC_8x5_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (a === RGBA_ASTC_8x6_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (a === RGBA_ASTC_8x8_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (a === RGBA_ASTC_10x5_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (a === RGBA_ASTC_10x6_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (a === RGBA_ASTC_10x8_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (a === RGBA_ASTC_10x10_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (a === RGBA_ASTC_12x10_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (a === RGBA_ASTC_12x12_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (a === RGBA_BPTC_Format) {
        if (null === (o = t.get("EXT_texture_compression_bptc"))) return null;
        if (a === RGBA_BPTC_Format)
          return s === sRGBEncoding
            ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      }
      return a === UnsignedInt248Type
        ? n
          ? 34042
          : null !== (o = t.get("WEBGL_depth_texture"))
          ? o.UNSIGNED_INT_24_8_WEBGL
          : null
        : void 0 !== e[a]
        ? e[a]
        : null;
    },
  };
}
class ArrayCamera extends PerspectiveCamera {
  constructor(e = []) {
    super(), (this.cameras = e);
  }
}
ArrayCamera.prototype.isArrayCamera = !0;
class Group extends Object3D {
  constructor() {
    super(), (this.type = "Group");
  }
}
Group.prototype.isGroup = !0;
let _moveEvent = { type: "move" };
class WebXRController {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      null === this._hand &&
        ((this._hand = new Group()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      null === this._targetRay &&
        ((this._targetRay = new Group()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new Vector3()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new Vector3())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      null === this._grip &&
        ((this._grip = new Group()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new Vector3()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new Vector3())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      null !== this._targetRay && this._targetRay.dispatchEvent(e),
      null !== this._grip && this._grip.dispatchEvent(e),
      null !== this._hand && this._hand.dispatchEvent(e),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      null !== this._targetRay && (this._targetRay.visible = !1),
      null !== this._grip && (this._grip.visible = !1),
      null !== this._hand && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, r) {
    let n = null,
      a = null,
      s = null,
      o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && "visible-blurred" !== t.session.visibilityState) {
      if (
        (null !== o &&
          null !== (n = t.getPose(e.targetRaySpace, r)) &&
          (o.matrix.fromArray(n.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          n.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(n.linearVelocity))
            : (o.hasLinearVelocity = !1),
          n.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(n.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(_moveEvent)),
        c && e.hand)
      ) {
        for (let u of ((s = !0), e.hand.values())) {
          let h = t.getJointPose(u, r);
          if (void 0 === c.joints[u.jointName]) {
            let d = new Group();
            (d.matrixAutoUpdate = !1),
              (d.visible = !1),
              (c.joints[u.jointName] = d),
              c.add(d);
          }
          let p = c.joints[u.jointName];
          null !== h &&
            (p.matrix.fromArray(h.transform.matrix),
            p.matrix.decompose(p.position, p.rotation, p.scale),
            (p.jointRadius = h.radius)),
            (p.visible = null !== h);
        }
        let m = c.joints["index-finger-tip"],
          f = c.joints["thumb-tip"],
          g = m.position.distanceTo(f.position);
        c.inputState.pinching && g > 0.025
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            g <= 0.015 &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        null !== l &&
          e.gripSpace &&
          null !== (a = t.getPose(e.gripSpace, r)) &&
          (l.matrix.fromArray(a.transform.matrix),
          l.matrix.decompose(l.position, l.rotation, l.scale),
          a.linearVelocity
            ? ((l.hasLinearVelocity = !0),
              l.linearVelocity.copy(a.linearVelocity))
            : (l.hasLinearVelocity = !1),
          a.angularVelocity
            ? ((l.hasAngularVelocity = !0),
              l.angularVelocity.copy(a.angularVelocity))
            : (l.hasAngularVelocity = !1));
    }
    return (
      null !== o && (o.visible = null !== n),
      null !== l && (l.visible = null !== a),
      null !== c && (c.visible = null !== s),
      this
    );
  }
}
class DepthTexture extends Texture {
  constructor(e, t, r, n, a, s, o, l, c, u) {
    if (
      (u = void 0 !== u ? u : DepthFormat) !== DepthFormat &&
      u !== DepthStencilFormat
    )
      throw Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    void 0 === r && u === DepthFormat && (r = UnsignedShortType),
      void 0 === r && u === DepthStencilFormat && (r = UnsignedInt248Type),
      super(null, n, a, s, o, l, u, r, c),
      (this.image = { width: e, height: t }),
      (this.magFilter = void 0 !== o ? o : NearestFilter),
      (this.minFilter = void 0 !== l ? l : NearestFilter),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
DepthTexture.prototype.isDepthTexture = !0;
class WebXRManager extends EventDispatcher {
  constructor(e, t) {
    super();
    let r = this,
      n = null,
      a = 1,
      s = null,
      o = "local-floor",
      l = null,
      c = null,
      u = null,
      h = null,
      d = null,
      p = null,
      m = t.getContextAttributes(),
      f = null,
      g = null,
      $ = [],
      v = new Map(),
      x = new PerspectiveCamera();
    x.layers.enable(1), (x.viewport = new Vector4());
    let y = new PerspectiveCamera();
    y.layers.enable(2), (y.viewport = new Vector4());
    let b = [x, y],
      _ = new ArrayCamera();
    _.layers.enable(1), _.layers.enable(2);
    let S = null,
      M = null;
    function w(e) {
      let t = v.get(e.inputSource);
      void 0 !== t && t.dispatchEvent({ type: e.type, data: e.inputSource });
    }
    function T() {
      v.forEach(function (e, t) {
        void 0 !== e && e.disconnect(t);
      }),
        v.clear(),
        (S = null),
        (M = null),
        e.setRenderTarget(f),
        (d = null),
        (h = null),
        (u = null),
        (n = null),
        (g = null),
        B.stop(),
        (r.isPresenting = !1),
        r.dispatchEvent({ type: "sessionend" });
    }
    function A(e) {
      let t = n.inputSources;
      for (let r = 0; r < t.length; r++) {
        let a = "right" === t[r].handedness ? 1 : 0;
        v.set(t[r], $[a]);
      }
      for (let s = 0; s < e.removed.length; s++) {
        let o = e.removed[s],
          l = v.get(o);
        l && (l.dispatchEvent({ type: "disconnected", data: o }), v.delete(o));
      }
      for (let c = 0; c < e.added.length; c++) {
        let u = e.added[c],
          h = v.get(u);
        h && h.dispatchEvent({ type: "connected", data: u });
      }
    }
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (e) {
        let t = $[e];
        return (
          void 0 === t && ((t = new WebXRController()), ($[e] = t)),
          t.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (e) {
        let t = $[e];
        return (
          void 0 === t && ((t = new WebXRController()), ($[e] = t)),
          t.getGripSpace()
        );
      }),
      (this.getHand = function (e) {
        let t = $[e];
        return (
          void 0 === t && ((t = new WebXRController()), ($[e] = t)),
          t.getHandSpace()
        );
      }),
      (this.setFramebufferScaleFactor = function (e) {
        (a = e),
          !0 === r.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
            );
      }),
      (this.setReferenceSpaceType = function (e) {
        (o = e),
          !0 === r.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || s;
      }),
      (this.setReferenceSpace = function (e) {
        l = e;
      }),
      (this.getBaseLayer = function () {
        return null !== h ? h : d;
      }),
      (this.getBinding = function () {
        return u;
      }),
      (this.getFrame = function () {
        return p;
      }),
      (this.getSession = function () {
        return n;
      }),
      (this.setSession = async function (l) {
        if (null !== (n = l)) {
          if (
            ((f = e.getRenderTarget()),
            n.addEventListener("select", w),
            n.addEventListener("selectstart", w),
            n.addEventListener("selectend", w),
            n.addEventListener("squeeze", w),
            n.addEventListener("squeezestart", w),
            n.addEventListener("squeezeend", w),
            n.addEventListener("end", T),
            n.addEventListener("inputsourceschange", A),
            !0 !== m.xrCompatible && (await t.makeXRCompatible()),
            void 0 === n.renderState.layers || !1 === e.capabilities.isWebGL2)
          ) {
            let c = {
              antialias: void 0 !== n.renderState.layers || m.antialias,
              alpha: m.alpha,
              depth: m.depth,
              stencil: m.stencil,
              framebufferScaleFactor: a,
            };
            (d = new XRWebGLLayer(n, t, c)),
              n.updateRenderState({ baseLayer: d }),
              (g = new WebGLRenderTarget(
                d.framebufferWidth,
                d.framebufferHeight,
                {
                  format: RGBAFormat,
                  type: UnsignedByteType,
                  encoding: e.outputEncoding,
                }
              ));
          } else {
            let p = null,
              $ = null,
              v = null;
            m.depth &&
              ((v = m.stencil ? 35056 : 33190),
              (p = m.stencil ? DepthStencilFormat : DepthFormat),
              ($ = m.stencil ? UnsignedInt248Type : UnsignedShortType));
            let x = {
              colorFormat: e.outputEncoding === sRGBEncoding ? 35907 : 32856,
              depthFormat: v,
              scaleFactor: a,
            };
            (h = (u = new XRWebGLBinding(n, t)).createProjectionLayer(x)),
              n.updateRenderState({ layers: [h] }),
              (g = new WebGLRenderTarget(h.textureWidth, h.textureHeight, {
                format: RGBAFormat,
                type: UnsignedByteType,
                depthTexture: new DepthTexture(
                  h.textureWidth,
                  h.textureHeight,
                  $,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  p
                ),
                stencilBuffer: m.stencil,
                encoding: e.outputEncoding,
                samples: m.antialias ? 4 : 0,
              }));
            let y = e.properties.get(g);
            y.__ignoreDepthValues = h.ignoreDepthValues;
          }
          (g.isXRRenderTarget = !0),
            this.setFoveation(1),
            (s = await n.requestReferenceSpace(o)),
            B.setContext(n),
            B.start(),
            (r.isPresenting = !0),
            r.dispatchEvent({ type: "sessionstart" });
        }
      });
    let C = new Vector3(),
      L = new Vector3();
    function E(e, t, r) {
      C.setFromMatrixPosition(t.matrixWorld),
        L.setFromMatrixPosition(r.matrixWorld);
      let n = C.distanceTo(L),
        a = t.projectionMatrix.elements,
        s = r.projectionMatrix.elements,
        o = a[14] / (a[10] - 1),
        l = a[14] / (a[10] + 1),
        c = (a[9] + 1) / a[5],
        u = (a[9] - 1) / a[5],
        h = (a[8] - 1) / a[0],
        d = (s[8] + 1) / s[0],
        p = n / (-h + d),
        m = -(p * h);
      t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
        e.translateX(m),
        e.translateZ(p),
        e.matrixWorld.compose(e.position, e.quaternion, e.scale),
        e.matrixWorldInverse.copy(e.matrixWorld).invert();
      let f = o + p,
        g = l + p;
      e.projectionMatrix.makePerspective(
        o * h - m,
        o * d + (n - m),
        ((c * l) / g) * f,
        ((u * l) / g) * f,
        f,
        g
      );
    }
    function P(e, t) {
      null === t
        ? e.matrixWorld.copy(e.matrix)
        : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
        e.matrixWorldInverse.copy(e.matrixWorld).invert();
    }
    (this.updateCamera = function (e) {
      if (null === n) return;
      (_.near = y.near = x.near = e.near),
        (_.far = y.far = x.far = e.far),
        (S !== _.near || M !== _.far) &&
          (n.updateRenderState({ depthNear: _.near, depthFar: _.far }),
          (S = _.near),
          (M = _.far));
      let t = e.parent,
        r = _.cameras;
      P(_, t);
      for (let a = 0; a < r.length; a++) P(r[a], t);
      _.matrixWorld.decompose(_.position, _.quaternion, _.scale),
        e.position.copy(_.position),
        e.quaternion.copy(_.quaternion),
        e.scale.copy(_.scale),
        e.matrix.copy(_.matrix),
        e.matrixWorld.copy(_.matrixWorld);
      let s = e.children;
      for (let o = 0, l = s.length; o < l; o++) s[o].updateMatrixWorld(!0);
      2 === r.length ? E(_, x, y) : _.projectionMatrix.copy(x.projectionMatrix);
    }),
      (this.getCamera = function () {
        return _;
      }),
      (this.getFoveation = function () {
        return null !== h
          ? h.fixedFoveation
          : null !== d
          ? d.fixedFoveation
          : void 0;
      }),
      (this.setFoveation = function (e) {
        null !== h && (h.fixedFoveation = e),
          null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = e);
      });
    let R = null;
    function D(t, r) {
      if (((c = r.getViewerPose(l || s)), (p = r), null !== c)) {
        let a = c.views;
        null !== d &&
          (e.setRenderTargetFramebuffer(g, d.framebuffer),
          e.setRenderTarget(g));
        let o = !1;
        a.length !== _.cameras.length && ((_.cameras.length = 0), (o = !0));
        for (let m = 0; m < a.length; m++) {
          let f = a[m],
            x = null;
          if (null !== d) x = d.getViewport(f);
          else {
            let y = u.getViewSubImage(h, f);
            (x = y.viewport),
              0 === m &&
                (e.setRenderTargetTextures(
                  g,
                  y.colorTexture,
                  h.ignoreDepthValues ? void 0 : y.depthStencilTexture
                ),
                e.setRenderTarget(g));
          }
          let S = b[m];
          S.matrix.fromArray(f.transform.matrix),
            S.projectionMatrix.fromArray(f.projectionMatrix),
            S.viewport.set(x.x, x.y, x.width, x.height),
            0 === m && _.matrix.copy(S.matrix),
            !0 === o && _.cameras.push(S);
        }
      }
      let M = n.inputSources;
      for (let w = 0; w < $.length; w++) {
        let T = M[w],
          A = v.get(T);
        void 0 !== A && A.update(T, r, l || s);
      }
      R && R(t, r), (p = null);
    }
    let B = new WebGLAnimation();
    B.setAnimationLoop(D),
      (this.setAnimationLoop = function (e) {
        R = e;
      }),
      (this.dispose = function () {});
  }
}
function WebGLMaterials(e, t) {
  function r(r, n) {
    (r.opacity.value = n.opacity),
      n.color && r.diffuse.value.copy(n.color),
      n.emissive &&
        r.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
      n.map && (r.map.value = n.map),
      n.alphaMap && (r.alphaMap.value = n.alphaMap),
      n.bumpMap &&
        ((r.bumpMap.value = n.bumpMap),
        (r.bumpScale.value = n.bumpScale),
        n.side === BackSide && (r.bumpScale.value *= -1)),
      n.displacementMap &&
        ((r.displacementMap.value = n.displacementMap),
        (r.displacementScale.value = n.displacementScale),
        (r.displacementBias.value = n.displacementBias)),
      n.emissiveMap && (r.emissiveMap.value = n.emissiveMap),
      n.normalMap &&
        ((r.normalMap.value = n.normalMap),
        r.normalScale.value.copy(n.normalScale),
        n.side === BackSide && r.normalScale.value.negate()),
      n.specularMap && (r.specularMap.value = n.specularMap),
      n.alphaTest > 0 && (r.alphaTest.value = n.alphaTest);
    let a = t.get(n).envMap;
    if (
      (a &&
        ((r.envMap.value = a),
        (r.flipEnvMap.value =
          a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1),
        (r.reflectivity.value = n.reflectivity),
        (r.ior.value = n.ior),
        (r.refractionRatio.value = n.refractionRatio)),
      n.lightMap)
    ) {
      r.lightMap.value = n.lightMap;
      let s = !0 !== e.physicallyCorrectLights ? Math.PI : 1;
      r.lightMapIntensity.value = n.lightMapIntensity * s;
    }
    n.aoMap &&
      ((r.aoMap.value = n.aoMap), (r.aoMapIntensity.value = n.aoMapIntensity));
    let o;
    n.map
      ? (o = n.map)
      : n.specularMap
      ? (o = n.specularMap)
      : n.displacementMap
      ? (o = n.displacementMap)
      : n.normalMap
      ? (o = n.normalMap)
      : n.bumpMap
      ? (o = n.bumpMap)
      : n.roughnessMap
      ? (o = n.roughnessMap)
      : n.metalnessMap
      ? (o = n.metalnessMap)
      : n.alphaMap
      ? (o = n.alphaMap)
      : n.emissiveMap
      ? (o = n.emissiveMap)
      : n.clearcoatMap
      ? (o = n.clearcoatMap)
      : n.clearcoatNormalMap
      ? (o = n.clearcoatNormalMap)
      : n.clearcoatRoughnessMap
      ? (o = n.clearcoatRoughnessMap)
      : n.specularIntensityMap
      ? (o = n.specularIntensityMap)
      : n.specularColorMap
      ? (o = n.specularColorMap)
      : n.transmissionMap
      ? (o = n.transmissionMap)
      : n.thicknessMap
      ? (o = n.thicknessMap)
      : n.sheenColorMap
      ? (o = n.sheenColorMap)
      : n.sheenRoughnessMap && (o = n.sheenRoughnessMap),
      void 0 !== o &&
        (o.isWebGLRenderTarget && (o = o.texture),
        !0 === o.matrixAutoUpdate && o.updateMatrix(),
        r.uvTransform.value.copy(o.matrix));
    let l;
    n.aoMap ? (l = n.aoMap) : n.lightMap && (l = n.lightMap),
      void 0 !== l &&
        (l.isWebGLRenderTarget && (l = l.texture),
        !0 === l.matrixAutoUpdate && l.updateMatrix(),
        r.uv2Transform.value.copy(l.matrix));
  }
  return {
    refreshFogUniforms: function e(t, r) {
      t.fogColor.value.copy(r.color),
        r.isFog
          ? ((t.fogNear.value = r.near), (t.fogFar.value = r.far))
          : r.isFogExp2 && (t.fogDensity.value = r.density);
    },
    refreshMaterialUniforms: function e(n, a, s, o, l) {
      var c, u, h, d, p, m, f, g, $, v, x, y, b, _, S, M, w, T, A, C, L;
      let E, P;
      a.isMeshBasicMaterial
        ? r(n, a)
        : a.isMeshLambertMaterial
        ? r(n, a)
        : a.isMeshToonMaterial
        ? (r(n, a),
          (c = n),
          (u = a).gradientMap && (c.gradientMap.value = u.gradientMap))
        : a.isMeshPhongMaterial
        ? (r(n, a),
          (h = n),
          (d = a),
          h.specular.value.copy(d.specular),
          (h.shininess.value = Math.max(d.shininess, 1e-4)))
        : a.isMeshStandardMaterial
        ? (r(n, a),
          (function e(r, n) {
            (r.roughness.value = n.roughness),
              (r.metalness.value = n.metalness),
              n.roughnessMap && (r.roughnessMap.value = n.roughnessMap),
              n.metalnessMap && (r.metalnessMap.value = n.metalnessMap);
            let a = t.get(n).envMap;
            a && (r.envMapIntensity.value = n.envMapIntensity);
          })(n, a),
          a.isMeshPhysicalMaterial &&
            ((p = n),
            (m = a),
            (f = l),
            (p.ior.value = m.ior),
            m.sheen > 0 &&
              (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),
              (p.sheenRoughness.value = m.sheenRoughness),
              m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap),
              m.sheenRoughnessMap &&
                (p.sheenRoughnessMap.value = m.sheenRoughnessMap)),
            m.clearcoat > 0 &&
              ((p.clearcoat.value = m.clearcoat),
              (p.clearcoatRoughness.value = m.clearcoatRoughness),
              m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap),
              m.clearcoatRoughnessMap &&
                (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap),
              m.clearcoatNormalMap &&
                (p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),
                (p.clearcoatNormalMap.value = m.clearcoatNormalMap),
                m.side === BackSide && p.clearcoatNormalScale.value.negate())),
            m.transmission > 0 &&
              ((p.transmission.value = m.transmission),
              (p.transmissionSamplerMap.value = f.texture),
              p.transmissionSamplerSize.value.set(f.width, f.height),
              m.transmissionMap &&
                (p.transmissionMap.value = m.transmissionMap),
              (p.thickness.value = m.thickness),
              m.thicknessMap && (p.thicknessMap.value = m.thicknessMap),
              (p.attenuationDistance.value = m.attenuationDistance),
              p.attenuationColor.value.copy(m.attenuationColor)),
            (p.specularIntensity.value = m.specularIntensity),
            p.specularColor.value.copy(m.specularColor),
            m.specularIntensityMap &&
              (p.specularIntensityMap.value = m.specularIntensityMap),
            m.specularColorMap &&
              (p.specularColorMap.value = m.specularColorMap)))
        : a.isMeshMatcapMaterial
        ? (r(n, a), (g = n), ($ = a).matcap && (g.matcap.value = $.matcap))
        : a.isMeshDepthMaterial
        ? r(n, a)
        : a.isMeshDistanceMaterial
        ? (r(n, a),
          (v = n),
          (x = a),
          v.referencePosition.value.copy(x.referencePosition),
          (v.nearDistance.value = x.nearDistance),
          (v.farDistance.value = x.farDistance))
        : a.isMeshNormalMaterial
        ? r(n, a)
        : a.isLineBasicMaterial
        ? ((y = n),
          (b = a),
          y.diffuse.value.copy(b.color),
          (y.opacity.value = b.opacity),
          a.isLineDashedMaterial &&
            ((_ = n),
            (S = a),
            (_.dashSize.value = S.dashSize),
            (_.totalSize.value = S.dashSize + S.gapSize),
            (_.scale.value = S.scale)))
        : a.isPointsMaterial
        ? ((M = n),
          (w = a),
          (T = s),
          (A = o),
          M.diffuse.value.copy(w.color),
          (M.opacity.value = w.opacity),
          (M.size.value = w.size * T),
          (M.scale.value = 0.5 * A),
          w.map && (M.map.value = w.map),
          w.alphaMap && (M.alphaMap.value = w.alphaMap),
          w.alphaTest > 0 && (M.alphaTest.value = w.alphaTest),
          w.map ? (E = w.map) : w.alphaMap && (E = w.alphaMap),
          void 0 !== E &&
            (!0 === E.matrixAutoUpdate && E.updateMatrix(),
            M.uvTransform.value.copy(E.matrix)))
        : a.isSpriteMaterial
        ? ((C = n),
          (L = a),
          C.diffuse.value.copy(L.color),
          (C.opacity.value = L.opacity),
          (C.rotation.value = L.rotation),
          L.map && (C.map.value = L.map),
          L.alphaMap && (C.alphaMap.value = L.alphaMap),
          L.alphaTest > 0 && (C.alphaTest.value = L.alphaTest),
          L.map ? (P = L.map) : L.alphaMap && (P = L.alphaMap),
          void 0 !== P &&
            (!0 === P.matrixAutoUpdate && P.updateMatrix(),
            C.uvTransform.value.copy(P.matrix)))
        : a.isShadowMaterial
        ? (n.color.value.copy(a.color), (n.opacity.value = a.opacity))
        : a.isShaderMaterial && (a.uniformsNeedUpdate = !1);
    },
  };
}
function createCanvasElement() {
  let e = createElementNS("canvas");
  return (e.style.display = "block"), e;
}
function WebGLRenderer(e = {}) {
  let t = void 0 !== e.canvas ? e.canvas : createCanvasElement(),
    r = void 0 !== e.context ? e.context : null,
    n = void 0 === e.depth || e.depth,
    a = void 0 === e.stencil || e.stencil,
    s = void 0 !== e.antialias && e.antialias,
    o = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
    l = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
    c = void 0 !== e.powerPreference ? e.powerPreference : "default",
    u =
      void 0 !== e.failIfMajorPerformanceCaveat &&
      e.failIfMajorPerformanceCaveat,
    h;
  h =
    null !== r ? r.getContextAttributes().alpha : void 0 !== e.alpha && e.alpha;
  let d = null,
    p = null,
    m = [],
    f = [];
  (this.domElement = t),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = LinearEncoding),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = NoToneMapping),
    (this.toneMappingExposure = 1),
    Object.defineProperties(WebGLRenderer.prototype, {
      gammaFactor: {
        configurable: !0,
        get: function () {
          return (
            console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),
            2
          );
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
        },
      },
    });
  let g = this,
    $ = !1,
    v = 0,
    x = 0,
    y = null,
    b = -1,
    _ = null,
    S = new Vector4(),
    M = new Vector4(),
    w = null,
    T = t.width,
    A = t.height,
    C = 1,
    L = null,
    E = null,
    P = new Vector4(0, 0, T, A),
    R = new Vector4(0, 0, T, A),
    D = !1,
    B = new Frustum(),
    I = !1,
    V = !1,
    F = null,
    G = new Matrix4(),
    N = new Vector2(),
    U = new Vector3(),
    z = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function O() {
    return null === y ? C : 1;
  }
  let k = r;
  function W(e, r) {
    for (let n = 0; n < e.length; n++) {
      let a = e[n],
        s = t.getContext(a, r);
      if (null !== s) return s;
    }
    return null;
  }
  try {
    if (
      ("setAttribute" in t &&
        t.setAttribute("data-engine", `three.js r${REVISION}`),
      t.addEventListener("webglcontextlost", e$, !1),
      t.addEventListener("webglcontextrestored", ev, !1),
      null === k)
    ) {
      let H = ["webgl2", "webgl", "experimental-webgl"];
      if (
        (!0 === g.isWebGL1Renderer && H.shift(),
        (k = W(H, {
          alpha: !0,
          depth: n,
          stencil: a,
          antialias: s,
          premultipliedAlpha: o,
          preserveDrawingBuffer: l,
          powerPreference: c,
          failIfMajorPerformanceCaveat: u,
        })),
        null === k)
      ) {
        if (W(H))
          throw Error(
            "Error creating WebGL context with your selected attributes."
          );
        throw Error("Error creating WebGL context.");
      }
    }
    void 0 === k.getShaderPrecisionFormat &&
      (k.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (j) {
    throw (console.error("THREE.WebGLRenderer: " + j.message), j);
  }
  let q,
    X,
    Z,
    J,
    Y,
    K,
    Q,
    ee,
    et,
    ei,
    er,
    en,
    ea,
    es,
    eo,
    el,
    ec,
    eu,
    eh,
    ed,
    ep,
    em,
    ef;
  function eg() {
    (q = new WebGLExtensions(k)),
      (X = new WebGLCapabilities(k, q, e)),
      q.init(X),
      (em = new WebGLUtils(k, q, X)),
      (Z = new WebGLState(k, q, X)),
      (J = new WebGLInfo(k)),
      (Y = new WebGLProperties()),
      (K = new WebGLTextures(k, q, Z, Y, X, em, J)),
      (Q = new WebGLCubeMaps(g)),
      (ee = new WebGLCubeUVMaps(g)),
      (et = new WebGLAttributes(k, X)),
      (ef = new WebGLBindingStates(k, q, et, X)),
      (ei = new WebGLGeometries(k, et, J, ef)),
      (er = new WebGLObjects(k, ei, et, J)),
      (eh = new WebGLMorphtargets(k, X, K)),
      (el = new WebGLClipping(Y)),
      (en = new WebGLPrograms(g, Q, ee, q, X, ef, el)),
      (ea = new WebGLMaterials(g, Y)),
      (es = new WebGLRenderLists()),
      (eo = new WebGLRenderStates(q, X)),
      (eu = new WebGLBackground(g, Q, Z, er, h, o)),
      (ec = new WebGLShadowMap(g, er, X)),
      (ed = new WebGLBufferRenderer(k, q, J, X)),
      (ep = new WebGLIndexedBufferRenderer(k, q, J, X)),
      (J.programs = en.programs),
      (g.capabilities = X),
      (g.extensions = q),
      (g.properties = Y),
      (g.renderLists = es),
      (g.shadowMap = ec),
      (g.state = Z),
      (g.info = J);
  }
  eg();
  let e8 = new WebXRManager(g, k);
  function e$(e) {
    e.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      ($ = !0);
  }
  function ev() {
    console.log("THREE.WebGLRenderer: Context Restored."), ($ = !1);
    let e = J.autoReset,
      t = ec.enabled,
      r = ec.autoUpdate,
      n = ec.needsUpdate,
      a = ec.type;
    eg(),
      (J.autoReset = e),
      (ec.enabled = t),
      (ec.autoUpdate = r),
      (ec.needsUpdate = n),
      (ec.type = a);
  }
  function ex(e) {
    var t;
    let r = e.target;
    r.removeEventListener("dispose", ex),
      (function e(t) {
        let r = Y.get(t).programs;
        void 0 !== r &&
          (r.forEach(function (e) {
            en.releaseProgram(e);
          }),
          t.isShaderMaterial && en.releaseShaderCache(t));
      })((t = r)),
      Y.remove(t);
  }
  (this.xr = e8),
    (this.getContext = function () {
      return k;
    }),
    (this.getContextAttributes = function () {
      return k.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      let e = q.get("WEBGL_lose_context");
      e && e.loseContext();
    }),
    (this.forceContextRestore = function () {
      let e = q.get("WEBGL_lose_context");
      e && e.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return C;
    }),
    (this.setPixelRatio = function (e) {
      void 0 !== e && ((C = e), this.setSize(T, A, !1));
    }),
    (this.getSize = function (e) {
      return e.set(T, A);
    }),
    (this.setSize = function (e, r, n) {
      if (e8.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (T = e),
        (A = r),
        (t.width = Math.floor(e * C)),
        (t.height = Math.floor(r * C)),
        !1 !== n && ((t.style.width = e + "px"), (t.style.height = r + "px")),
        this.setViewport(0, 0, e, r);
    }),
    (this.getDrawingBufferSize = function (e) {
      return e.set(T * C, A * C).floor();
    }),
    (this.setDrawingBufferSize = function (e, r, n) {
      (T = e),
        (A = r),
        (C = n),
        (t.width = Math.floor(e * n)),
        (t.height = Math.floor(r * n)),
        this.setViewport(0, 0, e, r);
    }),
    (this.getCurrentViewport = function (e) {
      return e.copy(S);
    }),
    (this.getViewport = function (e) {
      return e.copy(P);
    }),
    (this.setViewport = function (e, t, r, n) {
      e.isVector4 ? P.set(e.x, e.y, e.z, e.w) : P.set(e, t, r, n),
        Z.viewport(S.copy(P).multiplyScalar(C).floor());
    }),
    (this.getScissor = function (e) {
      return e.copy(R);
    }),
    (this.setScissor = function (e, t, r, n) {
      e.isVector4 ? R.set(e.x, e.y, e.z, e.w) : R.set(e, t, r, n),
        Z.scissor(M.copy(R).multiplyScalar(C).floor());
    }),
    (this.getScissorTest = function () {
      return D;
    }),
    (this.setScissorTest = function (e) {
      Z.setScissorTest((D = e));
    }),
    (this.setOpaqueSort = function (e) {
      L = e;
    }),
    (this.setTransparentSort = function (e) {
      E = e;
    }),
    (this.getClearColor = function (e) {
      return e.copy(eu.getClearColor());
    }),
    (this.setClearColor = function () {
      eu.setClearColor.apply(eu, arguments);
    }),
    (this.getClearAlpha = function () {
      return eu.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      eu.setClearAlpha.apply(eu, arguments);
    }),
    (this.clear = function (e = !0, t = !0, r = !0) {
      let n = 0;
      e && (n |= 16384), t && (n |= 256), r && (n |= 1024), k.clear(n);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      t.removeEventListener("webglcontextlost", e$, !1),
        t.removeEventListener("webglcontextrestored", ev, !1),
        es.dispose(),
        eo.dispose(),
        Y.dispose(),
        Q.dispose(),
        ee.dispose(),
        er.dispose(),
        ef.dispose(),
        en.dispose(),
        e8.dispose(),
        e8.removeEventListener("sessionstart", eb),
        e8.removeEventListener("sessionend", e_),
        F && (F.dispose(), (F = null)),
        eS.stop();
    }),
    (this.renderBufferDirect = function (e, t, r, n, a, s) {
      null === t && (t = z);
      let o = a.isMesh && 0 > a.matrixWorld.determinant(),
        l = (function e(t, r, n, a, s) {
          var o, l;
          !0 !== r.isScene && (r = z), K.resetTextureUnits();
          let c = r.fog,
            u = a.isMeshStandardMaterial ? r.environment : null,
            h =
              null === y
                ? g.outputEncoding
                : !0 === y.isXRRenderTarget
                ? y.texture.encoding
                : LinearEncoding,
            d = (a.isMeshStandardMaterial ? ee : Q).get(a.envMap || u),
            m =
              !0 === a.vertexColors &&
              !!n.attributes.color &&
              4 === n.attributes.color.itemSize,
            f = !!a.normalMap && !!n.attributes.tangent,
            $ = !!n.morphAttributes.position,
            v = !!n.morphAttributes.normal,
            x = !!n.morphAttributes.color,
            S = a.toneMapped ? g.toneMapping : NoToneMapping,
            M =
              n.morphAttributes.position ||
              n.morphAttributes.normal ||
              n.morphAttributes.color,
            w = void 0 !== M ? M.length : 0,
            T = Y.get(a),
            L = p.state.lights;
          if (!0 === I && (!0 === V || t !== _)) {
            let E = t === _ && a.id === b;
            el.setState(a, t, E);
          }
          let P = !1;
          a.version === T.__version
            ? T.needsLights && T.lightsStateVersion !== L.state.version
              ? (P = !0)
              : T.outputEncoding !== h
              ? (P = !0)
              : s.isInstancedMesh && !1 === T.instancing
              ? (P = !0)
              : s.isInstancedMesh || !0 !== T.instancing
              ? s.isSkinnedMesh && !1 === T.skinning
                ? (P = !0)
                : s.isSkinnedMesh || !0 !== T.skinning
                ? T.envMap !== d
                  ? (P = !0)
                  : !0 === a.fog && T.fog !== c
                  ? (P = !0)
                  : void 0 !== T.numClippingPlanes &&
                    (T.numClippingPlanes !== el.numPlanes ||
                      T.numIntersection !== el.numIntersection)
                  ? (P = !0)
                  : T.vertexAlphas !== m
                  ? (P = !0)
                  : T.vertexTangents !== f
                  ? (P = !0)
                  : T.morphTargets !== $
                  ? (P = !0)
                  : T.morphNormals !== v
                  ? (P = !0)
                  : T.morphColors !== x
                  ? (P = !0)
                  : T.toneMapping !== S
                  ? (P = !0)
                  : !0 === X.isWebGL2 && T.morphTargetsCount !== w && (P = !0)
                : (P = !0)
              : (P = !0)
            : ((P = !0), (T.__version = a.version));
          let R = T.currentProgram;
          !0 === P && (R = eA(a, r, s));
          let D = !1,
            B = !1,
            G = !1,
            N = R.getUniforms(),
            O = T.uniforms;
          if (
            (Z.useProgram(R.program) && ((D = !0), (B = !0), (G = !0)),
            a.id !== b && ((b = a.id), (B = !0)),
            D || _ !== t)
          ) {
            if (
              (N.setValue(k, "projectionMatrix", t.projectionMatrix),
              X.logarithmicDepthBuffer &&
                N.setValue(
                  k,
                  "logDepthBufFC",
                  2 / (Math.log(t.far + 1) / Math.LN2)
                ),
              _ !== t && ((_ = t), (B = !0), (G = !0)),
              a.isShaderMaterial ||
                a.isMeshPhongMaterial ||
                a.isMeshToonMaterial ||
                a.isMeshStandardMaterial ||
                a.envMap)
            ) {
              let W = N.map.cameraPosition;
              void 0 !== W &&
                W.setValue(k, U.setFromMatrixPosition(t.matrixWorld));
            }
            (a.isMeshPhongMaterial ||
              a.isMeshToonMaterial ||
              a.isMeshLambertMaterial ||
              a.isMeshBasicMaterial ||
              a.isMeshStandardMaterial ||
              a.isShaderMaterial) &&
              N.setValue(k, "isOrthographic", !0 === t.isOrthographicCamera),
              (a.isMeshPhongMaterial ||
                a.isMeshToonMaterial ||
                a.isMeshLambertMaterial ||
                a.isMeshBasicMaterial ||
                a.isMeshStandardMaterial ||
                a.isShaderMaterial ||
                a.isShadowMaterial ||
                s.isSkinnedMesh) &&
                N.setValue(k, "viewMatrix", t.matrixWorldInverse);
          }
          if (s.isSkinnedMesh) {
            N.setOptional(k, s, "bindMatrix"),
              N.setOptional(k, s, "bindMatrixInverse");
            let H = s.skeleton;
            H &&
              (X.floatVertexTextures
                ? (null === H.boneTexture && H.computeBoneTexture(),
                  N.setValue(k, "boneTexture", H.boneTexture, K),
                  N.setValue(k, "boneTextureSize", H.boneTextureSize))
                : console.warn(
                    "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
                  ));
          }
          let j = n.morphAttributes;
          return (
            (void 0 !== j.position ||
              void 0 !== j.normal ||
              (void 0 !== j.color && !0 === X.isWebGL2)) &&
              eh.update(s, n, a, R),
            (B || T.receiveShadow !== s.receiveShadow) &&
              ((T.receiveShadow = s.receiveShadow),
              N.setValue(k, "receiveShadow", s.receiveShadow)),
            B &&
              (N.setValue(k, "toneMappingExposure", g.toneMappingExposure),
              T.needsLights &&
                ((o = O),
                (l = G),
                (o.ambientLightColor.needsUpdate = l),
                (o.lightProbe.needsUpdate = l),
                (o.directionalLights.needsUpdate = l),
                (o.directionalLightShadows.needsUpdate = l),
                (o.pointLights.needsUpdate = l),
                (o.pointLightShadows.needsUpdate = l),
                (o.spotLights.needsUpdate = l),
                (o.spotLightShadows.needsUpdate = l),
                (o.rectAreaLights.needsUpdate = l),
                (o.hemisphereLights.needsUpdate = l)),
              c && !0 === a.fog && ea.refreshFogUniforms(O, c),
              ea.refreshMaterialUniforms(O, a, C, A, F),
              WebGLUniforms.upload(k, T.uniformsList, O, K)),
            a.isShaderMaterial &&
              !0 === a.uniformsNeedUpdate &&
              (WebGLUniforms.upload(k, T.uniformsList, O, K),
              (a.uniformsNeedUpdate = !1)),
            a.isSpriteMaterial && N.setValue(k, "center", s.center),
            N.setValue(k, "modelViewMatrix", s.modelViewMatrix),
            N.setValue(k, "normalMatrix", s.normalMatrix),
            N.setValue(k, "modelMatrix", s.matrixWorld),
            R
          );
        })(e, t, r, n, a);
      Z.setMaterial(n, o);
      let c = r.index,
        u = r.attributes.position;
      if (null === c) {
        if (void 0 === u || 0 === u.count) return;
      } else if (0 === c.count) return;
      let h = 1;
      !0 === n.wireframe && ((c = ei.getWireframeAttribute(r)), (h = 2)),
        ef.setup(a, n, l, r, c);
      let d,
        m = ed;
      null !== c && ((d = et.get(c)), (m = ep).setIndex(d));
      let f = null !== c ? c.count : u.count,
        $ = r.drawRange.start * h,
        v = r.drawRange.count * h,
        x = null !== s ? s.start * h : 0,
        S = null !== s ? s.count * h : 1 / 0,
        M = Math.max($, x),
        w = Math.max(0, Math.min(f, $ + v, x + S) - 1 - M + 1);
      if (0 !== w) {
        if (a.isMesh)
          !0 === n.wireframe
            ? (Z.setLineWidth(n.wireframeLinewidth * O()), m.setMode(1))
            : m.setMode(4);
        else if (a.isLine) {
          let T = n.linewidth;
          void 0 === T && (T = 1),
            Z.setLineWidth(T * O()),
            a.isLineSegments
              ? m.setMode(1)
              : a.isLineLoop
              ? m.setMode(2)
              : m.setMode(3);
        } else a.isPoints ? m.setMode(0) : a.isSprite && m.setMode(4);
        if (a.isInstancedMesh) m.renderInstances(M, w, a.count);
        else if (r.isInstancedBufferGeometry) {
          let L = Math.min(r.instanceCount, r._maxInstanceCount);
          m.renderInstances(M, w, L);
        } else m.render(M, w);
      }
    }),
    (this.compile = function (e, t) {
      (p = eo.get(e)).init(),
        f.push(p),
        e.traverseVisible(function (e) {
          e.isLight &&
            e.layers.test(t.layers) &&
            (p.pushLight(e), e.castShadow && p.pushShadow(e));
        }),
        p.setupLights(g.physicallyCorrectLights),
        e.traverse(function (t) {
          let r = t.material;
          if (r) {
            if (Array.isArray(r))
              for (let n = 0; n < r.length; n++) {
                let a = r[n];
                eA(a, e, t);
              }
            else eA(r, e, t);
          }
        }),
        f.pop(),
        (p = null);
    });
  let ey = null;
  function eb() {
    eS.stop();
  }
  function e_() {
    eS.start();
  }
  let eS = new WebGLAnimation();
  function eM(e, t, r, n) {
    let a = e.opaque,
      o = e.transmissive,
      l = e.transparent;
    p.setupLightsView(r),
      o.length > 0 &&
        (function e(t, r, n) {
          let a = X.isWebGL2;
          null === F &&
            (F = new WebGLRenderTarget(1, 1, {
              generateMipmaps: !0,
              type: q.has("EXT_color_buffer_half_float")
                ? HalfFloatType
                : UnsignedByteType,
              minFilter: LinearMipmapLinearFilter,
              samples: a && !0 === s ? 4 : 0,
            })),
            g.getDrawingBufferSize(N),
            a
              ? F.setSize(N.x, N.y)
              : F.setSize(floorPowerOfTwo(N.x), floorPowerOfTwo(N.y));
          let o = g.getRenderTarget();
          g.setRenderTarget(F), g.clear();
          let l = g.toneMapping;
          (g.toneMapping = NoToneMapping),
            ew(t, r, n),
            (g.toneMapping = l),
            K.updateMultisampleRenderTarget(F),
            K.updateRenderTargetMipmap(F),
            g.setRenderTarget(o);
        })(a, t, r),
      n && Z.viewport(S.copy(n)),
      a.length > 0 && ew(a, t, r),
      o.length > 0 && ew(o, t, r),
      l.length > 0 && ew(l, t, r),
      Z.buffers.depth.setTest(!0),
      Z.buffers.depth.setMask(!0),
      Z.buffers.color.setMask(!0),
      Z.setPolygonOffset(!1);
  }
  function ew(e, t, r) {
    let n = !0 === t.isScene ? t.overrideMaterial : null;
    for (let a = 0, s = e.length; a < s; a++) {
      let o = e[a],
        l = o.object,
        c = o.geometry,
        u = null === n ? o.material : n,
        h = o.group;
      l.layers.test(r.layers) && eT(l, t, r, c, u, h);
    }
  }
  function eT(e, t, r, n, a, s) {
    e.onBeforeRender(g, t, r, n, a, s),
      e.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, e.matrixWorld),
      e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
      a.onBeforeRender(g, t, r, n, e, s),
      !0 === a.transparent && a.side === DoubleSide
        ? ((a.side = BackSide),
          (a.needsUpdate = !0),
          g.renderBufferDirect(r, t, n, a, e, s),
          (a.side = FrontSide),
          (a.needsUpdate = !0),
          g.renderBufferDirect(r, t, n, a, e, s),
          (a.side = DoubleSide))
        : g.renderBufferDirect(r, t, n, a, e, s),
      e.onAfterRender(g, t, r, n, a, s);
  }
  function eA(e, t, r) {
    var n;
    !0 !== t.isScene && (t = z);
    let a = Y.get(e),
      s = p.state.lights,
      o = p.state.shadowsArray,
      l = s.state.version,
      c = en.getParameters(e, s.state, o, t, r),
      u = en.getProgramCacheKey(c),
      h = a.programs;
    (a.environment = e.isMeshStandardMaterial ? t.environment : null),
      (a.fog = t.fog),
      (a.envMap = (e.isMeshStandardMaterial ? ee : Q).get(
        e.envMap || a.environment
      )),
      void 0 === h &&
        (e.addEventListener("dispose", ex), (h = new Map()), (a.programs = h));
    let d = h.get(u);
    if (void 0 !== d) {
      if (a.currentProgram === d && a.lightsStateVersion === l)
        return e1(e, c), d;
    } else
      (c.uniforms = en.getUniforms(e)),
        e.onBuild(r, c, g),
        e.onBeforeCompile(c, g),
        (d = en.acquireProgram(c, u)),
        h.set(u, d),
        (a.uniforms = c.uniforms);
    let m = a.uniforms;
    ((e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping) ||
      (m.clippingPlanes = el.uniform),
      e1(e, c),
      (a.needsLights =
        ((n = e),
        n.isMeshLambertMaterial ||
          n.isMeshToonMaterial ||
          n.isMeshPhongMaterial ||
          n.isMeshStandardMaterial ||
          n.isShadowMaterial ||
          (n.isShaderMaterial && !0 === n.lights))),
      (a.lightsStateVersion = l),
      a.needsLights &&
        ((m.ambientLightColor.value = s.state.ambient),
        (m.lightProbe.value = s.state.probe),
        (m.directionalLights.value = s.state.directional),
        (m.directionalLightShadows.value = s.state.directionalShadow),
        (m.spotLights.value = s.state.spot),
        (m.spotLightShadows.value = s.state.spotShadow),
        (m.rectAreaLights.value = s.state.rectArea),
        (m.ltc_1.value = s.state.rectAreaLTC1),
        (m.ltc_2.value = s.state.rectAreaLTC2),
        (m.pointLights.value = s.state.point),
        (m.pointLightShadows.value = s.state.pointShadow),
        (m.hemisphereLights.value = s.state.hemi),
        (m.directionalShadowMap.value = s.state.directionalShadowMap),
        (m.directionalShadowMatrix.value = s.state.directionalShadowMatrix),
        (m.spotShadowMap.value = s.state.spotShadowMap),
        (m.spotShadowMatrix.value = s.state.spotShadowMatrix),
        (m.pointShadowMap.value = s.state.pointShadowMap),
        (m.pointShadowMatrix.value = s.state.pointShadowMatrix));
    let f = d.getUniforms(),
      $ = WebGLUniforms.seqWithValue(f.seq, m);
    return (a.currentProgram = d), (a.uniformsList = $), d;
  }
  function e1(e, t) {
    let r = Y.get(e);
    (r.outputEncoding = t.outputEncoding),
      (r.instancing = t.instancing),
      (r.skinning = t.skinning),
      (r.morphTargets = t.morphTargets),
      (r.morphNormals = t.morphNormals),
      (r.morphColors = t.morphColors),
      (r.morphTargetsCount = t.morphTargetsCount),
      (r.numClippingPlanes = t.numClippingPlanes),
      (r.numIntersection = t.numClipIntersection),
      (r.vertexAlphas = t.vertexAlphas),
      (r.vertexTangents = t.vertexTangents),
      (r.toneMapping = t.toneMapping);
  }
  eS.setAnimationLoop(function e(t) {
    ey && ey(t);
  }),
    "undefined" != typeof self && eS.setContext(self),
    (this.setAnimationLoop = function (e) {
      (ey = e), e8.setAnimationLoop(e), null === e ? eS.stop() : eS.start();
    }),
    e8.addEventListener("sessionstart", eb),
    e8.addEventListener("sessionend", e_),
    (this.render = function (e, t) {
      if (void 0 !== t && !0 !== t.isCamera) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (!0 === $) return;
      !0 === e.autoUpdate && e.updateMatrixWorld(),
        null === t.parent && t.updateMatrixWorld(),
        !0 === e8.enabled &&
          !0 === e8.isPresenting &&
          (!0 === e8.cameraAutoUpdate && e8.updateCamera(t),
          (t = e8.getCamera())),
        !0 === e.isScene && e.onBeforeRender(g, e, t, y),
        (p = eo.get(e, f.length)).init(),
        f.push(p),
        G.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        B.setFromProjectionMatrix(G),
        (V = this.localClippingEnabled),
        (I = el.init(this.clippingPlanes, V, t)),
        (d = es.get(e, m.length)).init(),
        m.push(d),
        (function e(t, r, n, a) {
          if (!1 === t.visible) return;
          let s = t.layers.test(r.layers);
          if (s) {
            if (t.isGroup) n = t.renderOrder;
            else if (t.isLOD) !0 === t.autoUpdate && t.update(r);
            else if (t.isLight) p.pushLight(t), t.castShadow && p.pushShadow(t);
            else if (t.isSprite) {
              if (!t.frustumCulled || B.intersectsSprite(t)) {
                a && U.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
                let o = er.update(t),
                  l = t.material;
                l.visible && d.push(t, o, l, n, U.z, null);
              }
            } else if (
              (t.isMesh || t.isLine || t.isPoints) &&
              (t.isSkinnedMesh &&
                t.skeleton.frame !== J.render.frame &&
                (t.skeleton.update(), (t.skeleton.frame = J.render.frame)),
              !t.frustumCulled || B.intersectsObject(t))
            ) {
              a && U.setFromMatrixPosition(t.matrixWorld).applyMatrix4(G);
              let c = er.update(t),
                u = t.material;
              if (Array.isArray(u)) {
                let h = c.groups;
                for (let m = 0, f = h.length; m < f; m++) {
                  let g = h[m],
                    $ = u[g.materialIndex];
                  $ && $.visible && d.push(t, c, $, n, U.z, g);
                }
              } else u.visible && d.push(t, c, u, n, U.z, null);
            }
          }
          let v = t.children;
          for (let x = 0, y = v.length; x < y; x++) e(v[x], r, n, a);
        })(e, t, 0, g.sortObjects),
        d.finish(),
        !0 === g.sortObjects && d.sort(L, E),
        !0 === I && el.beginShadows();
      let r = p.state.shadowsArray;
      if (
        (ec.render(r, e, t),
        !0 === I && el.endShadows(),
        !0 === this.info.autoReset && this.info.reset(),
        eu.render(d, e),
        p.setupLights(g.physicallyCorrectLights),
        t.isArrayCamera)
      ) {
        let n = t.cameras;
        for (let a = 0, s = n.length; a < s; a++) {
          let o = n[a];
          eM(d, e, o, o.viewport);
        }
      } else eM(d, e, t);
      null !== y &&
        (K.updateMultisampleRenderTarget(y), K.updateRenderTargetMipmap(y)),
        !0 === e.isScene && e.onAfterRender(g, e, t),
        ef.resetDefaultState(),
        (b = -1),
        (_ = null),
        f.pop(),
        (p = f.length > 0 ? f[f.length - 1] : null),
        m.pop(),
        (d = m.length > 0 ? m[m.length - 1] : null);
    }),
    (this.getActiveCubeFace = function () {
      return v;
    }),
    (this.getActiveMipmapLevel = function () {
      return x;
    }),
    (this.getRenderTarget = function () {
      return y;
    }),
    (this.setRenderTargetTextures = function (e, t, r) {
      (Y.get(e.texture).__webglTexture = t),
        (Y.get(e.depthTexture).__webglTexture = r);
      let n = Y.get(e);
      (n.__hasExternalTextures = !0),
        n.__hasExternalTextures &&
          ((n.__autoAllocateDepthBuffer = void 0 === r),
          n.__autoAllocateDepthBuffer ||
            !0 !== q.has("WEBGL_multisampled_render_to_texture") ||
            (console.warn(
              "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
            ),
            (n.__useRenderToTexture = !1)));
    }),
    (this.setRenderTargetFramebuffer = function (e, t) {
      let r = Y.get(e);
      (r.__webglFramebuffer = t), (r.__useDefaultFramebuffer = void 0 === t);
    }),
    (this.setRenderTarget = function (e, t = 0, r = 0) {
      (y = e), (v = t), (x = r);
      let n = !0;
      if (e) {
        let a = Y.get(e);
        void 0 !== a.__useDefaultFramebuffer
          ? (Z.bindFramebuffer(36160, null), (n = !1))
          : void 0 === a.__webglFramebuffer
          ? K.setupRenderTarget(e)
          : a.__hasExternalTextures &&
            K.rebindTextures(
              e,
              Y.get(e.texture).__webglTexture,
              Y.get(e.depthTexture).__webglTexture
            );
      }
      let s = null,
        o = !1,
        l = !1;
      if (e) {
        let c = e.texture;
        (c.isData3DTexture || c.isDataArrayTexture) && (l = !0);
        let u = Y.get(e).__webglFramebuffer;
        e.isWebGLCubeRenderTarget
          ? ((s = u[t]), (o = !0))
          : (s =
              X.isWebGL2 && e.samples > 0 && !1 === K.useMultisampledRTT(e)
                ? Y.get(e).__webglMultisampledFramebuffer
                : u),
          S.copy(e.viewport),
          M.copy(e.scissor),
          (w = e.scissorTest);
      } else
        S.copy(P).multiplyScalar(C).floor(),
          M.copy(R).multiplyScalar(C).floor(),
          (w = D);
      let h = Z.bindFramebuffer(36160, s);
      if (
        (h && X.drawBuffers && n && Z.drawBuffers(e, s),
        Z.viewport(S),
        Z.scissor(M),
        Z.setScissorTest(w),
        o)
      ) {
        let d = Y.get(e.texture);
        k.framebufferTexture2D(36160, 36064, 34069 + t, d.__webglTexture, r);
      } else if (l) {
        let p = Y.get(e.texture);
        k.framebufferTextureLayer(
          36160,
          36064,
          p.__webglTexture,
          r || 0,
          t || 0
        );
      }
      b = -1;
    }),
    (this.readRenderTargetPixels = function (e, t, r, n, a, s, o) {
      if (!(e && e.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let l = Y.get(e).__webglFramebuffer;
      if ((e.isWebGLCubeRenderTarget && void 0 !== o && (l = l[o]), l)) {
        Z.bindFramebuffer(36160, l);
        try {
          let c = e.texture,
            u = c.format,
            h = c.type;
          if (u !== RGBAFormat && em.convert(u) !== k.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          let d =
            h === HalfFloatType &&
            (q.has("EXT_color_buffer_half_float") ||
              (X.isWebGL2 && q.has("EXT_color_buffer_float")));
          if (
            h !== UnsignedByteType &&
            em.convert(h) !== k.getParameter(35738) &&
            !(
              h === FloatType &&
              (X.isWebGL2 ||
                q.has("OES_texture_float") ||
                q.has("WEBGL_color_buffer_float"))
            ) &&
            !d
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          t >= 0 &&
            t <= e.width - n &&
            r >= 0 &&
            r <= e.height - a &&
            k.readPixels(t, r, n, a, em.convert(u), em.convert(h), s);
        } finally {
          let p = null !== y ? Y.get(y).__webglFramebuffer : null;
          Z.bindFramebuffer(36160, p);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (e, t, r = 0) {
      let n = Math.pow(2, -r),
        a = Math.floor(t.image.width * n),
        s = Math.floor(t.image.height * n);
      K.setTexture2D(t, 0),
        k.copyTexSubImage2D(3553, r, 0, 0, e.x, e.y, a, s),
        Z.unbindTexture();
    }),
    (this.copyTextureToTexture = function (e, t, r, n = 0) {
      let a = t.image.width,
        s = t.image.height,
        o = em.convert(r.format),
        l = em.convert(r.type);
      K.setTexture2D(r, 0),
        k.pixelStorei(37440, r.flipY),
        k.pixelStorei(37441, r.premultiplyAlpha),
        k.pixelStorei(3317, r.unpackAlignment),
        t.isDataTexture
          ? k.texSubImage2D(3553, n, e.x, e.y, a, s, o, l, t.image.data)
          : t.isCompressedTexture
          ? k.compressedTexSubImage2D(
              3553,
              n,
              e.x,
              e.y,
              t.mipmaps[0].width,
              t.mipmaps[0].height,
              o,
              t.mipmaps[0].data
            )
          : k.texSubImage2D(3553, n, e.x, e.y, o, l, t.image),
        0 === n && r.generateMipmaps && k.generateMipmap(3553),
        Z.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (e, t, r, n, a = 0) {
      if (g.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      let s = e.max.x - e.min.x + 1,
        o = e.max.y - e.min.y + 1,
        l = e.max.z - e.min.z + 1,
        c = em.convert(n.format),
        u = em.convert(n.type),
        h;
      if (n.isData3DTexture) K.setTexture3D(n, 0), (h = 32879);
      else if (n.isDataArrayTexture) K.setTexture2DArray(n, 0), (h = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      k.pixelStorei(37440, n.flipY),
        k.pixelStorei(37441, n.premultiplyAlpha),
        k.pixelStorei(3317, n.unpackAlignment);
      let d = k.getParameter(3314),
        p = k.getParameter(32878),
        m = k.getParameter(3316),
        f = k.getParameter(3315),
        $ = k.getParameter(32877),
        v = r.isCompressedTexture ? r.mipmaps[0] : r.image;
      k.pixelStorei(3314, v.width),
        k.pixelStorei(32878, v.height),
        k.pixelStorei(3316, e.min.x),
        k.pixelStorei(3315, e.min.y),
        k.pixelStorei(32877, e.min.z),
        r.isDataTexture || r.isData3DTexture
          ? k.texSubImage3D(h, a, t.x, t.y, t.z, s, o, l, c, u, v.data)
          : r.isCompressedTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            k.compressedTexSubImage3D(h, a, t.x, t.y, t.z, s, o, l, c, v.data))
          : k.texSubImage3D(h, a, t.x, t.y, t.z, s, o, l, c, u, v),
        k.pixelStorei(3314, d),
        k.pixelStorei(32878, p),
        k.pixelStorei(3316, m),
        k.pixelStorei(3315, f),
        k.pixelStorei(32877, $),
        0 === a && n.generateMipmaps && k.generateMipmap(h),
        Z.unbindTexture();
    }),
    (this.initTexture = function (e) {
      K.setTexture2D(e, 0), Z.unbindTexture();
    }),
    (this.resetState = function () {
      (v = 0), (x = 0), (y = null), Z.reset(), ef.reset();
    }),
    "undefined" != typeof __THREE_DEVTOOLS__ &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
WebGLRenderer.prototype.isWebGLRenderer = !0;
class WebGL1Renderer extends WebGLRenderer {}
WebGL1Renderer.prototype.isWebGL1Renderer = !0;
class FogExp2 {
  constructor(e, t = 25e-5) {
    (this.name = ""), (this.color = new Color(e)), (this.density = t);
  }
  clone() {
    return new FogExp2(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density,
    };
  }
}
FogExp2.prototype.isFogExp2 = !0;
class Fog {
  constructor(e, t = 1, r = 1e3) {
    (this.name = ""),
      (this.color = new Color(e)),
      (this.near = t),
      (this.far = r);
  }
  clone() {
    return new Fog(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far,
    };
  }
}
Fog.prototype.isFog = !0;
class Scene extends Object3D {
  constructor() {
    super(),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      (this.autoUpdate = !0),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      null !== e.background && (this.background = e.background.clone()),
      null !== e.environment && (this.environment = e.environment.clone()),
      null !== e.fog && (this.fog = e.fog.clone()),
      null !== e.overrideMaterial &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.autoUpdate = e.autoUpdate),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return null !== this.fog && (t.object.fog = this.fog.toJSON()), t;
  }
}
Scene.prototype.isScene = !0;
class InterleavedBuffer {
  constructor(e, t) {
    (this.array = e),
      (this.stride = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.usage = StaticDrawUsage),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = generateUUID());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, r) {
    (e *= this.stride), (r *= t.stride);
    for (let n = 0, a = this.stride; n < a; n++)
      this.array[e + n] = t.array[r + n];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
      void 0 === this.array.buffer._uuid &&
        (this.array.buffer._uuid = generateUUID()),
      void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
      r = new this.constructor(t, this.stride);
    return r.setUsage(this.usage), r;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      void 0 === e.arrayBuffers && (e.arrayBuffers = {}),
      void 0 === this.array.buffer._uuid &&
        (this.array.buffer._uuid = generateUUID()),
      void 0 === e.arrayBuffers[this.array.buffer._uuid] &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
InterleavedBuffer.prototype.isInterleavedBuffer = !0;
let _vector$6 = new Vector3();
class InterleavedBufferAttribute {
  constructor(e, t, r, n = !1) {
    (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = r),
      (this.normalized = !0 === n);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, r = this.data.count; t < r; t++)
      _vector$6.fromBufferAttribute(this, t),
        _vector$6.applyMatrix4(e),
        this.setXYZ(t, _vector$6.x, _vector$6.y, _vector$6.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, r = this.count; t < r; t++)
      _vector$6.fromBufferAttribute(this, t),
        _vector$6.applyNormalMatrix(e),
        this.setXYZ(t, _vector$6.x, _vector$6.y, _vector$6.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, r = this.count; t < r; t++)
      _vector$6.fromBufferAttribute(this, t),
        _vector$6.transformDirection(e),
        this.setXYZ(t, _vector$6.x, _vector$6.y, _vector$6.z);
    return this;
  }
  setX(e, t) {
    return (this.data.array[e * this.data.stride + this.offset] = t), this;
  }
  setY(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 1] = t), this;
  }
  setZ(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 2] = t), this;
  }
  setW(e, t) {
    return (this.data.array[e * this.data.stride + this.offset + 3] = t), this;
  }
  getX(e) {
    return this.data.array[e * this.data.stride + this.offset];
  }
  getY(e) {
    return this.data.array[e * this.data.stride + this.offset + 1];
  }
  getZ(e) {
    return this.data.array[e * this.data.stride + this.offset + 2];
  }
  getW(e) {
    return this.data.array[e * this.data.stride + this.offset + 3];
  }
  setXY(e, t, r) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = r),
      this
    );
  }
  setXYZ(e, t, r, n) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = r),
      (this.data.array[e + 2] = n),
      this
    );
  }
  setXYZW(e, t, r, n, a) {
    return (
      (e = e * this.data.stride + this.offset),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = r),
      (this.data.array[e + 2] = n),
      (this.data.array[e + 3] = a),
      this
    );
  }
  clone(e) {
    if (void 0 !== e)
      return (
        void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
        void 0 === e.interleavedBuffers[this.data.uuid] &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new InterleavedBufferAttribute(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
    {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."
      );
      let t = [];
      for (let r = 0; r < this.count; r++) {
        let n = r * this.data.stride + this.offset;
        for (let a = 0; a < this.itemSize; a++) t.push(this.data.array[n + a]);
      }
      return new BufferAttribute(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    }
  }
  toJSON(e) {
    if (void 0 !== e)
      return (
        void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}),
        void 0 === e.interleavedBuffers[this.data.uuid] &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
    {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."
      );
      let t = [];
      for (let r = 0; r < this.count; r++) {
        let n = r * this.data.stride + this.offset;
        for (let a = 0; a < this.itemSize; a++) t.push(this.data.array[n + a]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    }
  }
}
InterleavedBufferAttribute.prototype.isInterleavedBufferAttribute = !0;
class SpriteMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "SpriteMaterial"),
      (this.color = new Color(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.rotation = e.rotation),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
SpriteMaterial.prototype.isSpriteMaterial = !0;
let _geometry,
  _intersectPoint = new Vector3(),
  _worldScale = new Vector3(),
  _mvPosition = new Vector3(),
  _alignedPosition = new Vector2(),
  _rotatedPosition = new Vector2(),
  _viewWorldMatrix = new Matrix4(),
  _vA = new Vector3(),
  _vB = new Vector3(),
  _vC = new Vector3(),
  _uvA = new Vector2(),
  _uvB = new Vector2(),
  _uvC = new Vector2();
class Sprite extends Object3D {
  constructor(e) {
    if ((super(), (this.type = "Sprite"), void 0 === _geometry)) {
      _geometry = new BufferGeometry();
      let t = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        r = new InterleavedBuffer(t, 5);
      _geometry.setIndex([0, 1, 2, 0, 2, 3]),
        _geometry.setAttribute(
          "position",
          new InterleavedBufferAttribute(r, 3, 0, !1)
        ),
        _geometry.setAttribute(
          "uv",
          new InterleavedBufferAttribute(r, 2, 3, !1)
        );
    }
    (this.geometry = _geometry),
      (this.material = void 0 !== e ? e : new SpriteMaterial()),
      (this.center = new Vector2(0.5, 0.5));
  }
  raycast(e, t) {
    null === e.camera &&
      console.error(
        'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
      ),
      _worldScale.setFromMatrixScale(this.matrixWorld),
      _viewWorldMatrix.copy(e.camera.matrixWorld),
      this.modelViewMatrix.multiplyMatrices(
        e.camera.matrixWorldInverse,
        this.matrixWorld
      ),
      _mvPosition.setFromMatrixPosition(this.modelViewMatrix),
      e.camera.isPerspectiveCamera &&
        !1 === this.material.sizeAttenuation &&
        _worldScale.multiplyScalar(-_mvPosition.z);
    let r = this.material.rotation,
      n,
      a;
    0 !== r && ((a = Math.cos(r)), (n = Math.sin(r)));
    let s = this.center;
    transformVertex(_vA.set(-0.5, -0.5, 0), _mvPosition, s, _worldScale, n, a),
      transformVertex(_vB.set(0.5, -0.5, 0), _mvPosition, s, _worldScale, n, a),
      transformVertex(_vC.set(0.5, 0.5, 0), _mvPosition, s, _worldScale, n, a),
      _uvA.set(0, 0),
      _uvB.set(1, 0),
      _uvC.set(1, 1);
    let o = e.ray.intersectTriangle(_vA, _vB, _vC, !1, _intersectPoint);
    if (
      null === o &&
      (transformVertex(
        _vB.set(-0.5, 0.5, 0),
        _mvPosition,
        s,
        _worldScale,
        n,
        a
      ),
      _uvB.set(0, 1),
      null ===
        (o = e.ray.intersectTriangle(_vA, _vC, _vB, !1, _intersectPoint)))
    )
      return;
    let l = e.ray.origin.distanceTo(_intersectPoint);
    l < e.near ||
      l > e.far ||
      t.push({
        distance: l,
        point: _intersectPoint.clone(),
        uv: Triangle.getUV(
          _intersectPoint,
          _vA,
          _vB,
          _vC,
          _uvA,
          _uvB,
          _uvC,
          new Vector2()
        ),
        face: null,
        object: this,
      });
  }
  copy(e) {
    return (
      super.copy(e),
      void 0 !== e.center && this.center.copy(e.center),
      (this.material = e.material),
      this
    );
  }
}
function transformVertex(e, t, r, n, a, s) {
  _alignedPosition.subVectors(e, r).addScalar(0.5).multiply(n),
    void 0 !== a
      ? ((_rotatedPosition.x = s * _alignedPosition.x - a * _alignedPosition.y),
        (_rotatedPosition.y = a * _alignedPosition.x + s * _alignedPosition.y))
      : _rotatedPosition.copy(_alignedPosition),
    e.copy(t),
    (e.x += _rotatedPosition.x),
    (e.y += _rotatedPosition.y),
    e.applyMatrix4(_viewWorldMatrix);
}
Sprite.prototype.isSprite = !0;
let _v1$2 = new Vector3(),
  _v2$1 = new Vector3();
class LOD extends Object3D {
  constructor() {
    super(),
      (this._currentLevel = 0),
      (this.type = "LOD"),
      Object.defineProperties(this, {
        levels: { enumerable: !0, value: [] },
        isLOD: { value: !0 },
      }),
      (this.autoUpdate = !0);
  }
  copy(e) {
    super.copy(e, !1);
    let t = e.levels;
    for (let r = 0, n = t.length; r < n; r++) {
      let a = t[r];
      this.addLevel(a.object.clone(), a.distance);
    }
    return (this.autoUpdate = e.autoUpdate), this;
  }
  addLevel(e, t = 0) {
    t = Math.abs(t);
    let r = this.levels,
      n;
    for (n = 0; n < r.length && !(t < r[n].distance); n++);
    return r.splice(n, 0, { distance: t, object: e }), this.add(e), this;
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  getObjectForDistance(e) {
    let t = this.levels;
    if (t.length > 0) {
      let r, n;
      for (r = 1, n = t.length; r < n && !(e < t[r].distance); r++);
      return t[r - 1].object;
    }
    return null;
  }
  raycast(e, t) {
    let r = this.levels;
    if (r.length > 0) {
      _v1$2.setFromMatrixPosition(this.matrixWorld);
      let n = e.ray.origin.distanceTo(_v1$2);
      this.getObjectForDistance(n).raycast(e, t);
    }
  }
  update(e) {
    let t = this.levels;
    if (t.length > 1) {
      _v1$2.setFromMatrixPosition(e.matrixWorld),
        _v2$1.setFromMatrixPosition(this.matrixWorld);
      let r = _v1$2.distanceTo(_v2$1) / e.zoom;
      t[0].object.visible = !0;
      let n, a;
      for (n = 1, a = t.length; n < a; n++)
        if (r >= t[n].distance)
          (t[n - 1].object.visible = !1), (t[n].object.visible = !0);
        else break;
      for (this._currentLevel = n - 1; n < a; n++) t[n].object.visible = !1;
    }
  }
  toJSON(e) {
    let t = super.toJSON(e);
    !1 === this.autoUpdate && (t.object.autoUpdate = !1),
      (t.object.levels = []);
    let r = this.levels;
    for (let n = 0, a = r.length; n < a; n++) {
      let s = r[n];
      t.object.levels.push({ object: s.object.uuid, distance: s.distance });
    }
    return t;
  }
}
let _basePosition = new Vector3(),
  _skinIndex = new Vector4(),
  _skinWeight = new Vector4(),
  _vector$5 = new Vector3(),
  _matrix = new Matrix4();
class SkinnedMesh extends Mesh {
  constructor(e, t) {
    super(e, t),
      (this.type = "SkinnedMesh"),
      (this.bindMode = "attached"),
      (this.bindMatrix = new Matrix4()),
      (this.bindMatrixInverse = new Matrix4());
  }
  copy(e) {
    return (
      super.copy(e),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      this
    );
  }
  bind(e, t) {
    (this.skeleton = e),
      void 0 === t &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    let e = new Vector4(),
      t = this.geometry.attributes.skinWeight;
    for (let r = 0, n = t.count; r < n; r++) {
      e.fromBufferAttribute(t, r);
      let a = 1 / e.manhattanLength();
      a !== 1 / 0 ? e.multiplyScalar(a) : e.set(1, 0, 0, 0),
        t.setXYZW(r, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      "attached" === this.bindMode
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : "detached" === this.bindMode
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  boneTransform(e, t) {
    let r = this.skeleton,
      n = this.geometry;
    _skinIndex.fromBufferAttribute(n.attributes.skinIndex, e),
      _skinWeight.fromBufferAttribute(n.attributes.skinWeight, e),
      _basePosition.copy(t).applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0);
    for (let a = 0; a < 4; a++) {
      let s = _skinWeight.getComponent(a);
      if (0 !== s) {
        let o = _skinIndex.getComponent(a);
        _matrix.multiplyMatrices(r.bones[o].matrixWorld, r.boneInverses[o]),
          t.addScaledVector(
            _vector$5.copy(_basePosition).applyMatrix4(_matrix),
            s
          );
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
SkinnedMesh.prototype.isSkinnedMesh = !0;
class Bone extends Object3D {
  constructor() {
    super(), (this.type = "Bone");
  }
}
Bone.prototype.isBone = !0;
class DataTexture extends Texture {
  constructor(
    e = null,
    t = 1,
    r = 1,
    n,
    a,
    s,
    o,
    l,
    c = NearestFilter,
    u = NearestFilter,
    h,
    d
  ) {
    super(null, s, o, l, c, u, n, a, h, d),
      (this.image = { data: e, width: t, height: r }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
DataTexture.prototype.isDataTexture = !0;
let _offsetMatrix = new Matrix4(),
  _identityMatrix = new Matrix4();
class Skeleton {
  constructor(e = [], t = []) {
    (this.uuid = generateUUID()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      (this.boneTextureSize = 0),
      (this.frame = -1),
      this.init();
  }
  init() {
    let e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(16 * e.length)), 0 === t.length))
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn(
        "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let r = 0, n = this.bones.length; r < n; r++)
        this.boneInverses.push(new Matrix4());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      let r = new Matrix4();
      this.bones[e] && r.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(r);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      let r = this.bones[e];
      r && r.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let n = 0, a = this.bones.length; n < a; n++) {
      let s = this.bones[n];
      s &&
        (s.parent && s.parent.isBone
          ? (s.matrix.copy(s.parent.matrixWorld).invert(),
            s.matrix.multiply(s.matrixWorld))
          : s.matrix.copy(s.matrixWorld),
        s.matrix.decompose(s.position, s.quaternion, s.scale));
    }
  }
  update() {
    let e = this.bones,
      t = this.boneInverses,
      r = this.boneMatrices,
      n = this.boneTexture;
    for (let a = 0, s = e.length; a < s; a++) {
      let o = e[a] ? e[a].matrixWorld : _identityMatrix;
      _offsetMatrix.multiplyMatrices(o, t[a]), _offsetMatrix.toArray(r, 16 * a);
    }
    null !== n && (n.needsUpdate = !0);
  }
  clone() {
    return new Skeleton(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(4 * this.bones.length);
    e = Math.max((e = ceilPowerOfTwo(e)), 4);
    let t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    let r = new DataTexture(t, e, e, RGBAFormat, FloatType);
    return (
      (r.needsUpdate = !0),
      (this.boneMatrices = t),
      (this.boneTexture = r),
      (this.boneTextureSize = e),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, r = this.bones.length; t < r; t++) {
      let n = this.bones[t];
      if (n.name === e) return n;
    }
  }
  dispose() {
    null !== this.boneTexture &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let r = 0, n = e.bones.length; r < n; r++) {
      let a = e.bones[r],
        s = t[a];
      void 0 === s &&
        (console.warn("THREE.Skeleton: No bone found with UUID:", a),
        (s = new Bone())),
        this.bones.push(s),
        this.boneInverses.push(new Matrix4().fromArray(e.boneInverses[r]));
    }
    return this.init(), this;
  }
  toJSON() {
    let e = {
      metadata: {
        version: 4.5,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    let t = this.bones,
      r = this.boneInverses;
    for (let n = 0, a = t.length; n < a; n++) {
      let s = t[n];
      e.bones.push(s.uuid);
      let o = r[n];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class InstancedBufferAttribute extends BufferAttribute {
  constructor(e, t, r, n = 1) {
    "number" == typeof r &&
      ((n = r),
      (r = !1),
      console.error(
        "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
      )),
      super(e, t, r),
      (this.meshPerAttribute = n);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
InstancedBufferAttribute.prototype.isInstancedBufferAttribute = !0;
let _instanceLocalMatrix = new Matrix4(),
  _instanceWorldMatrix = new Matrix4(),
  _instanceIntersects = [],
  _mesh = new Mesh();
class InstancedMesh extends Mesh {
  constructor(e, t, r) {
    super(e, t),
      (this.instanceMatrix = new InstancedBufferAttribute(
        new Float32Array(16 * r),
        16
      )),
      (this.instanceColor = null),
      (this.count = r),
      (this.frustumCulled = !1);
  }
  copy(e) {
    return (
      super.copy(e),
      this.instanceMatrix.copy(e.instanceMatrix),
      null !== e.instanceColor &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, 3 * e);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, 16 * e);
  }
  raycast(e, t) {
    let r = this.matrixWorld,
      n = this.count;
    if (
      ((_mesh.geometry = this.geometry),
      (_mesh.material = this.material),
      void 0 !== _mesh.material)
    )
      for (let a = 0; a < n; a++) {
        this.getMatrixAt(a, _instanceLocalMatrix),
          _instanceWorldMatrix.multiplyMatrices(r, _instanceLocalMatrix),
          (_mesh.matrixWorld = _instanceWorldMatrix),
          _mesh.raycast(e, _instanceIntersects);
        for (let s = 0, o = _instanceIntersects.length; s < o; s++) {
          let l = _instanceIntersects[s];
          (l.instanceId = a), (l.object = this), t.push(l);
        }
        _instanceIntersects.length = 0;
      }
  }
  setColorAt(e, t) {
    null === this.instanceColor &&
      (this.instanceColor = new InstancedBufferAttribute(
        new Float32Array(3 * this.instanceMatrix.count),
        3
      )),
      t.toArray(this.instanceColor.array, 3 * e);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, 16 * e);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
InstancedMesh.prototype.isInstancedMesh = !0;
class LineBasicMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "LineBasicMaterial"),
      (this.color = new Color(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
LineBasicMaterial.prototype.isLineBasicMaterial = !0;
let _start$1 = new Vector3(),
  _end$1 = new Vector3(),
  _inverseMatrix$1 = new Matrix4(),
  _ray$1 = new Ray(),
  _sphere$1 = new Sphere();
class Line extends Object3D {
  constructor(e = new BufferGeometry(), t = new LineBasicMaterial()) {
    super(),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    let e = this.geometry;
    if (e.isBufferGeometry) {
      if (null === e.index) {
        let t = e.attributes.position,
          r = [0];
        for (let n = 1, a = t.count; n < a; n++)
          _start$1.fromBufferAttribute(t, n - 1),
            _end$1.fromBufferAttribute(t, n),
            (r[n] = r[n - 1]),
            (r[n] += _start$1.distanceTo(_end$1));
        e.setAttribute("lineDistance", new Float32BufferAttribute(r, 1));
      } else
        console.warn(
          "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
    } else
      e.isGeometry &&
        console.error(
          "THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    return this;
  }
  raycast(e, t) {
    let r = this.geometry,
      n = this.matrixWorld,
      a = e.params.Line.threshold,
      s = r.drawRange;
    if (
      (null === r.boundingSphere && r.computeBoundingSphere(),
      _sphere$1.copy(r.boundingSphere),
      _sphere$1.applyMatrix4(n),
      (_sphere$1.radius += a),
      !1 === e.ray.intersectsSphere(_sphere$1))
    )
      return;
    _inverseMatrix$1.copy(n).invert(),
      _ray$1.copy(e.ray).applyMatrix4(_inverseMatrix$1);
    let o = a / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = new Vector3(),
      u = new Vector3(),
      h = new Vector3(),
      d = new Vector3(),
      p = this.isLineSegments ? 2 : 1;
    if (r.isBufferGeometry) {
      let m = r.index,
        f = r.attributes,
        g = f.position;
      if (null !== m) {
        let $ = Math.max(0, s.start),
          v = Math.min(m.count, s.start + s.count);
        for (let x = $, y = v - 1; x < y; x += p) {
          let b = m.getX(x),
            _ = m.getX(x + 1);
          c.fromBufferAttribute(g, b), u.fromBufferAttribute(g, _);
          let S = _ray$1.distanceSqToSegment(c, u, d, h);
          if (S > l) continue;
          d.applyMatrix4(this.matrixWorld);
          let M = e.ray.origin.distanceTo(d);
          M < e.near ||
            M > e.far ||
            t.push({
              distance: M,
              point: h.clone().applyMatrix4(this.matrixWorld),
              index: x,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      } else {
        let w = Math.max(0, s.start),
          T = Math.min(g.count, s.start + s.count);
        for (let A = w, C = T - 1; A < C; A += p) {
          c.fromBufferAttribute(g, A), u.fromBufferAttribute(g, A + 1);
          let L = _ray$1.distanceSqToSegment(c, u, d, h);
          if (L > l) continue;
          d.applyMatrix4(this.matrixWorld);
          let E = e.ray.origin.distanceTo(d);
          E < e.near ||
            E > e.far ||
            t.push({
              distance: E,
              point: h.clone().applyMatrix4(this.matrixWorld),
              index: A,
              face: null,
              faceIndex: null,
              object: this,
            });
        }
      }
    } else
      r.isGeometry &&
        console.error(
          "THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
  }
  updateMorphTargets() {
    let e = this.geometry;
    if (e.isBufferGeometry) {
      let t = e.morphAttributes,
        r = Object.keys(t);
      if (r.length > 0) {
        let n = t[r[0]];
        if (void 0 !== n) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let a = 0, s = n.length; a < s; a++) {
            let o = n[a].name || String(a);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[o] = a);
          }
        }
      }
    } else {
      let l = e.morphTargets;
      void 0 !== l &&
        l.length > 0 &&
        console.error(
          "THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
  }
}
Line.prototype.isLine = !0;
let _start = new Vector3(),
  _end = new Vector3();
class LineSegments extends Line {
  constructor(e, t) {
    super(e, t), (this.type = "LineSegments");
  }
  computeLineDistances() {
    let e = this.geometry;
    if (e.isBufferGeometry) {
      if (null === e.index) {
        let t = e.attributes.position,
          r = [];
        for (let n = 0, a = t.count; n < a; n += 2)
          _start.fromBufferAttribute(t, n),
            _end.fromBufferAttribute(t, n + 1),
            (r[n] = 0 === n ? 0 : r[n - 1]),
            (r[n + 1] = r[n] + _start.distanceTo(_end));
        e.setAttribute("lineDistance", new Float32BufferAttribute(r, 1));
      } else
        console.warn(
          "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
        );
    } else
      e.isGeometry &&
        console.error(
          "THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    return this;
  }
}
LineSegments.prototype.isLineSegments = !0;
class LineLoop extends Line {
  constructor(e, t) {
    super(e, t), (this.type = "LineLoop");
  }
}
LineLoop.prototype.isLineLoop = !0;
class PointsMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "PointsMaterial"),
      (this.color = new Color(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
PointsMaterial.prototype.isPointsMaterial = !0;
let _inverseMatrix = new Matrix4(),
  _ray = new Ray(),
  _sphere = new Sphere(),
  _position$2 = new Vector3();
class Points extends Object3D {
  constructor(e = new BufferGeometry(), t = new PointsMaterial()) {
    super(),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    let r = this.geometry,
      n = this.matrixWorld,
      a = e.params.Points.threshold,
      s = r.drawRange;
    if (
      (null === r.boundingSphere && r.computeBoundingSphere(),
      _sphere.copy(r.boundingSphere),
      _sphere.applyMatrix4(n),
      (_sphere.radius += a),
      !1 === e.ray.intersectsSphere(_sphere))
    )
      return;
    _inverseMatrix.copy(n).invert(),
      _ray.copy(e.ray).applyMatrix4(_inverseMatrix);
    let o = a / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o;
    if (r.isBufferGeometry) {
      let c = r.index,
        u = r.attributes,
        h = u.position;
      if (null !== c) {
        let d = Math.max(0, s.start),
          p = Math.min(c.count, s.start + s.count);
        for (let m = d, f = p; m < f; m++) {
          let g = c.getX(m);
          _position$2.fromBufferAttribute(h, g),
            testPoint(_position$2, g, l, n, e, t, this);
        }
      } else {
        let $ = Math.max(0, s.start),
          v = Math.min(h.count, s.start + s.count);
        for (let x = $, y = v; x < y; x++)
          _position$2.fromBufferAttribute(h, x),
            testPoint(_position$2, x, l, n, e, t, this);
      }
    } else
      console.error(
        "THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
      );
  }
  updateMorphTargets() {
    let e = this.geometry;
    if (e.isBufferGeometry) {
      let t = e.morphAttributes,
        r = Object.keys(t);
      if (r.length > 0) {
        let n = t[r[0]];
        if (void 0 !== n) {
          (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
          for (let a = 0, s = n.length; a < s; a++) {
            let o = n[a].name || String(a);
            this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[o] = a);
          }
        }
      }
    } else {
      let l = e.morphTargets;
      void 0 !== l &&
        l.length > 0 &&
        console.error(
          "THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
        );
    }
  }
}
function testPoint(e, t, r, n, a, s, o) {
  let l = _ray.distanceSqToPoint(e);
  if (l < r) {
    let c = new Vector3();
    _ray.closestPointToPoint(e, c), c.applyMatrix4(n);
    let u = a.ray.origin.distanceTo(c);
    if (u < a.near || u > a.far) return;
    s.push({
      distance: u,
      distanceToRay: Math.sqrt(l),
      point: c,
      index: t,
      face: null,
      object: o,
    });
  }
}
Points.prototype.isPoints = !0;
class VideoTexture extends Texture {
  constructor(e, t, r, n, a, s, o, l, c) {
    super(e, t, r, n, a, s, o, l, c),
      (this.minFilter = void 0 !== s ? s : LinearFilter),
      (this.magFilter = void 0 !== a ? a : LinearFilter),
      (this.generateMipmaps = !1);
    let u = this;
    function h() {
      (u.needsUpdate = !0), e.requestVideoFrameCallback(h);
    }
    "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(h);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    let e = this.image;
    !1 == "requestVideoFrameCallback" in e &&
      e.readyState >= e.HAVE_CURRENT_DATA &&
      (this.needsUpdate = !0);
  }
}
VideoTexture.prototype.isVideoTexture = !0;
class FramebufferTexture extends Texture {
  constructor(e, t, r) {
    super({ width: e, height: t }),
      (this.format = r),
      (this.magFilter = NearestFilter),
      (this.minFilter = NearestFilter),
      (this.generateMipmaps = !1),
      (this.needsUpdate = !0);
  }
}
FramebufferTexture.prototype.isFramebufferTexture = !0;
class CompressedTexture extends Texture {
  constructor(e, t, r, n, a, s, o, l, c, u, h, d) {
    super(null, s, o, l, c, u, n, a, h, d),
      (this.image = { width: t, height: r }),
      (this.mipmaps = e),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
CompressedTexture.prototype.isCompressedTexture = !0;
class CanvasTexture extends Texture {
  constructor(e, t, r, n, a, s, o, l, c) {
    super(e, t, r, n, a, s, o, l, c), (this.needsUpdate = !0);
  }
}
CanvasTexture.prototype.isCanvasTexture = !0;
class Curve {
  constructor() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(e, t) {
    let r = this.getUtoTmapping(e);
    return this.getPoint(r, t);
  }
  getPoints(e = 5) {
    let t = [];
    for (let r = 0; r <= e; r++) t.push(this.getPoint(r / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    let t = [];
    for (let r = 0; r <= e; r++) t.push(this.getPointAt(r / e));
    return t;
  }
  getLength() {
    let e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === e + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    let t = [],
      r,
      n = this.getPoint(0),
      a = 0;
    t.push(0);
    for (let s = 1; s <= e; s++)
      t.push((a += (r = this.getPoint(s / e)).distanceTo(n))), (n = r);
    return (this.cacheArcLengths = t), t;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(e, t) {
    let r = this.getLengths(),
      n = 0,
      a = r.length,
      s;
    s = t || e * r[a - 1];
    let o = 0,
      l = a - 1,
      c;
    for (; o <= l; )
      if ((c = r[(n = Math.floor(o + (l - o) / 2))] - s) < 0) o = n + 1;
      else if (c > 0) l = n - 1;
      else {
        l = n;
        break;
      }
    if (r[(n = l)] === s) return n / (a - 1);
    let u = r[n],
      h = r[n + 1],
      d = (s - u) / (h - u),
      p = (n + d) / (a - 1);
    return p;
  }
  getTangent(e, t) {
    let r = e - 1e-4,
      n = e + 1e-4;
    r < 0 && (r = 0), n > 1 && (n = 1);
    let a = this.getPoint(r),
      s = this.getPoint(n),
      o = t || (a.isVector2 ? new Vector2() : new Vector3());
    return o.copy(s).sub(a).normalize(), o;
  }
  getTangentAt(e, t) {
    let r = this.getUtoTmapping(e);
    return this.getTangent(r, t);
  }
  computeFrenetFrames(e, t) {
    let r = new Vector3(),
      n = [],
      a = [],
      s = [],
      o = new Vector3(),
      l = new Matrix4();
    for (let c = 0; c <= e; c++) {
      let u = c / e;
      n[c] = this.getTangentAt(u, new Vector3());
    }
    (a[0] = new Vector3()), (s[0] = new Vector3());
    let h = Number.MAX_VALUE,
      d = Math.abs(n[0].x),
      p = Math.abs(n[0].y),
      m = Math.abs(n[0].z);
    d <= h && ((h = d), r.set(1, 0, 0)),
      p <= h && ((h = p), r.set(0, 1, 0)),
      m <= h && r.set(0, 0, 1),
      o.crossVectors(n[0], r).normalize(),
      a[0].crossVectors(n[0], o),
      s[0].crossVectors(n[0], a[0]);
    for (let f = 1; f <= e; f++) {
      if (
        ((a[f] = a[f - 1].clone()),
        (s[f] = s[f - 1].clone()),
        o.crossVectors(n[f - 1], n[f]),
        o.length() > Number.EPSILON)
      ) {
        o.normalize();
        let g = Math.acos(clamp(n[f - 1].dot(n[f]), -1, 1));
        a[f].applyMatrix4(l.makeRotationAxis(o, g));
      }
      s[f].crossVectors(n[f], a[f]);
    }
    if (!0 === t) {
      let $ = Math.acos(clamp(a[0].dot(a[e]), -1, 1));
      ($ /= e), n[0].dot(o.crossVectors(a[0], a[e])) > 0 && ($ = -$);
      for (let v = 1; v <= e; v++)
        a[v].applyMatrix4(l.makeRotationAxis(n[v], $ * v)),
          s[v].crossVectors(n[v], a[v]);
    }
    return { tangents: n, normals: a, binormals: s };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
  toJSON() {
    let e = {
      metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" },
    };
    return (
      (e.arcLengthDivisions = this.arcLengthDivisions), (e.type = this.type), e
    );
  }
  fromJSON(e) {
    return (this.arcLengthDivisions = e.arcLengthDivisions), this;
  }
}
class EllipseCurve extends Curve {
  constructor(
    e = 0,
    t = 0,
    r = 1,
    n = 1,
    a = 0,
    s = 2 * Math.PI,
    o = !1,
    l = 0
  ) {
    super(),
      (this.type = "EllipseCurve"),
      (this.aX = e),
      (this.aY = t),
      (this.xRadius = r),
      (this.yRadius = n),
      (this.aStartAngle = a),
      (this.aEndAngle = s),
      (this.aClockwise = o),
      (this.aRotation = l);
  }
  getPoint(e, t) {
    let r = t || new Vector2(),
      n = 2 * Math.PI,
      a = this.aEndAngle - this.aStartAngle,
      s = Math.abs(a) < Number.EPSILON;
    for (; a < 0; ) a += n;
    for (; a > n; ) a -= n;
    a < Number.EPSILON && (a = s ? 0 : n),
      !0 !== this.aClockwise || s || (a === n ? (a = -n) : (a -= n));
    let o = this.aStartAngle + e * a,
      l = this.aX + this.xRadius * Math.cos(o),
      c = this.aY + this.yRadius * Math.sin(o);
    if (0 !== this.aRotation) {
      let u = Math.cos(this.aRotation),
        h = Math.sin(this.aRotation),
        d = l - this.aX,
        p = c - this.aY;
      (l = d * u - p * h + this.aX), (c = d * h + p * u + this.aY);
    }
    return r.set(l, c);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.aX = this.aX),
      (e.aY = this.aY),
      (e.xRadius = this.xRadius),
      (e.yRadius = this.yRadius),
      (e.aStartAngle = this.aStartAngle),
      (e.aEndAngle = this.aEndAngle),
      (e.aClockwise = this.aClockwise),
      (e.aRotation = this.aRotation),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.aX = e.aX),
      (this.aY = e.aY),
      (this.xRadius = e.xRadius),
      (this.yRadius = e.yRadius),
      (this.aStartAngle = e.aStartAngle),
      (this.aEndAngle = e.aEndAngle),
      (this.aClockwise = e.aClockwise),
      (this.aRotation = e.aRotation),
      this
    );
  }
}
EllipseCurve.prototype.isEllipseCurve = !0;
class ArcCurve extends EllipseCurve {
  constructor(e, t, r, n, a, s) {
    super(e, t, r, r, n, a, s), (this.type = "ArcCurve");
  }
}
function CubicPoly() {
  let e = 0,
    t = 0,
    r = 0,
    n = 0;
  function a(a, s, o, l) {
    (e = a),
      (t = o),
      (r = -3 * a + 3 * s - 2 * o - l),
      (n = 2 * a - 2 * s + o + l);
  }
  return {
    initCatmullRom: function (e, t, r, n, s) {
      a(t, r, s * (r - e), s * (n - t));
    },
    initNonuniformCatmullRom: function (e, t, r, n, s, o, l) {
      let c = (t - e) / s - (r - e) / (s + o) + (r - t) / o,
        u = (r - t) / o - (n - t) / (o + l) + (n - r) / l;
      a(t, r, (c *= o), (u *= o));
    },
    calc: function (a) {
      let s = a * a;
      return e + t * a + r * s + n * (s * a);
    },
  };
}
ArcCurve.prototype.isArcCurve = !0;
let tmp = new Vector3(),
  px = new CubicPoly(),
  py = new CubicPoly(),
  pz = new CubicPoly();
class CatmullRomCurve3 extends Curve {
  constructor(e = [], t = !1, r = "centripetal", n = 0.5) {
    super(),
      (this.type = "CatmullRomCurve3"),
      (this.points = e),
      (this.closed = t),
      (this.curveType = r),
      (this.tension = n);
  }
  getPoint(e, t = new Vector3()) {
    let r = t,
      n = this.points,
      a = n.length,
      s = (a - (this.closed ? 0 : 1)) * e,
      o = Math.floor(s),
      l = s - o;
    this.closed
      ? (o += o > 0 ? 0 : (Math.floor(Math.abs(o) / a) + 1) * a)
      : 0 === l && o === a - 1 && ((o = a - 2), (l = 1));
    let c, u;
    this.closed || o > 0
      ? (c = n[(o - 1) % a])
      : (tmp.subVectors(n[0], n[1]).add(n[0]), (c = tmp));
    let h = n[o % a],
      d = n[(o + 1) % a];
    if (
      (this.closed || o + 2 < a
        ? (u = n[(o + 2) % a])
        : (tmp.subVectors(n[a - 1], n[a - 2]).add(n[a - 1]), (u = tmp)),
      "centripetal" === this.curveType || "chordal" === this.curveType)
    ) {
      let p = "chordal" === this.curveType ? 0.5 : 0.25,
        m = Math.pow(c.distanceToSquared(h), p),
        f = Math.pow(h.distanceToSquared(d), p),
        g = Math.pow(d.distanceToSquared(u), p);
      f < 1e-4 && (f = 1),
        m < 1e-4 && (m = f),
        g < 1e-4 && (g = f),
        px.initNonuniformCatmullRom(c.x, h.x, d.x, u.x, m, f, g),
        py.initNonuniformCatmullRom(c.y, h.y, d.y, u.y, m, f, g),
        pz.initNonuniformCatmullRom(c.z, h.z, d.z, u.z, m, f, g);
    } else
      "catmullrom" === this.curveType &&
        (px.initCatmullRom(c.x, h.x, d.x, u.x, this.tension),
        py.initCatmullRom(c.y, h.y, d.y, u.y, this.tension),
        pz.initCatmullRom(c.z, h.z, d.z, u.z, this.tension));
    return r.set(px.calc(l), py.calc(l), pz.calc(l)), r;
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, r = e.points.length; t < r; t++) {
      let n = e.points[t];
      this.points.push(n.clone());
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    e.points = [];
    for (let t = 0, r = this.points.length; t < r; t++) {
      let n = this.points[t];
      e.points.push(n.toArray());
    }
    return (
      (e.closed = this.closed),
      (e.curveType = this.curveType),
      (e.tension = this.tension),
      e
    );
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, r = e.points.length; t < r; t++) {
      let n = e.points[t];
      this.points.push(new Vector3().fromArray(n));
    }
    return (
      (this.closed = e.closed),
      (this.curveType = e.curveType),
      (this.tension = e.tension),
      this
    );
  }
}
function CatmullRom(e, t, r, n, a) {
  let s = (n - t) * 0.5,
    o = (a - r) * 0.5,
    l = e * e;
  return (
    (2 * r - 2 * n + s + o) * (e * l) +
    (-3 * r + 3 * n - 2 * s - o) * l +
    s * e +
    r
  );
}
function QuadraticBezierP0(e, t) {
  let r = 1 - e;
  return r * r * t;
}
function QuadraticBezierP1(e, t) {
  return 2 * (1 - e) * e * t;
}
function QuadraticBezierP2(e, t) {
  return e * e * t;
}
function QuadraticBezier(e, t, r, n) {
  return (
    QuadraticBezierP0(e, t) + QuadraticBezierP1(e, r) + QuadraticBezierP2(e, n)
  );
}
function CubicBezierP0(e, t) {
  let r = 1 - e;
  return r * r * r * t;
}
function CubicBezierP1(e, t) {
  let r = 1 - e;
  return 3 * r * r * e * t;
}
function CubicBezierP2(e, t) {
  return 3 * (1 - e) * e * e * t;
}
function CubicBezierP3(e, t) {
  return e * e * e * t;
}
function CubicBezier(e, t, r, n, a) {
  return (
    CubicBezierP0(e, t) +
    CubicBezierP1(e, r) +
    CubicBezierP2(e, n) +
    CubicBezierP3(e, a)
  );
}
CatmullRomCurve3.prototype.isCatmullRomCurve3 = !0;
class CubicBezierCurve extends Curve {
  constructor(
    e = new Vector2(),
    t = new Vector2(),
    r = new Vector2(),
    n = new Vector2()
  ) {
    super(),
      (this.type = "CubicBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = r),
      (this.v3 = n);
  }
  getPoint(e, t = new Vector2()) {
    let r = t,
      n = this.v0,
      a = this.v1,
      s = this.v2,
      o = this.v3;
    return (
      r.set(
        CubicBezier(e, n.x, a.x, s.x, o.x),
        CubicBezier(e, n.y, a.y, s.y, o.y)
      ),
      r
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
CubicBezierCurve.prototype.isCubicBezierCurve = !0;
class CubicBezierCurve3 extends Curve {
  constructor(
    e = new Vector3(),
    t = new Vector3(),
    r = new Vector3(),
    n = new Vector3()
  ) {
    super(),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = r),
      (this.v3 = n);
  }
  getPoint(e, t = new Vector3()) {
    let r = t,
      n = this.v0,
      a = this.v1,
      s = this.v2,
      o = this.v3;
    return (
      r.set(
        CubicBezier(e, n.x, a.x, s.x, o.x),
        CubicBezier(e, n.y, a.y, s.y, o.y),
        CubicBezier(e, n.z, a.z, s.z, o.z)
      ),
      r
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this.v3.copy(e.v3),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      (e.v3 = this.v3.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this.v3.fromArray(e.v3),
      this
    );
  }
}
CubicBezierCurve3.prototype.isCubicBezierCurve3 = !0;
class LineCurve extends Curve {
  constructor(e = new Vector2(), t = new Vector2()) {
    super(), (this.type = "LineCurve"), (this.v1 = e), (this.v2 = t);
  }
  getPoint(e, t = new Vector2()) {
    let r = t;
    return (
      1 === e
        ? r.copy(this.v2)
        : (r.copy(this.v2).sub(this.v1), r.multiplyScalar(e).add(this.v1)),
      r
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t) {
    let r = t || new Vector2();
    return r.copy(this.v2).sub(this.v1).normalize(), r;
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    let e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
LineCurve.prototype.isLineCurve = !0;
class LineCurve3 extends Curve {
  constructor(e = new Vector3(), t = new Vector3()) {
    super(),
      (this.type = "LineCurve3"),
      (this.isLineCurve3 = !0),
      (this.v1 = e),
      (this.v2 = t);
  }
  getPoint(e, t = new Vector3()) {
    let r = t;
    return (
      1 === e
        ? r.copy(this.v2)
        : (r.copy(this.v2).sub(this.v1), r.multiplyScalar(e).add(this.v1)),
      r
    );
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    let e = super.toJSON();
    return (e.v1 = this.v1.toArray()), (e.v2 = this.v2.toArray()), e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
    );
  }
}
class QuadraticBezierCurve extends Curve {
  constructor(e = new Vector2(), t = new Vector2(), r = new Vector2()) {
    super(),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = r);
  }
  getPoint(e, t = new Vector2()) {
    let r = t,
      n = this.v0,
      a = this.v1,
      s = this.v2;
    return (
      r.set(
        QuadraticBezier(e, n.x, a.x, s.x),
        QuadraticBezier(e, n.y, a.y, s.y)
      ),
      r
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
QuadraticBezierCurve.prototype.isQuadraticBezierCurve = !0;
class QuadraticBezierCurve3 extends Curve {
  constructor(e = new Vector3(), t = new Vector3(), r = new Vector3()) {
    super(),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = e),
      (this.v1 = t),
      (this.v2 = r);
  }
  getPoint(e, t = new Vector3()) {
    let r = t,
      n = this.v0,
      a = this.v1,
      s = this.v2;
    return (
      r.set(
        QuadraticBezier(e, n.x, a.x, s.x),
        QuadraticBezier(e, n.y, a.y, s.y),
        QuadraticBezier(e, n.z, a.z, s.z)
      ),
      r
    );
  }
  copy(e) {
    return (
      super.copy(e),
      this.v0.copy(e.v0),
      this.v1.copy(e.v1),
      this.v2.copy(e.v2),
      this
    );
  }
  toJSON() {
    let e = super.toJSON();
    return (
      (e.v0 = this.v0.toArray()),
      (e.v1 = this.v1.toArray()),
      (e.v2 = this.v2.toArray()),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.v0.fromArray(e.v0),
      this.v1.fromArray(e.v1),
      this.v2.fromArray(e.v2),
      this
    );
  }
}
QuadraticBezierCurve3.prototype.isQuadraticBezierCurve3 = !0;
class SplineCurve extends Curve {
  constructor(e = []) {
    super(), (this.type = "SplineCurve"), (this.points = e);
  }
  getPoint(e, t = new Vector2()) {
    let r = t,
      n = this.points,
      a = (n.length - 1) * e,
      s = Math.floor(a),
      o = a - s,
      l = n[0 === s ? s : s - 1],
      c = n[s],
      u = n[s > n.length - 2 ? n.length - 1 : s + 1],
      h = n[s > n.length - 3 ? n.length - 1 : s + 2];
    return (
      r.set(
        CatmullRom(o, l.x, c.x, u.x, h.x),
        CatmullRom(o, l.y, c.y, u.y, h.y)
      ),
      r
    );
  }
  copy(e) {
    super.copy(e), (this.points = []);
    for (let t = 0, r = e.points.length; t < r; t++) {
      let n = e.points[t];
      this.points.push(n.clone());
    }
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    e.points = [];
    for (let t = 0, r = this.points.length; t < r; t++) {
      let n = this.points[t];
      e.points.push(n.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.points = []);
    for (let t = 0, r = e.points.length; t < r; t++) {
      let n = e.points[t];
      this.points.push(new Vector2().fromArray(n));
    }
    return this;
  }
}
SplineCurve.prototype.isSplineCurve = !0;
var Curves = Object.freeze({
  __proto__: null,
  ArcCurve: ArcCurve,
  CatmullRomCurve3: CatmullRomCurve3,
  CubicBezierCurve: CubicBezierCurve,
  CubicBezierCurve3: CubicBezierCurve3,
  EllipseCurve: EllipseCurve,
  LineCurve: LineCurve,
  LineCurve3: LineCurve3,
  QuadraticBezierCurve: QuadraticBezierCurve,
  QuadraticBezierCurve3: QuadraticBezierCurve3,
  SplineCurve: SplineCurve,
});
class CurvePath extends Curve {
  constructor() {
    super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    let e = this.curves[0].getPoint(0),
      t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new LineCurve(t, e));
  }
  getPoint(e, t) {
    let r = e * this.getLength(),
      n = this.getCurveLengths(),
      a = 0;
    for (; a < n.length; ) {
      if (n[a] >= r) {
        let s = n[a] - r,
          o = this.curves[a],
          l = o.getLength(),
          c = 0 === l ? 0 : 1 - s / l;
        return o.getPointAt(c, t);
      }
      a++;
    }
    return null;
  }
  getLength() {
    let e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    let e = [],
      t = 0;
    for (let r = 0, n = this.curves.length; r < n; r++)
      e.push((t += this.curves[r].getLength()));
    return (this.cacheLengths = e), e;
  }
  getSpacedPoints(e = 40) {
    let t = [];
    for (let r = 0; r <= e; r++) t.push(this.getPoint(r / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    let t = [],
      r;
    for (let n = 0, a = this.curves; n < a.length; n++) {
      let s = a[n],
        o = s.isEllipseCurve
          ? 2 * e
          : s.isLineCurve || s.isLineCurve3
          ? 1
          : s.isSplineCurve
          ? e * s.points.length
          : e,
        l = s.getPoints(o);
      for (let c = 0; c < l.length; c++) {
        let u = l[c];
        (r && r.equals(u)) || (t.push(u), (r = u));
      }
    }
    return (
      this.autoClose &&
        t.length > 1 &&
        !t[t.length - 1].equals(t[0]) &&
        t.push(t[0]),
      t
    );
  }
  copy(e) {
    super.copy(e), (this.curves = []);
    for (let t = 0, r = e.curves.length; t < r; t++) {
      let n = e.curves[t];
      this.curves.push(n.clone());
    }
    return (this.autoClose = e.autoClose), this;
  }
  toJSON() {
    let e = super.toJSON();
    (e.autoClose = this.autoClose), (e.curves = []);
    for (let t = 0, r = this.curves.length; t < r; t++) {
      let n = this.curves[t];
      e.curves.push(n.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.autoClose = e.autoClose), (this.curves = []);
    for (let t = 0, r = e.curves.length; t < r; t++) {
      let n = e.curves[t];
      this.curves.push(new Curves[n.type]().fromJSON(n));
    }
    return this;
  }
}
class Path extends CurvePath {
  constructor(e) {
    super(),
      (this.type = "Path"),
      (this.currentPoint = new Vector2()),
      e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, r = e.length; t < r; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    let r = new LineCurve(this.currentPoint.clone(), new Vector2(e, t));
    return this.curves.push(r), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, r, n) {
    let a = new QuadraticBezierCurve(
      this.currentPoint.clone(),
      new Vector2(e, t),
      new Vector2(r, n)
    );
    return this.curves.push(a), this.currentPoint.set(r, n), this;
  }
  bezierCurveTo(e, t, r, n, a, s) {
    let o = new CubicBezierCurve(
      this.currentPoint.clone(),
      new Vector2(e, t),
      new Vector2(r, n),
      new Vector2(a, s)
    );
    return this.curves.push(o), this.currentPoint.set(a, s), this;
  }
  splineThru(e) {
    let t = [this.currentPoint.clone()].concat(e),
      r = new SplineCurve(t);
    return this.curves.push(r), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, r, n, a, s) {
    let o = this.currentPoint.x,
      l = this.currentPoint.y;
    return this.absarc(e + o, t + l, r, n, a, s), this;
  }
  absarc(e, t, r, n, a, s) {
    return this.absellipse(e, t, r, r, n, a, s), this;
  }
  ellipse(e, t, r, n, a, s, o, l) {
    let c = this.currentPoint.x,
      u = this.currentPoint.y;
    return this.absellipse(e + c, t + u, r, n, a, s, o, l), this;
  }
  absellipse(e, t, r, n, a, s, o, l) {
    let c = new EllipseCurve(e, t, r, n, a, s, o, l);
    if (this.curves.length > 0) {
      let u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    let h = c.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    let e = super.toJSON();
    return (e.currentPoint = this.currentPoint.toArray()), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class LatheGeometry extends BufferGeometry {
  constructor(
    e = [new Vector2(0, 0.5), new Vector2(0.5, 0), new Vector2(0, -0.5)],
    t = 12,
    r = 0,
    n = 2 * Math.PI
  ) {
    super(),
      (this.type = "LatheGeometry"),
      (this.parameters = { points: e, segments: t, phiStart: r, phiLength: n }),
      (t = Math.floor(t)),
      (n = clamp(n, 0, 2 * Math.PI));
    let a = [],
      s = [],
      o = [],
      l = [],
      c = [],
      u = 1 / t,
      h = new Vector3(),
      d = new Vector2(),
      p = new Vector3(),
      m = new Vector3(),
      f = new Vector3(),
      g = 0,
      $ = 0;
    for (let v = 0; v <= e.length - 1; v++)
      switch (v) {
        case 0:
          (g = e[v + 1].x - e[v].x),
            ($ = e[v + 1].y - e[v].y),
            (p.x = 1 * $),
            (p.y = -g),
            (p.z = 0 * $),
            f.copy(p),
            p.normalize(),
            l.push(p.x, p.y, p.z);
          break;
        case e.length - 1:
          l.push(f.x, f.y, f.z);
          break;
        default:
          (g = e[v + 1].x - e[v].x),
            ($ = e[v + 1].y - e[v].y),
            (p.x = 1 * $),
            (p.y = -g),
            (p.z = 0 * $),
            m.copy(p),
            (p.x += f.x),
            (p.y += f.y),
            (p.z += f.z),
            p.normalize(),
            l.push(p.x, p.y, p.z),
            f.copy(m);
      }
    for (let x = 0; x <= t; x++) {
      let y = r + x * u * n,
        b = Math.sin(y),
        _ = Math.cos(y);
      for (let S = 0; S <= e.length - 1; S++) {
        (h.x = e[S].x * b),
          (h.y = e[S].y),
          (h.z = e[S].x * _),
          s.push(h.x, h.y, h.z),
          (d.x = x / t),
          (d.y = S / (e.length - 1)),
          o.push(d.x, d.y);
        let M = l[3 * S + 0] * b,
          w = l[3 * S + 1],
          T = l[3 * S + 0] * _;
        c.push(M, w, T);
      }
    }
    for (let A = 0; A < t; A++)
      for (let C = 0; C < e.length - 1; C++) {
        let L = C + A * e.length,
          E = L,
          P = L + e.length,
          R = L + e.length + 1,
          D = L + 1;
        a.push(E, P, D), a.push(R, D, P);
      }
    this.setIndex(a),
      this.setAttribute("position", new Float32BufferAttribute(s, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(o, 2)),
      this.setAttribute("normal", new Float32BufferAttribute(c, 3));
  }
  static fromJSON(e) {
    return new LatheGeometry(e.points, e.segments, e.phiStart, e.phiLength);
  }
}
class CapsuleGeometry extends LatheGeometry {
  constructor(e = 1, t = 1, r = 4, n = 8) {
    let a = new Path();
    a.absarc(0, -t / 2, e, 1.5 * Math.PI, 0),
      a.absarc(0, t / 2, e, 0, 0.5 * Math.PI),
      super(a.getPoints(r), n),
      (this.type = "CapsuleGeometry"),
      (this.parameters = {
        radius: e,
        height: t,
        capSegments: r,
        radialSegments: n,
      });
  }
  static fromJSON(e) {
    return new CapsuleGeometry(
      e.radius,
      e.length,
      e.capSegments,
      e.radialSegments
    );
  }
}
class CircleGeometry extends BufferGeometry {
  constructor(e = 1, t = 8, r = 0, n = 2 * Math.PI) {
    super(),
      (this.type = "CircleGeometry"),
      (this.parameters = {
        radius: e,
        segments: t,
        thetaStart: r,
        thetaLength: n,
      }),
      (t = Math.max(3, t));
    let a = [],
      s = [],
      o = [],
      l = [],
      c = new Vector3(),
      u = new Vector2();
    s.push(0, 0, 0), o.push(0, 0, 1), l.push(0.5, 0.5);
    for (let h = 0, d = 3; h <= t; h++, d += 3) {
      let p = r + (h / t) * n;
      (c.x = e * Math.cos(p)),
        (c.y = e * Math.sin(p)),
        s.push(c.x, c.y, c.z),
        o.push(0, 0, 1),
        (u.x = (s[d] / e + 1) / 2),
        (u.y = (s[d + 1] / e + 1) / 2),
        l.push(u.x, u.y);
    }
    for (let m = 1; m <= t; m++) a.push(m, m + 1, 0);
    this.setIndex(a),
      this.setAttribute("position", new Float32BufferAttribute(s, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(o, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(l, 2));
  }
  static fromJSON(e) {
    return new CircleGeometry(
      e.radius,
      e.segments,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class CylinderGeometry extends BufferGeometry {
  constructor(
    e = 1,
    t = 1,
    r = 1,
    n = 8,
    a = 1,
    s = !1,
    o = 0,
    l = 2 * Math.PI
  ) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: r,
        radialSegments: n,
        heightSegments: a,
        openEnded: s,
        thetaStart: o,
        thetaLength: l,
      });
    let c = this;
    (n = Math.floor(n)), (a = Math.floor(a));
    let u = [],
      h = [],
      d = [],
      p = [],
      m = 0,
      f = [],
      g = r / 2,
      $ = 0;
    function v() {
      let s = new Vector3(),
        v = new Vector3(),
        x = 0,
        y = (t - e) / r;
      for (let b = 0; b <= a; b++) {
        let _ = [],
          S = b / a,
          M = S * (t - e) + e;
        for (let w = 0; w <= n; w++) {
          let T = w / n,
            A = T * l + o,
            C = Math.sin(A),
            L = Math.cos(A);
          (v.x = M * C),
            (v.y = -S * r + g),
            (v.z = M * L),
            h.push(v.x, v.y, v.z),
            s.set(C, y, L).normalize(),
            d.push(s.x, s.y, s.z),
            p.push(T, 1 - S),
            _.push(m++);
        }
        f.push(_);
      }
      for (let E = 0; E < n; E++)
        for (let P = 0; P < a; P++) {
          let R = f[P][E],
            D = f[P + 1][E],
            B = f[P + 1][E + 1],
            I = f[P][E + 1];
          u.push(R, D, I), u.push(D, B, I), (x += 6);
        }
      c.addGroup($, x, 0), ($ += x);
    }
    function x(r) {
      let a = m,
        s = new Vector2(),
        f = new Vector3(),
        v = 0,
        x = !0 === r ? e : t,
        y = !0 === r ? 1 : -1;
      for (let b = 1; b <= n; b++)
        h.push(0, g * y, 0), d.push(0, y, 0), p.push(0.5, 0.5), m++;
      let _ = m;
      for (let S = 0; S <= n; S++) {
        let M = S / n,
          w = M * l + o,
          T = Math.cos(w),
          A = Math.sin(w);
        (f.x = x * A),
          (f.y = g * y),
          (f.z = x * T),
          h.push(f.x, f.y, f.z),
          d.push(0, y, 0),
          (s.x = 0.5 * T + 0.5),
          (s.y = 0.5 * A * y + 0.5),
          p.push(s.x, s.y),
          m++;
      }
      for (let C = 0; C < n; C++) {
        let L = a + C,
          E = _ + C;
        !0 === r ? u.push(E, E + 1, L) : u.push(E + 1, E, L), (v += 3);
      }
      c.addGroup($, v, !0 === r ? 1 : 2), ($ += v);
    }
    v(),
      !1 === s && (e > 0 && x(!0), t > 0 && x(!1)),
      this.setIndex(u),
      this.setAttribute("position", new Float32BufferAttribute(h, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(d, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(p, 2));
  }
  static fromJSON(e) {
    return new CylinderGeometry(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class ConeGeometry extends CylinderGeometry {
  constructor(e = 1, t = 1, r = 8, n = 1, a = !1, s = 0, o = 2 * Math.PI) {
    super(0, e, t, r, n, a, s, o),
      (this.type = "ConeGeometry"),
      (this.parameters = {
        radius: e,
        height: t,
        radialSegments: r,
        heightSegments: n,
        openEnded: a,
        thetaStart: s,
        thetaLength: o,
      });
  }
  static fromJSON(e) {
    return new ConeGeometry(
      e.radius,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class PolyhedronGeometry extends BufferGeometry {
  constructor(e = [], t = [], r = 1, n = 0) {
    super(),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: e, indices: t, radius: r, detail: n });
    let a = [],
      s = [];
    function o(e) {
      let r = new Vector3(),
        n = new Vector3(),
        a = new Vector3();
      for (let s = 0; s < t.length; s += 3)
        p(t[s + 0], r), p(t[s + 1], n), p(t[s + 2], a), l(r, n, a, e);
    }
    function l(e, t, r, n) {
      let a = n + 1,
        s = [];
      for (let o = 0; o <= a; o++) {
        s[o] = [];
        let l = e.clone().lerp(r, o / a),
          c = t.clone().lerp(r, o / a),
          u = a - o;
        for (let h = 0; h <= u; h++)
          0 === h && o === a
            ? (s[o][h] = l)
            : (s[o][h] = l.clone().lerp(c, h / u));
      }
      for (let p = 0; p < a; p++)
        for (let m = 0; m < 2 * (a - p) - 1; m++) {
          let f = Math.floor(m / 2);
          m % 2 == 0
            ? (d(s[p][f + 1]), d(s[p + 1][f]), d(s[p][f]))
            : (d(s[p][f + 1]), d(s[p + 1][f + 1]), d(s[p + 1][f]));
        }
    }
    function c(e) {
      let t = new Vector3();
      for (let r = 0; r < a.length; r += 3)
        (t.x = a[r + 0]),
          (t.y = a[r + 1]),
          (t.z = a[r + 2]),
          t.normalize().multiplyScalar(e),
          (a[r + 0] = t.x),
          (a[r + 1] = t.y),
          (a[r + 2] = t.z);
    }
    function u() {
      let e = new Vector3();
      for (let t = 0; t < a.length; t += 3) {
        (e.x = a[t + 0]), (e.y = a[t + 1]), (e.z = a[t + 2]);
        let r = g(e) / 2 / Math.PI + 0.5,
          n = $(e) / Math.PI + 0.5;
        s.push(r, 1 - n);
      }
      m(), h();
    }
    function h() {
      for (let e = 0; e < s.length; e += 6) {
        let t = s[e + 0],
          r = s[e + 2],
          n = s[e + 4],
          a = Math.max(t, r, n),
          o = Math.min(t, r, n);
        a > 0.9 &&
          o < 0.1 &&
          (t < 0.2 && (s[e + 0] += 1),
          r < 0.2 && (s[e + 2] += 1),
          n < 0.2 && (s[e + 4] += 1));
      }
    }
    function d(e) {
      a.push(e.x, e.y, e.z);
    }
    function p(t, r) {
      let n = 3 * t;
      (r.x = e[n + 0]), (r.y = e[n + 1]), (r.z = e[n + 2]);
    }
    function m() {
      let e = new Vector3(),
        t = new Vector3(),
        r = new Vector3(),
        n = new Vector3(),
        o = new Vector2(),
        l = new Vector2(),
        c = new Vector2();
      for (let u = 0, h = 0; u < a.length; u += 9, h += 6) {
        e.set(a[u + 0], a[u + 1], a[u + 2]),
          t.set(a[u + 3], a[u + 4], a[u + 5]),
          r.set(a[u + 6], a[u + 7], a[u + 8]),
          o.set(s[h + 0], s[h + 1]),
          l.set(s[h + 2], s[h + 3]),
          c.set(s[h + 4], s[h + 5]),
          n.copy(e).add(t).add(r).divideScalar(3);
        let d = g(n);
        f(o, h + 0, e, d), f(l, h + 2, t, d), f(c, h + 4, r, d);
      }
    }
    function f(e, t, r, n) {
      n < 0 && 1 === e.x && (s[t] = e.x - 1),
        0 === r.x && 0 === r.z && (s[t] = n / 2 / Math.PI + 0.5);
    }
    function g(e) {
      return Math.atan2(e.z, -e.x);
    }
    function $(e) {
      return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z));
    }
    o(n),
      c(r),
      u(),
      this.setAttribute("position", new Float32BufferAttribute(a, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(a.slice(), 3)),
      this.setAttribute("uv", new Float32BufferAttribute(s, 2)),
      0 === n ? this.computeVertexNormals() : this.normalizeNormals();
  }
  static fromJSON(e) {
    return new PolyhedronGeometry(e.vertices, e.indices, e.radius, e.details);
  }
}
class DodecahedronGeometry extends PolyhedronGeometry {
  constructor(e = 1, t = 0) {
    let r = (1 + Math.sqrt(5)) / 2,
      n = 1 / r,
      a = [
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        0,
        -n,
        -r,
        0,
        -n,
        r,
        0,
        n,
        -r,
        0,
        n,
        r,
        -n,
        -r,
        0,
        -n,
        r,
        0,
        n,
        -r,
        0,
        n,
        r,
        0,
        -r,
        0,
        -n,
        r,
        0,
        -n,
        -r,
        0,
        n,
        r,
        0,
        n,
      ],
      s = [
        3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8,
        17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18,
        0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13,
        18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5,
        11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14,
        5, 1, 5, 9,
      ];
    super(a, s, e, t),
      (this.type = "DodecahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new DodecahedronGeometry(e.radius, e.detail);
  }
}
let _v0 = new Vector3(),
  _v1$1 = new Vector3(),
  _normal = new Vector3(),
  _triangle = new Triangle();
class EdgesGeometry extends BufferGeometry {
  constructor(e = null, t = 1) {
    if (
      (super(),
      (this.type = "EdgesGeometry"),
      (this.parameters = { geometry: e, thresholdAngle: t }),
      null !== e)
    ) {
      let r = Math.cos(DEG2RAD * t),
        n = e.getIndex(),
        a = e.getAttribute("position"),
        s = n ? n.count : a.count,
        o = [0, 0, 0],
        l = ["a", "b", "c"],
        c = [, , ,],
        u = {},
        h = [];
      for (let d = 0; d < s; d += 3) {
        n
          ? ((o[0] = n.getX(d)), (o[1] = n.getX(d + 1)), (o[2] = n.getX(d + 2)))
          : ((o[0] = d), (o[1] = d + 1), (o[2] = d + 2));
        let { a: p, b: m, c: f } = _triangle;
        if (
          (p.fromBufferAttribute(a, o[0]),
          m.fromBufferAttribute(a, o[1]),
          f.fromBufferAttribute(a, o[2]),
          _triangle.getNormal(_normal),
          (c[0] = `${Math.round(1e4 * p.x)},${Math.round(
            1e4 * p.y
          )},${Math.round(1e4 * p.z)}`),
          (c[1] = `${Math.round(1e4 * m.x)},${Math.round(
            1e4 * m.y
          )},${Math.round(1e4 * m.z)}`),
          (c[2] = `${Math.round(1e4 * f.x)},${Math.round(
            1e4 * f.y
          )},${Math.round(1e4 * f.z)}`),
          c[0] !== c[1] && c[1] !== c[2] && c[2] !== c[0])
        )
          for (let g = 0; g < 3; g++) {
            let $ = (g + 1) % 3,
              v = c[g],
              x = c[$],
              y = _triangle[l[g]],
              b = _triangle[l[$]],
              _ = `${v}_${x}`,
              S = `${x}_${v}`;
            S in u && u[S]
              ? (_normal.dot(u[S].normal) <= r &&
                  (h.push(y.x, y.y, y.z), h.push(b.x, b.y, b.z)),
                (u[S] = null))
              : _ in u ||
                (u[_] = {
                  index0: o[g],
                  index1: o[$],
                  normal: _normal.clone(),
                });
          }
      }
      for (let M in u)
        if (u[M]) {
          let { index0: w, index1: T } = u[M];
          _v0.fromBufferAttribute(a, w),
            _v1$1.fromBufferAttribute(a, T),
            h.push(_v0.x, _v0.y, _v0.z),
            h.push(_v1$1.x, _v1$1.y, _v1$1.z);
        }
      this.setAttribute("position", new Float32BufferAttribute(h, 3));
    }
  }
}
class Shape extends Path {
  constructor(e) {
    super(e),
      (this.uuid = generateUUID()),
      (this.type = "Shape"),
      (this.holes = []);
  }
  getPointsHoles(e) {
    let t = [];
    for (let r = 0, n = this.holes.length; r < n; r++)
      t[r] = this.holes[r].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
  }
  copy(e) {
    super.copy(e), (this.holes = []);
    for (let t = 0, r = e.holes.length; t < r; t++) {
      let n = e.holes[t];
      this.holes.push(n.clone());
    }
    return this;
  }
  toJSON() {
    let e = super.toJSON();
    (e.uuid = this.uuid), (e.holes = []);
    for (let t = 0, r = this.holes.length; t < r; t++) {
      let n = this.holes[t];
      e.holes.push(n.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), (this.uuid = e.uuid), (this.holes = []);
    for (let t = 0, r = e.holes.length; t < r; t++) {
      let n = e.holes[t];
      this.holes.push(new Path().fromJSON(n));
    }
    return this;
  }
}
let Earcut = {
  triangulate: function (e, t, r = 2) {
    let n = t && t.length,
      a = n ? t[0] * r : e.length,
      s = linkedList(e, 0, a, r, !0),
      o = [];
    if (!s || s.next === s.prev) return o;
    let l, c, u, h, d, p, m;
    if ((n && (s = eliminateHoles(e, t, s, r)), e.length > 80 * r)) {
      (l = u = e[0]), (c = h = e[1]);
      for (let f = r; f < a; f += r)
        (d = e[f]),
          (p = e[f + 1]),
          d < l && (l = d),
          p < c && (c = p),
          d > u && (u = d),
          p > h && (h = p);
      m = 0 !== (m = Math.max(u - l, h - c)) ? 1 / m : 0;
    }
    return earcutLinked(s, o, r, l, c, m), o;
  },
};
function linkedList(e, t, r, n, a) {
  let s, o;
  if (a === signedArea(e, t, r, n) > 0)
    for (s = t; s < r; s += n) o = insertNode(s, e[s], e[s + 1], o);
  else for (s = r - n; s >= t; s -= n) o = insertNode(s, e[s], e[s + 1], o);
  return o && equals(o, o.next) && (removeNode(o), (o = o.next)), o;
}
function filterPoints(e, t) {
  if (!e) return e;
  t || (t = e);
  let r = e,
    n;
  do
    if (
      ((n = !1),
      !r.steiner && (equals(r, r.next) || 0 === area(r.prev, r, r.next)))
    ) {
      if ((removeNode(r), (r = t = r.prev) === r.next)) break;
      n = !0;
    } else r = r.next;
  while (n || r !== t);
  return t;
}
function earcutLinked(e, t, r, n, a, s, o) {
  if (!e) return;
  !o && s && indexCurve(e, n, a, s);
  let l = e,
    c,
    u;
  for (; e.prev !== e.next; ) {
    if (((c = e.prev), (u = e.next), s ? isEarHashed(e, n, a, s) : isEar(e))) {
      t.push(c.i / r),
        t.push(e.i / r),
        t.push(u.i / r),
        removeNode(e),
        (e = u.next),
        (l = u.next);
      continue;
    }
    if ((e = u) === l) {
      o
        ? 1 === o
          ? earcutLinked(
              (e = cureLocalIntersections(filterPoints(e), t, r)),
              t,
              r,
              n,
              a,
              s,
              2
            )
          : 2 === o && splitEarcut(e, t, r, n, a, s)
        : earcutLinked(filterPoints(e), t, r, n, a, s, 1);
      break;
    }
  }
}
function isEar(e) {
  let t = e.prev,
    r = e,
    n = e.next;
  if (area(t, r, n) >= 0) return !1;
  let a = e.next.next;
  for (; a !== e.prev; ) {
    if (
      pointInTriangle(t.x, t.y, r.x, r.y, n.x, n.y, a.x, a.y) &&
      area(a.prev, a, a.next) >= 0
    )
      return !1;
    a = a.next;
  }
  return !0;
}
function isEarHashed(e, t, r, n) {
  let a = e.prev,
    s = e,
    o = e.next;
  if (area(a, s, o) >= 0) return !1;
  let l = a.x < s.x ? (a.x < o.x ? a.x : o.x) : s.x < o.x ? s.x : o.x,
    c = a.y < s.y ? (a.y < o.y ? a.y : o.y) : s.y < o.y ? s.y : o.y,
    u = a.x > s.x ? (a.x > o.x ? a.x : o.x) : s.x > o.x ? s.x : o.x,
    h = a.y > s.y ? (a.y > o.y ? a.y : o.y) : s.y > o.y ? s.y : o.y,
    d = zOrder(l, c, t, r, n),
    p = zOrder(u, h, t, r, n),
    m = e.prevZ,
    f = e.nextZ;
  for (; m && m.z >= d && f && f.z <= p; ) {
    if (
      (m !== e.prev &&
        m !== e.next &&
        pointInTriangle(a.x, a.y, s.x, s.y, o.x, o.y, m.x, m.y) &&
        area(m.prev, m, m.next) >= 0) ||
      ((m = m.prevZ),
      f !== e.prev &&
        f !== e.next &&
        pointInTriangle(a.x, a.y, s.x, s.y, o.x, o.y, f.x, f.y) &&
        area(f.prev, f, f.next) >= 0)
    )
      return !1;
    f = f.nextZ;
  }
  for (; m && m.z >= d; ) {
    if (
      m !== e.prev &&
      m !== e.next &&
      pointInTriangle(a.x, a.y, s.x, s.y, o.x, o.y, m.x, m.y) &&
      area(m.prev, m, m.next) >= 0
    )
      return !1;
    m = m.prevZ;
  }
  for (; f && f.z <= p; ) {
    if (
      f !== e.prev &&
      f !== e.next &&
      pointInTriangle(a.x, a.y, s.x, s.y, o.x, o.y, f.x, f.y) &&
      area(f.prev, f, f.next) >= 0
    )
      return !1;
    f = f.nextZ;
  }
  return !0;
}
function cureLocalIntersections(e, t, r) {
  let n = e;
  do {
    let a = n.prev,
      s = n.next.next;
    !equals(a, s) &&
      intersects(a, n, n.next, s) &&
      locallyInside(a, s) &&
      locallyInside(s, a) &&
      (t.push(a.i / r),
      t.push(n.i / r),
      t.push(s.i / r),
      removeNode(n),
      removeNode(n.next),
      (n = e = s)),
      (n = n.next);
  } while (n !== e);
  return filterPoints(n);
}
function splitEarcut(e, t, r, n, a, s) {
  let o = e;
  do {
    let l = o.next.next;
    for (; l !== o.prev; ) {
      if (o.i !== l.i && isValidDiagonal(o, l)) {
        let c = splitPolygon(o, l);
        (o = filterPoints(o, o.next)),
          (c = filterPoints(c, c.next)),
          earcutLinked(o, t, r, n, a, s),
          earcutLinked(c, t, r, n, a, s);
        return;
      }
      l = l.next;
    }
    o = o.next;
  } while (o !== e);
}
function eliminateHoles(e, t, r, n) {
  let a = [],
    s,
    o,
    l,
    c,
    u;
  for (s = 0, o = t.length; s < o; s++)
    (l = t[s] * n),
      (c = s < o - 1 ? t[s + 1] * n : e.length),
      (u = linkedList(e, l, c, n, !1)) === u.next && (u.steiner = !0),
      a.push(getLeftmost(u));
  for (a.sort(compareX), s = 0; s < a.length; s++)
    eliminateHole(a[s], r), (r = filterPoints(r, r.next));
  return r;
}
function compareX(e, t) {
  return e.x - t.x;
}
function eliminateHole(e, t) {
  if ((t = findHoleBridge(e, t))) {
    let r = splitPolygon(t, e);
    filterPoints(t, t.next), filterPoints(r, r.next);
  }
}
function findHoleBridge(e, t) {
  let r = t,
    n = e.x,
    a = e.y,
    s = -1 / 0,
    o;
  do {
    if (a <= r.y && a >= r.next.y && r.next.y !== r.y) {
      let l = r.x + ((a - r.y) * (r.next.x - r.x)) / (r.next.y - r.y);
      if (l <= n && l > s) {
        if (((s = l), l === n)) {
          if (a === r.y) return r;
          if (a === r.next.y) return r.next;
        }
        o = r.x < r.next.x ? r : r.next;
      }
    }
    r = r.next;
  } while (r !== t);
  if (!o) return null;
  if (n === s) return o;
  let c = o,
    u = o.x,
    h = o.y,
    d = 1 / 0,
    p;
  r = o;
  do
    n >= r.x &&
      r.x >= u &&
      n !== r.x &&
      pointInTriangle(a < h ? n : s, a, u, h, a < h ? s : n, a, r.x, r.y) &&
      ((p = Math.abs(a - r.y) / (n - r.x)),
      locallyInside(r, e) &&
        (p < d ||
          (p === d &&
            (r.x > o.x || (r.x === o.x && sectorContainsSector(o, r))))) &&
        ((o = r), (d = p))),
      (r = r.next);
  while (r !== c);
  return o;
}
function sectorContainsSector(e, t) {
  return 0 > area(e.prev, e, t.prev) && 0 > area(t.next, e, e.next);
}
function indexCurve(e, t, r, n) {
  let a = e;
  do
    null === a.z && (a.z = zOrder(a.x, a.y, t, r, n)),
      (a.prevZ = a.prev),
      (a.nextZ = a.next),
      (a = a.next);
  while (a !== e);
  (a.prevZ.nextZ = null), (a.prevZ = null), sortLinked(a);
}
function sortLinked(e) {
  let t,
    r,
    n,
    a,
    s,
    o,
    l,
    c,
    u = 1;
  do {
    for (r = e, e = null, s = null, o = 0; r; ) {
      for (o++, n = r, l = 0, t = 0; t < u && (l++, (n = n.nextZ)); t++);
      for (c = u; l > 0 || (c > 0 && n); )
        0 !== l && (0 === c || !n || r.z <= n.z)
          ? ((a = r), (r = r.nextZ), l--)
          : ((a = n), (n = n.nextZ), c--),
          s ? (s.nextZ = a) : (e = a),
          (a.prevZ = s),
          (s = a);
      r = n;
    }
    (s.nextZ = null), (u *= 2);
  } while (o > 1);
  return e;
}
function zOrder(e, t, r, n, a) {
  return (
    (e =
      ((e =
        ((e =
          ((e = ((e = 32767 * (e - r) * a) | (e << 8)) & 16711935) | (e << 4)) &
          252645135) |
          (e << 2)) &
        858993459) |
        (e << 1)) &
      1431655765) |
    ((t =
      ((t =
        ((t =
          ((t = ((t = 32767 * (t - n) * a) | (t << 8)) & 16711935) | (t << 4)) &
          252645135) |
          (t << 2)) &
        858993459) |
        (t << 1)) &
      1431655765) <<
      1)
  );
}
function getLeftmost(e) {
  let t = e,
    r = e;
  do (t.x < r.x || (t.x === r.x && t.y < r.y)) && (r = t), (t = t.next);
  while (t !== e);
  return r;
}
function pointInTriangle(e, t, r, n, a, s, o, l) {
  return (
    (a - o) * (t - l) - (e - o) * (s - l) >= 0 &&
    (e - o) * (n - l) - (r - o) * (t - l) >= 0 &&
    (r - o) * (s - l) - (a - o) * (n - l) >= 0
  );
}
function isValidDiagonal(e, t) {
  return (
    e.next.i !== t.i &&
    e.prev.i !== t.i &&
    !intersectsPolygon(e, t) &&
    ((locallyInside(e, t) &&
      locallyInside(t, e) &&
      middleInside(e, t) &&
      (area(e.prev, e, t.prev) || area(e, t.prev, t))) ||
      (equals(e, t) &&
        area(e.prev, e, e.next) > 0 &&
        area(t.prev, t, t.next) > 0))
  );
}
function area(e, t, r) {
  return (t.y - e.y) * (r.x - t.x) - (t.x - e.x) * (r.y - t.y);
}
function equals(e, t) {
  return e.x === t.x && e.y === t.y;
}
function intersects(e, t, r, n) {
  let a = sign(area(e, t, r)),
    s = sign(area(e, t, n)),
    o = sign(area(r, n, e)),
    l = sign(area(r, n, t));
  return !!(
    (a !== s && o !== l) ||
    (0 === a && onSegment(e, r, t)) ||
    (0 === s && onSegment(e, n, t)) ||
    (0 === o && onSegment(r, e, n)) ||
    (0 === l && onSegment(r, t, n))
  );
}
function onSegment(e, t, r) {
  return (
    t.x <= Math.max(e.x, r.x) &&
    t.x >= Math.min(e.x, r.x) &&
    t.y <= Math.max(e.y, r.y) &&
    t.y >= Math.min(e.y, r.y)
  );
}
function sign(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function intersectsPolygon(e, t) {
  let r = e;
  do {
    if (
      r.i !== e.i &&
      r.next.i !== e.i &&
      r.i !== t.i &&
      r.next.i !== t.i &&
      intersects(r, r.next, e, t)
    )
      return !0;
    r = r.next;
  } while (r !== e);
  return !1;
}
function locallyInside(e, t) {
  return 0 > area(e.prev, e, e.next)
    ? area(e, t, e.next) >= 0 && area(e, e.prev, t) >= 0
    : 0 > area(e, t, e.prev) || 0 > area(e, e.next, t);
}
function middleInside(e, t) {
  let r = e,
    n = !1,
    a = (e.x + t.x) / 2,
    s = (e.y + t.y) / 2;
  do
    r.y > s != r.next.y > s &&
      r.next.y !== r.y &&
      a < ((r.next.x - r.x) * (s - r.y)) / (r.next.y - r.y) + r.x &&
      (n = !n),
      (r = r.next);
  while (r !== e);
  return n;
}
function splitPolygon(e, t) {
  let r = new Node(e.i, e.x, e.y),
    n = new Node(t.i, t.x, t.y),
    a = e.next,
    s = t.prev;
  return (
    (e.next = t),
    (t.prev = e),
    (r.next = a),
    (a.prev = r),
    (n.next = r),
    (r.prev = n),
    (s.next = n),
    (n.prev = s),
    n
  );
}
function insertNode(e, t, r, n) {
  let a = new Node(e, t, r);
  return (
    n
      ? ((a.next = n.next), (a.prev = n), (n.next.prev = a), (n.next = a))
      : ((a.prev = a), (a.next = a)),
    a
  );
}
function removeNode(e) {
  (e.next.prev = e.prev),
    (e.prev.next = e.next),
    e.prevZ && (e.prevZ.nextZ = e.nextZ),
    e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function Node(e, t, r) {
  (this.i = e),
    (this.x = t),
    (this.y = r),
    (this.prev = null),
    (this.next = null),
    (this.z = null),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}
function signedArea(e, t, r, n) {
  let a = 0;
  for (let s = t, o = r - n; s < r; s += n)
    (a += (e[o] - e[s]) * (e[s + 1] + e[o + 1])), (o = s);
  return a;
}
class ShapeUtils {
  static area(e) {
    let t = e.length,
      r = 0;
    for (let n = t - 1, a = 0; a < t; n = a++)
      r += e[n].x * e[a].y - e[a].x * e[n].y;
    return 0.5 * r;
  }
  static isClockWise(e) {
    return 0 > ShapeUtils.area(e);
  }
  static triangulateShape(e, t) {
    let r = [],
      n = [],
      a = [];
    removeDupEndPts(e), addContour(r, e);
    let s = e.length;
    t.forEach(removeDupEndPts);
    for (let o = 0; o < t.length; o++)
      n.push(s), (s += t[o].length), addContour(r, t[o]);
    let l = Earcut.triangulate(r, n);
    for (let c = 0; c < l.length; c += 3) a.push(l.slice(c, c + 3));
    return a;
  }
}
function removeDupEndPts(e) {
  let t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function addContour(e, t) {
  for (let r = 0; r < t.length; r++) e.push(t[r].x), e.push(t[r].y);
}
class ExtrudeGeometry extends BufferGeometry {
  constructor(
    e = new Shape([
      new Vector2(0.5, 0.5),
      new Vector2(-0.5, 0.5),
      new Vector2(-0.5, -0.5),
      new Vector2(0.5, -0.5),
    ]),
    t = {}
  ) {
    super(),
      (this.type = "ExtrudeGeometry"),
      (this.parameters = { shapes: e, options: t }),
      (e = Array.isArray(e) ? e : [e]);
    let r = this,
      n = [],
      a = [];
    for (let s = 0, o = e.length; s < o; s++) {
      let l = e[s];
      c(l);
    }
    function c(e) {
      let s = [],
        o = void 0 !== t.curveSegments ? t.curveSegments : 12,
        l = void 0 !== t.steps ? t.steps : 1,
        c = void 0 !== t.depth ? t.depth : 1,
        u = void 0 === t.bevelEnabled || t.bevelEnabled,
        h = void 0 !== t.bevelThickness ? t.bevelThickness : 0.2,
        d = void 0 !== t.bevelSize ? t.bevelSize : h - 0.1,
        p = void 0 !== t.bevelOffset ? t.bevelOffset : 0,
        m = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
        f = t.extrudePath,
        g = void 0 !== t.UVGenerator ? t.UVGenerator : WorldUVGenerator;
      void 0 !== t.amount &&
        (console.warn(
          "THREE.ExtrudeBufferGeometry: amount has been renamed to depth."
        ),
        (c = t.amount));
      let $,
        v = !1,
        x,
        y,
        b,
        _;
      f &&
        (($ = f.getSpacedPoints(l)),
        (v = !0),
        (u = !1),
        (x = f.computeFrenetFrames(l, !1)),
        (y = new Vector3()),
        (b = new Vector3()),
        (_ = new Vector3())),
        u || ((m = 0), (h = 0), (d = 0), (p = 0));
      let S = e.extractPoints(o),
        M = S.shape,
        w = S.holes,
        T = !ShapeUtils.isClockWise(M);
      if (T) {
        M = M.reverse();
        for (let A = 0, C = w.length; A < C; A++) {
          let L = w[A];
          ShapeUtils.isClockWise(L) && (w[A] = L.reverse());
        }
      }
      let E = ShapeUtils.triangulateShape(M, w),
        P = M;
      for (let R = 0, D = w.length; R < D; R++) {
        let B = w[R];
        M = M.concat(B);
      }
      function I(e, t, r) {
        return (
          t || console.error("THREE.ExtrudeGeometry: vec does not exist"),
          t.clone().multiplyScalar(r).add(e)
        );
      }
      let V = M.length,
        F = E.length;
      function G(e, t, r) {
        let n,
          a,
          s,
          o = e.x - t.x,
          l = e.y - t.y,
          c = r.x - e.x,
          u = r.y - e.y,
          h = o * o + l * l;
        if (Math.abs(o * u - l * c) > Number.EPSILON) {
          let d = Math.sqrt(h),
            p = Math.sqrt(c * c + u * u),
            m = t.x - l / d,
            f = t.y + o / d,
            g = r.x - u / p,
            $ = r.y + c / p,
            v = ((g - m) * u - ($ - f) * c) / (o * u - l * c);
          (n = m + o * v - e.x), (a = f + l * v - e.y);
          let x = n * n + a * a;
          if (x <= 2) return new Vector2(n, a);
          s = Math.sqrt(x / 2);
        } else {
          let y = !1;
          o > Number.EPSILON
            ? c > Number.EPSILON && (y = !0)
            : o < -Number.EPSILON
            ? c < -Number.EPSILON && (y = !0)
            : Math.sign(l) === Math.sign(u) && (y = !0),
            y
              ? ((n = -l), (a = o), (s = Math.sqrt(h)))
              : ((n = o), (a = l), (s = Math.sqrt(h / 2)));
        }
        return new Vector2(n / s, a / s);
      }
      let N = [];
      for (let U = 0, z = P.length, O = z - 1, k = U + 1; U < z; U++, O++, k++)
        O === z && (O = 0), k === z && (k = 0), (N[U] = G(P[U], P[O], P[k]));
      let W = [],
        H,
        j = N.concat();
      for (let q = 0, X = w.length; q < X; q++) {
        let Z = w[q];
        H = [];
        for (
          let J = 0, Y = Z.length, K = Y - 1, Q = J + 1;
          J < Y;
          J++, K++, Q++
        )
          K === Y && (K = 0), Q === Y && (Q = 0), (H[J] = G(Z[J], Z[K], Z[Q]));
        W.push(H), (j = j.concat(H));
      }
      for (let ee = 0; ee < m; ee++) {
        let et = ee / m,
          ei = h * Math.cos((et * Math.PI) / 2),
          er = d * Math.sin((et * Math.PI) / 2) + p;
        for (let en = 0, ea = P.length; en < ea; en++) {
          let es = I(P[en], N[en], er);
          e0(es.x, es.y, -ei);
        }
        for (let eo = 0, el = w.length; eo < el; eo++) {
          let ec = w[eo];
          H = W[eo];
          for (let eu = 0, eh = ec.length; eu < eh; eu++) {
            let ed = I(ec[eu], H[eu], er);
            e0(ed.x, ed.y, -ei);
          }
        }
      }
      let ep = d + p;
      for (let em = 0; em < V; em++) {
        let ef = u ? I(M[em], j[em], ep) : M[em];
        v
          ? (b.copy(x.normals[0]).multiplyScalar(ef.x),
            y.copy(x.binormals[0]).multiplyScalar(ef.y),
            _.copy($[0]).add(b).add(y),
            e0(_.x, _.y, _.z))
          : e0(ef.x, ef.y, 0);
      }
      for (let eg = 1; eg <= l; eg++)
        for (let e8 = 0; e8 < V; e8++) {
          let e$ = u ? I(M[e8], j[e8], ep) : M[e8];
          v
            ? (b.copy(x.normals[eg]).multiplyScalar(e$.x),
              y.copy(x.binormals[eg]).multiplyScalar(e$.y),
              _.copy($[eg]).add(b).add(y),
              e0(_.x, _.y, _.z))
            : e0(e$.x, e$.y, (c / l) * eg);
        }
      for (let ev = m - 1; ev >= 0; ev--) {
        let ex = ev / m,
          ey = h * Math.cos((ex * Math.PI) / 2),
          eb = d * Math.sin((ex * Math.PI) / 2) + p;
        for (let e_ = 0, eS = P.length; e_ < eS; e_++) {
          let eM = I(P[e_], N[e_], eb);
          e0(eM.x, eM.y, c + ey);
        }
        for (let ew = 0, eT = w.length; ew < eT; ew++) {
          let eA = w[ew];
          H = W[ew];
          for (let e1 = 0, eC = eA.length; e1 < eC; e1++) {
            let eL = I(eA[e1], H[e1], eb);
            v
              ? e0(eL.x, eL.y + $[l - 1].y, $[l - 1].x + ey)
              : e0(eL.x, eL.y, c + ey);
          }
        }
      }
      function eE(e, t) {
        let r = e.length;
        for (; --r >= 0; ) {
          let n = r,
            a = r - 1;
          a < 0 && (a = e.length - 1);
          for (let s = 0, o = l + 2 * m; s < o; s++) {
            let c = V * s,
              u = V * (s + 1),
              h = t + n + c,
              d = t + a + c,
              p = t + a + u,
              f = t + n + u;
            eR(h, d, p, f);
          }
        }
      }
      function e0(e, t, r) {
        s.push(e), s.push(t), s.push(r);
      }
      function eP(e, t, a) {
        eD(e), eD(t), eD(a);
        let s = n.length / 3,
          o = g.generateTopUV(r, n, s - 3, s - 2, s - 1);
        eB(o[0]), eB(o[1]), eB(o[2]);
      }
      function eR(e, t, a, s) {
        eD(e), eD(t), eD(s), eD(t), eD(a), eD(s);
        let o = n.length / 3,
          l = g.generateSideWallUV(r, n, o - 6, o - 3, o - 2, o - 1);
        eB(l[0]), eB(l[1]), eB(l[3]), eB(l[1]), eB(l[2]), eB(l[3]);
      }
      function eD(e) {
        n.push(s[3 * e + 0]), n.push(s[3 * e + 1]), n.push(s[3 * e + 2]);
      }
      function eB(e) {
        a.push(e.x), a.push(e.y);
      }
      (function e() {
        let t = n.length / 3;
        if (u) {
          let a = 0,
            s = V * a;
          for (let o = 0; o < F; o++) {
            let c = E[o];
            eP(c[2] + s, c[1] + s, c[0] + s);
          }
          s = V * (a = l + 2 * m);
          for (let h = 0; h < F; h++) {
            let d = E[h];
            eP(d[0] + s, d[1] + s, d[2] + s);
          }
        } else {
          for (let p = 0; p < F; p++) {
            let f = E[p];
            eP(f[2], f[1], f[0]);
          }
          for (let g = 0; g < F; g++) {
            let $ = E[g];
            eP($[0] + V * l, $[1] + V * l, $[2] + V * l);
          }
        }
        r.addGroup(t, n.length / 3 - t, 0);
      })(),
        (function e() {
          let t = n.length / 3,
            a = 0;
          eE(P, a), (a += P.length);
          for (let s = 0, o = w.length; s < o; s++) {
            let l = w[s];
            eE(l, a), (a += l.length);
          }
          r.addGroup(t, n.length / 3 - t, 1);
        })();
    }
    this.setAttribute("position", new Float32BufferAttribute(n, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(a, 2)),
      this.computeVertexNormals();
  }
  toJSON() {
    let e = super.toJSON(),
      t = this.parameters.shapes,
      r = this.parameters.options;
    return toJSON$1(t, r, e);
  }
  static fromJSON(e, t) {
    let r = [];
    for (let n = 0, a = e.shapes.length; n < a; n++) {
      let s = t[e.shapes[n]];
      r.push(s);
    }
    let o = e.options.extrudePath;
    return (
      void 0 !== o &&
        (e.options.extrudePath = new Curves[o.type]().fromJSON(o)),
      new ExtrudeGeometry(r, e.options)
    );
  }
}
let WorldUVGenerator = {
  generateTopUV: function (e, t, r, n, a) {
    let s = t[3 * r],
      o = t[3 * r + 1],
      l = t[3 * n],
      c = t[3 * n + 1],
      u = t[3 * a],
      h = t[3 * a + 1];
    return [new Vector2(s, o), new Vector2(l, c), new Vector2(u, h)];
  },
  generateSideWallUV: function (e, t, r, n, a, s) {
    let o = t[3 * r],
      l = t[3 * r + 1],
      c = t[3 * r + 2],
      u = t[3 * n],
      h = t[3 * n + 1],
      d = t[3 * n + 2],
      p = t[3 * a],
      m = t[3 * a + 1],
      f = t[3 * a + 2],
      g = t[3 * s],
      $ = t[3 * s + 1],
      v = t[3 * s + 2];
    return Math.abs(l - h) < Math.abs(o - u)
      ? [
          new Vector2(o, 1 - c),
          new Vector2(u, 1 - d),
          new Vector2(p, 1 - f),
          new Vector2(g, 1 - v),
        ]
      : [
          new Vector2(l, 1 - c),
          new Vector2(h, 1 - d),
          new Vector2(m, 1 - f),
          new Vector2($, 1 - v),
        ];
  },
};
function toJSON$1(e, t, r) {
  if (((r.shapes = []), Array.isArray(e)))
    for (let n = 0, a = e.length; n < a; n++) {
      let s = e[n];
      r.shapes.push(s.uuid);
    }
  else r.shapes.push(e.uuid);
  return (
    (r.options = Object.assign({}, t)),
    void 0 !== t.extrudePath &&
      (r.options.extrudePath = t.extrudePath.toJSON()),
    r
  );
}
class IcosahedronGeometry extends PolyhedronGeometry {
  constructor(e = 1, t = 0) {
    let r = (1 + Math.sqrt(5)) / 2,
      n = [
        -1,
        r,
        0,
        1,
        r,
        0,
        -1,
        -r,
        0,
        1,
        -r,
        0,
        0,
        -1,
        r,
        0,
        1,
        r,
        0,
        -1,
        -r,
        0,
        1,
        -r,
        r,
        0,
        -1,
        r,
        0,
        1,
        -r,
        0,
        -1,
        -r,
        0,
        1,
      ],
      a = [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ];
    super(n, a, e, t),
      (this.type = "IcosahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new IcosahedronGeometry(e.radius, e.detail);
  }
}
class OctahedronGeometry extends PolyhedronGeometry {
  constructor(e = 1, t = 0) {
    let r = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
      n = [
        0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2,
      ];
    super(r, n, e, t),
      (this.type = "OctahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new OctahedronGeometry(e.radius, e.detail);
  }
}
class RingGeometry extends BufferGeometry {
  constructor(e = 0.5, t = 1, r = 8, n = 1, a = 0, s = 2 * Math.PI) {
    super(),
      (this.type = "RingGeometry"),
      (this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: r,
        phiSegments: n,
        thetaStart: a,
        thetaLength: s,
      }),
      (r = Math.max(3, r)),
      (n = Math.max(1, n));
    let o = [],
      l = [],
      c = [],
      u = [],
      h = e,
      d = (t - e) / n,
      p = new Vector3(),
      m = new Vector2();
    for (let f = 0; f <= n; f++) {
      for (let g = 0; g <= r; g++) {
        let $ = a + (g / r) * s;
        (p.x = h * Math.cos($)),
          (p.y = h * Math.sin($)),
          l.push(p.x, p.y, p.z),
          c.push(0, 0, 1),
          (m.x = (p.x / t + 1) / 2),
          (m.y = (p.y / t + 1) / 2),
          u.push(m.x, m.y);
      }
      h += d;
    }
    for (let v = 0; v < n; v++) {
      let x = v * (r + 1);
      for (let y = 0; y < r; y++) {
        let b = y + x,
          _ = b,
          S = b + r + 1,
          M = b + r + 2,
          w = b + 1;
        o.push(_, S, w), o.push(S, M, w);
      }
    }
    this.setIndex(o),
      this.setAttribute("position", new Float32BufferAttribute(l, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(c, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(u, 2));
  }
  static fromJSON(e) {
    return new RingGeometry(
      e.innerRadius,
      e.outerRadius,
      e.thetaSegments,
      e.phiSegments,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class ShapeGeometry extends BufferGeometry {
  constructor(
    e = new Shape([
      new Vector2(0, 0.5),
      new Vector2(-0.5, -0.5),
      new Vector2(0.5, -0.5),
    ]),
    t = 12
  ) {
    super(),
      (this.type = "ShapeGeometry"),
      (this.parameters = { shapes: e, curveSegments: t });
    let r = [],
      n = [],
      a = [],
      s = [],
      o = 0,
      l = 0;
    if (!1 === Array.isArray(e)) u(e);
    else
      for (let c = 0; c < e.length; c++)
        u(e[c]), this.addGroup(o, l, c), (o += l), (l = 0);
    function u(e) {
      let o = n.length / 3,
        c = e.extractPoints(t),
        u = c.shape,
        h = c.holes;
      !1 === ShapeUtils.isClockWise(u) && (u = u.reverse());
      for (let d = 0, p = h.length; d < p; d++) {
        let m = h[d];
        !0 === ShapeUtils.isClockWise(m) && (h[d] = m.reverse());
      }
      let f = ShapeUtils.triangulateShape(u, h);
      for (let g = 0, $ = h.length; g < $; g++) {
        let v = h[g];
        u = u.concat(v);
      }
      for (let x = 0, y = u.length; x < y; x++) {
        let b = u[x];
        n.push(b.x, b.y, 0), a.push(0, 0, 1), s.push(b.x, b.y);
      }
      for (let _ = 0, S = f.length; _ < S; _++) {
        let M = f[_],
          w = M[0] + o,
          T = M[1] + o,
          A = M[2] + o;
        r.push(w, T, A), (l += 3);
      }
    }
    this.setIndex(r),
      this.setAttribute("position", new Float32BufferAttribute(n, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(a, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(s, 2));
  }
  toJSON() {
    let e = super.toJSON(),
      t = this.parameters.shapes;
    return toJSON(t, e);
  }
  static fromJSON(e, t) {
    let r = [];
    for (let n = 0, a = e.shapes.length; n < a; n++) {
      let s = t[e.shapes[n]];
      r.push(s);
    }
    return new ShapeGeometry(r, e.curveSegments);
  }
}
function toJSON(e, t) {
  if (((t.shapes = []), Array.isArray(e)))
    for (let r = 0, n = e.length; r < n; r++) {
      let a = e[r];
      t.shapes.push(a.uuid);
    }
  else t.shapes.push(e.uuid);
  return t;
}
class SphereGeometry extends BufferGeometry {
  constructor(
    e = 1,
    t = 32,
    r = 16,
    n = 0,
    a = 2 * Math.PI,
    s = 0,
    o = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: r,
        phiStart: n,
        phiLength: a,
        thetaStart: s,
        thetaLength: o,
      }),
      (t = Math.max(3, Math.floor(t))),
      (r = Math.max(2, Math.floor(r)));
    let l = Math.min(s + o, Math.PI),
      c = 0,
      u = [],
      h = new Vector3(),
      d = new Vector3(),
      p = [],
      m = [],
      f = [],
      g = [];
    for (let $ = 0; $ <= r; $++) {
      let v = [],
        x = $ / r,
        y = 0;
      0 == $ && 0 == s
        ? (y = 0.5 / t)
        : $ == r && l == Math.PI && (y = -0.5 / t);
      for (let b = 0; b <= t; b++) {
        let _ = b / t;
        (h.x = -e * Math.cos(n + _ * a) * Math.sin(s + x * o)),
          (h.y = e * Math.cos(s + x * o)),
          (h.z = e * Math.sin(n + _ * a) * Math.sin(s + x * o)),
          m.push(h.x, h.y, h.z),
          d.copy(h).normalize(),
          f.push(d.x, d.y, d.z),
          g.push(_ + y, 1 - x),
          v.push(c++);
      }
      u.push(v);
    }
    for (let S = 0; S < r; S++)
      for (let M = 0; M < t; M++) {
        let w = u[S][M + 1],
          T = u[S][M],
          A = u[S + 1][M],
          C = u[S + 1][M + 1];
        (0 !== S || s > 0) && p.push(w, T, C),
          (S !== r - 1 || l < Math.PI) && p.push(T, A, C);
      }
    this.setIndex(p),
      this.setAttribute("position", new Float32BufferAttribute(m, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(f, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(g, 2));
  }
  static fromJSON(e) {
    return new SphereGeometry(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class TetrahedronGeometry extends PolyhedronGeometry {
  constructor(e = 1, t = 0) {
    let r = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
      n = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
    super(r, n, e, t),
      (this.type = "TetrahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new TetrahedronGeometry(e.radius, e.detail);
  }
}
class TorusGeometry extends BufferGeometry {
  constructor(e = 1, t = 0.4, r = 8, n = 6, a = 2 * Math.PI) {
    super(),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        radialSegments: r,
        tubularSegments: n,
        arc: a,
      }),
      (r = Math.floor(r)),
      (n = Math.floor(n));
    let s = [],
      o = [],
      l = [],
      c = [],
      u = new Vector3(),
      h = new Vector3(),
      d = new Vector3();
    for (let p = 0; p <= r; p++)
      for (let m = 0; m <= n; m++) {
        let f = (m / n) * a,
          g = (p / r) * Math.PI * 2;
        (h.x = (e + t * Math.cos(g)) * Math.cos(f)),
          (h.y = (e + t * Math.cos(g)) * Math.sin(f)),
          (h.z = t * Math.sin(g)),
          o.push(h.x, h.y, h.z),
          (u.x = e * Math.cos(f)),
          (u.y = e * Math.sin(f)),
          d.subVectors(h, u).normalize(),
          l.push(d.x, d.y, d.z),
          c.push(m / n),
          c.push(p / r);
      }
    for (let $ = 1; $ <= r; $++)
      for (let v = 1; v <= n; v++) {
        let x = (n + 1) * $ + v - 1,
          y = (n + 1) * ($ - 1) + v - 1,
          b = (n + 1) * ($ - 1) + v,
          _ = (n + 1) * $ + v;
        s.push(x, y, _), s.push(y, b, _);
      }
    this.setIndex(s),
      this.setAttribute("position", new Float32BufferAttribute(o, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(l, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(c, 2));
  }
  static fromJSON(e) {
    return new TorusGeometry(
      e.radius,
      e.tube,
      e.radialSegments,
      e.tubularSegments,
      e.arc
    );
  }
}
class TorusKnotGeometry extends BufferGeometry {
  constructor(e = 1, t = 0.4, r = 64, n = 8, a = 2, s = 3) {
    super(),
      (this.type = "TorusKnotGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        tubularSegments: r,
        radialSegments: n,
        p: a,
        q: s,
      }),
      (r = Math.floor(r)),
      (n = Math.floor(n));
    let o = [],
      l = [],
      c = [],
      u = [],
      h = new Vector3(),
      d = new Vector3(),
      p = new Vector3(),
      m = new Vector3(),
      f = new Vector3(),
      g = new Vector3(),
      $ = new Vector3();
    for (let v = 0; v <= r; ++v) {
      let x = (v / r) * a * Math.PI * 2;
      E(x, a, s, e, p),
        E(x + 0.01, a, s, e, m),
        g.subVectors(m, p),
        $.addVectors(m, p),
        f.crossVectors(g, $),
        $.crossVectors(f, g),
        f.normalize(),
        $.normalize();
      for (let y = 0; y <= n; ++y) {
        let b = (y / n) * Math.PI * 2,
          _ = -t * Math.cos(b),
          S = t * Math.sin(b);
        (h.x = p.x + (_ * $.x + S * f.x)),
          (h.y = p.y + (_ * $.y + S * f.y)),
          (h.z = p.z + (_ * $.z + S * f.z)),
          l.push(h.x, h.y, h.z),
          d.subVectors(h, p).normalize(),
          c.push(d.x, d.y, d.z),
          u.push(v / r),
          u.push(y / n);
      }
    }
    for (let M = 1; M <= r; M++)
      for (let w = 1; w <= n; w++) {
        let T = (n + 1) * (M - 1) + (w - 1),
          A = (n + 1) * M + (w - 1),
          C = (n + 1) * M + w,
          L = (n + 1) * (M - 1) + w;
        o.push(T, A, L), o.push(A, C, L);
      }
    function E(e, t, r, n, a) {
      let s = (r / t) * e,
        o = Math.cos(s);
      (a.x = n * (2 + o) * 0.5 * Math.cos(e)),
        (a.y = n * (2 + o) * Math.sin(e) * 0.5),
        (a.z = n * Math.sin(s) * 0.5);
    }
    this.setIndex(o),
      this.setAttribute("position", new Float32BufferAttribute(l, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(c, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(u, 2));
  }
  static fromJSON(e) {
    return new TorusKnotGeometry(
      e.radius,
      e.tube,
      e.tubularSegments,
      e.radialSegments,
      e.p,
      e.q
    );
  }
}
class TubeGeometry extends BufferGeometry {
  constructor(
    e = new QuadraticBezierCurve3(
      new Vector3(-1, -1, 0),
      new Vector3(-1, 1, 0),
      new Vector3(1, 1, 0)
    ),
    t = 64,
    r = 1,
    n = 8,
    a = !1
  ) {
    super(),
      (this.type = "TubeGeometry"),
      (this.parameters = {
        path: e,
        tubularSegments: t,
        radius: r,
        radialSegments: n,
        closed: a,
      });
    let s = e.computeFrenetFrames(t, a);
    (this.tangents = s.tangents),
      (this.normals = s.normals),
      (this.binormals = s.binormals);
    let o = new Vector3(),
      l = new Vector3(),
      c = new Vector2(),
      u = new Vector3(),
      h = [],
      d = [],
      p = [],
      m = [];
    function f() {
      for (let e = 0; e < t; e++) g(e);
      g(!1 === a ? t : 0), v(), $();
    }
    function g(a) {
      u = e.getPointAt(a / t, u);
      let c = s.normals[a],
        p = s.binormals[a];
      for (let m = 0; m <= n; m++) {
        let f = (m / n) * Math.PI * 2,
          g = Math.sin(f),
          $ = -Math.cos(f);
        (l.x = $ * c.x + g * p.x),
          (l.y = $ * c.y + g * p.y),
          (l.z = $ * c.z + g * p.z),
          l.normalize(),
          d.push(l.x, l.y, l.z),
          (o.x = u.x + r * l.x),
          (o.y = u.y + r * l.y),
          (o.z = u.z + r * l.z),
          h.push(o.x, o.y, o.z);
      }
    }
    function $() {
      for (let e = 1; e <= t; e++)
        for (let r = 1; r <= n; r++) {
          let a = (n + 1) * (e - 1) + (r - 1),
            s = (n + 1) * e + (r - 1),
            o = (n + 1) * e + r,
            l = (n + 1) * (e - 1) + r;
          m.push(a, s, l), m.push(s, o, l);
        }
    }
    function v() {
      for (let e = 0; e <= t; e++)
        for (let r = 0; r <= n; r++)
          (c.x = e / t), (c.y = r / n), p.push(c.x, c.y);
    }
    f(),
      this.setIndex(m),
      this.setAttribute("position", new Float32BufferAttribute(h, 3)),
      this.setAttribute("normal", new Float32BufferAttribute(d, 3)),
      this.setAttribute("uv", new Float32BufferAttribute(p, 2));
  }
  toJSON() {
    let e = super.toJSON();
    return (e.path = this.parameters.path.toJSON()), e;
  }
  static fromJSON(e) {
    return new TubeGeometry(
      new Curves[e.path.type]().fromJSON(e.path),
      e.tubularSegments,
      e.radius,
      e.radialSegments,
      e.closed
    );
  }
}
class WireframeGeometry extends BufferGeometry {
  constructor(e = null) {
    if (
      (super(),
      (this.type = "WireframeGeometry"),
      (this.parameters = { geometry: e }),
      null !== e)
    ) {
      let t = [],
        r = new Set(),
        n = new Vector3(),
        a = new Vector3();
      if (null !== e.index) {
        let s = e.attributes.position,
          o = e.index,
          l = e.groups;
        0 === l.length &&
          (l = [{ start: 0, count: o.count, materialIndex: 0 }]);
        for (let c = 0, u = l.length; c < u; ++c) {
          let h = l[c],
            d = h.start,
            p = h.count;
          for (let m = d, f = d + p; m < f; m += 3)
            for (let g = 0; g < 3; g++) {
              let $ = o.getX(m + g),
                v = o.getX(m + ((g + 1) % 3));
              n.fromBufferAttribute(s, $),
                a.fromBufferAttribute(s, v),
                !0 === isUniqueEdge(n, a, r) &&
                  (t.push(n.x, n.y, n.z), t.push(a.x, a.y, a.z));
            }
        }
      } else {
        let x = e.attributes.position;
        for (let y = 0, b = x.count / 3; y < b; y++)
          for (let _ = 0; _ < 3; _++) {
            let S = 3 * y + _,
              M = 3 * y + ((_ + 1) % 3);
            n.fromBufferAttribute(x, S),
              a.fromBufferAttribute(x, M),
              !0 === isUniqueEdge(n, a, r) &&
                (t.push(n.x, n.y, n.z), t.push(a.x, a.y, a.z));
          }
      }
      this.setAttribute("position", new Float32BufferAttribute(t, 3));
    }
  }
}
function isUniqueEdge(e, t, r) {
  let n = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,
    a = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;
  return !0 !== r.has(n) && !0 !== r.has(a) && (r.add(n), r.add(a), !0);
}
var Geometries = Object.freeze({
  __proto__: null,
  BoxGeometry: BoxGeometry,
  BoxBufferGeometry: BoxGeometry,
  CapsuleGeometry: CapsuleGeometry,
  CapsuleBufferGeometry: CapsuleGeometry,
  CircleGeometry: CircleGeometry,
  CircleBufferGeometry: CircleGeometry,
  ConeGeometry: ConeGeometry,
  ConeBufferGeometry: ConeGeometry,
  CylinderGeometry: CylinderGeometry,
  CylinderBufferGeometry: CylinderGeometry,
  DodecahedronGeometry: DodecahedronGeometry,
  DodecahedronBufferGeometry: DodecahedronGeometry,
  EdgesGeometry: EdgesGeometry,
  ExtrudeGeometry: ExtrudeGeometry,
  ExtrudeBufferGeometry: ExtrudeGeometry,
  IcosahedronGeometry: IcosahedronGeometry,
  IcosahedronBufferGeometry: IcosahedronGeometry,
  LatheGeometry: LatheGeometry,
  LatheBufferGeometry: LatheGeometry,
  OctahedronGeometry: OctahedronGeometry,
  OctahedronBufferGeometry: OctahedronGeometry,
  PlaneGeometry: PlaneGeometry,
  PlaneBufferGeometry: PlaneGeometry,
  PolyhedronGeometry: PolyhedronGeometry,
  PolyhedronBufferGeometry: PolyhedronGeometry,
  RingGeometry: RingGeometry,
  RingBufferGeometry: RingGeometry,
  ShapeGeometry: ShapeGeometry,
  ShapeBufferGeometry: ShapeGeometry,
  SphereGeometry: SphereGeometry,
  SphereBufferGeometry: SphereGeometry,
  TetrahedronGeometry: TetrahedronGeometry,
  TetrahedronBufferGeometry: TetrahedronGeometry,
  TorusGeometry: TorusGeometry,
  TorusBufferGeometry: TorusGeometry,
  TorusKnotGeometry: TorusKnotGeometry,
  TorusKnotBufferGeometry: TorusKnotGeometry,
  TubeGeometry: TubeGeometry,
  TubeBufferGeometry: TubeGeometry,
  WireframeGeometry: WireframeGeometry,
});
class ShadowMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "ShadowMaterial"),
      (this.color = new Color(0)),
      (this.transparent = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), (this.fog = e.fog), this;
  }
}
ShadowMaterial.prototype.isShadowMaterial = !0;
class RawShaderMaterial extends ShaderMaterial {
  constructor(e) {
    super(e), (this.type = "RawShaderMaterial");
  }
}
RawShaderMaterial.prototype.isRawShaderMaterial = !0;
class MeshStandardMaterial extends Material {
  constructor(e) {
    super(),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new Color(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Color(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = TangentSpaceNormalMap),
      (this.normalScale = new Vector2(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
MeshStandardMaterial.prototype.isMeshStandardMaterial = !0;
class MeshPhysicalMaterial extends MeshStandardMaterial {
  constructor(e) {
    super(),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new Vector2(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return clamp((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (e) {
          this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
        },
      }),
      (this.sheenColor = new Color(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 0),
      (this.attenuationColor = new Color(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new Color(1, 1, 1)),
      (this.specularColorMap = null),
      (this._sheen = 0),
      (this._clearcoat = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.ior = e.ior),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
MeshPhysicalMaterial.prototype.isMeshPhysicalMaterial = !0;
class MeshPhongMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "MeshPhongMaterial"),
      (this.color = new Color(16777215)),
      (this.specular = new Color(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Color(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = TangentSpaceNormalMap),
      (this.normalScale = new Vector2(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = MultiplyOperation),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      this.specular.copy(e.specular),
      (this.shininess = e.shininess),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
MeshPhongMaterial.prototype.isMeshPhongMaterial = !0;
class MeshToonMaterial extends Material {
  constructor(e) {
    super(),
      (this.defines = { TOON: "" }),
      (this.type = "MeshToonMaterial"),
      (this.color = new Color(16777215)),
      (this.map = null),
      (this.gradientMap = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Color(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = TangentSpaceNormalMap),
      (this.normalScale = new Vector2(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.gradientMap = e.gradientMap),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
MeshToonMaterial.prototype.isMeshToonMaterial = !0;
class MeshNormalMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "MeshNormalMaterial"),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = TangentSpaceNormalMap),
      (this.normalScale = new Vector2(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.flatShading = !1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.flatShading = e.flatShading),
      this
    );
  }
}
MeshNormalMaterial.prototype.isMeshNormalMaterial = !0;
class MeshLambertMaterial extends Material {
  constructor(e) {
    super(),
      (this.type = "MeshLambertMaterial"),
      (this.color = new Color(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Color(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = MultiplyOperation),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
MeshLambertMaterial.prototype.isMeshLambertMaterial = !0;
class MeshMatcapMaterial extends Material {
  constructor(e) {
    super(),
      (this.defines = { MATCAP: "" }),
      (this.type = "MeshMatcapMaterial"),
      (this.color = new Color(16777215)),
      (this.matcap = null),
      (this.map = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = TangentSpaceNormalMap),
      (this.normalScale = new Vector2(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { MATCAP: "" }),
      this.color.copy(e.color),
      (this.matcap = e.matcap),
      (this.map = e.map),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
MeshMatcapMaterial.prototype.isMeshMatcapMaterial = !0;
class LineDashedMaterial extends LineBasicMaterial {
  constructor(e) {
    super(),
      (this.type = "LineDashedMaterial"),
      (this.scale = 1),
      (this.dashSize = 3),
      (this.gapSize = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.scale = e.scale),
      (this.dashSize = e.dashSize),
      (this.gapSize = e.gapSize),
      this
    );
  }
}
LineDashedMaterial.prototype.isLineDashedMaterial = !0;
let materialLib = {
  ShadowMaterial,
  SpriteMaterial,
  RawShaderMaterial,
  ShaderMaterial,
  PointsMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MeshPhongMaterial,
  MeshToonMaterial,
  MeshNormalMaterial,
  MeshLambertMaterial,
  MeshDepthMaterial,
  MeshDistanceMaterial,
  MeshBasicMaterial,
  MeshMatcapMaterial,
  LineDashedMaterial,
  LineBasicMaterial,
  Material,
};
Material.fromType = function (e) {
  return new materialLib[e]();
};
let AnimationUtils = {
  arraySlice: function (e, t, r) {
    return AnimationUtils.isTypedArray(e)
      ? new e.constructor(e.subarray(t, void 0 !== r ? r : e.length))
      : e.slice(t, r);
  },
  convertArray: function (e, t, r) {
    return e && (r || e.constructor !== t)
      ? "number" == typeof t.BYTES_PER_ELEMENT
        ? new t(e)
        : Array.prototype.slice.call(e)
      : e;
  },
  isTypedArray: function (e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
  },
  getKeyframeOrder: function (e) {
    let t = e.length,
      r = Array(t);
    for (let n = 0; n !== t; ++n) r[n] = n;
    return (
      r.sort(function t(r, n) {
        return e[r] - e[n];
      }),
      r
    );
  },
  sortedArray: function (e, t, r) {
    let n = e.length,
      a = new e.constructor(n);
    for (let s = 0, o = 0; o !== n; ++s) {
      let l = r[s] * t;
      for (let c = 0; c !== t; ++c) a[o++] = e[l + c];
    }
    return a;
  },
  flattenJSON: function (e, t, r, n) {
    let a = 1,
      s = e[0];
    for (; void 0 !== s && void 0 === s[n]; ) s = e[a++];
    if (void 0 === s) return;
    let o = s[n];
    if (void 0 !== o) {
      if (Array.isArray(o))
        do
          void 0 !== (o = s[n]) && (t.push(s.time), r.push.apply(r, o)),
            (s = e[a++]);
        while (void 0 !== s);
      else if (void 0 !== o.toArray)
        do
          void 0 !== (o = s[n]) && (t.push(s.time), o.toArray(r, r.length)),
            (s = e[a++]);
        while (void 0 !== s);
      else
        do void 0 !== (o = s[n]) && (t.push(s.time), r.push(o)), (s = e[a++]);
        while (void 0 !== s);
    }
  },
  subclip: function (e, t, r, n, a = 30) {
    let s = e.clone();
    s.name = t;
    let o = [];
    for (let l = 0; l < s.tracks.length; ++l) {
      let c = s.tracks[l],
        u = c.getValueSize(),
        h = [],
        d = [];
      for (let p = 0; p < c.times.length; ++p) {
        let m = c.times[p] * a;
        if (!(m < r) && !(m >= n)) {
          h.push(c.times[p]);
          for (let f = 0; f < u; ++f) d.push(c.values[p * u + f]);
        }
      }
      0 !== h.length &&
        ((c.times = AnimationUtils.convertArray(h, c.times.constructor)),
        (c.values = AnimationUtils.convertArray(d, c.values.constructor)),
        o.push(c));
    }
    s.tracks = o;
    let g = 1 / 0;
    for (let $ = 0; $ < s.tracks.length; ++$)
      g > s.tracks[$].times[0] && (g = s.tracks[$].times[0]);
    for (let v = 0; v < s.tracks.length; ++v) s.tracks[v].shift(-1 * g);
    return s.resetDuration(), s;
  },
  makeClipAdditive: function (e, t = 0, r = e, n = 30) {
    n <= 0 && (n = 30);
    let a = r.tracks.length,
      s = t / n;
    for (let o = 0; o < a; ++o) {
      let l = r.tracks[o],
        c = l.ValueTypeName;
      if ("bool" === c || "string" === c) continue;
      let u = e.tracks.find(function (e) {
        return e.name === l.name && e.ValueTypeName === c;
      });
      if (void 0 === u) continue;
      let h = 0,
        d = l.getValueSize();
      l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (h = d / 3);
      let p = 0,
        m = u.getValueSize();
      u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (p = m / 3);
      let f = l.times.length - 1,
        g;
      if (s <= l.times[0]) {
        let $ = h,
          v = d - h;
        g = AnimationUtils.arraySlice(l.values, $, v);
      } else if (s >= l.times[f]) {
        let x = f * d + h,
          y = x + d - h;
        g = AnimationUtils.arraySlice(l.values, x, y);
      } else {
        let b = l.createInterpolant(),
          _ = h,
          S = d - h;
        b.evaluate(s), (g = AnimationUtils.arraySlice(b.resultBuffer, _, S));
      }
      if ("quaternion" === c) {
        let M = new Quaternion().fromArray(g).normalize().conjugate();
        M.toArray(g);
      }
      let w = u.times.length;
      for (let T = 0; T < w; ++T) {
        let A = T * m + p;
        if ("quaternion" === c)
          Quaternion.multiplyQuaternionsFlat(u.values, A, g, 0, u.values, A);
        else {
          let C = m - 2 * p;
          for (let L = 0; L < C; ++L) u.values[A + L] -= g[L];
        }
      }
    }
    return (e.blendMode = AdditiveAnimationBlendMode), e;
  },
};
class Interpolant {
  constructor(e, t, r, n) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = void 0 !== n ? n : new t.constructor(r)),
      (this.sampleValues = t),
      (this.valueSize = r),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    let t = this.parameterPositions,
      r = this._cachedIndex,
      n = t[r],
      a = t[r - 1];
    validate_interval: {
      seek: {
        let s;
        linear_scan: {
          forward_scan: if (!(e < n)) {
            for (let o = r + 2; ; ) {
              if (void 0 === n) {
                if (e < a) break forward_scan;
                return (
                  (r = t.length),
                  (this._cachedIndex = r),
                  this.afterEnd_(r - 1, e, a)
                );
              }
              if (r === o) break;
              if (((a = n), e < (n = t[++r]))) break seek;
            }
            s = t.length;
            break linear_scan;
          }
          if (!(e >= a)) {
            let l = t[1];
            e < l && ((r = 2), (a = l));
            for (let c = r - 2; ; ) {
              if (void 0 === a)
                return (this._cachedIndex = 0), this.beforeStart_(0, e, n);
              if (r === c) break;
              if (((n = a), e >= (a = t[--r - 1]))) break seek;
            }
            (s = r), (r = 0);
            break linear_scan;
          }
          break validate_interval;
        }
        for (; r < s; ) {
          let u = (r + s) >>> 1;
          e < t[u] ? (s = u) : (r = u + 1);
        }
        if (((n = t[r]), void 0 === (a = t[r - 1])))
          return (this._cachedIndex = 0), this.beforeStart_(0, e, n);
        if (void 0 === n)
          return (
            (r = t.length), (this._cachedIndex = r), this.afterEnd_(r - 1, a, e)
          );
      }
      (this._cachedIndex = r), this.intervalChanged_(r, a, n);
    }
    return this.interpolate_(r, a, e, n);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    let t = this.resultBuffer,
      r = this.sampleValues,
      n = this.valueSize,
      a = e * n;
    for (let s = 0; s !== n; ++s) t[s] = r[a + s];
    return t;
  }
  interpolate_() {
    throw Error("call to abstract method");
  }
  intervalChanged_() {}
}
(Interpolant.prototype.beforeStart_ = Interpolant.prototype.copySampleValue_),
  (Interpolant.prototype.afterEnd_ = Interpolant.prototype.copySampleValue_);
class CubicInterpolant extends Interpolant {
  constructor(e, t, r, n) {
    super(e, t, r, n),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = {
        endingStart: ZeroCurvatureEnding,
        endingEnd: ZeroCurvatureEnding,
      });
  }
  intervalChanged_(e, t, r) {
    let n = this.parameterPositions,
      a = e - 2,
      s = e + 1,
      o = n[a],
      l = n[s];
    if (void 0 === o)
      switch (this.getSettings_().endingStart) {
        case ZeroSlopeEnding:
          (a = e), (o = 2 * t - r);
          break;
        case WrapAroundEnding:
          o = t + n[(a = n.length - 2)] - n[a + 1];
          break;
        default:
          (a = e), (o = r);
      }
    if (void 0 === l)
      switch (this.getSettings_().endingEnd) {
        case ZeroSlopeEnding:
          (s = e), (l = 2 * r - t);
          break;
        case WrapAroundEnding:
          (s = 1), (l = r + n[1] - n[0]);
          break;
        default:
          (s = e - 1), (l = t);
      }
    let c = (r - t) * 0.5,
      u = this.valueSize;
    (this._weightPrev = c / (t - o)),
      (this._weightNext = c / (l - r)),
      (this._offsetPrev = a * u),
      (this._offsetNext = s * u);
  }
  interpolate_(e, t, r, n) {
    let a = this.resultBuffer,
      s = this.sampleValues,
      o = this.valueSize,
      l = e * o,
      c = l - o,
      u = this._offsetPrev,
      h = this._offsetNext,
      d = this._weightPrev,
      p = this._weightNext,
      m = (r - t) / (n - t),
      f = m * m,
      g = f * m,
      $ = -d * g + 2 * d * f - d * m,
      v = (1 + d) * g + (-1.5 - 2 * d) * f + (-0.5 + d) * m + 1,
      x = (-1 - p) * g + (1.5 + p) * f + 0.5 * m,
      y = p * g - p * f;
    for (let b = 0; b !== o; ++b)
      a[b] = $ * s[u + b] + v * s[c + b] + x * s[l + b] + y * s[h + b];
    return a;
  }
}
class LinearInterpolant extends Interpolant {
  constructor(e, t, r, n) {
    super(e, t, r, n);
  }
  interpolate_(e, t, r, n) {
    let a = this.resultBuffer,
      s = this.sampleValues,
      o = this.valueSize,
      l = e * o,
      c = l - o,
      u = (r - t) / (n - t),
      h = 1 - u;
    for (let d = 0; d !== o; ++d) a[d] = s[c + d] * h + s[l + d] * u;
    return a;
  }
}
class DiscreteInterpolant extends Interpolant {
  constructor(e, t, r, n) {
    super(e, t, r, n);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class KeyframeTrack {
  constructor(e, t, r, n) {
    if (void 0 === e)
      throw Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === t || 0 === t.length)
      throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = AnimationUtils.convertArray(t, this.TimeBufferType)),
      (this.values = AnimationUtils.convertArray(r, this.ValueBufferType)),
      this.setInterpolation(n || this.DefaultInterpolation);
  }
  static toJSON(e) {
    let t = e.constructor,
      r;
    if (t.toJSON !== this.toJSON) r = t.toJSON(e);
    else {
      r = {
        name: e.name,
        times: AnimationUtils.convertArray(e.times, Array),
        values: AnimationUtils.convertArray(e.values, Array),
      };
      let n = e.getInterpolation();
      n !== e.DefaultInterpolation && (r.interpolation = n);
    }
    return (r.type = e.ValueTypeName), r;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new DiscreteInterpolant(
      this.times,
      this.values,
      this.getValueSize(),
      e
    );
  }
  InterpolantFactoryMethodLinear(e) {
    return new LinearInterpolant(
      this.times,
      this.values,
      this.getValueSize(),
      e
    );
  }
  InterpolantFactoryMethodSmooth(e) {
    return new CubicInterpolant(
      this.times,
      this.values,
      this.getValueSize(),
      e
    );
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case InterpolateDiscrete:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case InterpolateLinear:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case InterpolateSmooth:
        t = this.InterpolantFactoryMethodSmooth;
    }
    if (void 0 === t) {
      let r =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (void 0 === this.createInterpolant) {
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw Error(r);
      }
      return console.warn("THREE.KeyframeTrack:", r), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return InterpolateDiscrete;
      case this.InterpolantFactoryMethodLinear:
        return InterpolateLinear;
      case this.InterpolantFactoryMethodSmooth:
        return InterpolateSmooth;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (0 !== e) {
      let t = this.times;
      for (let r = 0, n = t.length; r !== n; ++r) t[r] += e;
    }
    return this;
  }
  scale(e) {
    if (1 !== e) {
      let t = this.times;
      for (let r = 0, n = t.length; r !== n; ++r) t[r] *= e;
    }
    return this;
  }
  trim(e, t) {
    let r = this.times,
      n = r.length,
      a = 0,
      s = n - 1;
    for (; a !== n && r[a] < e; ) ++a;
    for (; -1 !== s && r[s] > t; ) --s;
    if ((++s, 0 !== a || s !== n)) {
      a >= s && (a = (s = Math.max(s, 1)) - 1);
      let o = this.getValueSize();
      (this.times = AnimationUtils.arraySlice(r, a, s)),
        (this.values = AnimationUtils.arraySlice(this.values, a * o, s * o));
    }
    return this;
  }
  validate() {
    let e = !0,
      t = this.getValueSize();
    t - Math.floor(t) != 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    let r = this.times,
      n = this.values,
      a = r.length;
    0 === a &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let s = null;
    for (let o = 0; o !== a; o++) {
      let l = r[o];
      if ("number" == typeof l && isNaN(l)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          o,
          l
        ),
          (e = !1);
        break;
      }
      if (null !== s && s > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, s),
          (e = !1);
        break;
      }
      s = l;
    }
    if (void 0 !== n && AnimationUtils.isTypedArray(n))
      for (let c = 0, u = n.length; c !== u; ++c) {
        let h = n[c];
        if (isNaN(h)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            c,
            h
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    let e = AnimationUtils.arraySlice(this.times),
      t = AnimationUtils.arraySlice(this.values),
      r = this.getValueSize(),
      n = this.getInterpolation() === InterpolateSmooth,
      a = e.length - 1,
      s = 1;
    for (let o = 1; o < a; ++o) {
      let l = !1,
        c = e[o],
        u = e[o + 1];
      if (c !== u && (1 !== o || c !== e[0])) {
        if (n) l = !0;
        else {
          let h = o * r,
            d = h - r,
            p = h + r;
          for (let m = 0; m !== r; ++m) {
            let f = t[h + m];
            if (f !== t[d + m] || f !== t[p + m]) {
              l = !0;
              break;
            }
          }
        }
      }
      if (l) {
        if (o !== s) {
          e[s] = e[o];
          let g = o * r,
            $ = s * r;
          for (let v = 0; v !== r; ++v) t[$ + v] = t[g + v];
        }
        ++s;
      }
    }
    if (a > 0) {
      e[s] = e[a];
      for (let x = a * r, y = s * r, b = 0; b !== r; ++b) t[y + b] = t[x + b];
      ++s;
    }
    return (
      s !== e.length
        ? ((this.times = AnimationUtils.arraySlice(e, 0, s)),
          (this.values = AnimationUtils.arraySlice(t, 0, s * r)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    let e = AnimationUtils.arraySlice(this.times, 0),
      t = AnimationUtils.arraySlice(this.values, 0),
      r = this.constructor,
      n = new r(this.name, e, t);
    return (n.createInterpolant = this.createInterpolant), n;
  }
}
(KeyframeTrack.prototype.TimeBufferType = Float32Array),
  (KeyframeTrack.prototype.ValueBufferType = Float32Array),
  (KeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear);
class BooleanKeyframeTrack extends KeyframeTrack {}
(BooleanKeyframeTrack.prototype.ValueTypeName = "bool"),
  (BooleanKeyframeTrack.prototype.ValueBufferType = Array),
  (BooleanKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete),
  (BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0),
  (BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0);
class ColorKeyframeTrack extends KeyframeTrack {}
ColorKeyframeTrack.prototype.ValueTypeName = "color";
class NumberKeyframeTrack extends KeyframeTrack {}
NumberKeyframeTrack.prototype.ValueTypeName = "number";
class QuaternionLinearInterpolant extends Interpolant {
  constructor(e, t, r, n) {
    super(e, t, r, n);
  }
  interpolate_(e, t, r, n) {
    let a = this.resultBuffer,
      s = this.sampleValues,
      o = this.valueSize,
      l = (r - t) / (n - t),
      c = e * o;
    for (let u = c + o; c !== u; c += 4)
      Quaternion.slerpFlat(a, 0, s, c - o, s, c, l);
    return a;
  }
}
class QuaternionKeyframeTrack extends KeyframeTrack {
  InterpolantFactoryMethodLinear(e) {
    return new QuaternionLinearInterpolant(
      this.times,
      this.values,
      this.getValueSize(),
      e
    );
  }
}
(QuaternionKeyframeTrack.prototype.ValueTypeName = "quaternion"),
  (QuaternionKeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear),
  (QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0);
class StringKeyframeTrack extends KeyframeTrack {}
(StringKeyframeTrack.prototype.ValueTypeName = "string"),
  (StringKeyframeTrack.prototype.ValueBufferType = Array),
  (StringKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete),
  (StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0),
  (StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0);
class VectorKeyframeTrack extends KeyframeTrack {}
VectorKeyframeTrack.prototype.ValueTypeName = "vector";
class AnimationClip {
  constructor(e, t = -1, r, n = NormalAnimationBlendMode) {
    (this.name = e),
      (this.tracks = r),
      (this.duration = t),
      (this.blendMode = n),
      (this.uuid = generateUUID()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    let t = [],
      r = e.tracks,
      n = 1 / (e.fps || 1);
    for (let a = 0, s = r.length; a !== s; ++a)
      t.push(parseKeyframeTrack(r[a]).scale(n));
    let o = new this(e.name, e.duration, t, e.blendMode);
    return (o.uuid = e.uuid), o;
  }
  static toJSON(e) {
    let t = [],
      r = e.tracks,
      n = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let a = 0, s = r.length; a !== s; ++a)
      t.push(KeyframeTrack.toJSON(r[a]));
    return n;
  }
  static CreateFromMorphTargetSequence(e, t, r, n) {
    let a = t.length,
      s = [];
    for (let o = 0; o < a; o++) {
      let l = [],
        c = [];
      l.push((o + a - 1) % a, o, (o + 1) % a), c.push(0, 1, 0);
      let u = AnimationUtils.getKeyframeOrder(l);
      (l = AnimationUtils.sortedArray(l, 1, u)),
        (c = AnimationUtils.sortedArray(c, 1, u)),
        n || 0 !== l[0] || (l.push(a), c.push(c[0])),
        s.push(
          new NumberKeyframeTrack(
            ".morphTargetInfluences[" + t[o].name + "]",
            l,
            c
          ).scale(1 / r)
        );
    }
    return new this(e, -1, s);
  }
  static findByName(e, t) {
    let r = e;
    if (!Array.isArray(e)) {
      let n = e;
      r = (n.geometry && n.geometry.animations) || n.animations;
    }
    for (let a = 0; a < r.length; a++) if (r[a].name === t) return r[a];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, r) {
    let n = {},
      a = /^([\w-]*?)([\d]+)$/;
    for (let s = 0, o = e.length; s < o; s++) {
      let l = e[s],
        c = l.name.match(a);
      if (c && c.length > 1) {
        let u = c[1],
          h = n[u];
        h || (n[u] = h = []), h.push(l);
      }
    }
    let d = [];
    for (let p in n) d.push(this.CreateFromMorphTargetSequence(p, n[p], t, r));
    return d;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    let r = function (e, t, r, n, a) {
        if (0 !== r.length) {
          let s = [],
            o = [];
          AnimationUtils.flattenJSON(r, s, o, n),
            0 !== s.length && a.push(new e(t, s, o));
        }
      },
      n = [],
      a = e.name || "default",
      s = e.fps || 30,
      o = e.blendMode,
      l = e.length || -1,
      c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      let h = c[u].keys;
      if (h && 0 !== h.length) {
        if (h[0].morphTargets) {
          let d = {},
            p;
          for (p = 0; p < h.length; p++)
            if (h[p].morphTargets)
              for (let m = 0; m < h[p].morphTargets.length; m++)
                d[h[p].morphTargets[m]] = -1;
          for (let f in d) {
            let g = [],
              $ = [];
            for (let v = 0; v !== h[p].morphTargets.length; ++v) {
              let x = h[p];
              g.push(x.time), $.push(x.morphTarget === f ? 1 : 0);
            }
            n.push(
              new NumberKeyframeTrack(".morphTargetInfluence[" + f + "]", g, $)
            );
          }
          l = d.length * s;
        } else {
          let y = ".bones[" + t[u].name + "]";
          r(VectorKeyframeTrack, y + ".position", h, "pos", n),
            r(QuaternionKeyframeTrack, y + ".quaternion", h, "rot", n),
            r(VectorKeyframeTrack, y + ".scale", h, "scl", n);
        }
      }
    }
    if (0 === n.length) return null;
    let b = new this(a, l, n, o);
    return b;
  }
  resetDuration() {
    let e = this.tracks,
      t = 0;
    for (let r = 0, n = e.length; r !== n; ++r) {
      let a = this.tracks[r];
      t = Math.max(t, a.times[a.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    let e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function getTrackTypeForValueTypeName(e) {
  switch (e.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return NumberKeyframeTrack;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return VectorKeyframeTrack;
    case "color":
      return ColorKeyframeTrack;
    case "quaternion":
      return QuaternionKeyframeTrack;
    case "bool":
    case "boolean":
      return BooleanKeyframeTrack;
    case "string":
      return StringKeyframeTrack;
  }
  throw Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
}
function parseKeyframeTrack(e) {
  if (void 0 === e.type)
    throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
  let t = getTrackTypeForValueTypeName(e.type);
  if (void 0 === e.times) {
    let r = [],
      n = [];
    AnimationUtils.flattenJSON(e.keys, r, n, "value"),
      (e.times = r),
      (e.values = n);
  }
  return void 0 !== t.parse
    ? t.parse(e)
    : new t(e.name, e.times, e.values, e.interpolation);
}
let Cache = {
  enabled: !1,
  files: {},
  add: function (e, t) {
    !1 !== this.enabled && (this.files[e] = t);
  },
  get: function (e) {
    if (!1 !== this.enabled) return this.files[e];
  },
  remove: function (e) {
    delete this.files[e];
  },
  clear: function () {
    this.files = {};
  },
};
class LoadingManager {
  constructor(e, t, r) {
    let n = this,
      a = !1,
      s = 0,
      o = 0,
      l,
      c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = r),
      (this.itemStart = function (e) {
        o++, !1 === a && void 0 !== n.onStart && n.onStart(e, s, o), (a = !0);
      }),
      (this.itemEnd = function (e) {
        s++,
          void 0 !== n.onProgress && n.onProgress(e, s, o),
          s === o && ((a = !1), void 0 !== n.onLoad && n.onLoad());
      }),
      (this.itemError = function (e) {
        void 0 !== n.onError && n.onError(e);
      }),
      (this.resolveURL = function (e) {
        return l ? l(e) : e;
      }),
      (this.setURLModifier = function (e) {
        return (l = e), this;
      }),
      (this.addHandler = function (e, t) {
        return c.push(e, t), this;
      }),
      (this.removeHandler = function (e) {
        let t = c.indexOf(e);
        return -1 !== t && c.splice(t, 2), this;
      }),
      (this.getHandler = function (e) {
        for (let t = 0, r = c.length; t < r; t += 2) {
          let n = c[t],
            a = c[t + 1];
          if ((n.global && (n.lastIndex = 0), n.test(e))) return a;
        }
        return null;
      });
  }
}
let DefaultLoadingManager = new LoadingManager();
class Loader {
  constructor(e) {
    (this.manager = void 0 !== e ? e : DefaultLoadingManager),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    let r = this;
    return new Promise(function (n, a) {
      r.load(e, n, t, a);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
let loading = {};
class FileLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    void 0 === e && (e = ""),
      void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    let a = Cache.get(e);
    if (void 0 !== a)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(a), this.manager.itemEnd(e);
        }, 0),
        a
      );
    if (void 0 !== loading[e]) {
      loading[e].push({ onLoad: t, onProgress: r, onError: n });
      return;
    }
    (loading[e] = []),
      loading[e].push({ onLoad: t, onProgress: r, onError: n });
    let s = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      o = this.mimeType,
      l = this.responseType;
    fetch(s)
      .then((t) => {
        if (200 === t.status || 0 === t.status) {
          if (
            (0 === t.status &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            "undefined" == typeof ReadableStream ||
              void 0 === t.body ||
              void 0 === t.body.getReader)
          )
            return t;
          let r = loading[e],
            n = t.body.getReader(),
            a = t.headers.get("Content-Length"),
            s = a ? parseInt(a) : 0,
            o = 0 !== s,
            l = 0,
            c = new ReadableStream({
              start(e) {
                (function t() {
                  n.read().then(({ done: n, value: a }) => {
                    if (n) e.close();
                    else {
                      l += a.byteLength;
                      let c = new ProgressEvent("progress", {
                        lengthComputable: o,
                        loaded: l,
                        total: s,
                      });
                      for (let u = 0, h = r.length; u < h; u++) {
                        let d = r[u];
                        d.onProgress && d.onProgress(c);
                      }
                      e.enqueue(a), t();
                    }
                  });
                })();
              },
            });
          return new Response(c);
        }
        throw Error(
          `fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`
        );
      })
      .then((e) => {
        switch (l) {
          case "arraybuffer":
            return e.arrayBuffer();
          case "blob":
            return e.blob();
          case "document":
            return e.text().then((e) => {
              let t = new DOMParser();
              return t.parseFromString(e, o);
            });
          case "json":
            return e.json();
          default:
            if (void 0 === o) return e.text();
            {
              let t = /charset="?([^;"\s]*)"?/i.exec(o),
                r = t && t[1] ? t[1].toLowerCase() : void 0,
                n = new TextDecoder(r);
              return e.arrayBuffer().then((e) => n.decode(e));
            }
        }
      })
      .then((t) => {
        Cache.add(e, t);
        let r = loading[e];
        delete loading[e];
        for (let n = 0, a = r.length; n < a; n++) {
          let s = r[n];
          s.onLoad && s.onLoad(t);
        }
      })
      .catch((t) => {
        let r = loading[e];
        if (void 0 === r) throw (this.manager.itemError(e), t);
        delete loading[e];
        for (let n = 0, a = r.length; n < a; n++) {
          let s = r[n];
          s.onError && s.onError(t);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class AnimationLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    let a = this,
      s = new FileLoader(this.manager);
    s.setPath(this.path),
      s.setRequestHeader(this.requestHeader),
      s.setWithCredentials(this.withCredentials),
      s.load(
        e,
        function (r) {
          try {
            t(a.parse(JSON.parse(r)));
          } catch (s) {
            n ? n(s) : console.error(s), a.manager.itemError(e);
          }
        },
        r,
        n
      );
  }
  parse(e) {
    let t = [];
    for (let r = 0; r < e.length; r++) {
      let n = AnimationClip.parse(e[r]);
      t.push(n);
    }
    return t;
  }
}
class CompressedTextureLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    let a = this,
      s = [],
      o = new CompressedTexture(),
      l = new FileLoader(this.manager);
    l.setPath(this.path),
      l.setResponseType("arraybuffer"),
      l.setRequestHeader(this.requestHeader),
      l.setWithCredentials(a.withCredentials);
    let c = 0;
    function u(u) {
      l.load(
        e[u],
        function (e) {
          let r = a.parse(e, !0);
          (s[u] = {
            width: r.width,
            height: r.height,
            format: r.format,
            mipmaps: r.mipmaps,
          }),
            6 === (c += 1) &&
              (1 === r.mipmapCount && (o.minFilter = LinearFilter),
              (o.image = s),
              (o.format = r.format),
              (o.needsUpdate = !0),
              t && t(o));
        },
        r,
        n
      );
    }
    if (Array.isArray(e)) for (let h = 0, d = e.length; h < d; ++h) u(h);
    else
      l.load(
        e,
        function (e) {
          let r = a.parse(e, !0);
          if (r.isCubemap) {
            let n = r.mipmaps.length / r.mipmapCount;
            for (let l = 0; l < n; l++) {
              s[l] = { mipmaps: [] };
              for (let c = 0; c < r.mipmapCount; c++)
                s[l].mipmaps.push(r.mipmaps[l * r.mipmapCount + c]),
                  (s[l].format = r.format),
                  (s[l].width = r.width),
                  (s[l].height = r.height);
            }
            o.image = s;
          } else
            (o.image.width = r.width),
              (o.image.height = r.height),
              (o.mipmaps = r.mipmaps);
          1 === r.mipmapCount && (o.minFilter = LinearFilter),
            (o.format = r.format),
            (o.needsUpdate = !0),
            t && t(o);
        },
        r,
        n
      );
    return o;
  }
}
class ImageLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    let a = this,
      s = Cache.get(e);
    if (void 0 !== s)
      return (
        a.manager.itemStart(e),
        setTimeout(function () {
          t && t(s), a.manager.itemEnd(e);
        }, 0),
        s
      );
    let o = createElementNS("img");
    function l() {
      u(), Cache.add(e, this), t && t(this), a.manager.itemEnd(e);
    }
    function c(t) {
      u(), n && n(t), a.manager.itemError(e), a.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", l, !1),
        o.removeEventListener("error", c, !1);
    }
    return (
      o.addEventListener("load", l, !1),
      o.addEventListener("error", c, !1),
      "data:" !== e.slice(0, 5) &&
        void 0 !== this.crossOrigin &&
        (o.crossOrigin = this.crossOrigin),
      a.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class CubeTextureLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    let a = new CubeTexture(),
      s = new ImageLoader(this.manager);
    s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
    let o = 0;
    function l(r) {
      s.load(
        e[r],
        function (e) {
          (a.images[r] = e), 6 == ++o && ((a.needsUpdate = !0), t && t(a));
        },
        void 0,
        n
      );
    }
    for (let c = 0; c < e.length; ++c) l(c);
    return a;
  }
}
class DataTextureLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    let a = this,
      s = new DataTexture(),
      o = new FileLoader(this.manager);
    return (
      o.setResponseType("arraybuffer"),
      o.setRequestHeader(this.requestHeader),
      o.setPath(this.path),
      o.setWithCredentials(a.withCredentials),
      o.load(
        e,
        function (e) {
          let r = a.parse(e);
          r &&
            (void 0 !== r.image
              ? (s.image = r.image)
              : void 0 !== r.data &&
                ((s.image.width = r.width),
                (s.image.height = r.height),
                (s.image.data = r.data)),
            (s.wrapS = void 0 !== r.wrapS ? r.wrapS : ClampToEdgeWrapping),
            (s.wrapT = void 0 !== r.wrapT ? r.wrapT : ClampToEdgeWrapping),
            (s.magFilter = void 0 !== r.magFilter ? r.magFilter : LinearFilter),
            (s.minFilter = void 0 !== r.minFilter ? r.minFilter : LinearFilter),
            (s.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1),
            void 0 !== r.encoding && (s.encoding = r.encoding),
            void 0 !== r.flipY && (s.flipY = r.flipY),
            void 0 !== r.format && (s.format = r.format),
            void 0 !== r.type && (s.type = r.type),
            void 0 !== r.mipmaps &&
              ((s.mipmaps = r.mipmaps),
              (s.minFilter = LinearMipmapLinearFilter)),
            1 === r.mipmapCount && (s.minFilter = LinearFilter),
            void 0 !== r.generateMipmaps &&
              (s.generateMipmaps = r.generateMipmaps),
            (s.needsUpdate = !0),
            t && t(s, r));
        },
        r,
        n
      ),
      s
    );
  }
}
class TextureLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    let a = new Texture(),
      s = new ImageLoader(this.manager);
    return (
      s.setCrossOrigin(this.crossOrigin),
      s.setPath(this.path),
      s.load(
        e,
        function (e) {
          (a.image = e), (a.needsUpdate = !0), void 0 !== t && t(a);
        },
        r,
        n
      ),
      a
    );
  }
}
class Light extends Object3D {
  constructor(e, t = 1) {
    super(),
      (this.type = "Light"),
      (this.color = new Color(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      void 0 !== this.groundColor &&
        (t.object.groundColor = this.groundColor.getHex()),
      void 0 !== this.distance && (t.object.distance = this.distance),
      void 0 !== this.angle && (t.object.angle = this.angle),
      void 0 !== this.decay && (t.object.decay = this.decay),
      void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
      void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
Light.prototype.isLight = !0;
class HemisphereLight extends Light {
  constructor(e, t, r) {
    super(e, r),
      (this.type = "HemisphereLight"),
      this.position.copy(Object3D.DefaultUp),
      this.updateMatrix(),
      (this.groundColor = new Color(t));
  }
  copy(e) {
    return (
      Light.prototype.copy.call(this, e),
      this.groundColor.copy(e.groundColor),
      this
    );
  }
}
HemisphereLight.prototype.isHemisphereLight = !0;
let _projScreenMatrix$1 = new Matrix4(),
  _lightPositionWorld$1 = new Vector3(),
  _lookTarget$1 = new Vector3();
class LightShadow {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Vector2(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Matrix4()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Frustum()),
      (this._frameExtents = new Vector2(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Vector4(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    let t = this.camera,
      r = this.matrix;
    _lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(_lightPositionWorld$1),
      _lookTarget$1.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(_lookTarget$1),
      t.updateMatrixWorld(),
      _projScreenMatrix$1.multiplyMatrices(
        t.projectionMatrix,
        t.matrixWorldInverse
      ),
      this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),
      r.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      r.multiply(t.projectionMatrix),
      r.multiply(t.matrixWorldInverse);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    let e = {};
    return (
      0 !== this.bias && (e.bias = this.bias),
      0 !== this.normalBias && (e.normalBias = this.normalBias),
      1 !== this.radius && (e.radius = this.radius),
      (512 !== this.mapSize.x || 512 !== this.mapSize.y) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class SpotLightShadow extends LightShadow {
  constructor() {
    super(new PerspectiveCamera(50, 1, 0.5, 500)), (this.focus = 1);
  }
  updateMatrices(e) {
    let t = this.camera,
      r = 2 * RAD2DEG * e.angle * this.focus,
      n = this.mapSize.width / this.mapSize.height,
      a = e.distance || t.far;
    (r !== t.fov || n !== t.aspect || a !== t.far) &&
      ((t.fov = r), (t.aspect = n), (t.far = a), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
SpotLightShadow.prototype.isSpotLightShadow = !0;
class SpotLight extends Light {
  constructor(e, t, r = 0, n = Math.PI / 3, a = 0, s = 1) {
    super(e, t),
      (this.type = "SpotLight"),
      this.position.copy(Object3D.DefaultUp),
      this.updateMatrix(),
      (this.target = new Object3D()),
      (this.distance = r),
      (this.angle = n),
      (this.penumbra = a),
      (this.decay = s),
      (this.shadow = new SpotLightShadow());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
SpotLight.prototype.isSpotLight = !0;
let _projScreenMatrix = new Matrix4(),
  _lightPositionWorld = new Vector3(),
  _lookTarget = new Vector3();
class PointLightShadow extends LightShadow {
  constructor() {
    super(new PerspectiveCamera(90, 1, 0.5, 500)),
      (this._frameExtents = new Vector2(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Vector4(2, 1, 1, 1),
        new Vector4(0, 1, 1, 1),
        new Vector4(3, 1, 1, 1),
        new Vector4(1, 1, 1, 1),
        new Vector4(3, 0, 1, 1),
        new Vector4(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new Vector3(1, 0, 0),
        new Vector3(-1, 0, 0),
        new Vector3(0, 0, 1),
        new Vector3(0, 0, -1),
        new Vector3(0, 1, 0),
        new Vector3(0, -1, 0),
      ]),
      (this._cubeUps = [
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 0, 1),
        new Vector3(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    let r = this.camera,
      n = this.matrix,
      a = e.distance || r.far;
    a !== r.far && ((r.far = a), r.updateProjectionMatrix()),
      _lightPositionWorld.setFromMatrixPosition(e.matrixWorld),
      r.position.copy(_lightPositionWorld),
      _lookTarget.copy(r.position),
      _lookTarget.add(this._cubeDirections[t]),
      r.up.copy(this._cubeUps[t]),
      r.lookAt(_lookTarget),
      r.updateMatrixWorld(),
      n.makeTranslation(
        -_lightPositionWorld.x,
        -_lightPositionWorld.y,
        -_lightPositionWorld.z
      ),
      _projScreenMatrix.multiplyMatrices(
        r.projectionMatrix,
        r.matrixWorldInverse
      ),
      this._frustum.setFromProjectionMatrix(_projScreenMatrix);
  }
}
PointLightShadow.prototype.isPointLightShadow = !0;
class PointLight extends Light {
  constructor(e, t, r = 0, n = 1) {
    super(e, t),
      (this.type = "PointLight"),
      (this.distance = r),
      (this.decay = n),
      (this.shadow = new PointLightShadow());
  }
  get power() {
    return 4 * this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
PointLight.prototype.isPointLight = !0;
class DirectionalLightShadow extends LightShadow {
  constructor() {
    super(new OrthographicCamera(-5, 5, 5, -5, 0.5, 500));
  }
}
DirectionalLightShadow.prototype.isDirectionalLightShadow = !0;
class DirectionalLight extends Light {
  constructor(e, t) {
    super(e, t),
      (this.type = "DirectionalLight"),
      this.position.copy(Object3D.DefaultUp),
      this.updateMatrix(),
      (this.target = new Object3D()),
      (this.shadow = new DirectionalLightShadow());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
DirectionalLight.prototype.isDirectionalLight = !0;
class AmbientLight extends Light {
  constructor(e, t) {
    super(e, t), (this.type = "AmbientLight");
  }
}
AmbientLight.prototype.isAmbientLight = !0;
class RectAreaLight extends Light {
  constructor(e, t, r = 10, n = 10) {
    super(e, t),
      (this.type = "RectAreaLight"),
      (this.width = r),
      (this.height = n);
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(e) {
    this.intensity = e / (this.width * this.height * Math.PI);
  }
  copy(e) {
    return (
      super.copy(e), (this.width = e.width), (this.height = e.height), this
    );
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (t.object.width = this.width), (t.object.height = this.height), t;
  }
}
RectAreaLight.prototype.isRectAreaLight = !0;
class SphericalHarmonics3 {
  constructor() {
    this.coefficients = [];
    for (let e = 0; e < 9; e++) this.coefficients.push(new Vector3());
  }
  set(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
    return this;
  }
  zero() {
    for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
    return this;
  }
  getAt(e, t) {
    let r = e.x,
      n = e.y,
      a = e.z,
      s = this.coefficients;
    return (
      t.copy(s[0]).multiplyScalar(0.282095),
      t.addScaledVector(s[1], 0.488603 * n),
      t.addScaledVector(s[2], 0.488603 * a),
      t.addScaledVector(s[3], 0.488603 * r),
      t.addScaledVector(s[4], 1.092548 * (r * n)),
      t.addScaledVector(s[5], 1.092548 * (n * a)),
      t.addScaledVector(s[6], 0.315392 * (3 * a * a - 1)),
      t.addScaledVector(s[7], 1.092548 * (r * a)),
      t.addScaledVector(s[8], 0.546274 * (r * r - n * n)),
      t
    );
  }
  getIrradianceAt(e, t) {
    let r = e.x,
      n = e.y,
      a = e.z,
      s = this.coefficients;
    return (
      t.copy(s[0]).multiplyScalar(0.886227),
      t.addScaledVector(s[1], 1.023328 * n),
      t.addScaledVector(s[2], 1.023328 * a),
      t.addScaledVector(s[3], 1.023328 * r),
      t.addScaledVector(s[4], 0.858086 * r * n),
      t.addScaledVector(s[5], 0.858086 * n * a),
      t.addScaledVector(s[6], 0.743125 * a * a - 0.247708),
      t.addScaledVector(s[7], 0.858086 * r * a),
      t.addScaledVector(s[8], 0.429043 * (r * r - n * n)),
      t
    );
  }
  add(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
    return this;
  }
  addScaledSH(e, t) {
    for (let r = 0; r < 9; r++)
      this.coefficients[r].addScaledVector(e.coefficients[r], t);
    return this;
  }
  scale(e) {
    for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
    return this;
  }
  lerp(e, t) {
    for (let r = 0; r < 9; r++) this.coefficients[r].lerp(e.coefficients[r], t);
    return this;
  }
  equals(e) {
    for (let t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
    return !0;
  }
  copy(e) {
    return this.set(e.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(e, t = 0) {
    let r = this.coefficients;
    for (let n = 0; n < 9; n++) r[n].fromArray(e, t + 3 * n);
    return this;
  }
  toArray(e = [], t = 0) {
    let r = this.coefficients;
    for (let n = 0; n < 9; n++) r[n].toArray(e, t + 3 * n);
    return e;
  }
  static getBasisAt(e, t) {
    let r = e.x,
      n = e.y,
      a = e.z;
    (t[0] = 0.282095),
      (t[1] = 0.488603 * n),
      (t[2] = 0.488603 * a),
      (t[3] = 0.488603 * r),
      (t[4] = 1.092548 * r * n),
      (t[5] = 1.092548 * n * a),
      (t[6] = 0.315392 * (3 * a * a - 1)),
      (t[7] = 1.092548 * r * a),
      (t[8] = 0.546274 * (r * r - n * n));
  }
}
SphericalHarmonics3.prototype.isSphericalHarmonics3 = !0;
class LightProbe extends Light {
  constructor(e = new SphericalHarmonics3(), t = 1) {
    super(void 0, t), (this.sh = e);
  }
  copy(e) {
    return super.copy(e), this.sh.copy(e.sh), this;
  }
  fromJSON(e) {
    return (this.intensity = e.intensity), this.sh.fromArray(e.sh), this;
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (t.object.sh = this.sh.toArray()), t;
  }
}
LightProbe.prototype.isLightProbe = !0;
class MaterialLoader extends Loader {
  constructor(e) {
    super(e), (this.textures = {});
  }
  load(e, t, r, n) {
    let a = this,
      s = new FileLoader(a.manager);
    s.setPath(a.path),
      s.setRequestHeader(a.requestHeader),
      s.setWithCredentials(a.withCredentials),
      s.load(
        e,
        function (r) {
          try {
            t(a.parse(JSON.parse(r)));
          } catch (s) {
            n ? n(s) : console.error(s), a.manager.itemError(e);
          }
        },
        r,
        n
      );
  }
  parse(e) {
    let t = this.textures;
    function r(e) {
      return (
        void 0 === t[e] &&
          console.warn("THREE.MaterialLoader: Undefined texture", e),
        t[e]
      );
    }
    let n = Material.fromType(e.type);
    if (
      (void 0 !== e.uuid && (n.uuid = e.uuid),
      void 0 !== e.name && (n.name = e.name),
      void 0 !== e.color && void 0 !== n.color && n.color.setHex(e.color),
      void 0 !== e.roughness && (n.roughness = e.roughness),
      void 0 !== e.metalness && (n.metalness = e.metalness),
      void 0 !== e.sheen && (n.sheen = e.sheen),
      void 0 !== e.sheenColor &&
        (n.sheenColor = new Color().setHex(e.sheenColor)),
      void 0 !== e.sheenRoughness && (n.sheenRoughness = e.sheenRoughness),
      void 0 !== e.emissive &&
        void 0 !== n.emissive &&
        n.emissive.setHex(e.emissive),
      void 0 !== e.specular &&
        void 0 !== n.specular &&
        n.specular.setHex(e.specular),
      void 0 !== e.specularIntensity &&
        (n.specularIntensity = e.specularIntensity),
      void 0 !== e.specularColor &&
        void 0 !== n.specularColor &&
        n.specularColor.setHex(e.specularColor),
      void 0 !== e.shininess && (n.shininess = e.shininess),
      void 0 !== e.clearcoat && (n.clearcoat = e.clearcoat),
      void 0 !== e.clearcoatRoughness &&
        (n.clearcoatRoughness = e.clearcoatRoughness),
      void 0 !== e.transmission && (n.transmission = e.transmission),
      void 0 !== e.thickness && (n.thickness = e.thickness),
      void 0 !== e.attenuationDistance &&
        (n.attenuationDistance = e.attenuationDistance),
      void 0 !== e.attenuationColor &&
        void 0 !== n.attenuationColor &&
        n.attenuationColor.setHex(e.attenuationColor),
      void 0 !== e.fog && (n.fog = e.fog),
      void 0 !== e.flatShading && (n.flatShading = e.flatShading),
      void 0 !== e.blending && (n.blending = e.blending),
      void 0 !== e.combine && (n.combine = e.combine),
      void 0 !== e.side && (n.side = e.side),
      void 0 !== e.shadowSide && (n.shadowSide = e.shadowSide),
      void 0 !== e.opacity && (n.opacity = e.opacity),
      void 0 !== e.transparent && (n.transparent = e.transparent),
      void 0 !== e.alphaTest && (n.alphaTest = e.alphaTest),
      void 0 !== e.depthTest && (n.depthTest = e.depthTest),
      void 0 !== e.depthWrite && (n.depthWrite = e.depthWrite),
      void 0 !== e.colorWrite && (n.colorWrite = e.colorWrite),
      void 0 !== e.stencilWrite && (n.stencilWrite = e.stencilWrite),
      void 0 !== e.stencilWriteMask &&
        (n.stencilWriteMask = e.stencilWriteMask),
      void 0 !== e.stencilFunc && (n.stencilFunc = e.stencilFunc),
      void 0 !== e.stencilRef && (n.stencilRef = e.stencilRef),
      void 0 !== e.stencilFuncMask && (n.stencilFuncMask = e.stencilFuncMask),
      void 0 !== e.stencilFail && (n.stencilFail = e.stencilFail),
      void 0 !== e.stencilZFail && (n.stencilZFail = e.stencilZFail),
      void 0 !== e.stencilZPass && (n.stencilZPass = e.stencilZPass),
      void 0 !== e.wireframe && (n.wireframe = e.wireframe),
      void 0 !== e.wireframeLinewidth &&
        (n.wireframeLinewidth = e.wireframeLinewidth),
      void 0 !== e.wireframeLinecap &&
        (n.wireframeLinecap = e.wireframeLinecap),
      void 0 !== e.wireframeLinejoin &&
        (n.wireframeLinejoin = e.wireframeLinejoin),
      void 0 !== e.rotation && (n.rotation = e.rotation),
      1 !== e.linewidth && (n.linewidth = e.linewidth),
      void 0 !== e.dashSize && (n.dashSize = e.dashSize),
      void 0 !== e.gapSize && (n.gapSize = e.gapSize),
      void 0 !== e.scale && (n.scale = e.scale),
      void 0 !== e.polygonOffset && (n.polygonOffset = e.polygonOffset),
      void 0 !== e.polygonOffsetFactor &&
        (n.polygonOffsetFactor = e.polygonOffsetFactor),
      void 0 !== e.polygonOffsetUnits &&
        (n.polygonOffsetUnits = e.polygonOffsetUnits),
      void 0 !== e.dithering && (n.dithering = e.dithering),
      void 0 !== e.alphaToCoverage && (n.alphaToCoverage = e.alphaToCoverage),
      void 0 !== e.premultipliedAlpha &&
        (n.premultipliedAlpha = e.premultipliedAlpha),
      void 0 !== e.visible && (n.visible = e.visible),
      void 0 !== e.toneMapped && (n.toneMapped = e.toneMapped),
      void 0 !== e.userData && (n.userData = e.userData),
      void 0 !== e.vertexColors &&
        ("number" == typeof e.vertexColors
          ? (n.vertexColors = e.vertexColors > 0)
          : (n.vertexColors = e.vertexColors)),
      void 0 !== e.uniforms)
    )
      for (let a in e.uniforms) {
        let s = e.uniforms[a];
        switch (((n.uniforms[a] = {}), s.type)) {
          case "t":
            n.uniforms[a].value = r(s.value);
            break;
          case "c":
            n.uniforms[a].value = new Color().setHex(s.value);
            break;
          case "v2":
            n.uniforms[a].value = new Vector2().fromArray(s.value);
            break;
          case "v3":
            n.uniforms[a].value = new Vector3().fromArray(s.value);
            break;
          case "v4":
            n.uniforms[a].value = new Vector4().fromArray(s.value);
            break;
          case "m3":
            n.uniforms[a].value = new Matrix3().fromArray(s.value);
            break;
          case "m4":
            n.uniforms[a].value = new Matrix4().fromArray(s.value);
            break;
          default:
            n.uniforms[a].value = s.value;
        }
      }
    if (
      (void 0 !== e.defines && (n.defines = e.defines),
      void 0 !== e.vertexShader && (n.vertexShader = e.vertexShader),
      void 0 !== e.fragmentShader && (n.fragmentShader = e.fragmentShader),
      void 0 !== e.extensions)
    )
      for (let o in e.extensions) n.extensions[o] = e.extensions[o];
    if (
      (void 0 !== e.shading && (n.flatShading = 1 === e.shading),
      void 0 !== e.size && (n.size = e.size),
      void 0 !== e.sizeAttenuation && (n.sizeAttenuation = e.sizeAttenuation),
      void 0 !== e.map && (n.map = r(e.map)),
      void 0 !== e.matcap && (n.matcap = r(e.matcap)),
      void 0 !== e.alphaMap && (n.alphaMap = r(e.alphaMap)),
      void 0 !== e.bumpMap && (n.bumpMap = r(e.bumpMap)),
      void 0 !== e.bumpScale && (n.bumpScale = e.bumpScale),
      void 0 !== e.normalMap && (n.normalMap = r(e.normalMap)),
      void 0 !== e.normalMapType && (n.normalMapType = e.normalMapType),
      void 0 !== e.normalScale)
    ) {
      let l = e.normalScale;
      !1 === Array.isArray(l) && (l = [l, l]),
        (n.normalScale = new Vector2().fromArray(l));
    }
    return (
      void 0 !== e.displacementMap &&
        (n.displacementMap = r(e.displacementMap)),
      void 0 !== e.displacementScale &&
        (n.displacementScale = e.displacementScale),
      void 0 !== e.displacementBias &&
        (n.displacementBias = e.displacementBias),
      void 0 !== e.roughnessMap && (n.roughnessMap = r(e.roughnessMap)),
      void 0 !== e.metalnessMap && (n.metalnessMap = r(e.metalnessMap)),
      void 0 !== e.emissiveMap && (n.emissiveMap = r(e.emissiveMap)),
      void 0 !== e.emissiveIntensity &&
        (n.emissiveIntensity = e.emissiveIntensity),
      void 0 !== e.specularMap && (n.specularMap = r(e.specularMap)),
      void 0 !== e.specularIntensityMap &&
        (n.specularIntensityMap = r(e.specularIntensityMap)),
      void 0 !== e.specularColorMap &&
        (n.specularColorMap = r(e.specularColorMap)),
      void 0 !== e.envMap && (n.envMap = r(e.envMap)),
      void 0 !== e.envMapIntensity && (n.envMapIntensity = e.envMapIntensity),
      void 0 !== e.reflectivity && (n.reflectivity = e.reflectivity),
      void 0 !== e.refractionRatio && (n.refractionRatio = e.refractionRatio),
      void 0 !== e.lightMap && (n.lightMap = r(e.lightMap)),
      void 0 !== e.lightMapIntensity &&
        (n.lightMapIntensity = e.lightMapIntensity),
      void 0 !== e.aoMap && (n.aoMap = r(e.aoMap)),
      void 0 !== e.aoMapIntensity && (n.aoMapIntensity = e.aoMapIntensity),
      void 0 !== e.gradientMap && (n.gradientMap = r(e.gradientMap)),
      void 0 !== e.clearcoatMap && (n.clearcoatMap = r(e.clearcoatMap)),
      void 0 !== e.clearcoatRoughnessMap &&
        (n.clearcoatRoughnessMap = r(e.clearcoatRoughnessMap)),
      void 0 !== e.clearcoatNormalMap &&
        (n.clearcoatNormalMap = r(e.clearcoatNormalMap)),
      void 0 !== e.clearcoatNormalScale &&
        (n.clearcoatNormalScale = new Vector2().fromArray(
          e.clearcoatNormalScale
        )),
      void 0 !== e.transmissionMap &&
        (n.transmissionMap = r(e.transmissionMap)),
      void 0 !== e.thicknessMap && (n.thicknessMap = r(e.thicknessMap)),
      void 0 !== e.sheenColorMap && (n.sheenColorMap = r(e.sheenColorMap)),
      void 0 !== e.sheenRoughnessMap &&
        (n.sheenRoughnessMap = r(e.sheenRoughnessMap)),
      n
    );
  }
  setTextures(e) {
    return (this.textures = e), this;
  }
}
class LoaderUtils {
  static decodeText(e) {
    if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(e);
    let t = "";
    for (let r = 0, n = e.length; r < n; r++) t += String.fromCharCode(e[r]);
    try {
      return decodeURIComponent(escape(t));
    } catch (a) {
      return t;
    }
  }
  static extractUrlBase(e) {
    let t = e.lastIndexOf("/");
    return -1 === t ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return "string" != typeof e || "" === e
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
          /^data:.*,.*$/i.test(e) ||
          /^blob:.*$/i.test(e))
      ? e
      : t + e;
  }
}
class InstancedBufferGeometry extends BufferGeometry {
  constructor() {
    super(),
      (this.type = "InstancedBufferGeometry"),
      (this.instanceCount = 1 / 0);
  }
  copy(e) {
    return super.copy(e), (this.instanceCount = e.instanceCount), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    let e = super.toJSON(this);
    return (
      (e.instanceCount = this.instanceCount),
      (e.isInstancedBufferGeometry = !0),
      e
    );
  }
}
InstancedBufferGeometry.prototype.isInstancedBufferGeometry = !0;
class BufferGeometryLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    let a = this,
      s = new FileLoader(a.manager);
    s.setPath(a.path),
      s.setRequestHeader(a.requestHeader),
      s.setWithCredentials(a.withCredentials),
      s.load(
        e,
        function (r) {
          try {
            t(a.parse(JSON.parse(r)));
          } catch (s) {
            n ? n(s) : console.error(s), a.manager.itemError(e);
          }
        },
        r,
        n
      );
  }
  parse(e) {
    let t = {},
      r = {};
    function n(e, n) {
      if (void 0 !== t[n]) return t[n];
      let a = e.interleavedBuffers,
        s = a[n],
        o = (function e(t, n) {
          if (void 0 !== r[n]) return r[n];
          let a = t.arrayBuffers,
            s = a[n],
            o = new Uint32Array(s).buffer;
          return (r[n] = o), o;
        })(e, s.buffer),
        l = getTypedArray(s.type, o),
        c = new InterleavedBuffer(l, s.stride);
      return (c.uuid = s.uuid), (t[n] = c), c;
    }
    let a = e.isInstancedBufferGeometry
        ? new InstancedBufferGeometry()
        : new BufferGeometry(),
      s = e.data.index;
    if (void 0 !== s) {
      let o = getTypedArray(s.type, s.array);
      a.setIndex(new BufferAttribute(o, 1));
    }
    let l = e.data.attributes;
    for (let c in l) {
      let u = l[c],
        h;
      if (u.isInterleavedBufferAttribute) {
        let d = n(e.data, u.data);
        h = new InterleavedBufferAttribute(
          d,
          u.itemSize,
          u.offset,
          u.normalized
        );
      } else {
        let p = getTypedArray(u.type, u.array),
          m = u.isInstancedBufferAttribute
            ? InstancedBufferAttribute
            : BufferAttribute;
        h = new m(p, u.itemSize, u.normalized);
      }
      void 0 !== u.name && (h.name = u.name),
        void 0 !== u.usage && h.setUsage(u.usage),
        void 0 !== u.updateRange &&
          ((h.updateRange.offset = u.updateRange.offset),
          (h.updateRange.count = u.updateRange.count)),
        a.setAttribute(c, h);
    }
    let f = e.data.morphAttributes;
    if (f)
      for (let g in f) {
        let $ = f[g],
          v = [];
        for (let x = 0, y = $.length; x < y; x++) {
          let b = $[x],
            _;
          if (b.isInterleavedBufferAttribute) {
            let S = n(e.data, b.data);
            _ = new InterleavedBufferAttribute(
              S,
              b.itemSize,
              b.offset,
              b.normalized
            );
          } else {
            let M = getTypedArray(b.type, b.array);
            _ = new BufferAttribute(M, b.itemSize, b.normalized);
          }
          void 0 !== b.name && (_.name = b.name), v.push(_);
        }
        a.morphAttributes[g] = v;
      }
    let w = e.data.morphTargetsRelative;
    w && (a.morphTargetsRelative = !0);
    let T = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (void 0 !== T)
      for (let A = 0, C = T.length; A !== C; ++A) {
        let L = T[A];
        a.addGroup(L.start, L.count, L.materialIndex);
      }
    let E = e.data.boundingSphere;
    if (void 0 !== E) {
      let P = new Vector3();
      void 0 !== E.center && P.fromArray(E.center),
        (a.boundingSphere = new Sphere(P, E.radius));
    }
    return (
      e.name && (a.name = e.name), e.userData && (a.userData = e.userData), a
    );
  }
}
class ObjectLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    let a = this,
      s = "" === this.path ? LoaderUtils.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || s;
    let o = new FileLoader(this.manager);
    o.setPath(this.path),
      o.setRequestHeader(this.requestHeader),
      o.setWithCredentials(this.withCredentials),
      o.load(
        e,
        function (r) {
          let s = null;
          try {
            s = JSON.parse(r);
          } catch (o) {
            void 0 !== n && n(o),
              console.error(
                "THREE:ObjectLoader: Can't parse " + e + ".",
                o.message
              );
            return;
          }
          let l = s.metadata;
          if (
            void 0 === l ||
            void 0 === l.type ||
            "geometry" === l.type.toLowerCase()
          ) {
            console.error("THREE.ObjectLoader: Can't load " + e);
            return;
          }
          a.parse(s, t);
        },
        r,
        n
      );
  }
  async loadAsync(e, t) {
    let r = "" === this.path ? LoaderUtils.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || r;
    let n = new FileLoader(this.manager);
    n.setPath(this.path),
      n.setRequestHeader(this.requestHeader),
      n.setWithCredentials(this.withCredentials);
    let a = await n.loadAsync(e, t),
      s = JSON.parse(a),
      o = s.metadata;
    if (
      void 0 === o ||
      void 0 === o.type ||
      "geometry" === o.type.toLowerCase()
    )
      throw Error("THREE.ObjectLoader: Can't load " + e);
    return await this.parseAsync(s);
  }
  parse(e, t) {
    let r = this.parseAnimations(e.animations),
      n = this.parseShapes(e.shapes),
      a = this.parseGeometries(e.geometries, n),
      s = this.parseImages(e.images, function () {
        void 0 !== t && t(c);
      }),
      o = this.parseTextures(e.textures, s),
      l = this.parseMaterials(e.materials, o),
      c = this.parseObject(e.object, a, l, o, r),
      u = this.parseSkeletons(e.skeletons, c);
    if ((this.bindSkeletons(c, u), void 0 !== t)) {
      let h = !1;
      for (let d in s)
        if (s[d] instanceof HTMLImageElement) {
          h = !0;
          break;
        }
      !1 === h && t(c);
    }
    return c;
  }
  async parseAsync(e) {
    let t = this.parseAnimations(e.animations),
      r = this.parseShapes(e.shapes),
      n = this.parseGeometries(e.geometries, r),
      a = await this.parseImagesAsync(e.images),
      s = this.parseTextures(e.textures, a),
      o = this.parseMaterials(e.materials, s),
      l = this.parseObject(e.object, n, o, s, t),
      c = this.parseSkeletons(e.skeletons, l);
    return this.bindSkeletons(l, c), l;
  }
  parseShapes(e) {
    let t = {};
    if (void 0 !== e)
      for (let r = 0, n = e.length; r < n; r++) {
        let a = new Shape().fromJSON(e[r]);
        t[a.uuid] = a;
      }
    return t;
  }
  parseSkeletons(e, t) {
    let r = {},
      n = {};
    if (
      (t.traverse(function (e) {
        e.isBone && (n[e.uuid] = e);
      }),
      void 0 !== e)
    )
      for (let a = 0, s = e.length; a < s; a++) {
        let o = new Skeleton().fromJSON(e[a], n);
        r[o.uuid] = o;
      }
    return r;
  }
  parseGeometries(e, t) {
    let r = {};
    if (void 0 !== e) {
      let n = new BufferGeometryLoader();
      for (let a = 0, s = e.length; a < s; a++) {
        let o,
          l = e[a];
        switch (l.type) {
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            o = n.parse(l);
            break;
          case "Geometry":
            console.error(
              "THREE.ObjectLoader: The legacy Geometry type is no longer supported."
            );
            break;
          default:
            l.type in Geometries
              ? (o = Geometries[l.type].fromJSON(l, t))
              : console.warn(
                  `THREE.ObjectLoader: Unsupported geometry type "${l.type}"`
                );
        }
        (o.uuid = l.uuid),
          void 0 !== l.name && (o.name = l.name),
          !0 === o.isBufferGeometry &&
            void 0 !== l.userData &&
            (o.userData = l.userData),
          (r[l.uuid] = o);
      }
    }
    return r;
  }
  parseMaterials(e, t) {
    let r = {},
      n = {};
    if (void 0 !== e) {
      let a = new MaterialLoader();
      a.setTextures(t);
      for (let s = 0, o = e.length; s < o; s++) {
        let l = e[s];
        if ("MultiMaterial" === l.type) {
          let c = [];
          for (let u = 0; u < l.materials.length; u++) {
            let h = l.materials[u];
            void 0 === r[h.uuid] && (r[h.uuid] = a.parse(h)), c.push(r[h.uuid]);
          }
          n[l.uuid] = c;
        } else
          void 0 === r[l.uuid] && (r[l.uuid] = a.parse(l)),
            (n[l.uuid] = r[l.uuid]);
      }
    }
    return n;
  }
  parseAnimations(e) {
    let t = {};
    if (void 0 !== e)
      for (let r = 0; r < e.length; r++) {
        let n = e[r],
          a = AnimationClip.parse(n);
        t[a.uuid] = a;
      }
    return t;
  }
  parseImages(e, t) {
    let r = this,
      n = {},
      a;
    function s(e) {
      if ("string" == typeof e) {
        var t;
        let n = e,
          s = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(n) ? n : r.resourcePath + n;
        return (
          (t = s),
          r.manager.itemStart(t),
          a.load(
            t,
            function () {
              r.manager.itemEnd(t);
            },
            void 0,
            function () {
              r.manager.itemError(t), r.manager.itemEnd(t);
            }
          )
        );
      }
      return e.data
        ? {
            data: getTypedArray(e.type, e.data),
            width: e.width,
            height: e.height,
          }
        : null;
    }
    if (void 0 !== e && e.length > 0) {
      let o = new LoadingManager(t);
      (a = new ImageLoader(o)).setCrossOrigin(this.crossOrigin);
      for (let l = 0, c = e.length; l < c; l++) {
        let u = e[l],
          h = u.url;
        if (Array.isArray(h)) {
          let d = [];
          for (let p = 0, m = h.length; p < m; p++) {
            let f = h[p],
              g = s(f);
            null !== g &&
              (g instanceof HTMLImageElement
                ? d.push(g)
                : d.push(new DataTexture(g.data, g.width, g.height)));
          }
          n[u.uuid] = new Source(d);
        } else {
          let $ = s(u.url);
          n[u.uuid] = new Source($);
        }
      }
    }
    return n;
  }
  async parseImagesAsync(e) {
    let t = this,
      r = {},
      n;
    async function a(e) {
      if ("string" == typeof e) {
        let r = e,
          a = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(r) ? r : t.resourcePath + r;
        return await n.loadAsync(a);
      }
      return e.data
        ? {
            data: getTypedArray(e.type, e.data),
            width: e.width,
            height: e.height,
          }
        : null;
    }
    if (void 0 !== e && e.length > 0) {
      (n = new ImageLoader(this.manager)).setCrossOrigin(this.crossOrigin);
      for (let s = 0, o = e.length; s < o; s++) {
        let l = e[s],
          c = l.url;
        if (Array.isArray(c)) {
          let u = [];
          for (let h = 0, d = c.length; h < d; h++) {
            let p = c[h],
              m = await a(p);
            null !== m &&
              (m instanceof HTMLImageElement
                ? u.push(m)
                : u.push(new DataTexture(m.data, m.width, m.height)));
          }
          r[l.uuid] = new Source(u);
        } else {
          let f = await a(l.url);
          r[l.uuid] = new Source(f);
        }
      }
    }
    return r;
  }
  parseTextures(e, t) {
    function r(e, t) {
      return "number" == typeof e
        ? e
        : (console.warn(
            "THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",
            e
          ),
          t[e]);
    }
    let n = {};
    if (void 0 !== e)
      for (let a = 0, s = e.length; a < s; a++) {
        let o = e[a];
        void 0 === o.image &&
          console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid),
          void 0 === t[o.image] &&
            console.warn("THREE.ObjectLoader: Undefined image", o.image);
        let l = t[o.image],
          c = l.data,
          u;
        Array.isArray(c)
          ? ((u = new CubeTexture()), 6 === c.length && (u.needsUpdate = !0))
          : ((u = c && c.data ? new DataTexture() : new Texture()),
            c && (u.needsUpdate = !0)),
          (u.source = l),
          (u.uuid = o.uuid),
          void 0 !== o.name && (u.name = o.name),
          void 0 !== o.mapping && (u.mapping = r(o.mapping, TEXTURE_MAPPING)),
          void 0 !== o.offset && u.offset.fromArray(o.offset),
          void 0 !== o.repeat && u.repeat.fromArray(o.repeat),
          void 0 !== o.center && u.center.fromArray(o.center),
          void 0 !== o.rotation && (u.rotation = o.rotation),
          void 0 !== o.wrap &&
            ((u.wrapS = r(o.wrap[0], TEXTURE_WRAPPING)),
            (u.wrapT = r(o.wrap[1], TEXTURE_WRAPPING))),
          void 0 !== o.format && (u.format = o.format),
          void 0 !== o.type && (u.type = o.type),
          void 0 !== o.encoding && (u.encoding = o.encoding),
          void 0 !== o.minFilter &&
            (u.minFilter = r(o.minFilter, TEXTURE_FILTER)),
          void 0 !== o.magFilter &&
            (u.magFilter = r(o.magFilter, TEXTURE_FILTER)),
          void 0 !== o.anisotropy && (u.anisotropy = o.anisotropy),
          void 0 !== o.flipY && (u.flipY = o.flipY),
          void 0 !== o.premultiplyAlpha &&
            (u.premultiplyAlpha = o.premultiplyAlpha),
          void 0 !== o.unpackAlignment &&
            (u.unpackAlignment = o.unpackAlignment),
          void 0 !== o.userData && (u.userData = o.userData),
          (n[o.uuid] = u);
      }
    return n;
  }
  parseObject(e, t, r, n, a) {
    let s;
    function o(e) {
      return (
        void 0 === t[e] &&
          console.warn("THREE.ObjectLoader: Undefined geometry", e),
        t[e]
      );
    }
    function l(e) {
      if (void 0 !== e) {
        if (Array.isArray(e)) {
          let t = [];
          for (let n = 0, a = e.length; n < a; n++) {
            let s = e[n];
            void 0 === r[s] &&
              console.warn("THREE.ObjectLoader: Undefined material", s),
              t.push(r[s]);
          }
          return t;
        }
        return (
          void 0 === r[e] &&
            console.warn("THREE.ObjectLoader: Undefined material", e),
          r[e]
        );
      }
    }
    function c(e) {
      return (
        void 0 === n[e] &&
          console.warn("THREE.ObjectLoader: Undefined texture", e),
        n[e]
      );
    }
    let u, h;
    switch (e.type) {
      case "Scene":
        (s = new Scene()),
          void 0 !== e.background &&
            (Number.isInteger(e.background)
              ? (s.background = new Color(e.background))
              : (s.background = c(e.background))),
          void 0 !== e.environment && (s.environment = c(e.environment)),
          void 0 !== e.fog &&
            ("Fog" === e.fog.type
              ? (s.fog = new Fog(e.fog.color, e.fog.near, e.fog.far))
              : "FogExp2" === e.fog.type &&
                (s.fog = new FogExp2(e.fog.color, e.fog.density)));
        break;
      case "PerspectiveCamera":
        (s = new PerspectiveCamera(e.fov, e.aspect, e.near, e.far)),
          void 0 !== e.focus && (s.focus = e.focus),
          void 0 !== e.zoom && (s.zoom = e.zoom),
          void 0 !== e.filmGauge && (s.filmGauge = e.filmGauge),
          void 0 !== e.filmOffset && (s.filmOffset = e.filmOffset),
          void 0 !== e.view && (s.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        (s = new OrthographicCamera(
          e.left,
          e.right,
          e.top,
          e.bottom,
          e.near,
          e.far
        )),
          void 0 !== e.zoom && (s.zoom = e.zoom),
          void 0 !== e.view && (s.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        s = new AmbientLight(e.color, e.intensity);
        break;
      case "DirectionalLight":
        s = new DirectionalLight(e.color, e.intensity);
        break;
      case "PointLight":
        s = new PointLight(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        s = new RectAreaLight(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        s = new SpotLight(
          e.color,
          e.intensity,
          e.distance,
          e.angle,
          e.penumbra,
          e.decay
        );
        break;
      case "HemisphereLight":
        s = new HemisphereLight(e.color, e.groundColor, e.intensity);
        break;
      case "LightProbe":
        s = new LightProbe().fromJSON(e);
        break;
      case "SkinnedMesh":
        (u = o(e.geometry)),
          (h = l(e.material)),
          (s = new SkinnedMesh(u, h)),
          void 0 !== e.bindMode && (s.bindMode = e.bindMode),
          void 0 !== e.bindMatrix && s.bindMatrix.fromArray(e.bindMatrix),
          void 0 !== e.skeleton && (s.skeleton = e.skeleton);
        break;
      case "Mesh":
        (u = o(e.geometry)), (h = l(e.material)), (s = new Mesh(u, h));
        break;
      case "InstancedMesh":
        (u = o(e.geometry)), (h = l(e.material));
        let d = e.count,
          p = e.instanceMatrix,
          m = e.instanceColor;
        ((s = new InstancedMesh(u, h, d)).instanceMatrix =
          new InstancedBufferAttribute(new Float32Array(p.array), 16)),
          void 0 !== m &&
            (s.instanceColor = new InstancedBufferAttribute(
              new Float32Array(m.array),
              m.itemSize
            ));
        break;
      case "LOD":
        s = new LOD();
        break;
      case "Line":
        s = new Line(o(e.geometry), l(e.material));
        break;
      case "LineLoop":
        s = new LineLoop(o(e.geometry), l(e.material));
        break;
      case "LineSegments":
        s = new LineSegments(o(e.geometry), l(e.material));
        break;
      case "PointCloud":
      case "Points":
        s = new Points(o(e.geometry), l(e.material));
        break;
      case "Sprite":
        s = new Sprite(l(e.material));
        break;
      case "Group":
        s = new Group();
        break;
      case "Bone":
        s = new Bone();
        break;
      default:
        s = new Object3D();
    }
    if (
      ((s.uuid = e.uuid),
      void 0 !== e.name && (s.name = e.name),
      void 0 !== e.matrix
        ? (s.matrix.fromArray(e.matrix),
          void 0 !== e.matrixAutoUpdate &&
            (s.matrixAutoUpdate = e.matrixAutoUpdate),
          s.matrixAutoUpdate &&
            s.matrix.decompose(s.position, s.quaternion, s.scale))
        : (void 0 !== e.position && s.position.fromArray(e.position),
          void 0 !== e.rotation && s.rotation.fromArray(e.rotation),
          void 0 !== e.quaternion && s.quaternion.fromArray(e.quaternion),
          void 0 !== e.scale && s.scale.fromArray(e.scale)),
      void 0 !== e.castShadow && (s.castShadow = e.castShadow),
      void 0 !== e.receiveShadow && (s.receiveShadow = e.receiveShadow),
      e.shadow &&
        (void 0 !== e.shadow.bias && (s.shadow.bias = e.shadow.bias),
        void 0 !== e.shadow.normalBias &&
          (s.shadow.normalBias = e.shadow.normalBias),
        void 0 !== e.shadow.radius && (s.shadow.radius = e.shadow.radius),
        void 0 !== e.shadow.mapSize &&
          s.shadow.mapSize.fromArray(e.shadow.mapSize),
        void 0 !== e.shadow.camera &&
          (s.shadow.camera = this.parseObject(e.shadow.camera))),
      void 0 !== e.visible && (s.visible = e.visible),
      void 0 !== e.frustumCulled && (s.frustumCulled = e.frustumCulled),
      void 0 !== e.renderOrder && (s.renderOrder = e.renderOrder),
      void 0 !== e.userData && (s.userData = e.userData),
      void 0 !== e.layers && (s.layers.mask = e.layers),
      void 0 !== e.children)
    ) {
      let f = e.children;
      for (let g = 0; g < f.length; g++)
        s.add(this.parseObject(f[g], t, r, n, a));
    }
    if (void 0 !== e.animations) {
      let $ = e.animations;
      for (let v = 0; v < $.length; v++) {
        let x = $[v];
        s.animations.push(a[x]);
      }
    }
    if ("LOD" === e.type) {
      void 0 !== e.autoUpdate && (s.autoUpdate = e.autoUpdate);
      let y = e.levels;
      for (let b = 0; b < y.length; b++) {
        let _ = y[b],
          S = s.getObjectByProperty("uuid", _.object);
        void 0 !== S && s.addLevel(S, _.distance);
      }
    }
    return s;
  }
  bindSkeletons(e, t) {
    0 !== Object.keys(t).length &&
      e.traverse(function (e) {
        if (!0 === e.isSkinnedMesh && void 0 !== e.skeleton) {
          let r = t[e.skeleton];
          void 0 === r
            ? console.warn(
                "THREE.ObjectLoader: No skeleton found with UUID:",
                e.skeleton
              )
            : e.bind(r, e.bindMatrix);
        }
      });
  }
  setTexturePath(e) {
    return (
      console.warn(
        "THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."
      ),
      this.setResourcePath(e)
    );
  }
}
let TEXTURE_MAPPING = {
    UVMapping: UVMapping,
    CubeReflectionMapping: CubeReflectionMapping,
    CubeRefractionMapping: CubeRefractionMapping,
    EquirectangularReflectionMapping: EquirectangularReflectionMapping,
    EquirectangularRefractionMapping: EquirectangularRefractionMapping,
    CubeUVReflectionMapping: CubeUVReflectionMapping,
  },
  TEXTURE_WRAPPING = {
    RepeatWrapping: RepeatWrapping,
    ClampToEdgeWrapping: ClampToEdgeWrapping,
    MirroredRepeatWrapping: MirroredRepeatWrapping,
  },
  TEXTURE_FILTER = {
    NearestFilter: NearestFilter,
    NearestMipmapNearestFilter: NearestMipmapNearestFilter,
    NearestMipmapLinearFilter: NearestMipmapLinearFilter,
    LinearFilter: LinearFilter,
    LinearMipmapNearestFilter: LinearMipmapNearestFilter,
    LinearMipmapLinearFilter: LinearMipmapLinearFilter,
  };
class ImageBitmapLoader extends Loader {
  constructor(e) {
    super(e),
      "undefined" == typeof createImageBitmap &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported."
        ),
      "undefined" == typeof fetch &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" });
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, r, n) {
    void 0 === e && (e = ""),
      void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    let a = this,
      s = Cache.get(e);
    if (void 0 !== s)
      return (
        a.manager.itemStart(e),
        setTimeout(function () {
          t && t(s), a.manager.itemEnd(e);
        }, 0),
        s
      );
    let o = {};
    (o.credentials =
      "anonymous" === this.crossOrigin ? "same-origin" : "include"),
      (o.headers = this.requestHeader),
      fetch(e, o)
        .then(function (e) {
          return e.blob();
        })
        .then(function (e) {
          return createImageBitmap(
            e,
            Object.assign(a.options, { colorSpaceConversion: "none" })
          );
        })
        .then(function (r) {
          Cache.add(e, r), t && t(r), a.manager.itemEnd(e);
        })
        .catch(function (t) {
          n && n(t), a.manager.itemError(e), a.manager.itemEnd(e);
        }),
      a.manager.itemStart(e);
  }
}
ImageBitmapLoader.prototype.isImageBitmapLoader = !0;
let _context,
  AudioContext = {
    getContext: function () {
      return (
        void 0 === _context &&
          (_context = new (window.AudioContext || window.webkitAudioContext)()),
        _context
      );
    },
    setContext: function (e) {
      _context = e;
    },
  };
class AudioLoader extends Loader {
  constructor(e) {
    super(e);
  }
  load(e, t, r, n) {
    let a = this,
      s = new FileLoader(this.manager);
    s.setResponseType("arraybuffer"),
      s.setPath(this.path),
      s.setRequestHeader(this.requestHeader),
      s.setWithCredentials(this.withCredentials),
      s.load(
        e,
        function (r) {
          try {
            let s = r.slice(0),
              o = AudioContext.getContext();
            o.decodeAudioData(s, function (e) {
              t(e);
            });
          } catch (l) {
            n ? n(l) : console.error(l), a.manager.itemError(e);
          }
        },
        r,
        n
      );
  }
}
class HemisphereLightProbe extends LightProbe {
  constructor(e, t, r = 1) {
    super(void 0, r);
    let n = new Color().set(e),
      a = new Color().set(t),
      s = new Vector3(n.r, n.g, n.b),
      o = new Vector3(a.r, a.g, a.b),
      l = Math.sqrt(Math.PI),
      c = l * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(s).add(o).multiplyScalar(l),
      this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c);
  }
}
HemisphereLightProbe.prototype.isHemisphereLightProbe = !0;
class AmbientLightProbe extends LightProbe {
  constructor(e, t = 1) {
    super(void 0, t);
    let r = new Color().set(e);
    this.sh.coefficients[0]
      .set(r.r, r.g, r.b)
      .multiplyScalar(2 * Math.sqrt(Math.PI));
  }
}
AmbientLightProbe.prototype.isAmbientLightProbe = !0;
let _eyeRight = new Matrix4(),
  _eyeLeft = new Matrix4(),
  _projectionMatrix = new Matrix4();
class StereoCamera {
  constructor() {
    (this.type = "StereoCamera"),
      (this.aspect = 1),
      (this.eyeSep = 0.064),
      (this.cameraL = new PerspectiveCamera()),
      this.cameraL.layers.enable(1),
      (this.cameraL.matrixAutoUpdate = !1),
      (this.cameraR = new PerspectiveCamera()),
      this.cameraR.layers.enable(2),
      (this.cameraR.matrixAutoUpdate = !1),
      (this._cache = {
        focus: null,
        fov: null,
        aspect: null,
        near: null,
        far: null,
        zoom: null,
        eyeSep: null,
      });
  }
  update(e) {
    let t = this._cache,
      r =
        t.focus !== e.focus ||
        t.fov !== e.fov ||
        t.aspect !== e.aspect * this.aspect ||
        t.near !== e.near ||
        t.far !== e.far ||
        t.zoom !== e.zoom ||
        t.eyeSep !== this.eyeSep;
    if (r) {
      (t.focus = e.focus),
        (t.fov = e.fov),
        (t.aspect = e.aspect * this.aspect),
        (t.near = e.near),
        (t.far = e.far),
        (t.zoom = e.zoom),
        (t.eyeSep = this.eyeSep),
        _projectionMatrix.copy(e.projectionMatrix);
      let n = t.eyeSep / 2,
        a = (n * t.near) / t.focus,
        s = (t.near * Math.tan(DEG2RAD * t.fov * 0.5)) / t.zoom,
        o,
        l;
      (_eyeLeft.elements[12] = -n),
        (_eyeRight.elements[12] = n),
        (o = -s * t.aspect + a),
        (l = s * t.aspect + a),
        (_projectionMatrix.elements[0] = (2 * t.near) / (l - o)),
        (_projectionMatrix.elements[8] = (l + o) / (l - o)),
        this.cameraL.projectionMatrix.copy(_projectionMatrix),
        (o = -s * t.aspect - a),
        (l = s * t.aspect - a),
        (_projectionMatrix.elements[0] = (2 * t.near) / (l - o)),
        (_projectionMatrix.elements[8] = (l + o) / (l - o)),
        this.cameraR.projectionMatrix.copy(_projectionMatrix);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(_eyeLeft),
      this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(_eyeRight);
  }
}
class Clock {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = now()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      let t = now();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function now() {
  return ("undefined" == typeof performance ? Date : performance).now();
}
let _position$1 = new Vector3(),
  _quaternion$1 = new Quaternion(),
  _scale$1 = new Vector3(),
  _orientation$1 = new Vector3();
class AudioListener extends Object3D {
  constructor() {
    super(),
      (this.type = "AudioListener"),
      (this.context = AudioContext.getContext()),
      (this.gain = this.context.createGain()),
      this.gain.connect(this.context.destination),
      (this.filter = null),
      (this.timeDelta = 0),
      (this._clock = new Clock());
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return (
      null !== this.filter &&
        (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination),
        this.gain.connect(this.context.destination),
        (this.filter = null)),
      this
    );
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return (
      null !== this.filter
        ? (this.gain.disconnect(this.filter),
          this.filter.disconnect(this.context.destination))
        : this.gain.disconnect(this.context.destination),
      (this.filter = e),
      this.gain.connect(this.filter),
      this.filter.connect(this.context.destination),
      this
    );
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    let t = this.context.listener,
      r = this.up;
    if (
      ((this.timeDelta = this._clock.getDelta()),
      this.matrixWorld.decompose(_position$1, _quaternion$1, _scale$1),
      _orientation$1.set(0, 0, -1).applyQuaternion(_quaternion$1),
      t.positionX)
    ) {
      let n = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(_position$1.x, n),
        t.positionY.linearRampToValueAtTime(_position$1.y, n),
        t.positionZ.linearRampToValueAtTime(_position$1.z, n),
        t.forwardX.linearRampToValueAtTime(_orientation$1.x, n),
        t.forwardY.linearRampToValueAtTime(_orientation$1.y, n),
        t.forwardZ.linearRampToValueAtTime(_orientation$1.z, n),
        t.upX.linearRampToValueAtTime(r.x, n),
        t.upY.linearRampToValueAtTime(r.y, n),
        t.upZ.linearRampToValueAtTime(r.z, n);
    } else
      t.setPosition(_position$1.x, _position$1.y, _position$1.z),
        t.setOrientation(
          _orientation$1.x,
          _orientation$1.y,
          _orientation$1.z,
          r.x,
          r.y,
          r.z
        );
  }
}
class Audio extends Object3D {
  constructor(e) {
    super(),
      (this.type = "Audio"),
      (this.listener = e),
      (this.context = e.context),
      (this.gain = this.context.createGain()),
      this.gain.connect(e.getInput()),
      (this.autoplay = !1),
      (this.buffer = null),
      (this.detune = 0),
      (this.loop = !1),
      (this.loopStart = 0),
      (this.loopEnd = 0),
      (this.offset = 0),
      (this.duration = void 0),
      (this.playbackRate = 1),
      (this.isPlaying = !1),
      (this.hasPlaybackControl = !0),
      (this.source = null),
      (this.sourceType = "empty"),
      (this._startedAt = 0),
      (this._progress = 0),
      (this._connected = !1),
      (this.filters = []);
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "audioNode"),
      (this.source = e),
      this.connect(),
      this
    );
  }
  setMediaElementSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaNode"),
      (this.source = this.context.createMediaElementSource(e)),
      this.connect(),
      this
    );
  }
  setMediaStreamSource(e) {
    return (
      (this.hasPlaybackControl = !1),
      (this.sourceType = "mediaStreamNode"),
      (this.source = this.context.createMediaStreamSource(e)),
      this.connect(),
      this
    );
  }
  setBuffer(e) {
    return (
      (this.buffer = e),
      (this.sourceType = "buffer"),
      this.autoplay && this.play(),
      this
    );
  }
  play(e = 0) {
    if (!0 === this.isPlaying) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (!1 === this.hasPlaybackControl) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    let t = this.context.createBufferSource();
    return (
      (t.buffer = this.buffer),
      (t.loop = this.loop),
      (t.loopStart = this.loopStart),
      (t.loopEnd = this.loopEnd),
      (t.onended = this.onEnded.bind(this)),
      t.start(this._startedAt, this._progress + this.offset, this.duration),
      (this.isPlaying = !0),
      (this.source = t),
      this.setDetune(this.detune),
      this.setPlaybackRate(this.playbackRate),
      this.connect()
    );
  }
  pause() {
    if (!1 === this.hasPlaybackControl) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      !0 === this.isPlaying &&
        ((this._progress +=
          Math.max(this.context.currentTime - this._startedAt, 0) *
          this.playbackRate),
        !0 === this.loop &&
          (this._progress =
            this._progress % (this.duration || this.buffer.duration)),
        this.source.stop(),
        (this.source.onended = null),
        (this.isPlaying = !1)),
      this
    );
  }
  stop() {
    if (!1 === this.hasPlaybackControl) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this._progress = 0),
      this.source.stop(),
      (this.source.onended = null),
      (this.isPlaying = !1),
      this
    );
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return (this._connected = !0), this;
  }
  disconnect() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].disconnect(this.filters[e]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else this.source.disconnect(this.getOutput());
    return (this._connected = !1), this;
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return (
      e || (e = []),
      !0 === this._connected
        ? (this.disconnect(), (this.filters = e.slice()), this.connect())
        : (this.filters = e.slice()),
      this
    );
  }
  setDetune(e) {
    if (((this.detune = e), void 0 !== this.source.detune))
      return (
        !0 === this.isPlaying &&
          this.source.detune.setTargetAtTime(
            this.detune,
            this.context.currentTime,
            0.01
          ),
        this
      );
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (!1 === this.hasPlaybackControl) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.playbackRate = e),
      !0 === this.isPlaying &&
        this.source.playbackRate.setTargetAtTime(
          this.playbackRate,
          this.context.currentTime,
          0.01
        ),
      this
    );
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return !1 === this.hasPlaybackControl
      ? (console.warn("THREE.Audio: this Audio has no playback control."), !1)
      : this.loop;
  }
  setLoop(e) {
    if (!1 === this.hasPlaybackControl) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return (
      (this.loop = e),
      !0 === this.isPlaying && (this.source.loop = this.loop),
      this
    );
  }
  setLoopStart(e) {
    return (this.loopStart = e), this;
  }
  setLoopEnd(e) {
    return (this.loopEnd = e), this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return (
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this
    );
  }
}
let _position = new Vector3(),
  _quaternion = new Quaternion(),
  _scale = new Vector3(),
  _orientation = new Vector3();
class PositionalAudio extends Audio {
  constructor(e) {
    super(e),
      (this.panner = this.context.createPanner()),
      (this.panner.panningModel = "HRTF"),
      this.panner.connect(this.gain);
  }
  disconnect() {
    super.disconnect(), this.panner.disconnect(this.gain);
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(e) {
    return (this.panner.refDistance = e), this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(e) {
    return (this.panner.rolloffFactor = e), this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(e) {
    return (this.panner.distanceModel = e), this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(e) {
    return (this.panner.maxDistance = e), this;
  }
  setDirectionalCone(e, t, r) {
    return (
      (this.panner.coneInnerAngle = e),
      (this.panner.coneOuterAngle = t),
      (this.panner.coneOuterGain = r),
      this
    );
  }
  updateMatrixWorld(e) {
    if (
      (super.updateMatrixWorld(e),
      !0 === this.hasPlaybackControl && !1 === this.isPlaying)
    )
      return;
    this.matrixWorld.decompose(_position, _quaternion, _scale),
      _orientation.set(0, 0, 1).applyQuaternion(_quaternion);
    let t = this.panner;
    if (t.positionX) {
      let r = this.context.currentTime + this.listener.timeDelta;
      t.positionX.linearRampToValueAtTime(_position.x, r),
        t.positionY.linearRampToValueAtTime(_position.y, r),
        t.positionZ.linearRampToValueAtTime(_position.z, r),
        t.orientationX.linearRampToValueAtTime(_orientation.x, r),
        t.orientationY.linearRampToValueAtTime(_orientation.y, r),
        t.orientationZ.linearRampToValueAtTime(_orientation.z, r);
    } else
      t.setPosition(_position.x, _position.y, _position.z),
        t.setOrientation(_orientation.x, _orientation.y, _orientation.z);
  }
}
class AudioAnalyser {
  constructor(e, t = 2048) {
    (this.analyser = e.context.createAnalyser()),
      (this.analyser.fftSize = t),
      (this.data = new Uint8Array(this.analyser.frequencyBinCount)),
      e.getOutput().connect(this.analyser);
  }
  getFrequencyData() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  }
  getAverageFrequency() {
    let e = 0,
      t = this.getFrequencyData();
    for (let r = 0; r < t.length; r++) e += t[r];
    return e / t.length;
  }
}
class PropertyMixer {
  constructor(e, t, r) {
    (this.binding = e), (this.valueSize = r);
    let n, a, s;
    switch (t) {
      case "quaternion":
        (n = this._slerp),
          (a = this._slerpAdditive),
          (s = this._setAdditiveIdentityQuaternion),
          (this.buffer = new Float64Array(6 * r)),
          (this._workIndex = 5);
        break;
      case "string":
      case "bool":
        (n = this._select),
          (a = this._select),
          (s = this._setAdditiveIdentityOther),
          (this.buffer = Array(5 * r));
        break;
      default:
        (n = this._lerp),
          (a = this._lerpAdditive),
          (s = this._setAdditiveIdentityNumeric),
          (this.buffer = new Float64Array(5 * r));
    }
    (this._mixBufferRegion = n),
      (this._mixBufferRegionAdditive = a),
      (this._setIdentity = s),
      (this._origIndex = 3),
      (this._addIndex = 4),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0),
      (this.useCount = 0),
      (this.referenceCount = 0);
  }
  accumulate(e, t) {
    let r = this.buffer,
      n = this.valueSize,
      a = e * n + n,
      s = this.cumulativeWeight;
    if (0 === s) {
      for (let o = 0; o !== n; ++o) r[a + o] = r[o];
      s = t;
    } else {
      s += t;
      let l = t / s;
      this._mixBufferRegion(r, a, 0, l, n);
    }
    this.cumulativeWeight = s;
  }
  accumulateAdditive(e) {
    let t = this.buffer,
      r = this.valueSize,
      n = r * this._addIndex;
    0 === this.cumulativeWeightAdditive && this._setIdentity(),
      this._mixBufferRegionAdditive(t, n, 0, e, r),
      (this.cumulativeWeightAdditive += e);
  }
  apply(e) {
    let t = this.valueSize,
      r = this.buffer,
      n = e * t + t,
      a = this.cumulativeWeight,
      s = this.cumulativeWeightAdditive,
      o = this.binding;
    if (
      ((this.cumulativeWeight = 0), (this.cumulativeWeightAdditive = 0), a < 1)
    ) {
      let l = t * this._origIndex;
      this._mixBufferRegion(r, n, l, 1 - a, t);
    }
    s > 0 && this._mixBufferRegionAdditive(r, n, this._addIndex * t, 1, t);
    for (let c = t, u = t + t; c !== u; ++c)
      if (r[c] !== r[c + t]) {
        o.setValue(r, n);
        break;
      }
  }
  saveOriginalState() {
    let e = this.binding,
      t = this.buffer,
      r = this.valueSize,
      n = r * this._origIndex;
    e.getValue(t, n);
    for (let a = r, s = n; a !== s; ++a) t[a] = t[n + (a % r)];
    this._setIdentity(),
      (this.cumulativeWeight = 0),
      (this.cumulativeWeightAdditive = 0);
  }
  restoreOriginalState() {
    let e = 3 * this.valueSize;
    this.binding.setValue(this.buffer, e);
  }
  _setAdditiveIdentityNumeric() {
    let e = this._addIndex * this.valueSize,
      t = e + this.valueSize;
    for (let r = e; r < t; r++) this.buffer[r] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(),
      (this.buffer[this._addIndex * this.valueSize + 3] = 1);
  }
  _setAdditiveIdentityOther() {
    let e = this._origIndex * this.valueSize,
      t = this._addIndex * this.valueSize;
    for (let r = 0; r < this.valueSize; r++)
      this.buffer[t + r] = this.buffer[e + r];
  }
  _select(e, t, r, n, a) {
    if (n >= 0.5) for (let s = 0; s !== a; ++s) e[t + s] = e[r + s];
  }
  _slerp(e, t, r, n) {
    Quaternion.slerpFlat(e, t, e, t, e, r, n);
  }
  _slerpAdditive(e, t, r, n, a) {
    let s = this._workIndex * a;
    Quaternion.multiplyQuaternionsFlat(e, s, e, t, e, r),
      Quaternion.slerpFlat(e, t, e, t, e, s, n);
  }
  _lerp(e, t, r, n, a) {
    let s = 1 - n;
    for (let o = 0; o !== a; ++o) {
      let l = t + o;
      e[l] = e[l] * s + e[r + o] * n;
    }
  }
  _lerpAdditive(e, t, r, n, a) {
    for (let s = 0; s !== a; ++s) {
      let o = t + s;
      e[o] = e[o] + e[r + s] * n;
    }
  }
}
let _RESERVED_CHARS_RE = "\\[\\]\\.:\\/",
  _reservedRe = RegExp("[" + _RESERVED_CHARS_RE + "]", "g"),
  _wordChar = "[^" + _RESERVED_CHARS_RE + "]",
  _wordCharOrDot = "[^" + _RESERVED_CHARS_RE.replace("\\.", "") + "]",
  _directoryRe = /((?:WC+[\/:])*)/.source.replace("WC", _wordChar),
  _nodeRe = /(WCOD+)?/.source.replace("WCOD", _wordCharOrDot),
  _objectRe = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _wordChar),
  _propertyRe = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _wordChar),
  _trackRe = RegExp(
    "^" + _directoryRe + _nodeRe + _objectRe + _propertyRe + "$"
  ),
  _supportedObjectNames = ["material", "materials", "bones"];
class Composite {
  constructor(e, t, r) {
    let n = r || PropertyBinding.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, n));
  }
  getValue(e, t) {
    this.bind();
    let r = this._targetGroup.nCachedObjects_,
      n = this._bindings[r];
    void 0 !== n && n.getValue(e, t);
  }
  setValue(e, t) {
    let r = this._bindings;
    for (let n = this._targetGroup.nCachedObjects_, a = r.length; n !== a; ++n)
      r[n].setValue(e, t);
  }
  bind() {
    let e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, r = e.length; t !== r; ++t)
      e[t].bind();
  }
  unbind() {
    let e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, r = e.length; t !== r; ++t)
      e[t].unbind();
  }
}
class PropertyBinding {
  constructor(e, t, r) {
    (this.path = t),
      (this.parsedPath = r || PropertyBinding.parseTrackName(t)),
      (this.node = PropertyBinding.findNode(e, this.parsedPath.nodeName) || e),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, r) {
    return e && e.isAnimationObjectGroup
      ? new PropertyBinding.Composite(e, t, r)
      : new PropertyBinding(e, t, r);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(_reservedRe, "");
  }
  static parseTrackName(e) {
    let t = _trackRe.exec(e);
    if (null === t)
      throw Error("PropertyBinding: Cannot parse trackName: " + e);
    let r = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      n = r.nodeName && r.nodeName.lastIndexOf(".");
    if (void 0 !== n && -1 !== n) {
      let a = r.nodeName.substring(n + 1);
      -1 !== _supportedObjectNames.indexOf(a) &&
        ((r.nodeName = r.nodeName.substring(0, n)), (r.objectName = a));
    }
    if (null === r.propertyName || 0 === r.propertyName.length)
      throw Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return r;
  }
  static findNode(e, t) {
    if (
      void 0 === t ||
      "" === t ||
      "." === t ||
      -1 === t ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      let r = e.skeleton.getBoneByName(t);
      if (void 0 !== r) return r;
    }
    if (e.children) {
      let n = function (e) {
          for (let r = 0; r < e.length; r++) {
            let a = e[r];
            if (a.name === t || a.uuid === t) return a;
            let s = n(a.children);
            if (s) return s;
          }
          return null;
        },
        a = n(e.children);
      if (a) return a;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    let r = this.resolvedProperty;
    for (let n = 0, a = r.length; n !== a; ++n) e[t++] = r[n];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    let r = this.resolvedProperty;
    for (let n = 0, a = r.length; n !== a; ++n) r[n] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    let r = this.resolvedProperty;
    for (let n = 0, a = r.length; n !== a; ++n) r[n] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    let r = this.resolvedProperty;
    for (let n = 0, a = r.length; n !== a; ++n) r[n] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node,
      t = this.parsedPath,
      r = t.objectName,
      n = t.propertyName,
      a = t.propertyIndex;
    if (
      (e ||
        ((e =
          PropertyBinding.findNode(this.rootNode, t.nodeName) || this.rootNode),
        (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      console.error(
        "THREE.PropertyBinding: Trying to update node for track: " +
          this.path +
          " but it wasn't found."
      );
      return;
    }
    if (r) {
      let s = t.objectIndex;
      switch (r) {
        case "materials":
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          e = e.skeleton.bones;
          for (let o = 0; o < e.length; o++)
            if (e[o].name === s) {
              s = o;
              break;
            }
          break;
        default:
          if (void 0 === e[r]) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          e = e[r];
      }
      if (void 0 !== s) {
        if (void 0 === e[s]) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
          return;
        }
        e = e[s];
      }
    }
    let l = e[n];
    if (void 0 === l) {
      let c = t.nodeName;
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          c +
          "." +
          n +
          " but it wasn't found.",
        e
      );
      return;
    }
    let u = this.Versioning.None;
    (this.targetObject = e),
      void 0 !== e.needsUpdate
        ? (u = this.Versioning.NeedsUpdate)
        : void 0 !== e.matrixWorldNeedsUpdate &&
          (u = this.Versioning.MatrixWorldNeedsUpdate);
    let h = this.BindingType.Direct;
    if (void 0 !== a) {
      if ("morphTargetInfluences" === n) {
        if (!e.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (e.geometry.isBufferGeometry) {
          if (!e.geometry.morphAttributes) {
            console.error(
              "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
              this
            );
            return;
          }
          void 0 !== e.morphTargetDictionary[a] &&
            (a = e.morphTargetDictionary[a]);
        } else {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",
            this
          );
          return;
        }
      }
      (h = this.BindingType.ArrayElement),
        (this.resolvedProperty = l),
        (this.propertyIndex = a);
    } else
      void 0 !== l.fromArray && void 0 !== l.toArray
        ? ((h = this.BindingType.HasFromToArray), (this.resolvedProperty = l))
        : Array.isArray(l)
        ? ((h = this.BindingType.EntireArray), (this.resolvedProperty = l))
        : (this.propertyName = n);
    (this.getValue = this.GetterByBindingType[h]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[h][u]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
(PropertyBinding.Composite = Composite),
  (PropertyBinding.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (PropertyBinding.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (PropertyBinding.prototype.GetterByBindingType = [
    PropertyBinding.prototype._getValue_direct,
    PropertyBinding.prototype._getValue_array,
    PropertyBinding.prototype._getValue_arrayElement,
    PropertyBinding.prototype._getValue_toArray,
  ]),
  (PropertyBinding.prototype.SetterByBindingTypeAndVersioning = [
    [
      PropertyBinding.prototype._setValue_direct,
      PropertyBinding.prototype._setValue_direct_setNeedsUpdate,
      PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      PropertyBinding.prototype._setValue_array,
      PropertyBinding.prototype._setValue_array_setNeedsUpdate,
      PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      PropertyBinding.prototype._setValue_arrayElement,
      PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,
      PropertyBinding.prototype
        ._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      PropertyBinding.prototype._setValue_fromArray,
      PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,
      PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]);
class AnimationObjectGroup {
  constructor() {
    (this.uuid = generateUUID()),
      (this._objects = Array.prototype.slice.call(arguments)),
      (this.nCachedObjects_ = 0);
    let e = {};
    this._indicesByUUID = e;
    for (let t = 0, r = arguments.length; t !== r; ++t)
      e[arguments[t].uuid] = t;
    (this._paths = []),
      (this._parsedPaths = []),
      (this._bindings = []),
      (this._bindingsIndicesByPath = {});
    this.stats = {
      objects: {
        get total() {
          return this._objects.length;
        },
        get inUse() {
          return this.total - this.nCachedObjects_;
        },
      },
      get bindingsPerObject() {
        return this._bindings.length;
      },
    };
  }
  add() {
    let e = this._objects,
      t = this._indicesByUUID,
      r = this._paths,
      n = this._parsedPaths,
      a = this._bindings,
      s = a.length,
      o,
      l = e.length,
      c = this.nCachedObjects_;
    for (let u = 0, h = arguments.length; u !== h; ++u) {
      let d = arguments[u],
        p = d.uuid,
        m = t[p];
      if (void 0 === m) {
        (m = l++), (t[p] = m), e.push(d);
        for (let f = 0, g = s; f !== g; ++f)
          a[f].push(new PropertyBinding(d, r[f], n[f]));
      } else if (m < c) {
        o = e[m];
        let $ = --c,
          v = e[$];
        (t[v.uuid] = m), (e[m] = v), (t[p] = $), (e[$] = d);
        for (let x = 0, y = s; x !== y; ++x) {
          let b = a[x],
            _ = b[$],
            S = b[m];
          (b[m] = _),
            void 0 === S && (S = new PropertyBinding(d, r[x], n[x])),
            (b[$] = S);
        }
      } else
        e[m] !== o &&
          console.error(
            "THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes."
          );
    }
    this.nCachedObjects_ = c;
  }
  remove() {
    let e = this._objects,
      t = this._indicesByUUID,
      r = this._bindings,
      n = r.length,
      a = this.nCachedObjects_;
    for (let s = 0, o = arguments.length; s !== o; ++s) {
      let l = arguments[s],
        c = l.uuid,
        u = t[c];
      if (void 0 !== u && u >= a) {
        let h = a++,
          d = e[h];
        (t[d.uuid] = u), (e[u] = d), (t[c] = h), (e[h] = l);
        for (let p = 0, m = n; p !== m; ++p) {
          let f = r[p],
            g = f[h],
            $ = f[u];
          (f[u] = g), (f[h] = $);
        }
      }
    }
    this.nCachedObjects_ = a;
  }
  uncache() {
    let e = this._objects,
      t = this._indicesByUUID,
      r = this._bindings,
      n = r.length,
      a = this.nCachedObjects_,
      s = e.length;
    for (let o = 0, l = arguments.length; o !== l; ++o) {
      let c = arguments[o],
        u = c.uuid,
        h = t[u];
      if (void 0 !== h) {
        if ((delete t[u], h < a)) {
          let d = --a,
            p = e[d],
            m = --s,
            f = e[m];
          (t[p.uuid] = h), (e[h] = p), (t[f.uuid] = d), (e[d] = f), e.pop();
          for (let g = 0, $ = n; g !== $; ++g) {
            let v = r[g],
              x = v[d],
              y = v[m];
            (v[h] = x), (v[d] = y), v.pop();
          }
        } else {
          let b = --s,
            _ = e[b];
          b > 0 && (t[_.uuid] = h), (e[h] = _), e.pop();
          for (let S = 0, M = n; S !== M; ++S) {
            let w = r[S];
            (w[h] = w[b]), w.pop();
          }
        }
      }
    }
    this.nCachedObjects_ = a;
  }
  subscribe_(e, t) {
    let r = this._bindingsIndicesByPath,
      n = r[e],
      a = this._bindings;
    if (void 0 !== n) return a[n];
    let s = this._paths,
      o = this._parsedPaths,
      l = this._objects,
      c = l.length,
      u = this.nCachedObjects_,
      h = Array(c);
    (n = a.length), (r[e] = n), s.push(e), o.push(t), a.push(h);
    for (let d = u, p = l.length; d !== p; ++d) {
      let m = l[d];
      h[d] = new PropertyBinding(m, e, t);
    }
    return h;
  }
  unsubscribe_(e) {
    let t = this._bindingsIndicesByPath,
      r = t[e];
    if (void 0 !== r) {
      let n = this._paths,
        a = this._parsedPaths,
        s = this._bindings,
        o = s.length - 1,
        l = s[o],
        c = e[o];
      (t[c] = r),
        (s[r] = l),
        s.pop(),
        (a[r] = a[o]),
        a.pop(),
        (n[r] = n[o]),
        n.pop();
    }
  }
}
AnimationObjectGroup.prototype.isAnimationObjectGroup = !0;
class AnimationAction {
  constructor(e, t, r = null, n = t.blendMode) {
    (this._mixer = e),
      (this._clip = t),
      (this._localRoot = r),
      (this.blendMode = n);
    let a = t.tracks,
      s = a.length,
      o = Array(s),
      l = { endingStart: ZeroCurvatureEnding, endingEnd: ZeroCurvatureEnding };
    for (let c = 0; c !== s; ++c) {
      let u = a[c].createInterpolant(null);
      (o[c] = u), (u.settings = l);
    }
    (this._interpolantSettings = l),
      (this._interpolants = o),
      (this._propertyBindings = Array(s)),
      (this._cacheIndex = null),
      (this._byClipCacheIndex = null),
      (this._timeScaleInterpolant = null),
      (this._weightInterpolant = null),
      (this.loop = LoopRepeat),
      (this._loopCount = -1),
      (this._startTime = null),
      (this.time = 0),
      (this.timeScale = 1),
      (this._effectiveTimeScale = 1),
      (this.weight = 1),
      (this._effectiveWeight = 1),
      (this.repetitions = 1 / 0),
      (this.paused = !1),
      (this.enabled = !0),
      (this.clampWhenFinished = !1),
      (this.zeroSlopeAtStart = !0),
      (this.zeroSlopeAtEnd = !0);
  }
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return (
      (this.paused = !1),
      (this.enabled = !0),
      (this.time = 0),
      (this._loopCount = -1),
      (this._startTime = null),
      this.stopFading().stopWarping()
    );
  }
  isRunning() {
    return (
      this.enabled &&
      !this.paused &&
      0 !== this.timeScale &&
      null === this._startTime &&
      this._mixer._isActiveAction(this)
    );
  }
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(e) {
    return (this._startTime = e), this;
  }
  setLoop(e, t) {
    return (this.loop = e), (this.repetitions = t), this;
  }
  setEffectiveWeight(e) {
    return (
      (this.weight = e),
      (this._effectiveWeight = this.enabled ? e : 0),
      this.stopFading()
    );
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e) {
    return this._scheduleFading(e, 0, 1);
  }
  fadeOut(e) {
    return this._scheduleFading(e, 1, 0);
  }
  crossFadeFrom(e, t, r) {
    if ((e.fadeOut(t), this.fadeIn(t), r)) {
      let n = this._clip.duration,
        a = e._clip.duration;
      e.warp(1, a / n, t), this.warp(n / a, 1, t);
    }
    return this;
  }
  crossFadeTo(e, t, r) {
    return e.crossFadeFrom(this, t, r);
  }
  stopFading() {
    let e = this._weightInterpolant;
    return (
      null !== e &&
        ((this._weightInterpolant = null),
        this._mixer._takeBackControlInterpolant(e)),
      this
    );
  }
  setEffectiveTimeScale(e) {
    return (
      (this.timeScale = e),
      (this._effectiveTimeScale = this.paused ? 0 : e),
      this.stopWarping()
    );
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e) {
    return (this.timeScale = this._clip.duration / e), this.stopWarping();
  }
  syncWith(e) {
    return (
      (this.time = e.time), (this.timeScale = e.timeScale), this.stopWarping()
    );
  }
  halt(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  }
  warp(e, t, r) {
    let n = this._mixer,
      a = n.time,
      s = this.timeScale,
      o = this._timeScaleInterpolant;
    null === o &&
      ((o = n._lendControlInterpolant()), (this._timeScaleInterpolant = o));
    let l = o.parameterPositions,
      c = o.sampleValues;
    return (l[0] = a), (l[1] = a + r), (c[0] = e / s), (c[1] = t / s), this;
  }
  stopWarping() {
    let e = this._timeScaleInterpolant;
    return (
      null !== e &&
        ((this._timeScaleInterpolant = null),
        this._mixer._takeBackControlInterpolant(e)),
      this
    );
  }
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  _update(e, t, r, n) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    let a = this._startTime;
    if (null !== a) {
      let s = (e - a) * r;
      if (s < 0 || 0 === r) return;
      (this._startTime = null), (t = r * s);
    }
    t *= this._updateTimeScale(e);
    let o = this._updateTime(t),
      l = this._updateWeight(e);
    if (l > 0) {
      let c = this._interpolants,
        u = this._propertyBindings;
      if (this.blendMode === AdditiveAnimationBlendMode)
        for (let h = 0, d = c.length; h !== d; ++h)
          c[h].evaluate(o), u[h].accumulateAdditive(l);
      else
        for (let p = 0, m = c.length; p !== m; ++p)
          c[p].evaluate(o), u[p].accumulate(n, l);
    }
  }
  _updateWeight(e) {
    let t = 0;
    if (this.enabled) {
      t = this.weight;
      let r = this._weightInterpolant;
      if (null !== r) {
        let n = r.evaluate(e)[0];
        (t *= n),
          e > r.parameterPositions[1] &&
            (this.stopFading(), 0 === n && (this.enabled = !1));
      }
    }
    return (this._effectiveWeight = t), t;
  }
  _updateTimeScale(e) {
    let t = 0;
    if (!this.paused) {
      t = this.timeScale;
      let r = this._timeScaleInterpolant;
      if (null !== r) {
        let n = r.evaluate(e)[0];
        (t *= n),
          e > r.parameterPositions[1] &&
            (this.stopWarping(),
            0 === t ? (this.paused = !0) : (this.timeScale = t));
      }
    }
    return (this._effectiveTimeScale = t), t;
  }
  _updateTime(e) {
    let t = this._clip.duration,
      r = this.loop,
      n = this.time + e,
      a = this._loopCount,
      s = r === LoopPingPong;
    if (0 === e) return -1 === a ? n : s && (1 & a) == 1 ? t - n : n;
    if (r === LoopOnce) {
      -1 === a && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
      handle_stop: {
        if (n >= t) n = t;
        else if (n < 0) n = 0;
        else {
          this.time = n;
          break handle_stop;
        }
        this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
          (this.time = n),
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e < 0 ? -1 : 1,
          });
      }
    } else {
      if (
        (-1 === a &&
          (e >= 0
            ? ((a = 0), this._setEndings(!0, 0 === this.repetitions, s))
            : this._setEndings(0 === this.repetitions, !0, s)),
        n >= t || n < 0)
      ) {
        let o = Math.floor(n / t);
        (n -= t * o), (a += Math.abs(o));
        let l = this.repetitions - a;
        if (l <= 0)
          this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (n = e > 0 ? t : 0),
            (this.time = n),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: e > 0 ? 1 : -1,
            });
        else {
          if (1 === l) {
            let c = e < 0;
            this._setEndings(c, !c, s);
          } else this._setEndings(!1, !1, s);
          (this._loopCount = a),
            (this.time = n),
            this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: o,
            });
        }
      } else this.time = n;
      if (s && (1 & a) == 1) return t - n;
    }
    return n;
  }
  _setEndings(e, t, r) {
    let n = this._interpolantSettings;
    r
      ? ((n.endingStart = ZeroSlopeEnding), (n.endingEnd = ZeroSlopeEnding))
      : (e
          ? (n.endingStart = this.zeroSlopeAtStart
              ? ZeroSlopeEnding
              : ZeroCurvatureEnding)
          : (n.endingStart = WrapAroundEnding),
        t
          ? (n.endingEnd = this.zeroSlopeAtEnd
              ? ZeroSlopeEnding
              : ZeroCurvatureEnding)
          : (n.endingEnd = WrapAroundEnding));
  }
  _scheduleFading(e, t, r) {
    let n = this._mixer,
      a = n.time,
      s = this._weightInterpolant;
    null === s &&
      ((s = n._lendControlInterpolant()), (this._weightInterpolant = s));
    let o = s.parameterPositions,
      l = s.sampleValues;
    return (o[0] = a), (l[0] = t), (o[1] = a + e), (l[1] = r), this;
  }
}
let _controlInterpolantsResultBuffer = new Float32Array(1);
class AnimationMixer extends EventDispatcher {
  constructor(e) {
    super(),
      (this._root = e),
      this._initMemoryManager(),
      (this._accuIndex = 0),
      (this.time = 0),
      (this.timeScale = 1);
  }
  _bindAction(e, t) {
    let r = e._localRoot || this._root,
      n = e._clip.tracks,
      a = n.length,
      s = e._propertyBindings,
      o = e._interpolants,
      l = r.uuid,
      c = this._bindingsByRootAndName,
      u = c[l];
    void 0 === u && ((u = {}), (c[l] = u));
    for (let h = 0; h !== a; ++h) {
      let d = n[h],
        p = d.name,
        m = u[p];
      if (void 0 !== m) ++m.referenceCount, (s[h] = m);
      else {
        if (void 0 !== (m = s[h])) {
          null === m._cacheIndex &&
            (++m.referenceCount, this._addInactiveBinding(m, l, p));
          continue;
        }
        let f = t && t._propertyBindings[h].binding.parsedPath;
        (m = new PropertyMixer(
          PropertyBinding.create(r, p, f),
          d.ValueTypeName,
          d.getValueSize()
        )),
          ++m.referenceCount,
          this._addInactiveBinding(m, l, p),
          (s[h] = m);
      }
      o[h].resultBuffer = m.buffer;
    }
  }
  _activateAction(e) {
    if (!this._isActiveAction(e)) {
      if (null === e._cacheIndex) {
        let t = (e._localRoot || this._root).uuid,
          r = e._clip.uuid,
          n = this._actionsByClip[r];
        this._bindAction(e, n && n.knownActions[0]),
          this._addInactiveAction(e, r, t);
      }
      let a = e._propertyBindings;
      for (let s = 0, o = a.length; s !== o; ++s) {
        let l = a[s];
        0 == l.useCount++ && (this._lendBinding(l), l.saveOriginalState());
      }
      this._lendAction(e);
    }
  }
  _deactivateAction(e) {
    if (this._isActiveAction(e)) {
      let t = e._propertyBindings;
      for (let r = 0, n = t.length; r !== n; ++r) {
        let a = t[r];
        0 == --a.useCount &&
          (a.restoreOriginalState(), this._takeBackBinding(a));
      }
      this._takeBackAction(e);
    }
  }
  _initMemoryManager() {
    (this._actions = []),
      (this._nActiveActions = 0),
      (this._actionsByClip = {}),
      (this._bindings = []),
      (this._nActiveBindings = 0),
      (this._bindingsByRootAndName = {}),
      (this._controlInterpolants = []),
      (this._nActiveControlInterpolants = 0),
      (this.stats = {
        actions: {
          get total() {
            return this._actions.length;
          },
          get inUse() {
            return this._nActiveActions;
          },
        },
        bindings: {
          get total() {
            return this._bindings.length;
          },
          get inUse() {
            return this._nActiveBindings;
          },
        },
        controlInterpolants: {
          get total() {
            return this._controlInterpolants.length;
          },
          get inUse() {
            return this._nActiveControlInterpolants;
          },
        },
      });
  }
  _isActiveAction(e) {
    let t = e._cacheIndex;
    return null !== t && t < this._nActiveActions;
  }
  _addInactiveAction(e, t, r) {
    let n = this._actions,
      a = this._actionsByClip,
      s = a[t];
    if (void 0 === s)
      (s = { knownActions: [e], actionByRoot: {} }),
        (e._byClipCacheIndex = 0),
        (a[t] = s);
    else {
      let o = s.knownActions;
      (e._byClipCacheIndex = o.length), o.push(e);
    }
    (e._cacheIndex = n.length), n.push(e), (s.actionByRoot[r] = e);
  }
  _removeInactiveAction(e) {
    let t = this._actions,
      r = t[t.length - 1],
      n = e._cacheIndex;
    (r._cacheIndex = n), (t[n] = r), t.pop(), (e._cacheIndex = null);
    let a = e._clip.uuid,
      s = this._actionsByClip,
      o = s[a],
      l = o.knownActions,
      c = l[l.length - 1],
      u = e._byClipCacheIndex;
    (c._byClipCacheIndex = u),
      (l[u] = c),
      l.pop(),
      (e._byClipCacheIndex = null);
    let h = o.actionByRoot,
      d = (e._localRoot || this._root).uuid;
    delete h[d],
      0 === l.length && delete s[a],
      this._removeInactiveBindingsForAction(e);
  }
  _removeInactiveBindingsForAction(e) {
    let t = e._propertyBindings;
    for (let r = 0, n = t.length; r !== n; ++r) {
      let a = t[r];
      0 == --a.referenceCount && this._removeInactiveBinding(a);
    }
  }
  _lendAction(e) {
    let t = this._actions,
      r = e._cacheIndex,
      n = this._nActiveActions++,
      a = t[n];
    (e._cacheIndex = n), (t[n] = e), (a._cacheIndex = r), (t[r] = a);
  }
  _takeBackAction(e) {
    let t = this._actions,
      r = e._cacheIndex,
      n = --this._nActiveActions,
      a = t[n];
    (e._cacheIndex = n), (t[n] = e), (a._cacheIndex = r), (t[r] = a);
  }
  _addInactiveBinding(e, t, r) {
    let n = this._bindingsByRootAndName,
      a = this._bindings,
      s = n[t];
    void 0 === s && ((s = {}), (n[t] = s)),
      (s[r] = e),
      (e._cacheIndex = a.length),
      a.push(e);
  }
  _removeInactiveBinding(e) {
    let t = this._bindings,
      r = e.binding,
      n = r.rootNode.uuid,
      a = r.path,
      s = this._bindingsByRootAndName,
      o = s[n],
      l = t[t.length - 1],
      c = e._cacheIndex;
    (l._cacheIndex = c),
      (t[c] = l),
      t.pop(),
      delete o[a],
      0 === Object.keys(o).length && delete s[n];
  }
  _lendBinding(e) {
    let t = this._bindings,
      r = e._cacheIndex,
      n = this._nActiveBindings++,
      a = t[n];
    (e._cacheIndex = n), (t[n] = e), (a._cacheIndex = r), (t[r] = a);
  }
  _takeBackBinding(e) {
    let t = this._bindings,
      r = e._cacheIndex,
      n = --this._nActiveBindings,
      a = t[n];
    (e._cacheIndex = n), (t[n] = e), (a._cacheIndex = r), (t[r] = a);
  }
  _lendControlInterpolant() {
    let e = this._controlInterpolants,
      t = this._nActiveControlInterpolants++,
      r = e[t];
    return (
      void 0 === r &&
        (((r = new LinearInterpolant(
          new Float32Array(2),
          new Float32Array(2),
          1,
          _controlInterpolantsResultBuffer
        )).__cacheIndex = t),
        (e[t] = r)),
      r
    );
  }
  _takeBackControlInterpolant(e) {
    let t = this._controlInterpolants,
      r = e.__cacheIndex,
      n = --this._nActiveControlInterpolants,
      a = t[n];
    (e.__cacheIndex = n), (t[n] = e), (a.__cacheIndex = r), (t[r] = a);
  }
  clipAction(e, t, r) {
    let n = t || this._root,
      a = n.uuid,
      s = "string" == typeof e ? AnimationClip.findByName(n, e) : e,
      o = null !== s ? s.uuid : e,
      l = this._actionsByClip[o],
      c = null;
    if (
      (void 0 === r &&
        (r = null !== s ? s.blendMode : NormalAnimationBlendMode),
      void 0 !== l)
    ) {
      let u = l.actionByRoot[a];
      if (void 0 !== u && u.blendMode === r) return u;
      (c = l.knownActions[0]), null === s && (s = c._clip);
    }
    if (null === s) return null;
    let h = new AnimationAction(this, s, t, r);
    return this._bindAction(h, c), this._addInactiveAction(h, o, a), h;
  }
  existingAction(e, t) {
    let r = t || this._root,
      n = r.uuid,
      a = "string" == typeof e ? AnimationClip.findByName(r, e) : e,
      s = a ? a.uuid : e,
      o = this._actionsByClip[s];
    return (void 0 !== o && o.actionByRoot[n]) || null;
  }
  stopAllAction() {
    let e = this._actions,
      t = this._nActiveActions;
    for (let r = t - 1; r >= 0; --r) e[r].stop();
    return this;
  }
  update(e) {
    e *= this.timeScale;
    let t = this._actions,
      r = this._nActiveActions,
      n = (this.time += e),
      a = Math.sign(e),
      s = (this._accuIndex ^= 1);
    for (let o = 0; o !== r; ++o) {
      let l = t[o];
      l._update(n, e, a, s);
    }
    let c = this._bindings,
      u = this._nActiveBindings;
    for (let h = 0; h !== u; ++h) c[h].apply(s);
    return this;
  }
  setTime(e) {
    this.time = 0;
    for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
    return this.update(e);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e) {
    let t = this._actions,
      r = e.uuid,
      n = this._actionsByClip,
      a = n[r];
    if (void 0 !== a) {
      let s = a.knownActions;
      for (let o = 0, l = s.length; o !== l; ++o) {
        let c = s[o];
        this._deactivateAction(c);
        let u = c._cacheIndex,
          h = t[t.length - 1];
        (c._cacheIndex = null),
          (c._byClipCacheIndex = null),
          (h._cacheIndex = u),
          (t[u] = h),
          t.pop(),
          this._removeInactiveBindingsForAction(c);
      }
      delete n[r];
    }
  }
  uncacheRoot(e) {
    let t = e.uuid,
      r = this._actionsByClip;
    for (let n in r) {
      let a = r[n].actionByRoot,
        s = a[t];
      void 0 !== s &&
        (this._deactivateAction(s), this._removeInactiveAction(s));
    }
    let o = this._bindingsByRootAndName,
      l = o[t];
    if (void 0 !== l)
      for (let c in l) {
        let u = l[c];
        u.restoreOriginalState(), this._removeInactiveBinding(u);
      }
  }
  uncacheAction(e, t) {
    let r = this.existingAction(e, t);
    null !== r && (this._deactivateAction(r), this._removeInactiveAction(r));
  }
}
class Uniform {
  constructor(e) {
    "string" == typeof e &&
      (console.warn("THREE.Uniform: Type parameter is no longer needed."),
      (e = arguments[1])),
      (this.value = e);
  }
  clone() {
    return new Uniform(
      void 0 === this.value.clone ? this.value : this.value.clone()
    );
  }
}
class InstancedInterleavedBuffer extends InterleavedBuffer {
  constructor(e, t, r = 1) {
    super(e, t), (this.meshPerAttribute = r);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  clone(e) {
    let t = super.clone(e);
    return (t.meshPerAttribute = this.meshPerAttribute), t;
  }
  toJSON(e) {
    let t = super.toJSON(e);
    return (
      (t.isInstancedInterleavedBuffer = !0),
      (t.meshPerAttribute = this.meshPerAttribute),
      t
    );
  }
}
InstancedInterleavedBuffer.prototype.isInstancedInterleavedBuffer = !0;
class GLBufferAttribute {
  constructor(e, t, r, n, a) {
    (this.buffer = e),
      (this.type = t),
      (this.itemSize = r),
      (this.elementSize = n),
      (this.count = a),
      (this.version = 0);
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  setBuffer(e) {
    return (this.buffer = e), this;
  }
  setType(e, t) {
    return (this.type = e), (this.elementSize = t), this;
  }
  setItemSize(e) {
    return (this.itemSize = e), this;
  }
  setCount(e) {
    return (this.count = e), this;
  }
}
GLBufferAttribute.prototype.isGLBufferAttribute = !0;
class Raycaster {
  constructor(e, t, r = 0, n = 1 / 0) {
    (this.ray = new Ray(e, t)),
      (this.near = r),
      (this.far = n),
      (this.camera = null),
      (this.layers = new Layers()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      });
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t.isOrthographicCamera
      ? (this.ray.origin
          .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
          .unproject(t),
        this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
        (this.camera = t))
      : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, r = []) {
    return intersectObject(e, this, r, t), r.sort(ascSort), r;
  }
  intersectObjects(e, t = !0, r = []) {
    for (let n = 0, a = e.length; n < a; n++) intersectObject(e[n], this, r, t);
    return r.sort(ascSort), r;
  }
}
function ascSort(e, t) {
  return e.distance - t.distance;
}
function intersectObject(e, t, r, n) {
  if ((e.layers.test(t.layers) && e.raycast(t, r), !0 === n)) {
    let a = e.children;
    for (let s = 0, o = a.length; s < o; s++) intersectObject(a[s], t, r, !0);
  }
}
class Spherical {
  constructor(e = 1, t = 0, r = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = r), this;
  }
  set(e, t, r) {
    return (this.radius = e), (this.phi = t), (this.theta = r), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, r) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + r * r)),
      0 === this.radius
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, r)),
          (this.phi = Math.acos(clamp(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Cylindrical {
  constructor(e = 1, t = 0, r = 0) {
    return (this.radius = e), (this.theta = t), (this.y = r), this;
  }
  set(e, t, r) {
    return (this.radius = e), (this.theta = t), (this.y = r), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.theta = e.theta), (this.y = e.y), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, r) {
    return (
      (this.radius = Math.sqrt(e * e + r * r)),
      (this.theta = Math.atan2(e, r)),
      (this.y = t),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
let _vector$4 = new Vector2();
class Box2 {
  constructor(
    e = new Vector2(Infinity, Infinity),
    t = new Vector2(-1 / 0, -1 / 0)
  ) {
    (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, r = e.length; t < r; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    let r = _vector$4.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(r), this.max.copy(e).add(r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = Infinity),
      (this.max.x = this.max.y = -1 / 0),
      this
    );
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  containsPoint(e) {
    return (
      !(e.x < this.min.x) &&
      !(e.x > this.max.x) &&
      !(e.y < this.min.y) &&
      !(e.y > this.max.y)
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y)
    );
  }
  intersectsBox(e) {
    return (
      !(e.max.x < this.min.x) &&
      !(e.min.x > this.max.x) &&
      !(e.max.y < this.min.y) &&
      !(e.min.y > this.max.y)
    );
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    let t = _vector$4.copy(e).clamp(this.min, this.max);
    return t.sub(e).length();
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
Box2.prototype.isBox2 = !0;
let _startP = new Vector3(),
  _startEnd = new Vector3();
class Line3 {
  constructor(e = new Vector3(), t = new Vector3()) {
    (this.start = e), (this.end = t);
  }
  set(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  }
  copy(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  }
  getCenter(e) {
    return e.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(e) {
    return e.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(e, t) {
    return this.delta(t).multiplyScalar(e).add(this.start);
  }
  closestPointToPointParameter(e, t) {
    _startP.subVectors(e, this.start),
      _startEnd.subVectors(this.end, this.start);
    let r = _startEnd.dot(_startEnd),
      n = _startEnd.dot(_startP),
      a = n / r;
    return t && (a = clamp(a, 0, 1)), a;
  }
  closestPointToPoint(e, t, r) {
    let n = this.closestPointToPointParameter(e, t);
    return this.delta(r).multiplyScalar(n).add(this.start);
  }
  applyMatrix4(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  }
  equals(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
let _vector$3 = new Vector3();
class SpotLightHelper extends Object3D {
  constructor(e, t) {
    super(),
      (this.light = e),
      this.light.updateMatrixWorld(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = t);
    let r = new BufferGeometry(),
      n = [
        0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1,
        0, 0, 0, 0, -1, 1,
      ];
    for (let a = 0, s = 1, o = 32; a < o; a++, s++) {
      let l = (a / o) * Math.PI * 2,
        c = (s / o) * Math.PI * 2;
      n.push(Math.cos(l), Math.sin(l), 1, Math.cos(c), Math.sin(c), 1);
    }
    r.setAttribute("position", new Float32BufferAttribute(n, 3));
    let u = new LineBasicMaterial({ fog: !1, toneMapped: !1 });
    (this.cone = new LineSegments(r, u)), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateMatrixWorld();
    let e = this.light.distance ? this.light.distance : 1e3,
      t = e * Math.tan(this.light.angle);
    this.cone.scale.set(t, t, e),
      _vector$3.setFromMatrixPosition(this.light.target.matrixWorld),
      this.cone.lookAt(_vector$3),
      void 0 !== this.color
        ? this.cone.material.color.set(this.color)
        : this.cone.material.color.copy(this.light.color);
  }
}
let _vector$2 = new Vector3(),
  _boneMatrix = new Matrix4(),
  _matrixWorldInv = new Matrix4();
class SkeletonHelper extends LineSegments {
  constructor(e) {
    let t = getBoneList(e),
      r = new BufferGeometry(),
      n = [],
      a = [],
      s = new Color(0, 0, 1),
      o = new Color(0, 1, 0);
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      c.parent &&
        c.parent.isBone &&
        (n.push(0, 0, 0),
        n.push(0, 0, 0),
        a.push(s.r, s.g, s.b),
        a.push(o.r, o.g, o.b));
    }
    r.setAttribute("position", new Float32BufferAttribute(n, 3)),
      r.setAttribute("color", new Float32BufferAttribute(a, 3));
    let u = new LineBasicMaterial({
      vertexColors: !0,
      depthTest: !1,
      depthWrite: !1,
      toneMapped: !1,
      transparent: !0,
    });
    super(r, u),
      (this.type = "SkeletonHelper"),
      (this.isSkeletonHelper = !0),
      (this.root = e),
      (this.bones = t),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1);
  }
  updateMatrixWorld(e) {
    let t = this.bones,
      r = this.geometry,
      n = r.getAttribute("position");
    _matrixWorldInv.copy(this.root.matrixWorld).invert();
    for (let a = 0, s = 0; a < t.length; a++) {
      let o = t[a];
      o.parent &&
        o.parent.isBone &&
        (_boneMatrix.multiplyMatrices(_matrixWorldInv, o.matrixWorld),
        _vector$2.setFromMatrixPosition(_boneMatrix),
        n.setXYZ(s, _vector$2.x, _vector$2.y, _vector$2.z),
        _boneMatrix.multiplyMatrices(_matrixWorldInv, o.parent.matrixWorld),
        _vector$2.setFromMatrixPosition(_boneMatrix),
        n.setXYZ(s + 1, _vector$2.x, _vector$2.y, _vector$2.z),
        (s += 2));
    }
    (r.getAttribute("position").needsUpdate = !0), super.updateMatrixWorld(e);
  }
}
function getBoneList(e) {
  let t = [];
  !0 === e.isBone && t.push(e);
  for (let r = 0; r < e.children.length; r++)
    t.push.apply(t, getBoneList(e.children[r]));
  return t;
}
class PointLightHelper extends Mesh {
  constructor(e, t, r) {
    let n = new SphereGeometry(t, 4, 2),
      a = new MeshBasicMaterial({ wireframe: !0, fog: !1, toneMapped: !1 });
    super(n, a),
      (this.light = e),
      this.light.updateMatrixWorld(),
      (this.color = r),
      (this.type = "PointLightHelper"),
      (this.matrix = this.light.matrixWorld),
      (this.matrixAutoUpdate = !1),
      this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    void 0 !== this.color
      ? this.material.color.set(this.color)
      : this.material.color.copy(this.light.color);
  }
}
let _vector$1 = new Vector3(),
  _color1 = new Color(),
  _color2 = new Color();
class HemisphereLightHelper extends Object3D {
  constructor(e, t, r) {
    super(),
      (this.light = e),
      this.light.updateMatrixWorld(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = r);
    let n = new OctahedronGeometry(t);
    n.rotateY(0.5 * Math.PI),
      (this.material = new MeshBasicMaterial({
        wireframe: !0,
        fog: !1,
        toneMapped: !1,
      })),
      void 0 === this.color && (this.material.vertexColors = !0);
    let a = n.getAttribute("position"),
      s = new Float32Array(3 * a.count);
    n.setAttribute("color", new BufferAttribute(s, 3)),
      this.add(new Mesh(n, this.material)),
      this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    let e = this.children[0];
    if (void 0 !== this.color) this.material.color.set(this.color);
    else {
      let t = e.geometry.getAttribute("color");
      _color1.copy(this.light.color), _color2.copy(this.light.groundColor);
      for (let r = 0, n = t.count; r < n; r++) {
        let a = r < n / 2 ? _color1 : _color2;
        t.setXYZ(r, a.r, a.g, a.b);
      }
      t.needsUpdate = !0;
    }
    e.lookAt(_vector$1.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class GridHelper extends LineSegments {
  constructor(e = 10, t = 10, r = 4473924, n = 8947848) {
    (r = new Color(r)), (n = new Color(n));
    let a = t / 2,
      s = e / t,
      o = e / 2,
      l = [],
      c = [];
    for (let u = 0, h = 0, d = -o; u <= t; u++, d += s) {
      l.push(-o, 0, d, o, 0, d), l.push(d, 0, -o, d, 0, o);
      let p = u === a ? r : n;
      p.toArray(c, h),
        (h += 3),
        p.toArray(c, h),
        (h += 3),
        p.toArray(c, h),
        (h += 3),
        p.toArray(c, h),
        (h += 3);
    }
    let m = new BufferGeometry();
    m.setAttribute("position", new Float32BufferAttribute(l, 3)),
      m.setAttribute("color", new Float32BufferAttribute(c, 3));
    let f = new LineBasicMaterial({ vertexColors: !0, toneMapped: !1 });
    super(m, f), (this.type = "GridHelper");
  }
}
class PolarGridHelper extends LineSegments {
  constructor(e = 10, t = 16, r = 8, n = 64, a = 4473924, s = 8947848) {
    (a = new Color(a)), (s = new Color(s));
    let o = [],
      l = [];
    for (let c = 0; c <= t; c++) {
      let u = (c / t) * (2 * Math.PI),
        h = Math.sin(u) * e,
        d = Math.cos(u) * e;
      o.push(0, 0, 0), o.push(h, 0, d);
      let p = 1 & c ? a : s;
      l.push(p.r, p.g, p.b), l.push(p.r, p.g, p.b);
    }
    for (let m = 0; m <= r; m++) {
      let f = 1 & m ? a : s,
        g = e - (e / r) * m;
      for (let $ = 0; $ < n; $++) {
        let v = ($ / n) * (2 * Math.PI),
          x = Math.sin(v) * g,
          y = Math.cos(v) * g;
        o.push(x, 0, y),
          l.push(f.r, f.g, f.b),
          (x = Math.sin((v = (($ + 1) / n) * (2 * Math.PI))) * g),
          (y = Math.cos(v) * g),
          o.push(x, 0, y),
          l.push(f.r, f.g, f.b);
      }
    }
    let b = new BufferGeometry();
    b.setAttribute("position", new Float32BufferAttribute(o, 3)),
      b.setAttribute("color", new Float32BufferAttribute(l, 3));
    let _ = new LineBasicMaterial({ vertexColors: !0, toneMapped: !1 });
    super(b, _), (this.type = "PolarGridHelper");
  }
}
let _v1 = new Vector3(),
  _v2 = new Vector3(),
  _v3 = new Vector3();
class DirectionalLightHelper extends Object3D {
  constructor(e, t, r) {
    super(),
      (this.light = e),
      this.light.updateMatrixWorld(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.color = r),
      void 0 === t && (t = 1);
    let n = new BufferGeometry();
    n.setAttribute(
      "position",
      new Float32BufferAttribute(
        [-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0],
        3
      )
    );
    let a = new LineBasicMaterial({ fog: !1, toneMapped: !1 });
    (this.lightPlane = new Line(n, a)),
      this.add(this.lightPlane),
      (n = new BufferGeometry()).setAttribute(
        "position",
        new Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3)
      ),
      (this.targetLine = new Line(n, a)),
      this.add(this.targetLine),
      this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(),
      this.lightPlane.material.dispose(),
      this.targetLine.geometry.dispose(),
      this.targetLine.material.dispose();
  }
  update() {
    _v1.setFromMatrixPosition(this.light.matrixWorld),
      _v2.setFromMatrixPosition(this.light.target.matrixWorld),
      _v3.subVectors(_v2, _v1),
      this.lightPlane.lookAt(_v2),
      void 0 !== this.color
        ? (this.lightPlane.material.color.set(this.color),
          this.targetLine.material.color.set(this.color))
        : (this.lightPlane.material.color.copy(this.light.color),
          this.targetLine.material.color.copy(this.light.color)),
      this.targetLine.lookAt(_v2),
      (this.targetLine.scale.z = _v3.length());
  }
}
let _vector = new Vector3(),
  _camera = new Camera();
class CameraHelper extends LineSegments {
  constructor(e) {
    let t = new BufferGeometry(),
      r = new LineBasicMaterial({
        color: 16777215,
        vertexColors: !0,
        toneMapped: !1,
      }),
      n = [],
      a = [],
      s = {},
      o = new Color(16755200),
      l = new Color(16711680),
      c = new Color(43775),
      u = new Color(16777215),
      h = new Color(3355443);
    function d(e, t, r) {
      p(e, r), p(t, r);
    }
    function p(e, t) {
      n.push(0, 0, 0),
        a.push(t.r, t.g, t.b),
        void 0 === s[e] && (s[e] = []),
        s[e].push(n.length / 3 - 1);
    }
    d("n1", "n2", o),
      d("n2", "n4", o),
      d("n4", "n3", o),
      d("n3", "n1", o),
      d("f1", "f2", o),
      d("f2", "f4", o),
      d("f4", "f3", o),
      d("f3", "f1", o),
      d("n1", "f1", o),
      d("n2", "f2", o),
      d("n3", "f3", o),
      d("n4", "f4", o),
      d("p", "n1", l),
      d("p", "n2", l),
      d("p", "n3", l),
      d("p", "n4", l),
      d("u1", "u2", c),
      d("u2", "u3", c),
      d("u3", "u1", c),
      d("c", "t", u),
      d("p", "c", h),
      d("cn1", "cn2", h),
      d("cn3", "cn4", h),
      d("cf1", "cf2", h),
      d("cf3", "cf4", h),
      t.setAttribute("position", new Float32BufferAttribute(n, 3)),
      t.setAttribute("color", new Float32BufferAttribute(a, 3)),
      super(t, r),
      (this.type = "CameraHelper"),
      (this.camera = e),
      this.camera.updateProjectionMatrix &&
        this.camera.updateProjectionMatrix(),
      (this.matrix = e.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.pointMap = s),
      this.update();
  }
  update() {
    let e = this.geometry,
      t = this.pointMap;
    _camera.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
      setPoint("c", t, e, _camera, 0, 0, -1),
      setPoint("t", t, e, _camera, 0, 0, 1),
      setPoint("n1", t, e, _camera, -1, -1, -1),
      setPoint("n2", t, e, _camera, 1, -1, -1),
      setPoint("n3", t, e, _camera, -1, 1, -1),
      setPoint("n4", t, e, _camera, 1, 1, -1),
      setPoint("f1", t, e, _camera, -1, -1, 1),
      setPoint("f2", t, e, _camera, 1, -1, 1),
      setPoint("f3", t, e, _camera, -1, 1, 1),
      setPoint("f4", t, e, _camera, 1, 1, 1),
      setPoint("u1", t, e, _camera, 0.7, 1.1, -1),
      setPoint("u2", t, e, _camera, -0.7, 1.1, -1),
      setPoint("u3", t, e, _camera, 0, 2, -1),
      setPoint("cf1", t, e, _camera, -1, 0, 1),
      setPoint("cf2", t, e, _camera, 1, 0, 1),
      setPoint("cf3", t, e, _camera, 0, -1, 1),
      setPoint("cf4", t, e, _camera, 0, 1, 1),
      setPoint("cn1", t, e, _camera, -1, 0, -1),
      setPoint("cn2", t, e, _camera, 1, 0, -1),
      setPoint("cn3", t, e, _camera, 0, -1, -1),
      setPoint("cn4", t, e, _camera, 0, 1, -1),
      (e.getAttribute("position").needsUpdate = !0);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function setPoint(e, t, r, n, a, s, o) {
  _vector.set(a, s, o).unproject(n);
  let l = t[e];
  if (void 0 !== l) {
    let c = r.getAttribute("position");
    for (let u = 0, h = l.length; u < h; u++)
      c.setXYZ(l[u], _vector.x, _vector.y, _vector.z);
  }
}
let _box = new Box3();
class BoxHelper extends LineSegments {
  constructor(e, t = 16776960) {
    let r = new Uint16Array([
        0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7,
      ]),
      n = new Float32Array(24),
      a = new BufferGeometry();
    a.setIndex(new BufferAttribute(r, 1)),
      a.setAttribute("position", new BufferAttribute(n, 3)),
      super(a, new LineBasicMaterial({ color: t, toneMapped: !1 })),
      (this.object = e),
      (this.type = "BoxHelper"),
      (this.matrixAutoUpdate = !1),
      this.update();
  }
  update(e) {
    if (
      (void 0 !== e &&
        console.warn("THREE.BoxHelper: .update() has no longer arguments."),
      void 0 !== this.object && _box.setFromObject(this.object),
      _box.isEmpty())
    )
      return;
    let t = _box.min,
      r = _box.max,
      n = this.geometry.attributes.position,
      a = n.array;
    (a[0] = r.x),
      (a[1] = r.y),
      (a[2] = r.z),
      (a[3] = t.x),
      (a[4] = r.y),
      (a[5] = r.z),
      (a[6] = t.x),
      (a[7] = t.y),
      (a[8] = r.z),
      (a[9] = r.x),
      (a[10] = t.y),
      (a[11] = r.z),
      (a[12] = r.x),
      (a[13] = r.y),
      (a[14] = t.z),
      (a[15] = t.x),
      (a[16] = r.y),
      (a[17] = t.z),
      (a[18] = t.x),
      (a[19] = t.y),
      (a[20] = t.z),
      (a[21] = r.x),
      (a[22] = t.y),
      (a[23] = t.z),
      (n.needsUpdate = !0),
      this.geometry.computeBoundingSphere();
  }
  setFromObject(e) {
    return (this.object = e), this.update(), this;
  }
  copy(e) {
    return (
      LineSegments.prototype.copy.call(this, e), (this.object = e.object), this
    );
  }
}
class Box3Helper extends LineSegments {
  constructor(e, t = 16776960) {
    let r = new Uint16Array([
        0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7,
      ]),
      n = [
        1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1,
        1, -1, -1,
      ],
      a = new BufferGeometry();
    a.setIndex(new BufferAttribute(r, 1)),
      a.setAttribute("position", new Float32BufferAttribute(n, 3)),
      super(a, new LineBasicMaterial({ color: t, toneMapped: !1 })),
      (this.box = e),
      (this.type = "Box3Helper"),
      this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(e) {
    let t = this.box;
    t.isEmpty() ||
      (t.getCenter(this.position),
      t.getSize(this.scale),
      this.scale.multiplyScalar(0.5),
      super.updateMatrixWorld(e));
  }
}
class PlaneHelper extends Line {
  constructor(e, t = 1, r = 16776960) {
    let n = r,
      a = [
        1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1,
        1, 1, 1, 0, 0, 1, 0, 0, 0,
      ],
      s = new BufferGeometry();
    s.setAttribute("position", new Float32BufferAttribute(a, 3)),
      s.computeBoundingSphere(),
      super(s, new LineBasicMaterial({ color: n, toneMapped: !1 })),
      (this.type = "PlaneHelper"),
      (this.plane = e),
      (this.size = t);
    let o = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],
      l = new BufferGeometry();
    l.setAttribute("position", new Float32BufferAttribute(o, 3)),
      l.computeBoundingSphere(),
      this.add(
        new Mesh(
          l,
          new MeshBasicMaterial({
            color: n,
            opacity: 0.2,
            transparent: !0,
            depthWrite: !1,
            toneMapped: !1,
          })
        )
      );
  }
  updateMatrixWorld(e) {
    let t = -this.plane.constant;
    1e-8 > Math.abs(t) && (t = 1e-8),
      this.scale.set(0.5 * this.size, 0.5 * this.size, t),
      (this.children[0].material.side = t < 0 ? BackSide : FrontSide),
      this.lookAt(this.plane.normal),
      super.updateMatrixWorld(e);
  }
}
let _axis = new Vector3(),
  _lineGeometry,
  _coneGeometry;
class ArrowHelper extends Object3D {
  constructor(
    e = new Vector3(0, 0, 1),
    t = new Vector3(0, 0, 0),
    r = 1,
    n = 16776960,
    a = 0.2 * r,
    s = 0.2 * a
  ) {
    super(),
      (this.type = "ArrowHelper"),
      void 0 === _lineGeometry &&
        ((_lineGeometry = new BufferGeometry()).setAttribute(
          "position",
          new Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3)
        ),
        (_coneGeometry = new CylinderGeometry(0, 0.5, 1, 5, 1)).translate(
          0,
          -0.5,
          0
        )),
      this.position.copy(t),
      (this.line = new Line(
        _lineGeometry,
        new LineBasicMaterial({ color: n, toneMapped: !1 })
      )),
      (this.line.matrixAutoUpdate = !1),
      this.add(this.line),
      (this.cone = new Mesh(
        _coneGeometry,
        new MeshBasicMaterial({ color: n, toneMapped: !1 })
      )),
      (this.cone.matrixAutoUpdate = !1),
      this.add(this.cone),
      this.setDirection(e),
      this.setLength(r, a, s);
  }
  setDirection(e) {
    if (e.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
    else if (e.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
    else {
      _axis.set(e.z, 0, -e.x).normalize();
      let t = Math.acos(e.y);
      this.quaternion.setFromAxisAngle(_axis, t);
    }
  }
  setLength(e, t = 0.2 * e, r = 0.2 * t) {
    this.line.scale.set(1, Math.max(1e-4, e - t), 1),
      this.line.updateMatrix(),
      this.cone.scale.set(r, t, r),
      (this.cone.position.y = e),
      this.cone.updateMatrix();
  }
  setColor(e) {
    this.line.material.color.set(e), this.cone.material.color.set(e);
  }
  copy(e) {
    return (
      super.copy(e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this
    );
  }
}
class AxesHelper extends LineSegments {
  constructor(e = 1) {
    let t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
      r = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
      n = new BufferGeometry();
    n.setAttribute("position", new Float32BufferAttribute(t, 3)),
      n.setAttribute("color", new Float32BufferAttribute(r, 3));
    let a = new LineBasicMaterial({ vertexColors: !0, toneMapped: !1 });
    super(n, a), (this.type = "AxesHelper");
  }
  setColors(e, t, r) {
    let n = new Color(),
      a = this.geometry.attributes.color.array;
    return (
      n.set(e),
      n.toArray(a, 0),
      n.toArray(a, 3),
      n.set(t),
      n.toArray(a, 6),
      n.toArray(a, 9),
      n.set(r),
      n.toArray(a, 12),
      n.toArray(a, 15),
      (this.geometry.attributes.color.needsUpdate = !0),
      this
    );
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class ShapePath {
  constructor() {
    (this.type = "ShapePath"),
      (this.color = new Color()),
      (this.subPaths = []),
      (this.currentPath = null);
  }
  moveTo(e, t) {
    return (
      (this.currentPath = new Path()),
      this.subPaths.push(this.currentPath),
      this.currentPath.moveTo(e, t),
      this
    );
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, r, n) {
    return this.currentPath.quadraticCurveTo(e, t, r, n), this;
  }
  bezierCurveTo(e, t, r, n, a, s) {
    return this.currentPath.bezierCurveTo(e, t, r, n, a, s), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e, t) {
    function r(e) {
      let t = [];
      for (let r = 0, n = e.length; r < n; r++) {
        let a = e[r],
          s = new Shape();
        (s.curves = a.curves), t.push(s);
      }
      return t;
    }
    function n(e, t) {
      let r = t.length,
        n = !1;
      for (let a = r - 1, s = 0; s < r; a = s++) {
        let o = t[a],
          l = t[s],
          c = l.x - o.x,
          u = l.y - o.y;
        if (Math.abs(u) > Number.EPSILON) {
          if (
            (u < 0 && ((o = t[s]), (c = -c), (l = t[a]), (u = -u)),
            e.y < o.y || e.y > l.y)
          )
            continue;
          if (e.y === o.y) {
            if (e.x === o.x) return !0;
          } else {
            let h = u * (e.x - o.x) - c * (e.y - o.y);
            if (0 === h) return !0;
            if (h < 0) continue;
            n = !n;
          }
        } else {
          if (e.y !== o.y) continue;
          if ((l.x <= e.x && e.x <= o.x) || (o.x <= e.x && e.x <= l.x))
            return !0;
        }
      }
      return n;
    }
    let a = ShapeUtils.isClockWise,
      s = this.subPaths;
    if (0 === s.length) return [];
    if (!0 === t) return r(s);
    let o,
      l,
      c,
      u = [];
    if (1 === s.length)
      return (l = s[0]), ((c = new Shape()).curves = l.curves), u.push(c), u;
    let h = !a(s[0].getPoints());
    h = e ? !h : h;
    let d = [],
      p = [],
      m = [],
      f = 0,
      g;
    (p[f] = void 0), (m[f] = []);
    for (let $ = 0, v = s.length; $ < v; $++)
      (o = a((g = (l = s[$]).getPoints()))),
        (o = e ? !o : o)
          ? (!h && p[f] && f++,
            (p[f] = { s: new Shape(), p: g }),
            (p[f].s.curves = l.curves),
            h && f++,
            (m[f] = []))
          : m[f].push({ h: l, p: g[0] });
    if (!p[0]) return r(s);
    if (p.length > 1) {
      let x = !1,
        y = 0;
      for (let b = 0, _ = p.length; b < _; b++) d[b] = [];
      for (let S = 0, M = p.length; S < M; S++) {
        let w = m[S];
        for (let T = 0; T < w.length; T++) {
          let A = w[T],
            C = !0;
          for (let L = 0; L < p.length; L++)
            n(A.p, p[L].p) &&
              (S !== L && y++, C ? ((C = !1), d[L].push(A)) : (x = !0));
          C && d[S].push(A);
        }
      }
      y > 0 && !1 === x && (m = d);
    }
    let E;
    for (let P = 0, R = p.length; P < R; P++) {
      (c = p[P].s), u.push(c), (E = m[P]);
      for (let D = 0, B = E.length; D < B; D++) c.holes.push(E[D].h);
    }
    return u;
  }
}
class DataUtils {
  static toHalfFloat(e) {
    Math.abs(e) > 65504 &&
      console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),
      (e = clamp(e, -65504, 65504)),
      (_floatView[0] = e);
    let t = _uint32View[0],
      r = (t >> 23) & 511;
    return _baseTable[r] + ((8388607 & t) >> _shiftTable[r]);
  }
  static fromHalfFloat(e) {
    let t = e >> 10;
    return (
      (_uint32View[0] =
        _mantissaTable[_offsetTable[t] + (1023 & e)] + _exponentTable[t]),
      _floatView[0]
    );
  }
}
let _buffer = new ArrayBuffer(4),
  _floatView = new Float32Array(_buffer),
  _uint32View = new Uint32Array(_buffer),
  _baseTable = new Uint32Array(512),
  _shiftTable = new Uint32Array(512);
for (let i = 0; i < 256; ++i) {
  let e = i - 127;
  e < -27
    ? ((_baseTable[i] = 0),
      (_baseTable[256 | i] = 32768),
      (_shiftTable[i] = 24),
      (_shiftTable[256 | i] = 24))
    : e < -14
    ? ((_baseTable[i] = 1024 >> (-e - 14)),
      (_baseTable[256 | i] = (1024 >> (-e - 14)) | 32768),
      (_shiftTable[i] = -e - 1),
      (_shiftTable[256 | i] = -e - 1))
    : e <= 15
    ? ((_baseTable[i] = (e + 15) << 10),
      (_baseTable[256 | i] = ((e + 15) << 10) | 32768),
      (_shiftTable[i] = 13),
      (_shiftTable[256 | i] = 13))
    : e < 128
    ? ((_baseTable[i] = 31744),
      (_baseTable[256 | i] = 64512),
      (_shiftTable[i] = 24),
      (_shiftTable[256 | i] = 24))
    : ((_baseTable[i] = 31744),
      (_baseTable[256 | i] = 64512),
      (_shiftTable[i] = 13),
      (_shiftTable[256 | i] = 13));
}
let _mantissaTable = new Uint32Array(2048),
  _exponentTable = new Uint32Array(64),
  _offsetTable = new Uint32Array(64);
for (let i = 1; i < 1024; ++i) {
  let t = i << 13,
    r = 0;
  for (; (8388608 & t) == 0; ) (t <<= 1), (r -= 8388608);
  (t &= -8388609), (r += 947912704), (_mantissaTable[i] = t | r);
}
for (let i = 1024; i < 2048; ++i)
  _mantissaTable[i] = 939524096 + ((i - 1024) << 13);
for (let i = 1; i < 31; ++i) _exponentTable[i] = i << 23;
(_exponentTable[31] = 1199570944), (_exponentTable[32] = 2147483648);
for (let i = 33; i < 63; ++i) _exponentTable[i] = 2147483648 + ((i - 32) << 23);
_exponentTable[63] = 3347054592;
for (let i = 1; i < 64; ++i) 32 !== i && (_offsetTable[i] = 1024);
class ParametricGeometry extends BufferGeometry {
  constructor() {
    console.error(
      "THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"
    ),
      super();
  }
}
class TextGeometry extends BufferGeometry {
  constructor() {
    console.error(
      "THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"
    ),
      super();
  }
}
function FontLoader() {
  console.error(
    "THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js"
  );
}
function Font() {
  console.error(
    "THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js"
  );
}
function ImmediateRenderObject() {
  console.error("THREE.ImmediateRenderObject has been removed.");
}
class WebGLMultisampleRenderTarget extends WebGLRenderTarget {
  constructor(e, t, r) {
    console.error(
      'THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'
    ),
      super(e, t, r),
      (this.samples = 4);
  }
}
class DataTexture2DArray extends DataArrayTexture {
  constructor(e, t, r, n) {
    console.warn(
      "THREE.DataTexture2DArray has been renamed to DataArrayTexture."
    ),
      super(e, t, r, n);
  }
}
class DataTexture3D extends Data3DTexture {
  constructor(e, t, r, n) {
    console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."),
      super(e, t, r, n);
  }
}
"undefined" != typeof __THREE_DEVTOOLS__ &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: REVISION } })
  ),
  "undefined" != typeof window &&
    (window.__THREE__
      ? console.warn("WARNING: Multiple instances of Three.js being imported.")
      : (window.__THREE__ = REVISION));
export {
  ACESFilmicToneMapping,
  AddEquation,
  AddOperation,
  AdditiveAnimationBlendMode,
  AdditiveBlending,
  AlphaFormat,
  AlwaysDepth,
  AlwaysStencilFunc,
  AmbientLight,
  AmbientLightProbe,
  AnimationClip,
  AnimationLoader,
  AnimationMixer,
  AnimationObjectGroup,
  AnimationUtils,
  ArcCurve,
  ArrayCamera,
  ArrowHelper,
  Audio,
  AudioAnalyser,
  AudioContext,
  AudioListener,
  AudioLoader,
  AxesHelper,
  BackSide,
  BasicDepthPacking,
  BasicShadowMap,
  Bone,
  BooleanKeyframeTrack,
  Box2,
  Box3,
  Box3Helper,
  BoxGeometry as BoxBufferGeometry,
  BoxGeometry,
  BoxHelper,
  BufferAttribute,
  BufferGeometry,
  BufferGeometryLoader,
  ByteType,
  Cache,
  Camera,
  CameraHelper,
  CanvasTexture,
  CapsuleGeometry as CapsuleBufferGeometry,
  CapsuleGeometry,
  CatmullRomCurve3,
  CineonToneMapping,
  CircleGeometry as CircleBufferGeometry,
  CircleGeometry,
  ClampToEdgeWrapping,
  Clock,
  Color,
  ColorKeyframeTrack,
  ColorManagement,
  CompressedTexture,
  CompressedTextureLoader,
  ConeGeometry as ConeBufferGeometry,
  ConeGeometry,
  CubeCamera,
  CubeReflectionMapping,
  CubeRefractionMapping,
  CubeTexture,
  CubeTextureLoader,
  CubeUVReflectionMapping,
  CubicBezierCurve,
  CubicBezierCurve3,
  CubicInterpolant,
  CullFaceBack,
  CullFaceFront,
  CullFaceFrontBack,
  CullFaceNone,
  Curve,
  CurvePath,
  CustomBlending,
  CustomToneMapping,
  CylinderGeometry as CylinderBufferGeometry,
  CylinderGeometry,
  Cylindrical,
  Data3DTexture,
  DataArrayTexture,
  DataTexture,
  DataTexture2DArray,
  DataTexture3D,
  DataTextureLoader,
  DataUtils,
  DecrementStencilOp,
  DecrementWrapStencilOp,
  DefaultLoadingManager,
  DepthFormat,
  DepthStencilFormat,
  DepthTexture,
  DirectionalLight,
  DirectionalLightHelper,
  DiscreteInterpolant,
  DodecahedronGeometry as DodecahedronBufferGeometry,
  DodecahedronGeometry,
  DoubleSide,
  DstAlphaFactor,
  DstColorFactor,
  DynamicCopyUsage,
  DynamicDrawUsage,
  DynamicReadUsage,
  EdgesGeometry,
  EllipseCurve,
  EqualDepth,
  EqualStencilFunc,
  EquirectangularReflectionMapping,
  EquirectangularRefractionMapping,
  Euler,
  EventDispatcher,
  ExtrudeGeometry as ExtrudeBufferGeometry,
  ExtrudeGeometry,
  FileLoader,
  FlatShading,
  Float16BufferAttribute,
  Float32BufferAttribute,
  Float64BufferAttribute,
  FloatType,
  Fog,
  FogExp2,
  Font,
  FontLoader,
  FramebufferTexture,
  FrontSide,
  Frustum,
  GLBufferAttribute,
  GLSL1,
  GLSL3,
  GreaterDepth,
  GreaterEqualDepth,
  GreaterEqualStencilFunc,
  GreaterStencilFunc,
  GridHelper,
  Group,
  HalfFloatType,
  HemisphereLight,
  HemisphereLightHelper,
  HemisphereLightProbe,
  IcosahedronGeometry as IcosahedronBufferGeometry,
  IcosahedronGeometry,
  ImageBitmapLoader,
  ImageLoader,
  ImageUtils,
  ImmediateRenderObject,
  IncrementStencilOp,
  IncrementWrapStencilOp,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  InstancedInterleavedBuffer,
  InstancedMesh,
  Int16BufferAttribute,
  Int32BufferAttribute,
  Int8BufferAttribute,
  IntType,
  InterleavedBuffer,
  InterleavedBufferAttribute,
  Interpolant,
  InterpolateDiscrete,
  InterpolateLinear,
  InterpolateSmooth,
  InvertStencilOp,
  KeepStencilOp,
  KeyframeTrack,
  LOD,
  LatheGeometry as LatheBufferGeometry,
  LatheGeometry,
  Layers,
  LessDepth,
  LessEqualDepth,
  LessEqualStencilFunc,
  LessStencilFunc,
  Light,
  LightProbe,
  Line,
  Line3,
  LineBasicMaterial,
  LineCurve,
  LineCurve3,
  LineDashedMaterial,
  LineLoop,
  LineSegments,
  LinearEncoding,
  LinearFilter,
  LinearInterpolant,
  LinearMipMapLinearFilter,
  LinearMipMapNearestFilter,
  LinearMipmapLinearFilter,
  LinearMipmapNearestFilter,
  LinearSRGBColorSpace,
  LinearToneMapping,
  Loader,
  LoaderUtils,
  LoadingManager,
  LoopOnce,
  LoopPingPong,
  LoopRepeat,
  LuminanceAlphaFormat,
  LuminanceFormat,
  MOUSE,
  Material,
  MaterialLoader,
  MathUtils,
  Matrix3,
  Matrix4,
  MaxEquation,
  Mesh,
  MeshBasicMaterial,
  MeshDepthMaterial,
  MeshDistanceMaterial,
  MeshLambertMaterial,
  MeshMatcapMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MeshToonMaterial,
  MinEquation,
  MirroredRepeatWrapping,
  MixOperation,
  MultiplyBlending,
  MultiplyOperation,
  NearestFilter,
  NearestMipMapLinearFilter,
  NearestMipMapNearestFilter,
  NearestMipmapLinearFilter,
  NearestMipmapNearestFilter,
  NeverDepth,
  NeverStencilFunc,
  NoBlending,
  NoColorSpace,
  NoToneMapping,
  NormalAnimationBlendMode,
  NormalBlending,
  NotEqualDepth,
  NotEqualStencilFunc,
  NumberKeyframeTrack,
  Object3D,
  ObjectLoader,
  ObjectSpaceNormalMap,
  OctahedronGeometry as OctahedronBufferGeometry,
  OctahedronGeometry,
  OneFactor,
  OneMinusDstAlphaFactor,
  OneMinusDstColorFactor,
  OneMinusSrcAlphaFactor,
  OneMinusSrcColorFactor,
  OrthographicCamera,
  PCFShadowMap,
  PCFSoftShadowMap,
  PMREMGenerator,
  ParametricGeometry,
  Path,
  PerspectiveCamera,
  Plane,
  PlaneGeometry as PlaneBufferGeometry,
  PlaneGeometry,
  PlaneHelper,
  PointLight,
  PointLightHelper,
  Points,
  PointsMaterial,
  PolarGridHelper,
  PolyhedronGeometry as PolyhedronBufferGeometry,
  PolyhedronGeometry,
  PositionalAudio,
  PropertyBinding,
  PropertyMixer,
  QuadraticBezierCurve,
  QuadraticBezierCurve3,
  Quaternion,
  QuaternionKeyframeTrack,
  QuaternionLinearInterpolant,
  REVISION,
  RGBADepthPacking,
  RGBAFormat,
  RGBAIntegerFormat,
  RGBA_ASTC_10x10_Format,
  RGBA_ASTC_10x5_Format,
  RGBA_ASTC_10x6_Format,
  RGBA_ASTC_10x8_Format,
  RGBA_ASTC_12x10_Format,
  RGBA_ASTC_12x12_Format,
  RGBA_ASTC_4x4_Format,
  RGBA_ASTC_5x4_Format,
  RGBA_ASTC_5x5_Format,
  RGBA_ASTC_6x5_Format,
  RGBA_ASTC_6x6_Format,
  RGBA_ASTC_8x5_Format,
  RGBA_ASTC_8x6_Format,
  RGBA_ASTC_8x8_Format,
  RGBA_BPTC_Format,
  RGBA_ETC2_EAC_Format,
  RGBA_PVRTC_2BPPV1_Format,
  RGBA_PVRTC_4BPPV1_Format,
  RGBA_S3TC_DXT1_Format,
  RGBA_S3TC_DXT3_Format,
  RGBA_S3TC_DXT5_Format,
  RGBFormat,
  RGB_ETC1_Format,
  RGB_ETC2_Format,
  RGB_PVRTC_2BPPV1_Format,
  RGB_PVRTC_4BPPV1_Format,
  RGB_S3TC_DXT1_Format,
  RGFormat,
  RGIntegerFormat,
  RawShaderMaterial,
  Ray,
  Raycaster,
  RectAreaLight,
  RedFormat,
  RedIntegerFormat,
  ReinhardToneMapping,
  RepeatWrapping,
  ReplaceStencilOp,
  ReverseSubtractEquation,
  RingGeometry as RingBufferGeometry,
  RingGeometry,
  SRGBColorSpace,
  Scene,
  ShaderChunk,
  ShaderLib,
  ShaderMaterial,
  ShadowMaterial,
  Shape,
  ShapeGeometry as ShapeBufferGeometry,
  ShapeGeometry,
  ShapePath,
  ShapeUtils,
  ShortType,
  Skeleton,
  SkeletonHelper,
  SkinnedMesh,
  SmoothShading,
  Source,
  Sphere,
  SphereGeometry as SphereBufferGeometry,
  SphereGeometry,
  Spherical,
  SphericalHarmonics3,
  SplineCurve,
  SpotLight,
  SpotLightHelper,
  Sprite,
  SpriteMaterial,
  SrcAlphaFactor,
  SrcAlphaSaturateFactor,
  SrcColorFactor,
  StaticCopyUsage,
  StaticDrawUsage,
  StaticReadUsage,
  StereoCamera,
  StreamCopyUsage,
  StreamDrawUsage,
  StreamReadUsage,
  StringKeyframeTrack,
  SubtractEquation,
  SubtractiveBlending,
  TOUCH,
  TangentSpaceNormalMap,
  TetrahedronGeometry as TetrahedronBufferGeometry,
  TetrahedronGeometry,
  TextGeometry,
  Texture,
  TextureLoader,
  TorusGeometry as TorusBufferGeometry,
  TorusGeometry,
  TorusKnotGeometry as TorusKnotBufferGeometry,
  TorusKnotGeometry,
  Triangle,
  TriangleFanDrawMode,
  TriangleStripDrawMode,
  TrianglesDrawMode,
  TubeGeometry as TubeBufferGeometry,
  TubeGeometry,
  UVMapping,
  Uint16BufferAttribute,
  Uint32BufferAttribute,
  Uint8BufferAttribute,
  Uint8ClampedBufferAttribute,
  Uniform,
  UniformsLib,
  UniformsUtils,
  UnsignedByteType,
  UnsignedInt248Type,
  UnsignedIntType,
  UnsignedShort4444Type,
  UnsignedShort5551Type,
  UnsignedShortType,
  VSMShadowMap,
  Vector2,
  Vector3,
  Vector4,
  VectorKeyframeTrack,
  VideoTexture,
  WebGL1Renderer,
  WebGL3DRenderTarget,
  WebGLArrayRenderTarget,
  WebGLCubeRenderTarget,
  WebGLMultipleRenderTargets,
  WebGLMultisampleRenderTarget,
  WebGLRenderTarget,
  WebGLRenderer,
  WebGLUtils,
  WireframeGeometry,
  WrapAroundEnding,
  ZeroCurvatureEnding,
  ZeroFactor,
  ZeroSlopeEnding,
  ZeroStencilOp,
  _SRGBAFormat,
  sRGBEncoding,
};
