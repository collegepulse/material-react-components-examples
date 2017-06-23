module.exports = {
  entry: {
    bundle: [
      './node_modules/material-react-components/dist/common.js',
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
