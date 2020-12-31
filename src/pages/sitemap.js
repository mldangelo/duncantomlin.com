import path from 'path';
import glob from 'glob';

import Template from '../components/template';

const StaticPage = ({ paths }) => (
  <Template>
    <h1>List of all rendered markdown files</h1>
    <ul>
      {paths.map((url) => (
        <li>
          <a href={url}>{url}</a>
        </li>
      ))}
    </ul>
  </Template>
);

// This also gets called at build time
export async function getStaticProps() {
  const files = glob.sync(path.join(process.cwd(), 'content/**/*.md'));
  // less stable than regex. regex was not working for every route. fix later
  const matches = files
    .map((file) => file.replace('.md', '').split('content/')[1])
    .filter((match) => !match.includes('README'));

  // Pass post data to the page via props
  return {
    props: { paths: matches },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default StaticPage;
