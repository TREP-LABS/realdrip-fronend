import React, { PureComponent } from 'react';
import './label.scss';

class Label extends PureComponent {
  render() {
    return (
      <div className="label">
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Label;