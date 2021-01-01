import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import useInterval from '../../utils/useInterval';

const isOpen = () => {
  // open from 9 - 5 M-F ET, 10 - 4 ET weekends
  const d = moment.utc().subtract(5, 'hours');
  const n = d.day();
  const h = d.hours();
  if (n === 0 || n === 6) {
    // weekends
    return h >= 10 && h < 16;
  }
  return h >= 9 && h < 17;
};

const outsideMessage = `
# Welcome to Study 6

This page is currently open with a free timed-entry reservation system, reduced operating hours and amenities,
 and limited capacity in order to allow for social distancing.

Free timed-entry passes are now available for weekend visits through ${moment()
  .add(14, 'days')
  .format('MMMM Do')}. 
To reserve a pass, please email [reservations@ducantomlin.com](mailto:reservations@duncantomlin.com).
`;

const insideMessage = `
# Welcome to Study 6

You have gained entry. All amenities are temporarily postponed.

Please consider [making a donation](https://venmo.com/duncan-tomlin). Come back soon.
`;

const message = (minutesRemaining) =>
  isOpen() ? (
    `Please check back in ${minutesRemaining} minute${
      minutesRemaining > 1 ? 's' : ''
    }.`
  ) : (
    <ReactMarkdown source="**Extremely limited** click-in appointments are also available between 9-5 ET M-F, or 10-4 ET on weekends." />
  );

const interval = 15;

const getMinutesRemaining = () => interval - (moment().minutes() % interval);

const TimedEntry = () => {
  const [isOutside, setOutside] = useState(true);

  const [minutesRemaining, setMinutesRemaining] = useState(
    getMinutesRemaining()
  );

  useInterval(() => {
    setMinutesRemaining(getMinutesRemaining());
  }, 1000);

  return (
    <>
      <Helmet title="Timed Entry Study" />
      {isOutside ? (
        <>
          <ReactMarkdown source={outsideMessage} />
          {minutesRemaining === interval && isOpen() ? (
            <button
              type="button"
              className="button is-link is-small"
              onClick={() => setOutside(false)}
            >
              Enter
            </button>
          ) : (
            <p>{message(minutesRemaining)}</p>
          )}
        </>
      ) : (
        <ReactMarkdown source={insideMessage} />
      )}
    </>
  );
};

export default TimedEntry;
