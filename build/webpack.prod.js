const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
  // devtool: 'inline-souce-map',
  mode: 'production',
  stats: 'minimal',
  output: {
    publicPath: './'
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*'], {
      root: path.resolve(__dirname, '../'),
      verbose: false
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'common'
    }
  }
})