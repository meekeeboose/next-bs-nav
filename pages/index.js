import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mediavil</title>
      </Head>

      <main>
        <h3>Homepage</h3>
        <button className='btn btn-primary' type='submit'>
          hello
        </button>
      </main>
    </div>
  );
}
