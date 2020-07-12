import React from "react";
import "./Main.css";
import Filters from "../Filters/Filters";
import CardsCollection from "../CardsCollection/CardsCollection";
import products from "../../db/products.json";

const Main = () => {
  return (
    <main>
      <Filters />
      <CardsCollection products={products} />
    </main>
  );
};

export default Main;
