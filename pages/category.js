
const Category = ({categories}) => {
  console.log(categories)
  return (
    <div>
        {/* Category  */}
        { 
        categories.map((item,index) => <h1 key={index} > {item}</h1>
        )
        }     
    </div>
  )
}

export default Category

export async function getStaticProps(){
  const res = await fetch(`https://fakestoreapi.com/products/categories`)
  const categories = await res.json()

  return {
    props:{categories}
  }

}