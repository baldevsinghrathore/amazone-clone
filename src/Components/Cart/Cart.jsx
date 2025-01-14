import React, { useContext } from 'react';
import { MyContext } from '../../context/data/MyContext';
import "../../App.css";
import { useNavigate } from 'react-router-dom';
const navigate =useNavigate;

const Cart = () => {
  const { cart, removeFromCart } = useContext(MyContext);
 console.log(cart);
 return (
  <div className="cartwrapper">
    
    <h2 className="cartTitle">Shopping Cart</h2>
    {cart.length === 0 ? (
      <p className="cartEmpty">Your cart is empty 🥺</p>

    ) : 
    (
      <div >
        {cart.map((product, index) => (
          <div key={index} className="cartItem">
            <img src={product.thumbnail} alt={product.title} className="cartItemImage" />
            <div className="cartItemDetails">
              <p className="cartItemName"><strong>Name:</strong> {product.title}</p>
              <p className="cartItemPrice"><strong>Price:</strong> ${product.price}</p>
              <button className="removeButton" onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
            <hr />
          </div>
    
        ))}
      </div>
    )}
  </div>
);
};

export default Cart;
