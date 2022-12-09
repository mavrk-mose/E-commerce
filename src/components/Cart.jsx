import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom';
import Visa from '../assets/images/Rectangle 10.svg'
import Mastercard from '../assets/images/Rectangle 9.svg'
import RuPay from '../assets/images/Rectangle 11.svg'
import Seeall from '../assets/images/Rectangle 12.svg'
import './Cart.css'

function Cart() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="cart-container">
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
      <div className="cart-boxes">
        <div className="shopping-cart">
          <div className="cart-heading">
            <Link to="/">
              <h3>{"< Continue Shopping"}</h3>
            </Link>
          </div>
          <div className="items">
            <h4>Shopping cart</h4>
            <h5>You have {count} items in your cart</h5>
          </div>
          <div className="product-details">
              <img src="https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
              <h4>Italy Pizza</h4>
              <p>Extra Cheese</p>
              <p>x{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={() => setCount(count - 1)}> - </button>
              <p>${count*10}</p>
          </div>
          <div className="product-details">
              <img src="https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
              <h4>Italy Pizza</h4>
              <p>Extra Cheese</p>
              <p>x{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={() => setCount(count - 1)}> - </button>
              <p>${count*10}</p>
          </div>
          <div className="product-details">
              <img src="https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
              <h4>Italy Pizza</h4>
              <p>Extra Cheese</p>
              <p>x{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={() => setCount(count - 1)}> - </button>
              <p>${count * 10}</p>
          </div>
        </div>

          <div className="checkout">
            <div className="checkout-heading">
              <h1>Card Details</h1>
              <img src="https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
            </div>
            <div className="card-type">
              <h3>Card Type</h3>
              <div className="grid-checkout">
                <img src={Mastercard} alt="" />
                <img src={Visa} alt="" />
                <img src={RuPay} alt="" />
                <img src={Seeall} alt="" placeholder='See All'/>
            </div>
            </div>
            <h3>Name on card</h3>
            <input type="text" placeholder='name'/>
            <h3>Card Number</h3>
            <input type="text" placeholder='1111 2222 3333 4444'/>
            <h3>Expiration Date</h3>
            <input type="date" name="" id="" />
            <h3>CVV</h3>
            <input type="number" name="" id="" />
            <h3>Subtotal</h3>
            {count*30}
            <h3>Shipping</h3>
            {count*5}
            <h3>Total(Tax incl.) </h3>
            {count*35}
          </div>
      </div>
    </div>
  )
}

export default Cart