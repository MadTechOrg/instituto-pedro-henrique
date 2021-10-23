import Link from 'next/link';
import Image from 'next/image';
import style from './About.module.css';
import Gedevim from '../../assets/about/gedevim.png';
import PortaEmPorta from '../../assets/about/de-porta-em-porta.png';
import Crescer from '../../assets/about/crescer.png';
import DireitosHumanos from '../../assets/about/direitos-humanos.png';

const ALL_PROJECTS_URL = '/e25079f7269344b6855b0d1d7d4af75d';

const projects = [
  {
    url: '/79bf601109a141e09884441daecd1f91',
    imageSrc: Gedevim,
    name: 'Gedevim',
  },
  {
    url: '/ccaa891444a7465ea84c6a32323c9dc6',
    imageSrc: Crescer,
    name: 'Crescer',
  },
  {
    url: '/134dc65affd94df884d4c4c0fcc703e8',
    imageSrc: PortaEmPorta,
    name: 'De porta em porta',
  },
  {
    url: '/a0ae4e1e55ef4e57b032aec26acbba56',
    imageSrc: DireitosHumanos,
    name: 'Auxílio em caso de violação dos direitos humanos',
  },
];

const renderProjects = () => projects.map(({ url, imageSrc, name }) => (
  <Link href={url} passHref key={name}>
    <div className={style.about__project}>
      <div className={style.about__projectImage}>
        <Image
          src={imageSrc}
          alt={name}
        />
      </div>
      <p>{name}</p>
    </div>
  </Link>
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
      <p className={style.about__redirectLink}>
        <Link href={ALL_PROJECTS_URL}>
          Veja aqui todos os nossos projetos
        </Link>
      </p>
    </article>
  );
}
