export const Types = {
  TOGGLE_NOTIFICATION: 'TOGGLE_NOTIFICATION',
  TOGGLE_SOUND: 'TOGGLE_SOUND',
  TOGGLE_WIFI_ONLY: 'TOGGLE_WIFI_ONLY',
  TOGGLE_SEND_USAGE: 'TOGGLE_SEND_USAGE',
};

export interface ISettings {
  notifications?: boolean;
  sound?: boolean;
  wifiOnly?: boolean;
  sendUsage?: boolean;
}
