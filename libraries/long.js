let Long = (function () {
  var i = null;
  try {
    i = new WebAssembly.Instance(
      new WebAssembly.Module(
        new Uint8Array([
          0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127,
          127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0,
          11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2,
          5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5,
          114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103,
          104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173,
          32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134,
          132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1,
          126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173,
          66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11,
          36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173,
          32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32,
          4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132,
          32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135,
          167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66,
          32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4,
          66, 32, 135, 167, 36, 0, 32, 4, 167, 11,
        ])
      ),
      {}
    ).exports;
  } catch (t) {}
  function n(i, t, n) {
    (this.low = 0 | i), (this.high = 0 | t), (this.unsigned = !!n);
  }
  function h(i) {
    return !0 === (i && i.__isLong__);
  }
  function s(i) {
    var t = Math.clz32(i & -i);
    return i ? 31 - t : t;
  }
  n.prototype.__isLong__,
    Object.defineProperty(n.prototype, "__isLong__", { value: !0 }),
    (n.isLong = h);
  var e = {},
    r = {};
  function u(i, t) {
    var n, h, s;
    return t
      ? ((i >>>= 0), (s = 0 <= i && i < 256) && (h = r[i]))
        ? h
        : ((n = o(i, 0, !0)), s && (r[i] = n), n)
      : ((i |= 0), (s = -128 <= i && i < 128) && (h = e[i]))
      ? h
      : ((n = o(i, i < 0 ? -1 : 0, !1)), s && (e[i] = n), n);
  }
  function _(i, t) {
    if (isNaN(i)) return t ? v : w;
    if (t) {
      if (i < 0) return v;
      if (i >= d) return q;
    } else {
      if (i <= -a) return y;
      if (i + 1 >= a) return E;
    }
    return i < 0 ? _(-i, t).neg() : o(i % l | 0, (i / l) | 0, t);
  }
  function o(i, t, h) {
    return new n(i, t, h);
  }
  (n.fromInt = u), (n.fromNumber = _), (n.fromBits = o);
  var f = Math.pow;
  function g(i, t, n) {
    if (0 === i.length) throw Error("empty string");
    if (
      ("number" == typeof t ? ((n = t), (t = !1)) : (t = !!t),
      "NaN" === i || "Infinity" === i || "+Infinity" === i || "-Infinity" === i)
    )
      return t ? v : w;
    if ((n = n || 10) < 2 || 36 < n) throw RangeError("radix");
    if ((h = i.indexOf("-")) > 0) throw Error("interior hyphen");
    if (0 === h) return g(i.substring(1), t, n).neg();
    for (var h, s = _(f(n, 8)), e = w, r = 0; r < i.length; r += 8) {
      var u = Math.min(8, i.length - r),
        o = parseInt(i.substring(r, r + u), n);
      if (u < 8) {
        var $ = _(f(n, u));
        e = e.mul($).add(_(o));
      } else e = (e = e.mul(s)).add(_(o));
    }
    return (e.unsigned = t), e;
  }
  function $(i, t) {
    return "number" == typeof i
      ? _(i, t)
      : "string" == typeof i
      ? g(i, t)
      : o(i.low, i.high, "boolean" == typeof t ? t : i.unsigned);
  }
  (n.fromString = g), (n.fromValue = $);
  var l = 4294967296,
    d = l * l,
    a = d / 2,
    c = u(16777216),
    w = u(0);
  n.ZERO = w;
  var v = u(0, !0);
  n.UZERO = v;
  var m = u(1);
  n.ONE = m;
  var x = u(1, !0);
  n.UONE = x;
  var N = u(-1);
  n.NEG_ONE = N;
  var E = o(-1, 2147483647, !1);
  n.MAX_VALUE = E;
  var q = o(-1, -1, !0);
  n.MAX_UNSIGNED_VALUE = q;
  var y = o(0, -2147483648, !1);
  n.MIN_VALUE = y;
  var p = n.prototype;
  return (
    (p.toInt = function i() {
      return this.unsigned ? this.low >>> 0 : this.low;
    }),
    (p.toNumber = function i() {
      return this.unsigned
        ? (this.high >>> 0) * l + (this.low >>> 0)
        : this.high * l + (this.low >>> 0);
    }),
    (p.toString = function i(t) {
      if ((t = t || 10) < 2 || 36 < t) throw RangeError("radix");
      if (this.isZero()) return "0";
      if (this.isNegative()) {
        if (!this.eq(y)) return "-" + this.neg().toString(t);
        var n = _(t),
          h = this.div(n),
          s = h.mul(n).sub(this);
        return h.toString(t) + s.toInt().toString(t);
      }
      for (var e = _(f(t, 6), this.unsigned), r = this, u = ""; ; ) {
        var o = r.div(e),
          g = (r.sub(o.mul(e)).toInt() >>> 0).toString(t);
        if ((r = o).isZero()) return g + u;
        for (; g.length < 6; ) g = "0" + g;
        u = "" + g + u;
      }
    }),
    (p.getHighBits = function i() {
      return this.high;
    }),
    (p.getHighBitsUnsigned = function i() {
      return this.high >>> 0;
    }),
    (p.getLowBits = function i() {
      return this.low;
    }),
    (p.getLowBitsUnsigned = function i() {
      return this.low >>> 0;
    }),
    (p.getNumBitsAbs = function i() {
      if (this.isNegative())
        return this.eq(y) ? 64 : this.neg().getNumBitsAbs();
      for (
        var t = 0 != this.high ? this.high : this.low, n = 31;
        n > 0 && (t & (1 << n)) == 0;
        n--
      );
      return 0 != this.high ? n + 33 : n + 1;
    }),
    (p.isZero = function i() {
      return 0 === this.high && 0 === this.low;
    }),
    (p.eqz = p.isZero),
    (p.isNegative = function i() {
      return !this.unsigned && this.high < 0;
    }),
    (p.isPositive = function i() {
      return this.unsigned || this.high >= 0;
    }),
    (p.isOdd = function i() {
      return (1 & this.low) == 1;
    }),
    (p.isEven = function i() {
      return (1 & this.low) == 0;
    }),
    (p.equals = function i(t) {
      return (
        h(t) || (t = $(t)),
        (this.unsigned === t.unsigned ||
          this.high >>> 31 != 1 ||
          t.high >>> 31 != 1) &&
          this.high === t.high &&
          this.low === t.low
      );
    }),
    (p.eq = p.equals),
    (p.notEquals = function i(t) {
      return !this.eq(t);
    }),
    (p.neq = p.notEquals),
    (p.ne = p.notEquals),
    (p.lessThan = function i(t) {
      return 0 > this.comp(t);
    }),
    (p.lt = p.lessThan),
    (p.lessThanOrEqual = function i(t) {
      return 0 >= this.comp(t);
    }),
    (p.lte = p.lessThanOrEqual),
    (p.le = p.lessThanOrEqual),
    (p.greaterThan = function i(t) {
      return this.comp(t) > 0;
    }),
    (p.gt = p.greaterThan),
    (p.greaterThanOrEqual = function i(t) {
      return this.comp(t) >= 0;
    }),
    (p.gte = p.greaterThanOrEqual),
    (p.ge = p.greaterThanOrEqual),
    (p.compare = function i(t) {
      if ((h(t) || (t = $(t)), this.eq(t))) return 0;
      var n = this.isNegative(),
        s = t.isNegative();
      return n && !s
        ? -1
        : !n && s
        ? 1
        : this.unsigned
        ? t.high >>> 0 > this.high >>> 0 ||
          (t.high === this.high && t.low >>> 0 > this.low >>> 0)
          ? -1
          : 1
        : this.sub(t).isNegative()
        ? -1
        : 1;
    }),
    (p.comp = p.compare),
    (p.negate = function i() {
      return !this.unsigned && this.eq(y) ? y : this.not().add(m);
    }),
    (p.neg = p.negate),
    (p.add = function i(t) {
      h(t) || (t = $(t));
      var n = this.high >>> 16,
        s = 65535 & this.high,
        e = this.low >>> 16,
        r = 65535 & this.low,
        u = t.high >>> 16,
        _ = 65535 & t.high,
        f = t.low >>> 16,
        g = 65535 & t.low,
        l = 0,
        d = 0,
        a = 0,
        c = 0;
      return (
        (c += r + g),
        (a += c >>> 16),
        (c &= 65535),
        (a += e + f),
        (d += a >>> 16),
        (a &= 65535),
        (d += s + _),
        (l += d >>> 16),
        (d &= 65535),
        (l += n + u),
        o((a << 16) | c, ((l &= 65535) << 16) | d, this.unsigned)
      );
    }),
    (p.subtract = function i(t) {
      return h(t) || (t = $(t)), this.add(t.neg());
    }),
    (p.sub = p.subtract),
    (p.multiply = function t(n) {
      if (this.isZero()) return this;
      if ((h(n) || (n = $(n)), i))
        return o(
          i.mul(this.low, this.high, n.low, n.high),
          i.get_high(),
          this.unsigned
        );
      if (n.isZero()) return this.unsigned ? v : w;
      if (this.eq(y)) return n.isOdd() ? y : w;
      if (n.eq(y)) return this.isOdd() ? y : w;
      if (this.isNegative())
        return n.isNegative()
          ? this.neg().mul(n.neg())
          : this.neg().mul(n).neg();
      if (n.isNegative()) return this.mul(n.neg()).neg();
      if (this.lt(c) && n.lt(c))
        return _(this.toNumber() * n.toNumber(), this.unsigned);
      var s = this.high >>> 16,
        e = 65535 & this.high,
        r = this.low >>> 16,
        u = 65535 & this.low,
        f = n.high >>> 16,
        g = 65535 & n.high,
        l = n.low >>> 16,
        d = 65535 & n.low,
        a = 0,
        m = 0,
        x = 0,
        N = 0;
      return (
        (N += u * d),
        (x += N >>> 16),
        (N &= 65535),
        (x += r * d),
        (m += x >>> 16),
        (x &= 65535),
        (x += u * l),
        (m += x >>> 16),
        (x &= 65535),
        (m += e * d),
        (a += m >>> 16),
        (m &= 65535),
        (m += r * l),
        (a += m >>> 16),
        (m &= 65535),
        (m += u * g),
        (a += m >>> 16),
        (m &= 65535),
        (a += s * d + e * l + r * g + u * f),
        o((x << 16) | N, ((a &= 65535) << 16) | m, this.unsigned)
      );
    }),
    (p.mul = p.multiply),
    (p.divide = function t(n) {
      if ((h(n) || (n = $(n)), n.isZero())) throw Error("division by zero");
      if (i)
        return this.unsigned ||
          -2147483648 !== this.high ||
          -1 !== n.low ||
          -1 !== n.high
          ? o(
              (this.unsigned ? i.div_u : i.div_s)(
                this.low,
                this.high,
                n.low,
                n.high
              ),
              i.get_high(),
              this.unsigned
            )
          : this;
      if (this.isZero()) return this.unsigned ? v : w;
      if (this.unsigned) {
        if ((n.unsigned || (n = n.toUnsigned()), n.gt(this))) return v;
        if (n.gt(this.shru(1))) return x;
        r = v;
      } else {
        if (this.eq(y))
          return n.eq(m) || n.eq(N)
            ? y
            : n.eq(y)
            ? m
            : (s = this.shr(1).div(n).shl(1)).eq(w)
            ? n.isNegative()
              ? m
              : N
            : ((e = this.sub(n.mul(s))), (r = s.add(e.div(n))));
        if (n.eq(y)) return this.unsigned ? v : w;
        if (this.isNegative())
          return n.isNegative()
            ? this.neg().div(n.neg())
            : this.neg().div(n).neg();
        if (n.isNegative()) return this.div(n.neg()).neg();
        r = w;
      }
      for (e = this; e.gte(n); ) {
        for (
          var s,
            e,
            r,
            u = Math.ceil(
              Math.log(
                (s = Math.max(1, Math.floor(e.toNumber() / n.toNumber())))
              ) / Math.LN2
            ),
            g = u <= 48 ? 1 : f(2, u - 48),
            l = _(s),
            d = l.mul(n);
          d.isNegative() || d.gt(e);

        )
          (s -= g), (d = (l = _(s, this.unsigned)).mul(n));
        l.isZero() && (l = m), (r = r.add(l)), (e = e.sub(d));
      }
      return r;
    }),
    (p.div = p.divide),
    (p.modulo = function t(n) {
      return (h(n) || (n = $(n)), i)
        ? o(
            (this.unsigned ? i.rem_u : i.rem_s)(
              this.low,
              this.high,
              n.low,
              n.high
            ),
            i.get_high(),
            this.unsigned
          )
        : this.sub(this.div(n).mul(n));
    }),
    (p.mod = p.modulo),
    (p.rem = p.modulo),
    (p.not = function i() {
      return o(~this.low, ~this.high, this.unsigned);
    }),
    (p.countLeadingZeros = function i() {
      return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
    }),
    (p.clz = p.countLeadingZeros),
    (p.countTrailingZeros = function i() {
      return this.low ? s(this.low) : s(this.high) + 32;
    }),
    (p.ctz = p.countTrailingZeros),
    (p.and = function i(t) {
      return (
        h(t) || (t = $(t)),
        o(this.low & t.low, this.high & t.high, this.unsigned)
      );
    }),
    (p.or = function i(t) {
      return (
        h(t) || (t = $(t)),
        o(this.low | t.low, this.high | t.high, this.unsigned)
      );
    }),
    (p.xor = function i(t) {
      return (
        h(t) || (t = $(t)),
        o(this.low ^ t.low, this.high ^ t.high, this.unsigned)
      );
    }),
    (p.shiftLeft = function i(t) {
      return (h(t) && (t = t.toInt()), 0 == (t &= 63))
        ? this
        : t < 32
        ? o(
            this.low << t,
            (this.high << t) | (this.low >>> (32 - t)),
            this.unsigned
          )
        : o(0, this.low << (t - 32), this.unsigned);
    }),
    (p.shl = p.shiftLeft),
    (p.shiftRight = function i(t) {
      return (h(t) && (t = t.toInt()), 0 == (t &= 63))
        ? this
        : t < 32
        ? o(
            (this.low >>> t) | (this.high << (32 - t)),
            this.high >> t,
            this.unsigned
          )
        : o(this.high >> (t - 32), this.high >= 0 ? 0 : -1, this.unsigned);
    }),
    (p.shr = p.shiftRight),
    (p.shiftRightUnsigned = function i(t) {
      return (h(t) && (t = t.toInt()), 0 == (t &= 63))
        ? this
        : t < 32
        ? o(
            (this.low >>> t) | (this.high << (32 - t)),
            this.high >>> t,
            this.unsigned
          )
        : 32 === t
        ? o(this.high, 0, this.unsigned)
        : o(this.high >>> (t - 32), 0, this.unsigned);
    }),
    (p.shru = p.shiftRightUnsigned),
    (p.shr_u = p.shiftRightUnsigned),
    (p.rotateLeft = function i(t) {
      var n;
      return (h(t) && (t = t.toInt()), 0 == (t &= 63))
        ? this
        : 32 === t
        ? o(this.high, this.low, this.unsigned)
        : t < 32
        ? ((n = 32 - t),
          o(
            (this.low << t) | (this.high >>> n),
            (this.high << t) | (this.low >>> n),
            this.unsigned
          ))
        : ((t -= 32),
          (n = 32 - t),
          o(
            (this.high << t) | (this.low >>> n),
            (this.low << t) | (this.high >>> n),
            this.unsigned
          ));
    }),
    (p.rotl = p.rotateLeft),
    (p.rotateRight = function i(t) {
      var n;
      return (h(t) && (t = t.toInt()), 0 == (t &= 63))
        ? this
        : 32 === t
        ? o(this.high, this.low, this.unsigned)
        : t < 32
        ? ((n = 32 - t),
          o(
            (this.high << n) | (this.low >>> t),
            (this.low << n) | (this.high >>> t),
            this.unsigned
          ))
        : ((t -= 32),
          (n = 32 - t),
          o(
            (this.low << n) | (this.high >>> t),
            (this.high << n) | (this.low >>> t),
            this.unsigned
          ));
    }),
    (p.rotr = p.rotateRight),
    (p.toSigned = function i() {
      return this.unsigned ? o(this.low, this.high, !1) : this;
    }),
    (p.toUnsigned = function i() {
      return this.unsigned ? this : o(this.low, this.high, !0);
    }),
    (p.toBytes = function i(t) {
      return t ? this.toBytesLE() : this.toBytesBE();
    }),
    (p.toBytesLE = function i() {
      var t = this.high,
        n = this.low;
      return [
        255 & n,
        (n >>> 8) & 255,
        (n >>> 16) & 255,
        n >>> 24,
        255 & t,
        (t >>> 8) & 255,
        (t >>> 16) & 255,
        t >>> 24,
      ];
    }),
    (p.toBytesBE = function i() {
      var t = this.high,
        n = this.low;
      return [
        t >>> 24,
        (t >>> 16) & 255,
        (t >>> 8) & 255,
        255 & t,
        n >>> 24,
        (n >>> 16) & 255,
        (n >>> 8) & 255,
        255 & n,
      ];
    }),
    (n.fromBytes = function i(t, h, s) {
      return s ? n.fromBytesLE(t, h) : n.fromBytesBE(t, h);
    }),
    (n.fromBytesLE = function i(t, h) {
      return new n(
        t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
        t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
        h
      );
    }),
    (n.fromBytesBE = function i(t, h) {
      return new n(
        (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
        (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
        h
      );
    }),
    n
  );
})();
export default Long;
