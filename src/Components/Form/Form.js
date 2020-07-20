import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <form className="search-form">
      <input type="text" name="search" />
      <select name="type">
        <option value="users">users</option>
        <option value="repositories">repositories</option>
      </select>
      <button>Search</button>
    </form>
  );
};

export default Form;
