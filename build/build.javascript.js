const path = require('path')

const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify')
const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')

const config = require('./config')

module.exports = {
  input: path.join(config.paths.assets, 'js/app.js'),
  output: {
    file: path.join(config.paths.public, 'js/app.js'),
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    uglify()
  ]
}
