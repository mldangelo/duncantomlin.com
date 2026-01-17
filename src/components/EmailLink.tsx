'use client';

import { useState } from 'react';
import useInterval from '@/hooks/useInterval';

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

export default function EmailLink() {
  const hold = 50;
  const delay = 50;

  const [idx, setIdx] = useState(0);
  const [message, setMessage] = useState(messages[0]);
  const [char, setChar] = useState(messages[0].length);
  const [isActive, setIsActive] = useState(true);

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
        setMessage(messages[newIdx].slice(0, newChar));
        setIdx(newIdx);
        setChar(newChar + 1);
      }
    },
    isActive ? delay : null
  );

  return (
    <a
      href={`mailto:${message}@duncantomlin.com`}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => idx < messages.length && setIsActive(true)}
    >
      {message}@duncantomlin.com
    </a>
  );
}
