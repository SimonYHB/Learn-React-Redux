

import React, { Component } from 'react';
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import '../../index.css'
import { Redirect } from 'react-router-dom'
//装饰器模式
@connect(
	//从多个reducer中选择user
	state=>state.user,
	{register}
)
class Register extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	type:'genius',
	  	user:'',
	  	pwd:'',
	  	repeatPwd:''
	  }; 
	  this.handleRegister = this.handleRegister.bind(this)

	}
	handleChange(key,val) {
		this.setState({
			[key]:val
		})
	}
	handleRegister() {
		this.props.register(this.state)
	}
  render() {
  	const RadioItem = Radio.RadioItem
    return (
      <div>
      {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
      	<Logo></Logo>
      	<List>
      		{this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
      		<InputItem onChange={v=>this.handleChange('user',v)}>用户</InputItem>
      		<WhiteSpace  />
      		<InputItem type='password' onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
      		<WhiteSpace  />
      		<InputItem type='password' onChange={v=>this.handleChange('repeatPwd',v)}>确认密码</InputItem>
      		<WhiteSpace  />
			<RadioItem checked={this.state.type === 'genius'} onChange={()=>this.handleChange('type','genius')}>
				牛人
			</RadioItem>
			<RadioItem checked={this.state.type === 'boss'} onChange={()=>this.handleChange('type','boss')}>
				Boss
			</RadioItem>
			<WhiteSpace  />
			<Button type='primary' onClick={this.handleRegister}>注册</Button>
      	</List>
      	<h2>注册页</h2>
   
      </div>
    );
  }
}


export default Register;