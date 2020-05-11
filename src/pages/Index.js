import React from 'react';
import Template from '../components/template';
import logo from '../static/gifs/skateboard.gif';

const Index = () => (
  <Template>
    <div className="columns">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="column">
        <p>
          Welcome to
          {' '}
          <a href="/">
            Duncan Tomlin
            <code>.com</code>
          </a>
        </p>
        </div>
      </header>
    </div>
  </Template>
);

export default Index;
