/* eslint-disable */
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./bin/app.js",
    chunkFilename: "./bin/[name].bit.js",
    publicPath: "/"
  },
  devtool: "source-map",
  target: "web",
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    hot: true
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all" }
      }
    }
  }
}
