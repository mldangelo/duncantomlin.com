'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link
          href="/"
          className={`navbar-item${pathname === '/' ? ' is-active' : ''}`}
        >
          Duncan Tomlin
        </Link>
      </div>
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <Link
            href="/contact"
            className={`navbar-item${pathname === '/contact' ? ' is-active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
