import React from "react";
import Blue from "../Blue/Blue";
import SimpleContext from "../../context/simpleContext";
import "./Red.css";
const Red = () => {
  return (
    <SimpleContext.Consumer>
      {(context) => (
        <div className="red">
          <p>{context.number}</p>
          <Blue />
        </div>
      )}
    </SimpleContext.Consumer>
  );
};

export default Red;
