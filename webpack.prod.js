const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      { test: /\.html$/i, loader: 'html-loader' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
      { test: /\.xml$/i, type: 'asset/resource' },
      { test: /\.csv$/i, type: 'asset/resource' },
    ],
  },
  plugins: [].concat(
    devMode
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: './[name].css',
          }),
        ]
  ),
});
