import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import zalgo from 'to-zalgo';
import isOpen from '../utils/isOpen';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const originalMessage = 'We are closed. Please come back later.';
const corrupt = (str) => {
  if (Math.random() < 0.995) return str;
  const corruptIndex = Math.floor(Math.random() * Math.floor(str.length));
  console.log(str.charCodeAt(corruptIndex));
  const newChar = String.fromCharCode(Math.max(0, Math.random() * str.charCodeAt(corruptIndex) * 2));
  return str.substr(0, corruptIndex) + newChar + str.substr(corruptIndex + 1);
};

const Closed = () => {
  const [messages, setMessage] = useState([...Array(25)].map(() => originalMessage));

  useInterval(() => {
    // Your custom logic here
    setMessage([...messages.slice(1), corrupt(messages[messages.length - 1])]);
  }, 10);

  return (!isOpen() ? (
    <>
      <Helmet title="Please come back later" />
      {messages.map((x) => <h1>{x}</h1>)}
      <h1>We are closed. Please come back later</h1>
      <h1>We are closed. Please come back later</h1>
      <h1>We are closed. Please come back later</h1>
      <h1>We are closed. Please come back later</h1>
      <h1>We are closed. Please come back later</h1>
      <p>{zalgo('Whomst awakened the ancient one')}</p>
      <h1>We are closed. Please come back later</h1>
      <h1>We are closed. Please come back later</h1>
      <h1>We are closed. Please come back later</h1>
      <h1>We are closed. Please come back later</h1>
      <h6>Normal website hours are 9 AM - 5 PM ET M-F.</h6>
    </>
  ) : <Redirect to="/" />);
};

export default Closed;
