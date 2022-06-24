const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

const {HotModuleReplacementPlugin} = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    static: path.join(__dirname, 'dist'),
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
};

module.exports = merge(common, devConfig);
