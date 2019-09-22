import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";

const ErrorText = (props) => {
  const component = props.text ? (
    <span className="error-text">{props.text}</span>
  ) : null;
  return component;
};

ErrorText.propTypes = {
  text: PropTypes.string,
};

export default ErrorText;
