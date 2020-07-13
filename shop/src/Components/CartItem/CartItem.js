import React from "react";
import "./CartItem.css";
const CartItem = ({ img, title, price, currencyFormat, style }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__del"></div>
      <div className="cart-item__thumb">
        <img src={img} alt="Skuul" />
      </div>
      <div className="cart-item__details">
        <p className="title">{title}</p>
        <p className="desc">{style}</p>
      </div>
      <div className="cart-item__price">
        <p>
          {currencyFormat} {price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
