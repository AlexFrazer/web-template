import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from './webpack.config.development';

const app = express();
const compiler = webpack(config);
const middleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunkModules: false
  }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  middleware.fileSystem.readFile(path.join(__dirname, 'dist/index.html'), (err, page) => {
    if (!err) {
      res.write(page);
      res.end();
    } else {
      res.end(err);
    }
  });
});

app.listen(5000, (err) => {
  if (!err) {
    console.log(`Listening on http://localhost:5000`);
  }
});

process.on('SIGTERM', () => {
  wdm.close();
})