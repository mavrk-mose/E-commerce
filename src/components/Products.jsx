import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Products() {
  const [product, setProduct] = useState([]);

  //fetch data from the api with useEffect
  useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(result => setProduct(result))
  }, []);

  return (
    <div key={product.id} className="grid">
      {product.map((item) => (
                <div className="product">
                      <Link to="/Description">
                        <img src={item.image} alt="girl" />
                      </Link>    
                    <h3>{item.title}</h3>
                    <h2>Price: ${item.price}</h2>
                </div>
      ))}
    </div>
  )
}

export default Products