import React from 'react';
import Template from '../components/template';
import '../static/styles/main.scss';
import logo from '../static/gifs/skateboard.gif';

const Index = () => (
  <Template>
    {/* <img src={logo} className="skateboard" style={{height:'500px !important'}}/> */}
    <section class="section">
      <h1 className="title is-3">Welcome to{' '}<a href="/">Duncan Tomlin<code>.com</code></a></h1>
    </section>
  </Template>
);

export default Index;
