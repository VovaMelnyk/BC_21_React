import React from "react";
import Header from "./Components/Header/Header";
import TodoList from "./Components/TodoList/TodoList";
import SimpleContextExample from "./SimpleContextExample/SimpleContextExample";
import "./App.css";
import GlobalData from "./context/Providers/GlobalData";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
    // <GlobalData>
    //   <SimpleContextExample />
    // </GlobalData>
  );
}

export default App;
