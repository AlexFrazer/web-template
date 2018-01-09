import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import Loadable from 'react-loadable';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/about"
          component={Loadable({
            loader: () => import('./About' /* webpackChunkName: "About" */),
            loading: () => <BounceLoader loading />,
          })}
        />
        <Route
          path="/"
          component={Loadable({
            loader: () => import('./Counter' /* webpackChunkName: "Counter" */),
            loading: () => <BounceLoader loading />,
          })}
        />
      </Switch>
    </BrowserRouter>
  );
}
