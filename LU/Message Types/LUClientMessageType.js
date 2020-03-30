const LUClientMessageType = {
  LOGIN_RESPONSE: 0x00,
  LOGOUT_RESPONSE: 0x01,
  LOAD_STATIC_ZONE: 0x02,
  CREATE_OBJECT: 0x03,
  CREATE_CHARACTER: 0x04,
  CREATE_CHARACTER_EXTENDED: 0x05,
  CHARACTER_LIST_RESPONSE: 0x06,
  CHARACTER_CREATE_RESPONSE: 0x07,
  CHARACTER_RENAME_RESPONSE: 0x08,
  CHAT_CONNECT_RESPONSE: 0x09,
  AUTH_ACCOUNT_CREATE_RESPONSE: 0x0a,
  DELETE_CHARACTER_RESPONSE: 0x0b,
  GAME_MSG: 0x0c,
  CONNECT_CHAT: 0x0d,
  TRANSFER_TO_WORLD: 0x0e,
  IMPENDING_RELOAD_NOTIFY: 0x0f,
  MAKE_GM_RESPONSE: 0x10,
  HTTP_MONITOR_INFO_RESPONSE: 0x11,
  SLASH_PUSH_MAP_RESPONSE: 0x12,
  SLASH_PULL_MAP_RESPONSE: 0x13,
  SLASH_LOCK_MAP_RESPONSE: 0x14,
  BLUEPRINT_SAVE_RESPONSE: 0x15,
  BLUEPRINT_LUP_SAVE_RESPONSE: 0x16,
  BLUEPRINT_LOAD_RESPONSE_ITEMID: 0x17,
  BLUEPRINT_GET_ALL_DATA_RESPONSE: 0x18,
  MODEL_INSTANTIATE_RESPONSE: 0x19,
  DEBUG_OUTPUT: 0x1a,
  ADD_FRIEND_REQUEST: 0x1b,
  ADD_FRIEND_RESPONSE: 0x1c,
  REMOVE_FRIEND_RESPONSE: 0x1d,
  GET_FRIENDS_LIST_RESPONSE: 0x1e,
  UPDATE_FRIEND_NOTIFY: 0x1f,
  ADD_IGNORE_RESPONSE: 0x20,
  REMOVE_IGNORE_RESPONSE: 0x21,
  GET_IGNORE_LIST_RESPONSE: 0x22,
  TEAM_INVITE: 0x23,
  TEAM_INVITE_INITIAL_RESPONSE: 0x24,
  GUILD_CREATE_RESPONSE: 0x25,
  GUILD_GET_STATUS_RESPONSE: 0x26,
  GUILD_INVITE: 0x27,
  GUILD_INVITE_INITIAL_RESPONSE: 0x28,
  GUILD_INVITE_FINAL_RESPONSE: 0x29,
  GUILD_INVITE_CONFIRM: 0x2a,
  GUILD_ADD_PLAYER: 0x2b,
  GUILD_REMOVE_PLAYER: 0x2c,
  GUILD_LOGIN_LOGOUT: 0x2d,
  GUILD_RANK_CHANGE: 0x2e,
  GUILD_DATA: 0x2f,
  GUILD_STATUS: 0x30,
  MAIL: 0x31,
  DB_PROXY_RESULT: 0x32,
  SHOW_ALL_RESPONSE: 0x33,
  WHO_RESPONSE: 0x34,
  SEND_CANNED_TEXT: 0x35,
  UPDATE_CHARACTER_NAME: 0x36,
  SET_NETWORK_SIMULATOR: 0x37,
  INVALID_CHAT_MESSAGE: 0x38,
  MINIMUM_CHAT_MODE_RESPONSE: 0x39,
  MINIMUM_CHAT_MODE_RESPONSE_PRIVATE: 0x3a,
  CHAT_MODERATION_STRING: 0x3b,
  UGC_MANIFEST_RESPONSE: 0x3c,
  IN_LOGIN_QUEUE: 0x3d,
  SERVER_STATES: 0x3e,
  GM_CLOSE_TARGET_CHAT_WINDOW: 0x3f,
  GENERAL_TEXT_FOR_LOCALIZATION: 0x40,
  UPDATE_FREE_TRIAL_STATUS: 0x41
};

LUClientMessageType.key = function (value) {
  for (const prop in this) {
    if (this.hasOwnProperty.call(prop)) {
      if (this[prop] === value) return prop;
    }
  }
};

module.exports = LUClientMessageType;
