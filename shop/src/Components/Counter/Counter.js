import React, { Component } from "react";
import PropTypes, { func } from "prop-types";
import classes from "./Counter.module.css";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 10,
  //   };
  //   this.plus = this.plus.bind(this);
  // }

  state = {
    count: 10,
  };

  // plus() {
  //   // this.state.count = 11;
  //   console.log(this);
  // }

  // plus = () => {
  //   this.setState(
  //     (prevState) => ({
  //       count: prevState.count + 1,
  //     }),
  //     () => console.log('new state', this.state)
  //   );
  // };

  plus = async () => {
    await this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    console.log("new state", this.state);
  };

  minus = () => {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  // plus = () => {
  //   this.setState((prevState) => {
  //     console.log("prevState", prevState);
  //     return {
  //       count: prevState.count + 1,
  //     };
  //   });
  // };

  render() {
    return (
      <div className={classes.Container}>
        <h1>Counter</h1>
        <div className={classes.Count}>{this.state.count}</div>
        <div>
          <button onClick={this.minus}>-</button>
          <button onClick={this.reset}>0</button>
          {/* <button onClick={this.plus.bind(this)}>+</button> */}
          <button onClick={this.plus}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;

// const state = { count: 10 };
// state.count = 0;

// state = {
//   user: {
//     name: "Bob",
//     age: 12,
//     status: {
//       isPremium: false,
//     },
//   },
// };
