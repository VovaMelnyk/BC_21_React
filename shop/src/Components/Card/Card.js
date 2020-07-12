import React from "react";
import PropTypes from "prop-types";
import {
  CardItem,
  CardThumb,
  CardTitle,
  CardPrice,
  CardPriceValue,
  CardBtn,
} from "./Card.styled";
const Card = ({ shipping, image, title, priceFormat, price, type }) => {
  return (
    <CardItem>
      {shipping && <div className="card-stopper">Free shipping</div>}
      <CardThumb>
        <img src={image} alt="Cat Tee Black T-Shirt" />
      </CardThumb>
      <CardTitle>{title}</CardTitle>
      <CardPrice>
        <CardPriceValue>
          {priceFormat} {price}
        </CardPriceValue>
      </CardPrice>
      <CardBtn>Add to cart</CardBtn>
    </CardItem>
  );
};

export default Card;

Card.propTypes = {
  shipping: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  priceFormat: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string,
};

Card.defaultProps = {
  type: "card-item__buy-btn",
};
