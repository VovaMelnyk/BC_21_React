import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <form className="search-form">
      <input type="text" name="search" />
      <button>Search</button>
    </form>
  );
};

export default Form;
