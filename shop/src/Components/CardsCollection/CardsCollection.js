import React from "react";
import "./CardsCollection.css";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const CardsCollection = ({ products, helloFunc }) => {
  return (
    <div className="card-container">
      <div className="card-container__header">
        <small className="products-found">
          <span>16 Product(s) found</span>
        </small>
        <div className="sort">
          Order by
          <select>
            <option value="">Select</option>
            <option value="low">Lowest to highest</option>
            <option value="high">Highest to lowest</option>
          </select>
        </div>
      </div>

      {products.map((product) => (
        <Card
          key={product.id}
          image={product.img}
          title={product.title}
          price={product.price}
          priceFormat={product.currencyFormat}
          shipping={product.isFreeShipping}
        />
      ))}
    </div>
  );
};

export default CardsCollection;

CardsCollection.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      availableSizes: PropTypes.arrayOf(PropTypes.string),
      style: PropTypes.string,
      price: PropTypes.number,
      currencyId: PropTypes.string,
      currencyFormat: PropTypes.string,
      isFreeShipping: PropTypes.bool,
      img: PropTypes.string,
    })
  ).isRequired,
  helloFunc: PropTypes.func,
};
