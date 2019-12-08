require('dotenv').config()

const metalsmith = require('metalsmith')
const paths = require('metalsmith-paths')
const static = require('metalsmith-static')
const assets = require('metalsmith-assets')
const algolia = require('metalsmith-algolia')
const layouts = require('metalsmith-layouts')
const markdown = require('metalsmith-markdown')
const permalinks = require('metalsmith-permalinks')
const collections = require('metalsmith-collections')

const config = require('./config')
const shortcodes = require('./parsers/shortcodes')

metalsmith(__dirname)
  .source(config.paths.src)
  .destination(config.paths.public)
  .clean(false)
  // .use(algolia({
  //   projectId: process.env.ALGOLIA_APP_ID,
  //   privateKey: process.env.ALGOLIA_PRIVATE_KEY,
  //   index: process.env.ALGOLIA_INDEX
  // }))
  .use(markdown()) // Must be before all other plugins
  .use(collections({
    docs: {
      pattern: 'docs/*.html',
      sortBy: 'priority',
      reverse: true,
    },
    components: {
      pattern: 'docs/components/*.html',
      sortBy: 'title'
    }
  }))
  .use(permalinks({
    pattern: 'docs/:slug',
    linksets: [{
      match: {
        collection: 'components'
      },
      pattern: 'docs/components/:slug'
    }]
  }))
  .use(paths({
    property: "paths"
  }))
  .use(layouts({
    engine: 'nunjucks',
    directory: '../resources/templates',
  }))
  .use(shortcodes())
  .use(assets({
    source: '../resources/assets/htaccess',
    destination: './'
  }))
  .use(assets({
    source: '../resources/assets/ico',
    destination: './'
  }))
  .use(assets({
    source: '../resources/assets/images',
    destination: '../public/images'
  }))
  .build((err) => {
    if (err) console.log(err)
  })
