// import Link from 'next/link';
import Image from 'next/image';
import style from './SocialActions.module.css';
import PortoSeguro from '../../assets/socialActions/porto-seguro.png';
import KitContraCovid from '../../assets/socialActions/kit-contra-covid.png';
import ComemoracaoAniversariantes from '../../assets/socialActions/comemoracao-aniversariantes.png';
import Hamburgada from '../../assets/socialActions/hamburgada.png';
import Pascoa from '../../assets/socialActions/pascoa.png';
import Higiene from '../../assets/socialActions/higiene.png';
import Seminario from '../../assets/socialActions/seminario.png';

const actions = [
  {
    url: '',
    imageSrc: KitContraCovid,
    name: 'Doação de kit contra COVID',
  },
  {
    url: '',
    imageSrc: ComemoracaoAniversariantes,
    name: 'Comemoração dos aniversariantes dos mês',
  },
  {
    url: '',
    imageSrc: Hamburgada,
    name: 'Hamburgada do bem',
  },
  {
    url: '',
    imageSrc: Pascoa,
    name: 'Pascoa com o Gastronomia Periférica',
  },
  {
    url: '',
    imageSrc: Higiene,
    name: 'Kits de higiene e produtos de limpeza',
  },
  {
    url: '',
    imageSrc: Seminario,
    name: 'Seminário de planejamento do Instituto',
  },
];

const trimStringBy = (text: string, max: number) => {
  if (!text) return '';
  return text.length > max
    ? `${text.substring(0, max)}...`
    : text;
};

const renderSocialActions = () => actions.map(({ imageSrc, name }) => (
  // <Link href={url} passHref key={name}>
  <div className={style.socialAction__carouselItem}>
    <Image
      src={imageSrc}
      alt={name}
    />
    <div className={style.socialAction__imageTitle}>
      <p>{trimStringBy(name, 30)}</p>
    </div>
  </div>
  // </Link>
));

export default function SocialActions() {
  return (
    <article id="nossas-acoes" className={style.socialAction}>
      <h1 className="article-title">Nossas Ações Sociais</h1>
      <h2 className={style.socialAction__subtitle}>Confira nosso próximo evento:</h2>
      <div>
        <Image
          src={PortoSeguro}
          alt="Pimp my carroça com Porto Seguro"
        />
        <div className={style.socialAction__imageTitle}>
          <p>{trimStringBy('Pimp my carroça com Porto Seguro', 100)}</p>
        </div>
      </div>
      <h3 className={style.socialAction__subtitle}>
        Veja também, nossas
        {' '}
        <strong>ações sociais</strong>
        {' '}
        anteriores:
      </h3>
      <section className={style.socialAction__carousel}>
        {renderSocialActions()}
      </section>
    </article>
  );
}
