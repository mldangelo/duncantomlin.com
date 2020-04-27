import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

import logo from '../static/gifs/static.gif';

const NotFound = ({ staticContext = {} }) => {
  staticContext.status = 404;

  const [showWarning, changeWarning] = useState(true);

  const audioRef = useRef();

  // NOTE see https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes
  // to cover user did not interact error.
  useEffect(() => {
    const timer = setTimeout(() => {
      changeWarning(false);
      audioRef.current.play();
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet title="404 - Duncan Not Found" />
      {
        showWarning ? (<h2>There is nothing for you here. You are not welcome here. Do not stay.</h2>) : <></>
      }
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
