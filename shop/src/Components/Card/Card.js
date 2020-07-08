import React from 'react';

const Card = ({image, title, price, priceFormat, shipping}) => {
    return (
        <div className="card-item">
            {/* {shipping ? <div className="card-stopper">Free shipping</div> : null} */}
            {shipping && <div className="card-stopper">Free shipping</div>}
            <div className="card-item__thumb">
                <img
                    src={image}
                    alt="Cat Tee Black T-Shirt"
                />
            </div>
            <p className="card-item__title">{title}</p>
            <div className="card-item__price">
                <div className="val">
                    {priceFormat} {price}
          </div>
            </div>
            <div className="card-item__buy-btn">Add to cart</div>
        </div>
    );
};

export default Card;