const ExtractTextPlugin = require('extract-text-webpack-plugin');

// noinspection WebpackConfigHighlighting
module.exports = [
  {
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      cacheDirectory: true,
    },
  },
  {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'less-loader'],
    }),
  },
];
