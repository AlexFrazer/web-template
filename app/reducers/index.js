import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import sidebar from 'app/reducers/sidebar';

export default combineReducers({
  routing,
  sidebar,
});
