import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icons from '../../../helpers/iconsHelper';
import './leftNav.scss'


console.log({ icons })
class LeftNav extends Component{

  render(){
    const { navItems, linkPrefix } = this.props
    return (
    <div className="left-nav">
      <div className="nav-header">
        <i className="fas fa-bars"></i>
      </div>
      <ul className="nav-items">
        { navItems.map(navItem =>(
          <li key={navItem}>
          <Link to={`${linkPrefix}/${navItem}`} >
           {icons[navItem].render()}
          </Link>
        </li>))
        }
      </ul>
      <div className="nav-footer">
        <Link to="#"><i className="fas fa-arrow-left"></i></Link>
      </div>
    </div>
    );
  }
}

export default LeftNav;