#!/usr/bin/env node

// 1. 获取express
let express = require('express')
let bodyParser = require('body-parser')
// 2. 获取路由
let router = express.Router()
// 3. 创建 app 对象
let app = new express()
// 4. 装配路由对象，以及body-parser对象
app.use('/api', router)
app.use(bodyParser.json())
// 5. 启动web服务
let port = 8088
app.listen(port)
console.log('web服务已启动，正在监听' + port + '端口,访问： http://localhost:' + port + '/api')

// 设置路由信息
// 全局请求过滤器
router.all('*', (req, res, next) => {
  console.log('method: ' + req.method)
  console.log('params: ' + JSON.stringify(req.params))
  console.log('query: ' + JSON.stringify(req.query))
  console.log('body: ' + JSON.stringify(req.body))
  next()    // 继续执行请求
})

router.get('/', (req, res) => {
  res.json({
    errno: 0,
    data: '访问根目录'
  })  
})

router.get('/test', (req, res) => {
  res.json({
    errno: 0,
    data: '访问test目录'
  })  
})

router.post('/post', (req, res) => {
  res.json({
    errno: 0,
    data: '访问post目录'
  })  
})

