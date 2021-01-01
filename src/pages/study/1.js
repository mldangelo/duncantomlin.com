import React from 'react';

import ReactMarkdown from 'react-markdown';

import isOpen from '../../components/studies/isOpen';
import ClosingSoon from '../../components/studies/ClosingSoon';

const openMessage = `
# Welcome to a webpage with business hours.

Normal website hours are 9 AM - 5 PM ET M-F.
`;

const closedMessage = `
# We are closed. Please come back later.

Normal website hours are 9 AM - 5 PM ET M-F.

Please contact [Duncan](/contact) if you would like to make an appointment outside of regular business hours.
`;

const ClosedStudy = () =>
  isOpen() ? (
    <>
      <ClosingSoon />
      <ReactMarkdown source={openMessage} escapeHtml={false} />
    </>
  ) : (
    <ReactMarkdown source={closedMessage} escapeHtml={false} />
  );

export default ClosedStudy;
