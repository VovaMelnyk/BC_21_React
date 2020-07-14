import React from "react";
import "./CartItem.css";
const CartItem = ({
  img,
  title,
  price,
  currencyFormat,
  style,
  removeFromCart,
  id,
  count,
}) => {
  return (
    <div className="cart-item">
      <div className="cart-item__del" onClick={() => removeFromCart(id)}></div>
      <div className="cart-item__thumb">
        <img src={img} alt="Skuul" />
      </div>
      <div className="cart-item__details">
        <p className="title">{title}</p>
        <p className="desc">{style}</p>
        <p className="amount">Quantity: {count}</p>
      </div>
      <div className="cart-item__price">
        <p>
          {currencyFormat} {(price * count).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
