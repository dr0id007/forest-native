import {Types, ISettings} from './types';
import {Tags} from '../../constants/tags';

interface Action {
  payload: ISettings;
  type: string;
}

const initialState = {notifications: false, sound: false};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.TOGGLE_NOTIFICATION: {
      const {notifications} = action.payload;
      return {...state, notifications};
    }

    case Types.TOGGLE_SOUND: {
      const {sound} = action.payload;
      return {...state, sound};
    }

    default:
      return state;
  }
};

export default reducer;
