import React, { useState } from "react";
import HookForm from "../HookForm/HookForm";
import Todo from "../Todo/Todo";
import "./TodoListHook.css";
const TodoListHook = () => {
  const [type, setType] = useState("all");
  const [tasks, setTasks] = useState([]);

  const changeFilter = ({ target }) => {
    const filterType = target.dataset.filter;
    setType(filterType);
  };

  const addTask = (taskObj) => {
    setTasks((state) => [...state, taskObj]);
  };

  const deleteTask = (id) => {
    setTasks((state) => state.filter((task) => task.id !== id));
  };

  const editTask = (index) => {
    const newTasksArr = [...tasks];
    const task = newTasksArr[index];
    task.status = true;
    newTasksArr[index] = task;
    setTasks(newTasksArr);
  };

  const filterTask = () => {
    switch (type) {
      case "all":
        return tasks;
      case "completed":
        return tasks.filter((task) => task.status);
      case "uncompleted":
        return tasks.filter((task) => !task.status);
      default:
        return tasks;
    }
  };

  return (
    <div className="TodoList">
      <h1 className="TodoList__title">Todo list</h1>
      <HookForm addTask={addTask} />
      <ul className="TodoList__todos">
        {filterTask().map((todo, index) => (
          <li key={todo.id}>
            <Todo
              {...todo}
              deleteTask={deleteTask}
              editTask={editTask}
              itemIndex={index}
            />
          </li>
        ))}
      </ul>
      <div className="filters">
        <button
          className="NewTodoForm__submit"
          data-filter="all"
          onClick={changeFilter}
        >
          All
        </button>
        <button
          className="NewTodoForm__submit"
          data-filter="completed"
          onClick={changeFilter}
        >
          Completed
        </button>
        <button
          className="NewTodoForm__submit"
          data-filter="uncompleted"
          onClick={changeFilter}
        >
          Uncompleted
        </button>
      </div>
    </div>
  );
};

export default TodoListHook;
