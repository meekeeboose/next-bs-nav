// import App from 'next/app'
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className='container'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
