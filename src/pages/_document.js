import Document, { Html, Head, Main, NextScript } from 'next/document';
// stolen from https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js

const REACT_APP_GA_TRACKING_ID =
  process.env.REACT_APP_GA_TRACKING_ID || 'G-FN40R2YZXF';

/* eslint-disable react/no-danger */
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${REACT_APP_GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${REACT_APP_GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
/* eslint-enable react/no-danger */
