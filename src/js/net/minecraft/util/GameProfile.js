export default class t {
  constructor(t, e) {
    (this.uuid = t), (this.username = e);
  }
  getCompactUUID() {
    return this.uuid.toString().replace(/-/g, "");
  }
  getId() {
    return this.uuid;
  }
  getUsername() {
    return this.username;
  }
}
