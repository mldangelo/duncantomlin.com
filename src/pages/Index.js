import React from 'react';
import Template from '../components/template';
import logo from '../static/gifs/skateboard.gif';

const Index = () => (
  <Template>
  <div className="">
    <header className="">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to
        {' '}
        <a href="/">
          Duncan Tomlin
          <code>.com</code>
        </a>
      </p>
    </header>
  </div>
  </Template>
);

export default Index;
