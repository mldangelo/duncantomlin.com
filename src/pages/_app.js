import { useEffect } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Navigation from '../components/Navigation';
import * as gtag from '../lib/gtag';
import '../static/styles/main.scss';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url) => gtag.pageview(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => Router.events.off('routeChangeComplete', handleRouteChange);
  }, []);

  return (
    <>
      <Helmet titleTemplate="%s | Duncan Tomlin" defaultTitle="Duncan Tomlin" />
      <Navigation />
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container content">
            <Component {...pageProps} />
          </div>
        </div>
      </section>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default App;
