
import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserCard from '../usercard/usercard'
import {getUserList} from '../../redux/chartuser'
@connect(
	state=>state.chartuser,
	{getUserList}
	)
class Genius extends Component {

	componentDidMount() {
		this.props.getUserList('boss')
	}
  render() {
	console.log(this.props.userList)
    return (
    	<UserCard userList={this.props.userList}></UserCard>
    );
  }
}



export default Genius;