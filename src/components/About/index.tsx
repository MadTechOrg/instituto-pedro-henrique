import Link from 'next/link';
import Image from 'next/image';
import style from './About.module.css';
import SquarePlaceholder from '../../assets/placeholder-square.jpg';

const mockProjects = [
  {
    url: 'https://github.com/soutoigor/easy-body-calc',
    imageSrc: SquarePlaceholder,
    name: 'Gedevim',
  },
  {
    url: 'https://github.com/soutoigor/easy-body-calc',
    imageSrc: SquarePlaceholder,
    name: 'Transformar',
  },
  {
    url: 'https://github.com/soutoigor/easy-body-calc',
    imageSrc: SquarePlaceholder,
    name: 'De porta em porta',
  },
  {
    url: 'https://github.com/soutoigor/easy-body-calc',
    imageSrc: SquarePlaceholder,
    name: 'Auxílio em caso de violação dos direitos humanos',
  },
];

const renderProjects = () => mockProjects.map(({ url, imageSrc, name }) => (
  <Link href={url} passHref key={name}>
    <div className={style.about__project}>
      <div className={style.about__projectImage}>
        <Image
          src={imageSrc}
          alt={name}
        />
      </div>
      <h3>{name}</h3>
    </div>
  </Link>
));

export default function About() {
  return (
    <article className={style.about}>
      <h1 className={style.about__title}>Quem somos</h1>
      <main className={style.about__content}>
        <p>
          Instituto Pedro Henrique é uma organização sem fins lucrativos com foco no impacto
          social na comunidade da Brasilândia, no estado de São Paulo.
        </p>
        <p>
          A nossa missão é unir esforços para gerar e disseminar conhecimento
          afim de mudar realidade do nosso bairro. Fazemos isso através dos projetos:
        </p>
      </main>
      <section className={style.about__projectsContainer}>
        {renderProjects()}
      </section>
    </article>
  );
}
