import React, { useEffect, useRef } from 'react';
import logo from '../static/gifs/static.gif';

const NotFound = () => {
  const audioRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => audioRef.current.play(), 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
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
