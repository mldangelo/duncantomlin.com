import React from 'react';
import { Redirect } from 'react-router-dom';

import isOpen from '../utils/isOpen';

const About = () => (!isOpen() ? (
  <>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h6>Normal website hours are 9 AM - 5 PM ET M-F</h6>
  </>
) : <Redirect to="/"/>);

export default About;
