## material-react-components-examples

This project demonstrates usage of the ES5 and ES6 versions of the material-react-components library. The ES6 integration method is recommended because it results in smaller bundle size. In our example projects (using identical components), the ES5 bundle is 282 kB / 617 kB (with / without tree shaking, respectively); the ES6 bundle is 252 kB.


### es6 (Recommended)

And add the following loaders. Note that you must enable css modules in the css loader:

```
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules\/(?!material-react-components)/,
        use: [
          'style-loader',
          'css-loader?modules'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!material-react-components)/,
        loader: 'babel-loader'
      }
    ]
  }
```

If using the material-design-icons project, or any components containing SVG's, include the following loader:

```
  module: {
    rules: [
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
```


### es5

The es5 configuration is the simplest to use, but it comes with the tradeoff of less optimization of your final bundle.

If using the material-design-icons project, or any components containing SVG's, include the following loader:

```
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          'react-svg-loader'
        ]
      }
    ]
```
