import webpack from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './webpack.config.base';

export default merge(baseConfig, {
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
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    /**
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),*/
  ],
});
