import Image from "next/image"
import { useEffect } from "react"
import { useState } from "react"
import styles from "./styles/category.module.css"

const Category = () => {
  const categoryarr =["/../public/category/image1.jpg","/../public/category/image2.jpg","/../public/category/image3.jpg","/../public/category/image4.jpg"]
  const [categories, setcategories] = useState([])
  useEffect(() =>{
    fetch(`https://fakestoreapi.com/products/categories `)
    .then((res) => res.json())
    .then((res) => setcategories([...res]))
  },[])
  return (
    <div className= {styles.category}>
        
        { 
        categories.map((item,index) => <div key={index}> 
        <Image  src={categoryarr[index]} alt={item} width ={250} height= {200}/>
          <h1 key={index} > {item.toUpperCase()}</h1>
        </div>
        )
      
        }    
    </div>
  )
}

export default Category
