import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import isOpen from '../utils/isOpen';
import useInterval from '../utils/useInterval';

const originalMessage = 'We are closed. Please come back later.';
const corrupt = (strs) => {
  if (Math.random() < 0.75) return strs;
  const strIndex = Math.floor(Math.random() * Math.floor(strs.length));
  const str = strs[strIndex];
  const corruptIndex = Math.floor(Math.random() * Math.floor(str.length));
  const corruptChar = String.fromCharCode(Math.max(0, Math.random() * str.charCodeAt(corruptIndex) * 2));
  const newChar = Math.random() < 0.5 ? corruptChar : originalMessage[corruptIndex];
  const newStr = str.substr(0, corruptIndex) + newChar + str.substr(corruptIndex + 1);
  return strs.map((val, i) => (i === strIndex ? newStr : val));
};

const Closed = () => {
  const [messages, setMessage] = useState([...Array(25)].map(() => originalMessage));

  useInterval(() => {
    setMessage(corrupt(messages));
  }, 10);

  return (!isOpen() ? (
    <>
      <Helmet title={messages[messages.length - 1]} />
      {messages.map((x, i) => <h1 className="title" key={`${i}${x}`}>{x}</h1>)}
      <h1>We are closed. Please come back later.</h1>
      <h6>Normal website hours are 9 AM - 5 PM ET M-F.</h6>
    </>
  ) : <Redirect to="/" />);
};

export default Closed;
