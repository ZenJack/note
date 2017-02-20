# [vue-resource](https://github.com/pagekit/vue-resource/blob/develop/docs/http.md) + [express](http://www.expressjs.com.cn/4x/api.html#req.body)

单击上面[链接](https://github.com/pagekit/vue-resource/blob/develop/docs/http.md)获取vue-resource帮助。

注意看 Method 栏，以及 Options 栏。

摘要：
```js
// global Vue object
Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);
Vue.http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);

// in a Vue instance
this.$http.get('/someUrl', [options]).then(successCallback, errorCallback);
this.$http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);
```

主要问题：针对 POST 提交。

在 express 中获取 post 提交值需要使用 [body-parser](https://github.com/expressjs/body-parser#readme) 中间件。

摘要：

```js
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```

express获取参数有三种方法：官网实例：  
  
    1. Checks route params (req.params), ex: /user/:id  
    2. Checks query string params (req.query), ex: ?id=12  
    3. Checks urlencoded body params (req.body), ex: id= 
