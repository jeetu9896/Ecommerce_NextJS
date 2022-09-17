import { useEffect } from "react"
import Image from "next/image"
import { useState } from "react"
import styles from './styles/featuredelectronics.module.css'

const Electronics = () => {
 const [electronicsItem,setelectronicsItem] = useState([])

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/electronics?limit=4`)
    .then((res) => res.json())
    .then((res)=> setelectronicsItem([...res]))
  },[])
console.log(electronicsItem,"e")
  return (
    <div className={styles.itemcontainer}> 
      {
        electronicsItem.map((item,index)=> <div key ={index}>
            <Image src={item.image} alt={item.title} width={250} height={200} />
          </div>
        )
      }
    </div>
  )
}

export default Electronics