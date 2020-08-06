import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputHandler } from "../../redux/actions/formAction";
import { editTask } from "../../redux/actions/taskAction";
import { changeType } from "../../redux/actions/filterTypeAction";
import {
  userNameSelector,
  userCountrySelector,
  userZipCodeSelector,
} from "../../redux/selectors/userSelector";
import {
  taskSelector,
  tasksCountSelector,
  countUncompletedTaskSelector,
  countCompletedTaskSelector,
} from "../../redux/selectors/TodoSelectors";
import "./TodoList.css";
import {
  getTaskOperation,
  postTaskOperation,
  deleteTaskOperation,
  writeDataToFirestore,
  deleteDataFromFirestore,
  readDataFromFirestore,
} from "../../redux/operations/taskOperations";

const TodoList = () => {
  const input = useSelector((state) => state.input);
  const tasks = useSelector((state) => taskSelector(state));
  const type = useSelector((state) => state.filterType);
  const loader = useSelector((state) => state.loader);
  const name = useSelector((state) => userNameSelector(state));
  const country = useSelector((state) => userCountrySelector(state));
  const zipCode = useSelector((state) => userZipCodeSelector(state));
  const tasksTotal = useSelector((state) => tasksCountSelector(state));
  const uncompletedTaskCount = useSelector((state) =>
    countUncompletedTaskSelector(state)
  );
  const completedTaskCount = useSelector((state) =>
    countCompletedTaskSelector(state)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readDataFromFirestore("todoCollection"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const task = { text: input, status: false };
    dispatch(writeDataToFirestore("todoCollection", task));
  };

  const deleteItem = (id) => {
    dispatch(deleteDataFromFirestore("todoCollection", id));
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
      <p>User Name: {name}</p>
      <p>Country: {country}</p>
      <p>Zip code: {zipCode}</p>
      <p>Total task: {tasksTotal}</p>
      <p>Uncompleted Tasks: {uncompletedTaskCount}</p>
      <p>Completed Tasks: {completedTaskCount}</p>
      {loader ? (
        <h1>Loading...</h1>
      ) : (
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
      )}
    </div>
  );
};

export default TodoList;

// loader => request => setState => loader
// loader => request => setState (error) => loader

// asyncAction => loader => request => setState(action) => loader

// operation
