import Image from 'next/image';
import Link from 'next/link';
import Favela from '../../assets/favela.png';
import style from './Banner.module.css';

export default function Banner() {
  return (
    <article className={style.banner}>
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
          <Link href="#como-contribuir" passHref>
            <button type="button" className="primary-button">Ajude!</button>
          </Link>
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
