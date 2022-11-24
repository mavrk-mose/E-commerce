import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Products() {
  const [product, setProduct] = useState([]);

    //fetch data from the api with useEffect
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(result => setProduct(result))
        .catch(err => console.log(err))
    }, []); 

  return (
  <div className='grid'>
      {product.map((item) => (
      <div key={product.id} className="product">
        <div className="product-picture">
          <Link to={`/Description/${item.id}`}>
              <img src={item.image} alt="product" />
          </Link>
        </div>
        <h3>{item.title}</h3>
        <h2>Price: ${item.price}</h2>
      </div>
    ))}
  </div>
  )
}

export default Products