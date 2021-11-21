const path = require("path");

const { babel } = require("@rollup/plugin-babel");
const { terser } = require("rollup-plugin-terser");
const commonjs = require("@rollup/plugin-commonjs");
const { nodeResolve } = require("@rollup/plugin-node-resolve");

const config = require("./config");

module.exports = {
  input: path.join(config.paths.assets, "js/app.js"),
  output: {
    file: path.join(config.paths.public, "js/app.js"),
    format: "iife",
  },
  plugins: [nodeResolve(), commonjs(), babel(), terser()],
};
