// pages/_app.js
import Head from 'next/head';
import { useEffect } from 'react';
import '../app/globals.css'; // Your global styles

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Set default mode to dark
    document.documentElement.classList.add('dark');
  }, []);
  return (
    <>
      <Head>
      </Head>
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp;
