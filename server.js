import path from 'path';
import express from 'express';
import webpack from 'webpack';
import { createServer } from 'http';
import { ArgumentParser } from 'argparse';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from './webpack.config.development';

const parser = new ArgumentParser({
  version: require('./package.json').version,
  addHelp: true,
});

parser.addArgument(['-p', '--port'], {
  help: "Port to run on",
  type: Number,
  defaultValue: 3000
});

const args = parser.parseArgs();

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

const server = createServer(app).listen(args.port, (err) => {
  if (!err) {
    const { address, port } = server.address();
    const host = address === '::' ? 'localhost' : address;
    console.log(`Listening on http://${host}:${port}`);
  }
});

process.on('SIGTERM', () => {
  wdm.close();
})