import e from "../../../Packet.js";
import r from "../../../util/CryptManager.js";
export default class t extends e {
  constructor(e, t, y) {
    super(),
      (this.secretKeyEncrypted = r.encryptRSA(t, e)),
      (this.verifyTokenEncrypted = r.encryptRSA(t, y));
  }
  write(e) {
    e.writeByteArray(this.secretKeyEncrypted),
      e.writeByteArray(this.verifyTokenEncrypted);
  }
  read(e) {}
}
