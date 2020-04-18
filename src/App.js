import React from 'react';
import logo from './static/gifs/skateboard.gif';
import './App.css';

function App() {
	return (
		<div className="">
			<header className="">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
          Welcome to Duncan Tomlin <code>.com</code>
				</p>
			</header>
		</div>
	);
}

export default App;
