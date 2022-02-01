const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'prod-bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        },
        exclude: /node_modules/
      }
    ]
  }
};
