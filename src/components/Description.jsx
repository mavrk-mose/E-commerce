import React from 'react'
import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom'
import './Description.css'

function Description() {
  const [product, setProduct] = useState([]);
  const {id} = useParams();
  //fetch data from api for single product
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(result => setProduct(result))
      .catch(err => console.log(err)) 
  }, [id]);
    
  return (
    <div className="product-container">
        <div className="navbar">
                <ul>
                        <li>
                          <Link to="/">
                            <h1>Home</h1>
                          </Link>
                        </li>
                        <li>
                          <Link to="/Cart">
                            <h1>Cart</h1>
                          </Link>
                        </li>
                </ul>
        </div>
          <h3>Description</h3>
        <div className="products">
            <div className="product-img">
              <img src={product.image} alt="" />  
            </div>
            <div className="product-description">
              <h1>{product.title}</h1>
              <h2>{product.category}</h2>
              <p>{product.description}</p>
              {product.rating ? <h2>{product.rating.rate}/10</h2> : null}
              {product.rating ? <h2>In Stock: {product.rating.count}</h2> : null}
              <h2>Price: ${product.price}</h2>
              <Link to="/Cart">
                <button id='cart-button'>ADD TO CART</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Description