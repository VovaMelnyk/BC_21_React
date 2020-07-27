import React, { useContext } from "react";
import SimpleContext from "../../context/simpleContext";
import "./Green.css";
const Green = () => {
  const context = useContext(SimpleContext);
  return <div className="green">{context.number}</div>;
};

export default Green;
