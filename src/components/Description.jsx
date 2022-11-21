import React from 'react'
import { Link } from 'react-router-dom'

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
        <div className="product">
                          <img src="" alt="" />  
                        <h2>Product Description</h2>
                        <h2>Price: ${}</h2>
                    </div>
    </div>
  )
}

export default Description