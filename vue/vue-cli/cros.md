# vue-cli 使用代理跨域

文件 /config/index.js
节点 dev.proxyTable

配置如下：

```js
proxyTable: {
  '/api': {
    target: 'http://domain:port',       // 使用target代理提交域名
    changeOrigin: true,
    pathRewrite: {
      '^/api': 'api'
    }
  }
}
```
以上是开发环境下。
生产环境可以使用 ngnix 配置代理。


**额外：**[代理参考](https://github.com/chimurai/http-proxy-middleware)