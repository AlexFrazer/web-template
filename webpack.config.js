const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const HTMLPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const basePath = path.resolve(__dirname, 'app');
const distPath = path.join(__dirname, './dist');

const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

const baseConfig = {
  context: basePath,
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.hbs$/,
      loader: 'handlebars-loader',
    }],
  },
  output: {
    path: distPath,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      app: basePath,
    },
    modules: ['node_modules', basePath],
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
  },
  plugins: [
    // Loads an HTML page as the "base" of the application
    // You can pass options into this config and load them appropriately. See the `title` attribute
    new HTMLPlugin({
      cache: isProduction,
      inject: 'body',
      filename: 'index.html',
      title: 'Web Template',
      template: path.resolve(basePath, 'index.hbs'),
    }),
    new webpack.NamedModulesPlugin(),
    // https://webpack.js.org/guides/code-splitting-libraries/#implicit-common-vendor-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.includes('node_modules'),
    }),
    // https://github.com/postcss/autoprefixer
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 versions'],
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
      'babel-polyfill',
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
  performance: {
    hints: false,
  },
  devServer: {
    port: PORT,
    hot: true,
    inline: true,
    historyApiFallback: true,
    publicPath: baseConfig.output.publicPath,
    contentBase: baseConfig.output.path,
  },
});

const prodConfig = merge(baseConfig, {
  entry: {
    js: ['babel-polyfill', './index.jsx'],
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
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
    new ExtractTextPlugin('styles.[hash].css'),
    new CleanWebpackPlugin([distPath], {
      root: path.resolve(__dirname),
    }),
  ],
});

module.exports = isProduction ? prodConfig : devConfig;
