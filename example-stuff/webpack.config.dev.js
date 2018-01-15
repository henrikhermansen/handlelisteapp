const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge.strategy({
    entry: 'append'
})(config, {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, './src/sparing/sparing-main-dev.js'),
        path.join(__dirname, './src/sparing/sparing-main.less')
    ],
    devtool: 'source-map',
    watch: true,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.BASE_URI': JSON.stringify('/sparing/fond'),
            'process.env.REST_API': JSON.stringify('/sparing/rest')
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: true,
            options: {
                eslint: {
                    emitWarning: true,
                    outputReport: true
                }
            }
        })
    ]
});