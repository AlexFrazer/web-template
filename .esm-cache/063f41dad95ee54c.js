let path;_d95‍.w('path',[["default",function(v){path=v}]]);let webpack;_d95‍.w('webpack',[["default",function(v){webpack=v}]]);let merge;_d95‍.w('webpack-merge',[["default",function(v){merge=v}]]);let HTMLPlugin;_d95‍.w('html-webpack-plugin',[["default",function(v){HTMLPlugin=v}]]);




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
        loader: 'awesome-typescript-loader',
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
