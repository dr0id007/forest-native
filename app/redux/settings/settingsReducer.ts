import {Types, ISettings} from './types';

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

    case Types.TOGGLE_WIFI_ONLY: {
      const {wifiOnly} = action.payload;
      return {...state, wifiOnly};
    }

    case Types.TOGGLE_SEND_USAGE: {
      const {sendUsage} = action.payload;
      return {...state, sendUsage};
    }

    default:
      return state;
  }
};

export default reducer;
