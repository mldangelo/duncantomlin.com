import React, { useState, useEffect, useRef } from 'react';

const messages = [
  'hi',
  'hello',
  'hola',
  'constructive-feedback',
  'just-saying-hi',
  'please-work-for-us',
  'help',
  'admin',
  'I-really-like-your-website',
  'or-any-other-valid-email-address',
  'thanks',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const EmailLink = () => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        setIsActive(false);
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    },
    isActive ? delay : null
  );

  return (
    <a
      href={`mailto:${message}@duncantonlin.com`}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => idx < messages.length && setIsActive(true)}
    >
      {message}@duncantomlin.com
    </a>
  );
};

export default EmailLink;
