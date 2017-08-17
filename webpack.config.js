import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HTMLPlugin from 'html-webpack-plugin';
import FaviconPlugin from 'favicons-webpack-plugin';

const srcPath = path.resolve(__dirname, './app');
const distPath = path.resolve(__dirname, './dist');

const isProd = process.env.NODE_ENV === 'production';

const baseConfig = {
  output: {
    path: distPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              sass: true,
              modules: true,
              namedExport: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      app: srcPath,
    },
    extensions: ['.d.ts', '.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new HTMLPlugin({
      inject: 'body',
      template: path.join(srcPath, 'index.ejs'),
    }),
    new webpack.NamedModulesPlugin(),
    new FaviconPlugin(path.join(srcPath, './favicon.png')),
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
  ],
};

const devConfig = merge(baseConfig, {
  entry: path.join(srcPath, 'index.tsx'),
  devServer: {
    hot: true,
    contentBase: distPath,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

const prodConfig = merge(baseConfig, {
  entry: path.join(srcPath, 'index.tsx'),
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});

module.exports = isProd ? prodConfig : devConfig;
