import React from "react";
import PropTypes from "prop-types";
import ErrorText from "../../common/errorText";
import { Link } from "react-router-dom";
import Signup from "../signup";
import Routes from "../../Routes";

const View = props => (
  <div className="app-ui">
    <div className="app-layout-canvas">
      <div className="app-layout-container">
        <main className="app-layout-content">
          {/* Page Content  */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 tayo no-padding">
                <div className="col-sm-6 no-padding">
                  <img
                    alt=""
                    className="img img-responsive abeeb"
                    src="/assets/img/photos/unsplash2.jpg"
                  />
                </div>

                <div className="col-sm-6">
                  <div className="card-block login-top ">
                    <form
                      className="form-horizontal m-t-xs"
                      action="#"
                      method="post"
                      onsubmit="return false;"
                    >
                      <a className="login-head">Welcome Back!</a>
                      <h4 className=" form-title">Management Sign In</h4>
                      <p className="form-text">
                        {" "}
                        Don't have a RealDrip management account?{" "}
                        <span className="login-head">
                          <Link to={Signup}>Sign Up</Link>
                        </span>
                      </p>{" "}
                      <br />
                      <div className="col-sm-10 text-center">
                        <ErrorText text={props.submissionError} />
                        <LoadingIcon
                          display={props.addingUserStarted}
                          height={50}
                          width={50}
                        />
                        <p />
                      </div>
                      <div className="form-group">
                        <label
                          className="col-sm-5 form-label"
                          htmlFor="center-email"
                        >
                          Medical Center Email
                        </label>
                        <label
                          className="col-sm-5 form-label"
                          htmlFor="center-password"
                        >
                          Password
                          <Link to={forgotPassword}>
                            <span className=" pull-right pass-forget m-r-sm">
                              Forgot password?
                            </span>
                          </Link>
                        </label>
                        <div className="col-sm-5">
                          <input
                            className="form-control"
                            type="email"
                            id="centerEmail"
                            name="centerEmail"
                            placeholder="Email"
                            onChange={props.getInput}
                          />
                          <ErrorText text={props.inputErrors.email} />
                        </div>
                        <div className="col-sm-5">
                          <input
                            className="form-control"
                            type="password"
                            id="centerPassword"
                            name="centerPassword"
                            placeholder="Password"
                            onChange={props.getInput}
                          />
                          <ErrorText text={props.inputErrors.password} />
                        </div>
                      </div>
                      <div className="form-group m-b-0">
                        <div className="col-xs-8">
                          <button
                            className="btn form-btn"
                            type="submit"
                            onClick={props.login}
                            disabled={props.addingUserStarted}
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* .card-block */}
                </div>
                {/* .card */}
                {/* End Bootstrap Login */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
);

View.propTypes = {
  addingUserStarted: PropTypes.bool.isRequired,
  inputErrors: PropTypes.object,
  getInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  submissionError: PropTypes.string
};

export default View;
