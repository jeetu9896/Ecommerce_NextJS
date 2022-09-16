import Link from "next/link";
import Cartitem from "../Cartitem";
import styles from "../styles/Cart.module.css"
const cart = ({ Cartdetail }) => {
  console.log(Cartdetail);
  return (
    <div>
      <h1> user Cart</h1>
      {Cartdetail.map((item, index) => {
        return (
          <div key={index} className= {styles.main}>
              {item.products.map((item, index) => {
                return (    <Cartitem  id={item.productId} quantity={item.quantity} key={index}/>
              
                );
              })}
          </div>
        );
      })}
    </div>
  );
};
export default cart;

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/carts/user/2`);
  const Cartdetail = await res.json();

  return {
    props: { Cartdetail },
  };
}
