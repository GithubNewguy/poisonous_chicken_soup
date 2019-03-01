const express = require('express')
const ejs = require('ejs')
//页面路由地址汇总
const route = require('./router')
//接口路由地址（逻辑层）
const api_route = require('./model/api_route')

const app = express()


//将ejs模板 换成html模板
app.engine('html', ejs.__express);
app.set('view engine', 'html');

//默认页面
app.get('/',(req,res)=>{
	res.render('index')
})


//服务器静态资源配置
app.use('/static', express.static('static'))
app.use('/model', express.static('model'))

//路由配置
app.use(route)
app.use(api_route)

var server = app.listen(8081, () => {
	var host = server.address().address
	var port = server.address().port
	console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
