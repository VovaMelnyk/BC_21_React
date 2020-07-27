import React, { useState } from "react";
import "./TodoList.css";
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
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks((state) => state.filter((el) => el.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={inputHandler} value={input} />
        <button>Save</button>
      </form>
      <ul className="list">
        {tasks.map((el) => (
          <li className="item" onClick={() => deleteTask(el.id)} key={el.id}>
            {el.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
