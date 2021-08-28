import Image from 'next/image';
import Link from 'next/link';
import HomeLogo from '../../assets/home-logo.png';
import style from './Header.module.css';

const links = [
  {
    url: '/#quem-somos',
    label: 'Quem somos',
  },
  {
    url: '/#nossas-acoes',
    label: 'Ações',
  },
  {
    url: '/#como-contribuir',
    label: 'Como contribuir',
  },
  {
    url: '/#contato',
    label: 'Contato',
  },
  {
    url: '/#transparencia',
    label: 'Transparência',
  },
  {
    url: '/#parceiros',
    label: 'Parceiros',
  },
];

const renderLinks = () => links.map(({ url, label }) => (
  <span className={style.header__link} key={url}>
    <Link href={url} passHref>
      {label}
    </Link>
  </span>
));

export default function Header() {
  return (
    <header className={style.header}>
      <Link href="/" passHref>
        <div className={style.header__logo}>
          <Image
            src={HomeLogo}
            alt="Instituto Pedro Henrique Logo"
            priority
          />
        </div>
      </Link>
      <nav className={style.header__navigation}>
        {renderLinks()}
      </nav>
    </header>
  );
}
