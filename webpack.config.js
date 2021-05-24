const opn = require('opn');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      inject: 'body',
      template: './src/index.html'
    })
  ],
  devtool: 'cheap-module-source-map'
};

opn(`http://localhost:8080`);