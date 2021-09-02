import Image from 'next/image';
import style from './DonateOptions.module.css';
import Clothes from '../../assets/donations/clothes.png';
import Food from '../../assets/donations/food.png';
import Furniture from '../../assets/donations/furniture.png';
import Hygiene from '../../assets/donations/hygiene.png';
import Materials from '../../assets/donations/materials.png';
import Toys from '../../assets/donations/toys.png';
// import Money from '../../assets/donations/money.png';

const donationOptions = [
  {
    label: 'Roupas',
    image: Clothes,
  },
  {
    label: 'Materiais escolares',
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
  <div className={style.donate__option} key={label}>
    <div>
      <Image
        src={image}
        alt={label}
      />
    </div>
    <p>{label}</p>
  </div>
));

export default function DonateOptions() {
  return (
    <article id="como-contribuir" className={style.donate}>
      <h1 className="article-title">Como contribuir</h1>
      <main className={style.donate__optionsContainer}>
        {renderDonatioOptions()}
      </main>
      {/* <footer>
        <div className={style.donate__money}>
          <div className={style.donate__optionImage}>
            <Image
              src={Money}
              alt="Dinheiro"
            />
          </div>
          <p>Pix:</p>
        </div>
      </footer> */}
    </article>
  );
}
