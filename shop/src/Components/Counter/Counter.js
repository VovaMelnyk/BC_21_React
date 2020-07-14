import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import classes from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(20);

  const reset = () => {
    setCount(0);
  };

  const plus = () => {
    setCount((prev) => prev + 1);
  };

  const minus = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className={classes.Container}>
      <h1>Counter</h1>
      <div className={classes.Count}>{count}</div>
      <div>
        <button onClick={minus}>-</button>
        <button onClick={reset}>0</button>
        <button onClick={plus}>+</button>
      </div>
    </div>
  );
};

export default Counter;

// class Counter extends Component {
//   state = {
//     count: 10,
//   };

//   plus = async () => {
//     await this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));

//     console.log("new state", this.state);
//   };

//   minus = () => {
//     this.setState((prev) => ({
//       count: prev.count - 1,
//     }));
//   };

//   reset = () => {
//     this.setState({
//       count: 0,
//     });
//   };

//   render() {
//     return (
// <div className={classes.Container}>
//   <h1>Counter</h1>
//   <div className={classes.Count}>{this.state.count}</div>
//   <div>
//     <button onClick={this.minus}>-</button>
//     <button onClick={this.reset}>0</button>
//     <button onClick={this.plus}>+</button>
//   </div>
// </div>
//     );
//   }
// }

// export default Counter;
