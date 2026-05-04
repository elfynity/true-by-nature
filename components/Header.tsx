import Image from "next/image"
import Logo from '@/public/true-by-nature-logo.svg'
import Link from "next/link"


export const Header = () => {
  return(
    <>

    <div id="headerContainer">
      <div className="wrapper">
        <header>
          <Image
            id="logo"
            src={Logo}
            alt="true by nature logo"
            loading="eager"
          />

          <nav>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>  
      </div>{/* wrapper */} 
    </div>{/* headerContainer */} 

    </>
  )
}