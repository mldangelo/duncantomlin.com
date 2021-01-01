import React, { useState } from 'react';
import moment from 'moment';

import useInterval from '../../utils/useInterval';

const timeToClose = () => {
  const utcClosingHour = 21; // 5 PM EST
  const now = moment();
  const utcOffset = now.utcOffset() * 60; // UTC offset in seconds
  const closing = moment()
    .millisecond(0)
    .second(0)
    .minute(0)
    .hour(utcClosingHour);
  return Math.max(closing.diff(now, 'second') + utcOffset, 0);
};

const ClosingSoon = () => {
  const [secondsToClose, setTimeToClose] = useState(timeToClose());

  useInterval(() => {
    setTimeToClose(timeToClose());
  }, 1000);

  const minutes = Math.floor(secondsToClose / 60);
  const seconds = secondsToClose - minutes * 60;
  const progressClass = secondsToClose > 300 ? 'is-warning' : 'is-danger';
  return secondsToClose <= 1800 && secondsToClose !== 0 ? (
    <>
      <progress
        className={`progress ${progressClass} is-large`}
        value={Math.min(1800, secondsToClose)}
        max="1800"
      >
        {((1 - secondsToClose / 1800) * 100).toFixed()}%
      </progress>
      <h1>
        {' '}
        closing soon:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </h1>
    </>
  ) : (
    <></>
  );
};

export default ClosingSoon;
