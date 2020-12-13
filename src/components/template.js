import React from 'react';
import { Helmet } from 'react-helmet';

import Favicon from './favicon';
import Nav from './nav';
import Close from './close';
import ClosingSoon from './closingSoon';

const Template = ({ children }) => ( /* eslint-disable-line */
  <>
    <Close />
    <ClosingSoon />
    <Helmet titleTemplate="%s | Duncan Tomlin" defaultTitle="Duncan Tomlin" />
    <Favicon />
    <Nav />
    <div className="container is-fluid">
      <div className="content">
        {children}
      </div>
    </div>
  </>
);

export default Template;
