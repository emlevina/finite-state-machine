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
        use: [
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader" }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")

          {
            loader: "css-loader",
            options: {
              modules: true,
              esModule: false, // Add this line
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-modules-typescript-loader", "css-loader"],
        exclude: /\.module\.css$/,
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
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
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
