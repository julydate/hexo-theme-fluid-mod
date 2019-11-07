'use strict';
module.exports.lazyload = function (hexo) {
  var config = hexo.theme.config;
  var loadingImage = config.lazyload.loadingimg;
  if (!config.lazyload || !config.lazyload.enable) {
    return;
  }
  if (config.lazyload.onlypost) {
    hexo.extend.filter.register('after_post_render', function (data) {
      data.content = lazyProcess.call(this, data.content, loadingImage);
      return data;
    });
  } else {
    hexo.extend.filter.register('after_render:html', function (str, data) {
      return lazyProcess.call(this, str, loadingImage);
    });
  }
};

function lazyProcess(htmlContent, loadingImage) {
  return htmlContent.replace(/<img(\s*?)src="(.*?)"(.*?)>/gi, (str, p1, p2) => {
    if (/srcset=/gi.test(str)) {
      return str;
    }
    return str.replace(p2, `${p2}" srcset="${loadingImage}`);
  });
}