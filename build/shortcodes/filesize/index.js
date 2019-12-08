const fs = require('fs')
const path = require('path')

const config = require('../../config')

module.exports = (shortcode, content) => {
  let stats = fs.statSync(path.join(config.paths.root, shortcode.attributes.file))

  return Math.round(stats.size / 1000) // bytes to kilobytes
}
