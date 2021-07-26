import {Types} from './types';
import {Themes} from '../../constants/theme';
import {Dispatch} from 'redux';

export const changeTheme = (payload: number) => (dispatch: Dispatch) => {
  dispatch({type: Types.CHANGE_THEME, payload: Themes[payload]});
};
