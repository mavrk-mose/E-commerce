import React from 'react'
import Cart from './Cart';
import Products from './Products';
import './Home.css';
function Home() {

  return (
        <div className="container">
        <div className="navbar">
            <ul>
                    <li>
                        <h1>Home</h1>
                    </li>
                    <li>
                        <h1>Cart</h1>
                    </li>
            </ul>    
        </div>

        <div className="heading">
                <h1>
                    Products
                </h1>
            </div>
            <Products/>
        </div>
  );
}

export default Home