import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from 'app/containers/App';
import Home from 'app/containers/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);