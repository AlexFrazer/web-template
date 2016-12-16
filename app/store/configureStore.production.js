// @flow
import thunk from 'redux-thunk';
import rootReducer from 'app/reducers';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';

const router = routerMiddleware(browserHistory);

const enhancer = applyMiddleware(thunk, router);

export default function configureStore(initialState: Object | void) {
  return createStore(rootReducer, initialState, enhancer);
}
