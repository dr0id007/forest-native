export const Types = {
  TOGGLE_NOTIFICATION: 'TOGGLE_NOTIFICATION',
  TOGGLE_SOUND: 'TOGGLE_SOUND',
};

export interface ISettings {
  notifications?: boolean;
  sound?: boolean;
}
