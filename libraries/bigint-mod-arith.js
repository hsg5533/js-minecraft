window["bigint-mod-arith"] = (function () {
  function n(n, t) {
    if (
      ("number" == typeof n && (n = BigInt(n)),
      "number" == typeof t && (t = BigInt(t)),
      t <= 0n)
    )
      throw RangeError("n must be > 0");
    let e = n % t;
    return e < 0n ? e + t : e;
  }
  return {
    bigIntToBytes: function n(t) {
      let e = t.toString(16),
        r = [];
      for (let o = 0; o < e.length; o += 2)
        r.push(parseInt(e.substr(o, 2), 16));
      return r;
    },
    bytesToBigInt: function n(t) {
      return BigInt(
        "0x" +
          Array.from(t, (n) => ("0" + (255 & n).toString(16)).slice(-2)).join(
            ""
          )
      );
    },
    modPow: function t(e, r, o) {
      if (
        ("number" == typeof e && (e = BigInt(e)),
        "number" == typeof r && (r = BigInt(r)),
        "number" == typeof o && (o = BigInt(o)),
        o <= 0n)
      )
        throw RangeError("n must be > 0");
      if (1n === o) return 0n;
      if (((e = n(e, o)), r < 0n)) {
        var u;
        return (function t(e, r) {
          let o = (function n(t, e) {
            if (
              ("number" == typeof t && (t = BigInt(t)),
              "number" == typeof e && (e = BigInt(e)),
              t <= 0n || e <= 0n)
            )
              throw RangeError("a and b MUST be > 0");
            let r = 0n,
              o = 1n,
              u = 1n,
              f = 0n;
            for (; 0n !== t; ) {
              let i = e / t,
                $ = e % t,
                b = r - u * i,
                m = o - f * i;
              (e = t), (t = $), (r = u), (o = f), (u = b), (f = m);
            }
            return { g: e, x: r, y: o };
          })(n(e, r), r);
          if (1n === o.g) return n(o.x, r);
          throw RangeError(
            `${e.toString()} does not have inverse modulo ${r.toString()}`
          );
        })(t(e, (u = r) >= 0 ? u : -u, o), o);
      }
      let f = 1n;
      for (; r > 0; )
        r % 2n === 1n && (f = (f * e) % o), (r /= 2n), (e = e ** 2n % o);
      return f;
    },
  };
})();
