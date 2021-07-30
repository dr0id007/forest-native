import {Types, ISession} from './types';
import {Dispatch} from 'redux';
// import

export const fetchHistory = (payload: ISession) => (dispatch: Dispatch) => {
  dispatch({type: Types.FETCH_HISTORY, payload});
};

export const saveSession = (payload: ISession) => (dispatch: Dispatch) => {
  dispatch({type: Types.SAVE_SESSION, payload});
};

export const deleteSession = (payload: ISession) => (dispatch: Dispatch) => {
  dispatch({type: Types.DELETE_SESSION, payload});
};
