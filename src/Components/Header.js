import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartReducer } from '../context/CartContext'
import "./Header.css"


const Header = () => {
  const{cart_total}=useCartReducer()
  return (
    <>
    <nav className='navbar'>
      <div className="logo">jangid <span>store</span></div>
      <div className="navbar-list">
        <ul className='ul'>
          <li className='active'><NavLink to="/" >Home</NavLink></li>
        
        
          <li><NavLink to="/about">About</NavLink></li>
        
      
          <li><NavLink to="/products">Products</NavLink></li>
        
        
          <li><NavLink to="/contact">Contact</NavLink></li>
        
        
          <li><NavLink to="/cart"><div className='cart_div'>
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          <span className='cart_number'>{cart_total}</span>
            </div></NavLink></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Header