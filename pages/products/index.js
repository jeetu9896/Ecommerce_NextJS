import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Products.module.css'
export default function Products({ data }) {
  // console.log(data)
  return (
    <div className={styles.fetchprodcut}>
      {data.map((item, index) => {
        return ( <div key={index}>
            <Link href={`/products/${item.id}`} key={item.id}>
             <a>
             <div key={index}>
               <center>
               <Image className={styles.productimage}
                  src={item.image}
                  alt={item.title}
                  width={250}
                  height={250}
                />
               </center>
                <h1>{item.title}</h1>
                <h2>Price : ${item.price}</h2>
              <button className={styles.button} > Click to Buy</button>
              </div>
             </a>
            </Link>
            </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);

  const data = await res.json();
  //  console.log(data)
  return {
    props: { data },
  };
}
