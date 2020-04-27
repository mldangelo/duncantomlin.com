import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

import logo from '../static/gifs/static.gif';

const NotFound = ({ staticContext = {} }) => {
  const audioRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => audioRef.current.play(), 5000);
    return () => clearTimeout(timer);
  }, []);

  staticContext.status = 404;

  return (
    <>
      <Helmet title="404 - Duncan Not Found" />
      <audio
        src="/static.m4a"
        ref={audioRef}
        loop
      />
      <img src={logo} className="static" alt="static" />
    </>
  );
};

export default NotFound;