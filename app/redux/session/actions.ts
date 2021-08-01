import {Types, ISession, SessionType} from './types';
import {Dispatch} from 'redux';
import {
  saveToLocalStorage,
  fetchFromLocalStorage,
} from '../../utils/localStorage';

export const fetchHistory = () => async (dispatch: Dispatch) => {
  // fetch from local storage
  const res = await fetchFromLocalStorage<ISession>();
  console.log('fetchSessionRes:', res);
  dispatch({type: Types.FETCH_HISTORY, payload: {sessions: res}});
};

export const saveSession =
  (payload: ISession) => async (dispatch: Dispatch) => {
    console.log('payload:', payload);
    if (payload.currentSession) {
      const res = await saveToLocalStorage<SessionType>(payload.currentSession);
      console.log('saveSessionRes:', res);
      dispatch({type: Types.SAVE_SESSION, payload});
    } else {
      console.log('no session provided');
    }
  };

export const deleteSession = (payload: ISession) => (dispatch: Dispatch) => {
  dispatch({type: Types.DELETE_SESSION, payload});
};
