import { useState } from 'react'
import Products from './components/Products';
import Cart from './components/Cart';
import Description from './components/Description';

function App() {
  
  return (
    <div className="container">
      <div className="navbar">
        <ul>
            <li><h1> Home</h1></li>
            <li><h1>Cart</h1></li>
        </ul>    
      </div>

      <div className="heading">
            <h1>
                Products
            </h1>
        </div>
        <Products/>
    </div>
  )
}

export default App
