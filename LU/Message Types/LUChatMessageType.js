const LUChatMessageType = {
  MSG_CHAT_LOGIN_SESSION_NOTIFY: 0x00,
  MSG_CHAT_GENERAL_CHAT_MESSAGE: 0x01,
  MSG_CHAT_PRIVATE_CHAT_MESSAGE: 0x02,
  MSG_CHAT_USER_CHANNEL_CHAT_MESSAGE: 0x03,
  MSG_CHAT_WORLD_DISCONNECT_REQUEST: 0x04,
  MSG_CHAT_WORLD_PROXIMITY_RESPONSE: 0x05,
  MSG_CHAT_WORLD_PARCEL_RESPONSE: 0x06,
  MSG_CHAT_ADD_FRIEND_REQUEST: 0x07,
  MSG_CHAT_ADD_FRIEND_RESPONSE: 0x08,
  MSG_CHAT_REMOVE_FRIEND: 0x09,
  MSG_CHAT_GET_FRIENDS_LIST: 0x0a,
  MSG_CHAT_ADD_IGNORE: 0x0b,
  MSG_CHAT_REMOVE_IGNORE: 0x0c,
  MSG_CHAT_GET_IGNORE_LIST: 0x0d,
  MSG_CHAT_TEAM_MISSED_INVITE_CHECK: 0x0e,
  MSG_CHAT_TEAM_INVITE: 0x0f,
  MSG_CHAT_TEAM_INVITE_RESPONSE: 0x10,
  MSG_CHAT_TEAM_KICK: 0x11,
  MSG_CHAT_TEAM_LEAVE: 0x12,
  MSG_CHAT_TEAM_SET_LOOT: 0x13,
  MSG_CHAT_TEAM_SET_LEADER: 0x14,
  MSG_CHAT_TEAM_GET_STATUS: 0x15,
  MSG_CHAT_GUILD_CREATE: 0x16,
  MSG_CHAT_GUILD_INVITE: 0x17,
  MSG_CHAT_GUILD_INVITE_RESPONSE: 0x18,
  MSG_CHAT_GUILD_LEAVE: 0x19,
  MSG_CHAT_GUILD_KICK: 0x1a,
  MSG_CHAT_GUILD_GET_STATUS: 0x1b,
  MSG_CHAT_GUILD_GET_ALL: 0x1c,
  MSG_CHAT_SHOW_ALL: 0x1d,
  MSG_CHAT_BLUEPRINT_MODERATED: 0x1e,
  MSG_CHAT_BLUEPRINT_MODEL_READY: 0x1f,
  MSG_CHAT_PROPERTY_READY_FOR_APPROVAL: 0x20,
  MSG_CHAT_PROPERTY_MODERATION_CHANGED: 0x21,
  MSG_CHAT_PROPERTY_BUILDMODE_CHANGEd: 0x22,
  MSG_CHAT_PROPERTY_BUILDMODE_CHANGED_REPORT: 0x23,
  MSG_CHAT_MAIL: 0x24,
  MSG_CHAT_WORLD_INSTANCE_LOCATION_REQUEST: 0x25,
  MSG_CHAT_REPUTATION_UPDATE: 0x26,
  MSG_CHAT_SEND_CANNED_TEXT: 0x27,
  MSG_CHAT_GMLEVEL_UPDATE: 0x28,
  MSG_CHAT_CHARACTER_NAME_CHANGE_REQUEST: 0x29,
  MSG_CHAT_CSR_REQUEST: 0x2a,
  MSG_CHAT_CSR_REPLY: 0x2b,
  MSG_CHAT_GM_KICK: 0x2c,
  MSG_CHAT_GM_ANNOUNCE: 0x2d,
  MSG_CHAT_GM_MUTE: 0x2e,
  MSG_CHAT_ACTIVITY_UPDATE: 0x2f,
  MSG_CHAT_WORLD_ROUTE_PACKET: 0x30,
  MSG_CHAT_GET_ZONE_POPULATIONS: 0x31,
  MSG_CHAT_REQUEST_MINIMUM_CHAT_MODE: 0x32,
  MSG_CHAT_REQUEST_MINIMUM_CHAT_MODE_PRIVATE: 0x33,
  MSG_CHAT_MATCH_REQUEST: 0x34,
  MSG_CHAT_UGCMANIFEST_REPORT_MISSING_FILE: 0x35,
  MSG_CHAT_UGCMANIFEST_REPORT_DONE_FILE: 0x36,
  MSG_CHAT_UGCMANIFEST_REPORT_DONE_BLUEPRINT: 0x37,
  MSG_CHAT_UGCC_REQUEST: 0x38,
  MSG_CHAT_WHO: 0x39,
  MSG_CHAT_WORLD_PLAYERS_PET_MODERATED_ACKNOWLEDGE: 0x3a,
  MSG_CHAT_ACHIEVEMENT_NOTIFY: 0x3b,
  MSG_CHAT_GM_CLOSE_PRIVATE_CHAT_WINDOW: 0x3c,
  MSG_CHAT_UNEXPECTED_DISCONNECT: 0x3d,
  MSG_CHAT_PLAYER_READY: 0x3e,
  MSG_CHAT_GET_DONATION_TOTAL: 0x3f,
  MSG_CHAT_UPDATE_DONATION: 0x40,
  MSG_CHAT_PRG_CSR_COMMAND: 0x41,
  MSG_CHAT_HEARTBEAT_REQUEST_FROM_WORLD: 0x42,
  MSG_CHAT_UPDATE_FREE_TRIAL_STATUS: 0x43
};

LUChatMessageType.key = function (value) {
  for (const prop in this) {
    if (this.hasOwnProperty.call(prop)) {
      if (this[prop] === value) return prop;
    }
  }
};

module.exports = LUChatMessageType;
