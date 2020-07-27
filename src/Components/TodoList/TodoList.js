import React, { useState } from "react";
import withStorage from "../../hoc/withStorage";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TodoList.css";
const TodoList = ({ saveToStorage }) => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [alert, setAlert] = useState(false);

  const toggleModal = () => {
    setAlert((state) => !state);
  };

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

  const deleteTask = (id) => {
    setTasks((state) => state.filter((el) => el.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={inputHandler} value={input} />
        <button>Save</button>
      </form>
      {/* <ul className="list"> */}
      <TransitionGroup component="ul" className="list">
        {tasks.map((el) => (
          <CSSTransition key={el.id} classNames="list__item" timeout={800}>
            <li className="item" onClick={() => deleteTask(el.id)}>
              {el.text}
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      {/* </ul> */}
      {/* {alert && <div className="modal">Alert</div>} */}
      {/* <CSSTransition
        in={alert}
        classNames="modal"
        timeout={{ enter: 500, exit: 350 }}
        mountOnEnter
        unmountOnExit
      >
        <div className="modal">Alert</div>
      </CSSTransition>
      <button onClick={toggleModal}>Show modal</button> */}
    </div>
  );
};

export default withStorage(TodoList);
