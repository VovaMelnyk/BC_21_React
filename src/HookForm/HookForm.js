import React, { useState } from "react";
import "./HookForm.css";

const HookForm = () => {
  return (
    <form className="NewTodoForm" autoComplete="off">
      <input
        className="NewTodoForm__name"
        type="text"
        name="title"
        placeholder="New Todo"
      />
      <input
        className="NewTodoForm__name"
        type="text"
        name="author"
        placeholder="Author"
      />
      <select name="priority" className="NewTodoForm__select">
        <option value="Priority" disabled hidden>
          Priority
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <label htmlFor="agree" className="confirm">
        <input type="checkbox" id="agree" name="agree" /> Agree with our policy
      </label>
      <button className="NewTodoForm__submit" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default HookForm;
