import { combineReducers } from 'redux';

import issues from './issues';
import sidebar from './sidebar';

export default combineReducers({
  sidebar,
  issues,
});
