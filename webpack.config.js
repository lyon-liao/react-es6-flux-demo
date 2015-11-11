var path = require('path');
module.exports = {
  entry: "./js/app.js",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "app.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js|jsx$/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      }
    ]
  }
};