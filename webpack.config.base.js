import path from 'path';
import webpack from 'webpack';
import WebpackHTMLPlugin from 'webpack-html-plugin';

export default {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
    alias: { 'app': `${__dirname}/app` },
  },
  plugins: [
    new WebpackHTMLPlugin({
      inject: 'body',
      filename: 'index.html',
      template: `${__dirname}/app/index.tpl.html`,
    })
  ]
}