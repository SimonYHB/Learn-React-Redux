

import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Result, List,WhiteSpace,Modal,Button} from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {logoutSubmit} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
	state=>state.user,
	{logoutSubmit}
)
class User extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	}
	logout() {
		console.log('21321')
		const alert = Modal.alert
		alert('注销','确认退出登录?',[
			{text:'取消'},
			{text:'确认',onPress:()=>{
				browserCookie.erase('userid')
				// window.location.href = window.location.href
				this.props.logoutSubmit()
			}}	
		])
		
	}
  render() {
  	const props = this.props
  	const {Item} = List 
  	const {Brief} = Item
  	return props.user ? 
     (

     	<div>
     	<Result
			img={<img src={require(`../img/${this.props.avatar}.png`)} style={{width:50}} alt=''/>}
			title={this.props.user}
			message={props.type==='boss' ? props.company : null}
     	/>
     	<List renderHeader={()=>'简介'}>
			<Item multipleLine={true}>
				{props.title}
				<Brief>{props.desc}</Brief>
				{props.money ? <Brief>薪资:{props.money}</Brief> : null}
			</Item> 
     	</List>
     	<WhiteSpace></WhiteSpace>


     		<Button onClick={()=>this.logout()}>退出登录</Button>

     	</div>
    ) : <Redirect to={this.props.redirectTo} /> 
  }
}



export default User;