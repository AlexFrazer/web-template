export default process.env.NODE_ENV === 'development'
  ? require('./configureStore.development') // eslint-disable-line global-require
  : require('./configureStore.production'); // eslint-disable-line global-require
