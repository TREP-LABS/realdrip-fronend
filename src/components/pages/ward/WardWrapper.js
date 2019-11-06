import React, { Component } from 'react';
import Nav from '../../common/Nav';
import LeftNav from '../../common/LeftNav';

class Ward  extends Component{

  render(){
    return (
      <div style={{ backgroundColor: '#f8f9f9', overflow:'scroll' }}>
        <LeftNav linkPrefix="/ward"/>
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}

export default Ward;
