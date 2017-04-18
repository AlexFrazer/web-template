import 'babel-polyfill';

import React from 'react';
import createHistory from 'history/createBrowserHistory';

import 'app/index.scss';

const history = createHistory();

const render = async Component => {
  const target = document.getElementById('root');
  const { render: reactRender } = await import('react-dom');

  try {
    const { AppContainer } = await import('react-hot-loader');
    reactRender(
      <AppContainer>
        <Component history={history} />
      </AppContainer>,
      target,
    );
  } catch (e) {
    reactRender(
      <Component history={history} />,
      target,
    );
  }
};

import('app/containers/Root')
  .then(({ default: App }) => render(App));

if (module.hot) {
  module.hot.accept('app/containers/Root', async () => {
    const { default: NextRoot } = await import('app/containers/Root');
    render(NextRoot);
  });
}
