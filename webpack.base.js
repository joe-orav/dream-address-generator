const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs",
            esModule: false
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      favicon: "./src/favicon.png",
      hash: true,
      templateParameters: {
        siteTitle: "Dream Address Generator",
        buttonLabel: "Generate",
        disclaimer: "Disclaimer: Due to the ability to update dream island addresses, there is the possiblity that a code you get may no longer be valid.",
        devName: "Joseph Oravbiere",
        portfolioLink: "https://josephoravbiere.com"
      },
      meta: {
        charset: "UTF-8",
        viewport: "width=device-width, initial-scale=1.0",
        description:
          "Make your next dream island visit a surprise by getting a randomly chosen dream island address",
        'theme-color': '#373089'
      },
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};
