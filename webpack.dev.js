const { merge } = require("webpack-merge")
const base = require("./webpack.base.js")

module.exports = merge(base, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    contentBase: "./src",
    writeToDisk: true
  },
})
