import Head from "next/head";

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Mediavil</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
          integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
          crossorigin='anonymous'></link>
      </Head>

      <main>
        <h1>This is the homepage</h1>
      </main>
    </div>
  );
}
