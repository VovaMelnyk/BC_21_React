import React from "react";
import TodoList from "./Components/TodoList/TodoList";
import Counter from "./Components/Counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      <Counter title="Counter" />
    </div>
  );
}

export default App;
