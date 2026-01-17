import { render, screen } from '@testing-library/react';
import EmailLink from '@/components/EmailLink';

describe('EmailLink', () => {
  it('renders an email link', () => {
    render(<EmailLink />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('has mailto href', () => {
    render(<EmailLink />);
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toMatch(/^mailto:/);
  });

  it('contains duncantomlin.com domain', () => {
    render(<EmailLink />);
    const link = screen.getByRole('link');
    expect(link.textContent).toContain('@duncantomlin.com');
  });
});
