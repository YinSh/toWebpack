const path = require("path");

module.exports = {
  // entry: "./src/index.js",//等价于
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
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
            options: { modules: true, importLoaders: 2 },
          },
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
