module.exports = {
  context: __dirname + '/app',
  entry: './index',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'ruby-sass']
      },
      {
        test: /\.jsx?$/,
        loader: 'babel'
      }
    ]
  }
};
