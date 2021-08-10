import Head from 'next/head';
import Banner from '../components/Banner';
import About from '../components/About';
import SocialActions from '../components/SocialActions';
import DonateOptions from '../components/DonateOptions';
import Contact from '../components/Contact';

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
        <SocialActions />
        <DonateOptions />
        <Contact />
      </main>
    </div>
  );
}
