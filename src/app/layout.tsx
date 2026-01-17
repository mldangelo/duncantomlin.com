import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import AnimatedFavicon from '@/components/AnimatedFavicon';
import './globals.scss';

export const metadata: Metadata = {
  title: {
    template: '%s | Duncan Tomlin',
    default: 'Duncan Tomlin',
  },
  description:
    'New York based curatorial researcher and art historian. Elaborate metaphors; whimsical idealism; art historical perspectives; sweet little barrels; aspirational kickflips.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <AnimatedFavicon />
      </head>
      <body>
        <Navigation />
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container content">{children}</div>
          </div>
        </section>
      </body>
    </html>
  );
}
