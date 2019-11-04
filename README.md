

# Hexo Fluid 主题 UI 修改版

![snipaste_fluid.png](https://ae01.alicdn.com/kf/U81d7d60459dd4ed484d28e5f99e933e2F.png)

## 原主题

[hexo-theme-fluid]( https://github.com/fluid-dev/hexo-theme-fluid/)

## 示例

### 原版

[Rook1e's blog](https://0x2e.github.io)

[zkqiang's blog](http://zkqiang.cn)

### 修改版

[demo](https://fluid.xhtml.love/)

[七夏浅笑](https://www.julydate.com)

## 新增的功能

1. 更多的主题颜色自定义
2. 更全面的网页统计
3. 侧边栏功能，显示基本信息和友链
4. 背景图可选全屏，背景飘雪效果，可选随机背景图
5. 首页文章列表可开关图片显示，可选显示随机图片
6. 文章显示字数统计，显示访问统计
7. 文章页图片灯箱效果
8. 分页按钮增加页码显示，分类页面、标签页面增加分页按钮
9. 页脚可选显示博客版权、运行时间、网站访问量、一言等
10. 关于页面增加评论框显示
11. 窗口监视效果
12. 优化 disqus 加载

关于修改部分更多详细信息参见[详细修改信息](#详细修改信息)

## 快速开始

#### 1. 获取最新版本

请优先下载 [最新版本](https://github.com/julydate/hexo-theme-fluid-mod/archive/master.zip)

下载后解压到 themes 目录下并重命名为 `fluid`。

#### 2. 必要的配置

按如下内容修改 Hexo 根目录中的 `_config.yml`

```yaml
# 设置语言，需要对应下面目录内的文件名，可以自定义文件内容
# https://github.com/fluid-dev/hexo-theme-fluid/tree/master/languages
language: zh-CN

# 关闭默认的代码高亮
highlight:
  enable: false
```

#### 3. 安装插件

```bash
npm i --save hexo-wordcount
# Node 版本 7.6.0 之前,请安装 2.x 版本 (Node.js v7.6.0 and previous) 
# npm install hexo-wordcount@2 --save
```

#### 4.启用主题

依然是根目录中的 `_config.yml`，如下修改：
```yaml
# Extensions
theme: fluid
```

## 实现平滑升级

从 v1.4.0 版本开始可以使用 Hexo [数据文件](https://hexo.io/zh-cn/docs/data-files.html)存放主题配置：

1. 进入博客根目录的 `/source/_data/` 目录（注意：不是主题的 source 目录），若 `_data` 文件夹不存在，请自行创建
2. 创建 `fluid_config.yml` 文件，并将主题配置文件中被修改的或者所有配置项复制到其中。这样 `fluid_config.yml` 会在 `hexo g` 时自动覆盖主题配置，并且不会在更新主题后丢失。
3. 将您自定义的资源文件（head_img、about.md 等）移动到博客根目录的 `source` 文件夹中（别忘了修改配置文件中对资源的引用地址）
4. (v1.5.0 版本及以上)如果需要使用 CDN 或其他方式存放静态资源：将 `_static_prefix.yml` 复制到博客根目录的 `/source/_data/` 中，重命名为 `fluid_static_prefix.yml`并按自己的需求修改配置。若 `_data/fluid_static_prefix.yml` 存在则会自动覆盖 `/theme/fluid/_static_prefix.yml`。

完成上述步骤后，以后您只需用新的 release 覆盖 `/theme/fluid` 文件夹即可更新主题。

## 常见问题

#### 代码高亮异常（比如出现多重行号）

请确认 Hexo 根目录的 `_config.yml` 中高亮已关闭：

```yaml
highlight:
  enable: false
```

修改后使用清除命令 `hexo clean && hexo g`

#### 配置无效

- 请检查配置文件是否符合 yml 语法，如冒号后需要有空格，缩进需要 2 个空格等

## 其他信息参考原主题文档

[详细配置](https://fluid-dev.github.io/hexo-fluid-docs/)

[更新日志](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/Changelog.md)

[文章配置](https://hexo.io/zh-cn/docs/front-matter)

## 详细修改信息

### 配置文件

_config.yml

增加全局头像设置

```yml
avatar: /img/head.jpg  # 头像
```

增加窗口监视相关配置

```yml
monitortext:
    enable: true
    text: 你不爱我了QAQ
```

 增加背景飘雪效果配置

```yml
snow: 
    enable: true # 是否开启背景飘雪效果
    color: rgba(255, 255, 255, 0.7) # 雪花颜色
```

修改主体颜色配置配置项（增加侧边栏，目录，页脚，滚动条相关颜色自定义）

```yml
color:  # 主体颜色配置，可以从这里寻找启发： https://www.webdesignrankings.com/resources/lolcolors/
  body_bg_color: "#eee"
  navbar_bg_color: "#fc9d9a" #2f4154
  navbar_text_color: "white"
  text_color: "#3c4858"
  link_color: "#3c4858"
  link_hover_color: "#fe4365" #1abc9c
  tocbot_link_shadow: "0.1em 0.1em 0.2em #ffffff"
  tocbot_active_link_shadow: "0.1em 0.1em 0.2em #ffbcbc"
  sidebar_text_color: "#3c4858"
  sidebar_background_color: "rgba(246, 248, 250, 0.82)" #f6f8fad1
  sidebar_button_color: "#99a9bf"
  sidebar_button_shift_color: "#ffffff"
  sidebar_button_shift_shadow: "0.1rem 0.1rem 0.5rem #3e3e3e"
  sidebar_about_link_color: "#3c4858"
  sidebar_about_link_hover_color: "#fe4365"
  sidebar_avatar_border: "5px solid #ffffff"
  sidebar_subtitle_color: "#999999"
  sidebar_friend_title: "#ffffff"
  sidebar_friend_title_background: "#fe91b4"
  sidebar_friend_link: "#3c4858"
  sidebar_friend_link_hover: "#ffffff"
  sidebar_friend_li_border: "1px dashed #bdbdbd"
  sidebar_friend_li_hover: "#fe91b4"
  sidebar_friend_ico: "#bfbfbf"
  footer_color: "#ffffff"
  footer_shadow: "0.1rem 0.1rem 0.5rem white"
  footer_a_color: "#ffffff"
  footer_a_hover_color: "#fe4365"
  footer_theme_a_color: "#fc9d9a"
  footer_theme_a_shadow: "0.1rem 0.1rem 0.2rem #fe4365"
  footer_icon_color: "#fc9d9a"
  footer_icon_shadow: "0.1rem 0.1rem 0.5rem #ffffff"
  scrollbar_color: "#fec9c9"
  scrollbar_thumb_color: "#fe4365"
```

增加网页统计代码配置项，将百度统计配置项合并

```yml
web_analytics:  # 网页统计代码
  enable: true
  baidu: # 百度统计的Key，留空则不启用
  tencent:  # 腾讯统计的H5 App id，参见 https://mta.qq.com/h5/manage/ctr_app_manage
  woyaola:  # 51.la站点统计ID，参见 https://www.51.la/user/site/index
  cnzz: # 友盟/cnzz站点统计web_id，参见 https://web.umeng.com/main.php?c=site&a=show
  google: # Google统计的Tracking ID，参见 https://analytics.google.com/analytics/web/
```

增加文章图片灯箱效果配置项（原主题已更新相关功能）

```yml
fancybox: # 文章图片灯箱
  enable: true
```

增加全局背景图相关配置项

```yml
full_banner: true # 头图和页面头部是否占满全屏，开启需同时设置对应页面 banner_img_height 为100
full_bg_img: true # 背景图是否全屏
```

修改页脚相关配置项（增加版权信息，运行时间，访问量，一言配置）

```yml
footer:
  show_copyright: true # 显示博客版权信息
  date:  # 显示博客运行时间
    enable: false
    create_date: 2015,04,20 # 博客创立时间，格式如 2015,04,20
    text: 萌萌哒%d天啦 # 要显示的文字，%d 是指日期数，不要漏掉
  site_pv:
    enable: true # 是否显示本站总访问量
    text: 被瞅了%d次 # %d 是指访问数量
    offset:  # 总访问量数值修正，不清楚请留空
  site_uv:
    enable: true # 是否显示本站访客数
    text: 被%d人看爆
    offset:  # 访客数数值修正，不清楚请留空
  beian:  # The footer of China's website policy, other areas keep disable
    enable: false
    icp_text: 京ICP证123456号 # ICP证号
    police_text: 京公网安备12345678号 # 公安备案号，不填则只显示ICP
    police_code: 12345678 # 公安备案的编号，用于URL跳转查询
  hitokoto: true # 显示一言，关于一言：https://hitokoto.cn/
```

修改首页相关配置项（增加显示字数统计，首页文章列表图片相关配置）

```yml
index:
  banner_img: /img/default.png  # 首页 Banner 头图，以下相同
  banner_img_height: 100  # 头图高度，屏幕百分比，available: 0 - 100
  slogan:  # 首页副标题的独立设置
    enable: true  # 为 false 则不显示任何内容
    text:  # 为空则按 hexo config.subtitle 显示
  auto_excerpt:
    enable: true
  post_url_target: _self  # available: _blank | _self
  post_meta: # 是否显示文章信息（时间、字数、分类、标签）
    date: true
    wordcount: true
    category: true
    tag: true
  post_img: 
    enable: true # 是否显示首页文章列表图片
    default: /img/default.png # 首页文章列表默认图片
    random: true # 是否开启文章列表随机图片，具体参见：https://www.xjh.me/3069.html?replytocom=4888
    ctype:   # 可选 random,auto,acg,nature ，auto 为不指定 ctype，random 为在两种 ctype 中随机，留空则不限制图片类型为 bg
```

修改文章页相关配置项，增加文章访问统计（原主题已更新相关功能）

```yml
post:
  pageview: true # 是否显示访问统计，参见 https://busuanzi.ibruce.info/
```

关于页配置中删除头像`avatar:`的配置项，已合并在全局配置项中

增加侧边栏配置项

```yml
#---------------------------
# 侧边栏
# Sidebar
#---------------------------
sidebar:
    enable: true
    name:  # 名字，留空则使用网站title
    introduce:  # 支持 HTML，留空则使用网站subtitle
    icons: # 更多图标可从 https://fontawesome.com/icons 查找，并以 "图标名: url" 的格式添加在下方
        "fab fa-github": https://github.com
        "fab fa-twitter": https://twitter.com
        "fas fa-envelope": mailto:example@example.com
```

增加友链配置项

```yml
#---------------------------
# 友链
# Friends
#---------------------------    
friends: 
  friendname: https://example.com/
```

### 语言文件

languages/en.yml

```yml
pageTotal: "%d posts in page."
```

languages/zh-CN.yml

```yml
pageTotal: 本页 %d 篇文章
```

### 页面头部模板文件

layout/_partial/head.ejs

增加 banner-bg 相关 css 表定义，删除[访问统计模板](#访问统计模板)的引用（已经放入[页脚](#页脚模板文件)）

```ejs
<style type="text/css">
    .banner-bg {
      background: url('<%- banner_img %>') center center;
      background-repeat: repeat-y;
      background-size: cover;
      background-attachment: <%- theme.banner_scroll == true ? 'scroll' : 'fixed' %>;
    }
</style>
```

### 页脚模板文件

layout/_partial/footer.ejs

用 footerContent 的 div 包裹 footer，更新主题相关声明，增加显示版权信息、博客运行时间、[页面访问统计](#不蒜子插件)（原主题已更新）、[一言](#一言插件)等模块，增加引用[访问统计模板](#访问统计模板)

```ejs
<div id="footerContent"  class="rgba-black-slight">
<footer class="pt-5">
  <div class="text-center py-3">
    <div class="footer-theme">
      <a href="https://hexo.io" target="_blank" rel="nofollow noopener noreferrer">Hexo</a> theme <a href="https://github.com/fluid-dev/hexo-theme-fluid" target="_blank" rel="nofollow noopener noreferrer">Fluid</a> mod by <a href="https://github.com/julydate/hexo-theme-fluid-mod" target="_blank" rel="nofollow noopener noreferrer">Julydate</a>
    </div>

    <% if(theme.footer.show_copyright || theme.footer.date.enable) { %>
      <div class="footer-copyright">
        <% if(theme.footer.show_copyright) { %>
          ©<%= date(new Date(), 'YYYY') %>&nbsp;<%= config.author || config.title %>
        <% } %>
        <% if(theme.footer.date.enable) { %>
          <% if(theme.footer.show_copyright) { %>
            <i class="iconfont icon-love"></i>
          <% } %>
          <span><%= theme.footer.date.text.split('%d')[0] %><span id="runtime"></span><%= theme.footer.date.text.split('%d')[1] %></span>
        <% } %>
      </div>
    <% } %>

    <% if(theme.footer.site_pv.enable || theme.footer.site_uv.enable) { %>
      <div class="footer-siteview">
        <% if(theme.footer.site_pv.enable) { %>
          <!-- 不蒜子统计PV -->
          <span id="busuanzi_container_site_pv" style="display:none">
              <%= theme.footer.site_pv.text.split('%d')[0] %><span id="busuanzi_value_site_pv"></span><%= theme.footer.site_pv.text.split('%d')[1] %>
          </span>
        <% } %>
        <% if(theme.footer.site_uv.enable) { %>
          <!-- 不蒜子统计UV -->
          <span id="busuanzi_container_site_uv" style="display:none">
            <% if(theme.footer.site_pv.enable) { %>|<% } %>
            <%= theme.footer.site_uv.text.split('%d')[0] %><span id="busuanzi_value_site_uv"></span><%= theme.footer.site_uv.text.split('%d')[1] %>
          </span>
        <% } %>
      </div>
    <% } %>

    <% if(theme.footer.beian.enable) { %>
      <!-- 备案信息 -->
      <div class="footer-beian">
        <a href="http://beian.miit.gov.cn/" target="_blank"
          rel="nofollow noopener noreferrer"><%- theme.footer.beian.icp_text %></a>
        <% if(theme.footer.beian.police_text && theme.footer.beian.police_code) { %>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=<%- theme.footer.beian.police_code %>"
            target="_blank" rel="nofollow noopener noreferrer"> | <%- theme.footer.beian.police_text %></a>
        <% } %>
      </div>
    <% } %>

    <% if(theme.footer.hitokoto) { %>
      <!-- 一言 -->
      <div class="footer-hitokoto">
        <a id="hitokotoa" href="#" target="_blank" rel="nofollow noopener noreferrer">
          <span id="hitokoto"></span>
        </a>
      </div>
    <% } %>
    
  </div>
</footer>
</div>
<%- partial('_partial/scripts.ejs') %>
<%- partial('_partial/analytics.ejs') %>
```

### css 模板文件

layout/_partial/css.ejs

增加 [fancybox](#FancyBox 插件) 资源引入（原主题已更新，命名 image_zoom），增加 jquery 引入

```ejs
<% if(is_post && theme.fancybox.enable){ %>
  <%- css_ex(theme.static_prefix.fancybox, "jquery.fancybox.min.css") %>
<% } %>
<%- js_ex(theme.static_prefix.jquery, "jquery.min.js") %>
```

### scripts 模板文件

layout/_partial/scripts .ejs

删除 jquery 引入（已在 [css 模板文件](#css 模板文件)引入），增加 [FancyBox](#FancyBox 插件)，[随机图片](#随机图片插件)，[一言](#一言插件)，[不蒜子](#不蒜子插件)插件引入，增加切换背景、显示博客运行时间、窗口监视、雪花效果相关 js

```ejs
<!-- Plugins -->
<%- partial('_partial/plugins/prettify.ejs') %>
<%- partial('_partial/plugins/typed.ejs') %>
<%- partial('_partial/plugins/anchor.ejs') %>
<%- partial('_partial/plugins/local-search.ejs') %>
<%- partial('_partial/plugins/fancybox.ejs') %>
<%- partial('_partial/plugins/math.ejs') %>
<%- partial('_partial/plugins/smooth_scroll.ejs') %>
<%- partial('_partial/plugins/random_img.ejs') %>
<%- partial('_partial/plugins/hitokoto.ejs') %>
<%- partial('_partial/plugins/busuanzi.ejs') %>
<!-- Functions -->
<script type="text/javascript">
  /* 切换背景 */
  <% if(theme.full_bg_img) { %>
  $("#background").removeClass("banner-bg");
  $("body").addClass("banner-bg");
  var postToTopHight = $("#board").offset().top;
  $(window).scroll(function () {
    var bgDisplay = false;
    var scrollHeight = document.body.scrollTop + document.documentElement.scrollTop;
    bgDisplay = scrollHeight >= postToTopHight;
    if(bgDisplay) {
      $('#background').removeClass("rgba-black-slight");
      $('#mainContent').removeClass("rgba-black-slight");
      $('#footerContent').removeClass("rgba-black-slight");
    } else {
      $('#background').addClass("rgba-black-slight");
      $('#mainContent').addClass("rgba-black-slight");
      $('#footerContent').addClass("rgba-black-slight");
    }
  });
  <% } else { %>
    $("body").removeClass("banner-bg");
    $("#background").addClass("banner-bg");
    $('#mainContent').removeClass("rgba-black-slight");
    $('#footerContent').removeClass("rgba-black-slight");
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) || (/Safari/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent))) {
      $("#background").css("background-attachment", "scroll");
    }
<% } %>
</script>
<% if(theme.footer.date.enable) { %>
  <script type="text/javascript">
    /*显示博客运行时间*/
    var blogRunTime = function () {
      var runTime = document.getElementById("runtime");
      var runtimeDate = "<%- theme.footer.date.create_date %>";
	    var createDate = new Date(runtimeDate);
	    var nowDate = new Date();
	    var dateLine = nowDate.getTime() - createDate.getTime();
	    var runDate = Math.floor(dateLine / (1000 * 60 * 60 * 24));
	    runTime.innerHTML = runDate;
    };
    $(document).ready(function(){
	    blogRunTime();
    });
  </script>
<% } %>
<% if(theme.fun_features.monitortext.enable) { %>
  <script type="text/javascript">
    /*窗口监视*/
    var originalTitle = document.title;
    window.onblur = function(){document.title = "<%- theme.fun_features.monitortext.text %>"};
    window.onfocus = function(){document.title = originalTitle};
  </script>
<% } %>
<% if(theme.fun_features.snow.enable) { %>
  <script type="text/javascript">
    /* 雪花效果 */
    console.log('雪花效果 code by kvv.me');
    ~function () {
      function t() {
          e.width = window.innerWidth,
          e.height = window.innerHeight,
          o = Math.round(window.innerWidth * window.innerHeight / 1e4)
      }
    );
      function n() {
          var t = window.innerWidth
            , d = window.innerHeight
            , c = e.getContext("2d");
          c.clearRect(0, 0, t, d),
          c.fillStyle = "<%= theme.fun_features.snow.color %>",
          c.beginPath(),
          a += .01;
          for (var u = 0; o > u; u++) {
            var l = r[u];
            if (!l) {
              continue
            }
            ;c.moveTo(l.x, l.y),
            c.arc(l.x, l.y, l.radius, 0, 2 * Math.PI, !0),
            l.y += Math.cos(a) + l.radius / 2,
            l.x += Math.sin(a * l.direction),
            (l.x > t + 5 || -5 > l.x || l.y > d) && (u % 3 > 0 ? (r[u].x = Math.random() * t,
            r[u].y = -10) : Math.sin(a * l.direction) > 0 ? (r[u].x = -5,
            r[u].y = Math.random() * d) : (r[u].x = t + 5,
            r[u].y = Math.random() * d))
          }
          c.fill(),
          i(n)
      }
      var e = document.createElement("canvas")
        , i = requestAnimationFrame || msRequestAnimationFrame || function(t) {
          setTimeout(t, 16)
        }
      , a = 0
      , o = 0
      , r = [];
      t(),
      e.className = "snow",
      document.body.appendChild(e);
      for (var d = 0; o > d; d++)
        r.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            radius: 4 * Math.random() + 1,
            direction: 2 * Math.random() - .5
        });
      addEventListener("resize", t),
      i(n)
    }();
  </script>
<% } %>
```

### 侧边栏模板文件

layout/_partial/sidebar.ejs

增加页面左下角按钮点击打开侧边栏效果，包含博客基本信息及友情链接

```ejs
<% if(theme.sidebar.enable){ %>
<div id="sidebar" class="sidebar-hide">
  <span class="sidebar-button sidebar-button-shift" id="toggle-sidebar" >
    <i class="fa fa-arrow-right on" aria-hidden="true"></i>
  </span>
  <div class="sidebar-overlay"></div>
  <div class="sidebar-intrude">
    <div class="sidebar-avatar">
      <img src="<%- url_for(theme.avatar) %>" srcset="<%- url_for(theme.avatar) %>" alt="avatar"/>
    </div>
    <div class="text-center sidebar-about">
      <p class="h3 sidebar-author"><%= theme.sidebar.name || config.title %></p>
      <p class="sidebar-subtitle"><%- theme.sidebar.introduce || config.subtitle %></p>
      <% for(var i in theme.sidebar.icons) { %>
        <a href="<%- theme.sidebar.icons[i] %>" class="h4" target="_blank">
          <i class="<%- i %>" aria-hidden="true"></i>
        </a>
        &nbsp;&nbsp;
      <% } %>
    </div>
    <div class="sidebar-friend">
      <p class="h6 sidebar-friend-title">
        <span class="sidebar-label-left"><i class="fas fa-user-friends"></i></span>
        <span class="sidebar-label">友情链接</span>
      </p>
      <ul class="list-group">
        <% for(var i in theme.friends) { %>
          <a href="<%- theme.friends[i] %>" target="_blank">
            <li class="list-group-item">
              <i class="fas fa-quote-left"></i>&nbsp;
              <%- i %>
            </li>
          </a>
        <% } %>
    </ul>
    </div>
  </div>
</div>
<% } %>
```

### 分页按钮模板文件

layout/_partial/paginator.ejs

全部重构，增加页码显示，增加翻页后自动滚动页面 js （原主题已更新相关代码）

```ejs
<% if (page.total > 1){ %>
  <nav aria-label="index posts navigation Page">
    <span class="pagination pg-blue justify-content-center mt-5">
      <%- paginator({
        prev_text: '<i class="fas fa-angle-double-left"></i>',
        next_text: '<i class="fas fa-angle-double-right"></i>',
        mid_size: 2,
        escape: false
      }) %>
    </span>
  </nav>
  <% if(theme.scroll_down_arrow.scroll_after_turning_page){ %>
    <script type="text/javascript">$(".pagination a").each(function(){$(this)[0].href+="#board";})</script>
  <% } %>
<% } %>
```

### layout 模板

layout/layout.ejs

增加传入 banner_img 参数给[页面头部模板文件](#页面头部模板文件)，body 默认增加 banner-bg 的类，增加[侧边栏模板文件](#侧边栏模板文件)引入，将 rgba-black-slight 的类移到前一个 div，增加文章字数统计和文章[阅读数统计](#不蒜子插件)，main 标签增加ID mainContent 和类 rgba-black-slight，修改 avatar 引用，增加页面 banner 覆盖全屏相关 js

```ejs
<%- partial('_partial/head', {banner_img: banner_img}) %>
<body class="banner-bg">
  <%- partial('_partial/sidebar') %>
    
...
    
<div class="view intro-2 rgba-black-slight" id="background">
    
...
    
<div class="mask flex-center">
    
...
    
              <p class="mt-3">
                <i class="far fa-calendar-alt"></i>
                <span class="post-date"><%- full_date(page.date, theme.post.date_format) %>&nbsp;|&nbsp;</span>
                <i class="far fa-chart-bar"></i>
                <span class="post-count"><%= wordcount(page.content) %></span>字&nbsp;|&nbsp;
                <i class="far fa-clock"></i>
                <span class="post-count"><%= min2read(page.content) %></span>分钟
                <% if(theme.post.pageview) { %>
                  <span id="busuanzi_container_page_pv" style="display:none">
                    &nbsp;|&nbsp;
                    <i class="far fa-eye"></i>
                    <span id="busuanzi_value_page_pv"></span>次
                  </span>
                <% } %>
              </p>
    
...
    
<main id="mainContent" class="rgba-black-slight">
    
...
    
<div class="container nopadding-md" style="padding-top:0.5rem;padding-bottom:0.5rem;">
        <div class="py-5 z-depth-3" id="board">
          <% if(page.layout == 'about') { %>
            <div class="about-avatar">
              <img src="<%- url_for(theme.avatar) %>"
                   class="img-fluid z-depth-1 rounded-circle"
                   alt="avatar">
            </div>
            
...
            
<% if(banner_img_height === 100 && theme.full_banner) { %>
    <script type="text/javascript">
      /* 页面 banner 覆盖全屏 */
      $(".scroll-down-bar .scroll-down-arrow").css({"margin-top":"3rem"});
      $("#board").css({"margin-top":"0"});
    </script>
<% } %>
```

### 主页页面

layout/index.ejs

增加主页文章列表显示[随机图片](#随机图片插件)功能，增加文章信息显示字数统计功能

```ejs
<% if(theme.index.post_img.enable) { %>
      <% if(post.index_img != null) { %>
      <div class="col-12 col-md-4 m-auto">
        <a href="<%- post_url %>" target="<%- theme.index.post_url_target %>">
          <img src="<%- post.index_img %>" alt="<%= post.title %>" class="img-fluid rounded z-depth-3 index-thumbnails">
        </a>
      </div>
      <% } else { %>
      <div class="col-12 col-md-4 m-auto">
        <a href="<%- post_url %>" target="<%- theme.index.post_url_target %>">
          <img src="<%= theme.index.post_img.default || '/img/default.png' %>" alt="<%= post.title %>" class="img-fluid rounded z-depth-3 index-thumbnails image_random">
        </a>
      </div>
      <% } %>
      <div class="col-12 col-md-8 m-auto">
    <% } else { %>
      <div class="col-12 col-md-12 m-auto">
    <% } %>
      <a href="<%- post_url %>" target="<%- theme.index.post_url_target %>">

...

<% if(theme.index.post_meta.wordcount ) { %>
    <i class="far fa-chart-bar"></i><%= wordcount(post.content) %>字&nbsp;&nbsp;
    <i class="far fa-clock"></i><%= min2read(post.content) %>分钟&nbsp;&nbsp;
<% } %>
```

### 关于页面

layout/about.ejs

增加评论框显示

```ejs
<!-- Comments -->
<div class="col-lg-12 mx-auto nopadding-md">
  <div class="container comments mx-auto" id="comments">
    <% if(theme.post.comments.enable) { %>
      <br><br>
      <% var type = '_partial/comments/' + theme.post.comments.type %>
      <%- partial(type) %>
    <% } %>
  </div>
</div>
```

### 分类页面

layout/category.ejs

将标题显示文本由“ 共计x篇文章”更改为“本页x篇文章”，增加分页按钮

```ejs
<p class="h4"><%= __('pageTotal', page.posts.length) %></p>
...
<%- partial('_partial/paginator') %>
```

### 标签页面

layout/tag.ejs

更改同[分类页面](#分类页面)，将标题显示文本由“ 共计x篇文章”更改为“本页x篇文章”，增加分页按钮

### 404页面

layout/404.ejs

增加隐藏 footer 多余内容的 js

```javascript
$(document).ready(function(){
    $(".footer-hitokoto").hide();
    $(".footer-siteview").hide();
    $(".footer-beian").hide();
    $('#background').removeClass("rgba-black-slight");
    $('#mainContent').removeClass("rgba-black-slight");
    $('#footerContent').removeClass("rgba-black-slight");
});
```

### 访问统计模板

layout/_partial/analytics.ejs

增加腾讯统计，51.la，CNZZ，Google Analytics 等多个统计代码

```ejs
<% if(theme.web_analytics.enable) { %> 
<% if(theme.web_analytics.baidu) { %>
<!-- 百度统计 -->
<script>
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?<%= theme.web_analytics.baidu %>";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
</script>
<% } %> 
<% if(theme.web_analytics.tencent) { %>
<!-- 腾讯统计 -->
<script>
  var _mtac = {};
  (function() {
    var mta = document.createElement("script");
    mta.src = "//pingjs.qq.com/h5/stats.js?v2.0.4";
    mta.setAttribute("name", "MTAH5");
    mta.setAttribute("sid", "<%= theme.web_analytics.tencent %>");
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(mta, s);
  })();
</script>
<% } %> 
<% if(theme.web_analytics.woyaola) { %>
<!-- 51.la -->
<script type="text/javascript" src="//js.users.51.la/<%= theme.web_analytics.woyaola %>.js"></script>
<% } %> 
<% if(theme.web_analytics.cnzz) { %>
<!-- cnzz -->
<style type="text/css">#cnzz_stat_icon_<%= theme.web_analytics.cnzz %>{display: none;}</style>
<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_<%= theme.web_analytics.cnzz %>'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D<%= theme.web_analytics.cnzz %>' type='text/javascript'%3E%3C/script%3E"));</script>
<% } %> 
<% if(theme.web_analytics.google) { %>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=<%= theme.web_analytics.google %>"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());
  gtag("config", "<%= theme.web_analytics.google %>");
</script>
<% } %> 
<% } %>
```

### Disqus 评论模板

layout/_partial/comments/disqus.ejs

增加 disqus 评论框异步延迟加载功能，防止 disqus 不能加载时导致页面载入缓慢的问题

```ejs
<div class="disqus" style="width:100%">
  <div id="disqus_thread">
    <div id="disqus_loading" style="width: 100%; margin: 0 auto 0 auto; text-align: center;">
      <button type="button" class="btn btn-primary disqus_click_btn" onclick="reload_disqus();">点击加载评论</button>
    </div>
  </div>
  <script type="text/javascript">
	/*Disqus 评论框*/
	var recheckDQ = function () {
		if($('#disqus_thread').length) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', '//disqus.com/next/config.json?' + new Date().getTime(), true);
			xhr.timeout = 3000;
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4 && xhr.status == 200) {
					/*加载 Disqus 评论框*/
					if(window.DISQUS) {
						DISQUS.reset({
						reload: true
						});
					} else {
						/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
						var disqus_shortname = '<%= theme.disqus.shortname || config.disqus_shortname %>';
						
						/* * * DON'T EDIT BELOW THIS LINE * * */
             			var disqus_config = function () {
							 this.page.url = "<%= config.url + config.root + page.path %>";
							 this.page.identifier = "<%= page.path %>"; 
							 this.page.title = "<%= page.title %>";
             			};
             			(function () {
							 var d = document, s = d.createElement('script');
               				 s.type = 'text/javascript';
               				 s.src = '//' + disqus_shortname + '.disqus.com/embed.js';
               				 s.setAttribute('data-timestamp', +new Date());
               				 (d.head || d.body).appendChild(s);
             			})();
					}
				}
			}
			xhr.ontimeout = function () {
				xhr.abort();
        /*加载自制评论框*/
        document.getElementById('disqus_loading').style.display = "block";
				document.getElementById('disqus_loading').innerHTML = '<button type="button" class="btn btn-primary disqus_click_btn" onclick="reload_disqus();">点击重新加载评论</button><div class="col-lg-6 mx-auto nopadding-md" style="padding-top:10px;"><p>如果长时间无法加载，请针对 disq.us | disquscdn.com | disqus.com 启用代理</p></div>';
			}
			xhr.onerror = function() {
        /*加载自制评论框*/
        document.getElementById('disqus_loading').style.display = "block";
				document.getElementById('disqus_loading').innerHTML = '<button type="button" class="btn btn-primary disqus_click_btn" onclick="reload_disqus();">点击重新加载评论</button><div class="col-lg-6 mx-auto nopadding-md" style="padding-top:10px;"><p>如果长时间无法加载，请针对 disq.us | disquscdn.com | disqus.com 启用代理</p></div>';
			}
			xhr.send(null);
		}
	}
	/*异步加载评论框*/
	$(document).ready(function(){
  		if(document.getElementById('disqus_thread')) {
    		recheckDQ();
  		}
	});
	/*重载评论框*/
	var reload_disqus = function () {
  		recheckDQ();
  		$('#disqus_loading').css('display','none');
	}
  </script>
  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow noopener">comments
      powered by Disqus.</a></noscript>
</div>
```

### 不蒜子插件

layout/_partial/plugins/busuanzi.ejs

增加不蒜子页面访问统计插件引入（原主题已更新相关功能），增加不蒜子计数初始值纠正

```ejs
<% if(theme.post.pageview || theme.footer.site_pv.enable || theme.footer.site_uv.enable) { %>
  <%- js_async("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js") %>
  <% if(theme.footer.site_pv.offset || theme.footer.site_uv.offset) { %>
    <script>
      /* 不蒜子计数初始值纠正 */
      $(document).ready(function() {
        var busuanziPvOffset = 0;
        var busuanziUvOffset = 0;
        <% if(theme.footer.site_pv.offset){ %>
          busuanziPvOffset = parseInt(<%= theme.footer.site_pv.offset %>);
        <% } %>
        <% if(theme.footer.site_uv.offset){ %>
          busuanziUvOffset = parseInt(<%= theme.footer.site_uv.offset %>);
        <% } %>
        if(busuanziPvOffset !== 0) var intPv = setInterval(function(){fixPvCount(intPv, busuanziPvOffset)}, 100);
        if(busuanziUvOffset !== 0) var intUv = setInterval(function(){fixUvCount(intUv, busuanziUvOffset)}, 100);
        function fixPvCount(int, offset) {
          if ($("#busuanzi_container_site_pv").css("display") !== "none") {
            clearInterval(int);
            $("#busuanzi_value_site_pv").html(parseInt($("#busuanzi_value_site_pv").html()) + offset);
          }
        }
        function fixUvCount(int, offset) {
          if ($("#busuanzi_container_site_uv").css("display") != "none") {
            clearInterval(int);
            $("#busuanzi_value_site_uv").html(parseInt($("#busuanzi_value_site_uv").html()) + offset);
          }
        }
      });
    </script>
  <% } %>
<% } %>
```

### FancyBox 插件

layout/_partial/plugins/fancybox.ejs

增加 FancyBox 文章图片放大插件引入（原主题已更新相关功能）

```ejs
<% if(is_post() && theme.fancybox.enable){ %>
  <%- js_ex(theme.static_prefix.fancybox, "jquery.fancybox.min.js") %>
  <script type="text/javascript">
  /* Fancybox */
  var setupFancybox = function () {
    $("#post img:not(.no-zoom img, img[no-zoom])").each(function() {
    var element = document.createElement("a");
      $(element).attr("data-fancybox", "gallery");
      $(element).attr("href", $(this).attr("src"));
      $(this).wrap(element);
    });
  };
  setupFancybox();
  </script>
<% } %>
```

### 一言插件

layout/_partial/plugins/hitokoto.ejs

增加[一言](https://hitokoto.cn/)插件

```ejs
<% if(theme.footer.hitokoto) { %>
  <script type="text/javascript">
  /*一言API*/
  $(document).ready(function(){
    getHitokoto();
  });
  function hitokoto(e) {
    $("#hitokoto").stop().fadeOut(function() {
      $("#hitokoto").html(e.hitokoto);
      var element = document.getElementById('hitokotoa');
      element.href = "https://hitokoto.cn?id=" + e.id;
      $("#hitokoto").stop().fadeIn()
    })
  };
  function getHitokoto() {
    var e = ["a", "b", "c", "d"],
    t = document.createElement("script");
    t.type = "text/javascript";
    t.id = "hitokotoko_js";
    t.src = "//v1.hitokoto.cn/?encode=json&callback=hitokoto&charset=utf-8&cat=" + e[Math.floor(Math.random() * e.length)];
    $("#hitokoto").append(t);
  };
  setInterval(getHitokoto, 1e4);
  </script>
<% } %>
```

### 随机图片插件

layout/_partial/plugins/random_img.ejs

增加首页文章列表[随机图片](https://img.xjh.me/)

```ejs
<% if(theme.index.post_img.enable && theme.index.post_img.random) { %>
  <script type="text/javascript">
    /* 首页文章列表随机图片 */
    $("img.image_random").each(function(){
      <% if(theme.index.post_img.ctype) { %>
        <% if(theme.index.post_img.ctype === "random") { %>
          var ctypeAll = ["acg","nature"];
          var ctype = ctypeAll[Math.floor(Math.random() * ctypeAll.length)];
          var xjhUrl = "//img.xjh.me/random_img.php?return=json&type=bg&ctype=" + ctype;
        <% } else if(theme.index.post_img.ctype === "auto") { %>
          var xjhUrl = "//img.xjh.me/random_img.php?return=json&type=bg;
        <% } else { %>
          var ctype = <%= theme.index.post_img.ctype %>;
          var xjhUrl = "//img.xjh.me/random_img.php?return=json&type=bg&ctype=" + ctype;
        <% } %>
      <% } else { %>
        var xjhUrl = "//img.xjh.me/random_img.php?return=json";
      <% } %>
      var _this = $(this);
      $.get(xjhUrl,function(data,status){
        if(status === "success"){
          if(data.result === 200){
            _this[0].src = data.img;
          }
        }
      });
    });
  </script>
<% } %>
```

### 样式表文件

 source/css/\_pages/\_base/base.styl 

增加[分页按钮](#分页按钮模板文件)、雪花、[侧边栏](#侧边栏模板文件)、目录文字阴影、底部文字样式、博客运行时间样式、滚动条样式相关设置

```stylus
/* pagination */
.pagination a, .pagination .current
  outline 0
  border 0
  background-color transparent
  font-size .9rem
  padding .5rem .75rem
  line-height 1.25
  -webkit-border-radius .125rem
  border-radius .125rem
  -webkit-transition all .3s linear
  -o-transition all .3s linear
  transition all .3s linear

.pagination a:hover, .pagination .current
    background-color #eee


/* 雪花 */
.snow 
    position fixed
    z-index -1
    top 0
    left 0
    
    
    
............
    
    
    
/* 侧边栏 */
#sidebar
    position fixed
    top 0
    left 0
    z-index 1040
    overflow-y auto
    width 300px
    height 100%
    color $sidebar-text-color
    background-color $sidebar-background-color
    -webkit-transition all .2s ease-in-out
    -o-transition all .2s ease-in-out
    transition all .2s ease-in
    -webkit-box-shadow 0.25rem 0px 0.25rem 0px rgba(175, 175, 175, 0.6)
    box-shadow 0.25rem 0px 0.25rem 0px rgba(175, 175, 175, 0.6)

#sidebar::-webkit-scrollbar
    display none    

.sidebar-hide
    margin-left -300px
    -webkit-box-shadow none !important
    box-shadow none !important

.sidebar-button
    position fixed
    z-index 3
    /* 按钮背景 */
    padding .5rem .7rem .5rem .3rem
    margin 2rem 0 2rem 0
    border-radius 0 3rem 3rem 0
    background-color rgba(255, 255, 255, 0.4)
    /* padding 1rem */
    bottom 0
    color $sidebar-button-color
    cursor pointer
    -webkit-transition all .2s ease-in-out
    -o-transition all .2s ease-in-out
    transition all .2s ease-in-out

.sidebar-button:hover
    color $link-hover-color
    -webkit-transition all .2s ease-in-out
    -o-transition all .2s ease-in-out
    transition all .2s ease-in-out

.sidebar-button i 
    transform rotateZ(180deg)

.sidebar-button-shift
    left 0
    color $sidebar-button-shift-color
    text-shadow $sidebar-button-shift-shadow

.sidebar-button-shift i 
    transform rotateZ(0deg)

.sidebar-overlay
    display none
    width 100%
    height 180px
    background-color #fe91b4
    position absolute

.sidebar-intrude 
    margin 60px auto 0 auto
    z-index 3

.sidebar-avatar 
    position relative
    border $sidebar-avatar-border
    border-radius 300px
    width 128px
    height 128px
    margin 0 auto
    position relative
    overflow hidden
    background-color #88acdb
    -webkit-transition all .2s ease-in
    display -webkit-box
    -webkit-box-pack center
    -webkit-box-align center
    text-align center;

.sidebar-avatar img
    border 0
    vertical-align middle
    max-width 100%

.sidebar-about a
    color $sidebar-about-link-color

.sidebar-about a:hover
    color $sidebar-about-link-hover-color
    
.sidebar-author
    margin .67em 0
    font-family Roboto,sans-serif
    font-size 30px
    transition .3s

.sidebar-subtitle
    color $sidebar-subtitle-color

.sidebar-label-left
    height 100%
    padding 0 7px 0 7px
    background-color $sidebar-about-link-color
    float left

.sidebar-friend
    margin 40px auto
    padding 0

.sidebar-friend-title
    max-width 120px
    margin 20px auto
    padding 0
    line-height 2rem
    color $sidebar-friend-title
    background-color $sidebar-friend-title-background
    text-align center

.sidebar-friend a,a:hover 
    -webkit-transition .1s !important
    -o-transition .1s !important
    transition .1s !important

.sidebar-friend a
    color $sidebar-friend-link

.sidebar-friend a:hover
    color $sidebar-friend-link-hover

.sidebar-friend li
    width calc(100% - 5rem)
    margin 0 auto
    background none
    border-bottom $sidebar-friend-li-border
    -webkit-transition all .2s ease-in-out
    -o-transition all .2s ease-in-out
    transition all .2s ease-in-out

.sidebar-friend li:hover
    background-color $sidebar-friend-li-hover
    -webkit-transition all .2s ease-in-out
    -o-transition all .2s ease-in-out
    transition all .2s ease-in-out

.sidebar-friend i.fa-quote-left
    color $sidebar-friend-ico

/* 目录文字阴影 */
.tocbot-link
    text-shadow $tocbot-link-shadow

.tocbot-active-link 
    text-shadow $tocbot-active-link-shadow


/* 底部文字样式修正 */
footer 
    color $footer-color
    text-shadow $footer-shadow

footer a 
    color $footer-a-color

footer a:hover 
    color $footer-a-hover-color

footer .iconfont 
    color $footer-icon-color
    text-shadow $footer-icon-shadow

.footer-theme a
    color $footer-theme-a-color
    text-shadow $footer-theme-a-shadow

.footer-hitokoto
    max-width 50rem
    margin 0 auto
    max-height 3rem
    overflow hidden

@media (max-width: 992px)
    .footer-hitokoto
        max-width: 80%


/* 博客运行时间样式 */
#runtime, #busuanzi_value_site_pv, #busuanzi_value_site_uv
    cursor pointer
    -webkit-transition all .2s ease-in-out
    -o-transition all .2s ease-in-out
    transition all .2s ease-in-out

#runtime:hover, #busuanzi_value_site_pv:hover, #busuanzi_value_site_uv:hover
    color $footer-a-hover-color
    text-shadow $footer-shadow
    -webkit-transition all .2s ease-in-out
    -o-transition all .2s ease-in-out
    transition all .2s ease-in-out


/* 控制整个滚动条 */
::-webkit-scrollbar {
    background-color: $scrollbar-color;
    width: 10px;
    height: 10px;
    background-clip: padding-box;
}
/* 滚动条两端方向按钮 */
::-webkit-scrollbar-button {
    display: none;
}
/* 滚动条中间滑动部分 */
::-webkit-scrollbar-thumb {
    background-color: $scrollbar-thumb-color;
    border-radius: 5px;
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
}
/* 滚动条右下角区域 */
::-webkit-scrollbar-corner {
    background-color: $scrollbar-thumb-color;
}
```

 source/css/\_variables/base.styl 

增加目录、[侧边栏](#侧边栏模板文件)、页脚、滚动条自定义相关变量

```stylus
//toc
$tocbot-link-shadow = theme-config("color.tocbot_link_shadow", "0.1em 0.1em 0.2em #ffffff")
$tocbot-active-link-shadow = theme-config("color.tocbot_active_link_shadow", "0.1em 0.1em 0.2em #ffbcbc")

//sidebar
$sidebar-text-color = theme-config("color.sidebar_text_color", "#3c4858")
$sidebar-background-color = theme-config("color.sidebar_background_color", "#f6f8fad1")
$sidebar-button-color = theme-config("color.sidebar_button_color", "#99a9bf")
$sidebar-button-shift-color = theme-config("color.sidebar_button_shift_color", "#ffffff")
$sidebar-button-shift-shadow = theme-config("color.sidebar_button_shift_shadow", "0.1rem 0.1rem 0.5rem #3e3e3e")
$sidebar-about-link-color = theme-config("color.sidebar_about_link_color", "#3c4858")
$sidebar-about-link-hover-color = theme-config("color.sidebar_about_link_hover_color", "#fe4365")
$sidebar-avatar-border = theme-config("color.sidebar_avatar_border", "5px solid #ffffff")
$sidebar-subtitle-color = theme-config("color.sidebar_subtitle_color", "#999999")
$sidebar-friend-title = theme-config("color.sidebar_friend_title", "#ffffff")
$sidebar-friend-title-background = theme-config("color.sidebar_friend_title_background", "#fe91b4")
$sidebar-friend-link = theme-config("color.sidebar_friend_link", "#3c4858")
$sidebar-friend-link-hover = theme-config("color.sidebar_friend_link_hover", "#ffffff")
$sidebar-friend-li-border = theme-config("color.sidebar_friend_li_border", "1px dashed #bdbdbd")
$sidebar-friend-li-hover = theme-config("color.sidebar_friend_li_hover", "#fe91b4")
$sidebar-friend-ico = theme-config("color.sidebar_friend_ico", "#bfbfbf")

//footer
$footer-color = theme-config("color.footer_color", "#ffffff")
$footer-shadow = theme-config("color.footer_shadow", "0.1rem 0.1rem 0.5rem white")
$footer-a-color = theme-config("color.footer_a_color", "#ffffff")
$footer-a-hover-color = theme-config("color.footer_a_hover_color", "#fe4365")
$footer-theme-a-color = theme-config("color.footer_theme_a_color", "#fc9d9a")
$footer-theme-a-shadow = theme-config("color.footer_theme_a_shadow", "0.1rem 0.1rem 0.2rem #fe4365")
$footer-icon-color = theme-config("color.footer_icon_color", "#fc9d9a")
$footer-icon-shadow = theme-config("color.footer_icon_shadow", "0.1rem 0.1rem 0.5rem white")

//scrollbar
$scrollbar-color = theme-config("color.scrollbar_color", "#fec9c9")
$scrollbar-thumb-color = theme-config("color.scrollbar_thumb_color", "#fe4365")
```

### JS 文件

 source/js/main.js 

删除“在 iOS 和 Safari 环境下不使用固定 Banner”相关 js，已经移入[scripts 模板文件](#scripts 模板文件)中，增加[侧边栏](#侧边栏模板文件)相关控制代码

```javascript
/* Sidebar */
var toggleSidebar = function(){
  $("#sidebar").toggleClass('sidebar-hide');
  $("#toggle-sidebar").toggleClass('sidebar-button-shift');
}
var hideSidebar = function(){
  $("#sidebar").addClass('sidebar-hide');
  $("#toggle-sidebar").addClass('sidebar-button-shift');
}
$("#toggle-sidebar").on("click",toggleSidebar);
$("header").on("click",hideSidebar);
$("#mainContent").on("click",hideSidebar);
$("#footerContent").on("click",hideSidebar);
```

 source/js/post.js 

禁用掉滚动到页面底部时隐藏侧边目录，因为在文章结尾处标题比较密集时，页面还未滚到文章末尾时侧边栏会消失

```javascript
} else if (scroH > tocLimMax) {
      toc.css("display", "none")
      /* 滚动到页面底部时隐藏侧边目录，有bug */
      /* toc.css("display", "none") */
}
```

## 开源协议

[MIT](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/LICENSE)
