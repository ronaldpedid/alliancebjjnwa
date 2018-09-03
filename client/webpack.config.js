const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');


module.exports = htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  entry: "./src/index.html",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.html",
    publicPath: '/'
  }
});

module.exports = {
  entry: ['babel-polyfill', './src/index'],

  output: {
    filename: 'index.bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', }
    ]
  }
};

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            },

          },
          { loader: "sass-loader" }


        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlPlugin]
};