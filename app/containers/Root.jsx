import React, { PropTypes } from 'react';
import { Router } from 'react-router';

import routes from 'app/routes';

export default function Root({ history }) {
  return (
    <Router history={history}>
      {routes}
    </Router>
  );
}

Root.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
