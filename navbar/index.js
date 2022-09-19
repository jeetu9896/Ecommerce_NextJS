import Link from "next/link"
import { useEffect, useState } from "react"
const Navbar = () => {
  const [token,settoken] = useState('')
  useEffect(()=> {
    settoken(JSON.parse(localStorage.getItem('usertoken')))
  } ,[])

  return (
    <div>
      <Link href="/">Home</Link>
      <Link href='/products' >Product</Link>
      <Link href='cart' >Cart</Link>
      {token ?" logout" :<Link href='/login' >Login</Link> } 
       
    </div>
  )
}

export default Navbar
