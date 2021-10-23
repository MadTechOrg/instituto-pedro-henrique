/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { getPageTitle } from 'notion-utils';
import style from './SocialActions.module.css';
import KitContraCovid from '../../assets/socialActions/kit-contra-covid.png';
import ComemoracaoAniversariantes from '../../assets/socialActions/comemoracao-aniversariantes.png';
import Hamburgada from '../../assets/socialActions/hamburgada.png';
import Pascoa from '../../assets/socialActions/pascoa.png';
import Higiene from '../../assets/socialActions/higiene.png';
import Seminario from '../../assets/socialActions/seminario.png';
import { trimStringBy } from '../../utils/stringFormatter';
import { BlockItem, RecordMap } from '../../interfaces/post';
import {
  notion, getImageUrl, getChildrenPages,
} from '../../utils/notion';

const ALL_SOCIAL_ACTIONS = '/40d611545d52498f9bf70ec0a012b802';

const NEXT_ACTION_PAGE = 'd87ffef5d6b2468fbbf5e25ca91069a7';

const actions = [
  {
    url: '/f6aad4d285da407497d88a100396daa2',
    imageSrc: KitContraCovid,
    name: 'Doação de kit contra COVID',
  },
  {
    url: '/763321819bfa4cc18f8847a9d33cb736',
    imageSrc: ComemoracaoAniversariantes,
    name: 'Comemoração dos aniversariantes dos mês',
  },
  {
    url: '/11ac06eb59154922baf621208ed36b81',
    imageSrc: Hamburgada,
    name: 'Hamburgada do bem',
  },
  {
    url: '/2934da041591441b8a3d782b7f405652',
    imageSrc: Pascoa,
    name: 'Páscoa com o Gastronomia Periférica',
  },
  {
    url: '/f798a8bed2214cc0b791fbff59599402',
    imageSrc: Higiene,
    name: 'Kits de higiene e produtos de limpeza',
  },
  {
    url: '/e2365c48d37e47cd9b543e13182978fe',
    imageSrc: Seminario,
    name: 'Seminário de planejamento do Instituto',
  },
];

export const getServerSideProps = async () => {
  const recordMap = await notion.getPage(NEXT_ACTION_PAGE);

  return {
    props: {
      recordMap,
    },
    revalidate: 100,
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

const renderSocialActions = () => actions.map(({ url, imageSrc, name }) => (
  <Link href={url} passHref key={name}>
    <div className={style.socialAction__carouselItem}>
      <Image
        src={imageSrc}
        alt={name}
      />
      <div className={style.socialAction__imageTitle}>
        <p>{trimStringBy(name, 30)}</p>
      </div>
    </div>
  </Link>
));

export default function SocialActions({ recordMap }: RecordMap) {
  const renderNextAction = () => {
    const childrenPages = getChildrenPages(
      recordMap.block,
      getPageTitle(recordMap),
    );

    return childrenPages.map(({ value }: BlockItem) => {
      const imageUrl = getImageUrl(value);

      return (
        <Link href={value.id} passHref key={value.id}>
          <div className={style.socialAction__carouselItem}>
            <img
              src={imageUrl}
              alt=""
            />
            <div className={style.socialAction__imageTitle}>
              <p>{trimStringBy(value.properties.title[0][0], 30)}</p>
            </div>
          </div>
        </Link>
      );
    });
  };

  return (
    <article id="nossas-acoes" className={style.socialAction}>
      <h1 className="article-title">Nossas Ações Sociais</h1>
      <h2 className={style.socialAction__subtitle}>Confira nosso próximo evento:</h2>
      {renderNextAction()}
      <h3 className={style.socialAction__subtitle}>
        Nossas principais
        {' '}
        <strong>ações sociais</strong>
        {' '}
        anteriores:
      </h3>
      <section className={style.socialAction__carousel}>
        {renderSocialActions()}
      </section>
      <h4 className={style.socialAction__redirectLink}>
        <Link href={ALL_SOCIAL_ACTIONS} passHref>
          <>
            Veja nossas
            {' '}
            <strong>ações sociais</strong>
            {' '}
            já realizadas!
          </>
        </Link>
      </h4>
    </article>
  );
}
