import type { Metadata, Viewport } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import AnimatedFavicon from '@/components/AnimatedFavicon';
import './globals.scss';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
};

export const metadata: Metadata = {
  title: {
    template: '%s | Duncan Tomlin',
    default: 'Duncan Tomlin',
  },
  description:
    'New York based curatorial researcher and art historian. Elaborate metaphors; whimsical idealism; art historical perspectives; sweet little barrels; aspirational kickflips.',
  keywords: ['Duncan Tomlin', 'curatorial researcher', 'art historian', 'New York'],
  authors: [{ name: 'Duncan Tomlin' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Duncan Tomlin',
  },
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
        <main className="main-content">
          <div className="container content">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
