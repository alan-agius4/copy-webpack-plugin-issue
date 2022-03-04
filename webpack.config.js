const { resolve } = require("path");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./index.js",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "asset", to: "dest" }],
    }),
  ],
  output: {
    scriptType: "module",
    path: resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};
