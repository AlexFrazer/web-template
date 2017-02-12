const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    js: './index.js',
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?modules!postcss-loader!sass-loader',
        publicPath: '/dist',
      }),
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new ExtractTextPlugin({
      name: 'styles',
      filename: 'styles.[hash].css',
      disable: false,
      allChunks: true,
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname),
    }),
  ],
};
