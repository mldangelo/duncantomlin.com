import React from 'react';
import { Helmet } from 'react-helmet';

import Favicon from './favicon';
import Navigation from './navigation';

const Template = ({ children }) => ( /* eslint-disable-line */
  <>
    <Helmet titleTemplate="%s | Duncan Tomlin" defaultTitle="Duncan Tomlin" />
    <Favicon />
    <Navigation />
    {children}
  </>
);

export default Template;
