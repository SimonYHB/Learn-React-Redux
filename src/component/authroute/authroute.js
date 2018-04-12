import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
@withRouter //此时即可拿到外层的router
class AuthRoute extends React.Component{
	componentDidMount() {
		//当野蛮已经是登录/注册页面时,就不用去处理
		const publicList = ['/login','/register']
		const pathname = this.props.location.pathname
		if (publicList.indexOf(pathname) > -1) {
			return null
		}
		//axios返回的是Promise对象
		axios.get('/user/info').then(res=>{
			if (res.status === 200) {
				if(res.data.code === 0) {
					//有登录信息
				} else {
					console.log(this.props)
					this.props.history.push('/login')
				}
				console.log(res.data)
			}
		})

	}
	render() {
		return null
	}
}

export default AuthRoute;