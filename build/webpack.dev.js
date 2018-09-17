const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const webpack = require('webpack')

module.exports = merge(common, {
  // devtool: 'inline-souce-map',
  mode: 'development',
  devServer: {
    port: 1234,
    hot: true,
    stats: 'errors-only'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})