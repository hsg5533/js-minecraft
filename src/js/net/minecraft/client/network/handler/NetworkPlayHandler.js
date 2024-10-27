import t from "./PacketHandler.js";
import e from "../../gui/screens/GuiDisconnected.js";
import i from "../../world/WorldClient.js";
import n from "../packet/play/client/ClientKeepAlivePacket.js";
import a from "../controller/PlayerControllerMultiplayer.js";
import r from "../packet/play/client/ClientPlayerPositionRotationPacket.js";
import o from "../../entity/PlayerEntity.js";
import s from "../packet/play/server/ServerAnimationPacket.js";
import l from "../packet/play/client/ClientConfirmTransactionPacket.js";
export default class g extends t {
  constructor(t, e) {
    super(),
      (this.minecraft = t.minecraft),
      (this.networkManager = t),
      (this.profile = e),
      (this.playerInfoMap = new Map());
  }
  handleKeepAlive(t) {
    this.networkManager.sendPacket(new n(t.getId()));
  }
  handleJoinGame(t) {
    this.minecraft.playerController = new a(this.minecraft, this, t.entityId);
    let e = new i(this.minecraft);
    this.minecraft.loadWorld(e);
  }
  handleServerChat(t) {
    2 !== t.getType() &&
      this.minecraft.ingameOverlay.chatOverlay.addMessage(t.getMessage());
  }
  handleServerPlayerListEntry(t) {
    for (let e of t.getPlayers()) {
      let i = e.profile.getId().toString();
      if (4 === t.getAction()) this.playerInfoMap.delete(i);
      else {
        0 === t.getAction() && this.playerInfoMap.set(i, e);
        let n = this.playerInfoMap.get(i);
        if (null != n)
          switch (t.getAction()) {
            case 0:
              (n.gameType = e.gameType), (n.ping = e.ping);
              break;
            case 1:
              n.gameType = e.gameType;
              break;
            case 2:
              n.ping = e.ping;
              break;
            case 3:
              n.displayName = e.displayName;
          }
      }
    }
    this.minecraft.ingameOverlay.playerListOverlay.setDirty();
  }
  handleServerPlayerListData(t) {
    this.minecraft.ingameOverlay.playerListOverlay.setHeader(t.getHeader()),
      this.minecraft.ingameOverlay.playerListOverlay.setFooter(t.getFooter());
  }
  handleServerPlayerPositionRotation(t) {
    let e = this.minecraft.player,
      i = t.getX(),
      n = t.getY(),
      a = t.getZ(),
      o = t.getYaw(),
      s = t.getPitch();
    t.hasFlag(1) ? (i += e.x) : (e.motionX = 0),
      t.hasFlag(2) ? (n += e.y) : (e.motionY = 0),
      t.hasFlag(4) ? (a += e.z) : (e.motionZ = 0),
      t.hasFlag(8) && (o += e.rotationYaw),
      t.hasFlag(16) && (s += e.rotationPitch),
      e.setPositionAndRotation(i, n, a, o, s),
      this.networkManager.sendPacket(
        new r(!0, e.x, e.boundingBox.minY, e.z, e.rotationYaw, e.rotationPitch)
      );
  }
  handleServerSpawnPlayer(t) {
    let e = this.minecraft.world,
      i = new o(this.minecraft, e, t.getEntityId());
    (i.serverPositionX = t.getX()),
      (i.serverPositionY = t.getY()),
      (i.serverPositionZ = t.getZ());
    let n = i.serverPositionX / 32,
      a = i.serverPositionY / 32,
      r = i.serverPositionZ / 32,
      s = t.rotation ? (360 * t.getYaw()) / 256 : i.rotationYaw,
      l = t.rotation ? (360 * t.getPitch()) / 256 : i.rotationPitch;
    i.setPosition(n, a, r), i.setRotation(s, l), e.addEntity(i);
  }
  handleEntityMovement(t) {
    let e = this.minecraft.world.getEntityById(t.getEntityId());
    if (null !== e) {
      (e.serverPositionX += t.getX()),
        (e.serverPositionY += t.getY()),
        (e.serverPositionZ += t.getZ());
      let i = e.serverPositionX / 32,
        n = e.serverPositionY / 32,
        a = e.serverPositionZ / 32,
        r = t.rotation ? (360 * t.getYaw()) / 256 : e.rotationYaw,
        o = t.rotation ? (360 * t.getPitch()) / 256 : e.rotationPitch;
      e.setTargetPositionAndRotation(i, n, a, r, o, 3),
        (e.onGround = t.isOnGround());
    }
  }
  handleEntityTeleport(t) {
    let e = this.minecraft.world.getEntityById(t.getEntityId());
    if (null !== e) {
      (e.serverPositionX = t.getX()),
        (e.serverPositionY = t.getY()),
        (e.serverPositionZ = t.getZ());
      let i = e.serverPositionX / 32,
        n = e.serverPositionY / 32,
        a = e.serverPositionZ / 32,
        r = (360 * t.getYaw()) / 256,
        o = (360 * t.getPitch()) / 256;
      0.03125 > Math.abs(e.x - i) &&
      0.015625 > Math.abs(e.y - n) &&
      0.03125 > Math.abs(e.z - a)
        ? e.setTargetPositionAndRotation(e.x, e.y, e.z, r, o, 3)
        : e.setTargetPositionAndRotation(i, n, a, r, o, 3),
        (e.onGround = t.isOnGround());
    }
  }
  handleEntityMetadata(t) {
    let e = this.minecraft.world.getEntityById(t.getEntityId());
    null !== e && e.updateMetaData(t.getMetaData());
  }
  handleEntityHeadLook(t) {
    let e = this.minecraft.world.getEntityById(t.getEntityId());
    null !== e && e.setRotationYawHead((360 * t.getHeadYaw()) / 256);
  }
  handleAnimation(t) {
    let e = this.minecraft.world.getEntityById(t.getEntityId());
    null !== e && t.getAnimation() === s.SWING_ARM && e.swingArm();
  }
  handleDestroyEntities(t) {
    for (let e of t.getEntityIds()) this.minecraft.world.removeEntityById(e);
  }
  handleConfirmTransaction(t) {
    t.isAccepted() ||
      this.networkManager.sendPacket(
        new l(t.getWindowId(), t.getActionId(), !0)
      );
  }
  handleChunkData(t) {
    let e = this.minecraft.world.getChunkProvider();
    if (t.isFullChunk()) {
      if (0 === t.getMask()) {
        e.unloadChunk(t.getX(), t.getZ());
        return;
      }
      e.loadChunk(t.getX(), t.getZ());
    }
    this.minecraft.world
      .getChunkAt(t.getX(), t.getZ())
      .fillChunk(t.getData(), t.getMask(), t.isFullChunk());
  }
  handleMultiChunkData(t) {
    for (let e of t.getChunkData()) this.handleChunkData(e);
  }
  handleBlockChange(t) {
    let e = t.getBlockPosition(),
      i = t.getBlockState();
    this.minecraft.world.setBlockAt(e.getX(), e.getY(), e.getZ(), i >> 4);
  }
  handleDisconnect(t) {
    this.minecraft.loadWorld(null),
      this.minecraft.displayScreen(new e(t.getReason()));
  }
  onDisconnect() {
    this.minecraft.loadWorld(null),
      this.minecraft.displayScreen(new e("Disconnected from server"));
  }
  getNetworkManager() {
    return this.networkManager;
  }
  getPlayerInfoMap() {
    return this.playerInfoMap;
  }
  sendPacket(t) {
    this.networkManager.sendPacket(t);
  }
}
