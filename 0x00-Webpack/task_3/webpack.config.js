const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    header: "./modules/header/header.js",
    body: "./modules/body/body.js",
    footer: "./modules/footer/footer.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    assetModuleFilename: "assets/[name][ext]",
  },
  mode: "development",
  devServer: {
    contentBase: "./public",
    port: 8564,
    open: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"], // Process CSS
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Match image files
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader", // Optimize images
            options: {
              mozjpeg: { progressive: true, quality: 75 },
              optipng: { enabled: true },
              pngquant: { quality: [0.65, 0.9], speed: 4 },
              gifsicle: { interlaced: false },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
      title: "ALX Dashboard",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // Split shared code into separate chunks
    },
  },
};
