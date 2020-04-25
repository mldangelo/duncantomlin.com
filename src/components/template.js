import React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';

import Favicon from './favicon';
import Nav from './nav';

import isOpen from '../utils/isOpen';

import '../App.css';

const Template = ({ children, ...rest }) => (isOpen() ? (
  <>
    <Helmet titleTemplate="%s | Duncan Tomlin" defaultTitle="Duncan Tomlin" />
    <Favicon />
    <Nav />
    {children}
  </>
) : <Redirect to="/come-back-later" />);

export default Template;
