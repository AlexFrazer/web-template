import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from 'app/containers/App';
import IssueList from 'app/containers/IssueList';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IssueList} />
  </Route>
);
