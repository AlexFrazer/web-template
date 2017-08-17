import * as React from 'react';
import { render } from 'react-dom';

import App from 'app/components/App';

function bootstrap(Component: React.SFC<any>) {
  const target = document.getElementById('root');
  render(<Component />, target);
}

bootstrap(App);

if (module.hot) {
  module.hot.accept('app/components/App', async () => {
    const { default: NextApp } = await import('app/components/App');
    bootstrap(NextApp);
  });
}
