import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();

  const startLinks = [
    { path: '/', title: 'Duncan Tomlin' },
  ];
  const endLinks = [
    { path: '/contact', title: 'Contact' },
  ];

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          {startLinks.map(({ path, title }) => (
            <Link key={path} to={path} className={`navbar-item ${path === pathname ? 'is-active' : null}`}>{title}</Link>
          ))}
        </div>
      </div>
      <div className="navbar-end">
        {endLinks.map(({ path, title }) => (
          <Link key={path} to={path} className={`navbar-item ${path === pathname ? 'is-active' : null}`}>{title}</Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
