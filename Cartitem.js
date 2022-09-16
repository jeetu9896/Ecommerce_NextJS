import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './styles/Cartitem.module.css'
const Cartitem = ({ id ,quantity }) => {
  console.log(quantity, 's');
  const [cartItem, setcartItem] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setcartItem(res));
  }, []);
  console.log(cartItem);
  return (
    <div className={styles.cartitems} >
     <center className={styles.cartitemsImage}>
     <Image
        src={cartItem.image}
        width={250}
        layout="fixed"
        height={250}
        alt={cartItem.title}
      />
     </center>
      <h1>{cartItem.title}</h1>
      <h2>Price: ${cartItem.price}</h2>
      <h2>Item Quantity: {quantity}</h2>
      <h2>Total Price: ${ quantity*cartItem.price } </h2>
    </div>
  );
};

export default Cartitem;
