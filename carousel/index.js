import Image from "next/image"
import { useState } from "react"
import { useEffect } from "react"
import styles from "./Carousel.module.css"
const Carousel = () => {
  const sliderImage= ['/../public/Images/image1.jpg','/../public/Images/image2.png','/../public/Images/image3.jpg','/../public/Images/image4.jpg']
  const [imgIndex, setimgIndex] = useState(0)
  // console.log(imgIndex)
  function repeat(count){
    if(count==sliderImage.length-1){
      return count =0
    }
    if(count <0){
      return count = sliderImage.length-1
    }
    return count
  }
  useEffect(()=>{
    const interval = setInterval(()=>{
      setimgIndex(count => repeat(count+1))
    },
    3000)
    return () => clearInterval(interval)
  })
  return (
    <div className= {styles.main}>
        <button className ={`${styles.button} ${styles.prev}` } onClick={()=> setimgIndex(count => repeat(count-1))} > &#60; </button>
        <button className = {`${styles.button} ${styles.next}`} onClick={()=> setimgIndex(count => repeat(count+1)) }> &#62;</button>
        <div>
          <Image src={sliderImage[imgIndex]} alt="image1" width={700} height={380} objectFit="contain"  />
        </div>
    </div>
  )
  }
export default Carousel
