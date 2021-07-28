import {Types, ITags} from './types';
import {Tags} from '../../constants/tags';

const initialState = {currentTag: Tags[0]};

interface Action {
  payload: ITags;
  type: string;
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.CHANGE_TAGS: {
      const {payload} = action;
      return {...state, theme: payload};
    }

    default:
      return state;
  }
};

export default reducer;
