const { resolve } = require("path");

module.exports = {
  devtool: false,
  entry: "./index.js",
  target: ["web", "es2020"],
  node: false,
  output: {
    scriptType: "module",
    path: resolve(__dirname, "dist"),
    filename: "[name].js",
    trustedTypes: "bundler",
    publicPath: "",
  },
  cache: {
    maxMemoryGenerations: 1,
    type: 'filesystem',
  }
};
