import {Types, ISession} from './types';

interface Action {
  payload: ISession;
  type: string;
}

const initialState = {
  currentSession: {
    duration: 0,
    start_time: undefined,
    completed: false,
    date: '1 Jan 1970',
  },
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.SAVE_SESSION: {
      const {currentSession} = action.payload;
      return {...state, currentSession};
    }

    case Types.FETCH_HISTORY: {
      const {sessions} = action.payload;
      return {...state, sessions};
    }

    // case Types.DELETE_SESSION: {
    //   const {sound} = action.payload;
    //   return {...state, sound};
    // }

    default:
      return state;
  }
};

export default reducer;
