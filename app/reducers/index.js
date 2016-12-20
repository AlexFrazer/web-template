import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import issues from 'app/reducers/issues';
import sidebar from 'app/reducers/sidebar';

export default combineReducers({
  routing,
  sidebar,
  issues,
});
