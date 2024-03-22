import { useState } from "react"
import { Products } from "./components/Products"
import { products } from "./mocks/products.json"

function App() {
  const[ products]=useState(initialProducts);
  
  const [filters,setFilters] =useState({
    category:'all',
    minPrince: 0,

  });
  const filterProducts=(products)=>{
    return products.filters(product =>{
      return(
        product.precio >= filters.minPrince &&(
          filters.category ==='all'  ||
          product.category === filters.category
        )
      )
    })
  }
  const filteredProducts = filterProducts(products);
  return (
   
    <>
       <Products products={filteredProducts}/>
    </>
  )
}

export default App
