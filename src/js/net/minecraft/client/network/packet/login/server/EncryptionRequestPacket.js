import e from "../../../Packet.js";
export default class r extends e {
  constructor() {
    super();
  }
  write(e) {}
  read(e) {
    (this.serverId = e.readString()),
      (this.publicKey = e.readByteArray()),
      (this.verifyToken = e.readByteArray());
  }
  handle(e) {
    e.handleEncryptionRequest(this);
  }
}
