const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist/'),
  },
};
