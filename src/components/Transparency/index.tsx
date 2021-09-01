import Image from 'next/image';
import style from './Transparency.module.css';
import RegistrationStatus from '../../assets/transparency/registration-status.png';

const transparency = {
  url: '/comprovante-de-inscricao.pdf',
  imageSrc: RegistrationStatus,
  label: 'Situação Cadastral',
};

const externalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function Transparency() {
  return (
    <article id="transparencia" className={style.tranparency}>
      <h1 className="article-title">Transparência</h1>
      <main className={style.tranparency__text}>
        <p>Conduzimos nossas atividades e relações de forma íntegra e transparente.</p>
        <p>Verifique nossos documentos de regularização cadastral:</p>
      </main>
      <section className={style.transparency__files}>
        <a
          href={transparency.url}
          target="_blank"
          key={transparency.label}
          rel="noreferrer"
        >
          <div className={style.transparency__file}>
            <div>
              <Image
                src={transparency.imageSrc}
                alt={transparency.label}
                title="Clique para abrir"
              />
            </div>
            <p>
              {transparency.label}
              {externalLinkIcon()}
            </p>
          </div>
        </a>
      </section>
    </article>
  );
}
