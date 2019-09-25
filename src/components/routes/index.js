import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signup from '../pages/signup';
import EmailConfirmation from '../pages/emailConfirmation'

export default () => (
	<Router>
		<Switch>
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/email-confirmation" component={EmailConfirmation} />
		</Switch>
	</Router>
);
