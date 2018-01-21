const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const rootConfig = require('./webpack.config');

const strategy = {
  entry: 'prepend',
};

const config = {
  plugins: [
    new UglifyJSPlugin(),
  ],
};

module.exports = merge.strategy(strategy)(rootConfig, config);
