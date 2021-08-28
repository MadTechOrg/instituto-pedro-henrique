import Image from 'next/image';
import Link from 'next/link';
import FavelaLarge from '../../assets/favela-large.png';
import FavelaSmall from '../../assets/favela-small.png';
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
        <aside className={style.banner__imageContainer}>
          <div className={style['banner__image--small']}>
            <Image
              src={FavelaSmall}
              alt="Periferia com pipa no céu"
            />
          </div>
          <div className={style['banner__image--large']}>
            <Image
              src={FavelaLarge}
              alt="Periferia com pipa no céu"
            />
          </div>
        </aside>
      </section>
    </article>
  );
}
