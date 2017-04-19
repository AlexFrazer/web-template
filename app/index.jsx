import React from 'react';
import createHistory from 'history/createBrowserHistory';

import 'app/index.scss';

const history = createHistory();

const bootstrap = async Component => {
  const target = document.getElementById('root');
  const { render } = await import('react-dom');

  try {
    const { AppContainer } = await import('react-hot-loader');
    render(
      <AppContainer>
        <Component history={history} />
      </AppContainer>,
      target,
    );
  } catch (e) {
    render(
      <Component history={history} />,
      target,
    );
  }
};

import('app/containers/Root')
  .then(({ default: App }) => bootstrap(App));

if (module.hot) {
  module.hot.accept('app/containers/Root', async () => {
    const { default: NextRoot } = await import('app/containers/Root');
    bootstrap(NextRoot);
  });
}
