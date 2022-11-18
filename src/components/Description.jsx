import React from 'react'
import {useState, useEffect} from 'react'
function Description() {
  const [product, setProduct] = useState([]);
  //fetch data from the api with useEffect
  useEffect(() => {
      fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(result => setProduct(result))
  }, []);
  console.log(product)
  return (
    <div className="product">
                      <Link to="/Description">
                        <img src={product.image} alt="girl" />
                      </Link>    
                    <h2>{product.title}</h2>
                    <h2>Price: ${product.price}</h2>
                </div>
  )
}

export default Description