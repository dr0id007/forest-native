import {Types, ITimer} from './types';
import {Dispatch} from 'redux';

export const setTimer = (payload: ITimer) => (dispatch: Dispatch) => {
  dispatch({type: Types.SET_TIMER, payload});
};

export const startTimer = (payload: ITimer) => (dispatch: Dispatch) => {
  dispatch({type: Types.START_TIMER, payload});
};

export const stopTimer = (payload: ITimer) => (dispatch: Dispatch) => {
  dispatch({type: Types.STOP_TIMER, payload});
};
