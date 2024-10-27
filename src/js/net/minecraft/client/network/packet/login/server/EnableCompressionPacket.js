import s from "../../../Packet.js";
export default class e extends s {
  constructor() {
    super(), (this.compressionThreshold = 0);
  }
  write(s) {}
  read(s) {
    this.compressionThreshold = s.readVarInt();
  }
  handle(s) {
    s.handleEnableCompression(this);
  }
  getCompressionThreshold() {
    return this.compressionThreshold;
  }
}
