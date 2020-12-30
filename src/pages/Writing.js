import React from 'react';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Template from '../components/template';

const markdown = raw('../data/writing.md');

const Writing = () => (
  <Template>
    <ReactMarkdown
      source={markdown}
      escapeHtml={false}
    />
  </Template>
);

export default Writing;
