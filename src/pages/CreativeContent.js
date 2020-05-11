import React from 'react';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Template from '../components/template';


const markdown = raw('../markdown/CreativeContent.md');

const CreativeContent = () => (
  <Template>
    <h1>Hi Duncan</h1>
    <ReactMarkdown
      source={markdown}
      escapeHtml={false}
    />
  </Template>
);

export default CreativeContent;
