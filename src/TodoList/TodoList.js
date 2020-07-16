import React, { useState, Component } from "react";
import Form from "../Form/Form";
import Todo from "../Todo/Todo";
import "./TodoList.css";
import HookForm from "../HookForm/HookForm";

class TodoList extends Component {
  state = {
    tasks: [],
    type: "all",
  };

  changeFilter = ({ target }) => {
    const type = target.dataset.filter;
    this.setState({
      type,
    });
  };

  filterTask = () => {
    switch (this.state.type) {
      case "all":
        return this.state.tasks;
      case "completed":
        return this.state.tasks.filter((task) => task.status === true);
      case "uncompleted":
        return this.state.tasks.filter((task) => task.status === false);
      default:
        return this.state;
    }
  };

  addTask = (taskObj) => {
    this.setState((prev) => ({
      tasks: [...prev.tasks, taskObj],
    }));
  };

  deleteTask = (id) => {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((task) => task.id !== id),
    }));
  };

  editTask = (index) => {
    const newTasksArr = [...this.state.tasks];
    const task = newTasksArr[index]; // newTaskArr[0]
    task.status = true;
    newTasksArr[index] = task;
    this.setState({
      tasks: newTasksArr,
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="TodoList">
        <h1 className="TodoList__title">Todo list</h1>
        {/* <Form addTask={this.addTask} /> */}
        <HookForm addTask={this.addTask} />
        <ul className="TodoList__todos">
          {this.filterTask().map((todo, index) => (
            <li key={todo.id}>
              <Todo
                {...todo}
                deleteTask={this.deleteTask}
                editTask={this.editTask}
                itemIndex={index}
              />
            </li>
          ))}
        </ul>
        <div className="filters">
          <button
            className="NewTodoForm__submit"
            data-filter="all"
            onClick={this.changeFilter}
          >
            All
          </button>
          <button
            className="NewTodoForm__submit"
            data-filter="completed"
            onClick={this.changeFilter}
          >
            Completed
          </button>
          <button
            className="NewTodoForm__submit"
            data-filter="uncompleted"
            onClick={this.changeFilter}
          >
            Uncompleted
          </button>
        </div>
      </div>
    );
  }
}

// const TodoList = () => {
// return (
//   <div className="TodoList">
//     <h1 className="TodoList__title">Todo List</h1>
//     <Form />
//     {/* <HookForm /> */}
//     <ul className="TodoList__todos">
//       {[].map((todo, index) => (
//         <li key={todo.id}>
//           <Todo />
//         </li>
//       ))}
//     </ul>
//     <div className="filters">
//       <button className="NewTodoForm__submit" data-filter="all">
//         All
//       </button>
//       <button className="NewTodoForm__submit" data-filter="completed">
//         Completed
//       </button>
//       <button className="NewTodoForm__submit" data-filter="uncompleted">
//         Uncompleted
//       </button>
//     </div>
//   </div>
// );
// };

export default TodoList;
