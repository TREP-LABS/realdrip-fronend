import React from 'react';
import PropTypes from 'prop-types';
import ReactLoaderSpinner from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Spinner = (props) => {
  const component = props.display ? (
    <ReactLoaderSpinner
      type="TailSpin"
      color="#0cd891"
      height={props.height}
      width={props.width}
    />
  ) : null;
  return component;
};

Spinner.propTypes = {
  display: PropTypes.bool.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Spinner;
