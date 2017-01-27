const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const HTMLPlugin = require('webpack-html-plugin');

const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.production');

const basePath = path.resolve(__dirname, 'app');

const baseConfig = {
  context: basePath,
  entry: {
    vendor: [
      'babel-polyfill',
      'whatwg-fetch',
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'velocity-react',
    ],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    }],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      app: basePath,
      molecules: path.resolve(__dirname, 'patterns/molecules'),
    },
    modules: [
      'node_modules',
      basePath,
    ],
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HTMLPlugin({
      inject: 'body',
      filename: 'index.html',
      template: path.resolve(basePath, 'index.tpl.html'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor-[hash].js',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              'last 3 version',
              'ie >= 10',
            ],
          }),
        ],
        context: path.resolve(__dirname, 'app'),
      },
    }),
  ]
};

module.exports = (env = process.env.NODE_ENV || 'production') => {
  const isDev = env.toLowerCase() !== 'production';
  return merge(baseConfig, isDev ? devConfig : prodConfig);
}
