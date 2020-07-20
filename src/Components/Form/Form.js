import React, { useState } from "react";
import "./Form.css";
import { withCredentials, request } from "../../helpers/request";
const Form = ({ updateUsers, loaderToggle, errorToggle }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("users");

  const inputHandler = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const selectHandler = ({ target }) => {
    const { value } = target;
    setType(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = withCredentials(
      `https://api.github.com/search/${type}?q=${search}&`
    );
    try {
      await loaderToggle(true);
      await errorToggle(false);
      const result = await request("get", url);
      updateUsers(result.items);
    } catch (error) {
      errorToggle(true);
    } finally {
      loaderToggle(false);
      setSearch("");
      setType("users");
    }
  };

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input type="text" name="search" value={search} onChange={inputHandler} />
      <select name="type" value={type} onChange={selectHandler}>
        <option value="users">users</option>
        <option value="repositories">repositories</option>
      </select>
      <button>Search</button>
    </form>
  );
};

export default Form;
