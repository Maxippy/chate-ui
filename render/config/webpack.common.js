const webpack = require("webpack");
const path = require("path");
module.exports = {
  entry: "./render/index.tsx",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "../dist-render"),
  },
  // target:'web',由于electron这边可以在web中使用node,所以target我们不能设置成web而要使用electron-renderer webpack.dev.js
  target: "electron-renderer",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {},
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.ts$/, /\.tsx$/],
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: [/\.less$/, /\.css$/],
        // exclude:/node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: false,
              sourceMap: false,
            },
           
          },
          "less-loader",
        ],
      },
      {
        test: /.(jpg|png|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            //
            name: "[name]_[hash].[ext]",
          },
        },
      },
    ],
  },
  plugins: [],
};

