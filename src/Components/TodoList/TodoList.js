import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputHandler, inputClear } from "../../redux/actions/formAction";
import "./TodoList.css";
import { addTask, deleteTask, editTask } from "../../redux/actions/taskAction";
const TodoList = () => {
  const input = useSelector((state) => state.input);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const formDataChange = (e) => {
    dispatch(inputHandler(e));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const task = { text: input, id: Date.now(), status: false };
    dispatch(addTask(task));
    dispatch(inputClear());
  };

  const deleteItem = (id) => {
    dispatch(deleteTask(id));
  };

  const editItem = (id) => {
    dispatch(editTask(id));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={formDataChange} />
        <button>Save</button>
      </form>
      <ul className="list">
        {tasks.map((el) => (
          <li
            className={el.status ? "item item__complete" : "item"}
            key={el.id}
          >
            {el.text}
            <button onClick={() => deleteItem(el.id)}>Delete</button>
            <button onClick={() => editItem(el.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
