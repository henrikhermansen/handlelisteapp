const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const loaders = require('./webpack.loaders');

module.exports = {
    devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
    entry: [
        'babel-polyfill'
    ],
    output: {
        publicPath: '/static/sparing/',
        path: path.join(__dirname, 'target', 'build', 'sparing'),
        filename: 'sparing.js'
    },
    resolve: {
        symlinks: false,
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: loaders
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin({
            filename: 'sparing.css',
            allChunks: true
        })
    ]
};
