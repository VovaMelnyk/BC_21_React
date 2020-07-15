import React from "react";
import "./Todo.css";
const Todo = ({
  title,
  priority,
  author,
  deleteTask,
  id,
  status,
  editTask,
  itemIndex,
}) => {
  const removeItem = () => {
    deleteTask(id);
  };
  const editItem = () => {
    editTask(itemIndex);
  };
  return (
    <div className="Todo">
      <div onClick={editItem}>
        <p className={`Todo__name  ${status && "done"}`}>{title}</p>
        <p className={`Todo__priority  ${status && "done"}`}>
          {priority} priority
        </p>
        <p className={`Todo__author  ${status && "done"}`}>{author}</p>
      </div>
      <span className="Todo__remove" onClick={removeItem}>
        <i className="fas fa-trash" />
      </span>
    </div>
  );
};

export default Todo;

// ${status && "done"}
