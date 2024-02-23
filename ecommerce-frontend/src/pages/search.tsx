import { useState } from "react"
import ProductCard from "../components/product-card";


const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const addToCartHandler = () => {
  }

  const isNextPage = true;
  const isPrevPage = true;
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select 
          value= {sort} 
          onChange={(e) => setSort(e.target.value)}
          >
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
          type="range" 
          min={100}
          max={1000000}
          value= {maxPrice} 
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          >
          </input>
        </div>
        <div>
          <h4>Category</h4>
          <select 
          value= {category} 
          onChange={(e) => setSort(e.target.value)}
          >
            <option value="">ALL</option>
            <option value="asc">Sample1 </option>
            <option value="dsc">Sample2 </option>
          </select>
        </div>

      </aside>
      <main>
        <h1>Products</h1>
        <input type="text"
        placeholder="Search by name"
        onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-product-list">
          <ProductCard productId={"asda"}  name={"iPad"} price={90000} stock={10} handler={addToCartHandler} photo = "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61XZQXFQeVL._SX679_.jpg"/>
        </div>
        <article>
          <button onClick={() => setPage(prev =>prev-1)} disabled = {!isPrevPage} >Prev</button>
          <span>{page} of {4}</span>
          <button onClick={() => setPage(prev =>prev+1)} disabled= {!isNextPage}>Next</button>
        </article>
      </main>
    </div>
  )
}

export default Search