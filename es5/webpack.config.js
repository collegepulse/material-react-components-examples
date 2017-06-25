module.exports = {
  entry: {
    bundle: [
      './main.js'
    ]
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          'react-svg-loader'
        ]
      }
    ]
  }
};
