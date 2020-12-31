import React from 'react';

import ReactMarkdown from 'react-markdown';

import Template from '../../components/template';
import isOpen from '../../components/experiments/1/isOpen';
import ClosingSoon from '../../components/experiments/1/closingSoon';

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
      <Template>
        <ReactMarkdown source={openMessage} escapeHtml={false} />
      </Template>
    </>
  ) : (
    <Template>
      <ReactMarkdown source={closedMessage} escapeHtml={false} />
    </Template>
  );

export default ClosedStudy;
