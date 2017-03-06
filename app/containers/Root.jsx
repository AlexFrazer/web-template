import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import routes from 'app/routes';

export default function Root({ history, store }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};
