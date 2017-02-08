import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createHashHistory';

import App from 'app/containers/App';
import NoMatch from 'app/containers/NoMatch';
import IssueList from 'app/containers/IssueList';

const history = createHistory();

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/">
          <App>
            <Route path="/" exact component={IssueList} />
            <Route component={NoMatch} />
          </App>
        </Route>
      </Switch>
    </Router>
  );
}
