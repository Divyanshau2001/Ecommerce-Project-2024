import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"



const Home = () => {

  const addToCartHandler = () => {

  }
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to = "/search" className="findmore">More</Link>
      </h1>

      <main>
        <ProductCard productId={"asda"}  name={"iPad"} price={90000} stock={10} handler={addToCartHandler} photo = "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61XZQXFQeVL._SX679_.jpg" />
      </main>
    </div>
  )
}

export default Home