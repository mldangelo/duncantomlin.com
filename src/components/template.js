import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from './navigation';

const Template = ({ children }) => ( /* eslint-disable-line */
  <>
    <Helmet titleTemplate="%s | Duncan Tomlin" defaultTitle="Duncan Tomlin" />
    <Navigation />
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container content">{children}</div>
      </div>
    </section>
  </>
);

export default Template;
