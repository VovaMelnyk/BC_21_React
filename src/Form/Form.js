import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  formInitialState = {
    title: "",
    author: "",
    priority: "Low",
    agree: false,
  };

  state = {
    ...this.formInitialState,
  };

  inputHandler = ({ target }) => {
    const { value, name, type, checked } = target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  submitHandler = (e) => {
    const { title, author, priority, agree } = this.state;
    e.preventDefault();
    if (!agree) {
      return;
    }
    const singleTask = {
      title,
      author,
      priority,
      status: false,
      id: Date.now(),
    };
    this.props.addTask(singleTask);
    this.setState({ ...this.formInitialState });
  };

  render() {
    const { title, agree, author, priority } = this.state;
    return (
      <form
        className="NewTodoForm"
        autoComplete="off"
        onSubmit={this.submitHandler}
      >
        <input
          className="NewTodoForm__name"
          type="text"
          name="title"
          placeholder="New Todo"
          value={title}
          onChange={this.inputHandler}
        />
        <input
          className="NewTodoForm__name"
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={this.inputHandler}
        />
        <select
          name="priority"
          className="NewTodoForm__select"
          value={priority}
          onChange={this.inputHandler}
        >
          <option value="Priority" disabled hidden>
            Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <label htmlFor="agree" className="confirm">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={agree}
            onChange={this.inputHandler}
          />{" "}
          Agree with our policy
        </label>
        <button className="NewTodoForm__submit" type="submit">
          Add Todo
        </button>
      </form>
    );
  }
}

export default Form;
