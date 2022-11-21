import React from 'react'
import { Link } from 'react-router-dom'
import './Description.css'
function Description() {
  
  
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
              <img src="https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />  
            </div>
            <div className="product-description">
              <h1>Product Title</h1>
              <h2>Product category</h2>
              <h2>Product Description</h2>
              <h2>Product rating</h2>
              <h2>In Stock: {}</h2>
              <h2>Price: $</h2>
              <Link to="/Cart">
                <button onClick="" id='cart-button'>Add to Cart</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Description