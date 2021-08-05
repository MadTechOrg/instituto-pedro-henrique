import Image from 'next/image';
import style from './DonateOptions.module.css';
import Clothes from '../../assets/donations/clothes.png';
import Food from '../../assets/donations/food.png';
import Furniture from '../../assets/donations/furniture.png';
import Hygiene from '../../assets/donations/hygiene.png';
import Materials from '../../assets/donations/materials.png';
import Toys from '../../assets/donations/toys.png';
import Money from '../../assets/donations/money.png';

const donationOptions = [
  {
    label: 'Roupas',
    image: Clothes,
  },
  {
    label: 'Materiais escolares e artigos de papelaria',
    image: Materials,
  },
  {
    label: 'Brinquedos',
    image: Toys,
  },
  {
    label: 'Materiais de escritório',
    image: Furniture,
  },
  {
    label: 'Produtos de higiene',
    image: Hygiene,
  },
  {
    label: 'Alimentos',
    image: Food,
  },
];

const renderDonatioOptions = () => donationOptions.map(({ label, image }) => (
  <div className={style.donate__option}>
    <div className={style.donate__optionImage}>
      <Image
        src={image}
        alt={label}
      />
    </div>
    <h3>{label}</h3>
  </div>
));

export default function DonateOptions() {
  return (
    <article className={style.donate}>
      <h1 className="article-title">Como contribuir</h1>
      <main className={style.donate__optionsContainer}>
        {renderDonatioOptions()}
      </main>
      <footer>
        <div className={style.donate__money}>
          <div className={style.donate__optionImage}>
            <Image
              src={Money}
              alt="Dinheiro"
            />
          </div>
          <h3>Pix:</h3>
        </div>
      </footer>
    </article>
  );
}
