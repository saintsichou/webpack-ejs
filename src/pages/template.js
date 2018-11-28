

const layout =  require('./template.ejs');
const header =  require('../component/html/header.ejs');
const nav =  require('../component/html/nav.ejs');
const sidebar =  require('../component/html/sidebar.ejs');
const foot  = require('../pages/foot.ejs');
const defaultConfig = {
  pageTitle: '',
  needScripts:null
};
let cfg = null;
const moduleExports = {
  /* 处理各个页面传入而又需要在公共区域用到的参数 */
  init(config) {
    cfg = Object.assign({}, defaultConfig , config); // 页头组件需要加载css/js等，因此需要比较多的变量
    return this;
  },

  /* 整合各公共组件和页面实际内容，最后生成完整的HTML文档 */
  run(content) {
    
    const renderData = {
      header:header(cfg),
      nav: nav(cfg),
      sidebar: sidebar(cfg),
      content,
      foot:foot(cfg)
    };
    return layout(renderData);
  },
};

module.exports = moduleExports;