const express = require('express')
const bodyParser = require('body-parser') //解析Post json数据
const cookieParser = require('cookie-parser')  //cookie
const app = express()
//express使用socketio
const model = require('./model')
const Chat = model.getModel('chat')
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection',function(socket){
	socket.on('sendmsg',function(data){
		const {from, to ,msg} = data
		const chatid = [from,to].sort().join('_')
		Chat.create({chatid,from,to,content:msg},function(err,doc){
			io.emit('recvmsg',Object.assign({},doc._doc))
		})

	})
})




const userRouter = require('./user')


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter) //use 开启中间件  子路由与user相关的,都会到该路由下
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.get('/',function(req,res){
// 	res.send('<h1>hello world</h1>')
// })
server.listen(9093,function(){
	console.log('Node app start at port 9093')
})



