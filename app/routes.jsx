import React from 'react';
import { Route } from 'react-router-dom';

import App from 'app/containers/App';
import IssueList from 'app/containers/IssueList';

export default (
  <Route path="/">
    <App>
      <Route path="/" exact component={IssueList} />
    </App>
  </Route>
);
