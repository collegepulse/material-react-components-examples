const webpack = require('webpack');

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
        test: /\.css$/,
        exclude: /node_modules\/(?!material-react-components)/,
        use: [
          'style-loader',
          'css-loader?modules&localIdentName=[name].[local]',
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!material-react-components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.svg$/,
        exclude: /node_modules\/(?!material-design-icons)/,
        use: [
          'babel-loader',
          'react-svg-loader'
        ]
      }
    ]
  }
};
