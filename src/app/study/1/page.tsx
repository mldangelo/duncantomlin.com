'use client';

import ReactMarkdown from 'react-markdown';
import isOpen from '@/components/studies/isOpen';
import ClosingSoon from '@/components/studies/ClosingSoon';

const openMessage = `
# Welcome to a webpage with business hours.

Normal website hours are 9 AM - 5 PM ET M-F.
`;

const closedMessage = `
# We are closed. Please come back later.

Normal website hours are 9 AM - 5 PM ET M-F.

Please contact [Duncan](/contact) if you would like to make an appointment outside of regular business hours.
`;

export default function Study1() {
  return isOpen() ? (
    <>
      <ClosingSoon />
      <ReactMarkdown>{openMessage}</ReactMarkdown>
    </>
  ) : (
    <ReactMarkdown>{closedMessage}</ReactMarkdown>
  );
}
