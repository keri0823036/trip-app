const path = require('path')
const rootJoin = p => path.join(__dirname, '.', p)
const resolve = {
  extensions: ['.json', '.vue', '.js', '.ts'],
  alias: {
    '@': rootJoin('./src')
  }
}

module.exports = {
    configureWebpack: {
      resolve
    }
}