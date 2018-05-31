

import React, { Component } from 'react';
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
	state=>state.user,
	{update}
)
class GeniusInfo extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	title:'',
	  	desc:'',
	  };
	}
	onChange(key,val){
		this.setState({
			[key]:val,
		})
	}
  render() {
  	const path = this.props.location.pathname
  	const redirectTo = this.props.redirectTo
    return (
		<div>
			{redirectTo && path !== redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
			<NavBar mode="dark">genius完善信息页</NavBar>
			<AvatarSelector selectAvatar={(imgname)=>{
				this.setState({
					avatar:imgname
				})

			}}></AvatarSelector>
			<InputItem onChange={(v)=>this.onChange('title',v)}>求职岗位</InputItem>
			<TextareaItem  title='个人简介' onChange={(v)=>this.onChange('desc',v)} rows={3} autoHeight></TextareaItem>
			<Button onClick={()=>{
				this.props.update(this.state)
			}} type='primary'>保存</Button>
		</div>
    );
  }
}



export default GeniusInfo;