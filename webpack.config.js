module.exports = {
  entry: './src/index.js',
  output: {
    path: './build/js',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
}