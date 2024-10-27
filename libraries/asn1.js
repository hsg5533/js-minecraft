!(function (e) {
  "use strict";
  e.ASN1 || (e.ASN1 = {}), e.Enc || (e.Enc = {}), e.PEM || (e.PEM = {});
  var n = e.ASN1,
    t = e.Enc,
    r = e.PEM;
  (n.ELOOPN = 102),
    (n.ELOOP =
      "uASN1.js Error: iterated over " +
      n.ELOOPN +
      "+ elements (probably a malformed file)"),
    (n.EDEEPN = 60),
    (n.EDEEP =
      "uASN1.js Error: element nested " +
      n.EDEEPN +
      "+ layers deep (probably a malformed file)"),
    (n.CTYPES = [48, 49, 160, 161]),
    (n.VTYPES = [1, 2, 5, 6, 12, 130]),
    (n.parse = function e(r) {
      var l = (function e(r, l, i) {
        if (l.length >= n.EDEEPN) throw Error(n.EDEEP);
        var o,
          h,
          u = 2,
          f = { type: r[0], lengthSize: 0, length: r[1] },
          g = 0,
          $ = 0;
        function a(t) {
          for (
            f.children = [];
            g < n.ELOOPN && u < 2 + f.length + f.lengthSize;

          ) {
            if (
              ((g += 1),
              (l.length += 1),
              (o = e(r.slice(u, u + h), l, t)),
              (l.length -= 1),
              (u += 2 + o.lengthSize + o.length) > 2 + f.lengthSize + f.length)
            )
              throw (
                (t || console.error(JSON.stringify(f, n._replacer, 2)),
                Error(
                  "Parse error: child value length (" +
                    o.length +
                    ") is greater than remaining parent length (" +
                    (f.length - u) +
                    " = " +
                    f.length +
                    " - " +
                    u +
                    ")"
                ))
              );
            f.children.push(o);
          }
          if (u !== 2 + f.lengthSize + f.length)
            throw Error("premature end-of-file");
          if (g >= n.ELOOPN) throw Error(n.ELOOP);
          return delete f.value, f;
        }
        if (
          (128 & f.length &&
            ((f.lengthSize = 127 & f.length),
            (f.length = parseInt(t.bufToHex(r.slice(u, u + f.lengthSize)), 16)),
            (u += f.lengthSize)),
          0 === r[u] &&
            (2 === f.type || 3 === f.type) &&
            f.length > 1 &&
            ((u += 1), ($ = -1)),
          (h = f.length + $),
          -1 !== n.CTYPES.indexOf(f.type))
        )
          return a(void 0);
        if (((f.value = r.slice(u, u + h)), -1 !== n.VTYPES.indexOf(f.type)))
          return f;
        try {
          return a(!0);
        } catch (c) {
          return (f.children.length = 0), f;
        }
      })(r, []);
      if ((r.byteLength || r.length) !== 2 + l.lengthSize + l.length)
        throw Error(
          "Length of buffer does not match length of ASN.1 sequence."
        );
      return l;
    }),
    (n._replacer = function (e, n) {
      return "type" === e
        ? "0x" + t.numToHex(n)
        : n && "value" === e
        ? "0x" + t.bufToHex(n.data || n)
        : n;
    }),
    (r.parseBlock =
      r.parseBlock ||
      function (e) {
        var n = e
          .split(/\n/)
          .filter(function (e) {
            return !/-----/.test(e);
          })
          .join("");
        return { der: t.base64ToBuf(n) };
      }),
    (t.base64ToBuf = function (e) {
      return t.binToBuf(atob(e));
    }),
    (t.binToBuf = function (e) {
      var n = e.split("").map(function (e) {
        return e.charCodeAt(0);
      });
      return "undefined" != typeof Uint8Array ? new Uint8Array(n) : n;
    }),
    (t.bufToHex = function (e) {
      var n,
        t,
        r = [],
        l = e.byteLength || e.length;
      for (n = 0; n < l; n += 1)
        (t = e[n].toString(16)).length % 2 && (t = "0" + t), r.push(t);
      return r.join("").toLowerCase();
    }),
    (t.numToHex = function (e) {
      return (e = e.toString(16)).length % 2 ? "0" + e : e;
    });
})("undefined" != typeof window ? window : module.exports);
