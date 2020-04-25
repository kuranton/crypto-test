const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const js = {
  test: /\.js$/,
  use: 'babel-loader'
}

const sass = {
  test: /\.sass$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: {
          localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
        }
      }
    },
    'sass-loader'
  ]
}

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 8000
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [js, sass]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'dist/index.html')
    })
  ]
}
