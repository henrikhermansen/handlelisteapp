const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
    },
    {
        test: /\.jsx?$/,
        use: ["source-map-loader"],
        enforce: "pre"
    },
    {
        test: /\.jsx?$/,
        include: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules', 'sparing-frontend', 'src')
        ],
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:['css-loader','postcss-loader','less-loader'],
        })
    }, {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
        options: {
            name: '/libs/ffe-core/10.1.1/fonts/[name].[ext]',
            outputPath: '../',
            publicPath: '/sparing/static/',
            useRelativePath: true
        }
    }, {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        exclude: /1x1\.png/,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=images/[name].[ext]&outputPath=../&publicPath=/sparing/static/&useRelativePath=true',
            'image-webpack-loader'
        ]
    },
    {
        test: /1x1.png/,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=/libs/nfe-splunk-analytics/0.0.7/image/[name].[ext]&outputPath=../&publicPath=/sparing/static/&useRelativePath=false',
            'image-webpack-loader'
        ]
    },
    {
        test: /fond\.html-skinning\.json/,
        loader: 'skinning-framework/webpack-loader?name=fond&path=../../build_templates/sparing/'
    }
];