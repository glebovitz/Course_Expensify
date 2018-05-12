
# Webpack

## Documentation links

[Webpack documentation website](https://webpack.js.org)

[How to Guides](https://webpack.js.org/guides)

[Webpack Configuration Types](https://webpack.js.org/configuration/configuration-types)

[Webpack DevTool options](ttps://webpack.js.org/configuration/devtool)

Bundle includes source maps. We want to reduce them in production.

Two ways to use the webpack.config.js file
1. export an object
2. export a function

If we export a function we can add environment strings to webpack using the --env option
and that string will appear as a parameter 'env' to the exported function.
Below is the webpack command setting the env string to 'production':
```bash
webpack -p --env production
```

webpack config exported as an object:

```javascript
module.exports = {
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      test: /\.?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
```

webpack config exported as a function accepting the 'env' parameter:

```javascript
module.exports = (env) => {
  const isProduction = env === 'production';
  return ({
    entry: './src/App.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },{
        test: /\.?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  })
};
```
