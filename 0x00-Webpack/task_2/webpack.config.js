const path = require("path");

module.exports = {
  entry: "./js/dashboard_main.js", // Entry file
  output: {
    filename: "bundle.js", // Output JS file
    path: path.resolve(__dirname, "public"), // Output directory
    assetModuleFilename: "assets/[name][ext]", // Images output folder
  },
  mode: "production", // Set production mode
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: ["style-loader", "css-loader"], // Process CSS files
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Match image files
        type: "asset/resource", // Include images in assets folder
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
