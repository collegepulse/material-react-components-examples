material-react-components-examples
==================================

This project demonstrates usage of the ES5 and ES6 versions of the material-react-components library. The ES6 integration method is recommended because it results in smaller bundle size. In our example projects (using identical components), the ES5 bundle is 268 kB; the ES6 bundle is 216 kB, which is nearly 20% smaller.

- es6 (Recommended)

And add the following loaders:

```
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
      }
    ]
  }
```

And create the postcss.config.js file in the root of your project:

```jsx
const cssvariables = require('material-react-components/src/variables');

module.exports = () => ({
  plugins: {
    'postcss-simple-vars': {
      variables: () => (
        cssvariables
      )
    },
    autoprefixer: {
      browsers: ['last 4 versions']
    }
  }
});
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


- `es5`

The es5 configuration is the simplest to use, but it comes with the tradeoff of less optimization of your final bundle. Simply `npm install material-react-components` and import the common material-react-components chunk **before** any of the components. For example, configure your webpack entry point like so:

```
  entry: {
    'bundle': [
      './node_modules/material-react-components/dist/common.js',
      './main.js'
    ]
  }
```

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

