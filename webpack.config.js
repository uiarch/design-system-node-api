const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  target: 'node',
  devtool: 'source-map',
  externals: [nodeExternals()],
  entry: ['regenerator-runtime/runtime', './src/app.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: 'dist/',
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
