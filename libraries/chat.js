export function format(e, r = {}) {
  let a = formatString(convert(e, r), r.useAnsiCodes);
  if (!r.maxLineLength) return a;
  {
    let t = "",
      o = !1,
      c = 0;
    for (let n of a)
      "\x1b" === n ? (o = !0) : "m" === n ? (o = !1) : "\n" === n && (c = 0),
        (t += n),
        c === r.maxLineLength && ((t += "\n"), (c = 0)),
        o || (c += 1);
    return t;
  }
}
export function convert(e, r = {}) {
  if ("string" == typeof e) return r.keepOld ? { text: e } : convertOld(e);
  if (
    (e.extra && (e.extra = e.extra.map((e) => convert(e, r))),
    r.stripNonText &&
      (delete e.hoverEvent, delete e.clickEvent, delete e.insertion),
    !r.keepOld)
  ) {
    let { text: a, extra: t } = convertOld(e.text);
    (e.text = a),
      t && e.extra
        ? (e.extra = [...t, ...e.extra])
        : t && !e.extra && (e.extra = t);
  }
  return e;
}
export function convertOld(e) {
  let r = { text: "" },
    a = [];
  for (let [t, o] of e.split(/ยง(.)/).entries())
    if (0 === t) r.text = o;
    else if (t % 2 == 0) 0 !== o.length && a.push({ ...r, text: o });
    else
      switch (o) {
        case "k":
          r.obfuscated = !0;
          break;
        case "l":
        case "o":
          r.bold = !0;
          break;
        case "m":
          r.strikethrough = !0;
          break;
        case "n":
          r.underlined = !0;
          break;
        case "r":
          r = { text: r.text };
          break;
        case "0":
          r.color = "black";
          break;
        case "1":
          r.color = "dark_blue";
          break;
        case "2":
          r.color = "dark_green";
          break;
        case "3":
          r.color = "dark_aqua";
          break;
        case "4":
          r.color = "dark_red";
          break;
        case "5":
          r.color = "dark_purple";
          break;
        case "6":
          r.color = "gold";
          break;
        case "7":
          r.color = "gray";
          break;
        case "8":
          r.color = "dark_gray";
          break;
        case "9":
          r.color = "blue";
          break;
        case "a":
          r.color = "green";
          break;
        case "b":
          r.color = "aqua";
          break;
        case "c":
          r.color = "red";
          break;
        case "d":
          r.color = "light_purple";
          break;
        case "e":
          r.color = "yellow";
          break;
        case "f":
          r.color = "white";
      }
  return (r = { text: r.text }), a.length > 0 && (r.extra = a), r;
}
export function flatten(e) {
  let { text: r, extra: a, ...t } = e,
    o = [{ text: r, ...t }];
  return (
    a &&
      o.push(
        ...flattenArray(
          a.map((e) => {
            if ("string" == typeof e) return [{ text: e, ...t }];
            if (!("text" in e)) throw Error("Not a StringComponent");
            return flatten(e).map((e) => ({ ...e, ...t, ...e }));
          })
        )
      ),
    o
  );
}
export function formatString(e) {
  return flatten(e)
    .map((e) => {
      let r = colorToAnsiCode(e.color);
      return (
        e.bold && (r += "\xa7l"),
        e.italic && (r += "\xa7o"),
        e.underlined && (r += "\xa7n"),
        e.strikethrough && (r += "\xa7m"),
        r ? r + e.text + "\xa7r" : e.text
      );
    })
    .join("");
}
function colorToAnsiCode(e) {
  let r = "";
  switch (e) {
    case "black":
      r += "0";
      break;
    case "dark_blue":
      r += "1";
      break;
    case "dark_green":
      r += "2";
      break;
    case "dark_aqua":
      r += "3";
      break;
    case "dark_red":
      r += "4";
      break;
    case "dark_purple":
      r += "5";
      break;
    case "gold":
      r += "6";
      break;
    case "gray":
      r += "7";
      break;
    case "dark_gray":
      r += "8";
      break;
    case "blue":
      r += "9";
      break;
    case "green":
      r += "a";
      break;
    case "aqua":
      r += "b";
      break;
    case "red":
      r += "c";
      break;
    case "light_purple":
      r += "d";
      break;
    case "yellow":
      r += "e";
      break;
    case "white":
      r += "f";
  }
  return r && "\xa7" + r;
}
function flattenArray(e) {
  return [].concat(...e);
}
export function chatToText(e, r) {
  return format(e, { translation: r });
}
