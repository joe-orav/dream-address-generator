const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(base, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});
