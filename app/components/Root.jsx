import React, { PropTypes } from 'react';
import { Router } from 'react-router';

import routes from 'app/routes';

type Props = {
  history: {},
};

export default function Root({ history }: Props) {
  return (
    <Router history={history}>
      {routes}
    </Router>
  );
}
