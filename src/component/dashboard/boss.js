
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Card, WingBlank} from 'antd-mobile'
import {getUserList} from '../../redux/chartuser'
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
  	console.log(this.state.data)
    return (
      <WingBlank>
      	{this.props.userList.map(v=>(
			 <Card key={v._id}>
				<Card.Header
				title={v.user}
				thumb={require(`../img/${v.avatar}.png`)}
				extra={<span>{v.title}</span>}
				>
				</Card.Header>  
				<Card.Body>
				{v.desc.split('\n').map(v=>(
					<div key={v}>{v}</div>
					))}
				</Card.Body>
			</Card> 

      		))}
      </WingBlank>
    );
  }
}



export default Boss;