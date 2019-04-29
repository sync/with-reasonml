import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Header from '../src/components/Header.gen';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
          />
          <title>WithReasonML</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </Container>
    );
  }
}
