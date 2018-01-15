const nodeExternals = require('webpack-node-externals');
require('babel-polyfill');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env'],
                        plugins: [require('babel-plugin-transform-object-rest-spread')]
                    }
                }
            }
        ]
    }
};