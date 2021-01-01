import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import useInterval from '../../utils/useInterval';
// replaces characters with underscores _
const originalMessage = `
# Decay

Early in 2020, New York became the global epicenter of the Coronavirus Pandemic. 
Hundreds of thousands of people fled and many thousands of small businesses closed. 

This study imagines what happen if 10% of other seemingly permanent fixtures disappear.

TODO: Rewrite, add essay
`;

// Page heading -- look at Chrome Tab - this becomes corrupted over time.
const originalHeading = 'Decay Study | Duncan Tomlin';

const corrupt = (message, original) => {
  const corruptIndex = Math.floor(Math.random() * Math.floor(message.length));
  const corruptChar = String.fromCharCode(
    Math.max(0, Math.random() * message.charCodeAt(corruptIndex) * 2)
  );
  const newChar = Math.random() < 0.5 ? corruptChar : original[corruptIndex];
  return (
    message.substr(0, corruptIndex) + newChar + message.substr(corruptIndex + 1)
  );
};

const remove = (message) => {
  const removeIndex = Math.floor(Math.random() * Math.floor(message.length));
  return `${message.substr(0, removeIndex)}_${message.substr(removeIndex + 1)}`;
};

const Decay = () => {
  const [message, setMessage] = useState(originalMessage);

  const [heading, setHeading] = useState(originalHeading);

  useInterval(() => {
    setHeading(corrupt(heading, originalHeading));
  }, 1000);

  useInterval(() => {
    setMessage(remove(message));
  }, 1000);

  return (
    <>
      <Helmet title={heading} />
      <ReactMarkdown source={message} escapeHtml={false} />
    </>
  );
};

export default Decay;
