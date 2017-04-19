import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'app/components/App';
import Home from 'app/components/Home';
import Counter from 'app/components/Counter';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/counter" component={Counter} />
  </Route>
);
