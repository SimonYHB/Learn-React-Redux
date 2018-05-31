
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chartuser'
import UserCard from '../usercard/usercard'
@connect(
	state=>state.chartuser,
	{getUserList}
	)
class Boss extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {data:[]};
	}
	componentDidMount() {
		this.props.getUserList('genius')
	}
  render() {
    return (
      <UserCard userList={this.props.userList}></UserCard>
    );
  }
}



export default Boss;