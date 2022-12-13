import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { items } = props;
  return (
    <div className="summary">
      <h1>Order Summary</h1>
      <div className="cart-detail">
        <p>Selected Items : {items.length}</p>
        <p>Total Price : </p>
        <p>Total Shipping Charge : </p>
        <p>Tax : </p>
        <h3>Grand Total : </h3>
        <button className="btn-clear-cart">Clear Cart</button>
        <button className="btn-review-order">Review Order</button>
      </div>
    </div>
  );
};

export default Cart;
