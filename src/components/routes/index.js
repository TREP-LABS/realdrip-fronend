import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signup from '../pages/signup';
import EmailConfirmation from '../pages/emailConfirmation';
import Ward from '../pages/ward/WardWrapper';
import WardDashboard from '../pages/ward/Dashboard'

export default () => (
	<Router>
		<Switch>
			<Route exact path="/ward" component={Ward} />
			<Route exact path="/ward/dashboard" component={WardDashboard} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/email-confirmation" component={EmailConfirmation} />
		</Switch>
	</Router>
);

