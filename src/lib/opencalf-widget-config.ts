/** OpenCalf embed — nhaxe demo (sync with `WIDGET_EMBED.md` public snippet). */
export const OPEN_CALF_WIDGET_CONFIG = {
  agentId: "d7b60d03-f611-463a-bdd0-872f391c0514",
  apiBase: "https://api.achain.site/api/v1",
  primaryColor: "#2563eb",
  title: "Nhà xe Út Chí",
  layout: "side-panel",
  panelSide: "right",
  voiceEnabled: false,
  showVoiceButton: true,
  textChatEnabled: true,
  avatarInitial: "N",
  sttBackend: "web_builtin",
  ttsBackend: "web_builtin",
  primaryLanguage: "en",
  launcherMode: "fab",
} as const;

export const OPEN_CALF_WIDGET_SCRIPT_SRC = "https://api.achain.site/widget/opencalf.js";
