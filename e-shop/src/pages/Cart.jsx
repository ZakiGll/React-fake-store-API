import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { cart_icon, emptyCard } from '../assets';
import { redirect, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

function Cart() {
    const {cart,setCart} = useContext(CartContext);
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [total,setTotal] = useState(0);
    console.log(cart);

    useEffect(() => {
        const sumTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(sumTotal);
    },[cart]);
    
    const CartGrid = ({ products }) => (
        <div className="cart-product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.title} />
              <h3>{product.title} (x{product.quantity})</h3>
              <p>{product.price*product.quantity} $</p>
              <button onClick={()=>{
                setCart(cart.filter(item => item.id != product.id))
                }}>Remove from cart</button>
            </div>
          ))}
        </div>
      );

  return (
   <section className='cart-section'>
         <nav className='navbar'>
            <p className='logo'>Shopy</p>
            <ul className='navbar-items'>
                <li className='navbar-item'  onClick={()=>navigate("/")}>Home</li>
                <li className='navbar-item'>Men</li>
                <li className='navbar-item'>Women</li>
                <li className='navbar-item'>Contact</li>
            </ul>
            <img src={cart_icon} alt="" />
        </nav>

        {cart.length > 0 ? (
        <CartGrid products={cart} />
      ) : (
        <div className="empty-cart">
           <img src={emptyCard} alt="" />
        </div>
       
      )}
      <h1 className="total-price">
        {total>0 ? "Total : "+total+" $" : "Your cart is empty !"}
      </h1>
      {total>0 ?
      <button className='Checkout' onClick={()=>{
        user?( alert("Checkout succeeded") , setCart([])) : navigate('/Login')
      }}>Check out</button>
    : <></>}
      
   </section>
  )
}

export default Cart