const path = require("path");

module.exports = {
  // Existing config
  entry: "./js/dashboard_main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    assetModuleFilename: "assets/[name][ext]",
  },
  mode: "production",
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
};
