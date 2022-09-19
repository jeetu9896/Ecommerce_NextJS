import Carousel from '../carousel/index';
import styles from '../styles/Home.module.css';
import Category from '../category';
import Electronics from '../featuredelectronics';
import Jewellery from '../featuredjewellery';
import Mens from '../featuredmens';
import Womens from '../featuredwomens';
export default function Home() {
  return (
    <div className={styles.container}>
      <h1> Home</h1>
      <Carousel />
      <div>
        <h1>Categories</h1>
        <Category />
      </div>
      <div>
        <h1>Electronics</h1>
        <Electronics />
      </div>
      <div>
        <h1>Jewellery</h1>
        <Jewellery />
      </div>
      <div>
        <h1>Mens</h1>
        <Mens />
      </div>
      <div>
        <h1>Womens</h1>
        <Womens />
      </div>
    </div>
  );
}
