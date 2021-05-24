const HtmlwebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

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
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ],
  devtool: 'cheap-module-source-map'
};
