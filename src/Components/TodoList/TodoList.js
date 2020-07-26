import React, { useState } from "react";
import withStorage from "../../hoc/withStorage";

const TodoList = ({ saveToStorage }) => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Date.now(),
      text: input,
    };
    const newState = [...tasks, task];
    setTasks(newState);
    saveToStorage("tasks", newState);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={inputHandler} value={input} />
        <button>Save</button>
      </form>
      <ul>
        {tasks.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default withStorage(TodoList);
