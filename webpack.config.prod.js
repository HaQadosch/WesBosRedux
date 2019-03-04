var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: [

    './client/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  }
}
