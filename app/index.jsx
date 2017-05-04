import React from 'react';
import { browserHistory as history } from 'react-router';

import 'app/index.scss';

const bootstrap = async (Component: React.Element<*>) => {
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
    render(<Component history={history} />, target);
  }
};

import('app/components/Root')
  .then(({ default: App }) => bootstrap(App));

if (module.hot) {
  module.hot.accept('app/components/Root', async () => {
    const { default: NextRoot } = await import('app/components/Root');
    bootstrap(NextRoot);
  });
}
