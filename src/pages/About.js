import React from 'react';
import Iframe from 'react-iframe';
import Template from '../components/template';

const About = () => (

  <Template>
    <Iframe
      url="/about.html"
      width="100%"
      height="1000px"
      display="initial"
      position="relative"
    />
    <h1>END</h1>
  </Template>
);

export default About;
