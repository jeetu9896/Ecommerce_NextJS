import { useEffect,useState } from "react"
import Image from "next/image"
import styles from "./styles/featuredjewellery.module.css"

const Jewellery = () => {
  const [jewelleryItem,setjewelleryItem] =useState([])
  useEffect(() =>{
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
    .then((res) => res.json())
    .then((res) => setjewelleryItem([...res]))
  },[])
  return (
    <div className= {styles.itemcontainer}>

{
        jewelleryItem.map((item,index)=> <div key ={index}>
            <Image src={item.image} alt={item.title} width={250} height={200} />
          </div>
        )
      }      
    </div>
  )
}

export default Jewellery
