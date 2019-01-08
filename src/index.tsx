import * as React from 'react';
import { render } from 'react-dom';
import { setConfig } from 'react-hot-loader';
import createStore, { history } from './store';

const store = createStore();

const App = React.lazy(() => import('./App' /* webpackChunkName: "App" */));

setConfig({ pureSFC: true });

render(
  <React.Suspense fallback={<div />}>
    <App history={history} store={store} />
  </React.Suspense>,
  document.getElementById('root'),
);
