import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();

  const links = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/criticism', title: 'Criticism' },
    { path: '/curation', title: 'Curation' },
    { path: '/creative-content', title: 'Creative Content' },
    { path: '/projects', title: 'Projects' },
    { path: '/contact', title: 'Contact' },
  ];

  return (
    <nav className="navbar" role="navigation">
      {links.map(({ path, title }) => (
        <Link to={path} className={`navbar-item ${path === pathname ? 'is-active' : null}`}>{title}</Link>
      ))}
    </nav>
  );
};

export default Nav;
