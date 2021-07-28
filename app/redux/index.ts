import {combineReducers} from 'redux';
import themeReducer from './theme/themeReducer';
import tagsReducer from './tags/tagsReducer';
import settingsReducer from './settings/settingsReducer';

export default combineReducers({
  theme: themeReducer,
  tags: tagsReducer,
  settings: settingsReducer,
});
