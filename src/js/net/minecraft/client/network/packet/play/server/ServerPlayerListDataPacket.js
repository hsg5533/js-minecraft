import e from "../../../Packet.js";
export default class t extends e {
  constructor() {
    super(), (this.header = null), (this.footer = null);
  }
  read(e) {
    (this.header = e.readTextComponent()),
      (this.footer = e.readTextComponent());
  }
  handle(e) {
    e.handleServerPlayerListData(this);
  }
  getHeader() {
    return this.header;
  }
  getFooter() {
    return this.footer;
  }
}
