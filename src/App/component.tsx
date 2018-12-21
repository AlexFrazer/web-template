import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import i18n from 'src/i18n';
import defaultTheme, { Theme } from 'src/theme';
import ErrorBoundary from './ErrorBoundary';

export interface Props {
  readonly theme?: Theme;
}

const Home = React.lazy(() => import('./Home' /* webpackChunkName: "Home" */));

export default function App({ theme = defaultTheme }: Props) {
  return (
    <React.Suspense fallback={<div />}>
      <ErrorBoundary>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Redirect to="/" />
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        </I18nextProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}
