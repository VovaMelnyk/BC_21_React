import React from "react";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import TodoList from "./Components/TodoList/TodoList";
import IsAuth from "./renderProp/isAuth";
import Storage from "./renderProp/Storage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <IsAuth>{(props) => <Header user={props.userExist} />}</IsAuth>
      <Card />
      <Storage>
        {({ saveToStorage }) => <TodoList saveToStorage={saveToStorage} />}
      </Storage>
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
