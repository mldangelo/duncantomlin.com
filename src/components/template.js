import React from 'react';
import { Helmet } from 'react-helmet';

import Favicon from './favicon';
import Nav from './nav';
import '../App.css';

const Template = ({children, ...rest}) => (
  <>
    <Helmet titleTemplate="%s | Duncan Tomlin" defaultTitle="Duncan Tomlin" />
    <Favicon />
    <Nav />
    {children}
  </>
);

export default Template;
