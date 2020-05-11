import React from 'react';
import ReactMarkdown from 'react-markdown';
import Template from '../components/template';
import raw from 'raw.macro';

const markdown = raw('../markdown/Criticism.md');

const Criticism = () => (
  <Template>
    <ReactMarkdown
      source={markdown}
      escapeHtml={false}
    />
  </Template>
);

export default Criticism;
