import React, { Component } from "react";

// const withAuth = (NestedComponent) => {
//   // Header
//   return class extends Component {
//     render() {
//   const user = { name: "Bob", age: 23 };
//   const isAuth = Object.keys(user).length > 0;
//       return <NestedComponent isAuth={isAuth} {...this.props} />; // Header isAuth={isAuth} title='Header'
//     }
//   };
// };

// export default withAuth;

// const withAuth = (NestedComponent) => {
//   const user = { name: "Bob", age: 23 };
//   const isAuth = Object.keys(user).length > 0;
//   const newComponent = (props) => {
//     return <NestedComponent {...props} isAuth={isAuth} />;
//   };
//   return newComponent;
// };

// export default withAuth;

const withAuth = (NestedComponent) => {
  const user = { name: "Bob", age: 23 };
  const isAuth = Object.keys(user).length > 0;
  return (props) => <NestedComponent {...props} isAuth={isAuth} />;
};

export default withAuth;
