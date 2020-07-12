import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
const Cart = () => {
  return (
    <div className="float-cart float-cart--open">
      {/* <!-- cart icon start  --> */}
      <span className="bag bag--float-cart-closed">
        <span className="bag__quantity">16</span>
      </span>
      {/* <!-- cart icon end --> */}
      <div className="float-cart__content">
        <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">16</span>
          </span>
          <span className="float-cart__header-title">Cart </span>
        </div>
        <div className="float-cart__card-container">
          <CartItem />
        </div>
        <div className="float-cart__footer">
          <div className="total">
            <p className="sub">TOTAL</p>
            <p className="price-total">$ 177.50</p>
          </div>
          <div className="buy-btn">Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
