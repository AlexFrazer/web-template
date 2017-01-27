import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';

import rootReducer from 'app/reducers';

const router = routerMiddleware(browserHistory);

const enhancer = applyMiddleware(thunk, router);

export default function configureStore(initialState: Object | void) {
  return createStore(rootReducer, initialState, enhancer);
}
