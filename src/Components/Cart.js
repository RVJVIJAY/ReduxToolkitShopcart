import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity ,removeitem} from '../redux/cartSlice';
import { CiTrash } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-total">Total: {totalAmount.toFixed(2)}</div>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="cart-item">
              <td>
                <img src={item.image} alt={item.title} className="cart-item-image" />
              </td>
              <td>{item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => dispatch(decrementQuantity(item.id))} className="quantity-btn">-</button>
                <span className="item-quantity">{item.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(item.id))} className="quantity-btn">+</button>
              </td>
              <td>${item.totalPrice.toFixed(2)}</td>
              <td><button onClick={()=>dispatch(removeitem(item.id))}> <FaTrashAlt /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
