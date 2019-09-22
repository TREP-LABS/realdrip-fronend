import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import View from './view';
import validateSignupInputs from './validation';
import { createAdminUser } from '../../../actions/user/auth';

export class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      country: null,
      state: null,
      address: null,
      password: null,
      confirmPassword: null,
      agreement: false,
      inputErrors: {},
      submissionError: null,
    };
  }

  componentDidUpdate(prevProps) {
    if(prevProps.addingUserError !== this.props.addingUserError && this.props.addingUserError) {
      const { fieldErrors, message }  =  this.props.addingUserError;
      this.setState({
        inputErrors: fieldErrors || this.state.inputErrors,
        submissionError: message || this.state.submissionError,
      });
    }
  }

  getInput = (event) => {
    const state = { ...this.state };
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  clearInputErrors = () => {
    this.setState({ inputErrors: {}});
  }

  register = (event) => {
    event.preventDefault();
    const {
      name, email, country, state, address, password, confirmPassword, agreement
    } = this.state;
    const inputErrors = validateSignupInputs({
      name, email, country, state, address, password, confirmPassword, agreement
    });
    if (Object.keys(inputErrors).length) {
      this.setState({ inputErrors: inputErrors }, () => {
      });
    } else {
      this.clearInputErrors();
      this.props.dispatch(createAdminUser({
        name, email, password, confirmPassword,
        location: { address, state, country }
      }));
    }
  }

  render() {
    if (this.props.addingUserResolved) {
      return (<Redirect to="/email-confirmation" />);
    }
    return (
      <View
        addingUserStarted={this.props.addingUserStarted}
        submissionError={this.state.submissionError}
        inputErrors={this.state.inputErrors}
        getInput={this.getInput}
        register={this.register}
        location={{country: this.state.country, state: this.state.state}}
      />
    );
  }
}

Signup.propTypes = {
  addingUserStarted: PropTypes.bool.isRequired,
  addingUserResolved: PropTypes.bool.isRequired,
  addingUserError: PropTypes.shape({
    message: PropTypes.string,
    fieldErrors: PropTypes.object
  }),
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  addingUserStarted: state.user.createAdmin.addingUserStarted,
  addingUserResolved: state.user.createAdmin.addingUserResolved,
  addingUserError: state.user.createAdmin.addingUserError,
});

export default connect(mapStateToProps)(Signup);
