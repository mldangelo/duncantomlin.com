import React from 'react';
import ReactSound from 'react-sound';
import logo from '../static/gifs/static.gif';

const Sound = ReactSound.default;

const NotFound = () => (
  <>
    <ReactSound 
        url="/static.m4a"
        autoLoad
        playStatus="PLAYING"
        loop
        playbackRate={1}
        playFromPosition={500}
    />
    <img src={logo} className="static" alt="static" />
  </>
);

export default NotFound;
