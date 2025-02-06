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
      <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.1/dist/flowbite.min.js"></script>
      </Head>
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp;
