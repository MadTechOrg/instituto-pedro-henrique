import Head from 'next/head';
import Banner from '../components/Banner';
import About from '../components/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instituto Pedro Henrique</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Banner />
        <About />
      </main>
    </div>
  );
}
