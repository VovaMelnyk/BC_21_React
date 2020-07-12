import React from "react";
import "./CartItem.css";
const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__del"></div>
      <div className="cart-item__thumb">
        <img
          src="https://i.ibb.co/YfKsBj0/8552515751438644-1.jpg"
          alt="Skuul"
        />
      </div>
      <div className="cart-item__details">
        <p className="title">Skuul</p>
        <p className="desc">Black T-Shirt with front print</p>
        <p className="desc">Quantity: 1</p>
      </div>
      <div className="cart-item__price">
        <p>$ 14.00</p>
        <button disabled="" className="change-product-button">
          -
        </button>
        <button className="change-product-button">+</button>
      </div>
    </div>
  );
};

export default CartItem;
