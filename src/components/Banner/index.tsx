import Image from 'next/image';
import HomeLogo from '../../assets/home-logo.png';
import Favela from '../../assets/favela.png';
import style from './Banner.module.css';

export default function Banner() {
  return (
    <article className={style.banner}>
      <header className={style.banner__header}>
        <Image
          src={HomeLogo}
          alt="Instituto Pedro Henrique Logo"
          priority
        />
      </header>
      <section className={style.banner__section}>
        <main className={style.banner__ctaContainer}>
          <h1 className={style.banner__cta}>
            Transformando a realidade da periferia
            {' '}
            <br />
            {' '}
            através de
            {' '}
            <strong>Oportunidades e Educação</strong>
          </h1>
          <button type="button" className="primary-button">Ajude!</button>
        </main>
        <aside>
          <Image
            src={Favela}
            alt="Periferia com pipa no céu"
            priority
          />
        </aside>
      </section>
    </article>
  );
}
