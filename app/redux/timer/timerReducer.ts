import {Types, ITimer} from './types';

interface Action {
  payload: ITimer;
  type: string;
}

const initialState: ITimer = {
  isRunning: false,
  time: 10,
  angle: 30,
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
      return {...state, isRunning: true};
    }

    case Types.STOP_TIMER: {
      return {...state, isRunning: false};
    }

    default:
      return state;
  }
};

export default reducer;
