const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  target: 'node',
  devtool: 'source-map',
  externals: [nodeExternals()],
  entry: ['regenerator-runtime/runtime', './api/app.js'],
  output: {
    path: path.join(__dirname, 'www'),
    filename: '[name].bundle.js',
    publicPath: 'www/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
