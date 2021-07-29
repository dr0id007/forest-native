import {Types, ITimer} from './types';
import {Dispatch} from 'redux';

export const setAngle = (payload: ITimer) => (dispatch: Dispatch) => {
  dispatch({type: Types.SET_ANGLE, payload});
};

export const setTimer = (payload: ITimer) => (dispatch: Dispatch) => {
  dispatch({type: Types.SET_TIMER, payload});
};

export const startTimer = () => (dispatch: Dispatch) => {
  dispatch({type: Types.START_TIMER});
};

export const stopTimer = () => (dispatch: Dispatch) => {
  dispatch({type: Types.STOP_TIMER});
};
