

import React, { Component } from 'react';
import Logo from '../../component/logo/logo'
import {List, InputItem, WhiteSpace, Button, Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
import '../../index.css'
import { Redirect } from 'react-router-dom'
import customForm from '../../component/custom_form/custom_form.js'
//装饰器模式
@connect(
	//从多个reducer中选择user
	state=>state.user,
	{register}
)
@customForm
class Register extends Component {
	constructor(props) {
	  super(props);
	  this.handleRegister = this.handleRegister.bind(this)

	}
	componentDidMount() {
		this.props.handleChange('type','genius')
	}
	handleRegister() {
		this.props.register(this.props.state)
	}
  render() {
  	const RadioItem = Radio.RadioItem
    return (
      <div>
      {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
      	<Logo></Logo>
      	<List>
      		{this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
      		<InputItem onChange={v=>this.props.handleChange('user',v)}>用户</InputItem>
      		<WhiteSpace  />
      		<InputItem type='password' onChange={v=>this.props.handleChange('pwd',v)}>密码</InputItem>
      		<WhiteSpace  />
      		<InputItem type='password' onChange={v=>this.props.handleChange('repeatPwd',v)}>确认密码</InputItem>
      		<WhiteSpace  />
			<RadioItem checked={this.props.state.type === 'genius'} onChange={()=>this.props.handleChange('type','genius')}>
				牛人
			</RadioItem>
			<RadioItem checked={this.props.state.type === 'boss'} onChange={()=>this.props.handleChange('type','boss')}>
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