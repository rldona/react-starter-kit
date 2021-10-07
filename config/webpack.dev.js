const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

const {HotModuleReplacementPlugin} = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  /** Workaround fot the bugfix found in 'webpack-dev-server' version <= 3.11.2 */
  /** Remove when they release a new release */
  target: 'web',
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    hot: true,
  },
  devtool: 'eval-source-map',
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
};

module.exports = merge(common, devConfig);
