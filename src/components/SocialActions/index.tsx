import Image from 'next/image';
import Link from 'next/link';
import style from './SocialActions.module.css';
import RectanglePlaceholder from '../../assets/placeholder-rectangle.jpg';

const mockActions = [
  {
    url: 'https://github.com/soutoigor/easy-body-calc',
    imageSrc: RectanglePlaceholder,
    name: 'Gedevim',
  },
  {
    url: 'https://github.com/soutoigor/easy-body-calc',
    imageSrc: RectanglePlaceholder,
    name: 'Transformar',
  },
  {
    url: 'https://github.com/soutoigor/easy-body-calc',
    imageSrc: RectanglePlaceholder,
    name: 'De porta em porta',
  },
  {
    url: 'https://github.com/soutoigor/easy-body-calc',
    imageSrc: RectanglePlaceholder,
    name: 'Auxílio em caso de violação dos direitos humanos',
  },
  {
    url: 'https://github.com/soutoigor/easy-body-calc',
    imageSrc: RectanglePlaceholder,
    name: 'De porta em porta',
  },
  {
    url: 'https://github.com/soutoigor/easy-body-calc',
    imageSrc: RectanglePlaceholder,
    name: 'Auxílio em caso de violação dos direitos humanos',
  },
  {
    url: 'https://github.com/soutoigor/easy-body-calc',
    imageSrc: RectanglePlaceholder,
    name: 'De porta em porta',
  },
  {
    url: 'https://github.com/soutoigor/easy-body-calc',
    imageSrc: RectanglePlaceholder,
    name: 'Auxílio em caso de violação dos direitos humanos',
  },
];

const renderSocialActions = () => mockActions.map(({ url, imageSrc, name }) => (
  <Link href={url} passHref key={name}>
    <div className={style.socialAction__carouselItem}>
      <Image
        src={imageSrc}
        alt={name}
      />
    </div>
  </Link>
));

export default function SocialActions() {
  return (
    <article id="nossas-acoes" className={style.socialAction}>
      <h1 className="article-title">Nossas Ações Sociais</h1>
      <div className={style.socialAction__lastAction}>
        <Image
          src={RectanglePlaceholder}
          alt="Última ação social"
        />
      </div>
      <section className={style.socialAction__carousel}>
        {renderSocialActions()}
      </section>
    </article>
  );
}
