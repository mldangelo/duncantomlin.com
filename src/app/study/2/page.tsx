'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import useInterval from '@/hooks/useInterval';

const originalMessage = `
# Decay

Early in 2020, New York became the global epicenter of the Coronavirus Pandemic.
Hundreds of thousands of people fled and many thousands of small businesses closed.

This study imagines what happen if 10% of other seemingly permanent fixtures disappear.

TODO: Rewrite, add essay
`;

const originalHeading = 'Decay Study | Duncan Tomlin';

const corrupt = (message: string, original: string): string => {
  const corruptIndex = Math.floor(Math.random() * message.length);
  const corruptChar = String.fromCharCode(
    Math.max(0, Math.random() * message.charCodeAt(corruptIndex) * 2)
  );
  const newChar = Math.random() < 0.5 ? corruptChar : original[corruptIndex];
  return (
    message.substring(0, corruptIndex) + newChar + message.substring(corruptIndex + 1)
  );
};

const remove = (message: string): string => {
  const removeIndex = Math.floor(Math.random() * message.length);
  return `${message.substring(0, removeIndex)}_${message.substring(removeIndex + 1)}`;
};

export default function Study2() {
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
      <title>{heading}</title>
      <ReactMarkdown>{message}</ReactMarkdown>
    </>
  );
}
