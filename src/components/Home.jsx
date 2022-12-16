import React from 'react'
import Cart from './Cart';
import Products from './Products';
import './Home.css';
import {Link} from 'react-router-dom';


function Home() {

  return (
        <div className="container">
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