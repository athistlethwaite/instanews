const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: "./js/script.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "./bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  },

  plugins: [new HtmlWebpackPlugin()],
  plugins: [
    new MinifyPlugin(minifyOpts, pluginOpts)
  ]
};

const productionConfig = merge([
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
]);

module.exports = {
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};


module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        }
      ]
    }, ]
  }
};