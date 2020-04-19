import React from 'react';
import Iframe from 'react-iframe'

const About = () => (
    <>
        <Iframe url="/about.html"
            width="100%"
            height="1000px"
            display="initial"
            position="relative"/>
        <h1>END</h1>
    </>
);

export default About;
