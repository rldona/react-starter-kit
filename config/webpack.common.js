const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /.(css|sass|scss)$/,
      },
      {
        type: 'asset',
        test: /\.(png|svg|jpg|jpge|gif)$/i,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
    }),
  ],
};
