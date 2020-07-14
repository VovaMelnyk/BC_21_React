import React from "react";
import "./Todo.css";
const Todo = () => {
  return (
    <div className="Todo">
      <div>
        <p className={`Todo__name`}>TITLE</p>
        <p className={`Todo__priority`}>PRIORITY priority</p>
        <p className={`Todo__author`}>AUTHOR</p>
      </div>
      <span className="Todo__remove">
        <i className="fas fa-trash" />
      </span>
    </div>
  );
};

export default Todo;

// ${status && "done"}
