import {Types, ITheme} from './types';
import {Themes} from '../../constants/theme';

// initial theme
const initialState = {theme: Themes[0]};

interface Action {
  payload: ITheme;
  type: string;
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.CHANGE_THEME: {
      const {payload} = action;
      return {...state, theme: payload};
    }

    default:
      return state;
  }
};

export default reducer;
