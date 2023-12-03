import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import { cart_icon } from '../assets';
import { CartContext } from '../context/CartContext';

function ProductDetails() {

    const param = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const {cart,setCart} = useContext(CartContext);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+param.id).then(response => {
                return response.json()
            })
            .then(data => {
                setProduct(data)
            })
            }, []);

            console.log(product);


  return (
    <section className="product-destails-section">
      <nav className='navbar'>
            <p className='logo'>Shopy</p>
            <ul className='navbar-items'>
                <li className='navbar-item'  onClick={()=>navigate("/")}>Home</li>
                <li className='navbar-item'>Men</li>
                <li className='navbar-item'>Women</li>
                <li className='navbar-item'>Contact</li>
            </ul>
            <div className='cart-icon' onClick={()=>navigate("/Cart")}>
                <img src={cart_icon} alt="" />
                <div className='cart-icon-objects'>{cart.length}</div>
            </div>
        </nav>
        
        <div className="product-details">
          <div className="product-img">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="details">
            <div className='details-group'>
              <h3 className='title'>{product.title}</h3>
              <p className='description'>{product.description}</p>
              <div className="edit-quantity">
                <button onClick={()=>setQuantity(quantity+1)}>+</button>
                <p> {quantity} </p>
                <button onClick={()=>{
                  quantity>1 ? 
                  setQuantity(quantity-1)
                  :setQuantity(1)
                  }}>-</button>
              </div>
              <p className='price'>{quantity>0 ? product.price*quantity : product.price} $</p>
            </div>
              
              <button onClick={()=> {
                const isInCart = cart.some(item => item.id === product.id);
                !isInCart?
                setCart([...cart,{id:product.id, title: product.title, price: product.price, image: product.image, quantity: quantity}])
                :
                setCart(
                  cart.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                  )
                )
                }}>Add to cart</button>
          </div>
      </div>
        
      
    </section>
  )
}

export default ProductDetails