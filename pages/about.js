import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
        <title>Mediavil | About</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
          integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
          crossorigin='anonymous'></link>
      </Head>
      <h2>This is the About us page</h2>
    </div>
  );
};

export default about;
