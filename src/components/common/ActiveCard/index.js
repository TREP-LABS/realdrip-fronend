import React, { Component } from 'react';
import './active-card.scss';

class ActiveCard extends Component {
  render() {
    const { count, Icon, label } = this.props;
    return (
      <div className="active-card">
          <div className="active-card-header">
            <h4>{count}</h4>
            <Icon className="active-card-icon"/>
          </div>
          <p className="active-card-label">{label}</p>
      </div>
    );
  }
}

export default ActiveCard;