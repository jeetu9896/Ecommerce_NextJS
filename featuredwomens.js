import Image from "next/image"
import { useEffect , useState} from "react"
import styles from "./styles/featuredwomens.module.css"
const Womens = () => {
  const [womensItem,setwomensItem] = useState([])
 useEffect(() =>{
  fetch(`https://fakestoreapi.com/products/category/women's%20clothing?limit=4`)
  .then((res) =>res.json())
  .then((res) => setwomensItem([...res]))
 },[])
  return (
    <div className={styles.itemcontainer}>
  {
        womensItem.map((item,index)=> <div key ={index}>
            <Image src={item.image} alt={item.title} width={250} height={200} />
          </div>
        )
      }
    </div>
  )
}

export default Womens
