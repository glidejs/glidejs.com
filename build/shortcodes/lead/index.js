const path = require('path')
const nunjucks = require('nunjucks')

const config = require('../../config')

module.exports = (shortcode, content) => {
  let template = path.join(config.paths.shortcodes, 'lead.html')

  return nunjucks.render(template, {
    content: shortcode.content
  })
}
