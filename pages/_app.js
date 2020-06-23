// import App from 'next/app'
import Navbar from "../components/Navbar";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className='container'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
          integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
          crossorigin='anonymous'></link>
      </Head>

      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
