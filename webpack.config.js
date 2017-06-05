/*
    ./webpack.config.js
*/
const path = require('path');

module.exports = {
  entry: './resources/assets/js/app.js',
  output: {
    path: path.resolve('./public/javascripts'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
