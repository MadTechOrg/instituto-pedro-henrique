import Image from 'next/image';
import Link from 'next/link';
import HomeLogo from '../../assets/home-logo.png';
import style from './Header.module.css';

const links = [
  {
    url: '#quem-somos',
    label: 'Quem somos',
  },
  {
    url: '#nossas-acoes',
    label: 'Ações',
  },
  {
    url: '#como-contribuir',
    label: 'Como contribuir',
  },
  {
    url: '#contato',
    label: 'Contato',
  },
];

const renderLinks = () => links.map(({ url, label }) => (
  <Link href={url} passHref key={url}>
    <span className={style.header__link}>{label}</span>
  </Link>
));

export default function Header() {
  return (
    <header className={style.header}>
      <Image
        src={HomeLogo}
        alt="Instituto Pedro Henrique Logo"
        priority
      />
      <nav className={style.header__navigation}>
        {renderLinks()}
      </nav>
    </header>
  );
}
