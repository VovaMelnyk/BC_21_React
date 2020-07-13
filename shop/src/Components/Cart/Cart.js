import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import PropTypes from "prop-types";

const Cart = ({ cartStatus, switchCart, order }) => {
  const countTotal = () => {
    return order.reduce((acc, orderItem) => acc + orderItem.price, 0);
  };

  return (
    <div className={cartStatus ? "float-cart float-cart--open" : "float-cart"}>
      {/* <!-- cart icon start  --> */}
      <span className="bag bag--float-cart-closed" onClick={switchCart}>
        <span className="bag__quantity">{order.length}</span>
      </span>
      {/* <!-- cart icon end --> */}
      <div className="float-cart__content">
        <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">{order.length}</span>
          </span>
          <span className="float-cart__header-title">Cart </span>
        </div>
        <div className="float-cart__card-container">
          {order.map((orderItem) => (
            <CartItem key={orderItem.id} {...orderItem} />
          ))}
        </div>
        <div className="float-cart__footer">
          <div className="total">
            <p className="sub">TOTAL</p>
            <p className="price-total">$ {countTotal()}</p>
          </div>
          <div className="buy-btn">Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  cartStatus: PropTypes.bool.isRequired,
  switchCart: PropTypes.func.isRequired,
};
