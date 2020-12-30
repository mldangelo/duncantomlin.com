import React from 'react';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Template from '../components/template';

const markdown = raw('../markdown/writing.md');

const Curation = () => (
  <Template>
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container content">
          <ReactMarkdown
            source={markdown}
            escapeHtml={false}
          />
        </div>
      </div>
    </section>
  </Template>
);

export default Curation;
