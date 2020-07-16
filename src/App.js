import React from "react";
import TodoList from "./TodoList/TodoList";
import "./App.css";
import TodoListHook from "./TodoListHook/TodoListHook";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <TodoList /> */}
        <TodoListHook />
      </div>
    );
  }
}

export default App;
