/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import Root from 'app/containers/Root';
import configureStore from 'app/store/configureStore';

const store = configureStore();
const history = createHistory();

const render = async Component => {
  const target = document.getElementById('root');
  try {
    const { AppContainer } = await import('react-hot-loader');
    ReactDOM.render(
      <AppContainer>
        <Component store={store} history={history} />
      </AppContainer>,
      target,
    );
  } catch (e) {
    ReactDOM.render(
      <Component store={store} history={history} />,
      target,
    );
  }
};

render(Root);

if (module.hot) {
  module.hot.accept('app/containers/Root', async () => {
    const { default: NextRoot } = await import('app/containers/Root');
    render(NextRoot);
  });
}
/* eslint-disable */
