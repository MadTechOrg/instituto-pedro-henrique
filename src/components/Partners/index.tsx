import Image from 'next/image';
import style from './Partners.module.css';
import CruzVermelha from '../../assets/partners/cruz-vermelha.png';
import Fapss from '../../assets/partners/fapss.png';
import Dante from '../../assets/partners/dante.png';
import TurmaDoBem from '../../assets/partners/turma-do-bem.png';
import Puc from '../../assets/partners/puc.png';
import Uninove from '../../assets/partners/uninove.jpg';

const partners = [
  {
    label: 'Cruz Vermelha Brasileira',
    image: CruzVermelha,
  },
  {
    label: 'FAPSS',
    image: Fapss,
  },
  {
    label: 'Colégio Dante Alighieri',
    image: Dante,
  },
  {
    label: 'Turma do Bem',
    image: TurmaDoBem,
  },
  {
    label: 'PUC-SP',
    image: Puc,
  },
  {
    label: 'Uninove',
    image: Uninove,
  },
];

const renderPartners = () => partners.map(({ label, image }) => (
  <div className={style.partners__item} key={label}>
    <Image
      src={image}
      alt={label}
    />
  </div>
));

export default function Partners() {
  return (
    <article id="parceiros" className={style.partners}>
      <h1 className="article-title">Parceiros</h1>
      <main className={style.partners__partnersContainer}>
        {renderPartners()}
      </main>
    </article>
  );
}
