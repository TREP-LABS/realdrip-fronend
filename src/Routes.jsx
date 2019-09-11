import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Signup from './components/containers/Signup';

export default () => (
	<Router>
		<Switch>
			<Route exact path="/signup" component={Signup} />
		</Switch>
	</Router>
);
