import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputHandler, inputClear } from "../../redux/actions/formAction";
import "./TodoList.css";
// import { addTask, deleteTask, editTask } from "../../redux/actions/taskAction";
import { addTask, deleteTask, editTask } from "../../redux/slice/todoSlice";
// import { changeType } from "../../redux/actions/filterTypeAction";
import { changeType } from "../../redux/slice/filterTypeSlice";
const TodoList = () => {
  const input = useSelector((state) => state.input);
  const tasks = useSelector((state) => state.tasks);
  const type = useSelector((state) => state.filterType);
  const dispatch = useDispatch();

  console.log(tasks);

  const filterTasks = () => {
    switch (type) {
      case "All":
        return tasks;
      case "Completed":
        return tasks.filter((task) => task.status);
      case "Uncompleted":
        return tasks.filter((task) => !task.status);
      default:
        return tasks;
    }
  };

  const formDataChange = (e) => {
    dispatch(inputHandler(e.target.value));
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

  const changeFilterType = (type) => {
    dispatch(changeType(type));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={formDataChange} />
        <button>Save</button>
      </form>
      <div className="filter">
        <button onClick={() => changeFilterType("All")}>All</button>
        <button onClick={() => changeFilterType("Completed")}>Completed</button>
        <button onClick={() => changeFilterType("Uncompleted")}>
          Uncompleted
        </button>
      </div>
      <ul className="list">
        {filterTasks().map((el) => (
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
