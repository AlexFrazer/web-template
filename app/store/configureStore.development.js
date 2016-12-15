import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from 'app/reducers';

const actionCreators = { push };

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const router = routerMiddleware(browserHistory);

const enhancer = compose(applyMiddleware(thunk, router, logger));

export default function configure(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers'));
    });
  }

  return store;
}