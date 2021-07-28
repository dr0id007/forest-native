import {Types} from './types';
import {Themes} from '../../constants/theme';
import {Dispatch} from 'redux';

export const changeTags = (payload: number) => (dispatch: Dispatch) => {
  dispatch({type: Types.CHANGE_TAGS, payload: Themes[payload]});
};
