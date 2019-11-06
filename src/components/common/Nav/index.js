import React, { PureComponent } from 'react';
import Label from '../Label';
import './nav.scss';

class Nav extends PureComponent {
  render(){
    return (
        <nav className="top-nav">
        <div className="container">
          <div className="nav-items">
            <div><Label value="Ward"/></div>
            <div><span>How it works</span></div>
          </div>
        </div>
        </nav>
     )
  }
}

export default Nav;