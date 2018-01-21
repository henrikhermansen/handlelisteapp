const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const loaders = require('./webpack.loaders');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public/build'),
    publicPath: 'build/',
    filename: 'app.js',
  },
  module: {
    rules: loaders,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true,
    }),
    new CleanWebpackPlugin('public/build/*'),
    new webpack.NamedModulesPlugin(),
  ],
};
