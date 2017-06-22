material-react-components-examples
==================================

This project demonstrates usage of the ES5 and ES6 versions of the material-react-components library.

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
