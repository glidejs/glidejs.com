const { join } = require('path')
const { readdirSync, statSync } = require('fs')

/**
 * Gets list of names of the directory subdirectories.
 *
 * @param  {String} path
 * @return {Array}
 */
module.exports = (path) => {
  return readdirSync(path).filter((file) => {
    return statSync(join(path, file)).isDirectory()
  })
}
