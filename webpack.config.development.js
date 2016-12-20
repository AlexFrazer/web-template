const webpack = require('webpack');     // eslint-disable-line import/no-extraneous-dependencies
const merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  debug: true,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'babel-polyfill',
    './app/index.js',
  ],
  output: {
    publicPath: '/',
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    }],
    loaders: [{
      test: /\.s?css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss-loader?sourceMap=inline',
        'sass-loader',
      ],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});
