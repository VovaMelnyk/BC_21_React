import React, { Component } from "react";
import SimpleContext from "../simpleContext";

class GlobalData extends Component {
  state = {
    number: 15,
    loader: false,
  };

  increment = () => {
    this.setState((prev) => ({
      number: prev.number + 1,
    }));
  };

  toggleLoader = (status) => {
    this.setState({
      loader: status,
    });
  };

  render() {
    console.log(this.props);
    return (
      <SimpleContext.Provider
        value={{
          number: this.state.number,
          loader: this.state.loader,
          increment: this.increment,
          toggleLoader: this.toggleLoader,
        }}
      >
        {this.props.children}
      </SimpleContext.Provider>
    );
  }
}

export default GlobalData;
