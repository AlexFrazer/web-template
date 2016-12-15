import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router/lib/Router';
import { syncHistoryWithStore } from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';

import routes from 'app/routes';
import configureStore from 'app/store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);