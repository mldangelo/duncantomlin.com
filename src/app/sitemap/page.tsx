const paths = [
  '/',
  '/about',
  '/architecture',
  '/columbia-m-arch-application-materials',
  '/contact',
  '/curatorial-work',
  '/maggie',
  '/minetta-mizzenmast-and-west-12th-indies-nyc',
  '/post/goodbye-2020',
  '/posts',
  '/press',
  '/reputation',
  '/reputation/action-sports',
  '/reputation/bad',
  '/reputation/good',
  '/studies',
  '/study/1',
  '/study/2',
  '/study/3',
  '/study/4',
  '/study/5',
  '/study/6',
  '/writing',
];

export default function Sitemap() {
  return (
    <>
      <h1>List of all pages</h1>
      <ul>
        {paths.map((url) => (
          <li key={url}>
            <a href={url}>{url}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
