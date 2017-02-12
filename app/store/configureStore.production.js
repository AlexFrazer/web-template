import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from 'app/reducers';

const enhancer = applyMiddleware(thunk);

export default function configureStore(initialState: Object | void) {
  return createStore(rootReducer, initialState, enhancer);
}
