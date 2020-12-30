import fs from 'fs';
import path from 'path';
import glob from 'glob';

// import React from 'react';
import ReactMarkdown from 'react-markdown';
import Template from '../components/template';

const StaticPage = ({ markdown }) => (
  <Template>
    <ReactMarkdown source={markdown} escapeHtml={false} />
  </Template>
);

// This function gets called at build time
export async function getStaticPaths() {
  const files = glob.sync(path.join(process.cwd(), 'src/data/*.md'));
  // less stable than regex. regex was not working for every route. fix later
  const matches = files.map(
    (file) => file.replace('.md', '').split('src/data/')[1]
  );

  return {
    paths: matches.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { slug = '' } = params;
  const data = fs.readFileSync(
    path.join(process.cwd(), `src/data/${slug}.md`),
    'utf-8'
  );

  // Pass post data to the page via props
  return {
    props: { markdown: data },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default StaticPage;
