import Link from 'next/link';
import Image from 'next/image';
import style from './Transparency.module.css';
import Foundation from '../../assets/transparency/foundation.png';
import Statute from '../../assets/transparency/statute.png';
import RegistrationStatus from '../../assets/transparency/registration-status.png';

const transparencyFiles = [
  {
    url: '/ata-da-fundacao.pdf',
    imageSrc: Foundation,
    label: 'Ata da Fundação',
  },
  {
    url: '/estatuto-social.pdf',
    imageSrc: Statute,
    label: 'Estatuto Social',
  },
  {
    url: '/comprovante-de-inscricao.pdf',
    imageSrc: RegistrationStatus,
    label: 'Situação Cadastral',
  },
];

const renderTransparencyFiles = () => transparencyFiles.map(({ url, imageSrc, label }) => (
  <a href={url} target="_blank" key={label} rel="noreferrer">
    <div className={style.transparency__file}>
      <div className={style.transparency__fileImage}>
        <Image
          src={imageSrc}
          alt={label}
          title="Clique para abrir"
        />
      </div>
      <p>{label}</p>
    </div>
  </a>
));

export default function Transparency() {
  return (
    <article id="quem-somos" className={style.tranparency}>
      <h1 className="article-title">Transparência</h1>
      <main className={style.tranparency__text}>
        <p>Conduzimos nossas atividades e relações de forma íntegra e transparente.</p>
        <p>Verifique nossos documentos de regularização cadastral:</p>
      </main>
      <section className={style.transparency__files}>
        {renderTransparencyFiles()}
      </section>
    </article>
  );
}
