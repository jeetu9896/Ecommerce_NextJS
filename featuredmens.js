import { useEffect ,useState } from "react"
import Image from "next/image"
import styles from './styles/featuredmens.module.css'

const Mens = () => {
  const [mensItem,setmensItem] = useState([]) 
  useEffect(() =>{
    fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
    .then((res) =>res.json())
    .then((res) => setmensItem([...res]))
  },[])
  return (
    <div className={styles.itemcontainer}>
     {
        mensItem.map((item,index)=> <div key ={index}>
            <Image src={item.image} alt={item.title} width={250} height={200} />
          </div>
        )
      }

    </div>
  )
}

export default Mens
