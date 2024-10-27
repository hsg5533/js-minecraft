import e from "./ProtocolState.js";
import r from "./packet/handshake/client/HandshakePacket.js";
import t from "./packet/status/client/StatusQueryPacket.js";
import i from "./packet/login/client/LoginStartPacket.js";
import s from "./packet/status/server/StatusResponsePacket.js";
import a from "./packet/login/server/EncryptionRequestPacket.js";
import o from "./packet/login/client/EncryptionResponsePacket.js";
import c from "./packet/login/server/LoginDisconnectPacket.js";
import p from "./packet/login/server/LoginSuccessPacket.js";
import n from "./packet/login/server/EnableCompressionPacket.js";
import l from "./packet/play/server/ServerKeepAlivePacket.js";
import k from "./packet/play/server/ServerJoinGamePacket.js";
import m from "./packet/play/client/ClientKeepAlivePacket.js";
import v from "./packet/play/client/ClientChatPacket.js";
import P from "./packet/play/client/ClientPlayerMovementPacket.js";
import $ from "./packet/play/client/ClientPlayerRotationPacket.js";
import S from "./packet/play/client/ClientPlayerPositionPacket.js";
import g from "./packet/play/client/ClientPlayerPositionRotationPacket.js";
import h from "./packet/play/server/ServerChunkDataPacket.js";
import f from "./packet/play/server/ServerMultiChunkDataPacket.js";
import y from "./packet/play/server/ServerBlockChangePacket.js";
import L from "./packet/play/server/ServerChatPacket.js";
import j from "./packet/play/server/ServerDisconnectPacket.js";
import x from "./packet/play/server/ServerPlayerPositionRotationPacket.js";
import C from "./packet/play/server/ServerPlayerListEntryPacket.js";
import A from "./packet/play/server/ServerPlayerListDataPacket.js";
import u from "./packet/play/server/ServerSpawnPlayerPacket.js";
import Y from "./packet/play/server/ServerEntityPositionRotationPacket.js";
import d from "./packet/play/server/ServerEntityMovementPacket.js";
import I from "./packet/play/server/ServerEntityRotationPacket.js";
import E from "./packet/play/server/ServerEntityPositionPacket.js";
import _ from "./packet/play/server/ServerEntityTeleportPacket.js";
import R from "./packet/play/server/ServerDestroyEntitiesPacket.js";
import B from "./packet/play/server/ServerEntityHeadLookPacket.js";
import D from "./packet/play/client/ClientPlayerStatePacket.js";
import G from "./packet/play/client/ClientSwingArmPacket.js";
import N from "./packet/play/server/ServerAnimationPacket.js";
import T from "./packet/play/server/ServerEntityMetadataPacket.js";
import O from "./packet/play/server/ServerConfirmTransactionPacket.js";
import H from "./packet/play/client/ClientConfirmTransactionPacket.js";
export default class M {
  constructor() {
    (this.packetsClient = []),
      (this.packetsServer = []),
      this.registerClient(e.HANDSHAKE, 0, r),
      this.registerClient(e.STATUS, 0, t),
      this.registerServer(e.STATUS, 0, s),
      this.registerServer(e.LOGIN, 0, c),
      this.registerServer(e.LOGIN, 1, a),
      this.registerServer(e.LOGIN, 2, p),
      this.registerServer(e.LOGIN, 3, n),
      this.registerClient(e.LOGIN, 0, i),
      this.registerClient(e.LOGIN, 1, o),
      this.registerServer(e.PLAY, 0, l),
      this.registerServer(e.PLAY, 1, k),
      this.registerServer(e.PLAY, 2, L),
      this.registerServer(e.PLAY, 8, x),
      this.registerServer(e.PLAY, 11, N),
      this.registerServer(e.PLAY, 12, u),
      this.registerServer(e.PLAY, 19, R),
      this.registerServer(e.PLAY, 20, d),
      this.registerServer(e.PLAY, 21, E),
      this.registerServer(e.PLAY, 22, I),
      this.registerServer(e.PLAY, 23, Y),
      this.registerServer(e.PLAY, 24, _),
      this.registerServer(e.PLAY, 25, B),
      this.registerServer(e.PLAY, 28, T),
      this.registerServer(e.PLAY, 33, h),
      this.registerServer(e.PLAY, 35, y),
      this.registerServer(e.PLAY, 38, f),
      this.registerServer(e.PLAY, 50, O),
      this.registerServer(e.PLAY, 56, C),
      this.registerServer(e.PLAY, 64, j),
      this.registerServer(e.PLAY, 71, A),
      this.registerClient(e.PLAY, 0, m),
      this.registerClient(e.PLAY, 1, v),
      this.registerClient(e.PLAY, 3, P),
      this.registerClient(e.PLAY, 4, S),
      this.registerClient(e.PLAY, 5, $),
      this.registerClient(e.PLAY, 6, g),
      this.registerClient(e.PLAY, 10, G),
      this.registerClient(e.PLAY, 11, D),
      this.registerClient(e.PLAY, 15, H);
  }
  registerClient(e, r, t) {
    this._register(this.packetsClient, e, r, t);
  }
  registerServer(e, r, t) {
    this._register(this.packetsServer, e, r, t);
  }
  _register(e, r, t, i) {
    void 0 === e[r.getId()] && (e[r.getId()] = []), (e[r.getId()][t] = i);
  }
  getServerBoundById(e, r) {
    return void 0 === this.packetsServer[e.getId()][r]
      ? null
      : this.packetsServer[e.getId()][r];
  }
  getClientBoundById(e, r) {
    return void 0 === this.packetsClient[e.getId()][r]
      ? null
      : this.packetsClient[e.getId()][r];
  }
  getClientBoundPacketId(e, r) {
    for (let t in this.packetsClient[e.getId()])
      if (this.packetsClient[e.getId()][t] === r.constructor) return t;
    return null;
  }
  getServerBoundPacketId(e, r) {
    for (let t in this.packetsServer[e])
      if (this.packetsServer[e.getId()][t] === r.constructor) return t;
    return null;
  }
  getPacketState(r) {
    for (let [t, i] of Object.entries(this.packetsClient))
      for (let s in i) if (i[s] === r.constructor) return e.fromId(parseInt(t));
    for (let [a, o] of Object.entries(this.packetsServer))
      for (let c in o) if (o[c] === r.constructor) return e.fromId(parseInt(a));
    return null;
  }
}
