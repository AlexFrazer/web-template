export default process.env.NODE_ENV === 'development'
  ? require('./configureStore.development')
  : require('./configureStore.production');