const layout =  require('layout');
const content =  require('./content.ejs');
module.exports = layout.init({
  pageTitle: '我是首页'
}).run(content());
