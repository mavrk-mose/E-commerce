import React from 'react'
import { useState } from 'react'
import './Cart.css'

function Cart() {
  const [count, setCount] = useState(1);
  return (
    <div className="cart-container">
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
      <div className="cart-boxes">
        <div className="shopping-cart">
          <div className="cart-heading">
            <h3>Continue Shopping</h3>
          </div>
          <h4>Shopping cart</h4>
          <h5>You have 3 item in your cart</h5>
          
          <div className="product-details">
            
              <img src="https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
              <h4>Italy Pizza</h4>
              <p>Extra Cheese</p>
              <p>x{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={() => setCount(count - 1)}> - </button>
              <p>$68</p>
          </div>
          <div className="product-details">
            
              <img src="https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
              <h4>Italy Pizza</h4>
              <p>Extra Cheese</p>

              <p>$68</p>
          </div>
          <div className="product-details">
            
              <img src="https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
              <h4>Italy Pizza</h4>
              <p>Extra Cheese</p>

              <p>$68</p>
          </div>
        </div>

        <div className="checkout">
          <div className="bg-img">
            <h1>Card Details</h1>
            <h1>Card Details</h1>
            <h1>Card Details</h1>
            <h1>Card Details</h1>
            <h1>Card Details</h1>
            <h1>Card Details</h1>
            <h1>Card Details</h1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart