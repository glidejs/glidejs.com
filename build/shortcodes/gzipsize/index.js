const fs = require('fs')
const path = require('path')
const gzipsize = require('gzip-size')

const config = require('../../config')

module.exports = (shortcode, content) => {
  let file = path.join(config.paths.root, shortcode.attributes.file)

  return gzipsize.file(file).then((size) => {
    return Math.round(size / 1000) // bytes to kilobytes
  })
}
