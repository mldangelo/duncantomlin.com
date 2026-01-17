'use client';

import { useState } from 'react';
import useInterval from '@/hooks/useInterval';

function timeToClose(): number {
  const now = new Date();
  const utcHour = now.getUTCHours();
  const utcMinute = now.getUTCMinutes();
  const utcSecond = now.getUTCSeconds();

  // 5 PM ET = 22:00 UTC (or 21:00 during DST)
  const closingHourUTC = 22;

  const nowSeconds = utcHour * 3600 + utcMinute * 60 + utcSecond;
  const closingSeconds = closingHourUTC * 3600;

  return Math.max(closingSeconds - nowSeconds, 0);
}

export default function ClosingSoon() {
  const [secondsToClose, setSecondsToClose] = useState(timeToClose());

  useInterval(() => {
    setSecondsToClose(timeToClose());
  }, 1000);

  const minutes = Math.floor(secondsToClose / 60);
  const seconds = secondsToClose - minutes * 60;
  const progressClass = secondsToClose > 300 ? 'is-warning' : 'is-danger';

  if (secondsToClose > 1800 || secondsToClose === 0) {
    return null;
  }

  return (
    <>
      <progress
        className={`progress ${progressClass} is-large`}
        value={Math.min(1800, secondsToClose)}
        max={1800}
      >
        {((1 - secondsToClose / 1800) * 100).toFixed()}%
      </progress>
      <h1>
        {' '}
        closing soon: {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </h1>
    </>
  );
}
