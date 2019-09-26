import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import View from "./view";
import validateSigninInputs from "./validation";
import { loginAdminUser } from "../../../actions/user/auth";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      inputErrors: {},
      submissionError: null
    };
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.addingUserError !== this.props.addingUserError &&
      this.props.addingUserError
    ) {
      const { fieldErrors, message } = this.props.addingUserError;
      this.setState({
        inputErrors: fieldErrors || this.state.inputErrors,
        submissionError: message || this.state.submissionError
      });
    }
  }
  getInput = event => {
    const state = { ...this.state };
    state[event.target.name] = event.target.value;
    this.setState(state);
  };
  clearInputErrors = () => {
    this.setState({ inputErrors: {} });
  };

  login = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const inputErrors = validateSigninInputs({
      email,
      password
    });
    if (Object.keys(inputErrors).length) {
      this.setState({ inputErrors: inputErrors }, () => {});
    } else {
      this.clearInputErrors();
      this.props.dispatch(
        loginAdminUser({
          email,
          password
        })
      );
    }
  };
  render() {
    return (
      <View
        addingUserStarted={this.props.addingUserStarted}
        submissionError={this.state.submissionError}
        inputErrors={this.state.inputErrors}
        getInput={this.getInput}
        login={this.login}
      />
    );
  }
}
Signup.propTypes = {
  addingUserStarted: PropTypes.bool.isRequired,
  addingUserSignin: PropTypes.bool.isRequired,
  addingUserError: PropTypes.shape({
    message: PropTypes.string,
    fieldErrors: PropTypes.object
  }),
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  addingUserStarted: state.user.loginAdmin.addingUserStarted,
  addingUserSignin: state.user.loginAdmin.addingUserSignin,
  addingUserError: state.user.loginAdmin.addingUserError
});

export default connect(mapStateToProps)(Signin);
