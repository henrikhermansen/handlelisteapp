const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const rootConfig = require('./webpack.config');

const strategy = {
  entry: 'prepend',
};

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'react-hot-loader/babel',
    'react-hot-loader/patch',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
};

module.exports = merge.strategy(strategy)(rootConfig, config);
