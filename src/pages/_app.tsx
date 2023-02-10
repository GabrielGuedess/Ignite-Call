import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { globalStyles } from 'styles/global';

import SEO from '../../next-seo.config';

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#121214" />
        <meta name="description" content="Ignite Call" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
