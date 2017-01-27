export default process.env.NODE_ENV === 'development'
  ? require('./configureStore.development').default // eslint-disable-line global-require
  : require('./configureStore.production').default; // eslint-disable-line global-require
