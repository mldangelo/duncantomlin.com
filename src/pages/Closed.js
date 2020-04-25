import React from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import zalgo from 'to-zalgo';
import isOpen from '../utils/isOpen';

const About = () => (!isOpen() ? (
  <>
      <Helmet title="Please come back later"/>
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
    {' '}
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    {' '}
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    {' '}
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    {' '}
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <h1>We are closed. Please come back later</h1>
    <p>{zalgo('Whomst awakened the ancient one')}</p>
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
    <h6>Normal website hours are 9 AM - 5 PM ET M-F.</h6>
  </>
) : <Redirect to="/" />);

export default About;
