const parser = require('shortcode-insert')

const lead = require('../shortcodes/lead')
const example = require('../shortcodes/example')
const filesize = require('../shortcodes/filesize')
const gzipsize = require('../shortcodes/gzipsize')

const SHORTCODES = {
  lead,
  example,
  filesize,
  gzipsize,
}

const inserter = parser()

for (let shortcode in SHORTCODES) {
  inserter.add(shortcode, SHORTCODES[shortcode])
}

module.exports = () => {
  return (files, metalsmith, done) => {
    let parsed = []

    Object.keys(files).forEach((file) => {
      let content = inserter.parse(files[file].contents.toString())

      content
        .then((parsed) => {
          files[file].contents = Buffer.from(parsed)
        })
        .catch((error) => {
          throw error
        })

      parsed.push(content)
    })

    Promise.all(parsed).then(() => {
      done()
    })
  }
}
