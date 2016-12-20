const path = require('path');
const webpack = require('webpack');                       // eslint-disable-line import/no-extraneous-dependencies
const WebpackHTMLPlugin = require('webpack-html-plugin'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
    alias: { app: `${__dirname}/app` },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'bluebird',
    }),
    new WebpackHTMLPlugin({
      inject: 'body',
      filename: 'index.html',
      template: `${__dirname}/app/index.tpl.html`,
    }),
  ],
};
