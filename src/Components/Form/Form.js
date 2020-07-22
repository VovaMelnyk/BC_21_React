import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Form.css";
const Form = ({ search, inputHandler, getUsers, resetForm }) => {
  const history = useHistory();
  const location = useLocation();
  const submitHandler = (e) => {
    e.preventDefault();
    getUsers(search);
    resetForm();
    history.push({ ...location, search: `?userName=${search}` });
    console.log(location);
  };
  return (
    <form className="search-form" onSubmit={submitHandler}>
      <input type="text" name="search" value={search} onChange={inputHandler} />
      <button>Search</button>
    </form>
  );
};

export default Form;
