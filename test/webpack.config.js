var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    'scenario1': './scenario1/index',
    'scenario2': './scenario2/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, '../js'),
        ],
        loader: 'istanbul-instrumenter?esModules=true',
      },
    ],
    loaders: [
      {
        test: /\.jade$/,
        loader: 'jade',
      },
      {
        test: /\.js$/,
        exclude: [
          path.join(__dirname, '../node_modules'),
        ],
        loader: 'babel',
      },
    ],
  },
  babel: {
    presets: ['es2015'],
  },
  plugins: [
    new CommonsChunkPlugin('common.js', [ 'scenario1', 'scenario2' ]),
  ],
};
