import React from 'react';
import Link from 'next/link';
import { useRouter, withRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const { asPath = '/' } = router.query; // TODO figure out why this doesn't work later

  const startLinks = [{ path: '/', title: 'Duncan Tomlin' }];
  const endLinks = [{ path: '/contact', title: 'Contact' }];

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          {startLinks.map(({ path, title }) => (
            <Link key={path} href={path}>
              <a
                className={`navbar-item${path === asPath ? ' is-active' : ''}`}
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="navbar-end">
        {endLinks.map(({ path, title }) => (
          <Link key={path} href={path}>
            <a className={`navbar-item${path === asPath ? ' is-active' : ''}`}>
              {title}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default withRouter(Nav);
