const fs = require('fs')
const glob = require('glob')
const { relative } = require('path')

const glide = require('./getGlideDetails')

/**
 * Generates list of documentation page's routes
 * based on json files and list of versions.
 *
 * @param  {String} jsonDir
 * @param  {Array} versions
 * @param  {Object} routes
 * @return {Object}
 */
module.exports = (jsonDir, versions, routes = {}) => {
  return new Promise((resolve, reject) => {
    let sources = []

    versions.forEach((version) => {
      let source = new Promise((resolve, reject) => {
        glob(`${jsonDir}/${version}/**/*.json`, (err, files) => {
          files.forEach((file) => {
            let json = JSON.parse(fs.readFileSync(file, 'utf8'))
            let route = `${relative(jsonDir, file)}`.replace('.json', '')

            switch (true) {
              // Currently processed version of documentation matches latest
              // version of `@glidejs/glide`, so we will generate route
              // path that don't include version number in it's URL
              case glide.version[0] === version[0]:
                route = route.replace(`${version}/`, '')

                Object.assign(routes, {
                  [`/docs/${route}`]: {
                    page: '/docs',
                    query: {
                      version,
                      ...json
                    }
                  }
                })
                break

              // Processed version is for older release of `@glidejs/glide`,
              // so include version number in it's URL
              default:
                Object.assign(routes, {
                  [`/docs/${route}`]: {
                    page: '/docs',
                    query: {
                      version,
                      ...json
                    }
                  }
                })
            }
          })

          resolve()
        })
      })

      sources.push(source)
    })

    return Promise.all(sources).then(() => {
      resolve(routes)
    })
  })
}
