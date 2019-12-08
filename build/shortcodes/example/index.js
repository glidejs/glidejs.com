const path = require('path')
const nunjucks = require('nunjucks')

const config = require('../../config')

const slugify = (text) => {
  let specialChars = {"à":'a',"ä":'a',"á":'a',"â":'a',"æ":'a',"å":'a',"ë":'e',"è":'e',"é":'e', "ê":'e',"î":'i',"ï":'i',"ì":'i',"í":'i',"ò":'o',"ó":'o',"ö":'o',"ô":'o',"ø":'o',"ù":'o',"ú":'u',"ü":'u',"û":'u',"ñ":'n',"ç":'c',"ß":'s',"ÿ":'y',"œ":'o',"ŕ":'r',"ś":'s',"ń":'n',"ṕ":'p',"ẃ":'w',"ǵ":'g',"ǹ":'n',"ḿ":'m',"ǘ":'u',"ẍ":'x',"ź":'z',"ḧ":'h',"·":'-',"/":'-',"_":'-',",":'-',":":'-',";":'-'}

    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/./g,(target, index, str) => specialChars[target] || target)
      .replace(/&/g, '-and-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
}

module.exports = (shortcode, content) => {
  var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(config.paths.root))

  let template = path.join(config.paths.shortcodes, 'example.html')
  let example = path.join(config.paths.examples, shortcode.attributes.dir)

  return env.render(template, {
    active: shortcode.attributes.active,
    html: env.render(path.join(example, 'index.html'), {
      id: slugify(shortcode.attributes.dir)
    }),
    js: env.render(path.join(example, 'index.js'), {
      id: slugify(shortcode.attributes.dir)
    })
  })
}
