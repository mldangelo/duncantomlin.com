import Document, { Html, Head, Main, NextScript } from 'next/document';
// stolen from https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js

const { REACT_APP_GA_TRACKING_ID = 'G-FN40R2YZXF' } = process.env;

/* eslint-disable react/no-danger */
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var favicon_images = [
                '/favicon/frame_00.png',
                '/favicon/frame_01.png',
                '/favicon/frame_02.png',
                '/favicon/frame_03.png',
                '/favicon/frame_04.png',
                '/favicon/frame_05.png',
                '/favicon/frame_06.png',
                '/favicon/frame_07.png',
                '/favicon/frame_08.png',
                '/favicon/frame_09.png',
                '/favicon/frame_10.png',
                '/favicon/frame_11.png',
                '/favicon/frame_12.png',
                '/favicon/frame_13.png',
                '/favicon/frame_14.png',
                '/favicon/frame_15.png',
              ];
              var image_counter = 0; // To keep track of the current image
              
              setInterval(function() {
                // remove current favicon
                if(document.querySelector("link[rel='icon']") !== null)
                document.querySelector("link[rel='icon']").remove();
                if(document.querySelector("link[rel='shortcut icon']") !== null)
                document.querySelector("link[rel='shortcut icon']").remove();
              
                // add new favicon image
                document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
                // If last image then goto first image
                // Else go to next image    
                if(image_counter == favicon_images.length -1) {
                  image_counter = 0;
                }
                else {
                  image_counter++;
                }
              }, 200);
              `,
            }}
          />
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
