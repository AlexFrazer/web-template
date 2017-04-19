import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'app/components/App';
import HomePage from 'app/components/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);
