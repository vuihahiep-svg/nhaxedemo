/** OpenCalf embed — nhaxe demo (passed to window.OpenCalfConfig / OpenCalf.init). */
export const OPEN_CALF_WIDGET_CONFIG = {
  agentId: "699d0b7f-60b5-42eb-8902-4234b52be142",
  apiBase: "https://api.achain.site/api/v1",
  primaryColor: "#2563eb",
  title: "Nhà xe Út Chí AI Agent",
  layout: "side-panel",
  panelSide: "right",
  voiceEnabled: false,
  showVoiceButton: true,
  textChatEnabled: true,
  avatarInitial: "N",
  sttBackend: "web_builtin",
  ttsBackend: "web_builtin",
  primaryLanguage: "vi",
  launcherMode: "fab",
} as const;

export const OPEN_CALF_WIDGET_SCRIPT_SRC = "https://api.achain.site/widget/opencalf.js";
