import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';

import './App.css';

const Nav = () => (
	<nav>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
		</ul>
	</nav>
);

const App = () => (
	<Router>
		<Nav/>
		<Switch>
			<Route path="/" exact><Index /></Route>
			<Route path="/about"><About /></Route>
		</Switch>
	</Router>
);

export default App;
