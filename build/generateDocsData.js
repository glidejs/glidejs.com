const fs = require('fs')
const glob = require('glob')
const fse = require('fs-extra')

const unified = require('unified')
const parse = require('remark-parse')
const html = require('remark-html')
const frontmatter = require('remark-frontmatter')
const parseFrontmatter = require('remark-parse-yaml')
const visit = require('unist-util-visit')

const { relative } = require('path')

const glide = require('./getGlideDetails')
const getSubdirectoriesNames = require('./getSubdirectoriesNames')

/**
 * Generates json data files based on markdown files and varsions.
 *
 * @param  {String} jsonDir
 * @param  {String} markdownDir
 * @param  {Array}  versions
 * @return {Void}
 */
module.exports = (jsonDir, markdownDir, versions = []) => {
  versions.forEach((version) => {
    const path = `${markdownDir}/${version}`

    glob(`${path}/**/*.md`, (err, files) => {
      files.forEach((file) => {
        const route = `${relative(path, file)}`.replace('.md', '')
        const content = fs.readFileSync(`${relative('.', file)}`, { encoding: 'utf-8' })

        unified()
          .use(parse)
          .use(frontmatter, ['yaml'])
          .use(parseFrontmatter)
          .use(() => (ast, file) => {
            visit(ast, 'yaml', item => {
              file.data.parameters = item.data.parsedValue
            })
          })
          .use(html)
          .process(content, function (err, file) {
            if (err) throw err

            fse.outputFile(`${jsonDir}/${version}/${route}.json`, JSON.stringify({
              data: file.data,
              content: String(file)
            }), (err) => {
              if (err) throw err
            })
          })
      })
    })
  })
}
