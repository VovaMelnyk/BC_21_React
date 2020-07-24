import React, { Component } from "react";

class IsAuth extends Component {
  render() {
    const user = { name: "Bob", age: 23 };
    const isAuth = Object.keys(user).length > 0;
    return this.props.children({ userExist: isAuth });
  }
}

export default IsAuth;
