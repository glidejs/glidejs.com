const cssnano = require('cssnano')
const uncss = require('postcss-uncss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    // uncss({ html: ['public/**/*.html'] }),
    autoprefixer,
    cssnano()
  ]
}
