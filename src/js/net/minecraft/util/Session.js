import e from "./GameProfile.js";
export default class s {
  constructor(e, s) {
    (this.profile = e), (this.accessToken = s);
  }
  setAccessToken(e) {
    this.accessToken = e;
  }
  getProfile() {
    return this.profile;
  }
  getAccessToken() {
    return this.accessToken;
  }
  toJson() {
    return JSON.stringify({
      profile: {
        uuid: this.profile.uuid.toString(),
        username: this.profile.username,
      },
      accessToken: this.accessToken,
    });
  }
  static fromJson(r) {
    let o = JSON.parse(r);
    return new s(new e(o.profile.uuid, o.profile.username), o.accessToken);
  }
}
