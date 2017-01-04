import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import issues from './issues';
import sidebar from './sidebar';

export default combineReducers({
  routing,
  sidebar,
  issues,
});
