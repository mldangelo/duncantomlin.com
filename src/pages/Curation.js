import React from 'react';
import ReactMarkdown from 'react-markdown';
import Template from '../components/template';
import raw from 'raw.macro';


const markdown = raw('../markdown/Curation.md');

const Curation = () => (
  <Template>
    <h1>Curation</h1>
    <ReactMarkdown
      source={markdown}
      escapeHtml={false}
    />
  </Template>
);

export default Curation;
