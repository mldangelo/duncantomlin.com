import React from 'react';
import { Helmet } from 'react-helmet';

import Favicon from './favicon';
import Nav from './nav';
import Close from './close';

import '../App.css';

const Template = ({ children, ...rest }) => (
  <>
    <Close />
    <Helmet titleTemplate="%s | Duncan Tomlin" defaultTitle="Duncan Tomlin" />
    <Favicon />
    <Nav />
    {children}
  </>
);

export default Template;
