/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const dotenv = require("dotenv");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.module\.css$/i,
        exclude: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: [/\.module\.css$/, /\.scss$/],
        use: ["style-loader", "css-modules-typescript-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,

          { loader: "css-modules-typescript-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              esModule: false,
            },
          },
          { loader: "sass-loader" },
        ],
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
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: ["src/**/*.css"],
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
