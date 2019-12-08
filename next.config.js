const getDocsRoutes = require('./build/getDocsRoutes')
const getSubdirectoriesNames = require('./build/getSubdirectoriesNames')

const JSON_DIR = `${__dirname}/json/docs`
const MARKDOWN_DIR = `${__dirname}/node_modules/@glidejs/docs`

module.exports = {
  exportPathMap: async (defaultPathMap) => {
    const routes = {
      '/': {
        page: '/'
      }
    }
    const versions = getSubdirectoriesNames(MARKDOWN_DIR)

    return Object.assign(
      routes,
      await getDocsRoutes(JSON_DIR, versions)
    )
  }
}
