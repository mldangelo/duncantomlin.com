import path from 'path';
import glob from 'glob';

import Template from '../components/template';

const StaticPage = ({ paths }) => (
  <Template>
    <h1>List of all rendered markdown files</h1>
    <ul>
      {paths.map((url) => (
        <li>
          <a href={url} key={url}>
            {url}
          </a>
        </li>
      ))}
    </ul>
  </Template>
);

// This also gets called at build time
export async function getStaticProps() {
  const markdownMatches = glob
    .sync(path.join(process.cwd(), 'content/**/*.md'))
    .map((file) => file.replace('.md', '').split('content/')[1])
    .filter((match) => !match.includes('README'));

  const jsxMatches = glob
    .sync(path.join(process.cwd(), 'src/pages/**/*.js'))
    .map((file) => file.replace('.js', '').split('src/pages/')[1])
    .filter(
      (match) => match[0] !== '_' && match[0] !== '[' && match !== 'index'
    );

  const matches = [...markdownMatches, ...jsxMatches, '/'].sort();
  // Pass post data to the page via props
  return {
    props: { paths: matches },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default StaticPage;
