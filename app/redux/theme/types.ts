export const Types = {
  CHANGE_THEME: 'CHANGE_THEME',
};

export interface ITheme {
  id: number;
  name: string;
  backgroundColor: string;
  foregroundColor: string;
  textColor: string;
  // and all other color and things....
}
