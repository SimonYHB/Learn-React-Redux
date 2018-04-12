const express = require('express')
const bodyParser = require('body-parser') //解析Post json数据
const cookieParser = require('cookie-parser')  //cookie

const userRouter = require('./user')

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter) //use 开启中间件  子路由与user相关的,都会到该路由下

// app.get('/',function(req,res){
// 	res.send('<h1>hello world</h1>')
// })
app.listen(9093,function(){
	console.log('Node app start at port 9093')
})



