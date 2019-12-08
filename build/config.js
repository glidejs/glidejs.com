const path = require('path')

module.exports = {
  paths: {
    root: path.resolve(__dirname, '../'),
    src: path.resolve(__dirname, '../src'),
    public: path.resolve(__dirname, '../public'),
    examples: path.resolve(__dirname, '../examples'),
    assets: path.resolve(__dirname, '../resources/assets'),
    shortcodes: path.resolve(__dirname, '../resources/shortcodes'),
  }
}
