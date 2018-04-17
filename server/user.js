const express = require('express')
const utils = require('utility')

const Router = express.Router()   //向外暴露Route 外部app.use('/user',userRouter)指定router来调用
const model = require('./model')
const User = model.getModel('user')
const _filter = {'pwd':0,'__v':0}  //过滤返回的密码和版本号

Router.get('/list',function(req, res){
	const {type} = req.query
	// User.remove({},function(e,d){})

	User.find({type},function(err,doc){
		return res.json({code:0, data:doc})
	})
})
Router.post('/update',function(req,res){
	const userid = req.cookies.userid
	if (!userid) {
		return json.dumps({code:1})
	}
	const body = req.body
	User.findByIdAndUpdate(userid,body,function(err,doc){
		//定义返回的函数 assign合并doc与body
		const data = Object.assign({},{
			user:doc.user,
			type:doc.type
		},body)
		return res.json({code:0,data})
	})


})
Router.post('/login', function(req,res){
	const {user, pwd} = req.body
	//隐藏pwd
	User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
		if (!doc) {
			return res.json({code:1,msg:'用户名或者密码错误'})
		}
		res.cookie('userid', doc._id)
		return res.json({code:0,data:doc})
	})
})
Router.post('/register', function(req, res){
	const {user, pwd, type} = req.body
	User.findOne({user},function(err,doc){
		if (doc) {
			return res.json({code:1,msg:'用户名重复'})
		}
		
		const userModel = new User({user,type,pwd:md5Pwd(pwd)})
		userModel.save(function(e,d){
			if (e) {
				return res.json({code:1,msg:'后端出错了'})
			}
			const {user, type, _id} = d
			res.cookie('userid', _id)
			return res.json({code:0,data:{user, type, _id}})
		})
	})
})
Router.get('/info',function(req, res){
	//判断有无cookie
	const {userid} = req.cookies
	if (!userid) {
		return res.json({code:1})
	}
	User.findOne({_id:userid} , _filter,function(err,doc){
		if (err) {
			return res.json({code:1, msg:'后端出错了'})
		}
		if (doc) {
			return res.json({code:0,data:doc})
		}
	})

	
})

function md5Pwd(pwd){
	const salt = 'saltsalt123321'
	return utils.md5(utils.md5(pwd+salt))
}


module.exports = Router