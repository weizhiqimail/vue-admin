const path = require('path');

module.exports = {
  configureWebpack: config => {
    config.resolve.extensions = ['.js', '.vue', '.json'];
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', path.resolve('src'));
  },
  productionSourceMap: false
};
