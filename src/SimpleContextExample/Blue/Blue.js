import React, { useContext } from "react";
import SimpleContext from "../../context/simpleContext";
import "./Blue.css";
import Green from "../Green/Green";
const Blue = () => {
  const context = useContext(SimpleContext);
  return (
    <div className="blue">
      <button onClick={context.increment}>Increment</button>
      <Green />
    </div>
  );
};

export default Blue;
