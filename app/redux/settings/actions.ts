import {Types, ISettings} from './types';
import {Dispatch} from 'redux';

export const toggleNotification =
  (payload: ISettings) => (dispatch: Dispatch) => {
    dispatch({type: Types.TOGGLE_NOTIFICATION, payload});
  };

export const toggleSound = (payload: ISettings) => (dispatch: Dispatch) => {
  dispatch({type: Types.TOGGLE_SOUND, payload});
};
