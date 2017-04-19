import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from 'app/components/layout/Layout';
import Home from 'app/views/Home';
import Counter from 'app/views/Counter';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="/counter" component={Counter} />
  </Route>
);
