const path = require('path');
const webpack = require('webpack');

const PORT = process.env.PORT || 3000;

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    js: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${PORT}`,
      'webpack/hot/only-dev-server',
      './index.js',
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
    hot: true,
    port: PORT,
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  }
}
