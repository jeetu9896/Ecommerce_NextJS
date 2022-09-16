import  Carousel from '../carousel/index'
import styles from '../styles/Home.module.css'
// import Category from '../Category'
export default function Home() {
  return (
    <div className={styles.container}>
<h1> Home</h1>
<Carousel />
      {/* <Category /> */}
    </div>
  )
}
