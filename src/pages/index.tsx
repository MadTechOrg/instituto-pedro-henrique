import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import About from '../components/About';
import SocialActions from '../components/SocialActions';
import DonateOptions from '../components/DonateOptions';
import Contact from '../components/Contact';
import Transparency from '../components/Transparency';
import Partners from '../components/Partners';

const meta = {
  title: 'Instituto Pedro Henrique',
  description: `Instituto Pedro Henrique de Direitos Humanos, Transformando a realidade da periferia
    através de Oportunidades e Educação.`,
  image: 'https://i.ibb.co/F6xp1Kq/home-logo.png',
};

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <Header />
      <main>
        <Banner />
        <About />
        <SocialActions />
        <DonateOptions />
        <Contact />
        <Transparency />
        <Partners />
      </main>
    </div>
  );
}
