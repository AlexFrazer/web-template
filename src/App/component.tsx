import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { I18nextProvider } from 'react-i18next';
import { Provider as StoreProvider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import i18n from 'src/i18n';
import defaultTheme, { Theme } from 'src/theme';
import ErrorBoundary from './ErrorBoundary';
import { Store } from 'redux';
import { AppState } from 'src/reducer';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';

export interface Props {
  readonly theme?: Theme;
  readonly history: History;
  readonly store: Store<AppState>;
}

const Home = React.lazy(() => import('./Home' /* webpackChunkName: "Home" */));
const Todos = React.lazy(() =>
  import('./Todos' /* webpackChunkName: "Todos" */),
);

export default function App({ store, history, theme = defaultTheme }: Props) {
  return (
    <StoreProvider store={store}>
      <ErrorBoundary>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/todos" component={Todos} />
                <Redirect to="/" />
              </Switch>
            </ConnectedRouter>
          </ThemeProvider>
        </I18nextProvider>
      </ErrorBoundary>
    </StoreProvider>
  );
}
