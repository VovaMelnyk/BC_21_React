import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import PropTypes from "prop-types";

const Cart = ({ cartStatus, switchCart, order, removeFromCart }) => {
  const countTotal = () => {
    return order
      .reduce((acc, orderItem) => acc + orderItem.price * orderItem.count, 0)
      .toFixed(2);
  };

  const countTotalQuantity = () => {
    return order.reduce((acc, orderItem) => acc + orderItem.count, 0);
  };

  return (
    <div className={cartStatus ? "float-cart float-cart--open" : "float-cart"}>
      {/* <!-- cart icon start  --> */}
      <span className="bag bag--float-cart-closed" onClick={switchCart}>
        <span className="bag__quantity">{countTotalQuantity()}</span>
      </span>
      {/* <!-- cart icon end --> */}
      <div className="float-cart__content">
        <div className="float-cart__header">
          <span className="bag">
            <span className="bag__quantity">{countTotalQuantity()}</span>
          </span>
          <span className="float-cart__header-title">Cart </span>
        </div>
        <div className="float-cart__card-container">
          {order.map((orderItem) => (
            <CartItem
              key={orderItem.id}
              {...orderItem}
              removeFromCart={removeFromCart}
            />
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
