const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge.strategy({
    entry: 'append'
})(config, {
    entry: [
        path.join(__dirname, './src/sparing/sparing-main.js'),
        path.join(__dirname, './src/sparing/sparing-main.less')
    ],
    devtool: 'cheap-module-source-map',
    plugins: [
        new CleanWebpackPlugin([
                'target/build/images/*',
                'target/build/libs/**',
                'target/build/sparing/*',
                'target/build_templates/**'
            ], {
                root: __dirname,
                exclude: [],
                verbose: true,
                dry: false
            }
        ),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'BASE_URI': JSON.stringify('/sparing/fond'),
                'REST_API': JSON.stringify('/sparing/rest'),
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
                eslint: {
                    emitWarning: true,
                    outputReport: true
                }
            }
        })
    ]
});