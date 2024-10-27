import e from "./ByteBuf.js";
import { require as t } from "../../../../../Start.js";
export default class r {
  constructor(e) {
    this.networkManager = e;
  }
  joinServer(e, t, r) {
    this.networkManager.sendProxyPacket(1, {
      accessToken: t,
      selectedProfile: e.getCompactUUID(),
      serverId: r,
    });
  }
  createServerHash(r, a, o) {
    let n = t("sha1")
        .create()
        .update(new TextEncoder().encode(r))
        .update(a)
        .update(new Uint8Array(o))
        .digest(),
      s = new e(new Int8Array(n)),
      c = "";
    if (0 > s.readByte()) {
      let d = !0;
      for (let f = s.length() - 1; f >= 0; --f) {
        let i = 255 & ~s.readByte(f);
        d
          ? ((d = 255 === i), s.writeByte(d ? 0 : i + 1, f))
          : s.writeByte(i, f);
      }
      c = "-";
    }
    return c + s.toString().replace(/^0+/g, "");
  }
}
