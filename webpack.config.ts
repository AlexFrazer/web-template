import * as path from 'path';
import * as webpack from 'webpack';
import HTMLPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  entry: ['@babel/polyfill', './src'],
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      src: path.resolve(path.join(__dirname, './src')),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.ejs',
      inject: 'body',
      title: 'App',
    }),
  ],
};

export default config;
