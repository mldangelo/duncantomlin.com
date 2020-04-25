import React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';

import Favicon from './favicon';
import Nav from './nav';
import '../App.css';

const isOpen = () => {
  // open from 9 - 5 M-F
  const d = new Date();
  const n = d.getDay();
  if (n === 0 || n === 6) return false;
  const h = d.getUTCHours();
  if (h < 13 || h > 21) return false;
  return true;
};

const Template = ({ children, ...rest }) => (isOpen() ? (
  <>
    <Helmet titleTemplate="%s | Duncan Tomlin" defaultTitle="Duncan Tomlin" />
    <Favicon />
    <Nav />
    {children}
  </>
) : <Redirect to="/come-back-later" />);

export default Template;
