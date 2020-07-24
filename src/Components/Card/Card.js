import React from "react";
import withToggle from "../../hoc/withToggle";

const Card = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>Card Title</h1>
      <p>Card Content</p>
      {props.open && (
        <ul>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
          <li>Item5</li>
          <li>Item6</li>
          <li>Item7</li>
          <li>Item8</li>
        </ul>
      )}
      <button onClick={props.toggle}>Show more</button>
    </div>
  );
};

export default withToggle(Card);
