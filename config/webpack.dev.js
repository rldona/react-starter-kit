const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    open: true,
  },
  /** Workaround fot the bugfix found in 'webpack-dev-server' version <= 3.11.2 */
  /** Remove when they release a new release */
  target: 'web',
};

module.exports = merge(common, devConfig);
