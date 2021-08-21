// import Link from 'next/link';
import Image from 'next/image';
import style from './About.module.css';
import Gedevim from '../../assets/about/gedevim.png';
import PortaEmPorta from '../../assets/about/de-porta-em-porta.png';
import Crescer from '../../assets/about/crescer.png';
import DireitosHumanos from '../../assets/about/direitos-humanos.png';

const mockProjects = [
  {
    url: '',
    imageSrc: Gedevim,
    name: 'Gedevim',
  },
  {
    url: '',
    imageSrc: Crescer,
    name: 'Crescer',
  },
  {
    url: '',
    imageSrc: PortaEmPorta,
    name: 'De porta em porta',
  },
  {
    url: '',
    imageSrc: DireitosHumanos,
    name: 'Auxílio em caso de violação dos direitos humanos',
  },
];

const renderProjects = () => mockProjects.map(({ imageSrc, name }) => (
  // <Link href={url} passHref key={name}>
  <div className={style.about__project} key={name}>
    <div className={style.about__projectImage}>
      <Image
        src={imageSrc}
        alt={name}
      />
    </div>
    <p>{name}</p>
  </div>
  // </Link>
));

export default function About() {
  return (
    <article id="quem-somos" className={style.about}>
      <h1 className="article-title">Quem somos</h1>
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
