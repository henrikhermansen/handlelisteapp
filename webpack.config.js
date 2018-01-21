const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/babel',
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public/build'),
    publicPath: 'build/',
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          plugins: [
            'react-hot-loader/babel',
          ],
        },
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
};
