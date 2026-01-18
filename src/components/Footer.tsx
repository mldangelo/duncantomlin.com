'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-name">Duncan Tomlin</span>
          <span className="footer-role">Curatorial Researcher & Art Historian</span>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <Link href="/about">About</Link>
            <Link href="/writing">Writing</Link>
            <Link href="/curatorial-work">Curatorial Work</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <span className="footer-copyright">&copy; {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}
