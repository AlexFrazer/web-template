const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLPlugin = require('html-webpack-plugin');
const { dependencies } = require('./package.json');

const production = process.env.NODE_ENV === 'production';
const srcPath = path.resolve(path.join(__dirname, './src'));
const distPath = path.resolve(path.join(__dirname, './dist'));

const baseConfig = {
  entry: {
    vendor: Object.keys(dependencies),
  },
  output: {
    path: distPath,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        include: srcPath,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx', '.css', '.scss'],
  },
  plugins: [
    new HTMLPlugin({
      inject: 'body',
      title: 'Web Template',
      filename: 'index.html',
      template: path.join(srcPath, 'index.ejs'),
    }),
    new webpack.NamedChunksPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].js',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
  ],
};

const prodConfig = merge(baseConfig, {
  entry: {
    app: path.join(srcPath, 'index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        include: srcPath,
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});

const devConfig = merge(baseConfig, {
  devtool: 'cheap-eval-source-map',
  entry: {
    app: ['react-hot-loader/patch', path.join(srcPath, 'index.tsx')],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
        include: srcPath,
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    hot: true,
    compress: true,
    contentBase: distPath,
    historyApiFallback: true,
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'localhost',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

module.exports = production ? prodConfig : devConfig;
