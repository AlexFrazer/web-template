/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routes from 'app/routes';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
/* eslint-disable */
