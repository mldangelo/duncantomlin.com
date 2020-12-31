import path from 'path';
import glob from 'glob';

const StaticPage = ({ paths }) => (
  <>
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
  </>
);

// This also gets called at build time
export async function getStaticProps() {
  const pagesMatches = glob
    .sync(path.join(process.cwd(), 'src/pages/**/*+(.js|.md|.mdx)'))
    .map((file) => file.replace(/(.js|.mdx|.md)/gi, '').split('src/pages/')[1])
    .filter(
      (match) => match[0] !== '_' && match[0] !== '[' && match !== 'index'
    );

  const matches = [...pagesMatches, '/'].sort();
  // Pass post data to the page via props
  return {
    props: { paths: matches },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}

export default StaticPage;
