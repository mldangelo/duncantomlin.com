'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import useInterval from '@/hooks/useInterval';

function isOpen(): boolean {
  const now = new Date();
  const utcHour = now.getUTCHours();
  const etHour = (utcHour - 5 + 24) % 24;
  const dayOfWeek = now.getUTCDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    // Weekends: 10 AM - 4 PM ET
    return etHour >= 10 && etHour < 16;
  }
  // Weekdays: 9 AM - 5 PM ET
  return etHour >= 9 && etHour < 17;
}

function getFutureDate(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
}

const outsideMessage = `
# Welcome to Study 6

This page is currently open with a free timed-entry reservation system, reduced operating hours and amenities,
 and limited capacity in order to allow for social distancing.

Free timed-entry passes are now available for weekend visits through ${getFutureDate(14)}.
To reserve a pass, please email [reservations@duncantomlin.com](mailto:reservations@duncantomlin.com).
`;

const insideMessage = `
# Welcome to Study 6

You have gained entry. All amenities are temporarily postponed.

Please consider [making a donation](https://venmo.com/duncan-tomlin) or
[leaving a review](https://docs.google.com/document/d/1tV3zmoQa5vuDwiI2EVWbPi03CO-Vp4m8L3joQN3oMzg/edit?usp=sharing). Come back soon.
`;

const interval = 15;

function getMinutesRemaining(): number {
  const now = new Date();
  return interval - (now.getMinutes() % interval);
}

export default function Study6() {
  const [isOutside, setIsOutside] = useState(true);
  const [minutesRemaining, setMinutesRemaining] = useState(getMinutesRemaining());

  useInterval(() => {
    setMinutesRemaining(getMinutesRemaining());
  }, 1000);

  const renderMessage = () => {
    if (isOpen()) {
      return `Please check back in ${minutesRemaining} minute${minutesRemaining > 1 ? 's' : ''}.`;
    }
    return '**Extremely limited** click-in appointments are also available between 9-5 ET M-F, or 10-4 ET on weekends.';
  };

  return (
    <>
      <title>Timed Entry Study | Duncan Tomlin</title>
      {isOutside ? (
        <>
          <ReactMarkdown>{outsideMessage}</ReactMarkdown>
          {minutesRemaining === interval && isOpen() ? (
            <button
              type="button"
              className="button is-link is-small"
              onClick={() => setIsOutside(false)}
            >
              Enter
            </button>
          ) : (
            <p>
              <ReactMarkdown>{renderMessage()}</ReactMarkdown>
            </p>
          )}
        </>
      ) : (
        <ReactMarkdown>{insideMessage}</ReactMarkdown>
      )}
    </>
  );
}
