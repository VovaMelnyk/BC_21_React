import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  componentWillMount() {
    // mount old
    console.log("Will mount");
  }

  removeItem = () => {
    this.props.deleteTask(this.props.id);
  };

  editItem = () => {
    this.props.editTask(this.props.itemIndex);
  };

  componentDidMount() {
    // mount
    console.log("Component did mount");
  }

  componentWillReceiveProps() {
    // update old
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    // update old
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevState, prevProps, snapshot) {
    console.log("componentDidUpdate");
    // div.scrollTop = snapshot;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  static getDerivedStateFromProps() {
    // this - відсутній
  }

  getSnapshotBeforeUpdate() {
    // const poisition = div.scrollTop;
    // return poisition;
  }

  render() {
    console.log("render");
    const { title, priority, author, status } = this.props;
    return (
      <div className="Todo">
        <div onClick={this.editItem}>
          <p className={`Todo__name  ${status && "done"}`}>{title}</p>
          <p className={`Todo__priority  ${status && "done"}`}>
            {priority} priority
          </p>
          <p className={`Todo__author  ${status && "done"}`}>{author}</p>
        </div>
        <span className="Todo__remove" onClick={this.removeItem}>
          <i className="fas fa-trash" />
        </span>
      </div>
    );
  }
}

// const Todo = ({
// title,
// priority,
// author,
// deleteTask,
// id,
// status,
// editTask,
// itemIndex,
// }) => {
// const removeItem = () => {
//   deleteTask(id);
// };
// const editItem = () => {
//   editTask(itemIndex);
// };
//   return (
// <div className="Todo">
//   <div onClick={editItem}>
//     <p className={`Todo__name  ${status && "done"}`}>{title}</p>
//     <p className={`Todo__priority  ${status && "done"}`}>
//       {priority} priority
//     </p>
//     <p className={`Todo__author  ${status && "done"}`}>{author}</p>
//   </div>
//   <span className="Todo__remove" onClick={removeItem}>
//     <i className="fas fa-trash" />
//   </span>
// </div>
//   );
// };

export default Todo;
