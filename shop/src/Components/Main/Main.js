import React from "react";
import "./Main.css";
import Filters from "../Filters/Filters";
import CardsCollection from "../CardsCollection/CardsCollection";

const Main = ({ products, addToCart }) => {
  return (
    <main>
      <Filters />
      <CardsCollection products={products} addToCart={addToCart} />
    </main>
  );
};

export default Main;
