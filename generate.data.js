const rimraf = require('rimraf-promise')

const generateDocsData = require('./build/generateDocsData')
const getSubdirectoriesNames = require('./build/getSubdirectoriesNames')

const JSON_DIR = `${__dirname}/json/docs`
const MARKDOWN_DIR = `${__dirname}/node_modules/@glidejs/docs`

rimraf(JSON_DIR).then(() => {
  const versions = getSubdirectoriesNames(MARKDOWN_DIR)

  generateDocsData(JSON_DIR, MARKDOWN_DIR, versions)
})
