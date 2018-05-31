

import React, { Component } from 'react';


function customForm(Comp){
	
	return class WrapperComp extends Component {
		constructor(props) {
		  super(props);
		
		  this.state = {};
		  this.handleChange = this.handleChange.bind(this)
		}
		handleChange(key,val) {
		    this.setState({
		      [key]:val
		    })
		  }
		render() {
			return <Comp handleChange={this.handleChange} state={this.state} {...this.props}></Comp>
		}
	}
}
  


export default customForm;