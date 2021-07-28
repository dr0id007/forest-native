import {Types, ITags} from './types';
import {Tags} from '../../constants/tags';

const initialState = {currentTag: Tags[0].name};

interface Action {
  payload: ITags;
  type: string;
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Types.CHANGE_TAGS: {
      const {name} = action.payload;
      return {...state, currentTag: name};
    }

    default:
      return state;
  }
};

export default reducer;
