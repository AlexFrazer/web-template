const webpack = require('webpack');      // eslint-disable-line import/no-extraneous-dependencies
const merge = require('webpack-merge');  // eslint-disable-line import/no-extraneous-dependencies

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  entry: [
    'babel-polyfill',
    './app/index',
  ],
  module: {
    loaders: [{
      test: /\.s?css$/,
      loaders: [
        'style-loader',
        'css-loader?sourceMap',
        'sass-loader',
      ],
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
    }),
  ],
});
