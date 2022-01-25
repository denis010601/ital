module.exports = {
  htmlmin: {
      collapseWhitespace: false
  },
  pug: {
    pretty: true,
    data: {
      news: require('../data/news.json')
    }
  }
}