/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const dotenv = require("dotenv");

dotenv.config();

const config = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "static" }],
    }),
    new Dotenv(),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_RAPID_API_KEY": JSON.stringify(
        process.env.REACT_APP_RAPID_API_KEY
      ),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};

if (process.env.NODE_ENV === "development") {
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        { from: "public/mockServiceWorker.js", to: "mockServiceWorker.js" },
      ],
    })
  );
}

module.exports = config;
