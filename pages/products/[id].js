import Image from 'next/image';
import styles from '../../styles/Product.module.css';

const Product = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.singleProductDetail } >
      <div className={styles.productImage}>
        <Image src={data.image} alt={data.title} objectFit="contain" layout="fixed" width="450px" height="450px" />
      </div>
      <div className={styles.productDetail}>
        <span>
          <h1>{data.title}</h1>
          <h2>Category : {data.category}</h2>
          <h2>Price : ${data.price}</h2>
          <h3>Rating : {data.rating.rate}</h3>
          <p>
            Description <br /> <br /> {data.description}
          </p>
        </span>
        <button className={styles.button}>Add To Cart </button>
      </div>
    </div>
  );
};
export default Product;

export async function getStaticPaths() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  // console.log(typeof)
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
