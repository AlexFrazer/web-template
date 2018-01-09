import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

async function bootstrap(Component: React.ComponentType) {
  const target = document.getElementById('root');
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    target,
  );
}

import('./App' /* webpackChunkName: "App" */).then(({ default: App }) => bootstrap(App));

if (module.hot) {
  module.hot.accept('./App', async () => {
    const { default: NextApp } = await import('./App');
    bootstrap(NextApp);
  });
}
