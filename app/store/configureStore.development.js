/* eslint-disable import/no-extraneous-dependencies */
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const enhancer = compose(applyMiddleware(thunk, logger));

export default function configure(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers')); // eslint-disable-line global-require
    });
  }

  return store;
}
/* eslint-disable */
