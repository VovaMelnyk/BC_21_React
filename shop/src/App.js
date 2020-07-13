import React, { Component } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Main from "./Components/Main/Main";
import Cart from "./Components/Cart/Cart";
import Counter from "./Components/Counter/Counter";
import products from "./db/products.json";

// const App = () => {
// return (
//   <>
//     <Header />
//     <Main />
//     <Cart />
//     {/* <Counter /> */}
//   </>
// );
// };

// export default App;

class App extends Component {
  state = {
    isCartOpen: false,
    order: [],
    products: products,
  };

  switchCart = () => {
    this.setState((prev) => ({
      isCartOpen: !prev.isCartOpen,
    }));
  };

  addToCart = (id) => {
    const item = this.state.products.find((product) => product.id === id);
    this.setState((prev) => ({
      order: [...prev.order, item],
    }));
  };

  render() {
    const { order, isCartOpen, products } = this.state;
    return (
      <>
        <Header />
        <Main products={products} addToCart={this.addToCart} />
        <Cart
          cartStatus={isCartOpen}
          switchCart={this.switchCart}
          order={order}
        />
      </>
    );
  }
}

export default App;
