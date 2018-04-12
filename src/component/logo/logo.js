

import React, { Component } from 'react';
import logoImage from './job.png'
import './logo.css'
class Logo extends Component {
  render() {
    return (
      <div className="logo-container">
		<img src={logoImage} alt=""/>
      </div>
    );
  }
}


export default Logo;