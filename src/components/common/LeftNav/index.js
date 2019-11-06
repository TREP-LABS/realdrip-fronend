import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dashboard} from '../../../icons/dashboard.svg';
import { ReactComponent as Settings} from '../../../icons/settings.svg';
import { ReactComponent as Operations} from '../../../icons/operations.svg';
import { ReactComponent as Devices} from '../../../icons/devices.svg';
import { ReactComponent as Nurses} from '../../../icons/nurse.svg';

import './leftNav.scss'


class LeftNav extends Component{

  render(){
    return (
    <div className="left-nav">
      <div className="nav-header">
        <i className="fas fa-bars"></i>
      </div>
      <ul className="nav-items">
        <li>
          <Link to="dashboard" >
            <Dashboard className="nav-item" />
          </Link>
        </li>
        <li>
          <Link to="settings" >
            <Settings className="nav-item" />
          </Link>
        </li>
        <li>
          <Link to="operations" >
            <Operations className="nav-item" />
          </Link>
        </li>
        <li>
          <Link to="devices" >
            <Devices className="nav-item" />
          </Link>
        </li>
        <li>
          <Link to="Nurses" >
            <Nurses className="nav-item" />
          </Link>
        </li>
        
      </ul>
      <div className="nav-footer">
        <Link to="#"><i className="fas fa-arrow-left"></i></Link>
      </div>
    </div>
    );
  }
}

export default LeftNav;