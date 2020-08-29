const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const WorkboxPlugin = require("workbox-webpack-plugin")
const WebpackPwaManifest = require("webpack-pwa-manifest")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
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
            esModule: false,
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
        disclaimer:
          "Disclaimer: Due to the ability to update dream island addresses, there is the possiblity that a code you get may no longer be valid.",
        devName: "Joseph Oravbiere",
        portfolioLink: "https://josephoravbiere.com",
      },
      meta: {
        charset: "UTF-8",
        viewport: "width=device-width, initial-scale=1.0",
        description:
          "Make your next dream island visit a surprise by getting a randomly chosen dream island address",
        "theme-color": "#312377",
      },
    }),
    new Dotenv({
      systemvars: true,
    }),
    new WebpackPwaManifest({
      name: "Dream Address Generator",
      short_name: "Dream Address Generator",
      start_url: "/",
      description: "Get a random Animal Crossing Dream Address",
      theme_color: "#312377",
      background_color: "#312377",
      display: "standalone",
      inject: true,
      ios: "true",
      icons: [
        {
          src: path.resolve("src/favicon.png"),
          sizes: [128, 144, 152, 192, 256, 512],
          destination: "icons",
        },
        {
          src: path.resolve('src/favicon.png'),
          size: 192,
          destination: path.join('icons', 'ios'),
          ios: 'true'
        },
        {
          src: path.resolve('src/img/icon_maskable.png'),
          size: '598x598',
          purpose: 'maskable'
        }
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      ignoreURLParametersMatching: [/.*/],
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://fonts.googleapis.com"),
          handler: "StaleWhileRevalidate",
        },
        {
          urlPattern: new RegExp("https://fonts.gstatic.com"),
          handler: "CacheFirst",
        },
        {
          urlPattern: new RegExp(process.env.API_URL),
          handler: "StaleWhileRevalidate",
        },
      ],
    }),
  ],
}
