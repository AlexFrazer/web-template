import webpack from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './webpack.config.base'

export default merge(baseConfig, {
  debug: true,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './app/index.js'
  ],
  output: {
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.s?css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'sass-loader',
      ]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
})