const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge.strategy({
    entry: 'prepend',
    'module.loaders': 'prepend'
})(config, {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/babel',
        'react-hot-loader/patch',
        path.join(__dirname, './src/sparing/sparing-main-dev.js'),
        path.join(__dirname, './src/sparing/sparing-main.less')
    ],
    devtool: "inline-source-map",
    watch: true,
    plugins: [
        new CleanWebpackPlugin([
                'target/build/sparing/*'
            ], {
                root:     __dirname,
                exclude:  [],
                verbose:  true,
                dry:      false
            }
        ),
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