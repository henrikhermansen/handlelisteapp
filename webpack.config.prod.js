const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const rootConfig = require('./webpack.config');
const DotenvPlugin = require('dotenv-webpack');

const strategy = {
  entry: 'prepend',
};

const config = {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new DotenvPlugin({ path: './.env.production' }),
  ],
};

module.exports = merge.strategy(strategy)(rootConfig, config);
