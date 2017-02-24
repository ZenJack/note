# vue 项目打包部署

1. **打包**
```
npm run build

注意：不要生成SourceMap
```
2. **部署**
```
将dist文件发布到web服务器下。

注意：URL地址模式
  1. hash模式，如 http://example.com/#/index
  2. HTML5 History模式，如 http://example.com/index

说明：第二种模式（HTML5 History）
  如果服务器未对URL作任何配置，刷新浏览器时会出现404,找不到页面的错误。
```

#### 后端配置例子 
---

#### Apache
```xml
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### nginx
```
location / {
  try_files $uri $uri/ /index.html;
}
```

#### Node.js (Express)

[https://github.com/bripkens/connect-history-api-fallback](http://router.vuejs.org/zh-cn/essentials/history-mode.html)

### [推荐阅读](http://router.vuejs.org/zh-cn/essentials/history-mode.html)
