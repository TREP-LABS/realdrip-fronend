import React, { Component } from 'react';
import Nav from '../../common/Nav';
import LeftNav from '../../common/LeftNav';

class Nurses extends Component {
  
  render(){
    const navItems = [
    'dashboard',
    'operations',
    'devices',
    'nurses',
    'settings'
  ];
    return (
      <div>
        <Nav/>
          <LeftNav navItems={navItems} linkPrefix="/ward"/>
          <div className="container">
            <h1>Nurses</h1>
          </div>
      </div>
    )
  }
}

export default Nurses;

