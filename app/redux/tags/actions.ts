import {Types, ITags} from './types';
import {Themes} from '../../constants/theme';
import {Dispatch} from 'redux';

export const changeTags = (payload: ITags) => (dispatch: Dispatch) => {
  dispatch({type: Types.CHANGE_TAGS, payload});
};
