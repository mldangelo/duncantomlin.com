import { render, screen } from '@testing-library/react';
import Navigation from '@/components/Navigation';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navigation', () => {
  it('renders the home link', () => {
    render(<Navigation />);
    expect(screen.getByText('Duncan Tomlin')).toBeInTheDocument();
  });

  it('renders the contact link', () => {
    render(<Navigation />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('has correct href for home link', () => {
    render(<Navigation />);
    const homeLink = screen.getByText('Duncan Tomlin');
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  });

  it('has correct href for contact link', () => {
    render(<Navigation />);
    const contactLink = screen.getByText('Contact');
    expect(contactLink.closest('a')).toHaveAttribute('href', '/contact');
  });
});
