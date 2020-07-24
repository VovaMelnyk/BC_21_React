import React, { Component } from "react";

const withStorage = (NestedComponent) => {
  return class extends Component {
    saveToStorage = (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        throw new Error(error);
      }
    };

    getFromStorage = (key) => {
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (error) {
        throw new Error(error);
      }
    };

    removeFromStorage = (key) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        throw new Error(error);
      }
    };

    render() {
      return (
        <NestedComponent
          {...this.props}
          saveToStorage={this.saveToStorage}
          getFromStorage={this.getFromStorage}
          removeFromStorage={this.removeFromStorage}
        />
      );
    }
  };
};

export default withStorage;
