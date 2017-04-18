const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const HTMLPlugin = require('webpack-html-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const basePath = path.resolve(__dirname, 'app');

const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

const baseConfig = {
  context: basePath,
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
    },
    modules: [
      'node_modules',
      basePath,
    ],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLPlugin({
      inject: 'body',
      filename: 'index.html',
      template: path.resolve(basePath, 'index.tpl.html'),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.includes('node_modules'),
      filename: 'vendor.[hash].js',
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
  ],
};

const devConfig = merge(baseConfig, {
  devtool: 'inline-source-map',
  entry: {
    js: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${PORT}`,
      'webpack/hot/only-dev-server',
      './index.jsx',
    ],
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]__[hash:base64:5]',
          },
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: 'inline' },
        },
        'sass-loader',
      ],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  devServer: {
    port: PORT,
    historyApiFallback: true,
    publicPath: baseConfig.output.publicPath,
    contentBase: baseConfig.output.path,
  },
});

const prodConfig = merge(baseConfig, {
  entry: {
    js: './index.jsx',
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
});

module.exports = isProduction ? prodConfig : devConfig;
