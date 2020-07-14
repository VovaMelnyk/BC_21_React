import React, { Component, useState } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Main from "./Components/Main/Main";
import Cart from "./Components/Cart/Cart";
import Counter from "./Components/Counter/Counter";
import productsArr from "./db/products.json";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState(productsArr);

  const switchCart = () => {
    setIsCartOpen((state) => !state);
  };

  const removeFromCart = (id) => {
    setOrder((state) => state.filter((el) => el.id !== id));
  };

  const addToCart = (id) => {
    const item = products.find((product) => product.id === id);
    const checkCartItem = order.find((orderItem) => orderItem.id === id);
    if (checkCartItem) {
      editCartItem(id);
    } else {
      item.count = 1;
      setOrder((state) => [...state, item]);
    }
  };

  const editCartItem = (id) => {
    setOrder((state) => updateOrderState(state, id));
  };

  const updateOrderState = (state, id) => {
    return state.map((el) =>
      el.id === id ? { ...el, count: el.count++ } : el
    );
  };

  return (
    <>
      <Header />
      <Main products={products} addToCart={addToCart} />
      <Cart
        cartStatus={isCartOpen}
        order={order}
        switchCart={switchCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     isCartOpen: false,
//     order: [],
//     products: products,
//   };

//   switchCart = () => {
//     this.setState((prev) => ({
//       isCartOpen: !prev.isCartOpen,
//     }));
//   };

//   addToCart = (id) => {
//     const item = this.state.products.find((product) => product.id === id); // link products
//     const checkCartItem = this.state.order.find(
//       (orderItem) => orderItem.id === id
//     ); // link cart

//     if (checkCartItem) {
//       this.editCartItem(id);
//     } else {
//       item.count = 1;
//       this.setState((prev) => ({
//         order: [...prev.order, item],
//       }));
//     }
//   };

//   editCartItem = (id) => {
//     this.setState((prev) => ({
//       order: prev.order.map((orderItem) =>
//         orderItem.id === id
//           ? { ...orderItem, count: orderItem.count++ }
//           : orderItem
//       ),
//     }));
//   };

//   removeFromCart = (id) => {
//     this.setState((prev) => ({
//       order: prev.order.filter((orderItem) => orderItem.id !== id),
//     }));
//   };

//   render() {
//     const { order, isCartOpen, products } = this.state;
//     return (
//       <>
//         <Header />
//         <Main products={products} addToCart={this.addToCart} />
//         <Cart
//           cartStatus={isCartOpen}
//           switchCart={this.switchCart}
//           order={order}
//           removeFromCart={this.removeFromCart}
//         />
//         {/* <Counter /> */}
//       </>
//     );
//   }
// }

// export default App;
