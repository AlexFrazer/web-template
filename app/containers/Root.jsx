import React, { PropTypes } from 'react';
import { Router } from 'react-router-dom';

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
