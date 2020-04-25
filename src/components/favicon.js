import React from 'react';
import Favicon from 'react-favicon';
// NOTE: The above library is so dumb

import logo00 from '../static/favicon/frame_00.png';
import logo01 from '../static/favicon/frame_01.png';
import logo02 from '../static/favicon/frame_02.png';
import logo03 from '../static/favicon/frame_03.png';
import logo04 from '../static/favicon/frame_04.png';
import logo05 from '../static/favicon/frame_05.png';
import logo06 from '../static/favicon/frame_06.png';
import logo07 from '../static/favicon/frame_07.png';
import logo08 from '../static/favicon/frame_08.png';
import logo09 from '../static/favicon/frame_09.png';
import logo10 from '../static/favicon/frame_10.png';
import logo11 from '../static/favicon/frame_11.png';
import logo12 from '../static/favicon/frame_12.png';
import logo13 from '../static/favicon/frame_13.png';
import logo14 from '../static/favicon/frame_14.png';
import logo15 from '../static/favicon/frame_15.png';

const frames = [
  logo00,
  logo01,
  logo02,
  logo03,
  logo04,
  logo05,
  logo06,
  logo07,
  logo08,
  logo09,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
];

const Fav = () => (
  <Favicon
    url={frames}
    animationDelay={8}
  />
);

export default Fav;
