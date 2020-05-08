import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar" role="navigation">
    <Link to="/" className="navbar-item">Home</Link>
    <Link to="/about" className="navbar-item">About</Link>
    <Link to="/criticism" className="navbar-item">Criticism</Link>
    <Link to="/curation" className="navbar-item">Curation</Link>
    <Link to="/creative-content" className="navbar-item">Creative Content</Link>
    <Link to="/projects" className="navbar-item">Projects</Link>
    <Link to="/contact" className="navbar-item">Contact</Link>
  </nav>
);

export default Nav;
