import { Component } from "react";

export default class Storage extends Component {
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
    return this.props.children({
      saveToStorage: this.saveToStorage,
      getFromStorage: this.getFromStorage,
      removeFromStorage: this.removeFromStorage,
    });
  }
}
