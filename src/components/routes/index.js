import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Signup from "../pages/signup";
import EmailConfirmation from "../pages/emailConfirmation";
import Signin from "../pages/signin";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/email-confirmation" component={EmailConfirmation} />
      <Route exact path="/signin" component={Signin} />
    </Switch>
  </Router>
);
