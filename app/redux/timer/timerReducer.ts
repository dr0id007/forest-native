import {Types, ITimer} from './types';

interface Action {
  payload: ITimer;
  type: string;
}

const initialState: ITimer = {
  isRunning: false,
  time: 1,
  angle: 10,
  startTime: 0,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.SET_ANGLE: {
      const {angle} = action.payload;
      return {...state, angle};
    }

    case Types.SET_TIMER: {
      const {time} = action.payload;
      return {...state, time};
    }

    case Types.START_TIMER: {
      return {...state, isRunning: true, startTime: Date.now()};
    }

    case Types.STOP_TIMER: {
      return {...state, isRunning: false};
    }

    default:
      return state;
  }
};

export default reducer;
