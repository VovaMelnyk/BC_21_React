import React, { useState } from "react";
import "./HookForm.css";

const initialState = {
  title: "",
  author: "",
  priority: "Low",
  agree: false,
};

const HookForm = ({ addTask }) => {
  const [{ title, author, priority, agree }, setForm] = useState({
    ...initialState,
  });

  const inputHandler = ({ target }) => {
    const { value, name, type, checked } = target;
    setForm((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!agree) {
      return;
    }

    const singleTask = {
      title,
      author,
      priority,
      agree,
      status: false,
      id: Date.now(),
    };
    addTask(singleTask);
    setForm(initialState);
  };

  return (
    <form className="NewTodoForm" autoComplete="off" onSubmit={submitHandler}>
      <input
        className="NewTodoForm__name"
        type="text"
        name="title"
        placeholder="New Todo"
        onChange={inputHandler}
        value={title}
      />
      <input
        className="NewTodoForm__name"
        type="text"
        name="author"
        placeholder="Author"
        onChange={inputHandler}
        value={author}
      />

      <select
        name="priority"
        className="NewTodoForm__select"
        onChange={inputHandler}
        value={priority}
      >
        <option value="Priority" disabled hidden>
          Priority
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <label htmlFor="agree" className="confirm">
        <input
          type="checkbox"
          id="agree"
          name="agree"
          onChange={inputHandler}
          checked={agree}
        />{" "}
        Agree with our policy
      </label>
      <button className="NewTodoForm__submit" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default HookForm;
