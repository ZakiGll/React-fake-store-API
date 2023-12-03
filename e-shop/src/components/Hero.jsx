import React, { useContext } from 'react'
import { cart_icon, webShoping } from '../assets'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';

function Hero() {

  const {cart,setCart} = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <section className='Hero'>
        <nav className='navbar'>
            <p className='logo'>Shopy</p>
            <ul className='navbar-items'>
                <li className='navbar-item'>Home</li>
                <li className='navbar-item'>Men</li>
                <li className='navbar-item'>Women</li>
                <li className='navbar-item'>Contact</li>
            </ul>
            <div className='cart-icon' onClick={()=>navigate("/Cart")}>
                <img src={cart_icon} alt="" />
                <div className='cart-icon-objects'>{cart.length}</div>
            </div>
        </nav>
        <div className='Hero-content'>
          <div className="content">
            <div className='Hero-text'>
              <h1>We picked some <span style={{color:"#FF734F"}}>cool things</span>  for you! let's start shopping</h1>
              <p>You can start browsing our product direcly, our you can login now and start shopping !</p>
              <button onClick={()=>navigate("/Login")}>Login</button>
            </div>
            <div className="Hero-img">
                <img src={webShoping} alt="" />
            </div>
          </div>
          
          
        </div>
    </section>
  )
}

export default Hero