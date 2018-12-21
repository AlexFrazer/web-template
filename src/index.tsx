Promise.all([
  import('react' /* webpackChunkName: "react" */),
  import('react-hot-loader' /* webpackChunkName: "react-hot-loader" */),
  import('react-dom' /* webpackChunkName: "react-dom" */),
]).then(([React, { setConfig }, { render }]) => {
  const App = React.lazy(() => import('./App' /* webpackChunkName: "App" */));
  setConfig({ pureSFC: true });
  render(
    <React.Suspense fallback={<div />}>
      <App />
    </React.Suspense>,
    document.getElementById('root'),
  );
});
