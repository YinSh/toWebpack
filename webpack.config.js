const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  // entry: "./src/index.js",//等价于
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: "./dist",
    open: true,
    proxy: {
      "/api": "http://localhost:3000",
    },
    port: 8888,
    hot: true,
    hotOnly: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            outputPath: "images/",
            //placeholders 占位符
            name: "[name]_[hash].[ext]",
            limit: 10240,
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // modules: true,
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "toWebpack",
      template: "src/index.html",
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
