import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();

    const styles = [
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #__next {
              display: flex;
              flex-direction: column;
            }
          `
        }}
      />
    ];

    return { ...page, styles: React.Children.toArray(styles) };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="apple-mobile-web-app-title" content="WithReasonML" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="name" content="with-reasonml" />
          <meta name="description" content="reasonml pwa next.js" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />

          {process.env.isProd && (
            <>
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/static/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/static/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/static/favicon-16x16.png"
              />
              <link rel="manifest" href="/static/manifest.json" />
            </>
          )}
        </Head>
        <body>
          <main>
            <Main />
          </main>
          <NextScript />
          {process.env.isProd && (
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{ __html: serviceWorkerRegistration }}
            />
          )}
        </body>
      </html>
    );
  }
}

const serviceWorkerRegistration = `
  document.addEventListener('DOMContentLoaded', event => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js', { scope: "/" }).then(registration => {
          console.log('SW registered: ', registration)
        }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
      })
    }
  })
`;
